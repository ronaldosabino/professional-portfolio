import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'experiences',
    loadComponent: () => import('./features/experiences/experiences').then((m) => m.Experiences),
  },
  {
    path: 'education',
    loadComponent: () => import('./features/education/education').then((m) => m.Education),
  },
];
