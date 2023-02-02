var btnAdd = document.querySelector("#btnAdd");
var gameList = document.querySelector('#gameList');

btnAdd.addEventListener("click", () => { 
    let gameListImgs = Array(); 
    var gameImg = prompt("Insira a URL do game desejado");
    gameListImgs.push(gameImg);

    for (let i = 0; i < gameListImgs.length; i++){
    gameList.innerHTML += `<img src=${gameListImgs[i]}>`;
};
});

/* IMERSÃO DEV
AUTOR: SAMUEL CAMARGO  */