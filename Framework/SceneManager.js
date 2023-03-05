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
        if(this.#currentScene) {
            this.#callFunctionOverEveryNodeComponentInScene("whenSceneEnds");
        }

        this.#currentScene = this.#scenes[sceneName];

        this.#callFunctionOverEveryNodeComponentInScene("whenSceneStarts");
    }

    update() {
        if(this.#currentScene === null) return;

        this.#callFunctionOverEveryNodeComponentInScene("superEarlyUpdate");
        this.#callFunctionOverEveryNodeComponentInScene("earlyUpdate");
        this.#callFunctionOverEveryNodeComponentInScene("update");
        this.#callFunctionOverEveryNodeComponentInScene("lateUpdate");
        this.#callFunctionOverEveryNodeComponentInScene("superLateUpdate");


    }

    #callFunctionOverEveryNodeComponentInScene(functionName, scene = this.#currentScene) {
        let nodes = scene.getAllNodes();

        for(let i in nodes) {
            let node = nodes[i];
            let comopnents = node.getAllComponents();

            for(let i in comopnents) {
                let component = comopnents[i];

                component[functionName]();
            }
        }
    }
    
    constructor(scenes) {
        for(let i in scenes) {
            this.addScene(scene);
        }
    }

}