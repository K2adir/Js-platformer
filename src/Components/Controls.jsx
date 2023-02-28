import React, { useEffect, useState } from "react";

const Controls = ({ keys, player }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "w":
          // this sets how height the player can jump
          if (player.velocity.y === 0) player.velocity.y = -10;
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

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [keys, player]);

  return <></>;
};

export default Controls;
