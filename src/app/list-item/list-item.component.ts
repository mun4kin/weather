import {Component, Input, OnInit} from '@angular/core';
import { ImockData } from '../../store/reducers/hotel.reducer';


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
