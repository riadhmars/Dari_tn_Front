import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(value: any[], ...args: any): any {
        let searchItem = ''
        if(args.length)  searchItem = args[0].toLowerCase()
       
        return value.filter((data:any)=> data.title.toLowerCase().includes(searchItem) );
      }
}