import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { crearAlumnoInterface } from '../../core/interface/alumno.interface';

@Component({
  selector: 'app-inscripciones',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
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
    console.log("datos", this.alumnoForm.value);

    const alumnoNuevo = this.alumnoForm.value;

    if (this.alumnoForm.valid) {
      const data: crearAlumnoInterface = {
        nombre: alumnoNuevo.nombre || "",
        apellido: alumnoNuevo.apellido || "",
        email: alumnoNuevo.email || "",
        genero: alumnoNuevo.genero || "",
        edad: alumnoNuevo.edad || "",
        fechaNacimiento: alumnoNuevo.fechaNacimiento || "",
        direccion: alumnoNuevo.direccion || "",
        telefono: alumnoNuevo.telefono || "",
        tipoDocumento: alumnoNuevo.tipoDocumento || "",
        numeroDocumento: alumnoNuevo.numeroDocumento || "",
      }
    }
  }

  hasErrors(controlName: string, errorType: string) {
    return this.alumnoForm.get(controlName)?.hasError(errorType) && this.alumnoForm.get(controlName)?.touched;
  }
}
