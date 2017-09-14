import {Experience} from '../models/Portfolio/experience';
import {ExperienceService} from '../services/experience.service';
import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from "angularfire2/database";
import {trigger, state, style, transition, group, animate} from '@angular/animations';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  providers: [ExperienceService],
  animations: [trigger('flyInOut', [transition('void=>*', [style({transform: 'translateX(-100%)'}), animate('5s 3s ease-in', style({transform: 'rotate(180deg)'}))]),
  transition('void=>*', [style({transform: 'translateX(-100%)'})
  ])
  ])
  ]
})
export class WorkComponent implements OnInit {
  show: boolean= true;
  experienceItems: FirebaseListObservable<Experience[]>;

  constructor(private itemSvc: ExperienceService) {}

  ngOnInit() {
    this.show = false;
    this.experienceItems = this.itemSvc.getExperienceList({limitToLast: 14});
    console.log(this.experienceItems[0]);
    this.experienceItems.forEach(item => {
    });
  }

}
