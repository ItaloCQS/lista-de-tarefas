let input = document.getElementById("input");
let botao =  document.getElementById("botaoAdicionar");
let caixaTarefa = document.getElementById("caixaTarefas");


let data = new Date();
let ano = data.toLocaleDateString("pt-BR");


function adicionando(){
    let = texto = input.value;
    
    if ((texto !== null) && (texto !== "") && (texto !== undefined)){
        let adicionado = 
        `<div id="caixa">
            <div id="icone"> <img src="img/circle.png"> </div>
            <div id="tarefa">${texto}</div>
            <div id="data"> ${ano} </div>
            <div id="marcar"> <img src="img/trash-can.png"> </div>
        </div>`;
    caixaTarefa.innerHTML += adicionado;
    input.value = "";
    input.focus();
    }
};


input.addEventListener("keyup", function (event){
    if (event.keyCode === 13) {
        event.preventDefault();
        botao.click();
    }
})