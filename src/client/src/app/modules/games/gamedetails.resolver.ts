import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { loadGames } from "../games/store/game.actions";


@Injectable({
  providedIn: 'root'
})

export class GameDetailsResolver implements Resolve<any>{

  constructor(private store: Store){}

  resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any>{
    this.store.dispatch(loadGames())
    return of(null)
  }
}
