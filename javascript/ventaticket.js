function resumenFuncion() {
    let cantida =  document.getElementById("cantidaticket").value;
    let cate = document.getElementById("categoria");
    let categorias = cate.options[cate.selectedIndex].text;
    let valor=0;
    let numero= parseInt(cantida);
    
    if ( isNaN(numero)){
        alert("EN CANTIDAD INGRESE SOLO NUMEROS ENTEROS");
    }else{
        switch (categorias) {
               case "Estudiante":
                    valor= parseInt(cantida)*200*0.2;
                    document.getElementById("ptotal").innerHTML="Total a Pagar: $"+valor;
                    break;
              case "Trainee":
                   valor = parseInt(cantida)*200*0.5; 
                   document.getElementById("ptotal").innerHTML="Total a Pagar: $"+valor;
                   break;
             case "Junior":
                   valor = parseInt(cantida)*200*0.85; 
                   document.getElementById("ptotal").innerHTML="Total a Pagar: $"+valor;
                   break;
             default:
                   break;
        }/* fin del switch */
   }/* fin del else */
}/* fin funcion */
function borraresumen() {
      document.getElementById("ptotal").innerHTML="Total a Pagar: $";      
      
}
