import { Component, Input, OnInit } from '@angular/core';
import { faCheckCircle as faSolidCheckCircle, faCoffee, faTimesCircle as faSolidTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-fa-icon',
  templateUrl: './fa-icon.component.html',
  styleUrls: ['./fa-icon.component.scss']
})
export class FaIconComponent implements OnInit {
  @Input()icon: string ='';

  icons: {[key:string]:any} = {
    faCheckCircle,
    faSolidCheckCircle,
    faCoffee,
    faTimesCircle,
    faSolidTimesCircle,
  }
  constructor() { }

  ngOnInit(): void {
  }

  getIcon(): any {
    return this.icons[this.icon]
  }

}
