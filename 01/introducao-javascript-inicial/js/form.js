		// var titulo = document.querySelector('#idUnico');
		// titulo.addEventListener('click', function() {
		// 	console.log('fui clicado :)');
        // });
        

var botaoAdicionar = document.querySelector('#adicionar-aluno');
botaoAdicionar.addEventListener('click', function(event) {
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');
    var nome = form.nome.value;
    var notaum = form.notaum.value;
    var notadois = form.notadois.value;

    var alunoTr = document.createElement('tr');
    var nomeTd = document.createElement('td');
    var notaumTd = document.createElement('td');
    var notadoisTd = document.createElement('td');
    var mediaTd = document.createElement('td');

    nomeTd.textContent =  nome;
    notaumTd.textContent = notaum;
    notadoisTd.textContent = notadois;
    mediaTd.textContent = calcularMedia(notaum, notadois);


    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(notaumTd);
    alunoTr.appendChild(notadoisTd);
    alunoTr.appendChild(mediaTd);
  

    var tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);

});