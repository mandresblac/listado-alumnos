import { Model, Schema, model } from "mongoose";

const AlumnoSchema = new Schema({
  nombre: {type: String, required: true},
  apellido: {type: String, required: true},
  email: { type: String, required: true, unique: true },
  genero: {type: String, required: true},
  edad: {type: Number, required: true},
  fechaNacimiento: {type: Date, required: true}, //
  direccion: {type: String, required: true},
  telefono: {type: String, required: true},
  tipoDocumento: { type: String, required: true},
  numeroDocumento: {type: String, required: true},
  createdAt: {type: Date, default: Date.now()},
  updatedAt: {type: Date, default: Date.now()}
});

const AlumnoModel: Model<any> = model("alumno", AlumnoSchema);

export default AlumnoModel;