localStorage.setItem('nome', 'Milena');

var meuTitulo = document.getElementById("titulo");
meuTitulo.innerHTML = localStorage.getItem('nome');