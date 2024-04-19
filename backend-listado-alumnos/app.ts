import dotenv from "dotenv";
import Server from "./src/server";

// Configuramos .env
dotenv.config();

// Este archivo es la entrada principal de mi alplicacion
const server = new Server(); // Instancia del la clase Server
server.listen();