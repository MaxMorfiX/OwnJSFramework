import {Engine} from "/Framework/Morf.js";

export class Framework {
    
    #sceneManager = null;
    get sceneManager() { return this.#sceneManager; }

    #keys = {};

    constructor(){
        this.#sceneManager = new Engine.SceneManager;
        this.sceneManager.framework = this;

        document.addEventListener("keydown", this.onKeyDown.bind(this));
        document.addEventListener("keyup", this.onKeyUp.bind(this));

        let html = document.querySelector("html");
        html.onmousedown = this.onKeyDown.bind(this, {"keyCode": "mouse"});
        html.onmouseup = this.onKeyUp.bind(this, {"keyCode": "mouse"});

        requestAnimationFrame(this.update.bind(this));
    }

    update() {
        this.#sceneManager.update();

        for(let i in this.#keys) {
            let key = this.#keys[i];
            key.update();
        }
        
        // setTimeout(this.update.bind(this), 1000);
        requestAnimationFrame(this.update.bind(this));
    }

    getKeyObject(code) {
        let key = this.#keys[code];

        if(!key) {
            this.#keys[code] = new Engine.Key();
            return this.getKey(code);
        }

        return key;
    }

    getKey(code) {
        return this.getKeyObject(code).isPressed;
    }
    getKeyDown(code) {
        return this.getKeyObject(code).isPressedDown;
    }
    getKeyUp(code) {
        return this.getKeyObject(code).isPressedUp;
    }

    onKeyDown(e) {
        let key = this.getKeyObject(e.keyCode);
        
        if(!key.isPressed) key.pressDown();
    }
    onKeyUp(e) {
        let key = this.getKeyObject(e.keyCode);

        if(key.isPressed) key.pressUp();
    }

}