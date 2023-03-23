import {SpriteShape} from "/FrameworkPlugins/Graphics/SpriteShapes/SpriteShape.js";

export class Arc extends SpriteShape {

    pos;
    radius;
    startAngle;
    endAngle;
    counterclockwise
    
    constructor(pos, radius, startAngle, endAngle, params = {}) {

        super(params);
        
        this.pos = pos;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        
        this.counterclockwise = params.counterclockwise || false;

    }
    
    draw(camera, spriteRenderer) {
        let ctx = camera.drawingContext;
        
        let pos = SpriteShape.localCoordinatesToCanvasCoordinates(this.pos, spriteRenderer.node.getComponent("Transform"), camera);
        let radius = SpriteShape.localLengthToCanvasLength(this.radius, spriteRenderer.node.getComponent("Transform"), camera);

        if(radius < 0) radius = -radius;

        ctx.arc(pos.x, pos.y, radius, this.startAngle, this.endAngle, this.counterclockwise);
        
    }
}