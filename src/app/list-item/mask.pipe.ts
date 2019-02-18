import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string): string {


    return `+(${value.slice(0, 2)}) ${value.slice(3, 6)} ${value.slice(7)}`;
  }

}
