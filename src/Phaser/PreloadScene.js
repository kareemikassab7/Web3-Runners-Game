import Phaser from 'phaser'; /*
import jumpAudio from '../assets/jump.m4a';
import hitAudio from '../assets/hit.m4a';
import reachAudio from '../assets/reach.m4a';*/
import dino_hurt from '../assets/dino-hurt.png';
import groundImg from '../assets/ground.png';
import dino_idleImg from '../assets/dino-idle.png';
import restartImg from '../assets/restart.png';
import gameOverImg from '../assets/game-over.png';
import cloudImg from '../assets/cloud.png';
import starImg from '../assets/stars.png';
import moonImg from '../assets/moon.png';
import dinoImg from '../assets/knight-run.png';
import dino_downImg from '../assets/samer-down.png';
import enemy_birdImg from '../assets/rocks3.png';
import obsticle_1Img from '../assets/cactuses_small_1.png';
import obsticle_2Img from '../assets/cactuses_small_2.png';
import obsticle_3Img from '../assets/cactuses_small_3.png';
import obsticle_4Img from '../assets/cactuses_big_1.png';
import obsticle_5Img from '../assets/cactuses_big_2.png';
import obsticle_6Img from '../assets/cactuses_big_3.png';

class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene');
  }

  preload() {
    /*
    this.load.audio('jump', jumpAudio);
    this.load.audio('hit', hitAudio);
    this.load.audio('reach', reachAudio);*/

    this.load.image('ground', groundImg);
    this.load.image('dino-idle', dino_idleImg);
    this.load.image('dino-hurt', dino_hurt);
    this.load.image('restart', restartImg);
    this.load.image('game-over', gameOverImg);
    this.load.image('cloud', cloudImg);

    this.load.spritesheet('star', starImg, {
      frameWidth: 9,
      frameHeight: 9
    });

    this.load.spritesheet('moon', moonImg, {
      frameWidth: 20,
      frameHeight: 40
    });

    this.load.spritesheet('dino', dinoImg, {
      frameWidth: 86,
      frameHeight: 94
    });

    this.load.spritesheet('dino-down', dino_downImg, {
      frameWidth: 126,
      frameHeight: 120
    });

    this.load.spritesheet('enemy-bird', enemy_birdImg, {
      frameWidth: 125,
      frameHeight: 112
    });

    this.load.image('obsticle-1', obsticle_1Img);
    this.load.image('obsticle-2', obsticle_2Img);
    this.load.image('obsticle-3', obsticle_3Img);
    this.load.image('obsticle-4', obsticle_4Img);
    this.load.image('obsticle-5', obsticle_5Img);
    this.load.image('obsticle-6', obsticle_6Img);
  }

  create() {
    this.scene.start('PlayScene');
  }
}

export default PreloadScene;
