let num = [25, 1, 3, 80, 7]

/*for(pos = 0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

console.log(num.indexOf(80))
num.sort()
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}


console.log(num.indexOf(90))
console.log(num.indexOf(80))