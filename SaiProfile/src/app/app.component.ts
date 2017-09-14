import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // animations: [trigger('flyInOut', [transition('void=>*', [style({transform: 'translateX(-100%)'}), animate('2s 3s ease-in', style({transform: 'rotate(180deg)'}))]),
  //   transition('void=>*', [style({transform: 'translateX(-100%)'})
  //   ])
  // ]), trigger('heightTrigger', [
  //   state('noHeight', style({height: 0})),
  //   state('fullHeight', style({height: '*'})),
  //   transition('noHeight <=> fullHeight', [animate('2000ms')])])
  // ]
})
export class AppComponent {
  showDiv: boolean = false;
  title = 'Shruti Nallari';

}
