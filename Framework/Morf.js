import {Framework} from "/Framework/Framework.js";
import {SceneManager} from "/Framework/SceneManager.js";
import {Scene} from "/Framework/Scene.js";
import {Node} from "/Framework/Node.js";
import {NodeComponent} from "/Framework/NodeComponent.js";
import {Prefab} from "/Framework/Prefab.js";
import {Key} from "/Framework/Key.js";

import {Vector2} from "/Framework/Vector2.js";
import {Transform} from "/Framework/Transform.js";

import {Graphics} from "/FrameworkPlugins/Graphics/Graphics.js";

class Engine {
    static Framework = Framework;
    static SceneManager = SceneManager;
    static Scene = Scene;
    static Node = Node;
    static NodeComponent = NodeComponent;
    static Prefab = Prefab;

    static Vector2 = Vector2;
    static Key = Key;

    static components = {
        "Transform": Transform
    }
}

export {Engine, Graphics, Vector2}
