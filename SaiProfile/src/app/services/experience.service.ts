
import { Experience } from '../models/Portfolio/experience';
import { Summary } from '../models/Portfolio/summary';
import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";


@Injectable()
export class ExperienceService {
  experiencePath: string = 'https://profile-42b3b.firebaseio.com/projects';
  experience: FirebaseObjectObservable<Experience> = null;
  experienceList: FirebaseListObservable<Experience[]>;
  summaryPath: string = 'https://profile-42b3b.firebaseio.com/Summary';
  summary: FirebaseObjectObservable<Summary> = null;
  summaryList: FirebaseListObservable<Summary[]> = null;

  constructor(private af: AngularFireDatabase) {}

  getExperience(key: string): FirebaseObjectObservable<Experience> {
    this.experience = this.af.object(this.experiencePath)
    return this.experience;

  }
  getExperienceList(query = {}): FirebaseListObservable<Experience[]> {
    this.experienceList = this.af.list(this.experiencePath, {query: query});
    return this.experienceList;

  }

  getSummary(key: string): FirebaseObjectObservable<Summary> {
    this.summary = this.af.object(this.summaryPath);
    return this.summary;
  }

  getSummaryList(query = {}): FirebaseListObservable<Summary[]> {
    this.summaryList = this.af.list(this.summaryPath, {query: query});
    return this.summaryList;

  }

}
