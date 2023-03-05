import {Morf} from "/Framework/Morf.js";


export class Framework {
    
    #sceneManager = null;
    get sceneManager() { return this.#sceneManager; }

    constructor(){
        this.#sceneManager = new Morf.SceneManager;

        requestAnimationFrame(this.update.bind(this));
    }

    update() {
        this.#sceneManager.update();
        // setTimeout(this.update.bind(this), 1000);
        requestAnimationFrame(this.update.bind(this));
    }

}