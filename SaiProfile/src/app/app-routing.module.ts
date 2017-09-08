/**
 * New typescript file
 *
 */
import {ExperienceComponent} from './experience/experience.component';
import {IntroductionComponent} from './introduction/introduction.component';
import {NavigationComponent} from './navigation/navigation.component';
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
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
export const routingComponents = [NavigationComponent,
  IntroductionComponent,
  WorkComponent,
  ExperienceComponent];
