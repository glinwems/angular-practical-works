import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { PRODUCTS } from './products.data';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page">
      <h2>Список продуктів</h2>
      <p>Всього продуктів: {{ products.length }}</p>

      <ul>
        <li *ngFor="let p of products">
          <a [routerLink]="['/products', p.id]">
            {{ p.name }} — {{ '$' + p.price }}
          </a>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .page { padding: 16px; }
    ul { padding-left: 18px; }
    a { color: #1976d2; text-decoration: none; }
    a:hover { text-decoration: underline; }
  `]
})
export class ProductListComponent {
  protected readonly products = PRODUCTS;
}

