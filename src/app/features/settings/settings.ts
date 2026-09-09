import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../core/services/settings.service';

@Component({
  selector: 'app-settings',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {
  constructor(protected settingsService: SettingsService) {}

  form = new FormGroup({
    theme: new FormControl('system'),
    language: new FormControl('portuguese'),
    fontSize: new FormControl('normal'),
  });

  changeTheme() {
    this.settingsService.theme = this.form.get('theme')!.value;
    console.log(this.settingsService.theme);
  }

  changeLanguage() {
    this.settingsService.language = this.form.get('language')!.value;
    console.log(this.settingsService.language);
  }

  changeFontSize() {
    this.settingsService.fontSize = this.form.get('fontSize')!.value;
    console.log(this.settingsService.fontSize);
  }
}
