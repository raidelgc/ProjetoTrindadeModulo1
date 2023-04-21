const Enfermeiro = require("../../models/enfermeiro");

async function atualizarEnfermeiro(req, res) {
  try {
    const { id } = req.params;
    const {
      nome_completo,
      genero,
      data_nascimento,
      cpf,
      telefone,
      instituicao_ensino_formacao,
      cadastro_cofen_uf
    } = req.body;
    const enfermeiro = await Enfermeiro.findByPk(id);

    if (!enfermeiro) {
      return res.status(404).json({ error: "Enfermeiro não encontrado" });
    }

    // Validar os campos obrigatórios
    if (!nome_completo || !genero || !data_nascimento || !cpf || !instituicao_ensino_formacao || !cadastro_cofen_uf) {
      return res.status(400).json({ error: "Campos obrigatórios não preenchidos" });
    }

    // Atualizar os campos do enfermeiro
    const atualizarEnfermeiro = await enfermeiro.update({
      nome_completo,
      genero,
      data_nascimento,
      cpf,
      telefone,
      instituicao_ensino_formacao,
      cadastro_cofen_uf
    });

    // Retornar el enfermeiro actualizado en la respuesta
    res.json(atualizarEnfermeiro);
    console.log(atualizarEnfermeiro)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao atualizar enfermeiro" });
  }
}

module.exports = atualizarEnfermeiro;

