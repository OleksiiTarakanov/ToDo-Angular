import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';

@Pipe({
  name: 'filterBySearch'
})
export class FilterBySearchPipe implements PipeTransform {

  transform(data: any, search:string): unknown {
    if (!search) {
      return data;
    }

    console.log(search.trim());

    return data.filter(el  => {
      return el.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });;
  }

}
