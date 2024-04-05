const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarIngredientes(request, response) {
        try {
            // instruções SQL
            const sql = `SELECT 
                ing_id, ing_nome, ing_img, ing_custo_adicional 
                FROM Ingredientes 
                WHERE ing_nome like '%${ing_nome}%;'`;
            // executa instruções SQL e armazena o resultado na variável usuários
            const ingredientes = await db.query(sql);
            // armazena em uma variável o número de registros retornados
            const nItens = ingredientes[0].length;

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de ingredientes.',
                dados: null,
                nItens
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
    async cadastrarIngredientes(request, response) {
        try {
            // parâmetros recebidos no corpo da requisição
            const { ing_nome, ing_img, ing_custo_adicional } = request.body;
            // instrução SQL
            const sql = `INSERT INTO ingredientes
                (ing_id, ing_nome, ing_img, ing_custo_adicional) 
                VALUES (?, ?, ?, ?)`;
            // definição dos dados a serem inseridos em um array
            const values = [ing_nome, ing_img, ing_custo_adicional];
            // execução da instrução sql passando os parâmetros
            const execSql = await db.query(sql, values);
            // identificação do ID do registro inserido
            const ing_id = execSql[0].insertId;

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Cadastro de ingrediente efetuado com sucesso.',
                dados: null
                //mensSql: execSql
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
    async editarIngredientes(request, response) {
        try {
            // parâmetros recebidos pelo corpo da requisição
            const { ing_nome, ing_img, ing_custo_adicional } = request.body;
            // parâmetro recebido pela URL via params ex: /usuario/1
            const { ing_id } = request.params;
            // instruções SQL
            const sql = `UPDATE ingredientes SET ing_nome = ?,ing_id = ?, ing_nome = ?, 
            ing_img = ?, ing_custo_adicional = ? WHERE ing_id = ?;`;
            // preparo do array com dados que serão atualizados
            const values = [ing_id, ing_nome, ing_img, ing_custo_adicional];
            // execução e obtenção de confirmação da atualização realizada
            const atualizaDados = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true,
                mensagem: `Ingrediente ${ing_id} atualizado com sucesso!`,
                dados: null
                // mensSql: atualizaDados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
    async apagarIngredientes(request, response) {
        try {
            // parâmetro passado via url na chamada da api pelo front-end
            const { ing_id } = request.params;
            // comando de exclusão
            const sql = `DELETE FROM ingredientes WHERE ing_id = ?`;
            // array com parâmetros da exclusão
            const values = [ing_id];
            // executa instrução no banco de dados
            const excluir = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true,
                mensagem: `Ingrediente ${ing_id} excluído com sucesso`,
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
};

