import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SettingsService } from '../../core/services/settings.service';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projectsPage = {
    header: {
      label: '',
      title: '',
      titleHighlight: '',
      description: '',
      description2: '',
    },

    featured: {
      label: '',
      title: '',

      projectOne: {
        tags: {
          artificialIntelligence: '',
          python: '',
          angular: '',
        },
        title: '',
        description: '',
        contributionsTitle: '',
        contributions: {
          itemOne: '',
          itemTwo: '',
          itemThree: '',
          itemFour: '',
        },
        gitHubRepository: '',
        viewProjectButton: '',
      },

      projectTwo: {
        tags: {
          educational: '',
          bootstrap: '',
          angular: '',
        },
        title: '',
        description: '',
        contributionsTitle: '',
        contributions: {
          itemOne: '',
          itemTwo: '',
          itemThree: '',
          itemFour: '',
        },
        gitHubRepository: '',
        viewProjectButton: '',
      },

      projectThree: {
        tags: {
          performance: '',
          k6: '',
          apis: '',
        },
        title: '',
        description: '',
        contributionsTitle: '',
        contributions: {
          itemOne: '',
          itemTwo: '',
          itemThree: '',
          itemFour: '',
        },
        gitHubRepository: '',
        viewProjectButton: '',
      },
    },

    otherProjects: {
      label: '',
      title: '',
      description: '',

      dentalClinic: {
        title: '',
        description: '',
        openProject: '',
        tags: {
          health: '',
          angular: '',
          responsive: '',
        },
      },

      menu: {
        title: '',
        description: '',
        openProject: '',
        tags: {
          angular: '',
          typescript: '',
          bootstrap: '',
        },
      },

      restApi: {
        title: '',
        description: '',
        openProject: '',
        tags: {
          rest: '',
          api: '',
          backend: '',
        },
      },

      dashboard: {
        title: '',
        description: '',
        openProject: '',
        tags: {
          angular: '',
          charts: '',
          ui: '',
        },
      },

      responsiveInterface: {
        title: '',
        description: '',
        openProject: '',
        tags: {
          html: '',
          css: '',
          bootstrap: '',
        },
      },

      studies: {
        title: '',
        description: '',
        openProject: '',
        tags: {
          experiments: '',
          javascript: '',
          angular: '',
        },
      },
    },

    cta: {
      title: '',
      description: '',
      experiencesButton: '',
      contactButton: '',
    },
  };

  constructor(protected settingsService: SettingsService) {}

  ngOnInit() {
    this.detectLanguage();
  }

  detectLanguage() {
    if (this.settingsService.language === 'portuguese') {
      this.projectsPage = {
        header: {
          label: 'Portfólio',
          title: 'Projetos que transformam',
          titleHighlight: ' ideias em soluções.',
          description:
            'Uma seleção de projetos, aplicações e experimentos desenvolvidos ao longo da minha trajetória como desenvolvedor.',
          description2:
            'Aqui você pode conhecer um pouco mais sobre as tecnologias utilizadas, os desafios encontrados e as decisões tomadas durante o desenvolvimento.',
        },

        featured: {
          label: 'Destaques',
          title: 'Projetos em destaque',

          projectOne: {
            tags: {
              artificialIntelligence: 'Inteligência Artificial',
              python: 'Python',
              angular: 'Angular',
            },
            title: 'RisoflorAI',
            description:
              'Aplicação web desenvolvida com foco em inteligência artificial e integração de sistemas.',
            contributionsTitle: 'Principais contribuições',
            contributions: {
              itemOne: 'Chatbot com Inteligência Artificial',
              itemTwo: 'Integração com APIs REST',
              itemThree: 'Integração com Inteligência Artificial',
              itemFour: 'Desenvolvimento de interfaces responsivas',
            },
            gitHubRepository: 'Repositório',
            viewProjectButton: 'Ver projeto',
          },

          projectTwo: {
            tags: {
              educational: 'Educacional',
              bootstrap: 'Bootstrap',
              angular: 'Angular',
            },
            title: 'Brainstorm',
            description:
              'Projeto voltado a Educação.\nCursos e aulas para explorar o potencial de um desenvolvedor.',
            contributionsTitle: 'Principais contribuições',
            contributions: {
              itemOne: 'Desenvolvimento de interfaces responsivas',
              itemTwo: 'Componentização da aplicação',
              itemThree: 'Aplicação de boas práticas de Front-End',
              itemFour: 'Plataforma educacional',
            },
            gitHubRepository: 'Repositório',
            viewProjectButton: 'Ver projeto',
          },

          projectThree: {
            tags: {
              performance: 'Performance',
              k6: 'K6',
              apis: 'APIs',
            },
            title: 'Testes de Performance',
            description:
              'Projeto voltado à avaliação de desempenho e comportamento de aplicações submetidas a diferentes níveis de carga.',
            contributionsTitle: 'Principais contribuições',
            contributions: {
              itemOne: 'Criação de cenários de carga',
              itemTwo: 'Avaliação de tempo de resposta',
              itemThree: 'Identificação de gargalos',
              itemFour: 'Análise de escalabilidade',
            },
            gitHubRepository: 'Repositório',
            viewProjectButton: 'Ver projeto',
          },
        },

        otherProjects: {
          label: 'Mais trabalhos',
          title: 'Outros projetos',
          description:
            'Projetos menores, estudos e experimentos desenvolvidos para colocar conhecimentos em prática.',

          dentalClinic: {
            title: 'Clínica Odontológica',
            description:
              'Projeto voltado à criação de uma lading page para uma clínica ondotolóigica, com foco em conversão de visitantes em clientes.',
            openProject: 'Abrir projeto',
            tags: {
              health: 'Saúde',
              angular: 'Angular',
              responsive: 'Responsivo',
            },
          },

          menu: {
            title: 'Menu',
            description:
              'Cardápio digital. \nDesenvolvimento baseado em Design System e responsividade.',
            openProject: 'Abrir projeto',
            tags: {
              angular: 'Angular',
              typescript: 'TypeScript',
              bootstrap: 'Bootstrap',
            },
          },

          restApi: {
            title: 'API REST',
            description:
              'Projeto desenvolvido para estudar integração entre aplicações, comunicação HTTP e organização de serviços.',
            openProject: 'Abrir projeto',
            tags: {
              rest: 'REST',
              api: 'API',
              backend: 'Backend',
            },
          },

          dashboard: {
            title: 'Dashboard',
            description:
              'Interface para visualização e organização de informações através de indicadores e elementos gráficos.',
            openProject: 'Abrir projeto',
            tags: {
              angular: 'Angular',
              charts: 'Charts',
              ui: 'UI',
            },
          },

          responsiveInterface: {
            title: 'Interface Responsiva',
            description:
              'Projeto focado na criação de uma experiência consistente entre dispositivos desktop, tablet e mobile.',
            openProject: 'Abrir projeto',
            tags: {
              html: 'HTML',
              css: 'CSS',
              bootstrap: 'Bootstrap',
            },
          },

          studies: {
            title: 'Estudos e experimentos',
            description:
              'Pequenos projetos desenvolvidos para experimentar novas tecnologias, padrões e abordagens de desenvolvimento.',
            openProject: 'Abrir projeto',
            tags: {
              experiments: 'Experimentos',
              javascript: 'JavaScript',
              angular: 'Angular',
            },
          },
        },

        cta: {
          title: 'Por trás de cada projeto, uma experiência.',
          description:
            'Conheça minha trajetória profissional e descubra como transformo requisitos e desafios técnicos em soluções digitais.',
          experiencesButton: 'Experiências',
          contactButton: 'Entre em contato',
        },
      };
    } else if (this.settingsService.language === 'english') {
      this.projectsPage = {
        header: {
          label: 'Portfolio',
          title: 'Projects that turn',
          titleHighlight: ' ideas into solutions.',
          description:
            'A selection of projects, applications, and experiments developed throughout my journey as a developer.',
          description2:
            'Here you can learn more about the technologies used, the challenges encountered, and the decisions made during development.',
        },

        featured: {
          label: 'Highlights',
          title: 'Featured projects',

          projectOne: {
            tags: {
              artificialIntelligence: 'Artificial Intelligence',
              python: 'Python',
              angular: 'Angular',
            },
            title: 'RisoflorAI',
            description:
              'Web application developed with a focus on artificial intelligence and systems integration.',
            contributionsTitle: 'Main contributions',
            contributions: {
              itemOne: 'Artificial Intelligence chatbot',
              itemTwo: 'REST API integration',
              itemThree: 'Artificial Intelligence integration',
              itemFour: 'Responsive interface development',
            },
            gitHubRepository: 'Repository',
            viewProjectButton: 'View project',
          },

          projectTwo: {
            tags: {
              educational: 'Educational',
              bootstrap: 'Bootstrap',
              angular: 'Angular',
            },
            title: 'Brainstorm',
            description:
              'Project focused on Education.\nCourses and lessons designed to explore a developer’s potential.',
            contributionsTitle: 'Main contributions',
            contributions: {
              itemOne: 'Responsive interface development',
              itemTwo: 'Application componentization',
              itemThree: 'Application of Front-End best practices',
              itemFour: 'Educational platform',
            },
            gitHubRepository: 'Repository',
            viewProjectButton: 'View project',
          },

          projectThree: {
            tags: {
              performance: 'Performance',
              k6: 'K6',
              apis: 'APIs',
            },
            title: 'Performance Testing',
            description:
              'Project focused on evaluating the performance and behavior of applications subjected to different levels of load.',
            contributionsTitle: 'Main contributions',
            contributions: {
              itemOne: 'Load scenario creation',
              itemTwo: 'Response time evaluation',
              itemThree: 'Bottleneck identification',
              itemFour: 'Scalability analysis',
            },
            gitHubRepository: 'Repository',
            viewProjectButton: 'View project',
          },
        },

        otherProjects: {
          label: 'More work',
          title: 'Other projects',
          description:
            'Smaller projects, studies, and experiments developed to put knowledge into practice.',

          dentalClinic: {
            title: 'Dental Clinic',
            description:
              'Project focused on creating a landing page for a dental clinic, with the goal of converting visitors into clients.',
            openProject: 'Open project',
            tags: {
              health: 'Health',
              angular: 'Angular',
              responsive: 'Responsive',
            },
          },

          menu: {
            title: 'Menu',
            description:
              'Digital menu. \nDevelopment based on Design System and responsive design.',
            openProject: 'Open project',
            tags: {
              angular: 'Angular',
              typescript: 'TypeScript',
              bootstrap: 'Bootstrap',
            },
          },

          restApi: {
            title: 'REST API',
            description:
              'Project developed to study application integration, HTTP communication, and service organization.',
            openProject: 'Open project',
            tags: {
              rest: 'REST',
              api: 'API',
              backend: 'Backend',
            },
          },

          dashboard: {
            title: 'Dashboard',
            description:
              'Interface for visualizing and organizing information through indicators and graphical elements.',
            openProject: 'Open project',
            tags: {
              angular: 'Angular',
              charts: 'Charts',
              ui: 'UI',
            },
          },

          responsiveInterface: {
            title: 'Responsive Interface',
            description:
              'Project focused on creating a consistent experience across desktop, tablet, and mobile devices.',
            openProject: 'Open project',
            tags: {
              html: 'HTML',
              css: 'CSS',
              bootstrap: 'Bootstrap',
            },
          },

          studies: {
            title: 'Studies and experiments',
            description:
              'Small projects developed to experiment with new technologies, patterns, and development approaches.',
            openProject: 'Open project',
            tags: {
              experiments: 'Experiments',
              javascript: 'JavaScript',
              angular: 'Angular',
            },
          },
        },

        cta: {
          title: 'Behind every project, there is experience.',
          description:
            'Explore my professional journey and discover how I turn requirements and technical challenges into digital solutions.',
          experiencesButton: 'Experience',
          contactButton: 'Get in touch',
        },
      };
    } else if (this.settingsService.language === 'spanish') {
      this.projectsPage = {
        header: {
          label: 'Portafolio',
          title: 'Proyectos que transforman',
          titleHighlight: ' ideas en soluciones.',
          description:
            'Una selección de proyectos, aplicaciones y experimentos desarrollados a lo largo de mi trayectoria como desarrollador.',
          description2:
            'Aquí puedes conocer un poco más sobre las tecnologías utilizadas, los desafíos encontrados y las decisiones tomadas durante el desarrollo.',
        },

        featured: {
          label: 'Destacados',
          title: 'Proyectos destacados',

          projectOne: {
            tags: {
              artificialIntelligence: 'Inteligencia Artificial',
              python: 'Python',
              angular: 'Angular',
            },
            title: 'RisoflorAI',
            description:
              'Aplicación web desarrollada con enfoque en inteligencia artificial e integración de sistemas.',
            contributionsTitle: 'Principales contribuciones',
            contributions: {
              itemOne: 'Chatbot con Inteligencia Artificial',
              itemTwo: 'Integración con APIs REST',
              itemThree: 'Integración con Inteligencia Artificial',
              itemFour: 'Desarrollo de interfaces responsivas',
            },
            gitHubRepository: 'Repositorio',
            viewProjectButton: 'Ver proyecto',
          },

          projectTwo: {
            tags: {
              educational: 'Educativo',
              bootstrap: 'Bootstrap',
              angular: 'Angular',
            },
            title: 'Brainstorm',
            description:
              'Proyecto orientado a la Educación.\nCursos y clases para explorar el potencial de un desarrollador.',
            contributionsTitle: 'Principales contribuciones',
            contributions: {
              itemOne: 'Desarrollo de interfaces responsivas',
              itemTwo: 'Componentización de la aplicación',
              itemThree: 'Aplicación de buenas prácticas de Front-End',
              itemFour: 'Plataforma educativa',
            },
            gitHubRepository: 'Repositorio',
            viewProjectButton: 'Ver proyecto',
          },

          projectThree: {
            tags: {
              performance: 'Rendimiento',
              k6: 'K6',
              apis: 'APIs',
            },
            title: 'Pruebas de rendimiento',
            description:
              'Proyecto orientado a la evaluación del rendimiento y comportamiento de aplicaciones sometidas a diferentes niveles de carga.',
            contributionsTitle: 'Principales contribuciones',
            contributions: {
              itemOne: 'Creación de escenarios de carga',
              itemTwo: 'Evaluación del tiempo de respuesta',
              itemThree: 'Identificación de cuellos de botella',
              itemFour: 'Análisis de escalabilidad',
            },
            gitHubRepository: 'Repositorio',
            viewProjectButton: 'Ver proyecto',
          },
        },

        otherProjects: {
          label: 'Más trabajos',
          title: 'Otros proyectos',
          description:
            'Proyectos pequeños, estudios y experimentos desarrollados para poner los conocimientos en práctica.',

          dentalClinic: {
            title: 'Clínica Dental',
            description:
              'Proyecto orientado a la creación de una landing page para una clínica odontológica, con el objetivo de convertir visitantes en clientes.',
            openProject: 'Abrir proyecto',
            tags: {
              health: 'Salud',
              angular: 'Angular',
              responsive: 'Responsivo',
            },
          },

          menu: {
            title: 'Menú',
            description: 'Menú digital. \nDesarrollo basado en Design System y diseño responsivo.',
            openProject: 'Abrir proyecto',
            tags: {
              angular: 'Angular',
              typescript: 'TypeScript',
              bootstrap: 'Bootstrap',
            },
          },

          restApi: {
            title: 'API REST',
            description:
              'Proyecto desarrollado para estudiar la integración entre aplicaciones, la comunicación HTTP y la organización de servicios.',
            openProject: 'Abrir proyecto',
            tags: {
              rest: 'REST',
              api: 'API',
              backend: 'Backend',
            },
          },

          dashboard: {
            title: 'Dashboard',
            description:
              'Interfaz para visualizar y organizar información mediante indicadores y elementos gráficos.',
            openProject: 'Abrir proyecto',
            tags: {
              angular: 'Angular',
              charts: 'Charts',
              ui: 'UI',
            },
          },

          responsiveInterface: {
            title: 'Interfaz Responsiva',
            description:
              'Proyecto enfocado en crear una experiencia consistente entre dispositivos de escritorio, tablet y móvil.',
            openProject: 'Abrir proyecto',
            tags: {
              html: 'HTML',
              css: 'CSS',
              bootstrap: 'Bootstrap',
            },
          },

          studies: {
            title: 'Estudios y experimentos',
            description:
              'Pequeños proyectos desarrollados para experimentar con nuevas tecnologías, patrones y enfoques de desarrollo.',
            openProject: 'Abrir proyecto',
            tags: {
              experiments: 'Experimentos',
              javascript: 'JavaScript',
              angular: 'Angular',
            },
          },
        },

        cta: {
          title: 'Detrás de cada proyecto, hay experiencia.',
          description:
            'Conoce mi trayectoria profesional y descubre cómo transformo requisitos y desafíos técnicos en soluciones digitales.',
          experiencesButton: 'Experiencias',
          contactButton: 'Contáctame',
        },
      };
    }
  }
}
