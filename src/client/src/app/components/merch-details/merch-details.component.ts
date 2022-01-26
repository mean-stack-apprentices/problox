import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { selectedMerchSelector } from 'src/app/store/selectors/merch/merch.selectors';
import { Merch } from '../../../../../shared/models/merch.model';

@Component({
  selector: 'app-merch-details',
  templateUrl: './merch-details.component.html',
  styleUrls: ['./merch-details.component.scss']
})
export class MerchDetailsComponent implements OnInit {
  selectedMerch$: Observable<Merch | null>;

  constructor(
    private store: Store<AppState>
  ) 
  { 
    this.selectedMerch$ = this.store.select(selectedMerchSelector);
  }

  ngOnInit(): void {
  }

}
