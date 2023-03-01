import "./App.css";
import Canvas from "./Components/Canvas";
import PlayerComponent from "./Components/Player";
import WallsLevel1 from "./MapWalls/WallsLevel1";

function App() {
  const canvas = document.querySelector("canvas");
  const c = canvas.getContext("2d");
  canvas.style.width = "1024";
  canvas.style.height = "576px";
  return (
    <>
      <Canvas c={c} canvas={canvas} />
      <PlayerComponent c={c} canvas={canvas} />
      <WallsLevel1 />
    </>
  );
}

export default App;
