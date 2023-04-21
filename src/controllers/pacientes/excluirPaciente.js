const Paciente = require("../../models/paciente");
async function excluirPaciente (req, res) {
    const id = req.params.id;
  
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
      return res.status(404).send('Paciente não encontrado');
    }
  
    await paciente.destroy();
    res.sendStatus(204);
  }

module.exports = excluirPaciente
  