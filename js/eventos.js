function cadastrar(){
    var marca = document.getElementById("marca");
    var processador = document.getElementById("processador");
    var placaMae = document.getElementById("placamae");
    var ssd = document.getElementById("solidstatedrive");
    var sistemaOperacional = document.getElementById("sistemaoperacional");

    //Coleta dados do input para lançar no elemento que será criado
    var valorMarca = marca.value;
    var valorProcessador = processador.value;
    var valorPlacaMae = placaMae.value;
    var valorSsd = ssd.value;
    var valorSO = sistemaOperacional.value;

    if(valorMarca == ""){
        alert("Preencha o campo marca!");
        marca.focus();
    }else if(valorProcessador == ""){
        alert("Preencha o campo processador!");
        processador.focus();
    }else if(valorPlacaMae == ""){
        alert("Preencha o campo Placa Mãe!");
        placaMae.focus();
    }else if(valorSsd == ""){
        alert("Preencha o campo SSD!");
        ssd.focus();
    }else if(valorSO == ""){
        alert("Preencha o campo Sistema operacional!");
        sistemaOperacional.focus();
    }else{
        //Cria um elemento div para obter os dados
        var paragrafo = document.createElement("div");
        paragrafo.innerText = valorMarca + " | " + valorProcessador + " | " + valorPlacaMae + " | " + valorSsd + " | " + valorSO;
    
        //Obter a div pai
        var dadosDoFormulario = document.getElementById("dadosdoformulario");
    
        //Amarra o elemento criado acima dentro da div pai
        dadosDoFormulario.appendChild(paragrafo);
    
        //Limpa os dados do input depois de cadastrado
        marca.value = "";
        processador.value ="";
        placaMae.value = "";
        ssd.value = "";
        sistemaOperacional.value = "";
    }

    function limpar(){
     var limparDiv = document.getElementById("dadosdoformulario");
     limparDiv.innerHTML = "";
    }
}