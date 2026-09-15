import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SettingsService } from '../../core/services/settings.service';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  aboutPage = {
    header: {
      label: '',
      title: '',
      titleHighlight: '',
      description: '',
      description2: '',
      buttonLinkedIn: '',
      buttonGitHub: '',
      buttonResume: '',
    },

    history: {
      label: '',
      title: '',
      paragraphs: {
        item1: '',
        item2: '',
        item3: '',
        item4: '',
      },
    },

    workMethod: {
      label: '',
      title: '',
      description: '',
      cards: {
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

    beyondCode: {
      label: '',
      title: '',
      paragraphs: {
        item1: '',
        item2: '',
      },
    },

    motivation: {
      label: '',
      title: '',
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
      },
    },

    education: {
      label: '',
      title: '',
      postgraduate: {
        badge: '',
        title: '',
        institution: '',
        description: '',
      },
      undergraduate: {
        badge: '',
        title: '',
        institution: '',
        description: '',
      },
      button: '',
    },

    professionalGoal: {
      label: '',
      title: '',
      paragraphs: {
        item1: '',
        item2: '',
      },
    },

    cta: {
      title: '',
      description: '',
      projectsButton: '',
      contactButton: '',
    },
  };

  constructor(protected settingsService: SettingsService) {}

  ngOnInit() {
    this.detectLanguage();
  }

  detectLanguage() {
    if (this.settingsService.language === 'portuguese') {
      this.aboutPage = {
        // CABEÇALHO
        header: {
          label: 'Sobre mim',
          title: 'Desenvolvedor, curioso',
          titleHighlight: ' e sempre em evolução.',
          description: `
        Sou Ronaldo Sabino, Analista e Desenvolvedor de
        Sistemas, apaixonado por tecnologia e pelo processo
        de transformar problemas em soluções através do software.
      `,
          description2: `
        Minha trajetória profissional tem sido construída
        principalmente no desenvolvimento de aplicações web,
        mas também envolve análise de requisitos, entendimento
        de problemas de negócio e colaboração com diferentes
        pessoas e áreas.
      `,
          buttonLinkedIn: 'LinkedIn',
          buttonGitHub: 'GitHub',
          buttonResume: 'Currículo',
        },

        // MINHA HISTÓRIA
        history: {
          label: 'Minha trajetória',
          title: 'De aprender tecnologia a construir soluções',
          paragraphs: {
            item1: `
          Minha relação com a tecnologia começou a partir
          da curiosidade em entender como os sistemas e
          aplicações funcionavam. Com o tempo, essa curiosidade
          se transformou em interesse pelo desenvolvimento
          de software e, posteriormente, em uma carreira profissional.
        `,
            item2: `
          Durante minha formação em Análise e Desenvolvimento
          de Sistemas, tive contato com diferentes áreas da
          tecnologia e comecei a construir uma visão mais ampla
          sobre o desenvolvimento de sistemas.
        `,
            item3: `
          A experiência profissional trouxe uma nova perspectiva.
          Além de desenvolver software, passei a lidar diretamente
          com problemas reais, requisitos de negócio, manutenção
          de sistemas existentes e decisões que precisam considerar
          tanto aspectos técnicos quanto as necessidades dos usuários.
        `,
            item4: `
          Essa experiência despertou meu interesse por uma visão
          cada vez mais estruturada sobre o desenvolvimento de
          software, o que me levou a continuar minha formação
          através da pós-graduação em Engenharia de Software.
        `,
          },
        },

        // COMO EU PENSO
        workMethod: {
          label: 'Minha forma de trabalhar',
          title: 'Tecnologia é meio. Solução é o objetivo.',
          description: `
        Gosto de enxergar o desenvolvimento de software
        além da implementação. Antes de pensar em código,
        procuro entender o problema que precisa ser resolvido.
      `,
          cards: {
            item1: {
              title: 'Entender antes de desenvolver',
              description: `
            Procuro compreender o contexto, os requisitos
            e as necessidades antes de definir uma solução.
          `,
            },
            item2: {
              title: 'Buscar soluções',
              description: `
            Gosto de analisar diferentes possibilidades
            antes de escolher uma abordagem técnica.
          `,
            },
            item3: {
              title: 'Pensar em evolução',
              description: `
            Busco construir soluções que possam ser
            mantidas, adaptadas e evoluídas ao longo do tempo.
          `,
            },
            item4: {
              title: 'Trabalhar em conjunto',
              description: `
            Acredito que boas soluções surgem da
            colaboração entre diferentes conhecimentos
            e perspectivas.
          `,
            },
          },
        },

        // ALÉM DO CÓDIGO
        beyondCode: {
          label: 'Além do código',
          title: 'O desenvolvimento também envolve pessoas.',
          paragraphs: {
            item1: `
          Uma parte importante da minha experiência está
          relacionada à comunicação. Entender o que uma pessoa
          precisa, fazer perguntas, identificar problemas e
          transformar uma necessidade em um requisito claro
          são atividades tão importantes quanto a implementação
          da solução.
        `,
            item2: `
          Por isso, valorizo a comunicação clara, a capacidade
          de ouvir diferentes perspectivas e a colaboração
          durante o desenvolvimento de um projeto.
        `,
          },
        },

        // O QUE ME MOTIVA
        motivation: {
          label: 'Motivação',
          title: 'O que me faz continuar aprendendo?',
          items: {
            item1: {
              title: 'Novos desafios',
              description: `
            Problemas diferentes me permitem sair da
            zona de conforto e ampliar minha capacidade
            de encontrar soluções.
          `,
            },
            item2: {
              title: 'Aprendizado',
              description: `
            A tecnologia muda constantemente, e considero
            essencial continuar estudando e experimentando.
          `,
            },
            item3: {
              title: 'Impacto',
              description: `
            Gosto de saber que o software desenvolvido
            resolve um problema real e facilita a vida
            de quem o utiliza.
          `,
            },
          },
        },

        // FORMAÇÃO RESUMIDA
        education: {
          label: 'Formação',
          title: 'Uma base para continuar evoluindo',
          postgraduate: {
            badge: 'Pós-graduação',
            title: 'Engenharia de Software',
            institution: 'Faculdade Focus',
            description: `
          Especialização voltada ao aprofundamento dos
          conhecimentos em engenharia e desenvolvimento
          de software.
        `,
          },
          undergraduate: {
            badge: 'Graduação',
            title: 'Análise e Desenvolvimento de Sistemas',
            institution: 'Faculdade Senac Pernambuco',
            description: `
          Formação que estabeleceu minha base em
          desenvolvimento e análise de sistemas.
        `,
          },
          button: 'Conhecer minha formação',
        },

        // OBJETIVO PROFISSIONAL
        professionalGoal: {
          label: 'Próximos passos',
          title: 'Continuar evoluindo como profissional',
          paragraphs: {
            item1: `
          Meu objetivo é continuar desenvolvendo soluções
          eficientes, escaláveis e de qualidade, ampliando
          tanto minha profundidade técnica quanto minha
          capacidade de compreender problemas de negócio.
        `,
            item2: `
          Quero continuar assumindo novos desafios, conhecer
          diferentes tecnologias e contribuir em projetos nos
          quais engenharia, aprendizado e impacto caminhem juntos.
        `,
          },
        },

        // CTA
        cta: {
          title: 'Quer conhecer mais sobre meu trabalho?',
          description: `
        Explore minhas experiências profissionais, conheça os
        projetos que desenvolvi e veja as tecnologias que fazem
        parte da minha trajetória.
      `,
          projectsButton: 'Projetos',
          contactButton: 'Entre em contato',
        },
      };
    } else if (this.settingsService.language === 'english') {
      this.aboutPage = {
        // HEADER
        header: {
          label: 'About me',
          title: 'Developer, curious',
          titleHighlight: ' and always evolving.',
          description: `
        I am Ronaldo Sabino, a Systems Analyst and Developer,
        passionate about technology and the process of transforming
        problems into solutions through software.
      `,
          description2: `
        My professional journey has been built primarily around
        web application development, but it also involves requirements
        analysis, understanding business problems, and collaborating
        with different people and teams.
      `,
          buttonLinkedIn: 'LinkedIn',
          buttonGitHub: 'GitHub',
          buttonResume: 'Resume',
        },

        // MY STORY
        history: {
          label: 'My journey',
          title: 'From learning technology to building solutions',
          paragraphs: {
            item1: `
          My relationship with technology began with the curiosity
          to understand how systems and applications worked. Over time,
          that curiosity turned into an interest in software development
          and, eventually, into a professional career.
        `,
            item2: `
          During my degree in Systems Analysis and Development,
          I had contact with different areas of technology and began
          to build a broader perspective on systems development.
        `,
            item3: `
          Professional experience brought a new perspective.
          In addition to developing software, I began dealing directly
          with real-world problems, business requirements, maintenance
          of existing systems, and decisions that need to consider both
          technical aspects and users' needs.
        `,
            item4: `
          This experience sparked my interest in a more structured
          approach to software development, which led me to continue
          my education through a postgraduate degree in Software
          Engineering.
        `,
          },
        },

        // HOW I THINK
        workMethod: {
          label: 'My way of working',
          title: 'Technology is the means. Solutions are the goal.',
          description: `
        I like to see software development as something beyond
        implementation. Before thinking about code, I try to understand
        the problem that needs to be solved.
      `,
          cards: {
            item1: {
              title: 'Understand before developing',
              description: `
            I seek to understand the context, requirements,
            and needs before defining a solution.
          `,
            },
            item2: {
              title: 'Seek solutions',
              description: `
            I enjoy analyzing different possibilities before
            choosing a technical approach.
          `,
            },
            item3: {
              title: 'Think about evolution',
              description: `
            I aim to build solutions that can be maintained,
            adapted, and evolved over time.
          `,
            },
            item4: {
              title: 'Work together',
              description: `
            I believe that good solutions emerge from collaboration
            between different areas of knowledge and perspectives.
          `,
            },
          },
        },

        // BEYOND CODE
        beyondCode: {
          label: 'Beyond code',
          title: 'Development also involves people.',
          paragraphs: {
            item1: `
          An important part of my experience is related to communication.
          Understanding what a person needs, asking questions, identifying
          problems, and transforming a need into a clear requirement
          are activities that are just as important as implementing
          the solution.
        `,
            item2: `
          For this reason, I value clear communication, the ability
          to listen to different perspectives, and collaboration
          throughout the development of a project.
        `,
          },
        },

        // WHAT MOTIVATES ME
        motivation: {
          label: 'Motivation',
          title: 'What keeps me learning?',
          items: {
            item1: {
              title: 'New challenges',
              description: `
            Different problems allow me to step outside my comfort
            zone and expand my ability to find solutions.
          `,
            },
            item2: {
              title: 'Learning',
              description: `
            Technology is constantly changing, and I consider it
            essential to keep studying and experimenting.
          `,
            },
            item3: {
              title: 'Impact',
              description: `
            I like knowing that the software I develop solves
            a real problem and makes life easier for those who use it.
          `,
            },
          },
        },

        // EDUCATION SUMMARY
        education: {
          label: 'Education',
          title: 'A foundation for continuous growth',
          postgraduate: {
            badge: 'Postgraduate degree',
            title: 'Software Engineering',
            institution: 'Faculdade Focus',
            description: `
          A specialization focused on deepening knowledge in
          software engineering and software development.
        `,
          },
          undergraduate: {
            badge: 'Undergraduate degree',
            title: 'Systems Analysis and Development',
            institution: 'Faculdade Senac Pernambuco',
            description: `
          The degree that established my foundation in
          systems development and analysis.
        `,
          },
          button: 'Explore my education',
        },

        // PROFESSIONAL GOALS
        professionalGoal: {
          label: 'Next steps',
          title: 'Continuing to grow as a professional',
          paragraphs: {
            item1: `
          My goal is to continue developing efficient, scalable,
          and high-quality solutions while expanding both my
          technical depth and my ability to understand
          business problems.
        `,
            item2: `
          I want to continue taking on new challenges, exploring
          different technologies, and contributing to projects where
          engineering, learning, and impact move forward together.
        `,
          },
        },

        // CTA
        cta: {
          title: 'Want to learn more about my work?',
          description: `
        Explore my professional experiences, discover the projects
        I have developed, and see the technologies that are part
        of my journey.
      `,
          projectsButton: 'Projects',
          contactButton: 'Get in touch',
        },
      };
    } else if (this.settingsService.language === 'spanish') {
      this.aboutPage = {
        // ENCABEZADO
        header: {
          label: 'Sobre mí',
          title: 'Desarrollador, curioso',
          titleHighlight: ' y siempre en evolución.',
          description: `
        Soy Ronaldo Sabino, Analista y Desarrollador de
        Sistemas, apasionado por la tecnología y por el proceso
        de transformar problemas en soluciones a través del software.
      `,
          description2: `
        Mi trayectoria profesional se ha construido principalmente
        en el desarrollo de aplicaciones web, pero también involucra
        análisis de requisitos, comprensión de problemas de negocio
        y colaboración con diferentes personas y áreas.
      `,
          buttonLinkedIn: 'LinkedIn',
          buttonGitHub: 'GitHub',
          buttonResume: 'Currículo',
        },

        // MI HISTORIA
        history: {
          label: 'Mi trayectoria',
          title: 'De aprender tecnología a construir soluciones',
          paragraphs: {
            item1: `
          Mi relación con la tecnología comenzó a partir de la
          curiosidad por entender cómo funcionaban los sistemas
          y las aplicaciones. Con el tiempo, esa curiosidad se
          transformó en interés por el desarrollo de software y,
          posteriormente, en una carrera profesional.
        `,
            item2: `
          Durante mi formación en Análisis y Desarrollo de Sistemas,
          tuve contacto con diferentes áreas de la tecnología y
          comencé a construir una visión más amplia sobre el
          desarrollo de sistemas.
        `,
            item3: `
          La experiencia profesional aportó una nueva perspectiva.
          Además de desarrollar software, comencé a enfrentarme
          directamente a problemas reales, requisitos de negocio,
          mantenimiento de sistemas existentes y decisiones que deben
          considerar tanto los aspectos técnicos como las necesidades
          de los usuarios.
        `,
            item4: `
          Esta experiencia despertó mi interés por una visión cada
          vez más estructurada del desarrollo de software, lo que
          me llevó a continuar mi formación mediante el posgrado
          en Ingeniería de Software.
        `,
          },
        },

        // CÓMO PIENSO
        workMethod: {
          label: 'Mi forma de trabajar',
          title: 'La tecnología es el medio. La solución es el objetivo.',
          description: `
        Me gusta ver el desarrollo de software más allá de la
        implementación. Antes de pensar en código, procuro entender
        el problema que necesita ser resuelto.
      `,
          cards: {
            item1: {
              title: 'Entender antes de desarrollar',
              description: `
            Procuro comprender el contexto, los requisitos
            y las necesidades antes de definir una solución.
          `,
            },
            item2: {
              title: 'Buscar soluciones',
              description: `
            Me gusta analizar diferentes posibilidades antes
            de elegir un enfoque técnico.
          `,
            },
            item3: {
              title: 'Pensar en la evolución',
              description: `
            Busco construir soluciones que puedan mantenerse,
            adaptarse y evolucionar a lo largo del tiempo.
          `,
            },
            item4: {
              title: 'Trabajar en conjunto',
              description: `
            Creo que las buenas soluciones surgen de la colaboración
            entre diferentes conocimientos y perspectivas.
          `,
            },
          },
        },

        // MÁS ALLÁ DEL CÓDIGO
        beyondCode: {
          label: 'Más allá del código',
          title: 'El desarrollo también involucra a las personas.',
          paragraphs: {
            item1: `
          Una parte importante de mi experiencia está relacionada
          con la comunicación. Entender lo que una persona necesita,
          hacer preguntas, identificar problemas y transformar una
          necesidad en un requisito claro son actividades tan importantes
          como la implementación de la solución.
        `,
            item2: `
          Por eso, valoro la comunicación clara, la capacidad de
          escuchar diferentes perspectivas y la colaboración durante
          el desarrollo de un proyecto.
        `,
          },
        },

        // LO QUE ME MOTIVA
        motivation: {
          label: 'Motivación',
          title: '¿Qué me hace seguir aprendiendo?',
          items: {
            item1: {
              title: 'Nuevos desafíos',
              description: `
            Los diferentes problemas me permiten salir de mi zona
            de confort y ampliar mi capacidad para encontrar soluciones.
          `,
            },
            item2: {
              title: 'Aprendizaje',
              description: `
            La tecnología cambia constantemente, y considero esencial
            seguir estudiando y experimentando.
          `,
            },
            item3: {
              title: 'Impacto',
              description: `
            Me gusta saber que el software desarrollado resuelve
            un problema real y facilita la vida de quienes lo utilizan.
          `,
            },
          },
        },

        // RESUMEN DE FORMACIÓN
        education: {
          label: 'Formación',
          title: 'Una base para seguir evolucionando',
          postgraduate: {
            badge: 'Posgrado',
            title: 'Ingeniería de Software',
            institution: 'Faculdade Focus',
            description: `
          Especialización enfocada en profundizar los conocimientos
          en ingeniería y desarrollo de software.
        `,
          },
          undergraduate: {
            badge: 'Grado',
            title: 'Análisis y Desarrollo de Sistemas',
            institution: 'Faculdade Senac Pernambuco',
            description: `
          Formación que estableció mi base en el desarrollo
          y análisis de sistemas.
        `,
          },
          button: 'Conocer mi formación',
        },

        // OBJETIVO PROFESIONAL
        professionalGoal: {
          label: 'Próximos pasos',
          title: 'Seguir evolucionando como profesional',
          paragraphs: {
            item1: `
          Mi objetivo es continuar desarrollando soluciones eficientes,
          escalables y de calidad, ampliando tanto mi profundidad técnica
          como mi capacidad para comprender problemas de negocio.
        `,
            item2: `
          Quiero seguir asumiendo nuevos desafíos, conocer diferentes
          tecnologías y contribuir en proyectos en los que la ingeniería,
          el aprendizaje y el impacto avancen juntos.
        `,
          },
        },

        // CTA
        cta: {
          title: '¿Quieres conocer más sobre mi trabajo?',
          description: `
        Explora mis experiencias profesionales, conoce los proyectos
        que he desarrollado y descubre las tecnologías que forman
        parte de mi trayectoria.
      `,
          projectsButton: 'Proyectos',
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

  redirectToLinkedIn() {
    window.open('https://www.linkedin.com/in/ronaldo-sabino', '_blank');
  }

  redirectToGitHub() {
    window.open('https://www.github.com/ronaldosabino', '_blank');
  }
}
