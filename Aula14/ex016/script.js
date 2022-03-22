function contar(){
    let inicio = document.getElementById('txt1') 
    let fim = document.getElementById('txt2')
    let passo = document.getElementById('txt3')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.style.color = 'red'
        res.innerHTML = 'Preencha os números para fazer a contagem!'
    } else{
        res.style.color = 'black'
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(i < f){
            //Contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} `
            }
        } else{
            //Contagem regressiva
            for(let c = i; f <= c; c -=p){
                res.innerHTML += `${c} `
            }
        }

        }
    }


