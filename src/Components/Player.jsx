import React, { useEffect } from "react";

const Player = ({ c, canvas }) => {
  class Player {
    constructor() {
      this.position = {
        x: 50,
        y: 50,
      };
      this.width = 50;
      this.height = 50;
      this.sides = {
        bottom: this.position.y + this.height,
      };
    }

    draw() {
      c.fillStyle = "red";
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
      if (this.sides.bottom < canvas.height) {
        this.position.y++;
        this.sides.bottom = this.position.y + this.height;
      }
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
