import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { AppState } from 'src/app/store';
import {
  createUser,
  updateUser,
} from 'src/app/store/actions/user/user.actions';
import { User } from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  addUser: FormGroup;
  selectedUser: User | null = null;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router,
    private userService: UserService,
  ) {
    this.addUser = this.fb.group({
      name: ['', Validators.required],
      username: [
        '',
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      email: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
    });
  }

  ngOnInit(): void {
    this.addUser.controls.username.valueChanges.pipe(debounceTime(700)).subscribe(() => {
      this.checkValidUsername();
    })
  }

  checkValidUsername() {
    let username = this.addUser.controls.username.value;
    this.userService.validUsername(username).subscribe();
  }

  postUser(selectedUser: User | null) {
    !selectedUser
      ? this.store.dispatch(createUser({ data: this.addUser.value }))
      : this.store.dispatch(
          updateUser({ data: { ...selectedUser, ...this.addUser.value } })
        );
    this.addUser.reset();
    // this.router.navigate(['login']);
  }
}
