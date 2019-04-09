class Block {
  constructor(g,blocks,x,y) {
    var b = g.matter.add.image(x,y,'block',null,{ restitution: 0 });
    b.setInteractive();
    return b;
  }

  startDrag(pointer,targets)
  {
    this.input.off('pointerdown',this.startDrag,this);
    this.dragObj= targets[0];
    this.input.on('pointermove',this.doDrag,this);
    this.input.on('pointerup',this.stopDrag,this);
  }

  doDrag(pointer)
  {
    this.dragObj.x = pointer.x;
    this.dragObj.y = pointer.y;
  }

  stopDrag(pointer,targets)
  {
    this.input.on('pointerdown',this.startDrag,this);
    this.input.off('pointermove',this.doDrag,this);
    this.input.off('pointerup',this.stopDrag,this);
  }

}
