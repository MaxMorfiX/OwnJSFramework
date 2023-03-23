import {Engine} from "/Framework/Morf.js";


export class Node {

    #name;
    get name() { return this.#name; }
    parentScene;

    #components = {};

    constructor(name, components = []) {
        this.#name = name;
        
        for(let i = 0; i < components.length; i++) {
            this.addComponent(components[i]);
        }

        if(!this.getComponent("Transform")) {
            this.addComponent(new Engine.components.Transform());
        }

        components = this.getAllComponents();

        for(let i = 0; i < components.length; i++) {
            let component = components[i];
            component.whenAssigned();
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
        if(this.#components[componentName]) {
            return this.#components[componentName];
        }

        return this.#components[componentName];
        // console.error("can't find component '" + componentName + "' in " + this.name);
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