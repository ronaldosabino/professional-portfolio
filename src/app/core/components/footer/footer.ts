import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SettingsService } from '../../services/settings.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  footer = {
    profession: '',

    description: '',

    navigation: '',
    home: '',
    about: '',
    projects: '',
    experiences: '',
    education: '',
    skills: '',
    contact: '',

    linkedin: '',
    github: '',
    whatsapp: '',

    letsTalk: '',
    ctaDescription: '',
    contactButton: '',

    copyright: '',
    start: '',
    settings: '',
    backToTop: '',
  };

  constructor(
    protected settingsService: SettingsService,
    private cdr: ChangeDetectorRef,
  ) {
    this.settingsService.language$.pipe(takeUntilDestroyed()).subscribe((language) => {
      this.detectLanguage(language);

      // Solicita a atualização da interface
      this.cdr.markForCheck();
    });
  }

  detectLanguage(language: string): void {
    if (language === 'portuguese') {
      this.footer = {
        profession: 'Analista e Desenvolvedor de Sistemas',
        description:
          'Analista e Desenvolvedor de Sistemas apaixonado por tecnologia, desenvolvimento de software e pela criação de soluções que geram valor.',
        navigation: 'Navegação',
        home: 'Home',
        about: 'Sobre mim',
        projects: 'Projetos',
        experiences: 'Experiências',
        education: 'Educação',
        skills: 'Habilidades',
        contact: 'Contato',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        whatsapp: 'WhatsApp',
        letsTalk: 'Vamos conversar?',
        ctaDescription:
          'Tem um projeto, oportunidade ou simplesmente quer trocar uma ideia sobre tecnologia?',
        contactButton: 'Entre em contato',
        copyright: 'Todos os direitos reservados.',
        start: 'Início',
        settings: 'Ajustes',
        backToTop: 'Voltar ao topo',
      };
    } else if (language === 'english') {
      this.footer = {
        profession: 'Systems Analyst and Developer',
        description:
          'Systems Analyst and Developer passionate about technology, software development, and creating solutions that deliver value.',
        navigation: 'Navigation',
        home: 'Home',
        about: 'About me',
        projects: 'Projects',
        experiences: 'Experience',
        education: 'Education',
        skills: 'Skills',
        contact: 'Contact',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        whatsapp: 'WhatsApp',
        letsTalk: "Let's talk?",
        ctaDescription: 'Have a project, an opportunity, or simply want to talk about technology?',
        contactButton: 'Get in touch',
        copyright: 'All rights reserved.',
        start: 'Home',
        settings: 'Settings',
        backToTop: 'Back to top',
      };
    } else if (language === 'spanish') {
      this.footer = {
        profession: 'Analista y Desarrollador de Sistemas',
        description:
          'Analista y Desarrollador de Sistemas apasionado por la tecnología, el desarrollo de software y la creación de soluciones que generan valor.',
        navigation: 'Navegación',
        home: 'Inicio',
        about: 'Sobre mí',
        projects: 'Proyectos',
        experiences: 'Experiencia',
        education: 'Formación',
        skills: 'Habilidades',
        contact: 'Contacto',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        whatsapp: 'WhatsApp',
        letsTalk: '¿Hablamos?',
        ctaDescription:
          '¿Tienes un proyecto, una oportunidad o simplemente quieres hablar sobre tecnología?',
        contactButton: 'Contactar',
        copyright: 'Todos los derechos reservados.',
        start: 'Inicio',
        settings: 'Ajustes',
        backToTop: 'Volver arriba',
      };
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  redirectToLinkedIn() {
    window.open('https://www.linkedin.com/in/ronaldo-sabino', '_blank');
  }

  redirectToGitHub() {
    window.open('https://www.github.com/ronaldosabino', '_blank');
  }

  redirectToWhatsApp() {
    window.open('https://wa.me/5581994479584?text=Olá,%20Ronaldo!', '_blank');
  }
}
