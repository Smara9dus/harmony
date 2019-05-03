function Block(g,x,y,sm) {
  var sizeMultiplier;

  this.getX = function() {
    return block.x;
  }

  this.getY = function() {
    return block.y;
  }

  this.destroy = function() {
    block.destroy();
  }

  var config = {
    restitution: 0.0, // see if there is a way to make each body rigid
    friction: 1.0,
    mass: 1.0
  };

  var block = g.matter.add.image(x,y,'block',null,config).setInteractive(); // rescale with sizeMultiplier?
  g.input.setDraggable(block);
}
