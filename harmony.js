var config = {
    type: Phaser.AUTO,
    width: 960,
    height: 675,
    backgroundColor: 0x5c5c5c,
    parent: 'phaser-example',
    pixelArt: false,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'matter',
        matter: {
            gravity: {
                y: 1
            },
            debug: false,
            debugBodyColor: 0xffffff
        }
    },
};

var game = new Phaser.Game(config);

const worldWidth = 960;
const worldHeight = 675;

const blockWidth = 100;
const blockHeight = 20;

function preload() {
  this.load.image('block', 'assets/block.png');
  this.load.image('base', 'assets/base.png');
  this.load.spritesheet('pause', 'assets/runbutton.png', { frameWidth: 50, frameHeight: 50 });
  this.load.image('parabola', 'assets/parabolabutton.png');
  this.load.image('spinal', 'assets/spinalbutton.png');

}

let blocks;
let base;
let pauseButton;
let newButton;
let isPaused;
let destroyer;

function create()
{
    isPaused = true;
    this.matter.pause();

    base = this.matter.add.image(worldWidth/4,worldHeight-35,'base',null,{ isStatic: true });

    blocks = new BlockStack(this);

    // add state-change buttons
    pauseButton = new RunButton(this);
    newButton = new NewButton(this,blocks);


    // add listeners

    t = this; //for adding blocks
    this.input.on('pointerdown', function (pointer, gameObject) {
          if (isPaused && gameObject.length == 0){
          var y;
          if (pointer.y%blockHeight < blockHeight/2){
            y = pointer.y - pointer.y%blockHeight;
          } else if (pointer.y%blockHeight >= blockHeight/2) {
            y = pointer.y + (blockHeight - pointer.y%blockHeight);
          }
          blocks.addBlock(t,pointer.x,y,1.0);
        }
      });

    this.input.on('dragstart', function (pointer, gameObject) {
        if (isPaused){
          gameObject.setTint(0xcccccc);
          gameObject.rotation = 0;
          gameObject.setVelocity(0,0);
          gameObject.setAngularVelocity(0);
      }
    });

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      if (isPaused){
        gameObject.x = dragX;
        gameObject.y = dragY;
      }
    });

    this.input.on('dragend', function (pointer, gameObject) {
      if (isPaused){
        gameObject.clearTint();
        if (gameObject.y%blockHeight < blockHeight/2){
          gameObject.y = gameObject.y - gameObject.y%blockHeight;
        } else if (gameObject.y%blockHeight >= blockHeight/2) {
          gameObject.y = gameObject.y + (blockHeight - gameObject.y%blockHeight);
        }
      }
    });
}

// function addBlock(x,y)
// {
//   console.log(this);
//   var b = new Block(this, blocks, x, y).setInteractive();
//   this.input.setDraggable(b);
// }

function update() { pauseButton.update(); }
