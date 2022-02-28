import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  roles$: Observable<string[]>;


  constructor(
    private store:Store<AppState>,
    private userService: UserService
     ) {

    this.store.select(loginUserSelector).
    subscribe(data => this.loginUser = data)

    this.roles$ = this.userService.getLoggedInUserRoles()
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
