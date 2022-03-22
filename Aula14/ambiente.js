/*
    -While
var c = 1
while(c<=10){
    console.log(c)

    c++
}
    -Do While
var c =1
do{
    console.log(c)
    c++
} while( c <= 5)

    -For
for(var c =1; c <=10; c++){
    console.log(c)
}*/

/*for(var c =1; c <=10; c++){
    if(c % 2 == 0){
        console.log(`O número ${c} é par`)
    } else{
        console.log(`O número ${c} é impar`)
    }
}*/

var c = 1
do{
    if(c % 2 == 0){
        console.log(`O número ${c} é par`)
    } else{
        console.log(`O número ${c} é impar`)
    }
    
    c++
} while(c <= 10)