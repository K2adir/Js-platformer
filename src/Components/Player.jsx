import React, { useEffect, useRef } from "react";
import Controls from "./Controls";

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
      c.fillStyle = "white";
      c.fillRect(0, 0, canvas.width, canvas.height);

      // player movement speed = 4
      playerRef.current.velocity.x = 0;

      if (keys.d.pressed) {
        playerRef.current.velocity.x = 4;
      } else if (keys.a.pressed) {
        playerRef.current.velocity.x = -4;
      }

      playerRef.current.draw(c);
      playerRef.current.update(canvas);
    };

    animate();
  }, [c, canvas, keys]);

  return (
    <>
      <h1>Player</h1>
      <Controls keys={keys} player={playerRef.current} />
    </>
  );
};

export default PlayerComponent;
