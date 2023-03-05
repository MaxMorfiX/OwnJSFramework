import {Morf} from "/Framework/Morf.js";
import {NodeComponent} from "/Framework/NodeComponent.js";

export class Camera extends NodeComponent {
    canvas;
    drawingContext;
    zoom = 1;
    backgroundShapes = [];

    transform;

    constructor(canvas) {
        super("Camera");

        this.canvas = canvas;
        this.drawingContext = canvas.getContext("2d");
    }

    whenAssigned() {
        this.transform = this.node.getComponent("Transform");
    }

    superLateUpdate() {
        let nodes = this.node.parentScene.getAllNodes();

        for(let i in nodes) {
            let sr = nodes[i].getComponent("SpriteRenderer");

            if(sr) {
                sr.draw(this);
            }
        }
    }
}