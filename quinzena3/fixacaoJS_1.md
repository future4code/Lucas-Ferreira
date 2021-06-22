
~~~javascript

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {

 const salarioFixo = 2000
 
 let percentagem = 0.05 * valorTotalVendas
 let valorSobreCarrosVendidos = 100 * qtdeCarrosVendidos
 
 let comissao = valorSobreCarrosVendidos + percentagem
 
 let salarioFinalMes = salarioFixo + comissao
 
 
 return salarioFinalMes
 
}

~~~
