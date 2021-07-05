~~~javascript

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
       let novoArray = []
        for(let i = 0 ; i < arrayDeNumeros.length; i++){
        if(arrayDeNumeros[i] === numeroEscolhido){
                novoArray.push(arrayDeNumeros[i])
            }
        }

        if (numeroEscolhido === novoArray[0]){
            return `O número ${numeroEscolhido} aparece ${novoArray.length}x`
        } else if(numeroEscolhido !== novoArray[0]){
            return "Número não encontrado"
        }

  
}

~~~