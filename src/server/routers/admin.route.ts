import express from "express";
import { UserModel } from "../schemas/user.schema.js";
import { authHandler } from "../middleware/auth.middleware.js";
import { roleHandler } from "../middleware/role.middleware.js";



// export const adminRouter = express.Router()
// adminRouter.use(authHandler);
// adminRouter.use(roleHandler('ADMIN'));
// adminRouter.post('create-merch')
// adminRouter.post('create-game')



