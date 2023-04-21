const Enfermeiro = require("../../models/enfermeiro");
async function excluirEnfermeiro (req, res) {
    const id = req.params.id;
  
    const enfermeiro = await Enfermeiro.findByPk(id);
    if (!enfermeiro) {
      return res.status(404).send('Enfermeiro não encontrado');
    }
  
    await enfermeiro.destroy();
    res.sendStatus(204);
  }

module.exports = excluirEnfermeiro
  