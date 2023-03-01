import React, { useEffect, useRef } from "react";
import Controls from "./Controls";
import background1 from "../assets/backgroundLevel1.png";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

class Background {
  constructor({ canvas }) {
    this.canvas = canvas;
    this.image = new Image();
    this.image.src = background1;
    this.image.onload = () => {
      this.draw();
    };
  }
  draw() {
    const { width, height } = this.canvas;
    c.drawImage(this.image, 0, 0, width, height);
  }
}

const backgroundLevel1 = new Background({
  canvas,
});

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

  draw(c) {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(canvas) {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.sides.bottom = this.position.y + this.height;

    // canvas ground
    if (this.sides.bottom + this.velocity.y < canvas.height) {
      this.velocity.y += this.gravity;
    } else {
      this.velocity.y = 0;
    }
  }
}

const PlayerComponent = ({ c, canvas }) => {
  const playerRef = useRef(new Player());

  // Pressed Keys
  const keys = {
    w: {
      pressed: false,
    },
    a: {
      pressed: false,
    },
    d: {
      pressed: false,
    },
  };

  useEffect(() => {
    const animate = () => {
      window.requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);
      backgroundLevel1.draw();
      // player movement speed = 2
      playerRef.current.velocity.x = 0;

      if (keys.d.pressed) {
        playerRef.current.velocity.x = 1;
      } else if (keys.a.pressed) {
        playerRef.current.velocity.x = -1;
      }

      playerRef.current.draw(c);
      playerRef.current.update(canvas);
    };

    animate();
  }, [c, canvas, keys]);

  return (
    <>
      <Controls keys={keys} player={playerRef.current} />
    </>
  );
};

export default PlayerComponent;
