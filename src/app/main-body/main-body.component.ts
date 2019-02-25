import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DataToservises } from '../data-files/mockData';

import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ImockData } from '../../store/reducers/hotel.reducer';
import { Store } from '@ngrx/store';
import { IStore } from '../../store';
import { GetHotelsPenging } from '../../store/actions/hotel.action';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit, OnDestroy {
  stream$: Observable<ImockData[]>;
  class: DataToservises;
  noData = true;
  data: ImockData[];
  control$$ = new Subject();
  activeElement = 2;
  filter = 0;


  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private _baseUrl: string,
    private  _store: Store<IStore>
  ) {
  }

  changeFilter(num: number) {
    this.filter = num;
  }

  changeActive(num: number) {
    this.activeElement = num;
  }

  ngOnInit(): void {
    this.class = new DataToservises();
    this._store.dispatch(new GetHotelsPenging());

    this._store.select('hotel').pipe(takeUntil(this.control$$))
      .subscribe((result: ImockData[]) => {
        if (result.length > 0) {
          this.data = result;
          this.noData = false;
        }
      });


  }

  ngOnDestroy(): void {
    this.control$$.next(true);
  }
}

/*
*
*
* import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataToservises } from '../data-files/mockData';
import { ImockData } from '../data-files/mockData.intefaces';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit, OnDestroy {
  stream$: Observable<ImockData[]>;
  class: DataToservises;
  noData = true;
  data: ImockData[];
  control$$ = new Subject();
  activeElement = 2;
  filter = 0;

  constructor(private http: HttpClient) {
  }

  changeFilter(num: number) {
    this.filter = num;
  }

  changeActive(num: number) {
    this.activeElement = num;
  }

  ngOnInit(): void {
    this.class = new DataToservises();
    //
    // //https://a02j1e839f7f.ru1.hana.ondemand.com/test/data.xsjs
    // debugger;
    // this.http.get('https://a02j1e839f7f.ru1.hana.ondemand.com/test/data.xsjs').pipe(takeUntil(this.control$$))
    //   .subscribe((result) => {
    //     debugger;
    //     //this.data = result;
    //     //  this.noData = false;
    //   });

    this.stream$ = this.class.getMainData().pipe(takeUntil(this.control$$));
    this.stream$.subscribe((result) => {
      this.data = result;
      this.noData = false;
    });

  }

  ngOnDestroy(): void {
    this.control$$.next(true);
  }
}
*/
