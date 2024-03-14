const {json} = require ('express');
const db = require ('../database/connection');

module.exports ={
    async listarMesas (request, response) {
        try{
            return response.status(200).json({ 
            //objeto é o parametro com chaves/cod
            //json ele espera um objeto, objeto é oq tem chave/atributo e valor
            //200 é um padrao da internet para definir se haverá sucesso ou não, msm coisa com 500
            sucesso: true,
            mensagem: 'Lista de usuários.',
            dados: null
            });
        } 
        
        catch (error){
            return response.status(500).json({
                sucesso: false,
                mensagem:`Erro na requisão. \n ${erro}`,
                dados: null
            });
        }
    }
}