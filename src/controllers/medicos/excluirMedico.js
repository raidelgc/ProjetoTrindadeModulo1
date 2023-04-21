const Medico = require("../../models/medico");
async function excluirMedico (req, res) {
    const id = req.params.id;
  
    const medico = await Medico.findByPk(id);
    if (!medico) {
      return res.status(404).send('Medico não encontrado');
    }
  
    await medico.destroy();
    res.sendStatus(204);
  }

module.exports = excluirMedico
  