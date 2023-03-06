import {Morf} from "/Framework/Morf.js";
import {NodeComponent} from "/Framework/NodeComponent.js";
import {Vector2} from "/FrameworkPlugins/Vector2.js";

export class Camera extends NodeComponent {

    #mousePosition = new Vector2();

    get mousePos() { return this.#mousePosition }
    get mousePosition() { return this.#mousePosition }

    get mouseWorldPosition() { 
        return this.canvasPosToGlobalPos(this.#mousePosition); 
    }
    get mouseWorldPos() { 
        return this.canvasPosToGlobalPos(this.#mousePosition);
    }

    canvas;
    drawingContext;
    backgroundColor;

    transform;

    constructor(canvas, params = {}) {
        super();

        this.canvas = canvas;
        this.drawingContext = canvas.getContext("2d");

        this.backgroundColor = params.backgroundColor || "white";

        canvas.onmousemove = this.onmousemove.bind(this);
    }

    earlyStart() {
        this.transform = this.node.getComponent("Transform");
    }

    superLateUpdate() {
        let nodes = this.node.parentScene.getAllNodes();

        this.drawBackground();

        if(this.node.getComponent("SpriteRenderer")) { 
            this.node.getComponent("SpriteRenderer").draw(this); //background sprite
        }

        for(let i in nodes) {
            if(nodes[i] === this.node) continue;

            let sr = nodes[i].getComponent("SpriteRenderer");

            if(sr) {
                sr.draw(this);
            }
        }
    }

    drawBackground() {
        this.drawingContext.beginPath();
        this.drawingContext.fillStyle = this.backgroundColor;
        this.drawingContext.strokeStyle = this.backgroundColor;
        this.drawingContext.rect(0, 0, this.canvas.width, this.canvas.height);
        this.drawingContext.fill();
        this.drawingContext.stroke();
        this.drawingContext.closePath();
    }

    globalPosToCanvasPos(pos) {
        let retPos = this.transform.globalPosToLocalPos(pos);

        retPos = new Vector2(
            retPos.x + this.canvas.width/2,
            this.canvas.height/2 - retPos.y
        );

        return retPos;
    }

    canvasPosToGlobalPos(pos) {
        let retPos = new Vector2(
            pos.x - this.canvas.width/2,
            this.canvas.height/2 - pos.y
        );
            
        retPos = this.transform.localPosToGlobalPos(retPos);

        return retPos;
    }

    onmousemove(e) {
        let rect = this.canvas.getBoundingClientRect();

        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        this.#mousePosition = new Vector2(x, y);
    }

}