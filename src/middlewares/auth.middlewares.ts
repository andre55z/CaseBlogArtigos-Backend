import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { loginUsuario } from '../controllers/user.controller';


const JWT_SECRET = process.env.JWT_SECRET || 'chave_default';

export const autenticarJWT = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Token não fornecido." });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const segredo = process.env.JWT_SECRET || "segredo123";
    const payload = jwt.verify(token, segredo) as { userId: number };

    (req as any).userId = payload.userId;

    next(); // Continua a execução
  } catch (error) {
    res.status(403).json({ message: "Token inválido ou expirado." });
  }
};


export default autenticarJWT