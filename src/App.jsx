import "./App.css";
import Canvas from "./Components/Canvas";

import PlayerComponent from "./Components/Player";

function App() {
  const canvas = document.querySelector("canvas");
  const c = canvas.getContext("2d");
  canvas.style.width = "1024px";
  canvas.style.height = "576px";
  return (
    <>
      <Canvas c={c} canvas={canvas} />
      <PlayerComponent c={c} canvas={canvas} />
    </>
  );
}

export default App;
