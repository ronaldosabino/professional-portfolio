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
  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(null),
    message: new FormControl(''),
  });

  submit() {
    if (
      this.form.get('name')!.value === '' ||
      this.form.get('email')!.value === '' ||
      this.form.get('subject')!.value === '' ||
      this.form.get('message')!.value === ''
    ) {
      console.error('preencha todos os campos');
    } else {
      console.log(this.form.getRawValue());
    }
  }
}
