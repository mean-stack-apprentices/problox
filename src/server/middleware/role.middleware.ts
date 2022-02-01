import { NextFunction, Request, Response } from "express";
import { Role } from "../../shared/models/role.model.js";
import { User } from "../../shared/models/user.model.js";
import { RoleModel } from "../schemas/role.schema.js";

interface RoleRequest extends Request {
  role?: Role;
  user?:User;
}


function intersection(arr1:string[], arr2:string[]) { 
    return arr1.filter(item1 => arr2.some(item2 => item1 === item2))
}


  
function roleAccess(roles:string[]){
    console.log("ROLEACCESS", roles)
   return function roleHandle(req: RoleRequest, res: Response, next: NextFunction) {
  console.log("userAuth",req.user)
        const role = RoleModel.find( {_id:{$in:req.user?.roles}})

          role
          .then((result:any)=>{
             const userRole = result.map((r:any)=>r.name)
            console.log("intersection",intersection(userRole,roles))
            if(intersection(userRole,roles).length){
                 next();
            }else{
                return res.status(403).json({
                    error:new Error('Incorrect Role')
                });
            }
              
          })
          
          .catch((err)=>{
            return res.status(403).json(err);

          })
    
}

}

export const roleHandler = roleAccess;