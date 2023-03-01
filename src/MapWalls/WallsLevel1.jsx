import React from "react";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

class collisionBlock {
  constructor({ position }) {
    this.position = position;
    this.width = 64;
    this.height = 64;
  }

  draw() {
    c.fillStyle = "orange";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const wallsLevel1 = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,
  292, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 292, 0, 0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,
  292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

const parse2D = (arr) => {
  const rows = [];

  for (let i = 0; i < arr.length; i += 16) {
    rows.push(arr.slice(i, i + 16));
  }

  return rows;
};
export const collisionBlocks = [];
const parsedWalls = parse2D(wallsLevel1);
parsedWalls.forEach((row, y) => {
  row.forEach((block, x) => {
    if (block === 292) {
      collisionBlocks.push(
        new collisionBlock({
          position: {
            x: x * 64,
            y: y * 64,
          },
        })
      );
    }
  });
});

console.log(c);

const WallsLevel1 = () => {
  console.log(parsedWalls);

  return (
    <>
      <p>sets</p>
    </>
  );
};

export default WallsLevel1;
