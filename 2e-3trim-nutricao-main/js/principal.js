//atrubui o valor da tag h1 para a variável titulo
let titulo = document.querySelector("h1");
//motra no console do navegador a variavel título
console.log(titulo);
//modi)fica o valor de titulo para frase "Fic grandão birlllll"
titulo.textContent = "Fica grandão birlllll";

//------aqui vamos mexer na tabela de imc------

//armazena na variavel paciente as informações do primeiro paciente
let paciente = document.querySelector("#primeiro-paciente");
console.log(paciente);
//armazena somente as colunas de peso e altura
let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");
//armazena somente as irformações de texto de peso e altura

let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

//acessa a coluna imc e altera o valor para o resultado
let tdImc = paciente.querySelector(".info-imc");


//validação dos dados
let pesoEhValido =true;
let alturaEhvalida = true;

if(peso < 0 || peso > 1000){
    console.log("Peso invalido!");
    tdImc.textContent = "Peso invalido!";
}

if(altura < 0 || altura > 1000){
    console.log("Altura invalida!");
    tdImc.textContent = "Altura invalida!";
    alturaEhvalida = false;
}

if(pesoEhValido === true && alturaEhValida === true){
    //realiza o calculo do imc
    let imc = peso / (altura * altura);
    console.log(imc);
    tdImc.textContent = imc;
} else {
    tdImc.textContent = "Peso e/ou altura invalidos!";
}


