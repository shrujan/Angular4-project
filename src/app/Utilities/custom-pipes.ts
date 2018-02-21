
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'sort'
})

export class sortPipe implements PipeTransform {
  // it should sort any array so return any ---|
  transform(value: any [], operation: string): any {
      let arr = value;

      if (operation === 'Ascending') {
        return arr.sort();
      } else {
        return arr.sort().reverse();
      }
  }
}
