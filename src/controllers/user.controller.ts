import { Request, Response } from "express";    //Importa o tratamento de requisições e respostas via express
import { usuario }from "../models/user.model"    // Importa o modelo de usuario criado na pasta "models"
import { BD } from "../database"                 // importa a Pool que estabelece conexão com o banco de dados               
import bcrypt from 'bcrypt';                     // Importa o bcrypt

export const registroDeUsuario = async (req: Request, res: Response) =>{            //Pegando dados da requisição e tipando como usuario
    const { nomeusuario, email, senha}: usuario = req.body;


if (!nomeusuario || !email || !senha)
    {
        return res.status(400).json({message: 'Preencha todos os campos.'});
    }
try{
    const [existing] = await BD.query('SELECT * FROM usuarios WHERE email = ?', [email]);   //verifiica se o email ja existe no banco
    if ((existing as any[]).length > 0)
        {
            return res.status(409).json({message: 'Email ja cadastrado!'});
        }
    
    const SenhaEncript = bcrypt.hash(senha, 10);        //encripitando a senha
    
    await BD.query(
        'INSERT INTO usuarios (nomeusuario, email, senha) VALUES (?, ?, ?)',
        [nomeusuario, email, senha]
    );                                                                                  //inserindo os dados do usuario no BD

    return res.status(201).json({message:'Cadastrado com sucesso'});
}
catch (erro)
{
    console.error(erro);
    return res.status(500).json({message:"Erro no cadastro!"})
} 
};

