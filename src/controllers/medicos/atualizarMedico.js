const Medico = require("../../models/medico");

async function atualizarMedico(req, res) {
  try {
    const { id } = req.params;
    const {
      nome_completo,
      genero,
      data_nascimento,
      cpf,
      telefone,
      instituicao_ensino_formacao,
      cadastro_crm_uf,
      especializacao_clinica,
      estado_no_sistema,
      total_atendimentos_realizados
    } = req.body;
    const medico = await Medico.findByPk(id);

    if (!medico) {
      return res.status(404).json({ error: "Medico não encontrado" });
    }

    // Validar os campos obrigatórios
    if (!nome_completo || !genero || !data_nascimento || !cpf || instituicao_ensino_formacao || !cadastro_crm_uf || !especializacao_clinica) {
      return res.status(400).json({ error: "Campos obrigatórios não preenchidos" });
    }

    // Atualizar os campos do medico
    const atualizarMedico = await medico.update({
      nome_completo,
      genero,
      data_nascimento,
      cpf,
      telefone,
      instituicao_ensino_formacao,
      cadastro_crm_uf,
      especializacao_clinica,
      estado_no_sistema,
      total_atendimentos_realizados
    });

    // Retornar el medico actualizado en la respuesta
    res.json(atualizarMedico);
    console.log(atualizarMedico)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao atualizar medico" });
  }
}

module.exports = atualizarMedico;

