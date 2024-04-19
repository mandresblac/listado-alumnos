import { Request, Response } from "express";
import AlumnoModel from "../models/alumno.model";

// CREATE = Crear, enviar información al servidor, metodo post
export const crearAlumnos = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    console.log(req);
    console.log(body);

    const alumnoNuevo = new AlumnoModel(body);
    const alumnoCreado = await alumnoNuevo.save();
    
    res.status(200).json({
      ok: true,
      msg: "Alumno creado",
      alumno: alumnoCreado
    });

  } catch (error) {
    console.log(error); // Error para mostrarle el programador

    // Error para mostrarle al Usuario
    res.status(400).json({
      ok: false,
      msg: "Error al crear el alumno"
    });
  }
};

// READ = Leer , Solicitar informacion al servidor, metodo get
export const getAlumnos = async (req: Request, resp: Response) => {
  try {
    // El busca todos los clientes
    const alumnos = await AlumnoModel.find();
    resp.status(200).json({
      ok: true,
      alumnos,

    })
  } catch (error) {
    resp.status(400).json({
      ok: false,
      cmsg: "Error al consultar los alumnos"
    })
  };
};