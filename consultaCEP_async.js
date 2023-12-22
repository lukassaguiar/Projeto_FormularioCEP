//console.log('Testando');

const inputCEP = document.getElementById("cep");



async function consultaCEP (){
    
    const cepConsultado = inputCEP.value; //salva em uma variável
   
    try { 
    const CEPconsulta = await fetch(`https://viacep.com.br/ws/${cepConsultado}/json/`)
    const consultaCEPConvertida = await CEPconsulta.json()
    /* console.log(CEPconsulta); */
    if(consultaCEPConvertida.erro) {
        window.alert('O CEP NÃO EXISTE!')
    }else{
        const inputEndereco = document.getElementById("endereco");
        const inputBairro = document.getElementById("bairro");
        const inputCidade = document.getElementById("cidade");
        const inputEstado = document.getElementById("uf");

        inputEndereco.value = consultaCEPConvertida.logradouro;
        inputBairro.value = consultaCEPConvertida.bairro;
        inputCidade.value = consultaCEPConvertida.localidade;
        inputEstado.value = consultaCEPConvertida.uf;
    }
    console.log(consultaCEPConvertida);
}catch (erro) {
    window.alert(erro)
}
}
inputCEP.addEventListener('focusout', consultaCEP)