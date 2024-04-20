export class AlumnoModel {
  constructor(
    public readonly _id: string,
    public nombre: string,
    public apellido: string,
    public email: string,
    public genero: string,
    public edad: number,
    public fechaNacimiento: string,
    public direccion: string,
    public telefono: string,
    public tipoDocumento: string,
    public numeroDocumento: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}