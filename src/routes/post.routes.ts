import Router  from "express";
import autenticarJWT from "../middlewares/auth.middlewares";
import * as postCntrl from "../controllers/post.controller"
import { upload } from "../middlewares/upload";

const roteador = Router();

roteador.post(
  "/posts",
  autenticarJWT,
  upload.single("imagem"), // campo do formulário deve se chamar 'imagem'
  postCntrl.criando as (req: Router.Request, res: Router.Response) => Promise<any>
);

roteador.put("/posts", autenticarJWT, upload.single("imagem"), postCntrl.atualizando as (req: Router.Request, res: Router.Response) => Promise<any>) ;

roteador.delete("/posts", autenticarJWT, postCntrl.deletando as (req: Router.Request, res: Router.Response) => Promise<any>);

roteador.get("/posts", postCntrl.listar as (req: Router.Request, res: Router.Response) => Promise<any>);

export default roteador;