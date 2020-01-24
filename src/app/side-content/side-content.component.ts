import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-side-content',
  templateUrl: './side-content.component.html',
  styleUrls: ['./side-content.component.scss']
})
export class SideContentComponent implements OnInit {
  @Output() closeSideNav = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  close() {
    this.closeSideNav.emit();
  }
}
