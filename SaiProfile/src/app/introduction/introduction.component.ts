import { Item } from '../models/item';
import { IntroductionService } from '../services/introduction.service';
import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable} from "angularfire2/database";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
  providers: [IntroductionService]
})
export class IntroductionComponent implements OnInit {

  items: FirebaseListObservable<Item[]>;

  constructor(private itemSvc: IntroductionService) {

  }
  ngOnInit(): void {
    this.items = this.itemSvc.getItemList({limitToLast: 5});
    console.log(this.items[0]);
  }

}
