


export class Scene {

    name;
    #nodes = {};

    getNode(nodeName) { return this.#nodes[nodeName]; }
    addNode(node) {
        if(node instanceof Morf.Node) {
            console.error("can't add non-node to the scene");
        }
        if(this.#nodes[node.name] !== undefined) {
            console.error("can't add multiple nodes with one name to the scene");
        }

        this.#nodes[node.name] = node;
    }
    deleteNode(nodeName) {
        this.#nodes[nodeNmae] = undefined;
    }
    getAllNodes() {
        return this.#nodes;
    }

    constructor(name, nodes) {
        this.name = name;
        this.#nodes = nodes;
    }

}