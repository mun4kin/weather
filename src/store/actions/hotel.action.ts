import { ImockData } from '../reducers/hotel.reducer';

export const GET_HOTELS_PENDING = 'GET_HOTELS_PENDING';
export const GET_HOTELS_SUCCESS = 'GET_HOTELS_SUCCESS';
export const GET_HOTELS_ERROR = 'GET_HOTELS_ERROR';


export class GetHotelsPenging {
  public readonly type = GET_HOTELS_PENDING;
}

export class GetHotelsSuccess {
  public readonly type = GET_HOTELS_SUCCESS;

  public constructor(public  payload: ImockData[]) {
  }
}

export class GetHotelsError {
  public readonly type = GET_HOTELS_ERROR;

  public constructor(public  payload: any) {
  }
}


export type HotelsAction = GetHotelsPenging | GetHotelsSuccess | GetHotelsError;
