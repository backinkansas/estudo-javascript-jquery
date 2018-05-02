var todosAlunos = document.querySelectorAll(".aluno");
console.log(todosAlunos);

for (var i = 0; i < todosAlunos.length; i++) {
	console.log(todosAlunos[i]);

		var aluno = todosAlunos[i];
		var tdPrimeiraNota = aluno.querySelector(".info-notaum");
		var primeiraNota = tdPrimeiraNota.textContent;
		var tdSegundaNota = aluno.querySelector(".info-notadois");
		var segundaNota = tdSegundaNota.textContent;
		var mediaFinal = aluno.querySelector(".info-media");
		
		var notaEhValida = true;

		if (primeiraNota < 0 || primeiraNota > 10) {
			notaEhValida = false;
			mediaFinal.textContent = "Nota Inválida";	
		}

		if (notaEhValida) {
			var mediaCalculada = 
				calcularMedia(primeiraNota, segundaNota);
			if (mediaCalculada < 5) {
				aluno.classList.add("abaixo-da-media");
			}
			mediaFinal.textContent = mediaCalculada.toFixed(2);
		}

	

}

function calcularMedia(provaUm, provaDois) {
	var mediaDentroDaFuncao = 0;
	mediaDentroDaFuncao = ((parseFloat(provaUm) + parseFloat(provaDois))  / 2);
	return mediaDentroDaFuncao;
}