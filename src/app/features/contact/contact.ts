import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  text: string = '';

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(),
    message: new FormControl(''),
  });

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
