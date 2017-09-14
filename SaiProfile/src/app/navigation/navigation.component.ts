import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, group, animate} from '@angular/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [trigger('flyInOut', [transition('void=>*', [style({transform: 'translateX(-100%)'}), animate('2s 3s ease-in', style({transform: 'rotate(270deg)'}))]),
    transition('void=>*', [style({transform: 'translateX(-100%)'})
    ])
  ]), trigger('heightTrigger', [
    state('noHeight', style({height: 0})),
    state('fullHeight', style({height: '*'})),
    transition('noHeight <=> fullHeight', [animate('2000ms')])])
  ]
})

export class NavigationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
