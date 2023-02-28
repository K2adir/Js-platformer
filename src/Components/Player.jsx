import { useEffect } from "react";
import React from "react";

const Player = ({ c, canvas }) => {
  useEffect(() => {
    let y = 50;
    let x = 100;
    const animate = () => {
      window.requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);
      c.fillStyle = "red";
      c.fillRect(x, y, 50, 10);
      y++;
    };

    c.fillStyle = "white";
    c.fillRect(0, 0, canvas.width, canvas.height);

    animate();
  }, [c, canvas]);

  return (
    <>
      <h1>Player</h1>
    </>
  );
};

export default Player;
