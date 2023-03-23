import {Framework} from "/Framework/Framework.js";
import {SceneManager} from "/Framework/SceneManager.js";
import {Scene} from "/Framework/Scene.js";
import {Node} from "/Framework/Node.js";
import {NodeComponent} from "/Framework/NodeComponent.js";
import {Prefab} from "/Framework/Prefab.js";
import {Key} from "/Framework/Key.js";

import {Vector2} from "/Framework/Vector2.js";

import {Transform} from "/Framework/Transform.js";
import {Camera} from "/FrameworkPlugins/Graphics/Camera.js";
import {SpriteRenderer} from "/FrameworkPlugins/Graphics/SpriteRenderer.js";

import {SpriteShape} from "/FrameworkPlugins/Graphics/SpriteShapes/SpriteShape.js";
import {Line} from "/FrameworkPlugins/Graphics/SpriteShapes/Line.js";
import {Polygon} from "/FrameworkPlugins/Graphics/SpriteShapes/Polygon.js";
import {Rectangle} from "/FrameworkPlugins/Graphics/SpriteShapes/Rectangle.js";
import {Arc} from "/FrameworkPlugins/Graphics/SpriteShapes/Arc.js";
import {Circle} from "/FrameworkPlugins/Graphics/SpriteShapes/Circle.js";
import {Text} from "/FrameworkPlugins/Graphics/SpriteShapes/Text.js";

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

class Graphics {
    static components = {
        Camera,
        SpriteRenderer
    }

    static SpriteShape = SpriteShape;

    static spriteShapes = {
        Line,
        Polygon,
        Rectangle,
        Arc,
        Circle,
        Text
    }
}

export {Engine, Graphics, Vector2}