import { Component, OnInit } from '@angular/core';
import {CheckerService} from '../checker.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-random-cat',
  templateUrl: './random-cat.component.html',
  styleUrls: ['./random-cat.component.scss']
})
export class RandomCatComponent implements OnInit {
  randomCatImage: any;
  loading = true;

  constructor(private checker: CheckerService, private dataService: DataService) {
    this.checker.checkForUpdates();
  }

  ngOnInit() {
    this.dataService.getRandomCatImage().subscribe( image => {
      this.randomCatImage = image;
      console.log(image);
      this.loading = false;
    });
  }

  loadNextImage() {
    this.randomCatImage[0].url = undefined;
    this.loading = true;
    this.dataService.getRandomCatImage().subscribe(image => {
      this.randomCatImage = image;
      this.loading = false;
    });
  }
}
