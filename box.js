class Box {
  constructor(x, y, w, h, images) {
    const options = {
      restitution: 0.8,
      friction: 0.3,
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.images = images;
    this.currentImage = 0;
    World.add(world, this.body);
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.images[this.currentImage], 0, 0, this.w + 120, this.h + 80);
    pop();
  }

  updateImage(heightThresholds) {
    const pos = this.body.position;
    if (pos.y > 0 && pos.y < heightThresholds) {
      if (pos.x < width / 2) {
        this.currentImage = 8;
      } else {
        this.currentImage = 6;
      }
    } else {
      if (pos.x < width / 2) {
        if (pos.y > heightThresholds * 1.5) {
          this.currentImage = 5;
        } else if (pos.y > heightThresholds * 1.3) {
          this.currentImage = 4;
        } else {
          this.currentImage = 3;
        }
      } else {
        if (pos.y > heightThresholds * 1.5) {
          this.currentImage = 2;
        } else if (pos.y > heightThresholds * 1.3) {
          this.currentImage = 1;
        } else {
          this.currentImage = 0;
        }
      }
    }
  }
}
