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
let blocks = new Array(); // a collection of all objects currently on screen (Make this
let base;
let pauseButton;
let isPaused;
let destroyer;

function create()
{
    isPaused = true;
    this.matter.pause();

    pauseButton = this.matter.add.image(worldWidth-20, 20,null,null, { isStatic: true }).setInteractive();

    //base = this.matter.add.image(worldWidth/4,worldHeight-50,'base',{ isStatic: true });
    base = this.matter.add.image(worldWidth/4,worldHeight-35,'base',null,{ isStatic: true });
    //destroyer = this.matter.add.rectangle(worldWidth/2,100,worldWidth,20,{ isStatic: true});

    pauseButton.on('pointerdown', () => {
      if (isPaused) {
        isPaused = false;
        this.matter.resume();
      } else {
        this.matter.pause();
        isPaused = true;
      }})

    //  Create loads of random bodies (this will have to be removed at some point)
      var x = Phaser.Math.Between(0, worldWidth);
      var y = Phaser.Math.Between(0, worldHeight);
      var b = new Block(this, blocks, x, y);
    //this.matter.add.mouseSpring(); // makes blocks draggable! Will neeed to be changed later

    this.input.setDraggable(b);

    // this.input.on('pointerdown', function(pointer) {
    //   var b = this.matter.add.image(x,y,'block',null,{ restitution: 0 });
    //   this.input.setDraggable(b);
    // });

    this.input.on('dragstart', function (pointer, gameObject) {
        if (isPaused){
        gameObject.setTint(0xcccccc);
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
        } else if (gameObject.y%blockHeight > blockHeight/2) {
          gameObject.y = gameObject.y + (blockHeight - gameObject.y%blockHeight);
        }
      }

    });

}

// function update (time, delta)     // we aren't overriding this function right now
// {
//     controls.update(delta);
// }
