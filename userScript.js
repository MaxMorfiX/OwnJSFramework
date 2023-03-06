import {Morf} from "/Framework/Morf.js";
import {Vector2} from "/FrameworkPlugins/Vector2.js";

let fw = new Morf.Framework();

class PlayerController extends Morf.NodeComponent {

    t = 0;
    camera;

    start() {
        this.camera = this.node.parentScene.getNode("main camera").getComponent("Camera");
        // console.log(
        //     this.camera.globalPosToCanvasPos(
        //     this.camera.canvasPosToGlobalPos(new Vector2(30, 302))
        // ));
    }

    update() { 
        // let pos = new Vector2(Math.cos(this.t/50)*400, 0);
        // this.node.getComponent("Transform").position = pos;

        this.node.getComponent("Transform").position = this.camera.mouseWorldPos.clone();
        this.node.getComponent("Transform").rotation += Math.sin(this.t/50)*Math.PI*0.03;
        this.node.getComponent("Transform").size = Math.cos(this.t/25);

        // if(this.t >= 158*2) {
        //     // console.log("reload scene");
        //     this.node.parentScene.sceneManager.reloadScene();
        // }

        this.t++;
    }
}

class CameraController extends Morf.NodeComponent {

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
            this.transform.position.y -= 10;
        }
        if(this.framework.getKey(38)) {
            this.transform.position.y += 10;
        }
    }
}

let canvas = document.getElementById("canvas");

fw.sceneManager.addScene("sampleScene", new Morf.Prefab(function() { return new Morf.Scene([


    new Morf.Node("player", [
        new PlayerController(),
        new Morf.components.SpriteRenderer([
            new Morf.spriteShapes.Rectangle(new Vector2(-50, -50), new Vector2(50, 50), {
                "lineWidth": 0,
                "color": "darkgreen",
                "fill": true,
            }),
        ]),
    ]),

    
    new Morf.Node("main camera", [
        new Morf.components.Camera(canvas),
        new CameraController(),
    ]),


]);}));

fw.sceneManager.runScene("sampleScene");