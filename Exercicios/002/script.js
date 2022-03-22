
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano  = document.getElementById('anoNasc')
    var res = document.getElementById('resposta')
    if(fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente.')
    } else {
         var fsex = document.getElementsByName('genero')
         var idade = ano - Number(fano.value)
         var genero = ''
         var img = document.createElement('img')
         img.setAttribute('id', 'foto')
         if (fsex[0].checked) {
             genero = 'Homem'
             if (idade >=0 && idade < 10){ 
                 img.setAttribute('src', 'criancamenino.jpg')
             } else if (idade < 21) {
                img.setAttribute('src', 'homemjovem.jpg')
             } else if(idade < 50){
                img.setAttribute('src', 'homem.jpg')
             } else{
                img.setAttribute('src', 'homemidoso.jpg')
             }
         } else if (fsex[1].checked) {
             genero = 'Mulher'
         } if (idade >=0 && idade < 10){ 
            img.setAttribute('src', 'criancamenina.jpg')
        } else if (idade < 21) {
           img.setAttribute('src', 'mulherjovem.jpg')
        } else if(idade < 50){
           img.setAttribute('src', 'mulher.jpg')
        } else{
           img.setAttribute('src', 'mulheridosa.jpg')
        }
         
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${genero} com ${idade} anos`
         res.appendChild(img)
    }
}
