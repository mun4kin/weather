import {Pipe, PipeTransform} from '@angular/core';
import { ImockData } from '../../store/reducers/hotel.reducer';


@Pipe({
  name: 'filterHotels'
})
export class FilterHotelsPipe implements PipeTransform {

  transform(data: ImockData[], filter: number): ImockData[] {
    let result: ImockData[] = [];

    result = data.filter((item: ImockData, index: number) => {
      item.index = index;
      return (filter === 0) ? item : item.type.indexOf(String(filter)) !== -1;
    });

    return result;
  }
}
