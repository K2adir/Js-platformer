import React, { useEffect } from "react";

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
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.sides.bottom = this.position.y + this.height;

      // canvas ground
      if (this.sides.bottom + this.velocity.y < canvas.height) {
        this.velocity.y += this.gravity;
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

  // KEY DOWN
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "w":
          // this sets how height the player can jump
          if (player.velocity.y === 0) player.velocity.y = -15;
          break;
        case "a":
          //move left
          player.velocity.x = -4;
          break;

        case "d":
          //move right
          player.velocity.x = 4;
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleKeyUp = (e) => {
      switch (e.key) {
        case "a":
          //move left
          player.velocity.x = 0;
          break;

        case "d":
          //move right
          player.velocity.x = 0;
          break;
        default:
          break;
      }
    };

    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, []);

  return (
    <>
      <h1>Player</h1>
    </>
  );
};

export default Player;
