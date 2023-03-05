import {SpriteShape} from "/FrameworkPlugins/SpriteShapes/SpriteShape.js";

export class Polygon extends SpriteShape {

    points = [];
    isClosed = false;
    
    constructor(points, params = {}) {
        super(params);

        this.isClosed = params.isClosed || false;

        this.points = points;

        console.table(points);
    }
    
    draw(camera, spriteRenderer) {
        let ctx = camera.drawingContext;

        let startPoint = SpriteShape.localCoordinatesToCanvasCoordinates(
            this.points[0],
            spriteRenderer.node.getComponent("Transform"),
            camera
        );
        ctx.moveTo(startPoint.x, startPoint.y);
        
        for(let i = 1; i < this.points.length; i++) {
            let point = SpriteShape.localCoordinatesToCanvasCoordinates(
                this.points[i],
                spriteRenderer.node.getComponent("Transform"),
                camera
            );
            
            ctx.lineTo(point.x, point.y);
            
        }

        if(this.isClosed) {
            let point = SpriteShape.localCoordinatesToCanvasCoordinates(
                this.points[0],
                spriteRenderer.node.getComponent("Transform"),
                camera
            );

            ctx.lineTo(point.x, point.y);
        }
        
    }
}