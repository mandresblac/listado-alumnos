import { Router } from "express";
import { crearAlumnos, deleteAlumno, getAlumnos, updateAlumno } from "../controllers/alumno.controller";

const router = Router();

// El path por defecto de la ruta es alumno
router.post("/", crearAlumnos);
router.get("/", getAlumnos);
router.put("/:id", updateAlumno);
router.delete("/:id", deleteAlumno);

export default router;