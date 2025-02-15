

//=====================================================================
//CLASE ===============================================================
//=====================================================================
class PilaLimitada {
    // Constructor que recibe el límite máximo ==
    constructor(max) {
      this.item = []; 
      this.max = max;
    }
  
    // Método para agregar un elemento a la pila ==
    push(elemento) {

      if (this.item.length >= this.max) {  // Verifica si la pila ya alcanzó el límite máximo ==
        console.error("Error: La pila está llena"); 
        return; 
      }
      this.item.push(elemento); // Agregamos el elemento a la pula ===
    }
  
    // Método para mostrar el contenido actual de la pila ===
    mostrar() {

      console.log(this.item);

    }
  }

//=====================================================================
//USO =================================================================
//=====================================================================
  
let miPila = new PilaLimitada(3);
  
// Insertar elementos en la pila
miPila.push("A"); 
miPila.push("B"); 
miPila.push("C"); 
miPila.push("D"); // Intentamos ingraser un cuarto elemento y nos da error ====
  
// Mostrar el contenido actual de la pila ===
miPila.mostrar();
  