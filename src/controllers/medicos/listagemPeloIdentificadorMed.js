const Medico = require("../../models/medico")

// Endpoint para listagem de medicos
async function listagemPeloIdentificadorMed (req, res) {
    try {
      const id = req.params.id
      const medico = await Medico.findByPk(id)
      if (!medico) {
        return res.status(404).json({ error: "Medico não encontrado" })
      }
      res.json(medico)
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "Erro ao buscar medico" })
    }
  }

module.exports = listagemPeloIdentificadorMed
