import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getchar'
})
export class GetcharPipe implements PipeTransform {

  transform(value: string): string {
    return value[0];
  }

}
