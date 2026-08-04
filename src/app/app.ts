import { Component } from '@angular/core';
import { Navbar } from './core/components/navbar/navbar';
import { Hero } from './features/home/hero/hero';
import { About } from './features/home/about/about';
import { Skills } from './features/home/skills/skills';
import { Experience } from './features/home/experience/experience';
import { Education } from './features/home/education/education';
import { Projects } from './features/home/projects/projects';
import { Testimonials } from './features/home/testimonials/testimonials';
import { Contact } from './features/home/contact/contact';
import { Footer } from './core/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    About,
    Skills,
    Experience,
    Education,
    Projects,
    Testimonials,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = 'portfolio';
}
