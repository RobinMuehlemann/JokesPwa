import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChuckNorrisComponent} from './chuck-norris/chuck-norris.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {TrumpComponent} from './trump/trump.component';
import {RandomCatComponent} from './random-cat/random-cat.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'chuckNorris', component: ChuckNorrisComponent},
  {path: 'trump', component: TrumpComponent},
  {path: 'randomCat', component: RandomCatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
