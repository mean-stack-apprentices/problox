import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../../../shared/models/user.model';
import { UserService } from '../services/user.service';
import { AppState } from '../store';
import { logoutUser } from '../store/actions/user/user.actions';
import { loginUserSelector } from '../store/selectors/user/user.selectors';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

 loginUser: User | null = null;
 roles:string[] = []
 role:string|null=null

  constructor(
    private store:Store<AppState>, private userService:UserService
     ) {

    this.store.select(loginUserSelector).
    subscribe(data => this.loginUser = data)
    this.getRoles()
  }


  logout() {

    this.store.dispatch(logoutUser());

  }

   getRoles(){
     return this.userService.getLoggedInUserRoles().subscribe(data=>{
      this.roles = data
       this.role=this.roles[0]

     } );

   }







}
