import {Component, Input, OnInit} from '@angular/core';
import { IWeather } from '../../store/reducers/hotel.reducer';


@Component({
  selector: 'app-temperatur',
  templateUrl: './temperatur.component.html',
  styleUrls: ['./temperatur.component.css']
})
export class TemperaturComponent implements OnInit {
  @Input()
  public weather: IWeather;

  constructor() {
  }

  ngOnInit() {
  }

}
