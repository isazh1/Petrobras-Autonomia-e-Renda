//DECLARAR ARRAY 
const numeros = [10, 50, 60, 300, 70, 900, 850]

let num = 10

num = 80

//console.log(numeros[1])

numeros[2] = 124

/*console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])*/

for(i = 0; i < numeros.length; i++){
    // console.log(numeros[i])
}

//FUNÇÕES  DO ARRYA
//ADICIONAR O ELEMENTO AO FINAL DO ARRAY
numeros.push(1502)

//ADICIONAR ELEMENTO NO INÍCIO DO ARRAY
numeros.unshift(2408)

numeros.forEach((elem, i)=>{
    console.log(i, elem)
})


//FUNÇÃO SPLIPE
//REMOVENDO ELEMENTO A PARTIR DE UMA POSIÇÃO
numeros.splice(3, 2)

//ADICIONAR ELEMENTOS 
numeros.splice(4, 0, 8888)

//SUBSTITUIR ELEMENTOS 
numeros.splice(2, 1, 5555)

console.log('------------- DEPOIS DO SPLICE -------------')
numeros.forEach((elem, i)=>{
    console.log(i, elem)
})

/*
let cont = 0
for(let elem of numeros){
    cont++
    console.log(cont, elem)
}*/