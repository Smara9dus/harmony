function NewButton(g,blocks) {
  var button1 = g.matter.add.image(390, 630,'parabola6',null,{ isStatic: true }).setInteractive();
  var button2 = g.matter.add.image(340, 630,'parabola5',null,{ isStatic: true }).setInteractive();
  var button3 = g.matter.add.image(290, 630,'parabola4',null,{ isStatic: true }).setInteractive();
  var button4 = g.matter.add.image(240, 630,'parabola3',null,{ isStatic: true }).setInteractive();
  var button5 = g.matter.add.image(190, 630,'spinal28',null,{ isStatic: true }).setInteractive();
  var button6 = g.matter.add.image(140, 630,'spinal15',null,{ isStatic: true }).setInteractive();
  var button7 = g.matter.add.image(90, 630,'spinal5',null,{ isStatic: true }).setInteractive();
  var button8 = g.matter.add.image(40, 630,'blank',null,{ isStatic: true }).setInteractive();


  button1.on('pointerdown', () => {
    g.matter.pause();
    isPaused = true;
    blocks.newPattern("parabola6");
  });
  button2.on('pointerdown', () => {
    g.matter.pause();
    isPaused = true;
    blocks.newPattern("parabola5");
  });
  button3.on('pointerdown', () => {
    g.matter.pause();
    isPaused = true;
    blocks.newPattern("parabola4");
  });
  button4.on('pointerdown', () => {
    g.matter.pause();
    isPaused = true;
    blocks.newPattern("parabola3");
  });
  button5.on('pointerdown', () => {
    g.matter.pause();
    isPaused = true;
    blocks.newPattern("spinal28");
  });
  button6.on('pointerdown', () => {
    g.matter.pause();
    isPaused = true;
    blocks.newPattern("spinal15");
  });
  button7.on('pointerdown', () => {
    g.matter.pause();
    isPaused = true;
    blocks.newPattern("spinal5");
  });
  button8.on('pointerdown', () => {
    g.matter.pause();
    isPaused = true;
    blocks.newPattern("blank");
    blocks.getCenterMark().setAlpha(0);
  });
}
