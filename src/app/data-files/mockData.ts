import {Observable, of} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {delay} from 'rxjs/internal/operators';
import { ImockData } from '../../store/reducers/hotel.reducer';


Injectable();

export class DataToservises {
  data: ImockData[] = [{
    img: '../assets/images/1.jpg',
    type: 'Hotel 3*',
    phone: '1285968685',
    name: 'Хороший отель',
    city: 'Анталия',
    social_info: {
      title: 'Вид из окна',
      img: '../assets/images/b1.jpg',
      followers: 555,
      following: 3453
    }, weather: {
      title: 'Прогноз погоды',
      icon: '',
      water: 27,
      temperature: 30
    }
  }, {
    img: '../assets/images/2.jpg',
    type: 'Hotel 3*',
    phone: '2282353685',
    name: 'Так себе отель',
    city: 'Сочи',
    social_info: {
      title: 'Вид из окна',
      img: '../assets/images/b2.jpg',
      followers: 5464,
      following: 567
    }, weather: {
      title: 'Прогноз погоды',
      icon: '',
      water: 22,
      temperature: 33
    }

  }, {
    img: '../assets/images/3.jpg',
    type: 'Hotel 4*',
    phone: '3285968685',
    name: 'Получше отель',
    city: 'Мадрид',
    social_info: {
      title: 'Вид из окна',
      img: '../assets/images/b3.jpg',
      followers: 342,
      following: 43242
    }, weather: {
      title: 'Прогноз погоды',
      icon: '',
      water: 22,
      temperature: 25
    }

  }, {
    img: '../assets/images/4.jpg',
    type: 'Hotel 5*',
    phone: '4343466685',
    name: 'Нормас отель',
    city: 'Париж',
    social_info: {
      title: 'Вид из окна',
      img: '../assets/images/b4.jpg',
      followers: 234,
      following: 424
    }, weather: {
      title: 'Прогноз погоды',
      icon: '',
      water: 24,
      temperature: 30
    }

  }

  ];

  constructor() {
  }

  getMainData(): Observable<ImockData[]> {
    return of<ImockData[]>(this.data).pipe
    (delay(1000));
  }

}
