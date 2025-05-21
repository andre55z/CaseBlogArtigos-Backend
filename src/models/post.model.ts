import {BD} from '../database/database'

export const criarPost = async (titulo: string, conteudo: string, id_usuario:number, imagem?: Buffer) =>
    {
        const [resultado] = await BD.execute('INSERT INTO posts (titulo, conteudo, id_usuario, imagem) VALUES(?, ?, ?, ?)', [titulo, conteudo, id_usuario, imagem || null]);
        return resultado;
    };

export const atualizarPost = async (titulo:string, conteudo:string, id_usuario:number, imagem?:Buffer) =>
    {
        const [resultado] = await BD.execute('UPDATE posts SET titulo = ?, conteudo = ?, imagem = ? WHERE id_usuario = ?', [titulo, conteudo, imagem || null, id_usuario]);
        return resultado;
    };

export const deletePost = async (id_usuario:number) =>
    {
        const [resultado] = await BD.execute('DELETE FROM posts WHERE id_usuario = ?', [id_usuario]);
        return resultado;
    };