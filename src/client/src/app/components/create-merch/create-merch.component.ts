import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-merch',
  templateUrl: './create-merch.component.html',
  styleUrls: ['./create-merch.component.scss']
})
export class CreateMerchComponent implements OnInit {
  createMerchForm: FormGroup;

  constructor(private fb: FormBuilder) 
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

}
