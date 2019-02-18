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
  title: string,
  icon: string,
  water: number,
  temperature: number
}
