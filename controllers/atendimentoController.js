class AtendimentoController{
  buscar(){
    return "buscando atendimentos..."
  }
  criar(){
    return "criando atendimento"
  }
  atualizar(id){
    return `atualizando atendimento ${id}...`
  }
  deletar(id){
    return `deletando atendimento ${id}...`
  }
}
module.exports = new AtendimentoController();