var botaoBusca = document.querySelector("#buscar-pacientes");

botaoBusca.addEventListener("click",function(){
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load",function(){
    var erro = document.querySelector("#erro-ajax");
    if(xhr.status == 200){
      erro.classList.add("invisivel");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function(paciente){
        adicionaPacienteNaTabela(paciente);
      })
    }
    else{
      erro.classList.remove("invisivel");
    }

  });

  xhr.send();
})
