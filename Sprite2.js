class Sprite {
  constructor({ position, imageSrc }) {
    this.position = position;
    this.image = new Image();
    this.image.src = imageSrc;
  }
  draw() {
    if (!this.image) return;
    context.drawImage(this.image, this.position.x, this.position.y);
  }
  3;
  update() {
    this.draw();
  }
}
