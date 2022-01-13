import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import io from 'socket.io-client'
import { Observable, observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Chat } from '../../../../shared/models/chat.model'
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private api:ApiService) { }

  socket = io('http://localhost:3000/')

  joinRoom(data:any) {
    this.socket.emit('join', data)
  }
  newUserJoined() {
    let observable = new Observable<{user:String, message:String}>((observer:any) => {
      this.socket.on('new user joined', (data:any) => {
       observer.next(data)
      });
      return () => {this.socket.disconnect()}
    })
    return observable
  }

  leaveRoom(data: {user:String; room:String}){
    this.socket.emit('leave', data)
  }

  userLeftRoom() {
    let observable = new Observable<{user:String, message:String}>((observer: {
      next:any}) => {
        this.socket.on('left room', (data:any) => {
          observer.next(data);
        });
        return () => {this.socket.disconnect()}
      });
      return observable
  }

sendMessage(data:{user:string; message:string, room:string}) {
  this.socket.emit('message', data);
}
newMessageRecevied() {
  let observable = new Observable<{user:String, message:String}> ((observer: {
    next:any
  }) => {
    this.socket.on('new message', (data:any) => {
      observer.next(data)
    });
    return () => {this.socket.disconnect()}
  });
  return observable
}
createMessage(chat: Chat) {
  return this.api.post<{data: Chat}>('create-message', chat).pipe(map(res => res.data));
}
}
