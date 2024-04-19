import express, { Application, Request, Response } from "express";
import { dbConnection } from "./database/connection";
import alumnoRoutes from "./routes/alumno.route";

// Punto de entrada de la aplicación
class Server {
  private app: Application;
  private port: string; // Puerto por donde escucha la API
  private apiPaths = {
    alumno: "/api/v1/alumno"
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";

    // Llamado a la funcion del archivo connection.ts
    dbConnection();

    // Metodos iniciales
    this.middlewares();

    // Rutas
    this.routes();
  }

  miPrimeraApi() {
    this.app.get("/", (req: Request, res: Response) => {
      res.status(200).json({msg: "Informacion"});
    })
  }

  middlewares() {
    // Lectura del body, convierte todo a formato .json
    this.app.use(express.json());

    this.miPrimeraApi();
  }

  routes(): void {
    this.app.use(this.apiPaths.alumno, alumnoRoutes);
  }

  // Metodo de la clase
  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}

// Exportamos la clase Server por default
export default Server;