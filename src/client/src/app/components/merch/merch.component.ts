import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { loadMerchs, selectMerch } from 'src/app/store/actions/merch/merch.actions';
import { merchSelector } from 'src/app/store/selectors/merch/merch.selectors';
import { Merch } from '../../../../../shared/models/merch.model';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.scss']
})
export class MerchComponent implements OnInit {
  merch$: Observable<Merch[]>
  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) 
  {
    this.store.dispatch(loadMerchs());
    
    this.merch$ = this.store.select(merchSelector);
  }

  ngOnInit(): void {
  }

  navigateToDetails(merch: Merch) {
    this.router.navigate(['merch-details']);
    this.store.dispatch(selectMerch({data: merch}))
  }

}
