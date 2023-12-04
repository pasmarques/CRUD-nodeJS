class Tabelas{
  init(conexao){
    this.conexao=conexao;
    this.criarTabelasAtendimento();
  }

  criarTabelasAtendimento(){
    const sql=`
    CREATE TABLE IF NOT EXISTS controle_atendimento(
      id TINYINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      dataAtendimento DATE,
      servico VARCHAR(100),
      cliente VARCHAR(100),
      statusCLiente ENUM('ativo','realizado','cancelado') DEFAULT 'ativo'
    );
    `
    this.conexao.query(sql, (error)=>{
      if(error){
        console.log("eita, deu erro na hora de criar tabela atendimentos");
        console.log(error.message);
        return;
      }
      console.log("Show, criou a tabela com sucesso");
    })
  }
}
module.exports = new Tabelas();
