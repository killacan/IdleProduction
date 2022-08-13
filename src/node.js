class Node {

    constructor(pos, parents, children) {
        this.pos = pos
        this.parents = parents
        this.children = children
        // save a list of distances from parents and children?
        this.resources = {}
    }

    get pos () {
        return this.pos
    }

    

}