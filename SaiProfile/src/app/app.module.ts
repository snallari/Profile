import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {MdToolbarModule, MdCardModule, MdTabsModule, MdGridListModule, MdChipsModule} from '@angular/material';
import { IntroductionComponent } from './introduction/introduction.component';
import { WorkComponent } from './work/work.component';
import { ExperienceComponent } from './experience/experience.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IntroductionComponent,
    WorkComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule, MdToolbarModule, MdCardModule, MdTabsModule, MdGridListModule, MdChipsModule, BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }