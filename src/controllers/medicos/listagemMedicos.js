const Medico = require("../../models/medico")

// Endpoint para listagem de medicos
async function listagemMedicos (req, res) {
  try {
    let whereClause = {};
    if (req.query.status) {
      whereClause.estado_no_sistema = req.query.status;
    }
    const medicos = await Medico.findAll({ where: whereClause });
    res.status(200).json(medicos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar medicos.' });
  }
}

module.exports = listagemMedicos;

