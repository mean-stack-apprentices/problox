import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logoutUser } from 'src/app/store/actions/user/user.actions';
import { User } from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-main-nav-presentation',
  templateUrl: './main-nav-presentation.component.html',
  styleUrls: ['./main-nav-presentation.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class MainNavPresentationComponent implements OnInit {
   @Input() public roles:null | string[]=[] ;
   @Input() public loggedInUser:User | null=null;
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  logout() {

    this.store.dispatch(logoutUser());

  }


includeRole(role:string, roles:string[]|null){
  return roles?.includes(role)
}


}
