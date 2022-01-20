import express from "express";
import { userRouter } from "./user-route.js";
import { gameRouter } from "./game-route.js";
import { chatRouter } from "./chat-route.js";
export const apiRouter = express.Router();
// Routes go here
apiRouter.use('', userRouter);
apiRouter.use('', gameRouter);
apiRouter.use('', chatRouter);
// resspone handler 
apiRouter.use((req, res, next) => {
    if (res.locals.data) {
        res.status(200).json({ data: res.locals.data });
    }
    else {
        next();
    }
});
// express error handling middleware
apiRouter.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        res.status(400).send(err);
    }
    console.log(Object.keys(err));
    res.status(500).send(err);
});
apiRouter.all("/*", function (req, res) {
    console.log('not found');
    res.sendStatus(404);
});
//# sourceMappingURL=api.routes.js.map