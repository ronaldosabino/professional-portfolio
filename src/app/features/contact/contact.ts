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
    subject: new FormControl(null),
    message: new FormControl(''),
  });

  submit() {
    const name = this.form.get('name')!.value;
    const email = this.form.get('email')!.value;
    const subject = this.form.get('subject')!.value;
    const message = this.form.get('message')!.value;

    if (name === '' || email === '' || subject === '' || message === '') {
      console.error('preencha todos os campos');
    } else {
      this.text = `Oi, Ronlado! Eu me chamo ${name}. Quero falar com você sobre um(a) ${subject}. ${message}. Este é o meu email para contato: ${email}`;
      console.log(this.form.getRawValue());
      window.location.href = `https://wa.me/5581994479584?text=${this.text}`;
    }
  }
}
