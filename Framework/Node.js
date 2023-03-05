import {Morf} from "/Framework/Morf.js";


export class Node {

    #name;
    get name() { return this.#name; }
    parentScene;
    sceneManager;

    #components = {};

    constructor(name, components) {
        this.#name = name;

        this.addComponent(new Morf.components.Transform());

        for(let i in components) {
            this.addComponent(components[i]);
        }
    }

    addComponent(component) {
        if(this.#components[component.name] && this.#components[component.name] !== "Transform") {
            console.error("there's aready an instance of the component assigned to the node");
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