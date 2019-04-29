function RunButton(g) {
  var button = g.matter.add.sprite(440, 630,'pause',0,{ isStatic: true }).setInteractive();
  button.on('pointerdown', () => {
    if (isPaused) {
      isPaused = false;
      g.matter.resume();
    } else {
      g.matter.pause();
      isPaused = true;
    }});

    this.update = function() {
      if(isPaused) { button.setFrame(1);}
      else { button.setFrame(0);}
    }
}
