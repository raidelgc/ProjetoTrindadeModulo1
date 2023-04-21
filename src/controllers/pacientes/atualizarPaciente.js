const Paciente = require("../../models/paciente");

async function atualizarPaciente(req, res) {
  try {
    const { id } = req.params;
    const {
      nome_completo,
      genero,
      data_nascimento,
      cpf,
      telefone,
      contato_emergencia,
      alergias,
      cuidados_especificos,
      convenio,
    } = req.body;
    const paciente = await Paciente.findByPk(id);

    if (!paciente) {
      return res.status(404).json({ error: "Paciente não encontrado" });
    }

    // Validar os campos obrigatórios
    if (!nome_completo || !genero || !data_nascimento || !cpf || !contato_emergencia) {
      return res.status(400).json({ error: "Campos obrigatórios não preenchidos" });
    }

    // Atualizar os campos do paciente
    const atualizarPaciente = await paciente.update({
      nome_completo,
      genero,
      data_nascimento,
      cpf,
      telefone,
      contato_emergencia,
      alergias,
      cuidados_especificos,
      convenio,
    });

    // Retornar el paciente actualizado en la respuesta
    res.json(atualizarPaciente);
    console.log(atualizarPaciente)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao atualizar paciente" });
  }
}

module.exports = atualizarPaciente;

