import {Framework} from "/Framework/Framework.js";
import {SceneManager} from "/Framework/SceneManager.js";
import {Scene} from "/Framework/Scene.js";
import {Node} from "/Framework/Node.js";
import {NodeComponent} from "/Framework/NodeComponent.js";
import {Prefab} from "/Framework/Prefab.js";
import {Key} from "/Framework/Key.js";

import {Vector2} from "/FrameworkPlugins/Vector2.js";

import {Transform} from "/FrameworkPlugins/Transform.js";
import {Camera} from "/FrameworkPlugins/Camera.js";
import {SpriteRenderer} from "/FrameworkPlugins/SpriteRenderer.js";

import {SpriteShape} from "/FrameworkPlugins/SpriteShapes/SpriteShape.js";
import {Line} from "/FrameworkPlugins/SpriteShapes/Line.js";
import {Polygon} from "/FrameworkPlugins/SpriteShapes/Polygon.js";
import {Rectangle} from "/FrameworkPlugins/SpriteShapes/Rectangle.js";

export class Morf {
    static Framework = Framework;
    static SceneManager = SceneManager;
    static Scene = Scene;
    static Node = Node;
    static NodeComponent = NodeComponent;
    static Prefab = Prefab;

    static Vector2 = Vector2;
    static Key = Key;

    static components = {
        "Transform": Transform,
        "Camera": Camera,
        "SpriteRenderer": SpriteRenderer,
    }

    static SpriteShape = SpriteShape;

    static spriteShapes = {
        "Line": Line,
        "Polygon": Polygon,
        "Rectangle": Rectangle,
    }
}