import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Página de inicio
    { path: 'about', component: AboutComponent }, // Página About
    { path: 'projects', component: ProjectsComponent }, // Página Projects
];