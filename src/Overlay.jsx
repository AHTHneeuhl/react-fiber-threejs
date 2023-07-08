/* eslint-disable react/no-unescaped-entities */

import { Logo } from "@pmndrs/branding";
import {
  AiOutlineShopping,
  AiOutlineHighlight,
  AiFillCamera,
  AiOutlineArrowLeft,
} from "react-icons/ai";

export default function Overlay() {
  return (
    <div className="container">
      <header>
        <Logo width="40" height="40" />
        <div>
          <AiOutlineShopping size="3em" />
        </div>
      </header>
      <Intro />
      <Customizer />
    </div>
  );
}

function Intro() {
  return (
    <section key="main">
      <div className="section--container">
        <div>
          <h1>LET'S DO IT.</h1>
        </div>
        <div className="support--content">
          <div>
            <p>
              Create your unique and exclusive shirt with our brand-new 3D
              customization tool. <strong>Unleash your imagination</strong> and
              define your own style.
            </p>
            <button style={{ background: "black" }}>
              CUSTOMIZE IT <AiOutlineHighlight size="1.3em" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Customizer() {
  const colors = [
    "#CCCCCC",
    "#EFBD4E",
    "#80C670",
    "#726DE8",
    "#EF674E",
    "#353934",
    "#800080",
  ];
  const decals = ["react", "three2", "pmndrs"];

  return (
    <section key="custom">
      <div className="customizer">
        <div className="color-options">
          {colors.map((color) => (
            <div
              key={color}
              className="circle"
              style={{ background: color }}
            ></div>
          ))}
        </div>
        <div className="decals">
          <div className="decals--container">
            {decals.map((decal) => (
              <div key={decal} className="decal">
                <img src={decal + "_thumb.png"} alt="brand" />
              </div>
            ))}
          </div>
        </div>
        <button className="share" style={{ background: "black" }}>
          DOWNLOAD
          <AiFillCamera size="1.3em" />
        </button>
        <button className="exit" style={{ background: "black" }}>
          GO BACK
          <AiOutlineArrowLeft size="1.3em" />
        </button>
      </div>
    </section>
  );
}
