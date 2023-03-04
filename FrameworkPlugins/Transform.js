import {Morf} from "/Framework/Morf.js";

import {NodeComponent} from "/Framework/NodeComponent.js";

export class Transform extends NodeComponent {

    #position = new Morf.Vector2();
    #rotation = 0;
    #scale = new Morf.Vector2();

    get position() { return this.#position; }
    set position(val) {
        this.move(val - this.#position);
    }

    get rotation() { return this.#rotation; }
    set rotation(val) {
        this.rotate(val - this.#rotation);
    }

    get size() { return this.#scale; }
    set size(val) { this.#scale = val; }

    move(vec) {
        for(let i in this.#children) {
            this.#children[i].move(vec);
        }
        
        this.#position += vec;
    }

    rotate(rad, center = this.position) {
        
        for(let i in this.#children) {
            this.#children[i].rotate(rad, center);
        }
        
        this.rotation += rad;
        if(center = this.position) return;

        //TODO: rotation around a center to change position
    }

    scale(vec, center = this.position) {
        for(let i in this.#children) {
            this.#children[i].scale(vec, center);
        }
        
        this.scale += vec;
        //TODO: scale around a center to change position
    }

    #parent;
    
    get parent() { return this.#parent; }
    set parent(parent) {
        if(!(parent instanceof Transform)) {
            return;
        }

        this.#parent = parent;

        if(parent.getChild(this.node.name) === this) return;

        parent.addChild(this);
    }

    #children = {};

    addChild(child) {
        this.#children[child.node.name] = child;

        if(child.parent === this) return;

        child.parent = this;
    }
    
    getChild(name) {
        return this.#children[name];
    }

    constructor(position, rotation, scale, parent) {
        this.position = position || new Morf.Vector2();
        this.rotation = rotation || 0;
        this.scale = scale || new Morf.Vector2();

        if(!(parent instanceof Transform)) {
            this.parent = this.node.parentScene;
            return;
        }

        this.parent = parent;
    }

}