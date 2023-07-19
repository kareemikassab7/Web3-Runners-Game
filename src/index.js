import Phaser from "phaser";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import playGame from "./Phaser/scene.js";
import PlayScene from './Phaser/PlayScene.js';
import PreloadScene from './Phaser/PreloadScene.js';

//https://stackoverflow.com/questions/71668256/deprecation-notice-reactdom-render-is-no-longer-supported-in-react-18
//console.log(App);

const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 340,
  pixelArt: true,
  transparent: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  scene: [PreloadScene, PlayScene]
};

new Phaser.Game(config);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />,
  document.getElementById("root") || document.createElement("div")
);