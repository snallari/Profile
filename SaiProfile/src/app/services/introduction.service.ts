import { Item } from '../models/item';
import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";

@Injectable()
export class IntroductionService {
  basePath: string = 'https://shruti-f45db.firebaseio.com/';
  items: FirebaseListObservable<Item[]> = null;
  item: FirebaseObjectObservable<Item> = null;


  constructor(private af: AngularFireDatabase) {
  }

  getItemList(query = {}): FirebaseListObservable<Item[]> {
    this.items = this.af.list(this.basePath, {query: query});
    return this.items;

  }
  getItem(key: string): FirebaseObjectObservable<Item> {
    const itemPath = '${this.basePath}/${key}'
    this.item = this.af.object(itemPath)
    return this.item;

  }


}
