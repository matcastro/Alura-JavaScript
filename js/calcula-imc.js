//aula 1
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
//fim aula 1
//aula 2
/*var peso = document.querySelector("#tabela-pacientes #primeiro-paciente .info-peso").textContent;
var altura = document.querySelector("#tabela-pacientes #primeiro-paciente .info-altura").textContent;
var tdImc = document.querySelector("#tabela-pacientes #primeiro-paciente .info-imc");
if(peso<=0 || peso >=1000){
  console.log("Peso inválido!");
  tdImc.textContent = "Peso inválido!";
}
else if(altura<=0 || altura >=3){
  console.log("Altura inválida!");
  tdImc.textContent = "Altura inválida!";
}
else{
  var imc = peso / (altura * altura);
  tdImc.textContent = imc;
}*/
//fim aula 2
//aula 3
var pacientes = document.querySelectorAll("#tabela-pacientes .paciente");
var tdPeso = document.querySelectorAll("#tabela-pacientes .paciente .info-peso");
var tdAltura = document.querySelectorAll("#tabela-pacientes .paciente .info-altura");
var tdImc = document.querySelectorAll("#tabela-pacientes .paciente .info-imc");

for (var i = 0; i < pacientes.length; i++) {
  var peso = tdPeso[i].textContent;
  var altura = tdAltura[i].textContent;

  if(!validaPeso(peso)){
    console.log("Peso inválido!");
    tdImc[i].textContent = "Peso inválido!";
    pacientes[i].classList.add("paciente-invalido");
  }
  else if(!validaAltura(altura)){
    console.log("Altura inválida!");
    tdImc[i].textContent = "Altura inválida!";
    pacientes[i].classList.add("paciente-invalido");
  }
  else{
    tdImc[i].textContent = calculaImc(peso, altura);
  }
}
//fim aula 3
//aula 4
/*var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(event){
  event.preventDefault();
  var tabela = document.querySelector("#tabela-pacientes");
  var form = document.querySelector("#form-adiciona");
  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var pacienteTr = document.createElement("tr");
  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  tabela.appendChild(pacienteTr);


  console.log(pacienteTr);
})*/
//fim aula 4
//aula 5
function calculaImc(peso,altura){
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
//fim aula 5
//aula 6
function validaPeso(peso){
  if(peso>0 && peso<1000){
    return true;
  }
  else{
    return false;
  }
}
function validaAltura(altura){
  if(altura>0 && altura <3.00){
    return true;
  }
  else{
    return false;
  }
}
//fim aula 6
