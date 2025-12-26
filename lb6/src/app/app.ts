import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppLogicService } from './services/app-logic.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lb6');
  data: string[] = [];

  constructor(private appLogicService: AppLogicService) {
    this.loadData();
  }

  loadData(): void {
    this.data = this.appLogicService.getDataAndLog();
  }
}
