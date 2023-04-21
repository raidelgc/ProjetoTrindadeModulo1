const express = require('express')
const conexao = require('./src/database')
const Paciente = require('./src/models/paciente')
const Medico = require('./src/models/medico')
const Enfermeiro = require('./src/models/enfermeiro')
const Atendimento = require('./src/models/atendimento')

// Paciente
const cadastrarPaciente = require('./src/controllers/pacientes/cadastrarPaciente')
const atualizarPaciente = require('./src/controllers/pacientes/atualizarPaciente')
const atualizarAtendimento = require('./src/controllers/pacientes/atualizarAtendimento')
const listagemPaciente = require('./src/controllers/pacientes/listagemPacientes')
const listagemPeloIdentificador = require('./src/controllers/pacientes/listagemPeloIdentificador')
const excluirPaciente = require('./src/controllers/pacientes/excluirPaciente')

//Medico
const cadastrarMedico = require('./src/controllers/medicos/cadastrarMedico')
const atualizarMedico  = require('./src/controllers/medicos/atualizarMedico')
const atualizarEstadoDoMedico = require('./src/controllers/medicos/atualizarEstadoDoMedico')
const listagemMedicos = require('./src/controllers/medicos/listagemMedicos')
const listagemPeloIdentificadorMed = require('./src/controllers/medicos/listagemPeloIdentificadorMed')
const excluirMedico  = require('./src/controllers/medicos/excluirMedico')

//Enfermeiro
const cadastrarEnfermeiro = require('./src/controllers/enfermeiros/cadastrarEnfermeiro')
const atualizarEnfermeiro  = require('./src/controllers/enfermeiros/atualizarEnfermeiro')
const listagemEnfermeiros = require('./src/controllers/enfermeiros/listagemEnfermeiros')
const listagemPeloIdentificadorEnf = require('./src/controllers/enfermeiros/listagemPeloIdentificadorEnf')
const excluirEnfermeiro  = require('./src/controllers/enfermeiros/excluirEnfermeiro')

//Atendimento
const cadastrarAtendimento = require('./src/controllers/atendimentos/cadastrarAtendimento')


const app = express()
app.use(express.json()) // obrigatório


//Routes pacientes
app.post('/pacientes', cadastrarPaciente);
app.put('/pacientes/:id', atualizarPaciente);
app.put('/pacientes/:id/status', atualizarAtendimento);
app.get('/pacientes', listagemPaciente);
app.get('/pacientes/:id', listagemPeloIdentificador);
app.delete('/pacientes/:id', excluirPaciente);

//Routes medicos
app.post('/medicos', cadastrarMedico);
app.put('/medicos/:id', atualizarMedico);
app.put('/medicos/:id/status', atualizarEstadoDoMedico);
app.get('/medicos', listagemMedicos);
app.get('/medicos/:id', listagemPeloIdentificadorMed);
app.delete('/medicos/:id', excluirMedico);

//Routes enfermeiros
app.post('/enfermeiros', cadastrarEnfermeiro);
app.put('/enfermeiros/:id', atualizarEnfermeiro);
app.get('/enfermeiros', listagemEnfermeiros);
app.get('/enfermeiros/:id', listagemPeloIdentificadorEnf);
app.delete('/enfermeiros/:id', excluirEnfermeiro);

//Routes atendimentos
app.post('/atendimentos', cadastrarAtendimento);

conexao.sync({alter: true})

app.listen(3333, () => {
    console.log("Projeto online")
})