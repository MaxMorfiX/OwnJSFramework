import {Morf} from "/Framework/Morf.js";


export class SceneManager {
    
    #scenePrefabs = {};
    #currentScene;
    #currentSceneName;
    
    #stopGenerateThisFrame = false;

    addScene(name, scene) {
        this.#scenePrefabs[name] = scene;
        scene.sceneManager = this;
    }

    runScene(sceneName) {
        if(this.#currentScene) {
            this.#callFunctionOverEveryNodeComponentInScene("whenSceneEnds");
        }

        this.#currentScene = this.#scenePrefabs[sceneName].instantiate();
        this.#currentSceneName = sceneName;
        this.#currentScene.sceneManager = this;

        this.#callFunctionOverEveryNodeComponentInScene("whenSceneStarts");

        this.#stopGenerateThisFrame = true;
    }

    reloadScene() {
        this.runScene(this.#currentSceneName);
    }

    update() {
        if(this.#currentScene === null) return;

        this.#callFunctionOverEveryNodeComponentInScene("superEarlyUpdate");
        this.#callFunctionOverEveryNodeComponentInScene("earlyUpdate");
        this.#callFunctionOverEveryNodeComponentInScene("update");
        this.#callFunctionOverEveryNodeComponentInScene("lateUpdate");
        this.#callFunctionOverEveryNodeComponentInScene("superLateUpdate");

        this.#stopGenerateThisFrame = false;
    }

    #callFunctionOverEveryNodeComponentInScene(functionName, scene = this.#currentScene) {
        let nodes = scene.getAllNodes();

        for(let i in nodes) {

            if(this.#stopGenerateThisFrame) return;

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