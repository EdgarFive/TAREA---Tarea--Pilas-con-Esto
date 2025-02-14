
//console.log("Hola Mundo");

//=====================================================================
//CLASE ===============================================================
//=====================================================================
class pila {
    constructor() {
      // Array para almacenar los elementos de la pila ==
      this.item = [];
    }
  
    // Agregar el número o elemento a la pila ==
    push(elemento) {
      this.item.push(elemento);
    }
  
    // Eliminar el último elemento de la pila y retornarlo ==
    pop() {
      if (this.item.length === 0) {
        return "La pila está vacía.";
      }
      return this.item.pop();
    }
  
    // Retorna el elemento en la cima de la pila sin eliminarlo ==
    peek() {
      return this.item[this.item.length - 1];
    }
  
    // Verifica si la pila está vacía ==
    isEmpty() {
      return this.item.length === 0;
    }
  
    // Muestra el contenido de la pila ==
    mostrar() {
      console.log(this.item);
    }
  }

  
//=====================================================================
//FUNCION =============================================================
//=====================================================================
function evaluar(expresion){

    // Crear una nueva instancia de la clase pila ==
    let pilaExp = new pila();

    // Dividir la expresión en tokens == 
    let tokens = expresion.split(" ");

    //Recorremos pada caracter de le expresión ==
    for(let token of tokens){
        //si el token es un número, se combierte en uno y se apila ==
        if (!isNaN(token)){
            pilaExp.push(Number(token))
        }else{
            //si el token es un operador, se desapilan los dos ultimos que deben ser números===
            let operando2 = pilaExp.pop();
            let operando1 = pilaExp.pop();

            let resultado;

            // Evaluar la operación según el operador ==
            switch (token) {
                case '+':
                    resultado = operando1 + operando2;
                    break;
                case '-':
                     resultado = operando1 - operando2;
                    break;
                case '*':
                    resultado = operando1 * operando2;
                    break;
                case '/':
                    resultado = operando1 / operando2;
                    break;
                default:
                    console.error("Operador desconocido: " + token);
                    return null;

            }
            //obtenemos el resultado en la variable que creamos arriba ==
            pilaExp.push(resultado);
        }
    }

    return pilaExp.pop();
}

 
//=====================================================================
//USO =================================================================
//=====================================================================
let expresionPostfija = "3 4 + 5 *";
//Ejecutamos la función ==
let resultado = evaluar(expresionPostfija);

//Mostramos el resultado en pantalla ==
console.log("El resultado de la expresión postfija '" + expresionPostfija + "' es: " + resultado);