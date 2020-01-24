import { Component, OnInit } from '@angular/core';
import {CheckerService} from '../checker.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.scss']
})
export class ChuckNorrisComponent implements OnInit {
  chuckNorrisJoke: any;

  constructor(private checker: CheckerService, private dataService: DataService) {
    this.checker.checkForUpdates();
  }

  ngOnInit() {
    this.dataService.getChuckNorrisJoke().subscribe( joke => {
      this.chuckNorrisJoke = joke;
    });
  }

  loadNextJoke() {
    this.dataService.getChuckNorrisJoke().subscribe(joke => {
      this.chuckNorrisJoke = joke;
    });
  }

}
