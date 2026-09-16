import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SettingsService } from '../../core/services/settings.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  homePage = {
    hero: {
      name: '',
      title: '',
      titleHighLight: '',
      description: '',
      projectsButton: '',
      aboutButton: '',
      experienceYears: '',
      experienceYearsLabel: '',
      mainTechnology: '',
      mainTechnologyLabel: '',
      fullCycle: '',
      fullCycleLabel: '',
      imageAlt: '',
    },

    areas: {
      label: '',
      title: '',
      description: '',
      experiencesButton: '',

      frontEnd: {
        title: '',
        description: '',
      },

      systemsIntegration: {
        title: '',
        description: '',
      },

      performance: {
        title: '',
        description: '',
      },
    },

    approach: {
      label: '',
      title: '',
      description: '',

      understanding: {
        title: '',
        description: '',
      },

      planning: {
        title: '',
        description: '',
      },

      development: {
        title: '',
        description: '',
      },

      evolution: {
        title: '',
        description: '',
      },
    },

    technologies: {
      label: '',
      title: '',
      description: '',
      otherSkillsButton: '',
    },

    principles: {
      label: '',
      title: '',
      description: '',

      sustainableCode: {
        title: '',
        description: '',
      },

      userExperience: {
        title: '',
        description: '',
      },

      quality: {
        title: '',
        description: '',
      },

      continuousEvolution: {
        title: '',
        description: '',
      },
    },

    projects: {
      label: '',
      title: '',
      viewProjectsButton: '',

      risoflorAI: {
        category: '',
        description: '',
        link: '',
      },

      brainstorm: {
        category: '',
        description: '',
        link: '',
      },

      menu: {
        category: '',
        description: '',
        link: '',
      },
    },

    education: {
      label: '',
      title: '',
      description: '',

      postgraduate: {
        badge: '',
        title: '',
      },

      undergraduate: {
        badge: '',
        title: '',
      },

      viewEducationButton: '',
    },

    cta: {
      title: '',
      description: '',
      aboutButton: '',
      contactButton: '',
    },
  };

  constructor(protected settingsService: SettingsService) {}

  ngOnInit() {
    this.detectLanguage();
  }

  detectLanguage() {
    if (this.settingsService.language === 'portuguese') {
      this.homePage = {
        // HERO
        hero: {
          name: 'Ronaldo Filipe Sabino',

          title: 'Transformo ideias em',

          titleHighLight: 'soluções digitais.',

          description:
            'Analista e Desenvolvedor de Sistemas com foco em Angular, interfaces modernas e construção de aplicações web eficientes, escaláveis e centradas no usuário.',

          projectsButton: 'Ver projetos',

          aboutButton: 'Sobre mim',

          experienceYears: '3+',

          experienceYearsLabel: 'Anos de experiência',

          mainTechnology: 'Angular',

          mainTechnologyLabel: 'Principal tecnologia',

          fullCycle: 'Full Cycle',

          fullCycleLabel: 'Visão além do Front-End',

          imageAlt: 'Imagem ilustrativa de um desenvolvedor',
        },

        // ÁREAS DE ATUAÇÃO
        areas: {
          label: 'O que eu faço',

          title: 'Desenvolvimento orientado a resultados',

          description:
            'Meu trabalho vai além de escrever código. Busco compreender o problema, analisar as necessidades e construir soluções que façam sentido para o negócio e para quem utiliza o sistema.',

          experiencesButton: 'Ver experiências',

          frontEnd: {
            title: 'Front-End',

            description:
              'Desenvolvimento de interfaces responsivas, componentizadas e focadas em usabilidade, utilizando Angular e tecnologias modernas do ecossistema web.',
          },

          systemsIntegration: {
            title: 'Integração de sistemas',

            description:
              'Integração com APIs REST e desenvolvimento de aplicações capazes de consumir e organizar diferentes fontes de dados.',
          },

          performance: {
            title: 'Performance',

            description:
              'Análise de desempenho, testes de carga e preocupação com escalabilidade para criar aplicações mais eficientes e confiáveis.',
          },
        },

        // COMO EU TRABALHO
        approach: {
          label: 'Minha abordagem',

          title: 'Do problema à solução',

          description:
            'Uma boa aplicação começa antes do código. Procuro entender o contexto da demanda para então definir uma solução técnica adequada.',

          understanding: {
            title: 'Entendimento',

            description: 'Compreensão do problema, dos requisitos e das necessidades dos usuários.',
          },

          planning: {
            title: 'Planejamento',

            description: 'Análise das alternativas e definição da abordagem técnica mais adequada.',
          },

          development: {
            title: 'Desenvolvimento',

            description:
              'Implementação utilizando boas práticas, componentização e código sustentável.',
          },

          evolution: {
            title: 'Evolução',

            description: 'Testes, análise de desempenho e melhorias contínuas na solução.',
          },
        },

        // TECNOLOGIAS
        technologies: {
          label: 'Tecnologias',

          title: 'Ferramentas que fazem parte do meu dia a dia',

          description:
            'Minha principal atuação está no desenvolvimento Front-End, mas também possuo contato com diferentes tecnologias que complementam o desenvolvimento de aplicações.',

          otherSkillsButton: 'Outras habilidades',
        },

        // PRINCÍPIOS
        principles: {
          label: 'O que guia meu trabalho',

          title: 'Mais do que fazer funcionar',

          description:
            'Desenvolver uma aplicação não significa apenas entregar funcionalidades. Busco construir soluções que sejam compreensíveis, consistentes e capazes de evoluir junto com as necessidades do projeto.',

          sustainableCode: {
            title: 'Código sustentável',

            description:
              'Priorizo código organizado, legível e componentizado, facilitando a manutenção e a evolução da aplicação.',
          },

          userExperience: {
            title: 'Experiência do usuário',

            description:
              'Busco interfaces intuitivas, responsivas e consistentes, considerando a experiência de quem realmente utiliza o sistema.',
          },

          quality: {
            title: 'Qualidade',

            description:
              'Tenho atenção a validações, tratamento de erros, desempenho e confiabilidade para entregar aplicações mais robustas.',
          },

          continuousEvolution: {
            title: 'Evolução contínua',

            description:
              'Acredito que uma boa solução pode sempre evoluir. Por isso, busco aprender, revisar decisões e aprimorar minhas práticas.',
          },
        },

        // PROJETOS
        projects: {
          label: 'Portfólio',

          title: 'Alguns projetos',

          viewProjectsButton: 'Ver projetos',

          risoflorAI: {
            category: 'Inteligência Artificial',

            description:
              'Chatbot.\nAplicação desenvolvida com foco em Inteligência Artificial e Integração de Sistemas.',

            link: 'Conhecer projeto',
          },

          brainstorm: {
            category: 'Educacional',

            description:
              'Solução voltada à educação.\nAulas e cursos para explorar o potencial de um desenvolvedor.',

            link: 'Conhecer projeto',
          },

          menu: {
            category: 'Responsivo',

            description:
              'Cardápio digital.\nDesenvolvimento baseado em Design System e responsividade.',

            link: 'Conhecer projeto',
          },
        },

        // FORMAÇÃO
        education: {
          label: 'Formação',

          title: 'Uma base construída para continuar evoluindo',

          description:
            'A formação acadêmica complementa minha experiência prática e contribui para uma visão mais estruturada sobre desenvolvimento e engenharia de software.',

          postgraduate: {
            badge: 'Pós-Graduação',
            title: 'Engenharia de Software',
          },

          undergraduate: {
            badge: 'Graduação',
            title: 'Análise e Desenvolvimento de Sistemas',
          },

          viewEducationButton: 'Conhecer formação',
        },

        // CTA
        cta: {
          title: 'Vamos construir algo juntos?',

          description:
            'Estou sempre aberto a conhecer novos projetos, desafios e oportunidades para continuar evoluindo como desenvolvedor.',

          aboutButton: 'Sobre mim',

          contactButton: 'Entre em contato',
        },
      };
    } else if (this.settingsService.language === 'english') {
      this.homePage = {
        // HERO
        hero: {
          name: 'Ronaldo Filipe Sabino',

          title: 'I turn ideas into',

          titleHighLight: 'digital solutions.',

          description:
            'Systems Analyst and Developer focused on Angular, modern interfaces, and the development of efficient, scalable, and user-centered web applications.',

          projectsButton: 'View projects',

          aboutButton: 'About me',

          experienceYears: '3+',

          experienceYearsLabel: 'Years of experience',

          mainTechnology: 'Angular',

          mainTechnologyLabel: 'Main technology',

          fullCycle: 'Full Cycle',

          fullCycleLabel: 'Beyond Front-End',

          imageAlt: 'Illustrative image of a developer',
        },

        // AREAS OF EXPERTISE
        areas: {
          label: 'What I do',

          title: 'Results-oriented development',

          description:
            'My work goes beyond writing code. I seek to understand the problem, analyze the needs, and build solutions that make sense for the business and the people who use the system.',

          experiencesButton: 'View experiences',

          frontEnd: {
            title: 'Front-End',

            description:
              'Development of responsive, component-based interfaces focused on usability, using Angular and modern technologies from the web ecosystem.',
          },

          systemsIntegration: {
            title: 'Systems integration',

            description:
              'Integration with REST APIs and development of applications capable of consuming and organizing different data sources.',
          },

          performance: {
            title: 'Performance',

            description:
              'Performance analysis, load testing, and a focus on scalability to create more efficient and reliable applications.',
          },
        },

        // HOW I WORK
        approach: {
          label: 'My approach',

          title: 'From problem to solution',

          description:
            'A good application starts before the code. I seek to understand the context of the demand before defining an appropriate technical solution.',

          understanding: {
            title: 'Understanding',

            description: 'Understanding the problem, requirements, and user needs.',
          },

          planning: {
            title: 'Planning',

            description:
              'Analyzing alternatives and defining the most appropriate technical approach.',
          },

          development: {
            title: 'Development',

            description:
              'Implementation using best practices, componentization, and maintainable code.',
          },

          evolution: {
            title: 'Evolution',

            description:
              'Testing, performance analysis, and continuous improvements to the solution.',
          },
        },

        // TECHNOLOGIES
        technologies: {
          label: 'Technologies',

          title: 'Tools that are part of my daily work',

          description:
            'My main focus is Front-End development, but I also have experience with different technologies that complement application development.',

          otherSkillsButton: 'Other skills',
        },

        // PRINCIPLES
        principles: {
          label: 'What guides my work',

          title: 'More than making it work',

          description:
            'Developing an application is not just about delivering features. I strive to build solutions that are understandable, consistent, and capable of evolving alongside the needs of the project.',

          sustainableCode: {
            title: 'Maintainable code',

            description:
              'I prioritize organized, readable, and component-based code, making application maintenance and evolution easier.',
          },

          userExperience: {
            title: 'User experience',

            description:
              'I seek intuitive, responsive, and consistent interfaces, considering the experience of those who actually use the system.',
          },

          quality: {
            title: 'Quality',

            description:
              'I pay attention to validations, error handling, performance, and reliability to deliver more robust applications.',
          },

          continuousEvolution: {
            title: 'Continuous improvement',

            description:
              'I believe a good solution can always evolve. That is why I seek to learn, review decisions, and improve my practices.',
          },
        },

        // PROJECTS
        projects: {
          label: 'Portfolio',

          title: 'Some projects',

          viewProjectsButton: 'View projects',

          risoflorAI: {
            category: 'Artificial Intelligence',

            description:
              'Chatbot.\nApplication developed with a focus on Artificial Intelligence and Systems Integration.',

            link: 'View project',
          },

          brainstorm: {
            category: 'Educational',

            description:
              'Education-focused solution.\nLessons and courses to explore a developer’s potential.',

            link: 'View project',
          },

          menu: {
            category: 'Design System',

            description: 'Digital menu.\nDevelopment based on Design System and responsiveness.',

            link: 'View project',
          },
        },

        // EDUCATION
        education: {
          label: 'Education',

          title: 'A foundation built for continuous growth',

          description:
            'My academic background complements my practical experience and contributes to a more structured view of software development and engineering.',

          postgraduate: {
            badge: 'Postgraduate',
            title: 'Software Engineering',
          },

          undergraduate: {
            badge: 'Undergraduate',
            title: 'Systems Analysis and Development',
          },

          viewEducationButton: 'View education',
        },

        // CTA
        cta: {
          title: 'Shall we build something together?',

          description:
            'I am always open to discovering new projects, challenges, and opportunities to continue growing as a developer.',

          aboutButton: 'About me',

          contactButton: 'Get in touch',
        },
      };
    } else if (this.settingsService.language === 'spanish') {
      this.homePage = {
        // HERO
        hero: {
          name: 'Ronaldo Filipe Sabino',

          title: 'Transformo ideas en',

          titleHighLight: 'soluciones digitales.',

          description:
            'Analista y Desarrollador de Sistemas enfocado en Angular, interfaces modernas y desarrollo de aplicaciones web eficientes, escalables y centradas en el usuario.',

          projectsButton: 'Ver proyectos',

          aboutButton: 'Sobre mí',

          experienceYears: '3+',

          experienceYearsLabel: 'Años de experiencia',

          mainTechnology: 'Angular',

          mainTechnologyLabel: 'Tecnología principal',

          fullCycle: 'Full Cycle',

          fullCycleLabel: 'Visión más allá del Front-End',

          imageAlt: 'Imagen ilustrativa de un desarrollador',
        },

        // ÁREAS DE ACTUACIÓN
        areas: {
          label: 'Lo que hago',

          title: 'Desarrollo orientado a resultados',

          description:
            'Mi trabajo va más allá de escribir código. Busco comprender el problema, analizar las necesidades y construir soluciones que tengan sentido para el negocio y para quienes utilizan el sistema.',

          experiencesButton: 'Ver experiencias',

          frontEnd: {
            title: 'Front-End',

            description:
              'Desarrollo de interfaces responsivas, basadas en componentes y enfocadas en la usabilidad, utilizando Angular y tecnologías modernas del ecosistema web.',
          },

          systemsIntegration: {
            title: 'Integración de sistemas',

            description:
              'Integración con APIs REST y desarrollo de aplicaciones capaces de consumir y organizar diferentes fuentes de datos.',
          },

          performance: {
            title: 'Rendimiento',

            description:
              'Análisis de rendimiento, pruebas de carga y atención a la escalabilidad para crear aplicaciones más eficientes y confiables.',
          },
        },

        // CÓMO TRABAJO
        approach: {
          label: 'Mi enfoque',

          title: 'Del problema a la solución',

          description:
            'Una buena aplicación comienza antes del código. Busco comprender el contexto de la demanda para definir una solución técnica adecuada.',

          understanding: {
            title: 'Comprensión',

            description:
              'Comprensión del problema, los requisitos y las necesidades de los usuarios.',
          },

          planning: {
            title: 'Planificación',

            description: 'Análisis de alternativas y definición del enfoque técnico más adecuado.',
          },

          development: {
            title: 'Desarrollo',

            description:
              'Implementación utilizando buenas prácticas, componentes y código sostenible.',
          },

          evolution: {
            title: 'Evolución',

            description: 'Pruebas, análisis de rendimiento y mejoras continuas en la solución.',
          },
        },

        // TECNOLOGÍAS
        technologies: {
          label: 'Tecnologías',

          title: 'Herramientas que forman parte de mi día a día',

          description:
            'Mi principal área de actuación es el desarrollo Front-End, pero también tengo contacto con diferentes tecnologías que complementan el desarrollo de aplicaciones.',

          otherSkillsButton: 'Otras habilidades',
        },

        // PRINCIPIOS
        principles: {
          label: 'Lo que guía mi trabajo',

          title: 'Más que hacer que funcione',

          description:
            'Desarrollar una aplicación no significa simplemente entregar funcionalidades. Busco construir soluciones comprensibles, consistentes y capaces de evolucionar junto con las necesidades del proyecto.',

          sustainableCode: {
            title: 'Código sostenible',

            description:
              'Priorizo un código organizado, legible y basado en componentes, facilitando el mantenimiento y la evolución de la aplicación.',
          },

          userExperience: {
            title: 'Experiencia del usuario',

            description:
              'Busco interfaces intuitivas, responsivas y consistentes, teniendo en cuenta la experiencia de quienes realmente utilizan el sistema.',
          },

          quality: {
            title: 'Calidad',

            description:
              'Presto atención a las validaciones, el manejo de errores, el rendimiento y la confiabilidad para entregar aplicaciones más robustas.',
          },

          continuousEvolution: {
            title: 'Evolución continua',

            description:
              'Creo que una buena solución siempre puede evolucionar. Por eso, busco aprender, revisar decisiones y mejorar mis prácticas.',
          },
        },

        // PROYECTOS
        projects: {
          label: 'Portafolio',

          title: 'Algunos proyectos',

          viewProjectsButton: 'Ver proyectos',

          risoflorAI: {
            category: 'Inteligencia Artificial',

            description:
              'Chatbot.\nAplicación desarrollada con enfoque en Inteligencia Artificial e Integración de Sistemas.',

            link: 'Conocer proyecto',
          },

          brainstorm: {
            category: 'Educativo',

            description:
              'Solución orientada a la educación.\nClases y cursos para explorar el potencial de un desarrollador.',

            link: 'Conocer proyecto',
          },

          menu: {
            category: 'Diseño',

            description: 'Menú digital.\nDesarrollo basado en Design System y diseño responsivo.',

            link: 'Conocer proyecto',
          },
        },

        // FORMACIÓN
        education: {
          label: 'Formación',

          title: 'Una base construida para seguir evolucionando',

          description:
            'Mi formación académica complementa mi experiencia práctica y contribuye a una visión más estructurada sobre el desarrollo y la ingeniería de software.',

          postgraduate: {
            badge: 'Posgrado',
            title: 'Ingeniería de Software',
          },

          undergraduate: {
            badge: 'Grado',
            title: 'Análisis y Desarrollo de Sistemas',
          },

          viewEducationButton: 'Conocer formación',
        },

        // CTA
        cta: {
          title: '¿Construimos algo juntos?',

          description:
            'Siempre estoy abierto a conocer nuevos proyectos, desafíos y oportunidades para seguir evolucionando como desarrollador.',

          aboutButton: 'Sobre mí',

          contactButton: 'Contáctame',
        },
      };
    }
  }

  downloadResume() {
    const resumeUrl = 'assets/Curriculo_Ronaldo_Sabino.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Curriculo_Ronaldo_Sabino.pdf';
    link.click();
  }
}
