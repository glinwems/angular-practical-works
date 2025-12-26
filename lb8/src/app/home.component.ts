import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page">
      <h2>Головна</h2>
      <p>Доступ до продуктів дозволено тільки авторизованим користувачам.</p>
      <p>
        Спробуйте перейти до <a routerLink="/products">/products</a> —
        зараз охоронець поверне вас сюди (isLoggedIn() = false).
      </p>
    </div>
  `,
  styles: [`
    .page { padding: 16px; }
    a { color: #1976d2; text-decoration: none; }
    a:hover { text-decoration: underline; }
  `]
})
export class HomeComponent {}

