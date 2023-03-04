import {Morf} from "/Morf.js";


export class Framework {
    
    #sceneManager = null;
    get sceneManager() { return this.#sceneManager; }

    constructor(){
        this.#sceneManager = new Morf.SceneManager;

        requestAnimationFrame(this.update.bind(this));
    }

    update() {
        this.#sceneManager.update();
        requestAnimationFrame(this.update.bind(this));
    }

}