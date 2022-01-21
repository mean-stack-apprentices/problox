import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { createMerch } from 'src/app/store/actions/merch/merch.actions';

@Component({
  selector: 'app-create-merch',
  templateUrl: './create-merch.component.html',
  styleUrls: ['./create-merch.component.scss']
})
export class CreateMerchComponent implements OnInit {
  createMerchForm: FormGroup;
  

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
    })
  }

  ngOnInit(): void {
  }

  createProduct()
  {
    this.store.dispatch(createMerch({data: this.createMerchForm.value}));
    this.createMerchForm.reset();
  }

}
