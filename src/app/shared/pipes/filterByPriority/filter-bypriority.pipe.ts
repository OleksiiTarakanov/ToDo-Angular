import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBYPriority'
})
export class FilterBYPriorityPipe implements PipeTransform {

  transform(data: any, inpPriority: string): unknown {
    console.log(inpPriority);
    
    
    if(!inpPriority){
      return data;
    }


    return data.filter(el  => {
      return el.priority == inpPriority;
    });
  }

}
