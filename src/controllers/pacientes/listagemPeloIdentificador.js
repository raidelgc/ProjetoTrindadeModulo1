const Paciente = require("../../models/paciente")

// Endpoint para listagem de pacientes
async function listagemPeloIdentificador (req, res) {
    try {
      const id = req.params.id
      const paciente = await Paciente.findByPk(id)
      if (!paciente) {
        return res.status(404).json({ error: "Paciente não encontrado" })
      }
      res.json(paciente)
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "Erro ao buscar paciente" })
    }
  }

module.exports = listagemPeloIdentificador