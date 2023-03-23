import {Polygon} from "/FrameworkPlugins/Graphics/SpriteShapes/Polygon.js";
import {Vector2} from "/Framework/Vector2.js";

export class Rectangle extends Polygon {
    
    constructor(point1, point2, params) {

        params.isClosed = true;

        super([
            new Vector2(point1.x, point1.y),
            new Vector2(point1.x, point2.y),
            new Vector2(point2.x, point2.y),
            new Vector2(point2.x, point1.y),
        ], params);
    }
    
}