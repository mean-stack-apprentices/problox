
type RoleType = 'ADMIN' | 'BASIC' | 'PRO';

export interface Role {
    _id: string;
    name: RoleType;
}