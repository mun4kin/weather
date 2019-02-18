import {Component, Input, OnInit} from '@angular/core';
import {ImockData} from '../data-files/mockData.intefaces';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input()
  public dataItem: ImockData;

  constructor() {
  }

  ngOnInit() {
  }

}
