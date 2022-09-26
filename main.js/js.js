let nombre= prompt("Ingrese su nombre:");

function saludo(){
    alert("Bienvenido/a " + nombre + " a La Cafetería!")
}

saludo();

let ordenar= prompt("Desea ordenar? Seleccione una opción: \n1-Si \n2-No");

if(ordenar == 1 ){

let promo= prompt("Seleccione una promoción: \n1-Café + Croissant \n2-Café + Cheescake \n3-Jugo de Naranja + Porción de Carrot Cake. \nPresione x para salir.");

while(promo != "x" && promo != "X"){

    switch(promo){
        case "1":
            alert("Seleccionaste Café + Croissant");
            
            break;
        
        case "2":

            alert("Seleccionaste Café + Cheescake");
            
             break;
        
        case "3":

            alert("Seleccionaste Jugo de Naranja + porción de Carrot Cake");

            break;
        
        default:
            alert("Opción no válida, seleccione un número de promoción");

            
    }

        let seguir= prompt("Desea seguir comprando? \n1-Si \n2-No");

        if(seguir == 2){
            alert("Gracias por su compra! Su pedido estará listo en un momento.")

            break;
        
        }else if (seguir != 1 && seguir != 2){
            
            alert("Opción no válida, inténtelo de nuevo.")
            
        }

        promo= prompt("Seleccione una promoción: \n1-Café + Croissant \n2-Café + Cheescake \n3-Jugo de Naranja + Porción de Carrot Cake. \nPresione x para salir.");

    }
        }else if(ordenar == 2){
            alert("Gracias por tu visita, lo esperamos de nuevo.");

        }else{
            alert("Opción no válida, inténtelo de nuevo.");
            
}
