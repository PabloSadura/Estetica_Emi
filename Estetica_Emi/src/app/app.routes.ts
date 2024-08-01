import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./inicio/inicio/inicio.component'),
    children: [
      {
        path: 'app',
        loadComponent: () => import('./inicio/inicio/inicio.component'),
      },
      {
        path: 'info',
        title: 'Info',
        loadComponent: () => import('./inicio/pages/info/info.component'),
      },
      {
        path: 'trabajos-realizados',
        title: 'Trabajos Realizados',
        loadComponent: () =>
          import(
            './inicio/pages/trabajos-realizados/trabajos-realizados.component'
          ),
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full',
  },
];
