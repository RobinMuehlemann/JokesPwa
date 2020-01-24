import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service';
import {CheckerService} from './checker.service';
import { ChuckNorrisComponent } from './chuck-norris/chuck-norris.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {SideContentComponent} from './side-content/side-content.component';
import {LandingPageComponent} from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ChuckNorrisComponent,
    SideContentComponent,
    LandingPageComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [DataService, CheckerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
