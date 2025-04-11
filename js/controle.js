let input = document.getElementById("input");
let botao =  document.getElementById("botaoAdicionar");
let caixaTarefa = document.getElementById("caixaTarefas");


let data = new Date();
let ano = data.toLocaleDateString("pt-BR");
var num = 0;

function adicionando(){
    let texto = input.value;
    if ((texto !== null) && (texto !== "") && (texto !== undefined)){
        let adicionado = 
        `<div class="${num}" id="caixa">
            <div id="icone" >  <img onclick="marcarTarefa(${num})" src="img/circle.png">  </div>
            <div id="tarefa"> ${texto} </div>
            <div id="data"> ${ano} </div>
            <button id="excluir" class="${num}" onclick="excluir(${num})" ><img src="img/trash-can.png"> </button>
        </div>`;

    ++num; 
    caixaTarefa.innerHTML += adicionado;
    input.value = "";
    input.focus();
    }
};


function excluir(num){
    var caixa = document.getElementsByClassName(num);
    if (caixa.length > 0) {
        caixa[0].remove();
      }
}



input.addEventListener("keyup", function (event){
    if (event.keyCode === 13) {
        event.preventDefault();
        botao.click();
    }
})

function marcarTarefa(num) {
    const elemento = document.getElementsByClassName(num)[0];
    const img = elemento.querySelector("#icone img");
  
    if (img.src.includes("circle.png")) {
      img.src = "img/checked.png";
    } else {
      img.src = "img/circle.png";
    }

    elemento.classList.toggle("Clique");
  }