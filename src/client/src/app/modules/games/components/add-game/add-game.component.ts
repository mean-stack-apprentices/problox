import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { addGame } from 'src/app/modules/games/store/game.actions';


@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {

  addGame: FormGroup;
  tiers = ['free', 'paid'];

  constructor(private store: Store<AppState>, private router: Router, private fb: FormBuilder) {

    this.addGame = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      description: ["", [Validators.required, Validators.maxLength(50)]],
      price: [0.00, [Validators.required]],
      imgUrl: [""],
      categories: ["free", [Validators.required]]
    })
   }

  get categories(){
    return this.addGame.get('categories')
  }

  ngOnInit(): void {
  }

  postGame(){
    this.store.dispatch(addGame({data: this.addGame.value}));
    this.addGame.reset();
    this.router.navigate(['/games'])
  }

}
