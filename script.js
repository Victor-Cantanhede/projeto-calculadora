// VARIÁVEL PARA IMPRIMIR EM SCREEN
let comando = document.getElementById('iprint');

// VARIÁVEL PARA VALOR EM SCREEN
let inScreen = '';

// VARIÁVEM PARA VALOR EM PARENTESES
let parenteses = '';

// VARIÁVEL PARA RESULTADO
let result = '';


// FUNÇÃO IMPRIMIR VALOR EM SCREEN
function addScreen(p) {

    if (isNaN(p) && result != '') {

        inScreen = result;
        inScreen += p;
        result = '';
        comando.innerHTML = inScreen;

    } else {

        inScreen += p;
        comando.innerHTML = inScreen;
    }
}


// FUNÇÃO ABRIR OU FECHAR PARENTESES
function addParenteses() {

    if (parenteses == '') {

        inScreen += '(';
        comando.innerHTML = inScreen;
        parenteses = '(';

    } else {
        
        inScreen += ')';
        comando.innerHTML = inScreen;
        parenteses = '';
    }
}


// FUNÇÃO PORCENTAGEM
function porcento() {

    inScreen = Number.parseFloat(eval(inScreen)) / 100;

    if (isNaN(inScreen)) {

        comando.innerHTML = 'Erro! Porcentagem inválida.';

    } else {

        inScreen += '*(';
        parenteses = '(';
        comando.innerHTML = inScreen;
    }    
}


// FUNÇÃO RESULTADO
function resultado() {

    if (parenteses != '') {

        inScreen += ')';
        parenteses = '';
        comando.innerHTML = inScreen;
    }

    result = Number.parseFloat(eval(inScreen));
    comando.innerHTML = result;
    inScreen = '';
}


// FUNÇÃO LIMPAR TUDO
function limparTudo() {

    inScreen = '';
    result = '';
    parenteses = '';
    comando.innerHTML = inScreen;
}

// FUNÇÃO APAGAR ÚLTIMO CARACTER
function apagar() {

    inScreen = inScreen.slice(0, -1);
    comando.innerHTML = inScreen;
}