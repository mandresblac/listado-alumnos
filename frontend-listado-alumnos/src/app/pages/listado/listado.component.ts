import { Component, Input } from '@angular/core';
import { AlumnoModel } from '../../core/models/alumno.model';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  alumnos: AlumnoModel[] = [];
}
