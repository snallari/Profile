import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, group, animate} from '@angular/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
    animations: [trigger('flyInOut', [transition('void=>*', [style({transform: 'translateX(-100%)'}), animate('2s 3s ease-in', style({transform: 'rotate(180deg)'}))]),
    transition('void=>*', [style({transform: 'translateX(-100%)'})
    ])
    ])
    ]
})
export class NavigationComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
