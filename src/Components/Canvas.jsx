import React from "react";

const Canvas = ({ c, canvas }) => {
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);

  c.fillStyle = "red";
  c.fillRect(100, 100, 100, 100);

  const animate = () => {
    window.requestAnimationFrame(animate);
    console.log("animate");
  };

  return (
    <>
      <button onClick={animate()}></button>
    </>
  );
};

export default Canvas;
