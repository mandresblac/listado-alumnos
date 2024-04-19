import { Router } from "express";
import { crearAlumnos } from "../controllers/alumno.controller";

const router = Router();

// El path por defecto de la ruta es alumno
router.post("/", crearAlumnos);

export default router;