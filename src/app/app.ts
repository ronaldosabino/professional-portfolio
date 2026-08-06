import { Component } from '@angular/core';
import { Navbar } from './core/components/navbar/navbar';

import { Footer } from './core/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = 'portfolio';
}
