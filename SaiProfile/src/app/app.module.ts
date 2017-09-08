import {config} from '../environments/firebase.config';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {MdToolbarModule, MdCardModule, MdTabsModule, MdGridListModule, MdChipsModule} from '@angular/material';
import {IntroductionComponent} from './introduction/introduction.component';
import {WorkComponent} from './work/work.component';
import {ExperienceComponent} from './experience/experience.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent, routingComponents
  ],
  imports: [
    BrowserModule, MdToolbarModule, MdCardModule, MdTabsModule, MdGridListModule, MdChipsModule, BrowserAnimationsModule, AngularFireModule.initializeApp(config), AngularFireDatabaseModule,
    NoopAnimationsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
