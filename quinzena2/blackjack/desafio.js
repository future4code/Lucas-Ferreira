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
/// --------------------------- DESAFIO AINDA NÃO CONCLUÍDO -------------------------------------------------- //

// // BOAS VINDAS AO USUÁRIO
// let boasVindas = "Bem vindo ao jogo de Blackjack!"
// console.log(boasVindas)

// // O USUÁRIO QUER OU NÃO INICIAR NOVA RODADA?
// let confirm = prompt("Quer iniciar uma nova rodada?")

// // DECLARANDO VARIÁVEIS DA COMPRA DE CARTAS DO USUÁRIO PARA SER USADA DEPOIS
// let jogador1Compra1
// let jogador1Compra2

// // DECLARANDO VARIÁVEIS DA COMPRA DE CARTAS DO PLAYER PC PARA SER USADA DEPOIS
// let jogadorPcCompra1
// let jogadorPcCompra2

// // DECLARANDO VARIÁVEIS PARA GUARDAR AS PONTUAÇÕES DOS JOGADORES E SEREM USADAS DEPOIS
// let usuarioPontuacao
// let pcPontuacao

// let arrayCartas = []

// // FUNÇÃO QUE CALCULA A PONTUAÇÃO DO USUARIO
// function pontosUsuario (compra1,compra2){
//    usuarioPontuacao = compra1.valor + compra2.valor
//    return usuarioPontuacao
// }

// // FUNÇÃO QUE CALCULA A PONTUAÇÃO DO PC
// function pontosPc (compra1,compra2){
//    pcPontuacao = compra1.valor + compra2.valor
//    return pcPontuacao
// }


// // CALCULANDO QUEM SERÁ O VENCEDOR
// function quemGanhou(pontosTotalJogador, pontosTotalPc){
//    if(pontosTotalJogador > pontosTotalPc) {
//       return "Usuário venceu"
//    } else if (pontosTotalJogador < pontosTotalPc) {
//       return "Computador venceu"
//    } else {
//       return "EMPATE"
//    }
// }

// function pontosUsuarioAposComprarNovasCartas(compra1,compra2,novaCompra){
//    let novaMao = compra1 + compra2 + novaCompra
//    return novaMao
// }

 

// function sortearNovamente (jogadorCompra1,jogadorCompra2, pcCompra1,pcCompra2) {
//    if(
//     (jogadorCompra1.texto === "A♦️" || jogadorCompra1.texto === "A♥️" || jogadorCompra1.texto === "A♣️" || jogadorCompra1.texto === "A♠️" &&
//     jogadorCompra2.texto === "A♦️" || jogadorCompra2.texto === "A♥️" || jogadorCompra2.texto === "A♣️" || jogadorCompra2.texto === "A♠️") 
    
//     || 
    
//     (pcCompra1.texto === "A♦️" || pcCompra1.texto === "A♥️" || pcCompra1.texto === "A♣️" || pcCompra1.texto === "A♠️" &&
//     pcCompra2.texto === "A♦️" || pcCompra2.texto === "A♥️" || pcCompra2.texto === "A♣️" || pcCompra2.texto === "A♠️")){

//       jogador1Compra1 = comprarCarta()
//       console.log("Entrou aqui",jogador1Compra1.texto)
   
//       jogador1Compra2 = comprarCarta()
//       console.log("Entrou aqui",jogador1Compra2.texto)
      
//       jogadorPcCompra1 = comprarCarta()
//       console.log("Entrou aqui",jogadorPcCompra1.texto)

//       jogadorPcCompra2 = comprarCarta()
//       console.log("Entrou aqui",jogadorPcCompra2.texto)
      
//    }

// }
/// --------------------------- DESAFIO AINDA NÃO CONCLUÍDO -------------------------------------------------- //
// ----------------------------------------- HORA DO JOGO ------------------------------------------------------- //

// // NOVA RODA SENDO INICIADA
// if (confirm == "sim") {
   

//    // Comprando as cartas do Usuário 
//    jogador1Compra1 = comprarCarta()
//    jogador1Compra2 = comprarCarta()

//   arrayCartas.push(jogador1Compra1,jogador1Compra2)

//    // Comprando as cartas do Pc
//    jogadorPcCompra1 = comprarCarta()
//    jogadorPcCompra2 = comprarCarta()


//    // CONDIÇÃO QUE TESTA SE AS DUAS CARTAS DO USUÁRIO OU DO PC, SÃO ÁS, CASO SIM, NOVAS CARTAS SÃO SORTEADAS PRO JOGO
//    if (
//    // Verificando se as duas cartas do usuário são ÁS
//    (jogador1Compra1.texto === "A♦️" || jogador1Compra1.texto === "A♥️" || jogador1Compra1.texto === "A♣️" || jogador1Compra1.texto === "A♠️" &&
//       jogador1Compra2.texto === "A♦️" || jogador1Compra2.texto === "A♥️" || jogador1Compra2.texto === "A♣️" || jogador1Compra2.texto === "A♠️")
      
//       ||
//       // Verificando se as duas cartas do player PC são ÁS
//    (jogadorPcCompra1.texto === "A♦️" || jogadorPcCompra1.texto === "A♥️" || jogadorPcCompra1.texto === "A♣️" || jogadorPcCompra1.texto === "A♠️" &&
//       jogadorPcCompra2.texto === "A♦️" || jogadorPcCompra2.texto === "A♥️" || jogadorPcCompra2.texto === "A♣️" || jogadorPcCompra2.texto === "A♠️")  ) {
      
//       // Sorteando novamente as cartas do usuário
//       jogador1Compra1 = comprarCarta()
//       //console.log("entrou aqui", jogador1Compra1.texto)
//       jogador1Compra2 = comprarCarta()
//       //console.log("entrou aqui", jogador1Compra2.texto)
      
//       // Sorteando novamente as cartas do player PC
//       jogadorPcCompra1 = comprarCarta()
//       //console.log("entrou aqui", jogadorPcCompra1.texto)
//       jogadorPcCompra2 = comprarCarta()
//       //console.log("entrou aqui", jogadorPcCompra2.texto)
      
//       arrayCartas.push(jogador1Compra1,jogador1Compra2)
      
      
     
         
      
          
            

//             // frase = frase + arrayCartas.toString.texto
//             // console.log(frase)
            
            


         
      
//             } else {
//                console.log(confirm = prompt("Suas cartas são" + jogador1Compra1.texto + jogador1Compra2.texto + ". A carta revelada do computador é " + jogadorPcCompra1.texto + "." + "\n" + "Deseja comprar mais uma carta?"))
//                let soma = 0
//                let frase = ""

//                while(confirm === "sim" && soma < 21){
//                   for(let i = 0; i <arrayCartas.length; i++){
//                      soma += arrayCartas[i].valor
//                      frase = frase + arrayCartas[i].texto 

               
//                   }
                  
                 

//                }

//                if(soma === 21){
//                   console.log("A SOMA DEU 21 E SAIU")
//                }
               
               
               
                  
//             //    
               
//             //    let soma
//             //    let i
            
//             //    let frase = ""
               
//             //      while(i < arrayCartas.length) {
//             //       jogador1CompraNovaCarta = comprarCarta()
//             //       arrayCartas.push(jogador1CompraNovaCarta)
//             //       soma += arrayCartas[i].valor
//             //       console.log("entrou aqui")
            
//             //       while(soma < 21){
//             //          soma += arrayCartas[i].valor
//             //          frase = frase + arrayCartas[i].texto 
//             //          console.log(confirm = prompt("Suas cartas são" + frase + ". A carta revelada do computador é " + jogadorPcCompra1.texto + "." + "\n" + "Deseja comprar mais uma carta?" + "Entrou prompt do while"))
//             //      }
//             //    }
//             // }

//       }
//    }
   

//    // Guardando o resultado das pontuações de cada player para ser usado depois
//    // let resultadoUsuario = pontosUsuario(jogador1Compra1, jogador1Compra2)
//    // let resultadoPc = pontosPc(jogadorPcCompra1, jogadorPcCompra2)

//    // // Imprimindo as cartas sorteadas e as pontuações respectivas a cada jogador
//    // console.log('Usuário - cartas: ', jogador1Compra1.texto, jogador1Compra2.texto, " - ", "pontuação - ", resultadoUsuario)
//    // console.log('Computador - cartas: ', jogadorPcCompra1.texto, jogadorPcCompra2.texto, " - ", "pontuação - ", resultadoPc)

//    // // Imprimindo quem foi o ganhador do BlackJack
//    // console.log(quemGanhou(resultadoUsuario, resultadoPc))
      
    
//    // // CONDIÇÃO ONDE NENHUM DOS USUÁRIOS TIVERAM SUAS DUAS CARTAS SORTEADAS COMO ÁS

   
//    //    let r = j + pontosUsuario
//    //    for(let j; pontosUsuario < 21; r){
//    //       console.log(prompt("Suas cartas são" + jogador1Compra1.texto + jogador1Compra2.texto + ". A carta revelada do computador é " + jogadorPcCompra1.texto + "." + "\n" + "Deseja comprar mais uma carta?"))
//    //    }

//    //    console.log("saiu")
     
//    //    // // Guardando o resultado das pontuações de cada player para ser usado depois
//    //    // let resultadoUsuario = pontosUsuario(jogador1Compra1, jogador1Compra2)
//    //    // let resultadoPc = pontosPc(jogadorPcCompra1, jogadorPcCompra2)

//    //    // // Imprimindo as cartas sorteadas e as pontuações respectivas a cada jogador
//    //    // console.log('Usuário - cartas: ', jogador1Compra1.texto, jogador1Compra2.texto, " - ", "pontuação - ", resultadoUsuario)
//    //    // console.log('Computador - cartas: ', jogadorPcCompra1.texto, jogadorPcCompra2.texto, " - ", "pontuação - ", resultadoPc)

//    //    // // Imprimindo quem foi o ganhador do BlackJack
//    //    // console.log(quemGanhou(resultadoUsuario, resultadoPc))

//    // }

/// --------------------------- DESAFIO AINDA NÃO CONCLUÍDO -------------------------------------------------- //

// // O USUÁRIO NÃO QUIS ENTRAR MAIS NO JOGO
// if (confirm === "não") {
//    console.log("O jogo acabou")
// }

  /// --------------------------- DESAFIO AINDA NÃO CONCLUÍDO -------------------------------------------------- //








