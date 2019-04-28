var config = {
    type: Phaser.WEBGL,
    width: 960,
    height: 675,
    backgroundColor: 0x5c5c5c,
    parent: 'phaser-example',
    pixelArt: false,
    scene: {
        preload: preload,
        create: create//,
        //update: update // overriding the update function might be necessary later
    },
    physics: {
        default: 'matter',
        matter: {
            gravity: {
                y: 1
            },
            debug: false, //set this to false later
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
}

//var controls; // might be able to delete this when figuring out the fixed camera thing
let blockstack;
let base;
let pauseButton;
let isPaused;
let destroyer;

function create()
{
    isPaused = true;
    this.matter.pause();

    // add state-change buttons
    pauseButton = new RunButton(this);
    newButton = new NewButton(this);

    //base = this.matter.add.image(worldWidth/4,worldHeight-50,'base',{ isStatic: true });
    base = this.matter.add.image(worldWidth/4,worldHeight-35,'base',null,{ isStatic: true });
    //destroyer = this.matter.add.rectangle(worldWidth/2,100,worldWidth,20,{ isStatic: true});

    blocks = new BlockStack(this);


    // add listeners

    t = this; //for adding blocks
    this.input.on('pointerdown', function (pointer, gameObject) {
          if (isPaused && gameObject.length == 0){
          blocks.addBlock(t,pointer.x,pointer.y,1.0);
          t.input.setDraggable(gameObject);
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

function addBlock(x,y)
{
  console.log(this);
  var b = new Block(this, blocks, x, y).setInteractive();
  this.input.setDraggable(b);
}

function update (time, delta)     // we aren't overriding this function right now but will need to
{
      //controls.update(delta);
}
