import {Morf} from "/Framework/Morf.js";

export class Prefab {

    whenInstantiated() {}

    constructor(whenInstantiated) {
        this.whenInstantiated = whenInstantiated;
    }

    instantiate() {
        return this.whenInstantiated();
    }
}