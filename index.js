var leonardo = window.document.getElementById('leonardo')
var bruna = window.document.getElementById('bruna')
var samantha = window.document.getElementById('samantha')
var setaDireita = window.document.getElementById('setadireita')
var setaEsquerda = window.document.getElementById('setaesquerda')

function RolarParaDireita() {
    leonardo.style = "display: none"
    samantha.style = "display: flex"
    setaDireita.style = "display: none"
    setaEsquerda.style = "display: flex; margin-top: 80px"
}

function RolarParaEsquerda() {
    samantha.style = "display: none"
    leonardo.style = "display: flex"
    setaEsquerda.style = "display: none"
    setaDireita.style = "display: flex; margin-top: 60px"
}

