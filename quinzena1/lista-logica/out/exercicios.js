// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura = prompt('Digite a altura do retangulo: ')
  const largura = prompt('Digite a largura do retangulo: ')

  console.log(Number(altura) * Number(largura))
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = prompt('Digite o ano atual: ')
  const anoNascimento = prompt('Digite seu ano de nascimento: ')

  console.log(Number(anoAtual) - Number(anoNascimento))
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = prompt('Digite o seu peso: ')
  const suaAltura= prompt('Digite sua altura: ')

  console.log(Number(peso /(suaAltura * suaAltura)))

 
  
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt('Digite o seu nome: ')
  const idade = prompt('Digite sua idade: ')
  const email = prompt('Digite seu email: ')  

  console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".")
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cor1 = prompt('Digite a primeira cor predileta: ')
  const cor2 = prompt('Digite a segunda cor predileta: ')
  const cor3 = prompt('Digite a teceira cor predileta: ')
  
  const resultado = [cor1,cor2,cor3]

  console.log(resultado)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  let palavra = prompt("Digite uma palavra")
  let palavraNova = palavra.toUpperCase()

  console.log(palavraNova)
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custoEspetaculo = Number(prompt("Qual o custo total para se realizar esse espetaculo?"))
  const valorIngresso = Number(prompt("Qual é o valor do ingresso atualmente?"))

  console.log(custoEspetaculo / valorIngresso)
}
// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const stringA = (prompt("Digite a primeira palavra: "))
  const stringB = (prompt("Digite a segunda palavra: "))

  console.log(stringA.length == stringB.length)


}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const string1 = (prompt("Digite a primeira palavra: "))
  const string2=  (prompt("Digite a segunda palavra: "))

  console.log(string1.toUpperCase() == string2.toUpperCase())
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoCorrente = (prompt("Em que anos estamos? "))
  const dataNascimento =  (prompt("Qual seu ano de nascimento? "))
  const anoRgEmitida = (prompt("Qual ano seu Rg foi emitido?"))

  /*
  A função deve imprimir no console um booleano (true ou false) que indica 
  se a carteira precisa ser renovada ou não. 
  A carteira precisa ser renovada segundo os seguintes critérios:
 
  Para pessoas com menos de 20 anos, 
  ou exatamente 20 anos, deve ser renovada de 5 em 5 anos 
 (se for exatamente 5 anos, deve ser renovada)
 */

 const idadeAtual = anoCorrente - dataNascimento

 const renovacao = anoCorrente - anoRgEmitida

 const resultado = ((idadeAtual <= 20) && (renovacao >= 5) || (idadeAtual > 20) && (idadeAtual <= 50) && (renovacao >= 10) || (idadeAtual > 50) && (renovacao >= 15) )
 console.log(resultado)
}




// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui

  // ano % 4 == 0 && ano % 100 != 0 ) || (ano % 400 == 0
  const anoAtualmente = Number(prompt("Em qua ano estamos?"))

  const resultado = (anoAtualmente % 400 == 0) || (anoAtualmente % 4 == 0 && anoAtualmente % 100 != 0)

  console.log(resultado)


}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui

  const labenuIdade = prompt("Voce é maior que 18 anos? Responda 'sim' ou 'não'")
  const labenuEnsinoMedio = prompt("Voce tem ensino medio completo ? Responda 'sim' ou 'não'")
  const labenuDisponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso? Responda 'sim' ou 'não' ")

  const efetivacaoInscricao = (labenuIdade == 'sim' && labenuEnsinoMedio == 'sim' && labenuDisponibilidade == 'sim')

  console.log(efetivacaoInscricao)
}