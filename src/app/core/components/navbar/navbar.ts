import { Component } from '@angular/core';
import { Menu } from '../../../shared/animations/menu/menu';

@Component({
  selector: 'app-navbar',
  imports: [Menu],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
