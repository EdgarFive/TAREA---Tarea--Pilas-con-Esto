

//=====================================================================
//CLASE ===============================================================
//=====================================================================
class UndoManager {

    //Inicializa la pila para guardar acciones ==
    constructor() {
        this.actions = []; 
    }
    
    //Agrega una acción a la pila ====
    addAction(action){
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
    getHistory(){
        return [... this.actions];
    }
}


//=====================================================================
//USO =================================================================
//=====================================================================

const manager = new UndoManager();

//Agregamos acciones ===
manager.addAction("Escribir 'Hola'");
manager.addAction("Escribir 'Mundo'");

//Imprimimos las acciones ===
console.log(manager.getHistory());

console.log("DESHACER");

//desacemos última acción ===
manager.undo();

//Imprimimos las acciones ===
console.log(manager.getHistory());

