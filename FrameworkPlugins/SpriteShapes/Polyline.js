import {SpriteShape} from "/FrameworkPlugins/SpriteShapes/SpriteShape.js";

export class PolyLine extends SpriteShape {
    
    lines = [];
    
    constructor(lines = []) {
    
        this.lines = lines;

    }

    startDraw() {}
    endDraw() {}
    
    draw(camera, spriteRenderer) {
        
        for(let i = 0; i < lines.length; i++) {
            let line = this.lines[i];

            line.startDraw(camera, spriteRenderer);
            line.draw(camera, spriteRenderer);
            line.endDraw(camera);

        }

    }
}