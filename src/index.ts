import Server from "./models/server";
import donenv from 'dotenv'

//Configuramos dot.env
donenv.config();

const server = new Server();

server.listen();