import { Injectable, Inject, PLATFORM_ID, DOCUMENT } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark' | 'system';

export interface UserSettings {
  theme: Theme;
  language: string;
  fontSize: string;
}

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private readonly storageKey = 'userSettings';
  private readonly isBrowser: boolean;

  private mediaQuery?: MediaQueryList;

  private readonly defaultSettings: UserSettings = {
    theme: 'system',
    language: 'portuguese',
    fontSize: 'normal',
  };

  theme: Theme = 'system';
  language = 'portuguese';
  fontSize = 'normal';

  private themeSubject = new BehaviorSubject<Theme>(this.theme);

  theme$ = this.themeSubject.asObservable();

  private languageSubject = new BehaviorSubject<string>(this.language);

  language$ = this.languageSubject.asObservable();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.loadSettings();

      this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      this.mediaQuery.addEventListener('change', () => {
        if (this.theme === 'system') {
          this.applyTheme();
        }
      });

      this.applyTheme();
    }
  }

  setTheme(theme: Theme): void {
    this.theme = theme;

    this.themeSubject.next(theme);

    this.applyTheme();
    this.saveSettings();
  }

  setLanguage(language: string): void {
    this.language = language;

    this.languageSubject.next(language);

    this.saveSettings();
  }

  setFontSize(fontSize: string): void {
    this.fontSize = fontSize;

    this.saveSettings();
  }

  private applyTheme(): void {
    if (!this.isBrowser) return;

    const resolvedTheme: 'light' | 'dark' =
      this.theme === 'system' ? (this.mediaQuery?.matches ? 'dark' : 'light') : this.theme;

    this.document.documentElement.setAttribute('data-bs-theme', resolvedTheme);
  }

  private loadSettings(): void {
    const savedSettings = localStorage.getItem(this.storageKey);

    if (!savedSettings) return;

    try {
      const settings: Partial<UserSettings> = JSON.parse(savedSettings);

      if (settings.theme === 'light' || settings.theme === 'dark' || settings.theme === 'system') {
        this.theme = settings.theme;
        this.themeSubject.next(this.theme);
      }

      if (settings.language) {
        this.language = settings.language;
        this.languageSubject.next(this.language);
      }

      if (settings.fontSize) {
        this.fontSize = settings.fontSize;
      }
    } catch (error) {
      console.error('Erro ao carregar as configurações:', error);
    }
  }

  private saveSettings(): void {
    if (!this.isBrowser) return;

    const settings: UserSettings = {
      theme: this.theme,
      language: this.language,
      fontSize: this.fontSize,
    };

    localStorage.setItem(this.storageKey, JSON.stringify(settings));
  }

  resetSettings(): void {
    this.theme = this.defaultSettings.theme;
    this.language = this.defaultSettings.language;
    this.fontSize = this.defaultSettings.fontSize;

    this.themeSubject.next(this.theme);
    this.languageSubject.next(this.language);

    this.applyTheme();
    this.saveSettings();
  }
}
