import {Morf} from "/Framework/Morf.js";

class PlayerController extends Morf.NodeComponent {
    constructor() {
        super("PlayerController");
    }

    update() {
        console.log("Player update");
    }
}

let fw = new Morf.Framework();

let scene = new Morf.Scene("sampleScene", {
    "player": new Morf.Node("player", {
        "PlayerController": new PlayerController()
    })
});

fw.sceneManager.addScene(scene);

fw.sceneManager.runScene("sampleScene");