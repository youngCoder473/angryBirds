class Bird extends BaseClass {
    constructor(x, y) {
        //to inherit the properties of parent class
        super(x, y, 50, 50);
        this.image = loadImage("sprites/bird.png");
    }
    display() {
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        //if you want to call the parent function
        super.display();
    };
};