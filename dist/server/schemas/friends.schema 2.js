import mongoose from 'mongoose';
import '../../shared/models/friends.model.js';
const { Schema, model } = mongoose;
const friendsSchema = new Schema({
    user: { type: mongoose.Types.ObjectId },
    text: { type: String, required: true },
});
export const FriendsModel = model('Friends', friendsSchema);
//# sourceMappingURL=friends.schema.js.map