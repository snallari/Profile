import {Component, trigger, transition, style, animate} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger('flyInOut', [transition('void=>*', [style({transform: 'translateX(-100%)'}), animate('2s 3s ease-in', style({transform: 'rotate(180deg)'}))]),
  transition('void=>*', [style({transform: 'translateX(-100%)'})
  ])
  ])
  ]
})
export class AppComponent {
  showDiv: boolean = false;
  title = 'Shruti Nallari';

}
