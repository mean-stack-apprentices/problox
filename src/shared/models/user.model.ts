import { Role } from "./role.model.js";

export interface User {
    _id?: string,
    name: string,
    username: string,
    email: string,
    password?: string,
    roles: [Role];
}