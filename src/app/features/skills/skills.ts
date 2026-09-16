import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SettingsService } from '../../core/services/settings.service';

@Component({
  selector: 'app-skills',
  imports: [RouterLink],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skillsPage = {
    header: {
      label: '',
      title: '',
      titleHighlight: '',
      description: '',
    },

    overview: {
      mainAreaLabel: '',
      mainAreaTitle: '',
      mainAreaDescription: '',

      experienceLabel: '',
      experienceTitle: '',
      experienceDescription: '',

      technicalInterestLabel: '',
      technicalInterestTitle: '',
      technicalInterestDescription: '',
    },

    frontend: {
      number: '',
      title: '',
      description: '',

      angular: {
        title: '',
        badge: '',
        description: '',
      },

      typescript: {
        title: '',
        description: '',
      },

      javascript: {
        title: '',
        description: '',
      },

      htmlCssJs: {
        title: '',
        description: '',
      },

      bootstrap: {
        title: '',
        description: '',
      },

      designSystem: {
        title: '',
        description: '',
      },
    },

    backend: {
      number: '',
      title: '',
      description: '',

      rest: {
        title: '',
        description: '',
      },

      http: {
        title: '',
        description: '',
      },

      python: {
        title: '',
        description: '',
      },

      fastApi: {
        title: '',
        description: '',
      },
    },

    database: {
      number: '',
      title: '',
      description: '',

      sql: {
        title: '',
        description: '',
      },

      relationships: {
        title: '',
        description: '',
      },

      queries: {
        title: '',
        description: '',
      },

      dataManipulation: {
        title: '',
        description: '',
      },
    },

    devops: {
      number: '',
      title: '',
      description: '',

      git: {
        title: '',
        description: '',
      },

      deploy: {
        title: '',
        description: '',
      },

      k6: {
        title: '',
        description: '',
      },

      cliAutomation: {
        title: '',
        description: '',
      },
    },

    practices: {
      label: '',
      title: '',
      description: '',

      componentization: {
        title: '',
        description: '',
      },

      responsiveness: {
        title: '',
        description: '',
      },

      quality: {
        title: '',
        description: '',
      },

      evolution: {
        title: '',
        description: '',
      },
    },

    cta: {
      title: '',
      description: '',
      projectsButton: '',
      experiencesButton: '',
    },
  };

  constructor(protected settingsService: SettingsService) {}

  ngOnInit() {
    this.detectLanguage();
  }

  detectLanguage() {
    if (this.settingsService.language === 'portuguese') {
      this.skillsPage = {
        header: {
          label: 'Competências',
          title: 'Tecnologias e conhecimentos que',
          titleHighlight: 'fazem parte da minha prática.',
          description:
            'Minha principal área de atuação é o desenvolvimento Front-End, especialmente com Angular, mas minha experiência envolve diferentes tecnologias e conceitos que fazem parte do desenvolvimento de aplicações web.',
        },

        overview: {
          mainAreaLabel: 'PRINCIPAL ÁREA',
          mainAreaTitle: 'Front-End',
          mainAreaDescription:
            'Desenvolvimento de aplicações web com foco em interfaces modernas, responsivas, reutilizáveis e orientadas à experiência do usuário.',

          experienceLabel: 'EXPERIÊNCIA',
          experienceTitle: 'Integração',
          experienceDescription:
            'Integração entre aplicações através de APIs, comunicação HTTP e organização de serviços para consumo de dados.',

          technicalInterestLabel: 'INTERESSE TÉCNICO',
          technicalInterestTitle: 'Performance',
          technicalInterestDescription:
            'Testes, análise de desempenho e preocupação com escalabilidade e comportamento das aplicações.',
        },

        frontend: {
          number: '01',
          title: 'Front-End',
          description:
            'Área em que concentro minha maior experiência profissional, trabalhando na construção e evolução de aplicações web.',

          angular: {
            title: 'Angular',
            badge: 'Principal',
            description:
              'Desenvolvimento de aplicações utilizando componentes, serviços, roteamento, formulários, interceptors e integração com APIs.',
          },

          typescript: {
            title: 'TypeScript',
            description:
              'Desenvolvimento com tipagem, interfaces, classes, generics e recursos modernos da linguagem.',
          },

          javascript: {
            title: 'JavaScript',
            description:
              'Conhecimentos em fundamentos da linguagem, manipulação de dados, eventos, APIs do navegador e programação assíncrona.',
          },

          htmlCssJs: {
            title: 'HTML • CSS • JS',
            description:
              'Construção de interfaces semânticas, responsivas e adaptadas a diferentes tamanhos de tela. Manipulação de dados, eventos, APIs do navegador.',
          },

          bootstrap: {
            title: 'Bootstrap',
            description:
              'Utilização do framework para criação de layouts responsivos, componentes e padronização visual.',
          },

          designSystem: {
            title: 'Design System',
            description:
              'Desenvolvimento baseado em componentes reutilizáveis e padrões visuais para manter consistência entre interfaces.',
          },
        },

        backend: {
          number: '02',
          title: 'Back-End & APIs',
          description:
            'Conhecimentos que complementam minha atuação no desenvolvimento Front-End e permitem compreender melhor todo o fluxo de uma aplicação.',

          rest: {
            title: 'APIs REST',
            description:
              'Integração entre aplicações através de requisições HTTP, tratamento de respostas e consumo de serviços.',
          },

          http: {
            title: 'HTTP',
            description:
              'Conhecimentos sobre métodos HTTP, status de resposta, headers, interceptação e comunicação entre cliente e servidor.',
          },

          python: {
            title: 'Python',
            description:
              'Conhecimentos aplicados ao desenvolvimento de serviços e APIs, complementando a atuação no desenvolvimento de aplicações.',
          },

          fastApi: {
            title: 'FastAPI',
            description: 'Desenvolvimento e integração com APIs utilizando Python e FastAPI.',
          },
        },

        database: {
          number: '03',
          title: 'Dados',
          description:
            'Conhecimentos relacionados à utilização de bancos de dados relacionais para armazenamento, organização e consulta de informações em aplicações.',

          sql: {
            title: 'SQL',
            description:
              'Criação e execução de consultas para inserção, atualização, exclusão e recuperação de dados utilizando SQL.',
          },

          relationships: {
            title: 'Relacionamentos',
            description:
              'Utilização de relacionamentos entre tabelas, chaves primárias e estrangeiras para estruturar e organizar os dados.',
          },

          queries: {
            title: 'Consultas',
            description:
              'Construção de consultas utilizando filtros, ordenação, agrupamentos e diferentes tipos de JOIN para obtenção de informações.',
          },

          dataManipulation: {
            title: 'Manipulação de dados',
            description:
              'Conhecimentos sobre criação e alteração de tabelas, índices e estruturas necessárias para o funcionamento do banco de dados.',
          },
        },

        devops: {
          number: '04',
          title: 'Ferramentas & Infraestrutura',
          description:
            'Ferramentas que fazem parte do fluxo de desenvolvimento, testes, versionamento e disponibilização de aplicações.',

          git: {
            title: 'Git',
            description:
              'Versionamento de código, organização de branches e colaboração no desenvolvimento.',
          },

          deploy: {
            title: 'Deploy',
            description:
              'Conhecimentos relacionados à publicação, hospedagem e infraestrutura de aplicações.',
          },

          k6: {
            title: 'K6',
            description:
              'Criação e execução de testes de carga para avaliar desempenho e comportamento de APIs e aplicações.',
          },

          cliAutomation: {
            title: 'CLI & Automação',
            description:
              'Utilização de ferramentas de linha de comando e automação para otimizar tarefas recorrentes.',
          },
        },

        practices: {
          label: 'Além das tecnologias',
          title: 'Como aplico meus conhecimentos',
          description:
            'Ferramentas são importantes, mas a qualidade de uma solução também depende das decisões tomadas durante o desenvolvimento.',

          componentization: {
            title: 'Componentização',
            description: 'Criação de componentes reutilizáveis e responsabilidades bem definidas.',
          },

          responsiveness: {
            title: 'Responsividade',
            description: 'Interfaces adaptadas a diferentes dispositivos e tamanhos de tela.',
          },

          quality: {
            title: 'Qualidade',
            description: 'Preocupação com manutenção, organização e confiabilidade das aplicações.',
          },

          evolution: {
            title: 'Evolução',
            description: 'Busca constante por melhorias e aprendizado de novas tecnologias.',
          },
        },

        cta: {
          title: 'Quer conhecer meu trabalho na prática?',
          description:
            'Veja alguns dos projetos em que essas tecnologias e conhecimentos são aplicados para construir soluções reais.',
          projectsButton: 'Ver projetos',
          experiencesButton: 'Ver experiências',
        },
      };
    } else if (this.settingsService.language === 'english') {
      this.skillsPage = {
        header: {
          label: 'Skills',
          title: 'Technologies and knowledge that',
          titleHighlight: 'are part of my practice.',
          description:
            'My main area of expertise is Front-End development, especially with Angular, but my experience involves different technologies and concepts that are part of web application development.',
        },

        overview: {
          mainAreaLabel: 'MAIN AREA',
          mainAreaTitle: 'Front-End',
          mainAreaDescription:
            'Web application development focused on modern, responsive, reusable interfaces and user experience.',

          experienceLabel: 'EXPERIENCE',
          experienceTitle: 'Integration',
          experienceDescription:
            'Integration between applications through APIs, HTTP communication, and service organization for data consumption.',

          technicalInterestLabel: 'TECHNICAL INTEREST',
          technicalInterestTitle: 'Performance',
          technicalInterestDescription:
            'Testing, performance analysis, and attention to scalability and application behavior.',
        },

        frontend: {
          number: '01',
          title: 'Front-End',
          description:
            'The area where I have the most professional experience, working on the development and evolution of web applications.',

          angular: {
            title: 'Angular',
            badge: 'Primary',
            description:
              'Application development using components, services, routing, forms, interceptors, and API integration.',
          },

          typescript: {
            title: 'TypeScript',
            description:
              'Development using typing, interfaces, classes, generics, and modern language features.',
          },

          javascript: {
            title: 'JavaScript',
            description:
              'Knowledge of language fundamentals, data manipulation, events, browser APIs, and asynchronous programming.',
          },

          htmlCssJs: {
            title: 'HTML • CSS • JS',
            description:
              'Building semantic, responsive interfaces adapted to different screen sizes. Data manipulation, events, and browser APIs.',
          },

          bootstrap: {
            title: 'Bootstrap',
            description:
              'Using the framework to create responsive layouts, components, and visual standardization.',
          },

          designSystem: {
            title: 'Design System',
            description:
              'Development based on reusable components and visual patterns to maintain consistency across interfaces.',
          },
        },

        backend: {
          number: '02',
          title: 'Back-End & APIs',
          description:
            'Knowledge that complements my Front-End development and provides a better understanding of the complete application flow.',

          rest: {
            title: 'REST APIs',
            description:
              'Integration between applications through HTTP requests, response handling, and service consumption.',
          },

          http: {
            title: 'HTTP',
            description:
              'Knowledge of HTTP methods, response status codes, headers, interception, and client-server communication.',
          },

          python: {
            title: 'Python',
            description:
              'Knowledge applied to service and API development, complementing my application development experience.',
          },

          fastApi: {
            title: 'FastAPI',
            description: 'Development and integration of APIs using Python and FastAPI.',
          },
        },

        database: {
          number: '03',
          title: 'Data',
          description:
            'Knowledge related to the use of relational databases for storing, organizing, and querying information in applications.',

          sql: {
            title: 'SQL',
            description:
              'Creating and executing queries for inserting, updating, deleting, and retrieving data using SQL.',
          },

          relationships: {
            title: 'Relationships',
            description:
              'Using relationships between tables, primary keys, and foreign keys to structure and organize data.',
          },

          queries: {
            title: 'Queries',
            description:
              'Building queries using filters, sorting, grouping, and different types of JOIN to retrieve information.',
          },

          dataManipulation: {
            title: 'Data manipulation',
            description:
              'Knowledge of creating and modifying tables, indexes, and structures required for database operation.',
          },
        },

        devops: {
          number: '04',
          title: 'Tools & Infrastructure',
          description:
            'Tools that are part of the development, testing, version control, and application deployment workflow.',

          git: {
            title: 'Git',
            description:
              'Code version control, branch organization, and collaboration during development.',
          },

          deploy: {
            title: 'Deploy',
            description:
              'Knowledge related to application publishing, hosting, and infrastructure.',
          },

          k6: {
            title: 'K6',
            description:
              'Creating and executing load tests to evaluate the performance and behavior of APIs and applications.',
          },

          cliAutomation: {
            title: 'CLI & Automation',
            description: 'Using command-line tools and automation to optimize recurring tasks.',
          },
        },

        practices: {
          label: 'Beyond technologies',
          title: 'How I apply my knowledge',
          description:
            'Tools are important, but the quality of a solution also depends on the decisions made during development.',

          componentization: {
            title: 'Componentization',
            description: 'Creating reusable components with clearly defined responsibilities.',
          },

          responsiveness: {
            title: 'Responsiveness',
            description: 'Interfaces adapted to different devices and screen sizes.',
          },

          quality: {
            title: 'Quality',
            description: 'Focus on maintainability, organization, and application reliability.',
          },

          evolution: {
            title: 'Evolution',
            description: 'Continuous pursuit of improvements and learning new technologies.',
          },
        },

        cta: {
          title: 'Want to see my work in practice?',
          description:
            'Explore some of the projects where these technologies and skills are applied to build real-world solutions.',
          projectsButton: 'View projects',
          experiencesButton: 'View experiences',
        },
      };
    } else if (this.settingsService.language === 'spanish') {
      this.skillsPage = {
        header: {
          label: 'Competencias',
          title: 'Tecnologías y conocimientos que',
          titleHighlight: 'forman parte de mi práctica.',
          description:
            'Mi principal área de actuación es el desarrollo Front-End, especialmente con Angular, pero mi experiencia incluye diferentes tecnologías y conceptos que forman parte del desarrollo de aplicaciones web.',
        },

        overview: {
          mainAreaLabel: 'ÁREA PRINCIPAL',
          mainAreaTitle: 'Front-End',
          mainAreaDescription:
            'Desarrollo de aplicaciones web centrado en interfaces modernas, responsivas, reutilizables y orientadas a la experiencia del usuario.',

          experienceLabel: 'EXPERIENCIA',
          experienceTitle: 'Integración',
          experienceDescription:
            'Integración entre aplicaciones mediante APIs, comunicación HTTP y organización de servicios para el consumo de datos.',

          technicalInterestLabel: 'INTERÉS TÉCNICO',
          technicalInterestTitle: 'Rendimiento',
          technicalInterestDescription:
            'Pruebas, análisis de rendimiento y atención a la escalabilidad y al comportamiento de las aplicaciones.',
        },

        frontend: {
          number: '01',
          title: 'Front-End',
          description:
            'Área en la que concentro mi mayor experiencia profesional, trabajando en la construcción y evolución de aplicaciones web.',

          angular: {
            title: 'Angular',
            badge: 'Principal',
            description:
              'Desarrollo de aplicaciones utilizando componentes, servicios, enrutamiento, formularios, interceptores e integración con APIs.',
          },

          typescript: {
            title: 'TypeScript',
            description:
              'Desarrollo utilizando tipado, interfaces, clases, genéricos y recursos modernos del lenguaje.',
          },

          javascript: {
            title: 'JavaScript',
            description:
              'Conocimientos sobre fundamentos del lenguaje, manipulación de datos, eventos, APIs del navegador y programación asíncrona.',
          },

          htmlCssJs: {
            title: 'HTML • CSS • JS',
            description:
              'Construcción de interfaces semánticas y responsivas adaptadas a diferentes tamaños de pantalla. Manipulación de datos, eventos y APIs del navegador.',
          },

          bootstrap: {
            title: 'Bootstrap',
            description:
              'Uso del framework para la creación de layouts responsivos, componentes y estandarización visual.',
          },

          designSystem: {
            title: 'Design System',
            description:
              'Desarrollo basado en componentes reutilizables y patrones visuales para mantener la consistencia entre interfaces.',
          },
        },

        backend: {
          number: '02',
          title: 'Back-End & APIs',
          description:
            'Conocimientos que complementan mi actuación en el desarrollo Front-End y permiten comprender mejor todo el flujo de una aplicación.',

          rest: {
            title: 'APIs REST',
            description:
              'Integración entre aplicaciones mediante solicitudes HTTP, gestión de respuestas y consumo de servicios.',
          },

          http: {
            title: 'HTTP',
            description:
              'Conocimientos sobre métodos HTTP, códigos de respuesta, headers, interceptación y comunicación entre cliente y servidor.',
          },

          python: {
            title: 'Python',
            description:
              'Conocimientos aplicados al desarrollo de servicios y APIs, complementando la experiencia en el desarrollo de aplicaciones.',
          },

          fastApi: {
            title: 'FastAPI',
            description: 'Desarrollo e integración de APIs utilizando Python y FastAPI.',
          },
        },

        database: {
          number: '03',
          title: 'Datos',
          description:
            'Conocimientos relacionados con el uso de bases de datos relacionales para el almacenamiento, organización y consulta de información en aplicaciones.',

          sql: {
            title: 'SQL',
            description:
              'Creación y ejecución de consultas para insertar, actualizar, eliminar y recuperar datos utilizando SQL.',
          },

          relationships: {
            title: 'Relaciones',
            description:
              'Uso de relaciones entre tablas, claves primarias y foráneas para estructurar y organizar los datos.',
          },

          queries: {
            title: 'Consultas',
            description:
              'Construcción de consultas utilizando filtros, ordenación, agrupaciones y diferentes tipos de JOIN para obtener información.',
          },

          dataManipulation: {
            title: 'Manipulación de datos',
            description:
              'Conocimientos sobre creación y modificación de tablas, índices y estructuras necesarias para el funcionamiento de la base de datos.',
          },
        },

        devops: {
          number: '04',
          title: 'Herramientas & Infraestructura',
          description:
            'Herramientas que forman parte del flujo de desarrollo, pruebas, control de versiones y publicación de aplicaciones.',

          git: {
            title: 'Git',
            description:
              'Control de versiones, organización de branches y colaboración durante el desarrollo.',
          },

          deploy: {
            title: 'Deploy',
            description:
              'Conocimientos relacionados con la publicación, alojamiento e infraestructura de aplicaciones.',
          },

          k6: {
            title: 'K6',
            description:
              'Creación y ejecución de pruebas de carga para evaluar el rendimiento y comportamiento de APIs y aplicaciones.',
          },

          cliAutomation: {
            title: 'CLI & Automatización',
            description:
              'Uso de herramientas de línea de comandos y automatización para optimizar tareas recurrentes.',
          },
        },

        practices: {
          label: 'Más allá de las tecnologías',
          title: 'Cómo aplico mis conocimientos',
          description:
            'Las herramientas son importantes, pero la calidad de una solución también depende de las decisiones tomadas durante el desarrollo.',

          componentization: {
            title: 'Componentización',
            description:
              'Creación de componentes reutilizables y responsabilidades bien definidas.',
          },

          responsiveness: {
            title: 'Responsividad',
            description: 'Interfaces adaptadas a diferentes dispositivos y tamaños de pantalla.',
          },

          quality: {
            title: 'Calidad',
            description:
              'Preocupación por el mantenimiento, la organización y la confiabilidad de las aplicaciones.',
          },

          evolution: {
            title: 'Evolución',
            description: 'Búsqueda constante de mejoras y aprendizaje de nuevas tecnologías.',
          },
        },

        cta: {
          title: '¿Quieres conocer mi trabajo en la práctica?',
          description:
            'Conoce algunos de los proyectos en los que estas tecnologías y conocimientos se aplican para construir soluciones reales.',
          projectsButton: 'Ver proyectos',
          experiencesButton: 'Ver experiencias',
        },
      };
    }
  }
}
