function RunButton(g) {
  var button = g.matter.add.image(worldWidth-20, 20,'pause',null, { isStatic: true }).setInteractive();
  button.on('pointerdown', () => {
    if (isPaused) {
      isPaused = false;
      g.matter.resume();
    } else {
      g.matter.pause();
      isPaused = true;
    }});
}
