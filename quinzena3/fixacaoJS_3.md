
~~~javascript

function calculaNota(ex, p1, p2) {
    let dividendo = (ex * 1) + (p1 * 2) + (p2 * 3)
    let divisores = 1 + 2 + 3
    let mediaPonderada = dividendo / divisores
   
    if(mediaPonderada >= 9){
      return "A"
    }
    else if(mediaPonderada < 9 && mediaPonderada >= 7.5){
      return "B"
      
    }
    else if(mediaPonderada < 7.5 && mediaPonderada >= 6){
      return "C"
      
    }
    else if(mediaPonderada < 6){
      return "D"

    }      
   
 }

 ~~~