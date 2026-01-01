import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component'; 
import { SusoDizComponent } from './susodiz/susodiz.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { LaligagateComponent } from './laligagate/laligagate.component';
import { Threshold95Component } from './projects/threshold-95/threshold-95.component'; 
import { HomelabComponent } from './projects/homelab/homelab.component'; 

export const routes: Routes = [
    { path: '', component: HomeComponent, data: { animation: 'HomePage' } }, // Página de inicio
    { path: 'susodiz', component: SusoDizComponent }, // Más SusoDiz
    { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' } }, // Página About
    { path: 'projects', component: ProjectsComponent, data: { animation: 'ProjectsPage' } }, // Página Projects
    { path: 'laligagate', component: LaligagateComponent, data: { animation: 'LaligagatePage' } }, // Página LaLigaGate
    { path: 'projects/threshold-95', component: Threshold95Component, data: { animation: 'Threshold95Page' } }, // Nueva ruta para el Umbral del 95%
    { path: 'projects/homelab', component: HomelabComponent, data: { animation: 'HomelabPage' } }, // Página de Homelab
    { path: '**', component: Error404Component }, // Ruta comodín para páginas no encontradas (¡¡¡SIEMPRE AL FINAL!!!)
];