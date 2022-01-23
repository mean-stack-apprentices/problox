import express from "express";
import nodemailer from 'nodemailer';
export const emailRouter = express.Router();
emailRouter.post("/sendEmail", (req, res) => {
    let user = req.body;
    sendMail(user, (info) => {
        res.send(info);
    });
    async function sendMail(user, callback) {
        let transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.PASSWORD
            }
        });
        const fromEmail = `"Customer" <${req.body.email}>`;
        let mailOptions = {
            from: {
                name: 'Consultation',
                address: req.body.email
            },
            to: process.env.USER_EMAIL,
            subject: user.subject,
            html: `<p>${user.textarea}</p>` + req.body.email
        };
        let info = await transporter.sendMail(mailOptions);
        callback(info);
    }
});
//# sourceMappingURL=email-route.js.map