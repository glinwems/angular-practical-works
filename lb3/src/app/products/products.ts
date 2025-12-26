import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  category: string;
  price: number;
  stockCount: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  products: Product[] = [
    { name: 'Флешка', category: 'Гаджети', price: 550, stockCount: 20 },
    { name: 'Лампа', category: 'Освітлення', price: 100, stockCount: 7 },
    { name: 'Кавоварка', category: 'Побутова техніка', price: 50, stockCount: 3 },
    { name: 'Рюкзак', category: 'Аксесуари', price: 800, stockCount: 15 },
    { name: 'Журнал', category: 'Книги', price: 150, stockCount: 25 },
    { name: 'Монітор', category: 'Гаджети', price: 9000, stockCount: 4 },
    { name: 'Смарт-годинник', category: 'Гаджети', price: 7000, stockCount: 9 },
    { name: 'Комод', category: 'Меблі', price: 6000, stockCount: 2 }
  ];

  getPriceStatus(price: number): string {
    if (price < 50) {
      return 'low';
    } else if (price <= 200) {
      return 'medium';
    } else {
      return 'high';
    }
  }
}

