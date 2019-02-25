import { ActionReducerMap } from '@ngrx/store';
import { hotelReducer, ImockData } from './reducers/hotel.reducer';

export interface IStore {
  hotel: ImockData[];
}

export const redusers: ActionReducerMap<IStore> = {
  hotel: hotelReducer

};
