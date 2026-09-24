/* =================================
   TAMANHO DA FONTE
================================= */

let tamanhoFonteAtual = 16;

const valorAdicionado = 2;
const valorSubtraido = 2;

const tamanhoFonteMinimo = 12;
const tamanhoFonteMaximo = 30;


/* BOTÕES DE FONTE */

let btnAumentaFonte = document.getElementById("btnAumentaTexto");
let btnDiminuiFonte = document.getElementById("btnDiminuiTexto");


/* AUMENTAR FONTE */

btnAumentaFonte.addEventListener("click", aumentaFonte);

function aumentaFonte() {

    if (tamanhoFonteAtual < tamanhoFonteMaximo) {

        tamanhoFonteAtual =
            tamanhoFonteAtual + valorAdicionado;

        document.documentElement.style.fontSize =
            `${tamanhoFonteAtual}px`;
    }
}


/* DIMINUIR FONTE */

btnDiminuiFonte.addEventListener("click", diminuiFonte);

function diminuiFonte() {

    if (tamanhoFonteAtual > tamanhoFonteMinimo) {

        tamanhoFonteAtual =
            tamanhoFonteAtual - valorSubtraido;

        document.documentElement.style.fontSize =
            `${tamanhoFonteAtual}px`;
    }
}


/* =================================
   LEITURA EM VOZ ALTA
================================= */

let lendo = false;

const btnLeitura = document.getElementById("btnVoz");
const btnPararLeitura = document.getElementById("btnPararVoz");


/* BOTÃO OUVIR */

btnLeitura.addEventListener("click", lerEmVozAlta);


/* BOTÃO PARAR */

btnPararLeitura.addEventListener("click", pararLeitura);


/* FUNÇÃO DE LEITURA */

function lerEmVozAlta() {

    /*
        Se já estiver lendo:
        pausa ou continua a leitura.
    */

    if (lendo === true) {

        if (speechSynthesis.paused === true) {

            speechSynthesis.resume();

        } else {

            speechSynthesis.pause();
        }

        return;
    }


    /* PEGA O CONTEÚDO PRINCIPAL */

    let conteudo = document.querySelector("main");

    if (!conteudo) {
        return;
    }


    let texto = conteudo.innerText;


    /* CRIA A FALA */

    let fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";

    fala.rate = 0.9;

    fala.pitch = 1;

    fala.volume = 1;


    /* QUANDO TERMINAR */

    fala.onend = finalizarLeitura;


    /* CANCELA UMA LEITURA ANTERIOR */

    speechSynthesis.cancel();


    /* INICIA A LEITURA */

    speechSynthesis.speak(fala);

    lendo = true;
}


/* =================================
   FINALIZAR LEITURA
================================= */

function finalizarLeitura() {

    lendo = false;
}


/* =================================
   PARAR LEITURA
================================= */

function pararLeitura() {

    speechSynthesis.cancel();

    lendo = false;
}


/* =================================
   MODAL DE AJUDA
================================= */

const modal = document.getElementById("modalAjuda");
const btnFecharModal = document.getElementById("btnFecharModal");


/*
    Se quiser abrir o modal através
    de outro botão, use:

    abrirModal();
*/

function abrirModal() {

    modal.style.display = "block";
}


/* FECHAR MODAL */

btnFecharModal.addEventListener("click", fecharModal);

function fecharModal() {

    modal.style.display = "none";
}


/* FECHAR AO CLICAR FORA DO MODAL */

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        fecharModal();
    }
});