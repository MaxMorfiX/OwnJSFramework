import {SpriteShape} from "/FrameworkPlugins/Graphics/SpriteShapes/SpriteShape.js";

export class Text extends SpriteShape {

    pos;
    font;
    fontSize;
    text;
    align;

    constructor(pos, text, params = {}) {
        if(params.fill == undefined && params.fFill == undefined && params.fillOrNot == undefined) {
            params.fFill = true;
        }

        super(params);

        this.pos = pos;
        this.text = text;
        this.font = params.font || "Arial";
        this.fontSize = params.fontSize || 30;
        this.align = params.align || params.textAlign || "center";
    }
    
    draw(camera, spriteRenderer) {
        let ctx = camera.drawingContext;

        let fontSize = SpriteShape.localLengthToCanvasLength(this.fontSize, spriteRenderer.node.getComponent("Transform"), camera);
        if(fontSize < 0) fontSize = -fontSize;
        
        
        let pos = SpriteShape.localCoordinatesToCanvasCoordinates(this.pos, spriteRenderer.node.getComponent("Transform"), camera);
        pos.y += fontSize/2.5;


        ctx.font = fontSize + "px " + this.font;
        ctx.textAlign = this.align;
        ctx.lineWidth = this.lineWidth;
        
        if(this.fFill) {
            ctx.fillText(this.text, pos.x, pos.y);
        } else {
            ctx.strokeText(this.text, pos.x, pos.y);
        }
        
    }
}