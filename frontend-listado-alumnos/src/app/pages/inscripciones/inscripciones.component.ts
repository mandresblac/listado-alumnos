import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscripciones',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.css'
})
export class InscripcionesComponent {
  alumnoForm = new FormGroup({
    // Validaciones del formulario
    nombre: new FormControl(),
    apellido: new FormControl(),
    email: new FormControl(),
    genero: new FormControl(),
    edad: new FormControl(),
    fechaNacimiento: new FormControl(), //
    direccion: new FormControl(),
    telefono: new FormControl(),
    tipoDocumento: new FormControl(),
    numeroDocumento: new FormControl(),
  })
}
