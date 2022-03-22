const atual = new Date()
const hora = atual.getHours()
const minuto = atual.getMinutes()

var prg = window.document.getElementById('clock')
var body = window.document.getElementById('corpo')

if (hora < 12 ){
    body.style.background = "blue"
    prg.innerText = `Agora são ${hora}:${minuto}. bom dia!`
} else if (hora < 19){
    body.style.background = "#D9BD32"
    prg.innerText = `Agora são ${hora}:${minuto}. boa tarde!`
} else {
    body.style.background = "rgb(83, 83, 83)"
    prg.innerText = `Agora são ${hora}:${minuto}. boa noite!`
}




