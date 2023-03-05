import {Morf} from "/Framework/Morf.js";
import {Vector2} from "/FrameworkPlugins/Vector2.js";

let fw = new Morf.Framework();

class PlayerController extends Morf.NodeComponent {

    t = 0;

    constructor() {
        super("PlayerController");
    }

    whenAssigned() {
    }

    update() {
        let pos = new Vector2(Math.cos(this.t/50)*400, 0);

        this.node.getComponent("Transform").position = pos;
        this.node.getComponent("Transform").rotation += Math.sin(this.t/50)*0.1;

        if(this.t >= 158*2) {
            console.log("reload scene");
            this.node.parentScene.sceneManager.reloadScene();
        }

        this.t++;
    }
}

let canvas = document.getElementById("canvas");

fw.sceneManager.addScene("sampleScene", new Morf.Prefab(function() { return new Morf.Scene({
    "player": new Morf.Node("player", {
        "PlayerController": new PlayerController(),
        "SpriteRenderer": new Morf.components.SpriteRenderer([
            new Morf.spriteShapes.Line(new Vector2(1, 1), new Vector2(-1, -1), {
                "lineWidth": 100,
                "color": "darkgreen",
            }),
        ]),
    }),
    "main camera": new Morf.Node("main camera", {
        "Camera": new Morf.components.Camera(canvas),
    })
}); } ));

fw.sceneManager.runScene("sampleScene");
