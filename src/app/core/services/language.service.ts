import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor() {}
  language: string | null = '';
  theme: string | null = '';
  fontSize: string | null = '';
}
