import {Component, Input, OnInit} from '@angular/core';
import {IWeather} from '../data-files/mockData.intefaces';

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
