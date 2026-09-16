import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { SettingsService } from '../../core/services/settings.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactPage = {
    header: {
      label: '',
      title: '',
      titleHighlight: '',
      description: '',
    },

    contact: {
      label: '',
      title: '',
      description: '',

      email: {
        label: '',
      },

      linkedin: {
        label: '',
      },

      github: {
        label: '',
      },

      whatsapp: {
        label: '',
      },

      location: {
        label: '',
        value: '',
      },

      availability: {
        title: '',
        description: '',
      },
    },

    form: {
      label: '',
      title: '',
      description: '',

      name: {
        label: '',
        placeholder: '',
      },

      email: {
        label: '',
        placeholder: '',
      },

      subject: {
        label: '',
        placeholder: '',
        opportunity: '',
        project: '',
        collaboration: '',
        conversation: '',
        other: '',
      },

      message: {
        label: '',
        placeholder: '',
      },

      submitButton: '',
    },

    opportunities: {
      label: '',
      title: '',
      description: '',

      professional: {
        title: '',
        description: '',
      },

      projects: {
        title: '',
        description: '',
      },

      networking: {
        title: '',
        description: '',
      },
    },

    faq: {
      label: '',
      title: '',
      description: '',

      questionOne: {
        question: '',
        answer: '',
      },

      questionTwo: {
        question: '',
        answer: '',
      },

      questionThree: {
        question: '',
        answer: '',
      },

      questionFour: {
        question: '',
        answer: '',
      },
    },

    cta: {
      title: '',
      description: '',
      button: '',
    },
  };

  text: string = '';

  constructor(protected settingsService: SettingsService) {}

  ngOnInit() {
    this.detectLanguage();
  }

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(),
    message: new FormControl(''),
  });

  detectLanguage() {
    if (this.settingsService.language === 'portuguese') {
      this.contactPage = {
        header: {
          label: 'Contato',
          title: 'Vamos conversar sobre',
          titleHighlight: ' tecnologia e oportunidades.',
          description:
            'Se você quiser conversar sobre um projeto, oportunidade profissional ou simplesmente trocar uma ideia sobre desenvolvimento de software, entre em contato comigo.',
        },

        contact: {
          label: 'Fale comigo',
          title: 'Encontre a melhor forma de entrar em contato.',
          description:
            'Estou aberto a conversas relacionadas a desenvolvimento de software, oportunidades profissionais, projetos e colaboração.',

          email: {
            label: 'E-MAIL',
          },

          linkedin: {
            label: 'LINKEDIN',
          },

          github: {
            label: 'GITHUB',
          },

          whatsapp: {
            label: 'WHATSAPP',
          },

          location: {
            label: 'LOCALIZAÇÃO',
            value: 'Recife, Pernambuco — Brasil',
          },

          availability: {
            title: 'Disponível para conversar',
            description:
              'Tenho interesse em conhecer novos projetos, desafios técnicos e oportunidades profissionais.',
          },
        },

        form: {
          label: 'Envie uma mensagem',
          title: 'Como posso ajudar?',
          description: 'Preencha os campos abaixo e entrarei em contato assim que possível.',

          name: {
            label: 'Nome',
            placeholder: 'Seu nome',
          },

          email: {
            label: 'E-mail',
            placeholder: 'seuemail@email.com',
          },

          subject: {
            label: 'Assunto',
            placeholder: 'Selecione uma opção',
            opportunity: 'Oportunidade profissional',
            project: 'Projeto',
            collaboration: 'Colaboração',
            conversation: 'Conversa / Networking',
            other: 'Outro assunto',
          },

          message: {
            label: 'Mensagem',
            placeholder: 'Escreva sua mensagem...',
          },

          submitButton: 'Enviar mensagem',
        },

        opportunities: {
          label: 'Oportunidades',
          title: 'Em que tipo de oportunidade tenho interesse?',
          description:
            'Tenho interesse em oportunidades que possibilitem crescimento profissional, aprendizado contínuo e participação em projetos relevantes.',

          professional: {
            title: 'Oportunidades profissionais',
            description:
              'Posições relacionadas ao desenvolvimento de software e à engenharia de aplicações web.',
          },

          projects: {
            title: 'Projetos',
            description:
              'Projetos que envolvam desenvolvimento, modernização ou evolução de aplicações.',
          },

          networking: {
            title: 'Networking',
            description:
              'Conversas com profissionais e pessoas interessadas em tecnologia, desenvolvimento e inovação.',
          },
        },

        faq: {
          label: 'Dúvidas',
          title: 'Antes de entrar em contato',
          description: 'Algumas respostas rápidas para facilitar nossa conversa.',

          questionOne: {
            question: 'Você está aberto a oportunidades profissionais?',
            answer:
              'Sim. Tenho interesse em conhecer novas oportunidades e desafios relacionados à área de desenvolvimento de software.',
          },

          questionTwo: {
            question: 'Você trabalha com projetos?',
            answer:
              'Tenho interesse em conversar sobre projetos relacionados ao desenvolvimento de aplicações web e soluções de software.',
          },

          questionThree: {
            question: 'Posso entrar em contato para networking?',
            answer:
              'Claro. Gosto de conhecer outros profissionais, trocar experiências e conversar sobre tecnologia e desenvolvimento de software.',
          },

          questionFour: {
            question: 'Quanto tempo leva para responder?',
            answer:
              'Procuro responder às mensagens assim que possível. Para assuntos profissionais, quanto mais contexto você enviar, melhor.',
          },
        },

        cta: {
          title: 'Tem uma ideia ou oportunidade?',
          description:
            'Não precisa esperar pelo momento perfeito. Envie uma mensagem e vamos conversar.',
          button: 'Enviar mensagem',
        },
      };
    } else if (this.settingsService.language === 'english') {
      this.contactPage = {
        header: {
          label: 'Contact',
          title: "Let's talk about",
          titleHighlight: ' technology and opportunities.',
          description:
            'If you would like to talk about a project, a professional opportunity, or simply exchange ideas about software development, feel free to contact me.',
        },

        contact: {
          label: 'Get in touch',
          title: 'Find the best way to get in touch.',
          description:
            'I am open to conversations related to software development, professional opportunities, projects, and collaboration.',

          email: {
            label: 'EMAIL',
          },

          linkedin: {
            label: 'LINKEDIN',
          },

          github: {
            label: 'GITHUB',
          },

          whatsapp: {
            label: 'WHATSAPP',
          },

          location: {
            label: 'LOCATION',
            value: 'Recife, Pernambuco — Brazil',
          },

          availability: {
            title: 'Available for a conversation',
            description:
              'I am interested in learning about new projects, technical challenges, and professional opportunities.',
          },
        },

        form: {
          label: 'Send a message',
          title: 'How can I help?',
          description: 'Fill out the fields below and I will get back to you as soon as possible.',

          name: {
            label: 'Name',
            placeholder: 'Your name',
          },

          email: {
            label: 'Email',
            placeholder: 'youremail@email.com',
          },

          subject: {
            label: 'Subject',
            placeholder: 'Select an option',
            opportunity: 'Professional opportunity',
            project: 'Project',
            collaboration: 'Collaboration',
            conversation: 'Conversation / Networking',
            other: 'Other subject',
          },

          message: {
            label: 'Message',
            placeholder: 'Write your message...',
          },

          submitButton: 'Send message',
        },

        opportunities: {
          label: 'Opportunities',
          title: 'What kind of opportunities am I interested in?',
          description:
            'I am interested in opportunities that provide professional growth, continuous learning, and participation in relevant projects.',

          professional: {
            title: 'Professional opportunities',
            description:
              'Positions related to software development and web application engineering.',
          },

          projects: {
            title: 'Projects',
            description:
              'Projects involving the development, modernization, or evolution of applications.',
          },

          networking: {
            title: 'Networking',
            description:
              'Conversations with professionals and people interested in technology, development, and innovation.',
          },
        },

        faq: {
          label: 'FAQ',
          title: 'Before getting in touch',
          description: 'Some quick answers to make our conversation easier.',

          questionOne: {
            question: 'Are you open to professional opportunities?',
            answer:
              'Yes. I am interested in exploring new opportunities and challenges related to software development.',
          },

          questionTwo: {
            question: 'Do you work on projects?',
            answer:
              'I am open to discussing projects related to web application development and software solutions.',
          },

          questionThree: {
            question: 'Can I contact you for networking?',
            answer:
              'Of course. I enjoy meeting other professionals, exchanging experiences, and talking about technology and software development.',
          },

          questionFour: {
            question: 'How long does it take to respond?',
            answer:
              'I try to respond to messages as soon as possible. For professional matters, the more context you provide, the better.',
          },
        },

        cta: {
          title: 'Do you have an idea or opportunity?',
          description:
            "You don't need to wait for the perfect moment. Send me a message and let's talk.",
          button: 'Send message',
        },
      };
    } else if (this.settingsService.language === 'spanish') {
      this.contactPage = {
        header: {
          label: 'Contacto',
          title: 'Hablemos sobre',
          titleHighlight: ' tecnología y oportunidades.',
          description:
            'Si quieres hablar sobre un proyecto, una oportunidad profesional o simplemente intercambiar ideas sobre desarrollo de software, ponte en contacto conmigo.',
        },

        contact: {
          label: 'Contáctame',
          title: 'Encuentra la mejor forma de ponerte en contacto.',
          description:
            'Estoy abierto a conversaciones relacionadas con desarrollo de software, oportunidades profesionales, proyectos y colaboración.',

          email: {
            label: 'CORREO ELECTRÓNICO',
          },

          linkedin: {
            label: 'LINKEDIN',
          },

          github: {
            label: 'GITHUB',
          },

          whatsapp: {
            label: 'WHATSAPP',
          },

          location: {
            label: 'UBICACIÓN',
            value: 'Recife, Pernambuco — Brasil',
          },

          availability: {
            title: 'Disponible para conversar',
            description:
              'Me interesa conocer nuevos proyectos, desafíos técnicos y oportunidades profesionales.',
          },
        },

        form: {
          label: 'Envía un mensaje',
          title: '¿Cómo puedo ayudarte?',
          description:
            'Completa los campos a continuación y me pondré en contacto contigo lo antes posible.',

          name: {
            label: 'Nombre',
            placeholder: 'Tu nombre',
          },

          email: {
            label: 'Correo electrónico',
            placeholder: 'tucorreo@email.com',
          },

          subject: {
            label: 'Asunto',
            placeholder: 'Selecciona una opción',
            opportunity: 'Oportunidad profesional',
            project: 'Proyecto',
            collaboration: 'Colaboración',
            conversation: 'Conversación / Networking',
            other: 'Otro asunto',
          },

          message: {
            label: 'Mensaje',
            placeholder: 'Escribe tu mensaje...',
          },

          submitButton: 'Enviar mensaje',
        },

        opportunities: {
          label: 'Oportunidades',
          title: '¿En qué tipo de oportunidad estoy interesado?',
          description:
            'Me interesan oportunidades que permitan crecimiento profesional, aprendizaje continuo y participación en proyectos relevantes.',

          professional: {
            title: 'Oportunidades profesionales',
            description:
              'Posiciones relacionadas con el desarrollo de software y la ingeniería de aplicaciones web.',
          },

          projects: {
            title: 'Proyectos',
            description:
              'Proyectos que involucren desarrollo, modernización o evolución de aplicaciones.',
          },

          networking: {
            title: 'Networking',
            description:
              'Conversaciones con profesionales y personas interesadas en tecnología, desarrollo e innovación.',
          },
        },

        faq: {
          label: 'Preguntas frecuentes',
          title: 'Antes de ponerte en contacto',
          description: 'Algunas respuestas rápidas para facilitar nuestra conversación.',

          questionOne: {
            question: '¿Estás abierto a oportunidades profesionales?',
            answer:
              'Sí. Estoy interesado en conocer nuevas oportunidades y desafíos relacionados con el área de desarrollo de software.',
          },

          questionTwo: {
            question: '¿Trabajas con proyectos?',
            answer:
              'Estoy interesado en conversar sobre proyectos relacionados con el desarrollo de aplicaciones web y soluciones de software.',
          },

          questionThree: {
            question: '¿Puedo contactarte para hacer networking?',
            answer:
              'Claro. Me gusta conocer a otros profesionales, intercambiar experiencias y conversar sobre tecnología y desarrollo de software.',
          },

          questionFour: {
            question: '¿Cuánto tiempo tardas en responder?',
            answer:
              'Procuro responder los mensajes lo antes posible. Para asuntos profesionales, cuanto más contexto proporciones, mejor.',
          },
        },

        cta: {
          title: '¿Tienes una idea u oportunidad?',
          description: 'No necesitas esperar al momento perfecto. Envíame un mensaje y hablemos.',
          button: 'Enviar mensaje',
        },
      };
    }
  }

  submit() {
    const name = this.form.get('name')!.value;
    const email = this.form.get('email')!.value;
    let subject = this.form.get('subject')!.value;
    const message = this.form.get('message')!.value;

    if (subject === 'opportunity') {
      subject = 'Oportunidade de Trabalho';
    } else if (subject === 'project') {
      subject = 'Projeto';
    } else if (subject === 'collaboration') {
      subject = 'Colaboração';
    } else if (subject === 'conversation') {
      subject = 'Conversa / Networking';
    } else if (subject === 'other') {
      subject = 'Outro';
    }

    if (name === '' || email === '' || subject === null || message === '') {
      alert('Preencha todos os campos do formulário!');
    } else {
      this.text = `Oi, Ronlado! Eu me chamo ${name}. Quero falar com você sobre um(a) ${subject}. ${message}. Este é o meu email para contato: ${email}`;
      console.log(this.form.getRawValue());
      window.open(`https://wa.me/5581994479584?text=${this.text}`, '_blank');
    }
  }

  sendMessage() {
    window.open(`https://wa.me/5581994479584?text=Olá,%20Ronaldo!`, '_blank');
  }
}
