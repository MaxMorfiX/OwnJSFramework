import {Morf} from "/Framework/Morf.js";


export class NodeComponent {
    
    #node = null;
    #componentName = null;

    get name() { return this.#componentName }

    get node() { return this.#node; }
    set node(val) {
        if(this.#node !== null) {
            console.error("can't change parent node of a nodeComponent");
            return
        }

        this.#node = val;
    }

    constructor(componentName) {
        this.#componentName = componentName;
    }

    superEarlyUpdate() {}
    earlyUpdate() {}
    update() {}
    lateUpdate() {}
    superLateUpdate() {}

    whenAssigned() {}

    whenSceneEnds() {}
    whenSceneStarts() {}

    start() {}

}