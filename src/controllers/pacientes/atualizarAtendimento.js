const Paciente = require("../../models/paciente");
async function atualizarAtendimento(req, res) {
    try {
        const { id } = req.params;
        const { status_atendimento } = req.body;
    
        const paciente = await Paciente.findByPk(id);
    
        if (!paciente) {
          return res.status(404).json({ error: "Paciente não encontrado" });
        }
    
        // Check if status is valid
        if (status_atendimento !== "AGUARDANDO_ATENDIMENTO" && status_atendimento !== "EM_ATENDIMENTO" && status_atendimento !== "ATENDIDO" && status_atendimento !== "NAO_ATENDIDO") {
          return res.status(400).json({ error: "Status inválido" });
        }
        // Update patient status
        paciente.status_atendimento = status_atendimento;
        await paciente.save();
    
        res.json(paciente);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro ao atualizar status do paciente" });
      }
    }
  
module.exports = atualizarAtendimento