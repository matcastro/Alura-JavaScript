//aula 8
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
  var pacientes = document.querySelectorAll(".paciente");

  if(this.value.length > 0){
    pacientes.forEach(function(paciente){
      var nomeTd = paciente.querySelector(".info-nome");
      var nome = nomeTd.textContent;
      var expressao = new RegExp(campoFiltro.value, "i");
      paciente.classList.add("invisivel");
      if(expressao.test(nome)){
          paciente.classList.remove("invisivel");
      }
    })
  }
  else{
    pacientes.forEach(function(paciente){
      paciente.classList.remove("invisivel");
    })
  }
})
//fim aula 8
