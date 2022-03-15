import mongoose from 'mongoose';
import { Tier } from '../../shared/models/tier.model.js';

const {Schema, model }  = mongoose;

const TierSchema = new Schema<Tier>({
    name: {type: String, required: true}
})

export const TierModel = model<Tier>('Tier', TierSchema)