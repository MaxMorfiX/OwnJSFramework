import {Camera} from "/FrameworkPlugins/Graphics/Camera.js";
import {SpriteRenderer} from "/FrameworkPlugins/Graphics/SpriteRenderer.js";

import {SpriteShape} from "/FrameworkPlugins/Graphics/SpriteShapes/SpriteShape.js";
import {Line} from "/FrameworkPlugins/Graphics/SpriteShapes/Line.js";
import {Polygon} from "/FrameworkPlugins/Graphics/SpriteShapes/Polygon.js";
import {Rectangle} from "/FrameworkPlugins/Graphics/SpriteShapes/Rectangle.js";
import {Arc} from "/FrameworkPlugins/Graphics/SpriteShapes/Arc.js";
import {Circle} from "/FrameworkPlugins/Graphics/SpriteShapes/Circle.js";
import {Text} from "/FrameworkPlugins/Graphics/SpriteShapes/Text.js";

export class Graphics {
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