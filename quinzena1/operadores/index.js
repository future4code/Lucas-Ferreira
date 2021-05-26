// ---------- Exercicios de Interpretação ---------- //

/*
1) 

a. , false

b. , false

c. , true

d. , boolean

*/
//-------------------------------------------------//

/*
2) 

O prompt entende os dados do usuário como string, com esse tipo de dados sempre que essas informações
forem necessárias fazer soma elas vão concatenadas ao invés de calculadas

*/

/*
3)
Solução

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

// ---------- Exercicios de Escrita de código ---------- //

//1)
//  

// let usuario2 = Number(prompt("Qual idade do seu melhor amigo(a)?"))

// console.log("Sua idade é maior do que a do seu melhor amigo(a)? ", usuario1 > usuario2)

// console.log("A diferença de idade entre vocês é: ", usuario1 - usuario2)

//-------------------------------------------------------------------------------------------//

//2)

// let numPar = Number(prompt("Por favor digite um numero par: "))

// console.log("O resto desta divisão é: ", numPar % 2) 
// Toda vez que a divisão faz com números pares, o resto é zero. 
// Mesmo adicionando numeros ímpares o sistema faz o cálculo, pois ele não está filtrando se é ou não número par

//-------------------------------------------------------------------------------------------//
//3)

// const idade = Number(prompt("Qual a sua idade?"))

// console.log("Sua idade em meses é: ", (idade * 12), " meses.")
// console.log("Sua idade em meses é: ", (idade * 365), " dias.")
// console.log("Sua idade em meses é: ", (24 * 365 * 25 ), " horas.")

//-------------------------------------------------------------------------------------------//

//4)

// const numb1 = Number(prompt("Digite o primeiro numero?"))
// const numb2 = Number(prompt("Digite o segundo numero?"))
// const resultado1 = (numb1 % numb2) == 0
// const resultado2 = (numb2 % numb1) == 0


// console.log("O primeiro numero é maior que segundo?", numb1 > numb2)
// console.log("O primeiro numero é igual ao segundo?", numb1 == numb2)
// console.log("O primeiro numero é divisível pelo segundo?", resultado1)
// console.log("O segundo numero é divisível pelo primeiro?", resultado2)


// -------------------------- DESAFIOS ------------------------------------------------------- //

//1)

// - Graus Fahrenheit(°F) para Kelvin(K)

//     ```
//     (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
//     ```

// - Graus Celsius(°C) para Graus Fahrenheit (°C)

//     ```
//     (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
//     ```


// a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
// const f = 77
// console.log("7º F em K é: ", (f-32)*(5/9)+273.15)

// // b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
// const c = 80
// console.log("80 ºC em ºF é: ", (c)*(9/5)+32)

// // c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
// const c2 = 30
// console.log("30 ºC em ºF é: ", (c2)*(9/5)+32)
// console.log("30 ºC em K é: ", (c2-32)*(5/9)+273.15)

// // d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
// const c3 = Number(prompt("Insira um valor qualquer e veja a conversão de ºC para ºF e K: "))
// console.log("Seu numero: ", c3,"em ºF", (c3)*(9/5)+32)
// console.log("Seu numero: ", c3,"em K", (c3-32)*(5/9)+273.15) 

//-------------------------------------------------------------------------------------------------------------//

//2)
// Sabe-se que o quilowatt-hora de energia custa R$0.05. 
// a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
const qH = 280
console.log("Com 280qH, você pagará: R$", qH * 0.05, "reais.")

// b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto
const qH2 = 280
const desconto = 0.15
const valorEDesconto = qH2 * desconto

const resultado = qH2 - valorEDesconto

console.log("Com 280qH, mais um desconto de 15%, você pagará: R$", resultado, "reais.")

//-------------------------------------------------------------------------------------------------------------//

//3)
// a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 20lb equivalem a X kg
const umaLibraEmKg = 0.453592
const lb = 20
console.log("20lb em Kg, é: ", lb * umaLibraEmKg)

// b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
const umaOncaEmKg = 0.0283495
const oz = 10.5
console.log("10.5oZ em Kg, é: ", oz * umaOncaEmKg)

//c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
const umaMilhaEmM = 1609.34
const mi = 100
console.log("100mi em M, é: ", mi * umaMilhaEmM)

//d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
const umPeEmM = 0.3048
const ft = 50

console.log("50ft em M, é: ", ft * umPeEmM)

//e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
const umGalaoEmL = 3.78541
const gal = 103.56

console.log("103.56ft em L, é: ", gal * umGalaoEmL)

//f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
const umXicaraEmL = 4.167
const xic = 450

console.log("450xic em L, é: ", xic * umXicaraEmL)

// g) Escolha ao menos um dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter
const umXicaraEmL2 = 4.167
const xic2 = Number(prompt("Digite um numero e veja seu valor em xicara se converter em L: "))

console.log("O numero",xic2,"em L, é: ",xic2 * umXicaraEmL2)






