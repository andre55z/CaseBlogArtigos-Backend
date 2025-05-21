import { Request, Response } from "express";
import {
  criarPost,
  atualizarPost,
  deletePost,
  listarPosts,
} from "../models/post.model";

export const criando = async (req:Request, res:Response) =>
    {
        const {titulo, conteudo} = req.body;
        const id_usuario = (req as any).userId;
        const imagem = req.file?.buffer;
    try{
        const resultado = await criarPost(titulo, conteudo, id_usuario, imagem );
        return res.status(200).json({message:"Sucesso ao criar um post"})
    }
    catch(erro)
    {
        console.error(erro);
        return res.status(500).json({message:'Erro na criação de post'});
    }
}

export const atualizando = async (req:Request, res:Response) =>
    {
        const {titulo, conteudo, id_post} = req.body;
        const id_usuario = (req as any).userId;
        const imagem = req.file?.buffer;
        try
        {
            const resultado = await atualizarPost(titulo, conteudo, id_usuario, id_post, imagem);
            return res.status(200).json({message:'Sucesso na atualização de posts'});
        }
        catch(erro)
        {
            console.error(erro);
            return res.status(500).json({message:'Erro na atualização de posts'});
        }
    }

export const deletando = async (req:Request, res:Response) =>
    {
        const id_usuario = (req as any).userId;
        const {id_post} = req.body;
    try
    {
        const resultado = await deletePost(id_post, id_usuario);
        return res.status(200).json({ message: 'Post deletado com sucesso', resultado });
    }
    catch(erro)
    {
        console.error(erro);
        return res.status(500).json({message:'Erro ao deletar o post'})
    }
}

export const listar = async (req: Request, res: Response) => {
  try {
    const resultado = await listarPosts();
    return res.status(200).json(resultado);
  } catch (erro) {
    console.error(erro);
    return res.status(500).json({ message: 'Erro ao listar os posts' });
  }
};