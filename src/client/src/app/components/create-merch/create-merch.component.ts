import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store';
import { createMerch } from 'src/app/store/actions/merch/merch.actions';
import { errorMsgSelector, msgSelector } from 'src/app/store/selectors/merch/merch.selectors';

@Component({
  selector: 'app-create-merch',
  templateUrl: './create-merch.component.html',
  styleUrls: ['./create-merch.component.scss']
})
export class CreateMerchComponent implements OnInit, OnDestroy{
  createMerchForm: FormGroup;
  createMerchMsg: String | null = null;
  errorMsg: Error | null = null;
  subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
    ) 
  { 
    this.createMerchForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      description: ['', Validators.required],
      imgUrl: ['', Validators.required]
    });

    this.subscriptions.push(
      this.store.select(msgSelector).subscribe(data => this.createMerchMsg = data)
    );

    this.subscriptions.push(
      this.store.select(errorMsgSelector).subscribe(data => this.errorMsg= data)
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  createProduct()
  {
    this.store.dispatch(createMerch({data: this.createMerchForm.value}));
    this.createMerchForm.reset();
  }

  getErrorClassValue() {
    return {'error-msg-div': this.errorMsg};
  }

}
