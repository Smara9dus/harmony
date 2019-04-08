var config = {
    type: Phaser.WEBGL,
    width: 960,
    height: 675,
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
            debug: false //set this to false later
        }
    },
};

var game = new Phaser.Game(config);

let worldWidth;
let worldHeight;

function preload() {
  this.load.image('block', 'assets/block.png');
}

var controls; // might be able to delete this when figuring out the fixed camera thing
let blocks; // a collection of all objects currently on screen (Make this
            // a separate object with its own methods for calculations)

function create ()
{
    worldWidth = 960;
    worldHeight = 675;

    this.matter.world.setBounds(0, 0, worldWidth, worldHeight);

    blocks = this.add.group();

    //  Create loads of random bodies (this will have to be removed at some point)
    for (var i = 0; i < 30; i++)
    {
        var x = Phaser.Math.Between(0, worldWidth);
        var y = Phaser.Math.Between(0, worldHeight);

        this.matter.add.image(x,y,'block',{ restitution: 0.9 });

    }

    this.matter.add.mouseSpring(); // makes blocks draggable!

    var cursors = this.input.keyboard.createCursorKeys();

    var controlConfig = {
        camera: this.cameras.main,
    };

    controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);
}

function OnMouseClick (x,y){
  this.matter.add.rectangle(x, y, 120, 30, { restitution: 0.9 });
  console.log("Hi")
}

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

function update (time, delta)
{
    controls.update(delta);
}
