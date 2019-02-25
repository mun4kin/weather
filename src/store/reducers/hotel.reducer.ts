import { GET_HOTELS_ERROR, GET_HOTELS_SUCCESS, GetHotelsSuccess, HotelsAction } from '../actions/hotel.action';

export interface ImockData {
  img: string;
  type: string;
  phone: string;
  name: string;
  city: string;
  social_info: ISoc;
  weather: IWeather;
  index?: number;
}

export interface ISoc {
  title: string;
  img: string;
  followers: number;
  following: number;
}


export interface IWeather {
  title: string;
  icon: string;
  water: number;
  temperature: number;
}

const initialState: ImockData[] = [];

export function hotelReducer(state: ImockData[] = initialState, action: HotelsAction) {
  switch (action.type) {
    case GET_HOTELS_SUCCESS:
      return (action as GetHotelsSuccess).payload;
    case GET_HOTELS_ERROR:
      return state;
    default:
      return state;

  }

}

