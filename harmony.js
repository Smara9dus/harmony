var config = {
    type: Phaser.WEBGL,
    width: 960,
    height: 675,
    backgroundColor: 0x000000,
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
            debug: true, //set this to false later
            debugBodyColor: 0xffffff
        }
    },
};

var game = new Phaser.Game(config);

const worldWidth = 960;
const worldHeight = 675;

function preload() {
  this.load.image('block', 'assets/block.png');
  this.load.image('base', 'assets/base.png');
}

//var controls; // might be able to delete this when figuring out the fixed camera thing
let blocks; // a collection of all objects currently on screen (Make this
let base;
let pauseButton;
let isPaused;

function create()
{
    isPaused = true;
    this.matter.pause();

    pauseButton = this.matter.add.image(worldWidth-20, 20,null,null, { isStatic: true }).setInteractive();

    //base = this.matter.add.image(worldWidth/4,worldHeight-50,'base',{ isStatic: true });
    blocks = this.add.group();
    base = this.matter.add.rectangle(worldWidth/4,worldHeight-50,worldWidth/2,100,{ isStatic: true });

    pauseButton.on('pointerover', () => { console.log('pointerover'); });

    pauseButton.on('pointerdown', () => {
      if (isPaused) {
        isPaused = false;
        this.matter.resume();
      } else {
        this.matter.pause();
        isPaused = true;;
      }})

    //  Create loads of random bodies (this will have to be removed at some point)
    for (var i = 0; i < 30; i++)
    {
        var x = Phaser.Math.Between(0, worldWidth);
        var y = Phaser.Math.Between(0, worldHeight);

        this.matter.add.rectangle(x,y,100,20,{ restitution: 0 });
    }

    this.matter.add.mouseSpring(); // makes blocks draggable! Will neeed to be changed later

    // var controlConfig = {
    //     camera: this.cameras.main,
    // };
    //
    // controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);
}

// will be modified and used later for fixing location on screen
function fixLocation(item) {

    // Move the items when it is already dropped.
    if (item.x < 90) {
        item.x = 90;
    }
    else if (item.x > 180 && item.x < 270) {
        item.x = 180;
    }
    else if (item.x > 360) {
        item.x = 270;
    }

}



// function update (time, delta)     // we aren't overriding this function right now
// {
//     controls.update(delta);
// }
