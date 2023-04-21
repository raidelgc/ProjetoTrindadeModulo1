const connection = require('../database');
const { Sequelize } = require('sequelize');

const Paciente = connection.define("pacientes", {
  id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },
  nome_completo: {
      type: Sequelize.STRING,
      allowNull: false
  },
  genero: {
      type: Sequelize.ENUM('M', 'F'),
      allowNull: false
  },
  data_nascimento: {
      type: Sequelize.DATEONLY, //yyyy-MM-dd
      allowNull: false,
  },
  cpf: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
  },
  telefone: {
      type: Sequelize.STRING
  },
  contato_emergencia: {
      type: Sequelize.STRING,
      allowNull: false
  },
  alergias: {
      type: Sequelize.STRING
  },
  cuidados_especificos: {
      type: Sequelize.STRING
  },
  convenio: {
      type: Sequelize.STRING
  },
  status_atendimento: {
      type: Sequelize.ENUM("AGUARDANDO_ATENDIMENTO","EM_ATENDIMENTO","ATENDIDO","NAO_ATENDIDO" ),
      defaultValue: "AGUARDANDO_ATENDIMENTO"
  },
  total_atendimento: {
      type: Sequelize.INTEGER,
      defaultValue: 0
  }
})

// Cria a tabela 'Paciente' no banco de dados
Paciente.sync();

// Exporta o modelo 'Paciente' para ser utilizado em outras partes do código
module.exports = Paciente;