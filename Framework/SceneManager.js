import {Morf} from "/Framework/Morf.js";


export class SceneManager {
    
    #scenes = {};
    #currentScene;

    addScene(scene) {
        if(scene instanceof Morf.Scene) {
            this.#scenes[scene.name] = scene;
            scene.sceneManager = this;
        }
    }

    runScene(sceneName) {
        this.#currentScene = this.#scenes[sceneName];
    }

    update() {
        if(this.#currentScene === null) return;

        for(let i in this.#currentScene.getAllNodes()) {
            this.#currentScene.getAllNodes()[i].update();
        }
    }
    
    constructor(scenes) {
        for(let i in scenes) {
            this.addScene(scene);
        }
    }

}