// ------------------------------- EXERCICOS DE INTERPRETAÇÃO DE CÓDIGO -----------------------------//

// 1)
 //a) O código pega o input do usuário e testa se aquele número é par ou impar, ou seja, se o resto
 /// da divisão é igual é zero. Se o resultado for true, receberá uma mensagem, se o resultado for false, receberá outra mensagem

 //b) Para números onde o resto da divisão é igual a zero
 //c) Para números onde o resto da divisão é diferente de zero

//----------------------------------------------------------------------------------------------------------------------------------//

// 2)
 //a) Serve para comparar se o input do usuário vai corresponder a cada case, ou seja,
 /// ele vai comparar o input com a string de cada case, após encontrar seu correspondente, ele vai atribuir um preço aquela fruta.

 //b) "O preço da fruta Maçã é R$2.25"
 //c) O preço da fruta Pera é R$5

//----------------------------------------------------------------------------------------------------------------------------------//

// 3)
 //a) Está guardando a string do input em uma variável e transformando ela em um valor do tipo numero

 //b) Se for 10 o console vai mostrar: "Esse numero passou no teste". Se for -10 ele irá mostrar um erro dizendo que "mensagem" não foi declarada.
 //c) Sim dará um erro, este ocorreu pois foi usado a variável de escopo let que está dentro do bloco de código do if, assim não é possível que seja acessado fora desse bloco
  
  
 
// ------------------------------- EXERCICOS DE ESCRITA DE CÓDIGO -----------------------------------//

// 1)
 //a) b)
//  let idade = Number(prompt("Qual a sua idade?"))

//  // c)
//  if (idade >= 18) {
//      console.log("Você pode dirigir!")
//  } else {
//      console.log("Você não pode dirigir!")   
//  }

 //----------------------------------------------------------------------------------------------------------------------------------//

 // 2)
//  let turnoDoAluno = prompt(`Qual turno do dia você estuda?
//  - Digite M para matutino
//  - Digite V para vespertino
//  - Digite N para noturno`)

//  if(turnoDoAluno.toUpperCase() === "M"){
//    console.log("Bom dia!")
//  }
//  if(turnoDoAluno.toUpperCase() === "V"){
//     console.log("Boa tarde!")

//  }
//  if(turnoDoAluno.toUpperCase() === "N"){
//     console.log("Boa noite!")

//  }

//----------------------------------------------------------------------------------------------------------------------------------//

//3) 
// let turnoDoAluno1 = prompt(`Qual turno do dia você estuda?
//  - Digite M para matutino
//  - Digite V para vespertino
//  - Digite N para noturno`)

//  switch(turnoDoAluno1.toUpperCase()) {
//      case "M": 
//      console.log("Bom dia!")
//      break

//      case "V": 
//      console.log("Boa tarde!")
//      break

//      case "N": 
//      console.log("Boa noite!")
//      break

//      default: 
//      console.log("Este turno não é reconhecível, por favor repita a operação e digite um dos turnos indicados")
//      break

//  }

//----------------------------------------------------------------------------------------------------------------------------------//

// 4)

// let generoFilme = prompt("Qual genero do filme?")

// let precoIngresso = Number(prompt("Qual o preço do ingresso?"))

// if(generoFilme.toLowerCase() === "fantasia" && precoIngresso === 15) {
//     console.log('Bom Filme!')
// } else {
//     console.log("Escolha outro filme")
// }


// ------------------------------- DESAFIOS -----------------------------------//


//1)
// let generoFilme = prompt("Qual genero do filme?")

// let precoIngresso = Number(prompt("Qual o preço do ingresso?"))

// let lanchinho = prompt(`Qual lanchinho você quer, pipoca, chocolate, doces, etc?`)

// if(generoFilme.toLowerCase() === "fantasia" && precoIngresso === 15) {
//     console.log(`Bom filme! Aproveite o seu ${lanchinho}`)
// } else {
//     console.log("Escolha outro filme")
// }

//2)
const nomeCompleto = prompt("Digite o seu nome completo")

const tipoJogo = prompt(`Qual o tipo de jogo?
- IN indica internacional
- DO indica doméstico`)

const etapaJogo = prompt(`Qual etapa do jogo você quer?
- SF indica semi-final
- DT indica decisão de terceiro lugar
- FI indica final`)

const categoria = prompt(`Qual a categoria: 
- 1, 2, 3, 4?` )

const quantidadeIngressos = Number(prompt("Quantos ingressos você quer? "))

const sFcomCategoria1 = 1320
const sFcomCategoria2 = 880
const sFcomCategoria3 = 550
const sFcomCategoria4 = 220

const dTcomCategoria1 = 660
const dTcomCategoria2 = 440
const dTcomCategoria3 = 330
const dTcomCategoria4 = 170

const fIcomCategoria1 = 1980
const fIcomCategoria2 = 1320
const fIcomCategoria3 = 880
const fIcomCategoria4 = 330

const valorDolar = 4.10

// ------------------------------------ SEMI-FINAL / DO ------------------------------------------------- //
if (tipoJogo.toUpperCase() === "DO" && etapaJogo.toUpperCase() === "SF" && categoria === "1") {
    const resultado = quantidadeIngressos * sFcomCategoria1

    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: R$", sFcomCategoria1)
    console.log("Valor Total: R$", resultado)

} else if (tipoJogo.toUpperCase() === "DO" && etapaJogo.toUpperCase() === "SF" && categoria === "2") {
    const resultado = quantidadeIngressos * sFcomCategoria2
    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: R$", sFcomCategoria2)
    console.log("Valor Total: R$", resultado)

} else if (tipoJogo.toUpperCase() === "DO" && etapaJogo.toUpperCase() === "SF" && categoria === "3") {
    const resultado = quantidadeIngressos * sFcomCategoria3
    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: R$", sFcomCategoria3)
    console.log("Valor Total: R$", resultado)

} else if (tipoJogo.toUpperCase() === "DO" && etapaJogo.toUpperCase() === "SF" && categoria === "4") {
    const resultado = quantidadeIngressos * sFcomCategoria4
    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: R$", sFcomCategoria4)
    console.log("Valor Total: R$", resultado)


    // ------------------------------------ DECISÃO DO TERCEIRO LUGAR / DO --------------------------------------------- //

} else if (tipoJogo.toUpperCase() === "DO" && etapaJogo.toUpperCase() === "DT" && categoria === "1") {
    const resultado = quantidadeIngressos * dTcomCategoria1
    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: R$", dTcomCategoria1)
    console.log("Valor Total: R$", resultado)

} else if (tipoJogo.toUpperCase() === "DO" && etapaJogo.toUpperCase() === "DT" && categoria === "2") {
    const resultado = quantidadeIngressos * dTcomCategoria2
    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: R$", dTcomCategoria2)
    console.log("Valor Total: R$", resultado)

} else if (tipoJogo.toUpperCase() === "DO" && etapaJogo.toUpperCase() === "DT" && categoria === "3") {
    const resultado = quantidadeIngressos * dTcomCategoria3
    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: R$", dTcomCategoria3)
    console.log("Valor Total: R$", resultado)

} else if (tipoJogo.toUpperCase() === "DO" && etapaJogo.toUpperCase() === "DT" && categoria === "4") {
    const resultado = quantidadeIngressos * dTcomCategoria4
    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: R$", dTcomCategoria4)
    console.log("Valor Total: R$", resultado)
}


// ------------------------------------------ FINAL / DO--------------------------------------------------------- //
else if (tipoJogo.toUpperCase() === "DO" && etapaJogo.toUpperCase() === "FI" && categoria === "1") {
    const resultado = quantidadeIngressos * fIcomCategoria1
    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: R$", fIcomCategoria1)
    console.log("Valor Total: R$", resultado)
}

else if (tipoJogo.toUpperCase() === "DO" && etapaJogo.toUpperCase() === "FI" && categoria === "2") {
    const resultado = quantidadeIngressos * fIcomCategoria2
    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: R$", fIcomCategoria2)
    console.log("Valor Total: R$", resultado)
}

else if (tipoJogo.toUpperCase() === "DO" && etapaJogo.toUpperCase() === "FI" && categoria === "3") {
    const resultado = quantidadeIngressos * fIcomCategoria3
    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: R$", fIcomCategoria3)
    console.log("Valor Total: R$", resultado)
}

else if (tipoJogo.toUpperCase() === "DO" && etapaJogo.toUpperCase() === "FI" && categoria === "4") {
    const resultado = quantidadeIngressos * fIcomCategoria4
    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: R$", fIcomCategoria4)
    console.log("Valor Total: R$", resultado)
}


//************************************************************************************************************************//

// ------------------------------------ SEMI-FINAL / IN ------------------------------------------------- //
if (tipoJogo.toUpperCase() === "IN" && etapaJogo.toUpperCase() === "SF" && categoria === "1") {
    const resultado = quantidadeIngressos * sFcomCategoria1 / valorDolar

    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: U$", sFcomCategoria1 / valorDolar)
    console.log("Valor Total: U$", resultado)

} else if (tipoJogo.toUpperCase() === "IN" && etapaJogo.toUpperCase() === "SF" && categoria === "2") {
    const resultado = quantidadeIngressos * sFcomCategoria2 / valorDolar
    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: U$", sFcomCategoria2 / valorDolar)
    console.log("Valor Total: U$", resultado)

} else if (tipoJogo.toUpperCase() === "IN" && etapaJogo.toUpperCase() === "SF" && categoria === "3") {
    const resultado = quantidadeIngressos * sFcomCategoria3 / valorDolar
    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: U$", sFcomCategoria3 / valorDolar)
    console.log("Valor Total: U$", resultado)

} else if (tipoJogo.toUpperCase() === "IN" && etapaJogo.toUpperCase() === "SF" && categoria === "4") {
    const resultado = quantidadeIngressos * sFcomCategoria4 / valorDolar
    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: U$", sFcomCategoria4 / valorDolar)
    console.log("Valor Total: U$", resultado)

    // ------------------------------------ DECISÃO DO TERCEIRO LUGAR / IN --------------------------------------------- //

} else if (tipoJogo.toUpperCase() === "IN" && etapaJogo.toUpperCase() === "DT" && categoria === "1") {
    const resultado = quantidadeIngressos * dTcomCategoria1 / valorDolar
    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: U$", dTcomCategoria1 / valorDolar)
    console.log("Valor Total: U$", resultado)

} else if (tipoJogo.toUpperCase() === "IN" && etapaJogo.toUpperCase() === "DT" && categoria === "2") {
    const resultado = quantidadeIngressos * dTcomCategoria2 / valorDolar
    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: U$", dTcomCategoria2 / valorDolar)
    console.log("Valor Total: U$", resultado)

} else if (tipoJogo.toUpperCase() === "IN" && etapaJogo.toUpperCase() === "DT" && categoria === "3") {
    const resultado = quantidadeIngressos * dTcomCategoria3 / valorDolar
    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: U$", dTcomCategoria3 / valorDolar)
    console.log("Valor Total: U$", resultado)

} else if (tipoJogo.toUpperCase() === "IN" && etapaJogo.toUpperCase() === "DT" && categoria === "4") {
    const resultado = quantidadeIngressos * dTcomCategoria4 / valorDolar
    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: U$", dTcomCategoria4 / valorDolar)
    console.log("Valor Total: U$", resultado)
}


// ------------------------------------------ FINAL // IN --------------------------------------------------------- //
else if (tipoJogo.toUpperCase() === "IN" && etapaJogo.toUpperCase() === "FI" && categoria === "1") {
    const resultado = quantidadeIngressos * fIcomCategoria1 / valorDolar
    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: U$", fIcomCategoria1 / valorDolar)
    console.log("Valor Total: U$", resultado)
}

else if (tipoJogo.toUpperCase() === "IN" && etapaJogo.toUpperCase() === "FI" && categoria === "2") {
    const resultado = quantidadeIngressos * fIcomCategoria2 / valorDolar
    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: U$ ", fIcomCategoria2 / valorDolar)
    console.log("Valor Total: U$", resultado)
}

else if (tipoJogo.toUpperCase() === "IN" && etapaJogo.toUpperCase() === "FI" && categoria === "3") {
    const resultado = quantidadeIngressos * fIcomCategoria3 / valorDolar
    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: U$", fIcomCategoria3 / valorDolar)
    console.log("Valor Total: U$", resultado)
}

else if (tipoJogo.toUpperCase() === "IN" && etapaJogo.toUpperCase() === "FI" && categoria === "4") {
    const resultado = quantidadeIngressos * fIcomCategoria4 / valorDolar
    console.log("----------------- Dados da Compra -----------------------")
    console.log("Nome do cliente: ", nomeCompleto)
    console.log("Tipo do Jogo: ", tipoJogo.toUpperCase())
    console.log("Etapa do Jogo: ", etapaJogo.toUpperCase())
    console.log("Categoria do Jogo: ", categoria)
    console.log("Quantidade dos ingressos: ", quantidadeIngressos)
    console.log("------------------- Valores ----------------------------")

    console.log("Valor do Ingresso: U$", fIcomCategoria4 / valorDolar)
    console.log("Valor Total: U$", resultado)
}

