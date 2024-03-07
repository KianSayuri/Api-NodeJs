const mysql = require('mysql2/promise'); 

/* promise é o que permite o uso do TRY e do CATCH, estes por sua vez
testam a conexão e os requerimentos pedidos pelo usuario.*/

const bd_usuario = 'us_aula_node'; // usuário
const bd_senha = '123456'; // senha
const bd_servidor = '10.67.22.216'; // servidor
const bd_porta = '3306'; // porta
const bd_banco = 's223_node'; // nome do banco
let connection;
    
const config = {
    host: bd_servidor, 
    port: bd_porta, //Default: 3306
    user: bd_usuario, 
    password: bd_senha, 
    database: bd_banco, 
    waitForConnections : true, 
    connectionLimit : 10, //Default: 10 - deixar 100 ou 1000
    queueLimit : 0, 
}

    /* 
        -queueLimit-
        O número máximo de solicitações de conexão que o pool enfileirará 
        antes de retornar um erro do getConnection. Se definido como 0, não 
        há limite para o número de solicitações de conexão enfileiradas. (Padrão: 0)
    */

try { //Try ele tenta comunicação/conexao com o banco de dados
    connection = mysql.createPool(config);

    /* Pool vem de "encher", pois quando as requisições se esgotam ou no caso
    o seu limite, ele segura a requisição nova para nao "transbordar". Antes
    ele sempre abria e não fechava a requisição, com o Pool ele reconhece se
    estão usando ainda a requisição e a partir daí ele pode encerrar ou permanecer aberto
    facilitando e agilizando a conexão. */

    console.log('Chamou conexão MySql!'); 
    
} catch (error) { //Catch é o "Else", ele enviará/aparecerá caso der erro
    console.log(error); 
} 

module.exports = connection;