import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { LaligagateComponent } from './laligagate/laligagate.component';
import { Threshold95Component } from './projects/threshold-95/threshold-95.component'; // Importa el componente
import { HomelabComponent } from './projects/homelab/homelab.component'; // Importa el componente
import { Error404Component } from './error404/error404.component'; // Importa el componente de error

export const routes: Routes = [
    { path: '', component: HomeComponent, data: { animation: 'HomePage' } }, // Página de inicio
    { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' } }, // Página About
    { path: 'projects', component: ProjectsComponent, data: { animation: 'ProjectsPage' } }, // Página Projects
    { path: 'laligagate', component: LaligagateComponent, data: { animation: 'LaligagatePage' } }, // Página LaLigaGate
    { path: 'projects/threshold-95', component: Threshold95Component, data: { animation: 'Threshold95Page' } }, // Nueva ruta para el Umbral del 95%
    { path: 'projects/homelab', component: HomelabComponent, data: { animation: 'HomelabPage' } }, // Página de Homelab
    { path: '**', component: Error404Component } // Ruta comodín para páginas no encontradas
];