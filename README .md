FullStack [Trindade]
Módulo 1 - Projeto Avaliativo

Introdução
Este é o projeto da API Rest desenvolvida pela 365 Medical Inc, uma empresa líder no segmento tecnológico para gestão hospitalar. 
A finalidade é testar e automatizar alguns processos nos atendimentos de pacientes em âmbito hospitalar. O MVP foi construído utilizando JavaScript, ExpressJS e PostgreSQL.

Instalação
Clone este repositório: git clone https://github.com/sua-conta/nome-do-repositorio.git
Instale as dependências: npm install, npm install sequelize, npm install -- save pg pg-hstore, npm install express
Execute o servidor: npm start e acesse a http://localhost:3333 em seu navegador. Certifique-se de que o PostgreSQL esteja rodando em sua máquina.
A aplicação será executada no console com a mensagem "Projeto online".


Uso
A API permite a gestão de pacientes, médicos e enfermeiros, bem como a criação de atendimentos relacionando um paciente e um médico.

Rotas

Pacientes
GET /pacientes: Retorna todos os pacientes cadastrados
GET /pacientes/:id: Retorna um paciente específico pelo ID
POST /pacientes: Cadastra um novo paciente
PUT /pacientes/:id: Atualiza as informações de um paciente existente pelo ID
PUT /pacientes: Atualiza o atendimento do Paciente
DELETE /pacientes/:id: Exclui um paciente existente pelo ID

Médicos
GET /medicos: Retorna todos os médicos cadastrados
GET /medicos/:id: Retorna um médico específico pelo ID
POST /medicos: Cadastra um novo médico
PUT /medicos/:id: Atualiza as informações de um médico existente pelo ID
PUT /medicos: Atualiza o estado do Medico
DELETE /medicos/:id: Exclui um médico existente pelo ID

Enfermeiros
GET /enfermeiros Retorna todos os enfermeiros cadastrados
GET /enfermeiros/:id: Retorna um enfermeiro específico pelo ID
POST /enfermeiros : Cadastra um novo enfermeiro
DELETE /enfermeiros/:id: Exclui um enfermeiro existente pelo ID

Atendimentos
POST /atendimentos: Cadastra um Atendimento

Contribuição
Faça um fork deste repositório
Crie uma nova branch: git checkout -b minha-nova-feature
Faça suas alterações e commit: git commit -m "Adiciona nova feature"
Envie para o branch principal: git push origin minha-nova-feature
Abra uma pull request

Licença
Este projeto está licenciado sob a Licença MIT.
