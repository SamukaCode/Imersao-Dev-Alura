var numeroSecreto = parseInt(Math.random() * 1001)

var tentativas = 10

while(tentativas > 0) {
var chute = prompt('Digite um número entre 0 e 1000')
tentativas = tentativas - 1
if (chute == numeroSecreto) {
    alert('Acertou!')    
}
else if (chute > numeroSecreto){
    alert('Errou... o número secreto é menor que ' + chute + '\n Restam ' + tentativas + ' tentativas')
}
else if (chute < numeroSecreto){
    alert('Errou... o número secreto é maior que ' + chute + '\n Restam ' + tentativas + ' tentativas')
}
}

// <!-- /* IMERSÃO DEV
// AUTOR: SAMUEL CAMARGO  */ -->