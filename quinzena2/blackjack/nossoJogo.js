/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
   console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */ 



// -------------------------------------------------- COMEÇANDO ------------------------------------------- //


// BOAS VINDAS AO USUÁRIO
let boasVindas = "Bem vindo ao jogo de Blackjack!"
console.log(boasVindas)

// O USUÁRIO QUER OU NÃO INICIAR NOVA RODADA?
let confirm = prompt("Quer iniciar uma nova rodada?")

// DECLARANDO VARIÁVEIS DA COMPRA DE CARTAS DO USUÁRIO PARA SER USADA DEPOIS
let jogador1Compra1
let jogador1Compra2

// DECLARANDO VARIÁVEIS DA COMPRA DE CARTAS DO PLAYER PC PARA SER USADA DEPOIS
let jogadorPcCompra1
let jogadorPcCompra2

// DECLARANDO VARIÁVEIS PARA GUARDAR AS PONTUAÇÕES DOS JOGADORES E SEREM USADAS DEPOIS
let usuarioPontuacao
let pcPontuacao

// FUNÇÃO QUE CALCULA A PONTUAÇÃO DO USUARIO
function pontosUsuario (compra1,compra2){
   usuarioPontuacao = compra1.valor + compra2.valor
   return usuarioPontuacao
}

// FUNÇÃO QUE CALCULA A PONTUAÇÃO DO PC
function pontosPc (compra1,compra2){
   pcPontuacao = compra1.valor + compra2.valor
   return pcPontuacao
}


// CALCULANDO QUEM SERÁ O VENCEDOR
function quemGanhou(pontosTotalJogador, pontosTotalPc){
   if(pontosTotalJogador > pontosTotalPc) {
      return "Usuário venceu"
   } else if (pontosTotalJogador < pontosTotalPc) {
      return "Computador venceu"
   } else {
      return "EMPATE"
   }
}

// ----------------------------------------- HORA DO JOGO ------------------------------------------------------- //

// NOVA RODA SENDO INICIADA
if (confirm === "sim") {

  // Comprando as cartas do Usuário 
  jogador1Compra1 = comprarCarta()
  jogador1Compra2 = comprarCarta()

   // Comprando as cartas do Pc
  jogadorPcCompra1 = comprarCarta()
  jogadorPcCompra2 = comprarCarta()
  
  // Guardando o resultado das pontuações de cada player para ser usado depois
  let resultadoUsuario = pontosUsuario(jogador1Compra1,jogador1Compra2)
  let resultadoPc = pontosPc(jogadorPcCompra1,jogadorPcCompra2)
  
  // Imprimindo as cartas sorteadas e as pontuações respectivas a cada jogador
  console.log('Usuário - cartas: ', jogador1Compra1.texto, jogador1Compra2.texto, " - ", "pontuação - ", resultadoUsuario)
  console.log('Computador - cartas: ', jogadorPcCompra1.texto, jogadorPcCompra2.texto, " - ", "pontuação - ", resultadoPc)

  // Imprimindo quem foi o ganhador do BlackJack
  console.log(quemGanhou(resultadoUsuario,resultadoPc))
}

// O USUÁRIO NÃO QUIS ENTRAR MAIS NO JOGO
if (confirm === "não"){
   console.log("O jogo acabou")
}

  

