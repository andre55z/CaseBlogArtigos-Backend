import Router  from "express";
import {registroDeUsuario}  from "../controllers/user.controller";
import { loginUsuario } from "../controllers/user.controller";
import { esqueciSenha } from "../controllers/user.controller";

const roteador = Router();      //criando roteador para as rotas de usuario

roteador.post("/registro-de-usuario", registroDeUsuario as (req: Router.Request, res: Router.Response) => Promise<any>);  //cria uma rota para a função resgitroDeUsuario
roteador.post("/login-de-usuario", loginUsuario as (req: Router.Request, res: Router.Response) => Promise<any>);
roteador.post("/esqueci-senha", esqueciSenha as (req: Router.Request, res: Router.Response)=>Promise<any>);

export default roteador;
