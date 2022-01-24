
export interface Admin {
    _id?: string,
    adminName: string,
    email: string,
    password?: string,
    role?: 'admin';
}