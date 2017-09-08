import {Experience} from '../models/Portfolio/experience';
import {Summary} from '../models/Portfolio/summary';
import {ExperienceService} from '../services/experience.service';
import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from "angularfire2/database";
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  providers: [ExperienceService]
})
export class ExperienceComponent implements OnInit {
  summaryItem3: Summary;
  summaryItem2: Summary;
  summaryItems: FirebaseListObservable<Summary[]>;
  summaryItem1: Summary;

  constructor(private itemSvc: ExperienceService) {

  }
  ngOnInit(): void {
    this.summaryItems = this.itemSvc.getSummaryList({limitToLast: 5});
    if (this.summaryItems != null) {
      this.summaryItem1 = this.summaryItems[0];
      this.summaryItem2 = this.summaryItems[1];
      this.summaryItem3 = this.summaryItems[2];

    }
  }

  getItems() {

  }
}
