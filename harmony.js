var config = {
    type: Phaser.WEBGL,
    width: 960,
    height: 675,
    parent: 'phaser-example',
    pixelArt: false,
    physics: {
        default: 'matter',
        matter: {
            gravity: {
                y: 1
            },
            debug: true //set this to false later
        }
    },
    scene: {
        create: create,
        update: update
    }
};

var controls;

var game = new Phaser.Game(config);

function create ()
{
    var worldWidth = 960;
    var worldHeight = 675;

    this.matter.world.setBounds(0, 0, worldWidth, worldHeight);

    //  Create loads of random bodies (this will have to be moved at some point)
    for (var i = 0; i < 30; i++)
    {
        var x = Phaser.Math.Between(0, worldWidth);
        var y = Phaser.Math.Between(0, worldHeight);

        this.matter.add.rectangle(x, y, 120, 30, { restitution: 0.9 });

    }

    this.matter.add.mouseSpring(); // makes blocks draggable!

    var cursors = this.input.keyboard.createCursorKeys();

    var controlConfig = {
        camera: this.cameras.main,
        // left: cursors.left,
        // right: cursors.right,
        // up: cursors.up,
        // down: cursors.down,
        // zoomIn: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
        // zoomOut: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
        // acceleration: 0.06,
        // drag: 0.0005,
        // maxSpeed: 1.0
    };

    controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);
    //
    // this.input.keyboard.on('KEY_DOWN_Z', function (event) {
    //
    //     this.cameras.main.rotation += 0.01;
    //
    // }, 0, this);
    //
    // this.input.keyboard.on('KEY_DOWN_X', function (event) {
    //
    //     this.cameras.main.rotation -= 0.01;
    //
    // }, 0, this);
    //
    // var cam = this.cameras.main;

    //gui = new dat.GUI();

    //var p1 = gui.addFolder('Pointer');
    //p1.add(this.input, 'x').listen();
    //p1.add(this.input, 'y').listen();
    //p1.open();

    // var help = {
    //     line1: 'Cursors to move',
    //     line2: 'Q & E to zoom',
    //     line3: 'Z & X to rotate',
    // }

    // var f1 = gui.addFolder('Camera');
    // f1.add(cam, 'x').listen();
    // f1.add(cam, 'y').listen();
    // f1.add(cam, 'scrollX').listen();
    // f1.add(cam, 'scrollY').listen();
    // f1.add(cam, 'rotation').min(0).step(0.01).listen();
    // f1.add(cam, 'zoom', 0.1, 2).step(0.1).listen();
    // f1.add(help, 'line1');
    // f1.add(help, 'line2');
    // f1.add(help, 'line3');
    // f1.open();

}

function update (time, delta)
{
    controls.update(delta);
}
