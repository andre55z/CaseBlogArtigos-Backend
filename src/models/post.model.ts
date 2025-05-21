import {BD} from '../database/database'

export const criarPost = async (titulo: string, conteudo: string, id_usuario:number, imagem?: Buffer) =>
    {
        const [resultado] = await BD.execute('INSERT INTO posts (titulo, conteudo, id_usuario, imagem) VALUES(?, ?, ?, ?)', [titulo, conteudo, id_usuario, imagem || null]);
        return resultado;
    };

export const atualizarPost = async (titulo:string, conteudo:string, id_usuario:number,id_post:number, imagem?:Buffer) =>
    {
        const [resultado] = await BD.execute('UPDATE posts SET titulo = ?, conteudo = ?, imagem = ? WHERE id_usuario = ? AND id_post = ?', [titulo, conteudo, imagem || null, id_usuario, id_post]);
        return resultado;
    };

export const deletePost = async (id_post:number, id_usuario:number) =>
    {
        const [resultado] = await BD.execute('DELETE FROM posts WHERE id_post = ?', [id_post]);
        return resultado;
    };