import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: string[] = [
    'Елемент 1',
    'Елемент 2',
    'Елемент 3',
    'Елемент 4',
    'Елемент 5'
  ];

  getData(): string[] {
    return this.data;
  }
}

