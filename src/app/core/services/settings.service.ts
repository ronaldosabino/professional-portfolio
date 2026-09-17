import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor() {}
  language: string = 'portuguese';
  theme: string | null = 'system';
  fontSize: string | null = 'normal';

  private languageSubject = new BehaviorSubject<string>(this.language);

  language$ = this.languageSubject.asObservable();

  setLanguage(language: string): void {
    this.language = language;
    this.languageSubject.next(language);
  }
}
