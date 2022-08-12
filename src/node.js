class Node {

    constructor(pos, parent, child) {
        this.pos = pos
        this.parent = parent
        this.child = child
        // save a list of distances from parents and children?
        this.resources = {}
    }

    get pos () {
        return this.pos
    }

    calcDistance () {
        // going to calculate the distance between two nodes here. 
    }
}