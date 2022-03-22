var atual = new Date()
var hora = atual.getHours()
var day = atual.getDate()
var month = atual.getUTCMonth()
var year = atual.getFullYear()

console.log(`Hoje é dia ${day}/${month} de ${year} e agora são exatamente ${hora} horas` )

if ( hora < 12){
    console.log('Bom dia!')
} else if (hora <=18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}