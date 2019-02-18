import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {ImockData} from '../data-files/mockData.intefaces';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input()
  public data: ImockData[];
  @Input()
  public activeElement: number;
  @Output()
  selectActive = new EventEmitter();


  selectActiveItem(num: number) {

    this.selectActive.emit(num);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
