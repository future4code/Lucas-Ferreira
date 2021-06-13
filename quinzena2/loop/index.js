
// ---------------------------- EXERCICIOS DE INTERPRETAÇÃO --------------------------------------------- //

//1) 10


//2) 
// a) 19, 21, 23, 25, 27, 30

// b) Não.
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   console.log(numero)
// }


//3) 
// *
// **
// ***
// ****


// ---------------------------------- EXERCICIOS DE INTERPRETAÇÃO ---------------------------------- //

//1)
// let qtdBichinhoEstimacao = Number(prompt("Quantos bichinhos de estimação você tem em casa?"))

// let resultado
// let arrayPet = []

// if (qtdBichinhoEstimacao === 0) {
//     console.log("Que pena! Você podia adotar um pet")

// } else if (qtdBichinhoEstimacao > 0) {
//     for (let i = 0; i < qtdBichinhoEstimacao; i++) {
//         let nomeBichinhos = prompt("Qual nome do seu pet?")
//         arrayPet.push(nomeBichinhos)
        
        
//     }
// }

// console.log(arrayPet)

//2)

// // a)
let arrayOriginal = [10,23,34,480,54,15,12,4,3]

function imprimirArrayOriginal (array){
    for(let a of array){
        console.log(a)
    }

}
imprimirArrayOriginal(arrayOriginal)


// // b)

function dividirPorDez (array){
    for(let a of array){
        const divisao = a / 10
        console.log(divisao)
    }

}
dividirPorDez(arrayOriginal)


// // c)

let novoArray = []

function numerosPares (array){
    for(let a of array){
        const pares = a % 2 
        if(pares === 0) {
            novoArray.push(a)
        }
    }

    return novoArray
}

console.log(numerosPares(arrayOriginal))


// // d)

function buscarIndice (array) {
    for (let i = 0; i < array.length; i++){
        console.log(`O elemento do índex ${i} é ${array[i]}`)
    }
   return array
 }

 console.log(buscarIndice(arrayOriginal))



// // e)
let numeroMaior = 0
let numeroMenor = 999999999999


for(let numero of arrayOriginal){
    if(numero > numeroMaior){
        numeroMaior = numero
        
    }

    if(numero < numeroMenor){
        numeroMenor = numero
        
    }

}
console.log(`O maior numero é: ${numeroMaior}`)
console.log(`O menor numero é: ${numeroMenor}`)


