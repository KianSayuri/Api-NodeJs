const express = require ('express');
const router = require ('./routes/routes')
const cors = require ('cors')
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const porta = 3333;
//const porta = process.env.PORT || 3333;

app.listen (porta, () =>{
    //console.log('Servidor iniciado na porta' + porta);
    console.log(`Servidor iniciado na porta  ${porta}`);
    
});

app.get('/', (request, response) =>{
    response.send('Hello World');
});

/*request é o que o cliente pede para nosso servidor, 
ja response é o que ele devolve na web em resposta.*/