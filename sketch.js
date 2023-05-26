const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let ground; // 바닥
const boxes1 = [];
const boxes2 = [];
const boxes3 = [];
const boxes4 = [];
const boxes5 = [];

let world, engine;

let boxImg1;
let boxImg2;
let boxImg3;
let boxImg4;
let hourglass;

function preload() {
  boxImg1 = loadImage("./images/b1.png");
  boxImg1_2 = loadImage("./images/b2.png");
  boxImg1_3 = loadImage("./images/b3.png");
  boxImg2 = loadImage("./images/gs1.png");
  boxImg2_2 = loadImage("./images/gs2.png");
  boxImg2_3 = loadImage("./images/gs3.png");
  boxImg3 = loadImage("./images/gfs1.png");
  boxImg3_2 = loadImage("./images/gfs2.png");
  boxImg4 = loadImage("./images/gms1.png");
  boxImg4_2 = loadImage("./images/gms2.png");
}

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(0, height, width * 2, 200);
  console.log(height);
  console.log(windowHeight);
  boundary_left = new Boundary(0, height / 2, 2, height, 0);
  boundary_right = new Boundary(width, height / 2, 2, height, 0);
  hourglass_left = new Boundary(
    width / 4,
    height / 2,
    (width / 3) * 2,
    20,
    -PI / 3
  );
  hourglass_right = new Boundary(
    (width / 4) * 3,
    height / 2,
    (width / 3) * 2,
    20,
    PI / 3
  );

  const boxImages = [
    boxImg1,
    boxImg1_2,
    boxImg1_3,
    boxImg2,
    boxImg2_2,
    boxImg2_3,
    boxImg3,
    boxImg3_2,
    boxImg4,
    boxImg4_2,
  ];

  for (let i = 0; i < 80; i++) {
    const box = new Box(width / 2, 0.2 * i, 80, 60, boxImages);
    boxes1.push(box);
  }
}

function draw() {
  background("white");
  Matter.Engine.update(engine);
  ground.show();

  for (let box of boxes1) {
    box.show();
    box.updateImage(400);
  }
}
