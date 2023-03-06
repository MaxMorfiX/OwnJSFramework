import {Morf} from "/Framework/Morf.js";
import {NodeComponent} from "/Framework/NodeComponent.js";

export class SpriteRenderer extends NodeComponent {
    zOrder = 0;
    spriteShapes = [];
    
    draw(camera) {
        for(let i = 0; i < this.spriteShapes.length; i++) {
            let shape = this.spriteShapes[i];

            shape.startDraw(camera, this);
            shape.draw(camera, this);
            shape.endDraw(camera, this);
        }
    }

    constructor(spriteShapes) {
        super();

        this.spriteShapes = spriteShapes;
    }
}