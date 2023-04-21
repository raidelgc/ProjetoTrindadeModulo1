const Paciente = require("../../models/paciente")

// criar um novo paciente
async function cadastrarPaciente(request, response) {

    // organizar os dados a serem cadastrados
    
    try {
        const paciente = {
            id: request.body.id,
            nome_completo: request.body.nome_completo,
            genero: request.body.genero,
            data_nascimento: request.body.data_nascimento,
            cpf: request.body.cpf,
            telefone: request.body.telefone,
            contato_emergencia: request.body.contato_emergencia,
            alergias: request.body.alergias,
            cuidados_especificos: request.body.cuidados_especificos,
            convenio: request.body.convenio,
            status_atendimento: request.body.status_atendimento,
            total_atendimento: request.body.total_atendimento
        }
    
        const pacienteExiste = await Paciente.findOne({ 
            where: { nome_completo: request.body.nome_completo } 
        })
    
        if(pacienteExiste) {
            return response.status(409).json({message: 'Paciente já cadastrado'})
        }
    
        const novoPaciente = await Paciente.create(paciente)
    
        response.status(201).json(novoPaciente)

    } catch (error) {
        console.log(error)
        return response.status(400).json({message: 'Não foi possível processar a solicitação'})
    }

}


module.exports = cadastrarPaciente