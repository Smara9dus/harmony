function NewButton(g,blocks) {
  var button1 = g.matter.add.image(375, 630,'spinal',null,{ isStatic: true }).setInteractive();
  var button2 = g.matter.add.image(325, 630,'parabola',null,{ isStatic: true }).setInteractive();

  button1.on('pointerdown', () => {
    g.matter.pause();
    isPaused = true;
    blocks.newPattern("spinal");
  });
  button2.on('pointerdown', () => {
    g.matter.pause();
    isPaused = true;
    blocks.newPattern("parabola");
  });
}
