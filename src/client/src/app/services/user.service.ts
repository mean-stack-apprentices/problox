import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map, shareReplay } from 'rxjs/operators';
import { User } from '../../../../shared/models/user.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  selectedUserId = '';
  routeString = 'users/';
  constructor(private api: ApiService, private router: Router) {}

  getUsers() {
    return this.api
      .get<{ data: User[] }>(this.routeString)
      .pipe(map((res) => res.data));
  }
  createUser(user: User) {
    return this.api
      .post<{ data: User }>(`${this.routeString}create-user`, user)
      .pipe(map((res) => res.data));
  }
  login(user: Partial<User>) {
    return this.api
      .post<{ data: User }>(`${this.routeString}login`, user)
      .pipe(map((res) => res.data));
  }
  updateUser(user: User) {
    return this.api.put<User>(
      `${this.routeString}update-user/` + user._id,
      user
    );
  }

  deleteUser(user: User) {
    return this.api
      .delete<{ data: User }>(`${this.routeString}delete-user/` + user._id)
      .pipe(map((res) => res.data));
  }

  selectUser(id: string) {
    this.selectedUserId = id;
  }

  validUsername(username: string) {
    return this.api.post<{ validUsername: boolean }>(
      `${this.routeString}valid-username`,
      { username }
    );
  }

  logout() {
    this.router.navigate(['/login']);
    return this.api.get(`${this.routeString}logout`);
  }

  getLoggedInUserRoles(){
    return this.api
      .get<{data: User}>('users/logged-in-user')
      .pipe(map((res)=>{
        return res.data.roles.map((role:any)=> role.name)
      }));

  }
}

