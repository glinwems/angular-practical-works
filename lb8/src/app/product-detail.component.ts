import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { PRODUCTS } from './products.data';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page">
      <a routerLink="/products">&larr; Назад до списку</a>

      <ng-container *ngIf="product(); else notFound">
        <h2>Деталі продукту</h2>
        <p><strong>ID:</strong> {{ product()?.id }}</p>
        <p><strong>Назва:</strong> {{ product()?.name }}</p>
        <p><strong>Опис:</strong> {{ product()?.description }}</p>
        <p><strong>Ціна:</strong> {{ '$' + (product()?.price ?? '') }}</p>
      </ng-container>

      <ng-template #notFound>
        <p>Продукт не знайдено.</p>
      </ng-template>
    </div>
  `,
  styles: [`
    .page { padding: 16px; }
    a { color: #1976d2; text-decoration: none; }
    a:hover { text-decoration: underline; }
  `]
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);

  readonly product = computed(() => {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);
    return PRODUCTS.find((p) => p.id === id);
  });
}

