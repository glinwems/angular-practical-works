import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByField',
  standalone: true,
  pure: true 
})
export class FilterByFieldPipe implements PipeTransform {
  transform<T>(items: T[], field: keyof T, searchText: string): T[] {
    if (!items || !field || !searchText) {
      return items;
    }

    const searchLower = searchText.toLowerCase();
    return items.filter(item => {
      const fieldValue = item[field];
      if (fieldValue == null) {
        return false;
      }
      return String(fieldValue).toLowerCase().includes(searchLower);
    });
  }
}

