

export class Key {

    #isPressed = false;
    #up = false;
    #down = false;

    get isPressed() { return this.#isPressed }
    get isPressedUp() { return this.#up }
    get isPressedDown() { return this.#down }

    constructor() {}
    
    // toBoolean() {
    //     return this.isPressed;
    // }

    pressDown() {
        this.#down = true;
        this.#isPressed = true;
    }

    pressUp() {
        this.#up = true;
        this.#isPressed = false;
    }

    update() {
        this.#up = false;
        this.#down = false;
    }
    
}