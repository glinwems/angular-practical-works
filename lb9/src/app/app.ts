import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ITEMS, Item } from './data';
import { FilterByFieldPipe } from './filter-by-field.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterByFieldPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  items: Item[] = [...ITEMS];
  searchText = '';
  searchField: keyof Item = 'name';
  nextId = ITEMS.length + 1;

  addItem(): void {
    const newItem: Item = {
      id: this.nextId++,
      name: `Новий елемент ${this.nextId - 1}`,
      category: 'Інше',
      description: 'Опис нового елемента'
    };
    this.items.push(newItem);
  }

  getFieldDisplayName(field: keyof Item): string {
    const names: Record<keyof Item, string> = {
      id: 'ID',
      name: 'Назва',
      category: 'Категорія',
      description: 'Опис'
    };
    return names[field] || String(field);
  }
}
