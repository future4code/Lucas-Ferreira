// ------------------ Exercicios de Interpretação de código ---------------------- //

/* 1)

let array
console.log('a. ', array) // a.  undefined

array = null
console.log('b. ', array) // b.  null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // c.  11 

let i = 0
console.log('d. ', array[i]) // d.  3

array[i+1] = 19
console.log('e. ', array) // e. [3,19,5,6,7,8,9,10,11,12,13]

const valor = array[i+6]
console.log('f. ', valor) // f.  9

*/

// ------------------ Exercicios de Escrita de Código ---------------------- //

// 1) 
// const nome = prompt("Qual o seu nome? ")
// const email = prompt("Qual o seu email? ")
// console.log(`O email ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`)

// ------------------------------------------------------------------------------------ //

//2)

//  const comidasPrediletas = ["Pizza ", "Açai ", "Lasanha ", "bisteca ", "Hamburguer "]
// console.log(comidasPrediletas)

// //console.log(`Essas são as minhas comidas preferidas: ${comidasPrediletas.toString().replaceAll(",", "\n")}`)

//  let qualComidaPredileta = prompt("Qual sua comida predileta? ")
//  comidasPrediletas[1] = qualComidaPredileta
//  console.log(comidasPrediletas)

// // ------------------------------------------------------------------------------------ //

// //3)

// // a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

// const listaDeTarefas = []

// //b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
// const tarefa1 = prompt("Digita a primeira tarefa")
// const tarefa2 = prompt("Digita a segunda tarefa")
// const tarefa3 = prompt("Digita a terceira tarefa")

// listaDeTarefas.push(tarefa1)
// listaDeTarefas.push(tarefa2)
// listaDeTarefas.push(tarefa3)

// // c) Imprima o array na tela
// console.log(listaDeTarefas)

// // d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2
// let indice = Number(prompt("Digite o indice da tarefa que você ja realizaou de 0 a 3: "))

// // e) Remova da lista o item de índice que o usuário escolheu.
// listaDeTarefas.splice(indice, 1)

// //f) Imprima o array na tela
// console.log(listaDeTarefas)


// ------------------ DESAFIO ------------------------------ //

//1)

//  const frase = "tudo bem gente"

// const array = frase.split(" ")

// console.log(array)

//2) 
// const array1 = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

// console.log(array1.indexOf("Abacaxi"))



