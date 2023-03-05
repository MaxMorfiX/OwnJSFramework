import {Morf} from "/Framework/Morf.js";
import {NodeComponent} from "/Framework/NodeComponent.js";
import {Vector2} from "/FrameworkPlugins/Vector2.js";

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

        this.drawingContext.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for(let i in nodes) {
            let sr = nodes[i].getComponent("SpriteRenderer");

            if(sr) {
                sr.draw(this);
            }
        }
    }

    globalPosToCanvasPos(pos) {
        let retPos = this.transform.globalPosToLocalPos(pos);

        retPos = new Vector2(
            retPos.x + this.canvas.width/2,
            this.canvas.height/2 - retPos.y
        );

        return retPos;
    }
}