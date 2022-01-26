
import  mongoose from 'mongoose';
import { Friends} from '../../shared/models/friends.model.js';



const {Schema, model} = mongoose

const friendsSchema = new Schema<Friends>({
user: {type: mongoose.Types.ObjectId},
friends: {type: [], required: true},
 
})

export const FriendsModel = model<Friends>('Friends',friendsSchema)