import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InscripcionesComponent } from './pages/inscripciones/inscripciones.component';
import { ListadoComponent } from './pages/listado/listado.component';

export const routes: Routes = [
  {
    path: "",
    title: "home",
    component: HomeComponent,
  },
  {
    path: "inscripciones",
    title: "inscripciones",
    component: InscripcionesComponent,
  },
  {
    path: "listado",
    title: "listado",
    component: ListadoComponent,
  },
  {
    path: "**", redirectTo: "", pathMatch: "full"
  }
];
