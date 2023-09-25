// The Memento pattern provides temporary storage as well as restoration of an object.

// Code example:

class Originator {
    constructor() {
        console.log('Originator created');
    }

    returnState (Memento){
        this.state = Memento.GetState();
        console.log('State= ' + this.state);
    }

    newValue (state){
        return new Memento(state);
    }
}

class Memento {
    constructor(state) {
        this.state = state;
        console.log('Memento created. State= ' + this.state);
    }

    GetState (){
        return this.state;
    }

    SetState (state){
        this.state = state;
    }
}

class Caretaker {
    constructor() {
        console.log('Caretaker created');
        this.mementos = [];
        this.indexMementos = false;
    }

    SaveState(memento) {
        console.log('Caretaker SaveState');
        this.mementos.push(memento);
    }

    getBackMemento() {
        if (this.indexMementos === false) {
            this.indexMementos = this.mementos.length-2;
        } else if (this.indexMementos > 0) {
            this.indexMementos = this.indexMementos-1;
        }
        return this.mementos[this.indexMementos];
    }
    getForwardMemento() {
        if (this.indexMementos >= 0 && this.indexMementos <= this.mementos.length-2) {
            this.indexMementos = this.indexMementos+1;
        }
        return this.mementos[this.indexMementos];
    }
}

let caretaker = new Caretaker();
let originator = new Originator();
const val = originator.newValue('a');
caretaker.SaveState(val);
caretaker.SaveState(originator.newValue('b'));
caretaker.SaveState(originator.newValue('c'));
originator.returnState(caretaker.getBackMemento());
originator.returnState(caretaker.getBackMemento());
originator.returnState(caretaker.getForwardMemento());
originator.returnState(caretaker.getForwardMemento());

let caretaker1 = new Caretaker();
let originator1 = new Originator();
caretaker1.SaveState(originator1.newValue('z'));
caretaker1.SaveState(originator1.newValue('zzzz'));
originator1.returnState(caretaker1.getBackMemento());
console.log(originator.state);
console.log(originator1.state);
