import express from "express";


const myApp = express();       //Instanciação do Express
const myPort = 3000;          //Porta do servidor

myApp.use(express.json());  //middleware que entende requisições com JSON

myApp.get('/', (req, res) => {res.send('Servidor em funcionamento');});  //Ao acessar a porta, essa função será chamada

myApp.listen(myPort, () => {
  console.log(`Servidor está rodando em http://localhost:${myPort}`);     //Define que o servidor deve ouvir a porta 3000, devolvendo a função em tese no terminal
});
