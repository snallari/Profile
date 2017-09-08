import {Experience} from '../models/Portfolio/experience';
import {ExperienceService} from '../services/experience.service';
import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from "angularfire2/database";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  providers: [ExperienceService]
})
export class WorkComponent implements OnInit {
  experienceItems: FirebaseListObservable<Experience[]>;

  constructor(private itemSvc: ExperienceService) {}

  ngOnInit() {
    this.experienceItems = this.itemSvc.getExperienceList({limitToLast: 14});
    console.log(this.experienceItems[0]);
  }

}
