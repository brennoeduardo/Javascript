function calcular(){
    let num = document.getElementById('number')
    let sel = document.getElementById('seltab')
    let erro = document.getElementById('erro')

    if(num.value.length == 0 || num.value == Number(0)){  //Verificar se o input está vazio ou com numéro inválido (0)
        erro.textContent = 'Por favor, insira um número para gerar a tabuada!'
    } else{
        let n = Number(num.value) //Pega o valor da variável e transforma em número
        let c = 1
        sel.innerHTML = ' '
        while(c <= 10){
            let item = document.createElement('option') //Cria um elemento option para colocar os resultados da tabuada.
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            sel.appendChild(item) //Adicionar elemento filho, nesse caso a variável item que tem como valor o option e seu pai é o select
            c++
        }
    }
}
