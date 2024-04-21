export interface AlumnoInterface {
  _id: string,
  apellido: string,
  nombre: string,
  email: string,
  genero: string,
  edad: string,
  fechaNacimiento: string,
  direccion: string,
  telefono: string,
  tipoDocumento: string,
  numeroDocumento: string,
}

export interface crearAlumnoInterface {
  nombre: string,
  apellido: string,
  email: string,
  genero: string,
  edad: string,
  fechaNacimiento: string,
  direccion: string,
  telefono: string,
  tipoDocumento: string,
  numeroDocumento: string,
}