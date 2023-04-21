const Enfermeiro = require("../../models/enfermeiro");

// Endpoint para listagem de enfermeiros
async function listagemEnfermeiros (req, res) {
try {
const enfermeiros = await Enfermeiro.findAll();
res.status(200).json(enfermeiros);
} catch (error) {
console.error(error);
res.status(500).json({ message: 'Erro ao buscar enfermeiros.' });
}
}

module.exports = listagemEnfermeiros;

