import {Engine} from "/Framework/Morf.js";

export class Scene {

    sceneManager;

    #nodes = {};

    getNode(nodeName) { return this.#nodes[nodeName]; }
    addNode(node) {
        if(!(node instanceof Engine.Node)) {
            console.error("can't add non-node to the scene");
        }
        if(this.#nodes[node.name] !== undefined) {
            console.error("can't add multiple nodes with one name to the scene");
        }

        node.parentScene = this;
        this.#nodes[node.name] = node;
    }
    deleteNode(nodeName) {
        this.#nodes[nodeNmae] = undefined;
    }
    getAllNodes() {
        return this.#nodes;
    }

    constructor(nodes = []) {
        for(let i = 0; i < nodes.length; i++) {
            this.addNode(nodes[i]);
        }
    }

}