function NewButton(g) {
  var button = g.matter.add.image(20, worldHeight-20,null,null, { isStatic: true }).setInteractive();
  button.on('pointerdown', () => {
    console.log("new stack time");
    g.matter.pause();
    isPaused = true;
  });
}
