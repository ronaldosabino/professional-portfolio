import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor() {}
  language: string | null = 'portuguese';
  theme: string | null = 'system';
  fontSize: string | null = 'normal';
}
