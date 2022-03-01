import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { loginUserSelector } from 'src/app/store/selectors/user/user.selectors';
import { User } from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  loginUser: User | null = null;

  constructor(private store: Store<AppState>) {
    this.store.select(loginUserSelector).subscribe(data => this.loginUser = data)
   }

  ngOnInit(): void {
  }





}
