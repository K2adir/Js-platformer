import React, { useEffect } from "react";

// this file Contains Player class and Player Animation

const Player = ({ c, canvas }) => {
  class Player {
    constructor() {
      this.position = {
        x: 50,
        y: 50,
      };

      this.velocity = {
        x: 0,
        y: 0,
      };
      this.gravity = 1;

      this.width = 25;
      this.height = 25;
      this.sides = {
        bottom: this.position.y + this.height,
      };
    }

    draw() {
      c.fillStyle = "red";
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
      this.position.y += this.velocity.y;

      // canvas ground
      if (this.sides.bottom + this.velocity.y < canvas.height) {
        this.velocity.y += this.gravity;
        this.sides.bottom = this.position.y + this.height;
      } else this.velocity.y = 0;
    }
  }

  const player = new Player();

  useEffect(() => {
    const animate = () => {
      window.requestAnimationFrame(animate);

      c.clearRect(0, 0, canvas.width, canvas.height);
      c.fillStyle = "white";
      c.fillRect(0, 0, canvas.width, canvas.height);

      player.draw();
      player.update();
    };

    animate();
  }, [c, canvas]);

  return (
    <>
      <h1>Player</h1>
    </>
  );
};

export default Player;
