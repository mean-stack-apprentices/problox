import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import * as socketIO from "socket.io";
import http from 'http';
import dotenv from "dotenv";
import path from 'path';
import { apiRouter } from './routers/api.routes.js';
dotenv.config();
const __dirname = path.resolve();
const app = express();
const server = http.createServer(app);
const clientPath = path.join(__dirname, '/dist/client');
app.use(express.static(clientPath));
const io = new socketIO.Server(server, { cors: {
        origin: '*'
    } });
const PORT = process.env.PORT || 3000;
mongoose
    .connect(`${process.env.MONGO_URL}`)
    .then(() => {
    console.log("Connected to DB Successfully");
})
    .catch((err) => console.log("Failed to Connect to DB", err));
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:4200', 'http://localhost:3501', 'http://localhost:8080']
}));
app.use(express.json());
app.use('/api', apiRouter);
server.listen(PORT, function () {
    // console.log(`starting at localhost http://localhost:${PORT}`);
});
io.on('connection', function (socket) {
    socket.on('join', function (data) {
        socket.join(data.room);
        io.emit('new user joined', { user: data.user, message: 'joined.' });
    });
    socket.on('leave', function (data) {
        io.emit('left room', { user: data.user, message: 'left room.' });
        socket.leave(data);
    });
    socket.on('message', function (data) {
        io.in(data.room).emit('new message', { user: data.user, message: data.message });
    });
});
app.all("*", function (req, res) {
    const filePath = path.join(__dirname, '/dist/client/index.html');
    res.sendFile(filePath);
});
//# sourceMappingURL=server.js.map