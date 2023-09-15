//atrubui o valor da tag h1 para a variável titulo
let titulo = document.querySelector("h1");
//motra no console do navegador a variavel título
console.log(titulo);
//modi)fica o valor de titulo para frase "Fic grandão birlllll"
titulo.textContent = "Fica grandão birlllll";

//------aqui vamos mexer na tabela de imc------

//armazena no ARRAY paciente as informações do primeiro paciente
let pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);
//loop for para percorrer o array
for(let i =0; i< pacientes.length; i++) {
    let paciente = pacientes[i]
    console.log(paciente);
    console.log("o valor de i é: " +i)
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
let alturaEhValida = true;

if(peso < 0 || peso > 1000){
    console.log("Peso invalido!");
   // tdImc.textContent = "Peso invalido!";
   pesoEhValido = false;
}

if(altura < 0 || altura > 3){
    console.log("Altura invalida!");
    //tdImc.textContent = "Altura invalida!";
    alturaEhValida = false;
}

if(pesoEhValido === true && alturaEhValida === true){
    //realiza o calculo do imc
    let imc = peso / (altura * altura);
    console.log(imc);
    tdImc.textContent = imc.toFixed()
} else {
    tdImc.textContent = "Peso e/ou altura invalidos!";
}





























































































}




