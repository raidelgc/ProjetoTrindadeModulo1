const { Sequelize } = require('sequelize');
const connection = require('../database');

const sequelize = connection;

const Enfermeiro = connection.define("enfermeiros", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome_completo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    genero: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    data_nascimento: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    instituicao_ensino_formacao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cadastro_cofen_uf: {
      type: Sequelize.STRING,
      allowNull: false,
    }
})

Enfermeiro.sync();
module.exports = Enfermeiro