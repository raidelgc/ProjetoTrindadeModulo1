const Medico = require("../../models/medico");

async function atualizarEstadoDoMedico(req, res) {
  try {
    const { id } = req.params;
    const { estado_no_sistema } = req.body;

    const medico = await Medico.findByPk(id);

    if (!medico) {
      return res.status(404).json({ error: "Médico não encontrado" });
    }

    // Check if status is valid
    if (estado_no_sistema !== "Ativo" && estado_no_sistema !== "Inativo") {
      return res.status(400).json({ error: "Status inválido" });
    }

    // Update medico status
    medico.estado_no_sistema = estado_no_sistema;
    await medico.save();

    res.json(medico);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao atualizar status do médico" });
  }
}

module.exports = atualizarEstadoDoMedico;
