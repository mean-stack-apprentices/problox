import express, { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { userRouter } from "./user-route.js";

export const apiRouter = express.Router();

// Routes go here
apiRouter.use('/user', userRouter);

// resspone handler 
apiRouter.use((req, res, next) => {
    if (res.locals.data) {
      res.status(200).json({ data: res.locals.data });
    } else {
      next();
    }
  })

  // express error handling middleware
apiRouter.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err.name === 'ValidationError') {
      res.status(400).send(err);
    }
    console.log(Object.keys(err));
    res.status(500).send(err);
  });
  
  
  
  apiRouter.all("/*", function (req, res) {
    console.log('not found')
    res.sendStatus(404);
  });