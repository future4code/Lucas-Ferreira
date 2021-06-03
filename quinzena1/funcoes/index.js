
// ---------------------- Exercicio de Intepretação de Código ---------------------- //

// 1)

 // a) Primeiro console: 10, segundo console: 50
 // b) Não deve acontecer nada em relação ao console, pois o console.log não foi utilizado para mostrar o resultado no console.

// ----------------------------------------------------------------------------------------------------------------------------//

//2) 

 //a) A função pegará o input do usuário e vai retornar um true ou false, dependendo se
 // a mesma contiver a palavra cenoura ou não, mas antes desse teste ela irá transformar qualquer palavra vindo do input em minusculo.

 //b) i) true / ii) true // iii) false



 // ---------------------- Exercicio de Escrita de Código ---------------------- //

// 1)
 // a)
//  function falarSobreMim (){
//      console.log(`Eu sou Lucas, tenho 25 anos, moro em Teresina, e sou estudando da Labenu.`)
//  }

//  falarSobreMim()

 // b)
//  function falarSobrePessoa (nome, idade, cidade, profissão) {
//      console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`)
//   }

//  falarSobrePessoa("Fernando",30, "São Paulo","Programador")

 // ----------------------------------------------------------------------------------------------------------------------------//

// 2)
 // a)
//   function somar(numero1, numero2){
//       const calculo = numero1 + numero2
//       return calculo
//   }

//   const resultado = soma(10, 25)
//   console.log(resultado)

  // b)
//   function compararMaiorOuMenor(n1, n2){
//     const comparacao = n1 >= n2
//     return comparacao
// }

// const resultadoComparacao = compararMaiorOuMenor(10, 25)
// console.log(resultadoComparacao)

 // c)
//  function compararPar(numero) {
//     const parOuNao = numero % 2
//     return parOuNao == 0
//  }

//  const resultadoParOuNao = compararPar(20)
//  console.log(resultadoParOuNao)

 // d) 
//  function receberTransformaEtamanho(mensagem){
//      const m = mensagem.toUpperCase()
//      const l = mensagem.length

//      console.log(m)
//      console.log(l)

//  }

// receberTransformaEtamanho("cheguei")


// ----------------------------------------------------------------------------------------------------------------------------//

//  // 3)
// const n1 = Number(prompt("Digite o primeiro numero: "))
// const n2 = Number(prompt("Digite o segundo numero: "))

// function somar(numero1, numero2){
//     const s = numero1 + numero2
//     return s
// }

// function subtrair(numero1, numero2){
//     const s = numero1 - numero2
//     return s
// }

// function multiplicar(numero1, numero2){
//     const m = numero1 * numero2
//     return m
// }


// function dividir(numero1, numero2){
//     const m = numero1 / numero2
//     return m
// }

// console.log(`Numeros inseridos: ${n1} e ${n2}`)

// console.log(`A soma destes numero é ${somar(n1,n2)}`)

// console.log(`A subtração destes numero é ${subtrair(n1,n2)}`)

// console.log(`A multiplicação destes numero é ${multiplicar(n1,n2)}`)

// console.log(`A divisão destes numero é ${dividir(n1,n2)}`)


// ------------------------ DESAFIOS ----------------------------------------- //
// 1)
 // a)
//  const aF = (parametro) => {
//     return parametro
//  }

//  console.log(aF("Manda a braaaba"))

//  // b)

//  const outraAF = (p1,p2) =>{
//      const calculo = p1 + p2
//      console.log(calculo)
//  }

//  aF(outraAF(20,30))
// ----------------------------------------------------------------------------------------------------------------------------//

// 2)
//  function calcularHipotenusa(cateto1, cateto2){
//      const calc = (cateto1 * cateto1) + (cateto2 * cateto2)
//      const r = Math.sqrt(calc)
//      return r
//  }

//  const resultadoHipotenusa = calcularHipotenusa(9,12)
//  console.log(resultadoHipotenusa)