import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SettingsService } from '../../services/settings.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  navbar = {
    home: '',
    about: '',
    skills: '',
    projects: '',
    experiences: '',
    education: '',
    contact: '',
    settings: '',
    profession: '',
  };

  constructor(
    protected settingsService: SettingsService,
    private cdr: ChangeDetectorRef,
  ) {
    this.settingsService.language$.pipe(takeUntilDestroyed()).subscribe((language) => {
      this.detectedLanguage(language);

      // Solicita a atualização da interface
      this.cdr.markForCheck();
    });
  }

  detectedLanguage(language: string): void {
    console.log(language);
    if (language === 'portuguese') {
      this.navbar = {
        home: 'Início',
        about: 'Sobre',
        skills: 'Habilidades',
        projects: 'Projetos',
        experiences: 'Experiências',
        education: 'Educação',
        contact: 'Contato',
        settings: 'Ajustes',
        profession: 'Analista e Desenvolvedor de Sistemas',
      };
    } else if (language === 'english') {
      this.navbar = {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        experiences: 'Experience',
        education: 'Education',
        contact: 'Contact',
        settings: 'Settings',
        profession: 'Systems Analyst and Developer',
      };
    } else if (language === 'spanish') {
      this.navbar = {
        home: 'Inicio',
        about: 'Sobre mí',
        skills: 'Habilidades',
        projects: 'Proyectos',
        experiences: 'Experiencias',
        education: 'Formación',
        contact: 'Contacto',
        settings: 'Ajustes',
        profession: 'Analista y Desarrollador de Sistemas',
      };
    }
  }
}
