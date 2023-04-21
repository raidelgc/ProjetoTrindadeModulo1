const { Sequelize } = require('sequelize');
const connection = require('../database');

const sequelize = connection;

const Medico = sequelize.define('Medico', {
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
    cadastro_crm_uf: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    especializacao_clinica: {
      type: Sequelize.ENUM(
        'Clínico Geral',
        'Anestesista',
        'Dermatologia',
        'Ginecologia',
        'Neurologia',
        'Pediatria',
        'Psiquiatria',
        'Ortopedia'
      ),
      allowNull: false,
    },
    estado_no_sistema: {
      type: Sequelize.ENUM('Ativo', 'Inativo'),
      defaultValue: 'Ativo',
    },
    total_atendimentos_realizados: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });
  
 
Medico.sync();
module.exports = Medico;
