

//=====================================================================
//CLASE ===============================================================
//=====================================================================
class UndoManager {

    //Inicializa la pila para guardar acciones ==
    constructor() {
        this.actions = []; 
    }
    
    //Agrega una acción a la pila ====
    addaction(action){
        this.actions.push(action);
    }

    //Deshacer la última acción ===
    undo() {
        if (this.actions.length === 0) { //Si n hay acciones nos devuelbe error ==
            console.error("No hay acciones para deshacer");
            return;
        }
        return this.actions.pop(); //devuelve la última acción y la elimina de la pila ====
    }

    //Retornamos historial de acciones ===
    gethistorial(){
        return [... this.actions];
    }
}


//=====================================================================
//USO =================================================================
//=====================================================================

const manager = new UndoManager();

//Agregamos acciones ===
manager.addaction("Escribir 'Hola'");
manager.addaction("Escribir 'Mundo'");

//Imprimimos las acciones ===
console.log(manager.gethistorial());

console.log("DESHACER");

//desacemos última acción ===
manager.undo();

//Imprimimos las acciones ===
console.log(manager.gethistorial());

