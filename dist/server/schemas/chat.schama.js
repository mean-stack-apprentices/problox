import mongoose from 'mongoose';
import '../../shared/models/chat.model.js';
const { Schema, model } = mongoose;
const chatSchema = new Schema({
    sender: { type: String, required: true },
    text: { type: String, required: true },
});
export const ChatModel = model('Chat', chatSchema);
//# sourceMappingURL=chat.schama.js.map