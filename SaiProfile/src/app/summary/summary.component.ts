import {Item} from '../models/item';
import {IntroductionService} from '../services/introduction.service';
import {trigger, state, style, transition, group, animate} from '@angular/animations';
import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from "angularfire2/database";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  providers: [IntroductionService],
  animations: [trigger('flyInOut', [transition('void=>*', [style({transform: 'translateX(-100%)'}), animate('2s 3s ease-in', style({transform: 'rotate(180deg)'}))]),
  transition('void=>*', [style({transform: 'translateX(-100%)'})
  ])
  ])
  ]
})
export class SummaryComponent implements OnInit {

  items: FirebaseListObservable<Item[]>;

  constructor(private itemSvc: IntroductionService) {

  }
  ngOnInit(): void {
    this.items = this.itemSvc.getItemList({limitToLast: 5});
  }

}
