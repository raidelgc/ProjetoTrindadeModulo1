const Enfermeiro = require("../../models/enfermeiro")

// Endpoint para listagem de enfermeiros
async function listagemPeloIdentificadorEnf (req, res) {
    try {
      const id = req.params.id
      const enfermeiro = await Enfermeiro.findByPk(id)
      if (!enfermeiro) {
        return res.status(404).json({ error: "Enfermeiro não encontrado" })
      }
      res.json(enfermeiro)
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "Erro ao buscar enfermeiro" })
    }
  }

module.exports = listagemPeloIdentificadorEnf
