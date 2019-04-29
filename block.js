function Block(g,x,y,sm) {
  var xpos;
  var ypos;
  var sizeMultiplier;

  function getX() {
    return xpos;
  }

  this.destroy = function() {
    block.destroy();
  }

  function getY() {
    return ypos;
  }

  function updatePos(newX, newY) {
    xpos=newX;
    ypos=newY;
  }

  var config = {
    restitution: 0.0,
    friction: 1.0,
    mass: 1.0
  };

  var block = g.matter.add.image(x,y,'block',null,config).setInteractive(); // rescale with sizeMultiplier?
  g.input.setDraggable(block);
}
