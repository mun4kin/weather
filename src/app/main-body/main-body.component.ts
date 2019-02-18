import {Component, OnInit, OnDestroy} from '@angular/core';
import {DataToservises} from '../data-files/mockData';
import {ImockData} from '../data-files/mockData.intefaces';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/internal/operators';

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

  constructor() {
  }

  changeFilter(num: number) {
    this.filter = num;
  }

  changeActive(num: number) {
    this.activeElement = num;
  }

  ngOnInit(): void {
    this.class = new DataToservises();
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
