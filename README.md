# 🧠 Blog API - Backend

Este é o backend de uma aplicação de blog com autenticação JWT, escrita em Node.js, Express e TypeScript. Os dados são armazenados em um banco MySQL, e as senhas são protegidas com `bcrypt`.

## 🔧 Tecnologias

- Node.js
- Express
- TypeScript
- MySQL
- bcrypt
- JSON Web Token (JWT)
- dotenv

## 🔐 Funcionalidades

- Cadastro de usuário
- Login com geração de token JWT
- Middleware de autenticação
- CRUD de posts (com imagem em buffer)
- Integração com frontend via API REST

## Estrutura
src/
├── controllers/    # Funções para lidar com as rotas
├── models/         # Lógica de banco de dados
├── routes/         # Rotas da API
├── database.ts     # Conexão com o MySQL
├── middleware/     # Autenticação
