const Medico = require("../../models/medico")

// criar um novo medico
async function cadastrarMedico(request, response) {

    // organizar os dados a serem cadastrados
    
    try {
        const medico = {
            id: request.body.id,
            nome_completo: request.body.nome_completo,
            genero: request.body.genero,
            data_nascimento: request.body.data_nascimento,
            cpf: request.body.cpf,
            telefone: request.body.telefone,
            instituicao_ensino_formacao: request.body.instituicao_ensino_formacao,
            cadastro_crm_uf: request.body.cadastro_crm_uf,
            especializacao_clinica: request.body.especializacao_clinica,
            estado_no_sistema: request.body.estado_no_sistema,
            total_atendimentos_realizados: request.body.total_atendimentos_realizados
        }
    
        const medicoExiste = await Medico.findOne({ 
            where: { nome_completo: request.body.nome_completo } 
        })
    
        if(medicoExiste) {
            return response.status(409).json({message: 'Medico já cadastrado'})
        }
    
        const novoMedico = await Medico.create(medico)
    
        response.status(201).json(novoMedico)

    } catch (error) {
        console.log(error)
        return response.status(400).json({message: 'Não foi possível processar a solicitação'})
    }

}


module.exports = cadastrarMedico