import { Chat } from "../../../../shared/models/chat.model"
import { User } from "../../../../shared/models/user.model"

export type Postable = User | Partial <User> | Partial <Chat>

