import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'appSortBy',
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy: keyof Hero) : unknown {
    return null;
    //sortBy === ''
  }

}
