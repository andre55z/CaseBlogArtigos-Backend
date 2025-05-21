import Router  from "express";
import {registroDeUsuario}  from "../controllers/user.controller";
import { loginUsuario } from "../controllers/user.controller";
import autenticarJWT from "../middlewares/auth.middlewares";

const roteador = Router();      //criando roteador para as rotas de usuario


roteador.post("/registro-de-usuario", registroDeUsuario as (req: Router.Request, res: Router.Response) => Promise<any>);  //cria uma rota para a função resgitroDeUsuario
roteador.post("/login-de-usuario", loginUsuario as (req: Router.Request, res: Router.Response) => Promise<any>);

export default roteador;
