// EXERCÍCIO 01
function inverteArray(array) {
  let aux
  for(let last = array.length -1; last > 0; last--){
    for(let i = 0; i < last; i++){
      if(array[i] !== array[i+1]){
        aux = array[i]
        array[i] = array[i+1]
        array[i+1] = aux
      }
    }
  }

  return array

}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const numerosElevados = []
  for (let valor of array) {
    if (valor % 2 === 0) {
      const elevado = valor * valor
      numerosElevados.push(elevado)
    }
  }
  return numerosElevados
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const numerosPares = []
  for (let valor of array) {
    if (valor % 2 === 0) {
      const par = valor
      numerosPares.push(par)
    }
  }
  return numerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let numeroMaior = array[0]
  for (numero of array) {
    if (numero > numeroMaior) {
      numeroMaior = numero
    }
  }
  return numeroMaior
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
    let tamanhoArray = array.length

    return tamanhoArray

}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 

  const respostas = [booleano1 && booleano2 && !booleano4, 
                    (booleano1 && booleano2) || !booleano3, 
                    (booleano2 || booleano3) && (booleano4 || booleano1),
                    !(booleano2 && booleano3) || !(booleano1 && booleano3),
                    !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)]

  return respostas


}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const arrayPares = []
  for(i = 0; i < n ; i++){
    arrayPares.push(i * 2)
  }
  return arrayPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
   
   if ((a === b) && (a === c) && (b === c)){
        return 'Equilátero'
  } 

    if ((a === b && a !== c) || (a === c && a !== b) || (c === b && c !== a)) {
        return 'Isósceles'
  } 

    if ( !(a === b) && !(a === c) && !(b === c)){
        return 'Escaleno'
  }

}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  
  let numeroMaior
  let numeroMenorOuIgual
  
    if(num1 > num2){
        numeroMaior = num1
        numeroMenorOuIgual = num2
      } 
        
    else if (num2 > num1){
        numeroMaior = num2
        numeroMenorOuIgual = num1
      } 
     
    else if (num1 === num2){
         numeroMaior = num1
         numeroMenorOuIgual = num2 
      }

  const resultadoDivisel = (numeroMaior % numeroMenorOuIgual === 0)
  const resultadoDiferença = (numeroMaior - numeroMenorOuIgual)

  const objetoVariasOperacoes = {
      maiorNumero: numeroMaior,
      maiorDivisivelPorMenor: resultadoDivisel,
      diferenca: resultadoDiferença
  }

  return objetoVariasOperacoes

}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let aux
  let novoArray = []
  for(let last = array.length -1; last > 0; last--){
    for(let i = 0; i < last; i++){
      if(array[i] > array[i+1]){
        aux = array[i]
        array[i] = array[i+1]
        array[i+1] = aux
      }
    }     
}

  novoArray.push(array[array.length - 2])
  novoArray.push(array[1])

  return novoArray
}

// EXERCÍCIO 11
function ordenaArray(array) {
  let aux
  for(let last = array.length -1; last > 0; last--){
    for(let i = 0; i < last; i++){
      if(array[i] > array[i+1]){
        aux = array[i]
        array[i] = array[i+1]
        array[i+1] = aux
      }
    }     
}
return array

}

// EXERCÍCIO 12
function filmeFavorito() {
 const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
 }
  return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
 }
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const objetoRetangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
 } 

 return objetoRetangulo

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
   pessoa.nome = "ANÔNIMO"
   return pessoa
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const novoArray = arrayDePessoas.filter((elemento) => {
    const adultos = elemento.idade >= 18 
    if(adultos){
      return adultos
    }
 })

 return novoArray
  
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const novoArray = arrayDePessoas.filter((elemento) => {
    const naoAdultos = elemento.idade < 18 
    if(naoAdultos){
      return naoAdultos
    }
 })

 return novoArray
 
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const novoArray = array.map((elemento) => {
     const a = elemento * 2
     return a
  })

  return novoArray
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const novoArray = array.map((elemento) => {
    const a = elemento * 2
    return a.toString()
 })

 return novoArray
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  const novoArray = array.map((elemento) => {
    const par = elemento % 2 === 0
    const impar = elemento % 2 === 1
    if(par){
      return `${elemento} é par`
    } if(impar){
      return `${elemento} é ímpar`

    }
 })
   return novoArray
  }
 


// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const novoArray = pessoas.filter((elemento) => {
    const permissao = elemento.altura >= 1.5 && (elemento.idade > 14 && elemento.idade < 60)
    if(permissao){
      return permissao
    }
 })

 return novoArray

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const novoArray = pessoas.filter((elemento) => {
    const permissao = elemento.altura >= 1.5 && (elemento.idade > 14 && elemento.idade < 60)
    if(!permissao){
      return !permissao
    }
 })

 return novoArray
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  const ordenado = consultasNome.sort(function(a,b){
    if(a.nome > b.nome){
      return 1
    }

    if(a.nome < b.nome){
      return -1
    }
  })
   return ordenado
}
 


// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
//  const novoArray = consultasData.map((elemento) =>{
//    const timeStamp = new Date(elemento.dataDaConsulta).getTime
//    return timeStamp
//  })

//  return novoArray
}

// EXERCÍCIO 20
function calculaSaldo(contas) {
    for(i = 0; i < contas.length ; i++){
      let soma = 0
      for(comprasRealizadas of contas[i].compras){
        soma += comprasRealizadas
      }
      contas[i].saldoTotal = contas[i].saldoTotal - soma
    }

    return contas
}
