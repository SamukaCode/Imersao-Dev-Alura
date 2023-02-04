  var elementoTabela = document.getElementById("tabelaTimes");
  var listaTimes = []
  exibirNaTela();
  
  function exibirNaTela() {
    var tabela = "";
    for (var i = 0; i < listaTimes.length; i++) {
      tabela += `<tr>
         <td>${listaTimes[i].nome}</td>
         <td><img src="${listaTimes[i].url}" width="50px"></td>
         <td>${listaTimes[i].vitorias}</td>
         <td>${listaTimes[i].empates}</td>
         <td>${listaTimes[i].derrotas}</td>
         <td>${listaTimes[i].pontos}</td>
         <td><button onClick="addVitoria(${i})">Vitória</button></td>
         <td><button onClick="addEmpate(${i})">Empate</button></td>
         <td><button onClick="addDerrota(${i})">Derrota</button></td>
      </tr>`;
    }
    elementoTabela.innerHTML = tabela;
  }

  function addTime(){
    var nomeTime = prompt("Insira o nome do time:")
    var urlEscudo = prompt("Insira a URL do escudo:")
    var time = {
        nome: nomeTime,
        url: urlEscudo,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    }
    listaTimes.push(time)
    exibirNaTela();
  }
  
  function addVitoria(time) {
    listaTimes[time].vitorias++;
    listaTimes[time].pontos = listaTimes[time].pontos + 3;
    exibirNaTela();
  }
  
  function addEmpate(time) {
    listaTimes[time].empates++;
    listaTimes[time].pontos++;
    exibirNaTela();
  }
  
  function addDerrota(time) {
    listaTimes[time].derrotas++;
    exibirNaTela();
  }
  