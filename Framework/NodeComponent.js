

export class NodeComponent {
    
    #node = null;

    get name() { return this.constructor.name }

    get node() { return this.#node; }
    set node(val) {
        if(this.#node !== null) {
            console.error("can't change parent node of a nodeComponent");
            return
        }

        this.#node = val;
    }

    constructor() {}

    superEarlyUpdate() {}
    earlyUpdate() {}
    update() {}
    lateUpdate() {}
    superLateUpdate() {}

    whenAssigned() {}

    whenSceneEnds() {}
    whenSceneStarts() {}

    earlyStart() {}
    start() {}
    lateStart() {}

}