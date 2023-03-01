import React from "react";

class Background {
  constructor({ canvas, position, imageSrc }) {
    this.position = position;
    this.imageSrc = imageSrc;
    this.canvas = canvas;
    this.image = new Image();
    this.image.src = imageSrc;
    this.image.onload = () => {
      this.draw();
    };
  }

  draw() {
    const { canvas, position, image } = this;
    const { width, height } = canvas;
    const { x, y } = position;

    canvas.getContext("2d").drawImage(image, x, y, width, height);
  }
}

export default Background;
