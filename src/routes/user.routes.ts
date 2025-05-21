import Router  from "express";
import {registroDeUsuario}  from "../controllers/user.controller";

const roteador = Router();

roteador.post("/registro-de-usuario", registroDeUsuario as (req: Router.Request, res: Router.Response) => Promise<any>);

export default roteador;
