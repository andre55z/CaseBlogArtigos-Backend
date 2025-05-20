import express from "express";


const myApp = express();       //Instanciação do Express
const myPort = 3000;          //Porta do servidor

myApp.use(express.json());  //middleware que entende requisições com JSON

myApp.get('/', (req, res) => {res.send('Servidor em funcionamento');});  //Ao acessar a porta, essa função será chamada. Teste de rota.

myApp.listen(myPort, () => {
  console.log(`Servidor está rodando em http://localhost:${myPort}`);     //Define que o servidor deve ouvir a porta 3000, devolvendo a função em tese no terminal
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
