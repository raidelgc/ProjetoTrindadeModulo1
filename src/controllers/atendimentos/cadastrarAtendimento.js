const Medico = require("../../models/medico");
const Paciente = require("../../models/paciente");
const Atendimento = require('../../models/atendimento');

async function cadastrarAtendimento(req, res) {
  const { pacienteId, medicoId } = req.body;

  try {
    const paciente = await Paciente.findByPk(pacienteId);
    const medico = await Medico.findByPk(medicoId);

    if (!paciente || !medico) {
      return res.status(404).json({ message: 'Paciente ou Médico não encontrado.' });
    }

    const atendimento = await Atendimento.create({
      paciente_id: pacienteId,
      medico_id: medicoId,
      data_atendimento: new Date()
    });
    
    paciente.total_atendimento +=1;
    await paciente.save();
    medico.total_atendimento +=1;
    await medico.save();
    paciente.status_atendimento = "EM_ATENDIMENTO"
    await paciente.save();


    const pacienteNome = paciente ? paciente.nome : 'Paciente não encontrado';
    const medicoNome = medico ? medico.nome : 'Médico não encontrado';
    atendimento.pacienteNome = pacienteNome;
    atendimento.medicoNome = medicoNome;

    return res.status(200).json({
      id: atendimento.id,
      pacienteId: pacienteId,
      pacienteNome: pacienteNome,
      medicoId: medicoId,
      medicoNome: medicoNome,
      data_atendimento: atendimento.data_atendimento
    });

  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Erro ao criar atendimento.' });
  }
}

module.exports = cadastrarAtendimento;
