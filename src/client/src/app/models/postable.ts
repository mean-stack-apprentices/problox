import { Chat } from "../../../../shared/models/chat.model"
import { Game } from "../../../../shared/models/game.model"
import { User } from "../../../../shared/models/user.model"

export type Postable = User | Partial <User> | Partial <Chat> | Game | Partial <Game> 

