class Block extends Phaser.{
  constructor(g,blocks,x,y) {
    return g.matter.add.image(x,y,'block',null,{ restitution: 1 });
  }
}
