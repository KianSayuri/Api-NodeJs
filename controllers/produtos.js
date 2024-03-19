const { json } = require('express');
const db = require('../database/connection');

module.exports = {

    async listarProdutos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de usuários.',
                dados: null
            });
        }

        catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: `Erro na requisão. \n ${error}`,
                dados: null
            });
        }
    },
    
    async cadastrarProdutos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Cadastrar de usuários.',
                dados: null
            });
        }

        catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: `Erro na requisão. \n ${error}`,
                dados: null
            });
        }
    },

    async editarProdutos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Editar usuários.',
                dados: null
            });
        }

        catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: `Erro na requisão. \n ${error}`,
                dados: null
            });
        }
    },

    async apagarProdutos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Apagar usuários.',
                dados: null
            });
        }

        catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: `Erro na requisão. \n ${error}`,
                dados: null
            });
        }
    },
}