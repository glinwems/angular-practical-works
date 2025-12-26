import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigurableHighlightDirective } from './configurable-highlight.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConfigurableHighlightDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lb5');
}
