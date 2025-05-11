import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { Threshold95Component } from './projects/threshold-95/threshold-95.component'; // Importa el componente
import { HomelabComponent } from './projects/homelab/homelab.component'; // Importa el componente

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Página de inicio
    { path: 'about', component: AboutComponent }, // Página About
    { path: 'projects', component: ProjectsComponent }, // Página Projects
    { path: 'projects/threshold-95', component: Threshold95Component }, // Nueva ruta para el Umbral del 95%
    { path: 'projects/homelab', component: HomelabComponent }, // Página de Homelab
];