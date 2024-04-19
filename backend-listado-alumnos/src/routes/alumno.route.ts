import { Router } from "express";
import { crearAlumnos, getAlumnos } from "../controllers/alumno.controller";

const router = Router();

// El path por defecto de la ruta es alumno
router.post("/", crearAlumnos);
router.get("/", getAlumnos);

export default router;