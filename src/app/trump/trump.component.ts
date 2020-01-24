import { Component, OnInit } from '@angular/core';
import {CheckerService} from '../checker.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-trump',
  templateUrl: './trump.component.html',
  styleUrls: ['./trump.component.scss']
})
export class TrumpComponent implements OnInit {
  trumpJoke: any;

  constructor(private checker: CheckerService, private dataService: DataService) {
    this.checker.checkForUpdates();
  }

  ngOnInit() {
    this.dataService.getTrumpJoke().subscribe( joke => {
      this.trumpJoke = joke;
    });
  }

  loadNextJoke() {
    this.dataService.getTrumpJoke().subscribe(joke => {
      this.trumpJoke = joke;
    });
  }

}
