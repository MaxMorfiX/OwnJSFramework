import {Arc} from "/FrameworkPlugins/Graphics/SpriteShapes/Arc.js";

export class Circle extends Arc {
    
    constructor(pos, radius, params = {}) {
        super(pos, radius, 0, 2*Math.PI, params);
    }
    
}