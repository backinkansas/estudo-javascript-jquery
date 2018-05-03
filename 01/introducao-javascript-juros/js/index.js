// Contas reaproveitáveis

var todosJuros = document.querySelectorAll('.juros');

function calcularJuros (money, fee, months) {
    var res = parseFloat(money) * (parseFloat(fee) / 100) * parseFloat(months);
    return res;
}

// Conta dos juros

for (var i = 0; i < todosJuros.length; i++) {

    var juros = todosJuros[i];
    var tdDinheiro = juros.querySelector('.info-dinheiro');
    var dinheiro = tdDinheiro.textContent;
    var tdTaxa = juros.querySelector('.info-taxa');
    var taxa = tdTaxa.textContent;
    var tdMeses = juros.querySelector('.info-tempo');
    var meses = tdMeses.textContent;
    var resultado = juros.querySelector('.info-resultado');

    var resultadoCalculado = calcularJuros(dinheiro, taxa, meses);


    resultado.textContent = resultadoCalculado;


}

// Botão adicionar

var botaoAdicionar = document.querySelector('#adicionar-juros');
botaoAdicionar.addEventListener('click', function(event) {
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');
    var dinheiroForm = form.dinheiro.value;
    var taxaForm = form.taxa.value;
    var tempoForm = form.tempo.value;

    var jurosNovos = document.createElement('tr');
    var dinheiroTd = document.createElement('td');
    var taxaTd = document.createElement('td');
    var tempoTd = document.createElement('td');
    var resultadoTd = document.createElement('td');

    dinheiroTd.textContent = dinheiroForm;
    taxaTd.textContent = taxaForm;
    tempoTd.textContent = tempoForm;
    resultadoTd.textContent = calcularJuros(dinheiroForm, taxaForm, tempoForm);

    jurosNovos.appendChild(dinheiroTd);
    jurosNovos.appendChild(taxaTd);
    jurosNovos.appendChild(tempoTd);
    jurosNovos.appendChild(resultadoTd);

    var tabela = document.querySelector('#tabela-juros');
    tabela.appendChild(jurosNovos);


});

// Botão limpar

var botaoLimpar = document.querySelector('#limpar-form');
botaoLimpar.addEventListener('mouseover', function(event) {
    event.preventDefault();

    var dinheiroLimpar = document.querySelector('#dinheiro');
    var taxaLimpar = document.querySelector('#taxa');
    var mesesLimpar = document.querySelector('#tempo');
    dinheiroLimpar.value = "";
    taxaLimpar.value = "";
    mesesLimpar.value = "";

});