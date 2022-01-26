import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { addGame } from 'src/app/modules/games/store/game.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tierValidation } from '../../validations/add-game.validation';


@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {

  addGame: FormGroup;
  tiers = ['free', 'paid'];

  constructor(private store: Store<AppState>, private router: Router, private fb: FormBuilder, private snackBar: MatSnackBar) {

    this.addGame = this.fb.group({
      name: ["", Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(25)])],
      description: ["", Validators.compose([Validators.required, Validators.maxLength(50)])],
      price: [0.00],
      imgUrl: [""],
      tier: ["free"]
    }, {validators:[ tierValidation('price', 'tier')]})
   }

  get tier(){
    return this.addGame.get('tier')
  }

  ngOnInit(): void {
  }

  postGame(){

    if (this.addGame.valid){
    this.store.dispatch(addGame({data: this.addGame.value}));
    this.snackBar.open('Game Added Successfully!', '', {
      duration: 2000
    });
    this.addGame.reset();
    this.router.navigate(['/games'])
    }else{
      this.snackBar.open('Adding a Game failed. Please try again.', '', {
        duration: 2000
      })
    }
  }

}
