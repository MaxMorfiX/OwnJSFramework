import {Vector2} from "/FrameworkPlugins/Vector2.js";
import {Morf} from "/Framework/Morf.js";



class PlayerController extends Morf.NodeComponent {
    constructor() {
        super("PlayerController");
    }

    update() {
        // console.log("Player update");
    }
}

class CameraController extends Morf.NodeComponent {
    t = 0;

    constructor() {
        super("CameraController");
    }

    update() {
        let pos = new Vector2(Math.cos(this.t/10)*400, 0);
        this.node.getComponent("Transform").position = pos;

        // console.log(pos);

        this.t++;
    }
}

let canvas = document.getElementById("canvas");

let fw = new Morf.Framework();

let scene = new Morf.Scene("sampleScene", {
    "player": new Morf.Node("player", {
        "PlayerController": new PlayerController(),
        "SpriteRenderer": new Morf.components.SpriteRenderer([
            new Morf.spriteShapes.Line(new Vector2(-100, 0), new Vector2(100, 0), {
                "lineWidth": 50,
            }),
            new Morf.spriteShapes.Line(new Vector2(100, 100), new Vector2(200, 50), {
                "color": "red",
                "lineWidth": 10,
            }),
        ])
    }),
    "main camera": new Morf.Node("main camera", {
        "Camera": new Morf.components.Camera(canvas),
        "CameraController": new CameraController(),
    })
});

fw.sceneManager.addScene(scene);

fw.sceneManager.runScene("sampleScene");
