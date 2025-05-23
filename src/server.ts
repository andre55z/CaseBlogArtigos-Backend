import express from "express";
import cors from 'cors'
import roteador from './routes/user.routes'
import roteadorPost from './routes/post.routes' 

const myApp = express();       //Instanciação do Express
const myPort = 3000;          //Porta do servidor
myApp.use(cors({
  origin: 'http://localhost:5173', // URL do seu frontend
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
myApp.use(cors())

myApp.use(express.json());  //middleware que entende requisições com JSON
myApp.use('/api/user', roteador);      //as rotas do user ficam disponiveis em /api/users
myApp.use('/api/post', roteadorPost)



myApp.get('/', (req, res) => {res.send('Servidor em funcionamento');});  
myApp.listen(myPort, () => {
  console.log(`Servidor está rodando em http://localhost:${myPort}`);     
});


//Testando a conexão do BD
//Se der certo, retornará o sucesso da conexão e o resultado de 1+1
//Se não, retornará o fracasso 
import { BD } from './database/database';



(async () => {
  try {
    const [rows] = await BD.query('SELECT 1 + 1 AS result');
    console.log('Conexão com o banco bem-sucedida:', rows);
  } catch (err) {
    console.error('Erro ao conectar ao banco:', err);
  }
})();
