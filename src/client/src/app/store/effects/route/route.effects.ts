import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { loginUserSuccess } from '../../actions/user/user.actions';



@Injectable()
export class RouteEffects {

  loginRoute$ = createEffect(() => this.actions$.pipe(ofType(loginUserSuccess),
  tap((action) => this.router.navigate(['games/users-games-list']))),
  {dispatch: false})

  constructor(
    private actions$: Actions,
    private router: Router,
    ) {}

}
