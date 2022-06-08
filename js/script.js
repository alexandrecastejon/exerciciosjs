function calcularMedia( notas ) {

    let soma = 0;
    for( c = 0; c < notas.length; c++) {
    soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; //escopo global

function apravacao( notas ) {

    let media = calcularMedia( notas ); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}


// Função Recursiva

function contagemRegressiva(numero){

    console.log(numero);

    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);

}

// contagem Regressiva(50);

documento.addEventListener('submit', function( event ) {

    evento.preventDefault();

    letformulario = document.getElementById('formulario-01');

    let dados = new FormData(formulario);

    let objeto = {};

    for(let key of dados.keys()) {
        objeto[key] = dados.get(key);

    }

    console.log(objeto);
})