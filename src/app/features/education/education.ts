import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SettingsService } from '../../core/services/settings.service';

@Component({
  selector: 'app-education',
  imports: [RouterLink],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  educationPage = {
    // CABEÇALHO
    header: {
      label: '',
      title: '',
      titleHighlight: '',
      description: '',
    },

    // FORMAÇÃO PRINCIPAL
    mainEducation: {
      // CURSO DE INGLÊS
      englishCourse: {
        badge: '',
        title: '',
        institution: '',
        period: '',
        description: '',
        skills: {
          item1: {
            title: '',
            description: '',
          },
          item2: {
            title: '',
            description: '',
          },
        },
      },

      // PÓS-GRADUAÇÃO
      postgraduate: {
        badge: '',
        title: '',
        institution: '',
        period: '',
        description: '',
        skills: {
          item1: {
            title: '',
            description: '',
          },
          item2: {
            title: '',
            description: '',
          },
        },
      },

      // GRADUAÇÃO
      undergraduate: {
        badge: '',
        title: '',
        institution: '',
        period: '',
        description: '',
        skills: {
          item1: {
            title: '',
            description: '',
          },
          item2: {
            title: '',
            description: '',
          },
          item3: {
            title: '',
            description: '',
          },
        },
      },
    },

    // APRENDIZADO CONTÍNUO
    continuousLearning: {
      label: '',
      title: '',
      paragraphs: {
        item1: '',
        item2: '',
      },
      items: {
        item1: {
          title: '',
          description: '',
        },
        item2: {
          title: '',
          description: '',
        },
        item3: {
          title: '',
          description: '',
        },
        item4: {
          title: '',
          description: '',
        },
      },
    },

    // CTA
    cta: {
      title: '',
      description: '',
      skillsButton: '',
      contactButton: '',
    },
  };

  constructor(protected settingsService: SettingsService) {}

  ngOnInit() {
    this.detectLanguage();
  }

  detectLanguage() {
    if (this.settingsService.language === 'portuguese') {
      this.educationPage = {
        // CABEÇALHO
        header: {
          label: 'Formação acadêmica',
          title: 'Conhecimento que acompanha',
          titleHighlight: ' minha evolução.',
          description: `
        Minha formação combina conhecimento acadêmico,
        especialização em Engenharia de Software e aprendizado
        contínuo através da prática e do estudo de novas tecnologias.
      `,
        },

        // FORMAÇÃO PRINCIPAL
        mainEducation: {
          // CURSO DE INGLÊS
          englishCourse: {
            badge: 'Curso de Inglês',
            title: 'Programa de Línguas e Informática',
            institution: 'Universidade de Pernambuco',
            period: 'Agosto de 2026 — Atualmente',
            description: `
          Formação em Inglês com foco no desenvolvimento das quatro principais
          habilidades de comunicação: ouvir, falar, ler e escrever.
        `,
            skills: {
              item1: {
                title: 'Inglês',
                description: `
              Aprofundamento em outro idioma.
            `,
              },
              item2: {
                title: 'Comunicação',
                description: `
              Desenvolver a competência comunicativa.
            `,
              },
            },
          },

          // PÓS-GRADUAÇÃO
          postgraduate: {
            badge: 'Pós-graduação',
            title: 'Engenharia de Software',
            institution: 'Faculdade Focus',
            period: 'Março de 2025 — Dezembro de 2025',
            description: `
          Especialização voltada ao aprofundamento dos
          conhecimentos relacionados à engenharia,
          desenvolvimento e manutenção de software.
        `,
            skills: {
              item1: {
                title: 'Engenharia de Software',
                description: `
              Aprofundamento em processos, práticas
              e princípios utilizados na construção
              de sistemas de software.
            `,
              },
              item2: {
                title: 'Desenvolvimento',
                description: `
              Conhecimentos aplicados à organização,
              evolução e manutenção de sistemas.
            `,
              },
            },
          },

          // GRADUAÇÃO
          undergraduate: {
            badge: 'Graduação',
            title: 'Análise e Desenvolvimento de Sistemas',
            institution: 'Faculdade Senac Pernambuco',
            period: 'Março de 2022 — Junho de 2024',
            description: `
          Formação que proporcionou uma base sólida em
          desenvolvimento de sistemas, programação,
          bancos de dados, engenharia de software e
          fundamentos da tecnologia da informação.
        `,
            skills: {
              item1: {
                title: 'Programação',
                description: `
              Fundamentos de desenvolvimento e
              construção de aplicações.
            `,
              },
              item2: {
                title: 'Dados',
                description: `
              Conceitos relacionados a bancos de
              dados e persistência de informações.
            `,
              },
              item3: {
                title: 'Sistemas',
                description: `
              Análise, modelagem e desenvolvimento
              de sistemas de informação.
            `,
              },
            },
          },
        },

        // APRENDIZADO CONTÍNUO
        continuousLearning: {
          label: 'Além da formação',
          title: 'Aprendizado contínuo',
          paragraphs: {
            item1: `
          Tecnologia está em constante evolução. Por isso,
          considero o aprendizado contínuo uma parte essencial
          da minha carreira como desenvolvedor.
        `,
            item2: `
          Grande parte desse aprendizado acontece através da
          combinação entre estudo, experimentação e aplicação
          prática em projetos reais.
        `,
          },
          items: {
            item1: {
              title: 'Estudos',
              description: `
            Acompanhamento de conceitos, padrões,
            ferramentas e tecnologias relevantes
            para o desenvolvimento de software.
          `,
            },
            item2: {
              title: 'Prática',
              description: `
            Transformação do conhecimento em prática
            através de projetos e experimentos.
          `,
            },
            item3: {
              title: 'Evolução',
              description: `
            Revisão constante de práticas e busca por
            maneiras melhores de desenvolver software.
          `,
            },
            item4: {
              title: 'Experimentação',
              description: `
            Exploração de novas tecnologias para entender
            seus benefícios, limitações e aplicações.
          `,
            },
          },
        },

        // CTA
        cta: {
          title: 'Conhecimento em constante construção.',
          description: `
        A formação acadêmica é parte da trajetória, mas a evolução
        profissional continua através da prática, dos projetos
        e dos novos desafios.
      `,
          skillsButton: 'Habilidades',
          contactButton: 'Entre em contato',
        },
      };
    } else if (this.settingsService.language === 'english') {
      this.educationPage = {
        header: {
          label: 'Academic background',
          title: 'Knowledge that follows',
          titleHighlight: ' my evolution.',
          description:
            'My background combines academic knowledge, a specialization in Software Engineering, and continuous learning through practice and the study of new technologies.',
        },

        mainEducation: {
          englishCourse: {
            badge: 'English Course',
            title: 'Languages and Information Technology Program',
            institution: 'Universidade de Pernambuco',
            period: 'August 2026 — Present',
            description:
              'English training focused on developing the four main communication skills: listening, speaking, reading, and writing.',

            skills: {
              item1: {
                title: 'English',
                description: 'Further development of proficiency in another language.',
              },
              item2: {
                title: 'Communication',
                description: 'Developing effective communication skills.',
              },
            },
          },

          postgraduate: {
            badge: 'Postgraduate degree',
            title: 'Software Engineering',
            institution: 'Faculdade Focus',
            period: 'March 2025 — December 2025',
            description:
              'Specialization focused on deepening knowledge related to software engineering, development, and maintenance.',

            skills: {
              item1: {
                title: 'Software Engineering',
                description:
                  'In-depth knowledge of processes, practices, and principles used in building software systems.',
              },
              item2: {
                title: 'Development',
                description:
                  'Knowledge applied to the organization, evolution, and maintenance of systems.',
              },
            },
          },

          undergraduate: {
            badge: 'Undergraduate degree',
            title: 'Systems Analysis and Development',
            institution: 'Faculdade Senac Pernambuco',
            period: 'March 2022 — June 2024',
            description:
              'Education that provided a solid foundation in systems development, programming, databases, software engineering, and information technology fundamentals.',

            skills: {
              item1: {
                title: 'Programming',
                description: 'Fundamentals of application development and software construction.',
              },
              item2: {
                title: 'Data',
                description: 'Concepts related to databases and information persistence.',
              },
              item3: {
                title: 'Systems',
                description: 'Analysis, modeling, and development of information systems.',
              },
            },
          },
        },

        continuousLearning: {
          label: 'Beyond formal education',
          title: 'Continuous learning',

          paragraphs: {
            item1:
              'Technology is constantly evolving. Therefore, I consider continuous learning an essential part of my career as a developer.',

            item2:
              'A large part of this learning comes from combining study, experimentation, and practical application in real-world projects.',
          },

          items: {
            item1: {
              title: 'Study',
              description:
                'Keeping up with concepts, patterns, tools, and technologies relevant to software development.',
            },

            item2: {
              title: 'Practice',
              description: 'Turning knowledge into practice through projects and experiments.',
            },

            item3: {
              title: 'Evolution',
              description:
                'Constantly reviewing practices and looking for better ways to develop software.',
            },

            item4: {
              title: 'Experimentation',
              description:
                'Exploring new technologies to understand their benefits, limitations, and applications.',
            },
          },
        },

        cta: {
          title: 'Knowledge under constant construction.',
          description:
            'Academic education is part of the journey, but professional growth continues through practice, projects, and new challenges.',

          skillsButton: 'Skills',
          contactButton: 'Get in touch',
        },
      };
    } else if (this.settingsService.language === 'spanish') {
      this.educationPage = {
        header: {
          label: 'Formación académica',
          title: 'Conocimiento que acompaña',
          titleHighlight: ' mi evolución.',
          description:
            'Mi formación combina conocimientos académicos, una especialización en Ingeniería de Software y aprendizaje continuo a través de la práctica y el estudio de nuevas tecnologías.',
        },

        mainEducation: {
          englishCourse: {
            badge: 'Curso de Inglés',
            title: 'Programa de Lenguas e Informática',
            institution: 'Universidade de Pernambuco',
            period: 'Agosto de 2026 — Actualmente',
            description:
              'Formación en inglés enfocada en el desarrollo de las cuatro principales habilidades de comunicación: escuchar, hablar, leer y escribir.',

            skills: {
              item1: {
                title: 'Inglés',
                description: 'Profundización en otro idioma.',
              },
              item2: {
                title: 'Comunicación',
                description: 'Desarrollo de la competencia comunicativa.',
              },
            },
          },

          postgraduate: {
            badge: 'Posgrado',
            title: 'Ingeniería de Software',
            institution: 'Faculdade Focus',
            period: 'Marzo de 2025 — Diciembre de 2025',
            description:
              'Especialización enfocada en profundizar los conocimientos relacionados con la ingeniería, el desarrollo y el mantenimiento de software.',

            skills: {
              item1: {
                title: 'Ingeniería de Software',
                description:
                  'Profundización en procesos, prácticas y principios utilizados en la construcción de sistemas de software.',
              },
              item2: {
                title: 'Desarrollo',
                description:
                  'Conocimientos aplicados a la organización, evolución y mantenimiento de sistemas.',
              },
            },
          },

          undergraduate: {
            badge: 'Grado',
            title: 'Análisis y Desarrollo de Sistemas',
            institution: 'Faculdade Senac Pernambuco',
            period: 'Marzo de 2022 — Junio de 2024',
            description:
              'Formación que proporcionó una base sólida en desarrollo de sistemas, programación, bases de datos, ingeniería de software y fundamentos de la tecnología de la información.',

            skills: {
              item1: {
                title: 'Programación',
                description: 'Fundamentos del desarrollo y la construcción de aplicaciones.',
              },
              item2: {
                title: 'Datos',
                description:
                  'Conceptos relacionados con bases de datos y persistencia de información.',
              },
              item3: {
                title: 'Sistemas',
                description: 'Análisis, modelado y desarrollo de sistemas de información.',
              },
            },
          },
        },

        continuousLearning: {
          label: 'Más allá de la formación',
          title: 'Aprendizaje continuo',

          paragraphs: {
            item1:
              'La tecnología está en constante evolución. Por eso, considero el aprendizaje continuo una parte esencial de mi carrera como desarrollador.',

            item2:
              'Gran parte de este aprendizaje ocurre a través de la combinación entre estudio, experimentación y aplicación práctica en proyectos reales.',
          },

          items: {
            item1: {
              title: 'Estudios',
              description:
                'Seguimiento de conceptos, patrones, herramientas y tecnologías relevantes para el desarrollo de software.',
            },

            item2: {
              title: 'Práctica',
              description:
                'Transformación del conocimiento en práctica mediante proyectos y experimentos.',
            },

            item3: {
              title: 'Evolución',
              description:
                'Revisión constante de prácticas y búsqueda de mejores formas de desarrollar software.',
            },

            item4: {
              title: 'Experimentación',
              description:
                'Exploración de nuevas tecnologías para comprender sus beneficios, limitaciones y aplicaciones.',
            },
          },
        },

        cta: {
          title: 'Conocimiento en constante construcción.',
          description:
            'La formación académica es parte de la trayectoria, pero la evolución profesional continúa a través de la práctica, los proyectos y los nuevos desafíos.',

          skillsButton: 'Habilidades',
          contactButton: 'Contáctame',
        },
      };
    }
  }
}
