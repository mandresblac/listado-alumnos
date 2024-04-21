import { Injectable } from '@angular/core';
import { crearAlumnoInterface } from '../../core/interface/alumno.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private httpClient: HttpClient) { }

  get token(): string { 
    return localStorage.getItem('token') || ""; 
  }

  get headers() {
    return {
      headers: {
        "x-token": this.token,
      }
    };
  };

  // Esto se cambia para obtener los usuarios en la tabla de ver cliente
  getAlumnos() {
    return this.httpClient.get(`${base_url}/alumno`, this.headers);
  }

  crearAlumnos(alumno: crearAlumnoInterface) {
    return this.httpClient.post(`${base_url}/alumno`, alumno, this.headers);
  }
}
