import {config} from '../environments/firebase.config';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SummaryComponent} from './summary/summary.component';
import {MdToolbarModule, MdCardModule, MdTabsModule, MdGridListModule, MdChipsModule} from '@angular/material';
import {IntroductionComponent} from './introduction/introduction.component';
import {WorkComponent} from './work/work.component';
import {ExperienceComponent} from './experience/experience.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {RouterModule} from '@angular/router';
import {NavigationComponent} from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent, routingComponents, NavigationComponent
  ],
  imports: [
    BrowserModule, MdToolbarModule, MdCardModule, MdTabsModule, MdGridListModule, MdChipsModule, BrowserAnimationsModule, AngularFireModule.initializeApp(config), AngularFireDatabaseModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
