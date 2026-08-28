import { Component } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {
  constructor(protected languageService: LanguageService) {}

  form = new FormGroup({
    theme: new FormControl('system'),
    language: new FormControl('portuguese'),
    fontSize: new FormControl('normal'),
  });

  changeTheme() {
    this.languageService.theme = this.form.get('theme')!.value;
    console.log(this.languageService.theme);
  }

  changeLanguage() {
    this.languageService.language = this.form.get('language')!.value;
    console.log(this.languageService.language);
  }

  changeFontSize() {
    this.languageService.fontSize = this.form.get('fontSize')!.value;
    console.log(this.languageService.fontSize);
  }
}
