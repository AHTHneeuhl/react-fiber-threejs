import { createRoot } from "react-dom/client";
import Canvas from "./Canvas.jsx";
import Overlay from "./Overlay.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <Canvas />
    <Overlay />
  </>
);
