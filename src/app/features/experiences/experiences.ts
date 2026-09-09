import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SettingsService } from '../../core/services/settings.service';

@Component({
  selector: 'app-experiences',
  imports: [RouterLink],
  templateUrl: './experiences.html',
  styleUrl: './experiences.css',
})
export class Experiences {
  experiencesPage = {
    // CABEÇALHO
    header: {
      label: '',
      title: '',
      titleHighlight: '',
      description: '',
    },

    // TÍTULO DAS RESPONSABILIDADES
    responsibilitiesTitle: '',

    // EXPERIÊNCIA ATUAL
    currentExperience: {
      badge: '',
      position: '',
      company: '',
      period: '',

      responsibilities: {
        item1: '',
        item2: '',
        item3: '',
        item4: '',
        item5: '',
        item6: '',
      },
    },

    // EXPERIÊNCIA ANTERIOR
    previousExperience: {
      position: '',
      company: '',
      period: '',

      responsibilities: {
        item1: '',
        item2: '',
        item3: '',
        item4: '',
        item5: '',
        item6: '',
        item7: '',
      },
    },

    // INÍCIO DA TRAJETÓRIA
    firstExperience: {
      badge: '',
      position: '',
      company: '',
      period: '',

      responsibilities: {
        item1: '',
        item2: '',
        item3: '',
        item4: '',
        item5: '',
        item6: '',
      },
    },

    // EVOLUÇÃO
    evolution: {
      label: '',
      title: '',
      description: '',

      analysis: {
        title: '',
        description: '',
      },

      collaboration: {
        title: '',
        description: '',
      },

      structure: {
        title: '',
        description: '',
      },

      continuousEvolution: {
        title: '',
        description: '',
      },
    },

    // CTA
    cta: {
      title: '',
      description: '',
      educationButton: '',
      contactButton: '',
    },
  };

  constructor(protected settingsService: SettingsService) {}

  ngOnInit() {
    this.detectLanguage();
  }

  detectLanguage() {
    if (this.settingsService.language === 'portuguese') {
      this.experiencesPage = {
        // CABEÇALHO
        header: {
          label: 'Trajetória profissional',

          title: 'Experiências que',

          titleHighlight: 'construíram minha trajetória.',

          description: `
          Minha experiência profissional é marcada pelo
          desenvolvimento de aplicações web, evolução de
          sistemas e busca contínua por soluções mais eficientes.
        `,
        },

        responsibilitiesTitle: 'Principais responsabilidades',

        // EXPERIÊNCIA ATUAL
        currentExperience: {
          badge: 'Atual',

          position: 'Analista e Desenvolvedor de Sistemas Júnior',

          company: 'Elógica Processamento de Dados Ltda.',

          period: 'Outubro de 2025 — Atualmente',

          responsibilities: {
            item1: `
            Atuação no levantamento e refinamento de requisitos junto
            aos clientes, conduzindo análises para identificar
            necessidades de negócio e traduzi-las em soluções técnicas
            viáveis para a equipe de desenvolvimento.
          `,

            item2: `
            Desenvolvimento e manutenção de aplicações web responsivas
            utilizando Angular, com foco em desempenho, usabilidade
            e escalabilidade.
          `,

            item3: `
            Integração de aplicações por meio do consumo de APIs REST.
          `,

            item4: `
            Desenvolvimento de interfaces seguindo Design System,
            garantindo consistência visual e padronização da
            experiência do usuário.
          `,

            item5: `
            Versionamento e gerenciamento de código utilizando Git,
            seguindo boas práticas de desenvolvimento colaborativo.
          `,

            item6: `
            Automatização de testes de carga com Grafana K6 para
            avaliação de desempenho, capacidade de resposta,
            estabilidade e escalabilidade das aplicações.
          `,
          },
        },

        // EXPERIÊNCIA ANTERIOR
        previousExperience: {
          position: 'Programador Trainee',

          company: 'Elógica Processamento de Dados Ltda.',

          period: 'Agosto de 2024 — Setembro de 2025',

          responsibilities: {
            item1: `
            Desenvolvimento e manutenção de aplicações web utilizando
            Angular, implementando novas funcionalidades e realizando
            melhorias evolutivas.
          `,

            item2: `
            Desenvolvimento de interfaces responsivas com HTML, CSS,
            Bootstrap e TypeScript.
          `,

            item3: `
            Integração de aplicações por meio do consumo de APIs REST.
          `,

            item4: `
            Correção de erros, manutenção corretiva e evolutiva em
            sistemas corporativos.
          `,

            item5: `
            Participação na implementação de componentes reutilizáveis
            seguindo padrões definidos pelo Design System.
          `,

            item6: `
            Versionamento de código utilizando Git e GitLab,
            colaborando com a equipe por meio de fluxo de desenvolvimento
            baseado em branches e merge requests.
          `,

            item7: `
            Participação em reuniões técnicas, refinamento de demandas
            e acompanhamento das entregas junto à equipe de
            desenvolvimento.
          `,
          },
        },

        // INÍCIO DA TRAJETÓRIA
        firstExperience: {
          badge: 'Início da trajetória',

          position: 'Estagiário de Tecnologia da Informação',

          company: 'Elógica Processamento de Dados Ltda.',

          period: 'Agosto de 2023 — Julho de 2024',

          responsibilities: {
            item1: `
            Apoio no desenvolvimento e manutenção de aplicações web
            utilizando Angular.
          `,

            item2: `
            Implementação de ajustes e correções em interfaces
            responsivas utilizando HTML, CSS e TypeScript.
          `,

            item3: `
            Consumo de APIs REST para integração entre frontend
            e backend.
          `,

            item4: `
            Correção de bugs e manutenção evolutiva de
            funcionalidades existentes.
          `,

            item5: `
            Versionamento de código utilizando Git e GitLab.
          `,

            item6: `
            Suporte à equipe de desenvolvimento na implementação
            de novas funcionalidades e validação de requisitos.
          `,
          },
        },

        // EVOLUÇÃO
        evolution: {
          label: 'Evolução',

          title: 'Mais do que escrever código',

          description: `
          Ao longo da minha experiência, minha atuação passou
          a envolver não apenas desenvolvimento, mas também
          análise de problemas, entendimento de requisitos
          e colaboração com diferentes áreas.
        `,

          analysis: {
            title: 'Análise',

            description: `
            Compreensão de necessidades e transformação
            de requisitos em soluções técnicas.
          `,
          },

          collaboration: {
            title: 'Colaboração',

            description: `
            Comunicação com diferentes áreas para
            alinhar necessidades e possibilidades.
          `,
          },

          structure: {
            title: 'Estrutura',

            description: `
            Preocupação com arquitetura, manutenção,
            desempenho e evolução das aplicações.
          `,
          },

          continuousEvolution: {
            title: 'Evolução contínua',

            description: `
            Busca constante por novos conhecimentos,
            ferramentas e boas práticas.
          `,
          },
        },

        // CTA
        cta: {
          title: 'Vamos conversar?',

          description: `
          Estou aberto a novos desafios, projetos e oportunidades
          para continuar desenvolvendo minha carreira na área
          de tecnologia.
        `,

          educationButton: 'Educação',

          contactButton: 'Entre em contato',
        },
      };
    } else if (this.settingsService.language === 'english') {
      this.experiencesPage = {
        header: {
          label: 'Professional Journey',

          title: 'Experiences that',

          titleHighlight: 'have shaped my journey.',

          description: `
        My professional experience is marked by web application
        development, system evolution, and the continuous pursuit
        of more efficient solutions.
      `,
        },

        responsibilitiesTitle: 'Main responsibilities',

        currentExperience: {
          badge: 'Current',

          position: 'Junior Systems Analyst and Developer',

          company: 'Elógica Processamento de Dados Ltda.',

          period: 'October 2025 — Present',

          responsibilities: {
            item1: `
          Gathering and refining requirements together with clients,
          conducting analyses to identify business needs and translate
          them into viable technical solutions for the development team.
        `,

            item2: `
          Developing and maintaining responsive web applications using
          Angular, focusing on performance, usability, and scalability.
        `,

            item3: `
          Integrating applications through REST APIs.
        `,

            item4: `
          Developing interfaces following the Design System, ensuring
          visual consistency and a standardized user experience.
        `,

            item5: `
          Versioning and managing code using Git, following
          collaborative development best practices.
        `,

            item6: `
          Automating load tests using Grafana K6 to evaluate
          performance, responsiveness, stability, and scalability
          of applications.
        `,
          },
        },

        previousExperience: {
          position: 'Trainee Programmer',

          company: 'Elógica Processamento de Dados Ltda.',

          period: 'August 2024 — September 2025',

          responsibilities: {
            item1: `
          Developing and maintaining web applications using Angular,
          implementing new features and improvements.
        `,

            item2: `
          Developing responsive interfaces using HTML, CSS,
          Bootstrap, and TypeScript.
        `,

            item3: `
          Integrating applications through REST APIs.
        `,

            item4: `
          Fixing bugs and performing corrective and evolutionary
          maintenance on corporate systems.
        `,

            item5: `
          Participating in the implementation of reusable components
          following Design System standards.
        `,

            item6: `
          Versioning code using Git and GitLab, collaborating with
          the team through a development workflow based on branches
          and merge requests.
        `,

            item7: `
          Participating in technical meetings, refining demands,
          and monitoring deliveries with the development team.
        `,
          },
        },

        firstExperience: {
          badge: 'Beginning of my journey',

          position: 'Information Technology Intern',

          company: 'Elógica Processamento de Dados Ltda.',

          period: 'August 2023 — July 2024',

          responsibilities: {
            item1: `
          Supporting the development and maintenance of web
          applications using Angular.
        `,

            item2: `
          Implementing adjustments and fixes in responsive
          interfaces using HTML, CSS, and TypeScript.
        `,

            item3: `
          Consuming REST APIs for frontend and backend integration.
        `,

            item4: `
          Fixing bugs and performing evolutionary maintenance
          on existing features.
        `,

            item5: `
          Versioning code using Git and GitLab.
        `,

            item6: `
          Supporting the development team in implementing new
          features and validating requirements.
        `,
          },
        },

        evolution: {
          label: 'Growth',

          title: 'More than writing code',

          description: `
        Throughout my experience, my role has evolved to involve
        not only development but also problem analysis,
        understanding requirements, and collaborating with
        different areas.
      `,

          analysis: {
            title: 'Analysis',

            description: `
          Understanding needs and transforming requirements
          into technical solutions.
        `,
          },

          collaboration: {
            title: 'Collaboration',

            description: `
          Communication with different areas to align
          needs and possibilities.
        `,
          },

          structure: {
            title: 'Structure',

            description: `
          Focus on architecture, maintenance, performance,
          and application evolution.
        `,
          },

          continuousEvolution: {
            title: 'Continuous growth',

            description: `
          Continuous pursuit of new knowledge,
          tools, and best practices.
        `,
          },
        },

        cta: {
          title: 'Let’s talk?',

          description: `
        I am open to new challenges, projects, and opportunities
        to continue developing my career in technology.
      `,

          educationButton: 'Education',

          contactButton: 'Get in touch',
        },
      };
    } else if (this.settingsService.language === 'spanish') {
      this.experiencesPage = {
        header: {
          label: 'Trayectoria profesional',

          title: 'Experiencias que',

          titleHighlight: 'construyeron mi trayectoria.',

          description: `
        Mi experiencia profesional está marcada por el desarrollo
        de aplicaciones web, la evolución de sistemas y la búsqueda
        continua de soluciones más eficientes.
      `,
        },

        responsibilitiesTitle: 'Principales responsabilidades',

        currentExperience: {
          badge: 'Actual',

          position: 'Analista y Desarrollador de Sistemas Junior',

          company: 'Elógica Processamento de Dados Ltda.',

          period: 'Octubre de 2025 — Actualidad',

          responsibilities: {
            item1: `
          Participación en el levantamiento y refinamiento de
          requisitos junto con los clientes, realizando análisis
          para identificar necesidades de negocio y transformarlas
          en soluciones técnicas viables para el equipo de desarrollo.
        `,

            item2: `
          Desarrollo y mantenimiento de aplicaciones web responsivas
          utilizando Angular, con enfoque en rendimiento,
          usabilidad y escalabilidad.
        `,

            item3: `
          Integración de aplicaciones mediante el consumo
          de APIs REST.
        `,

            item4: `
          Desarrollo de interfaces siguiendo el Design System,
          garantizando consistencia visual y una experiencia
          de usuario estandarizada.
        `,

            item5: `
          Versionado y gestión de código utilizando Git,
          siguiendo buenas prácticas de desarrollo colaborativo.
        `,

            item6: `
          Automatización de pruebas de carga con Grafana K6
          para evaluar el rendimiento, capacidad de respuesta,
          estabilidad y escalabilidad de las aplicaciones.
        `,
          },
        },

        previousExperience: {
          position: 'Programador Trainee',

          company: 'Elógica Processamento de Dados Ltda.',

          period: 'Agosto de 2024 — Septiembre de 2025',

          responsibilities: {
            item1: `
          Desarrollo y mantenimiento de aplicaciones web utilizando
          Angular, implementando nuevas funcionalidades y mejoras.
        `,

            item2: `
          Desarrollo de interfaces responsivas con HTML, CSS,
          Bootstrap y TypeScript.
        `,

            item3: `
          Integración de aplicaciones mediante el consumo
          de APIs REST.
        `,

            item4: `
          Corrección de errores y mantenimiento correctivo
          y evolutivo en sistemas corporativos.
        `,

            item5: `
          Participación en la implementación de componentes
          reutilizables siguiendo los estándares del Design System.
        `,

            item6: `
          Versionado de código utilizando Git y GitLab,
          colaborando con el equipo mediante un flujo de desarrollo
          basado en branches y merge requests.
        `,

            item7: `
          Participación en reuniones técnicas, refinamiento
          de demandas y seguimiento de entregas junto al
          equipo de desarrollo.
        `,
          },
        },

        firstExperience: {
          badge: 'Inicio de mi trayectoria',

          position: 'Practicante de Tecnología de la Información',

          company: 'Elógica Processamento de Dados Ltda.',

          period: 'Agosto de 2023 — Julio de 2024',

          responsibilities: {
            item1: `
          Apoyo en el desarrollo y mantenimiento de aplicaciones
          web utilizando Angular.
        `,

            item2: `
          Implementación de ajustes y correcciones en interfaces
          responsivas utilizando HTML, CSS y TypeScript.
        `,

            item3: `
          Consumo de APIs REST para la integración entre
          frontend y backend.
        `,

            item4: `
          Corrección de bugs y mantenimiento evolutivo
          de funcionalidades existentes.
        `,

            item5: `
          Versionado de código utilizando Git y GitLab.
        `,

            item6: `
          Apoyo al equipo de desarrollo en la implementación
          de nuevas funcionalidades y validación de requisitos.
        `,
          },
        },

        evolution: {
          label: 'Evolución',

          title: 'Más que escribir código',

          description: `
        A lo largo de mi experiencia, mi trabajo pasó a involucrar
        no solo el desarrollo, sino también el análisis de problemas,
        la comprensión de requisitos y la colaboración con
        diferentes áreas.
      `,

          analysis: {
            title: 'Análisis',

            description: `
          Comprensión de necesidades y transformación
          de requisitos en soluciones técnicas.
        `,
          },

          collaboration: {
            title: 'Colaboración',

            description: `
          Comunicación con diferentes áreas para alinear
          necesidades y posibilidades.
        `,
          },

          structure: {
            title: 'Estructura',

            description: `
          Atención a la arquitectura, mantenimiento,
          rendimiento y evolución de las aplicaciones.
        `,
          },

          continuousEvolution: {
            title: 'Evolución continua',

            description: `
          Búsqueda constante de nuevos conocimientos,
          herramientas y buenas prácticas.
        `,
          },
        },

        cta: {
          title: '¿Hablamos?',

          description: `
        Estoy abierto a nuevos desafíos, proyectos y oportunidades
        para continuar desarrollando mi carrera en el área
        de tecnología.
      `,

          educationButton: 'Educación',

          contactButton: 'Contáctame',
        },
      };
    }
  }
}
