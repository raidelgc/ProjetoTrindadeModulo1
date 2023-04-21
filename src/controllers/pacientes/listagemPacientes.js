const Paciente = require("../../models/paciente")

// Endpoint para listagem de pacientes
async function listagemPaciente (req, res) {
  try {
    let whereClause = {};
    if (req.query.status) {
      whereClause.status_atendimento = req.query.status;
    }
    const pacientes = await Paciente.findAll({ where: whereClause });
    res.status(200).json(pacientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar pacientes.' });
  }
}

module.exports = listagemPaciente
