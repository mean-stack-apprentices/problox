import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EmailService {
  routeString = 'email/'

  constructor(private api:ApiService) { }
  sendEmail(data:any){
    return this.api.post(`${this.routeString}sendEmail`, data)
    }
}

