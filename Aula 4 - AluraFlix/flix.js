function adicionarFilme() {
    var linkTrailer = document.getElementById('linkFilme').value
    var filmeFavorito = document.getElementById('filme').value 
    var elementoListaFilmes = document.getElementById('listaFilmes')
    if(filmeFavorito.endsWith('.jpg') || filmeFavorito.endsWith('.png') || filmeFavorito.endsWith('.webp')){
        let listMovie = Array()
        listMovie.push(filmeFavorito)
        elementoListaFilmes.innerHTML += '<a href=' + linkTrailer + ' target="_blank"><img src=' + filmeFavorito + '>' + '<\a>'
        document.getElementById('filme').value = null
        document.getElementById('linkFilme').value = null
    }
    else {
        alert('Imagem inválida')
    }
}

function limparFilme() {
    self.location = "index.html";
}
