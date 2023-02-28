import React, { useEffect } from "react";

const Player = ({ c, canvas }) => {
  useEffect(() => {
    let y = 50;
    let x = 50;
    const height = 50;
    const animate = () => {
      const bottom = y + height;

      window.requestAnimationFrame(animate);

      c.clearRect(0, 0, canvas.width, canvas.height);
      c.fillStyle = "white";
      c.fillRect(0, 0, canvas.width, canvas.height);
      c.fillStyle = "red";
      c.fillRect(x, y, 50, height);

      if (bottom < canvas.height) {
        y++;
      }
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
