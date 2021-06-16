// ------------------------ EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO ---------------------//

// 1) a)

//   { nome: "Amanda Rangel", apelido: "Mandi" } 0
 
//   { nome: "Amanda Rangel", apelido: "Mandi" }
//   { nome: "Laís Petra", apelido: "Laura" }
//   { nome: "Letícia Chijo", apelido: "Chijo" }
 
//   { nome: "Laís Petra", apelido: "Laura" } 1

//   { nome: "Amanda Rangel", apelido: "Mandi" }
//   { nome: "Laís Petra", apelido: "Laura" }
//   { nome: "Letícia Chijo", apelido: "Chijo" }

//   { nome: "Letícia Chijo", apelido: "Chijo" } 2
  
//   { nome: "Amanda Rangel", apelido: "Mandi" }
//   { nome: "Laís Petra", apelido: "Laura" }
//   { nome: "Letícia Chijo", apelido: "Chijo" }

//2) a) [Amanda Rangel, Laís Petra, Letícia Chijo]

// 3) a) [{nome: "Laís Petra", apelido: "Laura"} {nome: "Letícia Chijo", apelido: "Chijo"}]


// ------------------------ EXERCICIOS DE ESCRITA DE CÓDIGO ---------------------//

//1)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// a)
/*  const arrayNomeDoguinhos = pets.map((inputNome) =>{
      return inputNome.nome })

 console.log(arrayNomeDoguinhos) */

// b)
/*
const arraySalsicha = pets.filter((inputSalsicha) =>{
    return inputSalsicha.raca === "Salsicha" })

console.log(arraySalsicha)
*/


//c)
/*=
const arrayDescontoPoodle = pets.filter((inputPoodle) =>{
    return inputPoodle.raca === "Poodle"   
}).map((inputPoodle) =>{
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${inputPoodle.nome}`

})

console.log(arrayDescontoPoodle) */

//---------------------------------------------------------------------------------------------------------//
//2)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // a) 
 /*
 const arrayNomeDeCadaItem = produtos.map( (item) =>{
           return item.nome
 })

 console.log(arrayNomeDeCadaItem) */

// b)
/*
 const arrayCadaItemDesconto = produtos.map((item) =>{
        return {nome: item.nome, preco: 0.95 * item.preco} })

 console.log(arrayCadaItemDesconto)

*/

// c)
/*
const arrayBebidas = produtos.filter((item) => {
     return item.categoria === "Bebidas"
 })

console.log(arrayBebidas)
*/


// d)
/*
const arrayYpe = produtos.filter((item) =>{
    return item.nome.includes("Ypê")
})

console.log(arrayYpe)
*/

// e)

/*
const arrayCompraYpe = produtos.filter((item) =>{
    return item.nome.includes("Ypê")
}).map((item) =>{
    return `Compre ${item.nome} por R$${item.preco}`
})

console.log(arrayCompraYpe)
*/






