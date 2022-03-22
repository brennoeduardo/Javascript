function contar(){
    let init = document.getElementById('txt1')
    let end = document.getElementById('txt2')
    let pass = document.getElementById('txt3')
    let res = document.getElementById('res')

    if(init.value.length == 0 || end.value.length == 0 || pass.value.length == 0){
        res.style.color = 'red'
        res.innerHTML = 'Preencha os dados para fazer a contagem!'
    } else {
        res.style.color = 'black'
        res.innerHTML = "Contagem: "
        let i = Number(init.value)
        let e = Number(end.value)
        let p = Number(pass.value)
        if(p <= 0){
            window.alert('Considerando passo 1')
            p = 1
        }
        
        if(i < e){  
            for(let c = i; c <= e; c += p){
                res.innerHTML += `${c} `
        } 
        } else{
            for(let c = i; e <= c; c -= p){
                res.innerHTML += `${c} `
            }
        }
        }
    }