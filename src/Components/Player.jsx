import React from "react";

const Player = ({ c }) => {
  c.fillStyle = "red";
  c.fillRect(100, 100, 100, 100);

  const animate = () => {
    window.requestAnimationFrame(animate);
    console.log("animate");
  };
  return (
    <>
      <h1>Player</h1>
    </>
  );
};

export default Player;
