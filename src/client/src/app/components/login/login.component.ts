import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/services/user.service';
import { loginUser } from 'src/app/store/actions/user/user.actions';
// import { User } from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signInForm: FormGroup
  constructor(
    private userService: UserService,
    private store: Store,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.signInForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
    })
   }

  ngOnInit(): void {
  }

  signIn() {
    console.log(this.signInForm.value)
    // Without NGRX
    //this.userService.login(this.signInForm.value).subscribe();
    // With NGRX
    this.store.dispatch(loginUser(this.signInForm.value));
    //this.router.navigate(['home'])
  }
}

