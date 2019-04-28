function Block(g,x,y,sm) {
  var xpos;
  var ypos;
  var sizeMultiplier;

  function getX() {
    return xpos;
  }

  function getY() {
    return ypos;
  }

  function updatePos(newX, newY) {
    xpos=newX;
    ypos=newY;
  }

  var block = g.matter.add.image(x,y,'block',null,{ restitution: 0 }).setInteractive(); // rescale with sizeMultiplier
  g.input.setDraggable(block);
}
