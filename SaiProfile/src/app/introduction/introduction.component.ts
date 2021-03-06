import {Item} from '../models/item';
import {IntroductionService} from '../services/introduction.service';
import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from "angularfire2/database";
import {trigger, state, style, transition, group, animate} from '@angular/animations';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
  providers: [IntroductionService],
  animations: [trigger('flyInOut', [transition('void=>*', [style({transform: 'translateX(-100%)'}), animate('2s 3s ease-in', style({transform: 'rotate(180deg)'}))]),
  transition('*=>void', [style({transform: 'translateX(-100%)'})
  ])
  ])
  ]
})
export class IntroductionComponent implements OnInit {

  items: FirebaseListObservable<Item[]>;
  showDiv = true;

  constructor(private itemSvc: IntroductionService) {

  }
  ngOnInit(): void {
    this.items = this.itemSvc.getItemList({limitToLast: 5});
    console.log("shruti", this.items[0]);
  }

}
