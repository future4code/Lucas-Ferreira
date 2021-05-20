//------------------------------------------------------------------//

//Exercicio de Interpretação//

/* 1 Questão)

Será impresso:

10
10 5

*/



/* 2 Questão)

Será impresso:
10 10 10 
 */




/* 3 Questão)

let horasTrabalhadasPorDia = prompt("Quantas horas você trabalha por dia?")
let valorRecebePorDia = ("Quanto você recebe por dia?")

alert(`Voce recebe ${valorRecebePorDia/horasTrabalhadasPorDia} por hora`)

*/

//-----------------------------------------------------------------//

//Exercicio de escrita//

//1 Questão) 

let nome
let idade


console.log(typeof nome) // Impresso no console como undefined pois não foi atribuido valor a está variável
console.log(typeof idade) // Impresso no console como undefined pois não foi atribuido valor a está variável

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

console.log(typeof nome) // Foi impressa como String
console.log(typeof idade) // Mesmo sendo um numero foi impresso como string por que o prompt só imprime seus dados como string

console.log("Olá,", nome, "você tem idade", idade, "anos.")


//2 Questão) 
let estaFeliz = "Você está feliz neste momento?"
let estaCansado = "Você está Cansado agora?"
let estaPensativo = "Você está Pensativo hoje?"

let respostaFeliz = "Sim"
let respostaCansado = "Não"
let respotaPensativo = "Sim"

console.log( estaFeliz, " - ", respostaFeliz, ".", 
            estaCansado, " - ", respostaCansado, ".",
            estaPensativo, " - ", respotaPensativo) 


//3 Questão)

let a = 10
let b = 25
let c 

c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)


//-----------------------------------------------------------------//

//DESAFIO//

let numero1 = Number(prompt("Digite o Primeiro Numero:"))
let numero2 = Number(prompt ("Digite o Segundo Numero:"))

let resultadoSoma = numero1 + numero2
let resultadoMultiplicacao = numero1 * numero2

console.log("A soma destes dois numero é: ", resultadoSoma)
console.log("A multiplicação destes dois numero é: ", resultadoMultiplicacao)









