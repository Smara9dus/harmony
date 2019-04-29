function NewButton(g,blocks) {
  var button = g.matter.add.image(worldWidth-120, 20,'new',null,{ isStatic: true }).setInteractive();
  button.on('pointerdown', () => {
    g.matter.pause();
    isPaused = true;
    blocks.newPattern("first");
  });





}
