import {SpriteShape} from "/FrameworkPlugins/SpriteShapes/SpriteShape.js";
import {Vector2} from "/FrameworkPlugins/Vector2.js";

export class Line extends SpriteShape {
    pos1 = new Vector2();
    pos2 = new Vector2();
    
    constructor(pos1, pos2, params = {}) {
        
        if(!pos1 || !pos2) {
            console.error("You need to set positions of line");
        }
        
        super(params);
        
        this.pos1 = pos1;
        this.pos2 = pos2;
        
    }
    
    draw(camera, SpriteRenderer) {
        let ctx = camera.drawingContext;
            
        let pos1 = this.pos1;
        let pos2 = this.pos2;
        
        ctx.moveTo(pos1.x, pos1.y);
        ctx.lineTo(pos2.x, pos2.y);
        
    }
}