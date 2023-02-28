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

  // Pressed Keys

  const keys = {
    w: {
      pressed: false,
    },
    a: {
      pressed: false,
    },
    d: { pressed: false },
  };

  useEffect(() => {
    const animate = () => {
      window.requestAnimationFrame(animate);

      c.clearRect(0, 0, canvas.width, canvas.height);
      c.fillStyle = "white";
      c.fillRect(0, 0, canvas.width, canvas.height);

      // player movement speed = 4
      player.velocity.x = 0;

      if (keys.d.pressed) {
        player.velocity.x = 4;
      } else if (keys.a.pressed) {
        player.velocity.x = -4;
      }

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
          keys.a.pressed = true;
          break;

        case "d":
          //move right
          keys.d.pressed = true;
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
          keys.a.pressed = false;
          break;

        case "d":
          keys.d.pressed = false;
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
