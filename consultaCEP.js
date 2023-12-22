//console.log('Testando');
//console.log(consultaCEP);

const btnEnviar = document.getElementById("btnSubmit");
const inputCEP = document.getElementById("cep");

console.log()

function consultaCEP(event) {
  event.preventDefault(); //Evita o comportamento padrão do input submit (carrega a página)

  const valorCEP = inputCEP.value; //salva em uma variável

  const consultaCEP = fetch(`https://viacep.com.br/ws/${valorCEP}/json/`) //retorna uma promessa
    .then((resposta) => resposta.json()) //da promessa, converter a resposta em um json/dados
    .then((resultado) => {
      if (resultado.erro === true) {
        window.alert("CEP INVALIDO!");
      } else {
        console.log(resultado); //o que fazer com a resposta convertida
        //achar os inputs que irão receber o valor.
        const inputEndereco = document.getElementById("endereco");
        const inputBairro = document.getElementById("bairro");
        const inputCidade = document.getElementById("cidade");
        const inputEstado = document.getElementById("uf");

        inputEndereco.value = resultado.logradouro;
        inputBairro.value = resultado.bairro;
        inputCidade.value = resultado.localidade;
        inputEstado.value = resultado.uf;
      }
    })// catch é responsável por mandar o alerta caso esteja certa ou correta.
    .catch((erro) => window.alert("CEP incorreto !"))
    .finally(console.log("Processamento concluído"));
}
//btnEnviar.addEventListener("click", consultaCEP);
  inputCEP.addEventListener('focusout', consultaCEP)  //sair do input - focus entrar out sair