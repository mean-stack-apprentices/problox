
import type { User } from './user.model';
export interface Post {
    title: string;
    body: string;
    user: string | User;
}