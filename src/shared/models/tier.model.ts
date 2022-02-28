type TierType = 'FREE' | 'PAID' | 'SUBSCRIPTION';

export interface Tier {
    _id: string;
    name: TierType;
}