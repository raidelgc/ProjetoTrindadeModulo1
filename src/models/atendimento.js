const { Sequelize } = require('sequelize');
const connection = require('../database');
const { DataTypes } = require('sequelize');
const sequelize = connection;
const Paciente = require('./paciente')
const Medico = require('./medico')

const Atendimento = sequelize.define('Atendimento', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  data_atendimento: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'atendimentos',
  timestamps: true,
  underscored: true
});

// Relaciones
Atendimento.belongsTo(Paciente, { foreignKey: 'paciente_id', as: 'paciente' });
Atendimento.belongsTo(Medico, { foreignKey: 'medico_id', as: 'medico' });


module.exports = Atendimento;
