


export class Node {
    name;
    #components = {};

    constructor(name, components) {
        this.name = name;
        this.#components = components;

        for(let i in this.#components) {
            this.#components[i].node = this;
        }
    }

    addComponent(component) {
        if(this.#components[component.name]) {
            console.error("there's lready an instance of the component assigned to the node");
            return;
        }
        
        this.#components[component.name] = component;
        component.node = this;
    }

    getComponent(componentName) {
        return this.#components[componentName];
    }

    deleteComponent(componentName) {
        this.#components[componentName] = null;
    }

    getAllComponents() {
        return this.#components;
    }

    update() {
        for(let i in this.#components) {
            this.#components[i].update();
        }
    }

}