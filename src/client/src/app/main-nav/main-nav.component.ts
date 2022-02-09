import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../../../shared/models/user.model';
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

  constructor(
    private store:Store<AppState>,
     ) {

    this.store.select(loginUserSelector).
    subscribe(data => this.loginUser = data)
  }


  logout() {
    
    this.store.dispatch(logoutUser());
    
  }
}
