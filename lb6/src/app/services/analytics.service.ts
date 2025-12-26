import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  logEvent(event: string): void {
    console.log(`[Analytics] ${event}`);
  }
}

