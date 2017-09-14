import {Experience} from '../models/Portfolio/experience';
import {Summary} from '../models/Portfolio/summary';
import {ExperienceService} from '../services/experience.service';
import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from "angularfire2/database";
import {Observable} from 'rxjs/Observable';
import {trigger, state, style, transition, group, animate} from '@angular/animations';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  providers: [ExperienceService],
  animations: [trigger('flyInOut', [transition('void=>*', [style({transform: 'translateX(-100%)'}), animate('2s', style({transform: 'rotate(180deg)'}))]),
  transition('void=>*', [style({transform: 'translateX(-100%)'})
  ])
  ])
  ]
})
export class ExperienceComponent implements OnInit {
  summaryItem3: Summary;
  summaryItem2: Summary;
  summaryItem1: Summary;
  summaryItems: FirebaseListObservable<Summary[]>;
  show: boolean= false;


  constructor(private itemSvc: ExperienceService) {

  }
  ngOnInit(): void {
    this.show = true;
    this.summaryItems = this.itemSvc.getSummaryList({limitToLast: 5});
    this.summaryItems.forEach(item => {
      this.summaryItem1 = item[0];
      this.summaryItem2 = item[1];
      this.summaryItem3 = item[2];
    });
  }
}
