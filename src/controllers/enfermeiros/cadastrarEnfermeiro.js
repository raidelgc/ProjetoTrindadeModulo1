const Enfermeiro = require("../../models/enfermeiro")

// criar um novo enfermeiro
async function cadastrarEnfermeiro(request, response) {

    // organizar os dados a serem cadastrados
    
    try {
        const enfermeiro = {
            id: request.body.id,
            nome_completo: request.body.nome_completo,
            genero: request.body.genero,
            data_nascimento: request.body.data_nascimento,
            cpf: request.body.cpf,
            telefone: request.body.telefone,
            instituicao_ensino_formacao: request.body.instituicao_ensino_formacao,
            cadastro_cofen_uf: request.body.cadastro_cofen_uf,
            
        }
    
        const enfermeiroExiste = await Enfermeiro.findOne({ 
            where: { nome_completo: request.body.nome_completo } 
        })
    
        if(enfermeiroExiste) {
            return response.status(409).json({message: 'Enfermeiro já cadastrado'})
        }
    
        const novoEnfermeiro = await Enfermeiro.create(enfermeiro)
    
        response.status(201).json(novoEnfermeiro)

    } catch (error) {
        console.log(error)
        return response.status(400).json({message: 'Não foi possível processar a solicitação'})
    }

}


module.exports = cadastrarEnfermeiro