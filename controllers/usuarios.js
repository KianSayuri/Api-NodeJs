const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarUsuarios(request, response) {
        try {
            // throw new Error('Eu causei o erro!');
            // instruções SQL
            const sql = `SELECT 
                usu_id, usu_nome, usu_email, usu_dt_nasc, usu_senha, 
                usu_tipo, usu_ativo = 1 AS usu_ativo 
                FROM usuarios;`; 
            // executa instruções SQL e armazena o resultado na variável usuários
            const usuarios = await db.query(sql); 
            const nItens = usuarios[0].length;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de usuários.', 
                dados: usuarios[0], 
                nItens                 
            });
        } catch (error) {
            // console.log(error);
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    },
    async cadastrarUsuarios(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de usuários.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: `Erro na requisição. -${error}`, 
                dados: null
            });
        }
    }, 
    async editarUsuarios(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar usuários.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: `Erro na requisição. -${error}`, 
                dados: null
            });
        }
    }, 
    async apagarUsuarios(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar usuários.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: `Erro na requisição. -${error}`, 
                dados: null
            });
        }
    }, 
}

