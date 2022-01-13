import  mongoose from 'mongoose';
import { Chat } from '../../shared/models/chat.model.js';



const {Schema, model} = mongoose

const chatSchema = new Schema<Chat>({
sender: {type: String, required: true},
text: {type: String, required: true},
 
})

export const ChatModel = model<Chat>('Chat',chatSchema)