import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChuckNorrisComponent} from './chuck-norris/chuck-norris.component';
import {LandingPageComponent} from './landing-page/landing-page.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'chuckNorris', component: ChuckNorrisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
