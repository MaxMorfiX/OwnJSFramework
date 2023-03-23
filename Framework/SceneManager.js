


export class SceneManager {

    framework;
    
    #scenePrefabs = {};
    #currentScene;
    #currentSceneName;
    
    #stopGenerateThisFrame = false;

    addScene(name, scenePrefab) {
        this.#scenePrefabs[name] = scenePrefab;
    }

    runScene(sceneName) {
        if(this.#currentScene) {
            this.#callFunctionOverEveryNodeComponentInScene("whenSceneEnds");
        }

        this.#currentScene = this.#scenePrefabs[sceneName].instantiate();
        this.#currentSceneName = sceneName;
        this.#currentScene.sceneManager = this;

        this.#callFunctionOverEveryNodeComponentInScene("whenSceneStarts");
        this.#callFunctionOverEveryNodeComponentInScene("earlyStart");
        this.#callFunctionOverEveryNodeComponentInScene("start");
        this.#callFunctionOverEveryNodeComponentInScene("lateStart");

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
        this.#callFunctionOverEveryNodeComponentInScene("displayUpdate");

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
    
    constructor(scenes = []) {
        for(let i = 0; i < scenes.length; i++) {
            this.addScene(scene);
        }
    }

}