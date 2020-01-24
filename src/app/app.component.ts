import {Component, OnInit, ViewChild} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {DataService} from './data.service';
import {interval} from 'rxjs';
import {CheckerService} from './checker.service';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstPwa';
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;
  openNav() {
  }
  close() {
    this.sidenav.close();
  }
}
