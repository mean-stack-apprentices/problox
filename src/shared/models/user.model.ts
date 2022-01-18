
export interface User {
    _id?: string,
    name: string,
    username: string,
    email: string,
    password?: string,
    role: 'admin' | 'pro' | 'basic';
}