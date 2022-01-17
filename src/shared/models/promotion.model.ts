export interface Promotion {
    name: string,  
    description: string,
    validDates: string,
    discount: number,
    couponCodes: string,
    type: 'percent' | 'dollar', 
    _id?: string, 
}
