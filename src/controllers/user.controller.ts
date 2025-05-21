import { Request, Response } from "express";    //Importa o tratamento de requisições e respostas via express
import { User }from "../models/user.model"    // Importa o modelo de usuario criado na pasta "models"
import { BD } from "../database"                 // importa a Pool que estabelece conexão com o banco de dados               
import bcrypt from 'bcrypt';                     // Importa o bcrypt
import Jwt  from "jsonwebtoken";                //importa o JWT para a geração de token

import dotenv from 'dotenv';
dotenv.config();
export const registroDeUsuario = async (req: Request, res: Response) =>{            //Pegando dados da requisição e tipando como usuario
    const dados: User = req.body;
    const { nomeusuario, email, senha} = dados;


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
    
    const SenhaEncript = await bcrypt.hash(senha, 10);        //encripitando a senha
    
    await BD.query(
        'INSERT INTO usuarios (nomeusuario, email, senha) VALUES (?, ?, ?)',
        [nomeusuario, email, SenhaEncript]
    );                                                                                  //inserindo os dados do usuario no BD

    return res.status(201).json({message:'Cadastrado com sucesso'});
}
catch (erro)
{
    console.error(erro);
    return res.status(500).json({message:"Erro no cadastro!"})
} 
};

export const loginUsuario = async (req: Request, res: Response) =>       //exportação da função login de usuario
    {
        const {email, senha}=req.body;                                   //dados da requisição sendo tipados


        if (!email || !senha)                                            //verificando se os campos estao preenchidos
            {
                return res.status(400).json({message:'Preencha todos os campos'});
            } 
        try{
            const [rows] = await BD.query('SELECT * FROM usuarios WHERE email = ?', [email]) as any[];                       //buscando os dados no banco
            

            if(rows.length === 0)                                                                       //verificando se os dados existem no bd
                {
                    return res.status(400).json({message: 'Email não encontrado'});

                }

                const usuarioEncontrado = rows[0];                                                     //o usuario encontrado será colocado numa variavel

                const senhaVerificada = await bcrypt.compare(senha, usuarioEncontrado.senha);                       //verificação se a senha digitada e a do bd coincidem

                if(!senhaVerificada)
                    {
                        return res.status(401).json({message: 'A senha está errada.'});
                }
                
                const token = Jwt.sign({id: usuarioEncontrado.id_usuario}, process.env.JWT_SECRET as string, {
                    expiresIn: '1h'
                })

                return res.status(200).json({message: 'Login feito com sucesso! ', token})                             //retorno do lpgin bem sucedido            
        }
        catch(erro)
        {
            console.error(erro);
            return res.status(500).json({message: 'Erro ao fazer login'});                                      //retorno de uma falha
        }
    };



