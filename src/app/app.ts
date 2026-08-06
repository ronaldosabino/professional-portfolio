import { Component } from '@angular/core';
import { Navbar } from './core/components/navbar/navbar';
import { Footer } from './core/components/footer/footer';
import { Home } from './features/home/home';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Home],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = 'portfolio';
}
