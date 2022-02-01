import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

function intersection(arr1:string[], arr2:string[]) {
  return arr1.filter(item1 => arr2.some(item2 => item1 === item2))
}

@Injectable({
  providedIn: 'root',
})
export class RolesGuard implements CanActivate {
  constructor(private api: ApiService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

      let roles = route.data.roles as Array<string>;

    return this.api
      .get<{ message: string }>('users/logged-in-user')
      .pipe(map((data:any) => {
       console.log(data)
       console.log("Reles",roles)
       const userRoles = data.data.roles.map((role:any)=> role.name)
       return !!intersection(roles,userRoles).length
       }));
  }
}
