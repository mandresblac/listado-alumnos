import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ListadoComponent } from '../listado/listado.component';
import { AlumnoModel } from '../../core/models/alumno.model';

@Component({
  selector: 'app-inscripciones',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass, ListadoComponent],
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.css'
})
export class InscripcionesComponent {

  alumnoForm = new FormGroup({
    // Validaciones del formulario
    nombre: new FormControl("", [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    genero: new FormControl("", Validators.required),
    edad: new FormControl("", Validators.required),
    fechaNacimiento: new FormControl("", Validators.required), //
    direccion: new FormControl("", [Validators.required, Validators.minLength(3)]),
    telefono: new FormControl("", [Validators.required, Validators.minLength(3)]),
    tipoDocumento: new FormControl("", Validators.required),
    numeroDocumento: new FormControl("", [Validators.required, Validators.minLength(3)]),
  })

  
  agregarAlumno() {
    const alumnos = this.alumnoForm.value;
    console.log(this.alumnoForm.value);
    console.log(alumnos);
    return alumnos;
  }

  hasErrors(controlName: string, errorType: string) {
    return this.alumnoForm.get(controlName)?.hasError(errorType) && this.alumnoForm.get(controlName)?.touched;
  }
}
