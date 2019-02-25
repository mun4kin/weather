import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GET_HOTELS_PENDING, GetHotelsError, GetHotelsSuccess } from '../actions/hotel.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ImockData } from '../reducers/hotel.reducer';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HotelsEffects {
  @Effect()
  hotels$ = this._actions$.pipe(
    ofType(GET_HOTELS_PENDING),
    switchMap(() => this.getAllHotels().pipe(
      map((hotels: ImockData[]) => new GetHotelsSuccess(hotels)),
      catchError((err) => of(new GetHotelsError(err)))
    ))
  );

  constructor(
    private  _actions$: Actions,
    private  _http: HttpClient
  ) {
  }

  getAllHotels(): Observable<ImockData[]> {
    return this._http.get<ImockData[]>(`/data.xsjs`);
  }


}
