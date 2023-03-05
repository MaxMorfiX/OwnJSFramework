import {SpriteShape} from "/FrameworkPlugins/SpriteShapes/SpriteShape.js";

export class Line extends SpriteShape {
    pos1;
    pos2;
    
    constructor(pos1, pos2, params = {}) {
        
        if(!pos1 || !pos2) {
            console.error("You need to set positions of line");
        }
        
        super(params);
        
        this.pos1 = pos1;
        this.pos2 = pos2;
        
    }
    
    draw(camera, spriteRenderer) {
        let ctx = camera.drawingContext;
        
        let pos1 = SpriteShape.localCoordinatesToCanvasCoordinates(this.pos1, spriteRenderer.node.getComponent("Transform"), camera);
        let pos2 = SpriteShape.localCoordinatesToCanvasCoordinates(this.pos2, spriteRenderer.node.getComponent("Transform"), camera);

        // console.table({
        //     "pos1 before": this.pos1,
        //     "pos1 after": pos1,
        //     "pos2 before": this.pos2,
        //     "pos2 after": pos2,
        // });
        
        ctx.moveTo(pos1.x, pos1.y);
        ctx.lineTo(pos2.x, pos2.y);
        
    }
}