import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('@/pages/landing/landing-page.component').then(p => p.LandingPageComponent) , pathMatch: 'full' },
    { path: 'notfound', loadComponent: () => import('@/pages/notfound/not-found-page.component').then(p => p.NotFoundPageComponent) },
    { path: '**', redirectTo: '/notfound' }
];
