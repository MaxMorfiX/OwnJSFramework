import {Engine, Graphics, Vector2} from "/Framework/Morf.js";

let fw = new Engine.Framework();

class PlayerController extends Engine.NodeComponent {

    t = 0;
    camera;
    framework;

    start() {
        this.camera = this.node.parentScene.getNode("main camera").getComponent("Camera");
        this.framework = this.node.parentScene.sceneManager.framework;
        // console.log(
        //     this.camera.globalPosToCanvasPos(
        //     this.camera.canvasPosToGlobalPos(new Vector2(30, 302))
        // ));
    }

    update() {

        // console.log(this.framework.getKey("mouse"));

        if(this.framework.getKey("mouse")) {
            this.node.getComponent("Transform").position = this.camera.mouseWorldPos.clone();
        } else {
            let pos = new Vector2(Math.cos(this.t/50)*400, 0);
            this.node.getComponent("Transform").position = pos;
        }

        this.node.getComponent("Transform").rotation += Math.sin(this.t/50)*Math.PI*0.03;
        this.node.getComponent("Transform").size = Math.cos(this.t/25);

        // if(this.t >= 158*2) {
        //     // console.log("reload scene");
        //     this.node.parentScene.sceneManager.reloadScene();
        // }

        this.t++;
    }
}

class CameraController extends Engine.NodeComponent {

    framework;
    transform;

    start() {
        this.framework = this.node.parentScene.sceneManager.framework;
        this.transform = this.node.getComponent("Transform");
    }

    update() {
        if(this.framework.getKey(37)) {
            this.transform.position.x -= 10;
        }
        if(this.framework.getKey(39)) {
            this.transform.position.x += 10;
        }
        if(this.framework.getKey(40)) {
            this.transform.size -= 0.1;
        }
        if(this.framework.getKey(38)) {
            this.transform.size += 0.1;
        }
    }
}

let canvas = document.getElementById("canvas");

fw.sceneManager.addScene("sampleScene", new Engine.Prefab(function() { return new Engine.Scene([


    new Engine.Node("player", [
        new PlayerController(),
        new Graphics.components.SpriteRenderer([
            new Graphics.spriteShapes.Circle(new Vector2(), 70, {
                "color": "darkgray",
                "fill": true,
            }),

            new Graphics.spriteShapes.Rectangle(new Vector2(-50, -50), new Vector2(50, 50), {
                "lineWidth": 0,
                "color": "darkgreen",
                "fill": true,
            }),

            new Graphics.spriteShapes.Text(new Vector2(), "LOL", {
                "color": "blue",
                "fill": true,
                "fontSize": 50,
            }),
        ]),
    ]),

    
    new Engine.Node("main camera", [
        new Graphics.components.Camera(canvas, { 
            "backgroundColor": "gray",
        }),
        new CameraController(),
    ]),


]);}));

fw.sceneManager.runScene("sampleScene");