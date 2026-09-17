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
  private readonly storageKey = 'userSettings';

  settingsPage = {
    // CABEÇALHO
    header: {
      label: '',
      title: '',
      titleHighLight: '',
      subtitle: '',
    },

    // APARÊNCIA
    appearance: {
      title: '',
      subtitle: '',
      theme: {
        title: '',
        subtitle: '',
        labelSystem: '',
        labelLight: '',
        labelDark: '',
      },
      animations: {
        title: '',
        subtitle: '',
      },
    },

    // IDIOMA
    language: {
      title: '',
      subtitle: '',
      idiom: {
        title: '',
        subtitle: '',
        labelPortuguese: '',
        labelEnglish: '',
        labelSpanish: '',
      },
    },

    // ACESSIBILIDADE
    accessibility: {
      title: '',
      subtitle: '',
      fontSize: {
        title: '',
        subtitle: '',
        labelSmall: '',
        labelNormal: '',
        labelLarge: '',
      },
    },

    // NAVIGATION
    navigation: {
      title: '',
      subtitle: '',
      backToTop: {
        title: '',
        subtitle: '',
      },
      externalLinks: {
        title: '',
        subtitle: '',
      },
    },

    // PRIVACIDADE
    privacy: {
      title: '',
      subtitle: '',
      localpreferences: {
        title: '',
        subtitle: '',
      },
      restoreSettings: {
        title: '',
        subtitle: '',
        labelRestoreDefaults: '',
      },
    },

    // INFORMAÇÕES
    information: {
      title: '',
      subtitle: '',
      subtitle2: '',
    },

    version: {
      title: '',
      copyright: '',
    },
  };

  constructor(protected settingsService: SettingsService) {
    this.form.controls.language.valueChanges.subscribe((language) => {
      if (language) {
        this.settingsService.setLanguage(language);
        this.detectLanguage();
      }
    });
  }

  form = new FormGroup({
    theme: new FormControl('system'),
    language: new FormControl('portuguese'),
    fontSize: new FormControl('normal'),
  });

  ngOnInit() {
    this.detectLanguage();
    this.loadSettings();

    this.form.valueChanges.subscribe(() => {
      this.saveSettings();
    });
  }

  private loadSettings(): void {
    const savedSettings = localStorage.getItem(this.storageKey);

    if (savedSettings) {
      try {
        const settings = JSON.parse(savedSettings);

        this.form.patchValue(settings);
      } catch (error) {
        console.error('Erro ao carregar as configurações:', error);
      }
    }
  }

  private saveSettings(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.form.getRawValue()));
  }

  resetSettings(): void {
    this.form.reset({
      theme: 'system',
      language: 'portuguese',
      fontSize: 'normal',
    });

    // Atualiza o localStorage com os valores iniciais
    localStorage.setItem('userSettings', JSON.stringify(this.form.getRawValue()));
  }

  changeTheme() {
    this.settingsService.theme = this.form.get('theme')!.value;
  }

  changeLanguage(): void {
    const language = this.form.get('language')?.value;

    if (language) {
      this.settingsService.setLanguage(language);
    }

    this.detectLanguage();
  }

  changeFontSize() {
    this.settingsService.fontSize = this.form.get('fontSize')!.value;
  }

  detectLanguage() {
    if (this.form.get('language')!.value === 'portuguese') {
      this.settingsPage = {
        // CABEÇALHO
        header: {
          label: 'Preferências',
          title: 'Ajustes e ',
          titleHighLight: 'configurações',
          subtitle:
            'Personalize alguns aspectos da experiência de navegação de acordo com suas preferências.',
        },

        // APARÊNCIA
        appearance: {
          title: 'Aparência',
          subtitle: 'Personalize a aparência do portfólio.',
          theme: {
            title: 'Tema',
            subtitle: 'Escolha como o portfólio deve ser exibido.',
            labelSystem: 'Sistema',
            labelLight: 'Claro',
            labelDark: 'Escuro',
          },
          animations: {
            title: 'Animação',
            subtitle: 'Ative ou desative as animações da interface.',
          },
        },

        // IDIOMA
        language: {
          title: 'Idioma',
          subtitle: 'Escolha o idioma de exibição do portfólio.',
          idiom: {
            title: 'Língua',
            subtitle: 'Escolha a língua dos textos exibidos no portfólio.',
            labelPortuguese: 'Português',
            labelEnglish: 'English',
            labelSpanish: 'Español',
          },
        },

        // ACESSIBILIDADE
        accessibility: {
          title: 'Acessibilidade',
          subtitle: 'Ajuste a interface para uma experiência de navegação mais confortável.',
          fontSize: {
            title: 'Tamanho da Fonte',
            subtitle: 'Ajuste o tamanho do texto na interface.',
            labelSmall: 'A-',
            labelNormal: 'A',
            labelLarge: 'A+',
          },
        },

        // NAVIGATION
        navigation: {
          title: 'Navegação',
          subtitle: 'Configure alguns comportamentos de navegação.',
          backToTop: {
            title: 'Voltar ao Topo',
            subtitle: 'Ao mudar de página, iniciar a visualização novamente no topo.',
          },
          externalLinks: {
            title: 'Links externos',
            subtitle: 'Abrir links externos em uma nova aba.',
          },
        },

        // PRIVACIDADE
        privacy: {
          title: 'Privacidade',
          subtitle: 'Informações sobre seus dados e preferências.',
          localpreferences: {
            title: 'Preferências locais',
            subtitle:
              'Algumas configurações podem ser armazenadas localmente no navegador para que suas preferências sejam mantidas entre visitas.',
          },
          restoreSettings: {
            title: 'Restaurar configurações',
            subtitle: 'Volte todas as preferências para os valores padrão.',
            labelRestoreDefaults: 'Restaurar padrões',
          },
        },

        // INFORMAÇÕES
        information: {
          title: 'Sobre estas configurações',
          subtitle:
            'As configurações desta página afetam apenas a experiência de navegação neste portfólio.',
          subtitle2:
            'Nenhuma dessas preferências altera seus dados pessoais ou informações profissionais.',
        },

        version: {
          title: 'Versão 1.0.0',
          copyright: 'Ronaldo Sabino — Portfólio',
        },
      };
    } else if (this.form.get('language')!.value === 'english') {
      this.settingsPage = {
        // HEADER
        header: {
          label: 'Preferences',

          title: 'Settings and ',

          titleHighLight: 'configuration',

          subtitle:
            'Customize some aspects of the browsing experience according to your preferences.',
        },

        // APPEARANCE
        appearance: {
          title: 'Appearance',

          subtitle: 'Customize the appearance of the portfolio.',

          theme: {
            title: 'Theme',

            subtitle: 'Choose how the portfolio should be displayed.',

            labelSystem: 'System',

            labelLight: 'Light',

            labelDark: 'Dark',
          },

          animations: {
            title: 'Animations',

            subtitle: 'Enable or disable interface animations.',
          },
        },

        // LANGUAGE
        language: {
          title: 'Language',

          subtitle: 'Choose the display language of the portfolio.',

          idiom: {
            title: 'Language',

            subtitle: 'Choose the language of the texts displayed in the portfolio.',

            labelPortuguese: 'Português',

            labelEnglish: 'English',

            labelSpanish: 'Español',
          },
        },

        // ACCESSIBILITY
        accessibility: {
          title: 'Accessibility',

          subtitle: 'Adjust the interface for a more comfortable browsing experience.',

          fontSize: {
            title: 'Font Size',

            subtitle: 'Adjust the size of the text in the interface.',

            labelSmall: 'A-',

            labelNormal: 'A',

            labelLarge: 'A+',
          },
        },

        // NAVIGATION
        navigation: {
          title: 'Navigation',

          subtitle: 'Configure some navigation behaviors.',

          backToTop: {
            title: 'Back to Top',

            subtitle: 'When changing pages, start viewing the new page from the top.',
          },

          externalLinks: {
            title: 'External Links',

            subtitle: 'Open external links in a new tab.',
          },
        },

        // PRIVACY
        privacy: {
          title: 'Privacy',

          subtitle: 'Information about your data and preferences.',

          localpreferences: {
            title: 'Local Preferences',

            subtitle:
              'Some settings may be stored locally in your browser so that your preferences can be maintained between visits.',
          },

          restoreSettings: {
            title: 'Restore Settings',

            subtitle: 'Return all preferences to their default values.',

            labelRestoreDefaults: 'Restore Defaults',
          },
        },

        // INFORMATION
        information: {
          title: 'About These Settings',

          subtitle:
            'The settings on this page affect only the browsing experience within this portfolio.',

          subtitle2:
            'None of these preferences change your personal data or professional information.',
        },

        version: {
          title: 'Version 1.0.0',

          copyright: 'Ronaldo Sabino — Portfolio',
        },
      };
    } else if (this.form.get('language')!.value === 'spanish') {
      this.settingsPage = {
        // ENCABEZADO
        header: {
          label: 'Preferencias',

          title: 'Ajustes y ',

          titleHighLight: 'configuraciones',

          subtitle:
            'Personaliza algunos aspectos de la experiencia de navegación según tus preferencias.',
        },

        // APARIENCIA
        appearance: {
          title: 'Apariencia',

          subtitle: 'Personaliza la apariencia del portafolio.',

          theme: {
            title: 'Tema',

            subtitle: 'Elige cómo debe mostrarse el portafolio.',

            labelSystem: 'Sistema',

            labelLight: 'Claro',

            labelDark: 'Oscuro',
          },

          animations: {
            title: 'Animaciones',

            subtitle: 'Activa o desactiva las animaciones de la interfaz.',
          },
        },

        // IDIOMA
        language: {
          title: 'Idioma',

          subtitle: 'Elige el idioma de visualización del portafolio.',

          idiom: {
            title: 'Idioma',

            subtitle: 'Elige el idioma de los textos mostrados en el portafolio.',

            labelPortuguese: 'Português',

            labelEnglish: 'English',

            labelSpanish: 'Español',
          },
        },

        // ACCESIBILIDAD
        accessibility: {
          title: 'Accesibilidad',

          subtitle:
            'Ajusta la interfaz para disfrutar de una experiencia de navegación más cómoda.',

          fontSize: {
            title: 'Tamaño de fuente',

            subtitle: 'Ajusta el tamaño del texto en la interfaz.',

            labelSmall: 'A-',

            labelNormal: 'A',

            labelLarge: 'A+',
          },
        },

        // NAVEGACIÓN
        navigation: {
          title: 'Navegación',

          subtitle: 'Configura algunos comportamientos de navegación.',

          backToTop: {
            title: 'Volver al inicio',

            subtitle:
              'Al cambiar de página, comienza la visualización nuevamente desde la parte superior.',
          },

          externalLinks: {
            title: 'Enlaces externos',

            subtitle: 'Abrir enlaces externos en una nueva pestaña.',
          },
        },

        // PRIVACIDAD
        privacy: {
          title: 'Privacidad',

          subtitle: 'Información sobre tus datos y preferencias.',

          localpreferences: {
            title: 'Preferencias locales',

            subtitle:
              'Algunas configuraciones pueden almacenarse localmente en el navegador para mantener tus preferencias entre visitas.',
          },

          restoreSettings: {
            title: 'Restaurar configuraciones',

            subtitle: 'Restablece todas las preferencias a sus valores predeterminados.',

            labelRestoreDefaults: 'Restaurar valores predeterminados',
          },
        },

        // INFORMACIÓN
        information: {
          title: 'Acerca de estas configuraciones',

          subtitle:
            'Las configuraciones de esta página afectan únicamente la experiencia de navegación en este portafolio.',

          subtitle2:
            'Ninguna de estas preferencias modifica tus datos personales ni tu información profesional.',
        },

        version: {
          title: 'Versión 1.0.0',

          copyright: 'Ronaldo Sabino — Portafolio',
        },
      };
    }
  }
}
