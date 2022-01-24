import express from "express";
import nodemailer from 'nodemailer';
export const emailRouter = express.Router();

emailRouter.post("/sendEmail", (req:any, res:any) => {
	let user = req.body;
	sendMail(user, (info: { messageId: any; }) => {
	  res.send(info);
    });
    async function sendMail(user:any, callback:any) {
   
        let transporter = nodemailer.createTransport({
          service: "Gmail",
          auth: {
            user:process.env.USER_EMAIL,
            pass:process.env.PASSWORD
          }
        });
        const fromEmail = `"Customer" <${req.body.email}>`
	let mailOptions = {
		from: {
			name: 'Consultation',
			address: req.body.email
            },
      to:process.env.USER_EMAIL,
            subject:user.subject,
            html:`<p>${user.textarea}</p>`+ req.body.email
        };
	let info = await transporter.sendMail(mailOptions);
  
	callback(info);
  }
   });
        