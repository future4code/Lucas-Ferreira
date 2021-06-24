
~~~javascript

function calculaPrecoTotal(quantidade) {
  let custoTotalCompra

  if(quantidade >= 12){
      custoTotalCompra = quantidade * 1.0
      return custoTotalCompra

  } else {
      custoTotalCompra = quantidade * 1.3
      return custoTotalCompra
  }

}

~~~