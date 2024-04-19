import express, { Application } from "express";
import { dbConnection } from "./database/connection";


// Punto de entrada de la aplicación
class Server {
  private app: Application;
  private port: string; // Puerto por donde escucha la API

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";

    // Llamado a la funcion del archivo connection.ts
    dbConnection();
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