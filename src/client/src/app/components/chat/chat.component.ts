import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  user = '';
  messageText = '';
  room='';
  messageArray: Array<{user: String , message: String }> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
