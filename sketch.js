const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ball;

function setup() {
    createCanvas(480, 400);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500, 390, 1000, 10);

    box1 = new Box(350, 100, 50, 50);
    box2 = new Box(350, 100, 50, 50);
    box3 = new Box(350, 100, 50, 50);
    box4 = new Box(350, 100, 50, 50);
    box5 = new Box(350, 100, 50, 50);
    box6 = new Box(300, 100, 50, 50);
    box7 = new Box(300, 100, 50, 50);
    box8 = new Box(300, 100, 50, 50);
    box9 = new Box(300, 100, 50, 50);
    box10 = new Box(300, 100, 50, 50);
    box11 = new Box(450, 100, 50, 50);
    box12 = new Box(450, 100, 50, 50);
    box13 = new Box(450, 100, 50, 50);
    box14 = new Box(450, 100, 50, 50);
    box15 = new Box(450, 100, 50, 50);
    box16 = new Box(400, 100, 50, 50);
    box17 = new Box(400, 100, 50, 50);
    box18 = new Box(400, 100, 50, 50);
    box19 = new Box(400, 100, 50, 50);
    box20 = new Box(400, 100, 50, 50);

    ball = new Ball(130, 200, 80, 80);
    rope = new Rope(ball.body, { x: 130, y: 50 });

}

function draw() {
    background("grey");
    Engine.update(engine);

    ground.display();

    fill("turquoise");
    box1.display();
    box2.display();
    box3.display();
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()

    fill(183, 53, 45);
    ball.display();
    rope.display();

}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}