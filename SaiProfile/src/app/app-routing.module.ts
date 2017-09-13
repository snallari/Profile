/**
 * New typescript file
 *
 */
import {ExperienceComponent} from './experience/experience.component';
import {IntroductionComponent} from './introduction/introduction.component';
import {SummaryComponent} from './summary/summary.component';
import {WorkComponent} from './work/work.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';


const routes: Routes = [{
  path: 'work',
  component: WorkComponent
},
{
  path: 'introduction',
  component: IntroductionComponent
},
{
  path: 'experience',
  component: ExperienceComponent
}, {
  path: 'summary',
  component: SummaryComponent
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
export const routingComponents = [SummaryComponent,
  IntroductionComponent,
  WorkComponent,
  ExperienceComponent];
