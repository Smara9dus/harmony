function BlockStack(g) {
  var blocks = [];
  var totalWeight;
  var centerOfGx = 0;
  var centerOfGy = 0;
  var overhang = 0;


  var text = g.add.text(50,50,"");

  function getCenterOfG() { // Might have to split into two functions
    return(centerOfGx,centerOfGy);
  }

  this.addBlock = function(g,x,y,sm) {
    b = new Block(g,x,y,sm);
    blocks.push(b);
    this.updateStats();
  }

  this.removeBlock = function(b) { // Unused function so far
    blocks.pop(b).destroy();
    this.updateStats();   // unless this function gets used for clicking on and removing blocks, updating here is useless
  }

  this.destroyOffscreen = function() {
    blocks.forEach(function(block) {
      if (block.getY() > 700) {
        blocks.pop(block).destroy();
      }
    });
  }

  this.updateStats = function() {
    // re-calculate center of gravity
    centerOfGx,centerOfGy,overhang = 0;

    //this.destroyOffscreen();

    if(blocks.length == 0) {
      text.setText("");
      return;
    }

    blocks.forEach(function(block) {
      centerOfGx = centerOfGx + block.getX();
      centerOfGy = centerOfGy + block.getY();
      if (block.getX() > overhang) {
        overhang = block.getX();
      }
    });
    centerOfGx = centerOfGx / blocks.length;
    centerOfGy = centerOfGy / blocks.length;
    overhang = (overhang-428)/100;

    text.setText("# of Blocks: " + blocks.length +
                 "\nOverhang: " + overhang +
                 "\nCenter of Gravity: " + centerOfGx + " " + centerOfGy);

  }

  this.newPattern = function(type) {
    while (blocks.length != 0) {
      blocks.pop(b).destroy();
    }

    var x = 478;
    var y = 580;
    var w = 100;
    var h = 20;

    if(type === "spinal"){
      var i;
      var j=-50;
      for(i = 0; i < 20; i++){
        j = j + (w/(20-i)*.5);
        this.addBlock(g,x+j,y-(i*h),1.0);
      }
    }
    if(type === "parabola"){

      var i;

      for(i = 0; i < 10; i++) {
        this.addBlock(g,x,y-(i*h*2),1.0);
      }
      for(i = 0; i < 9; i++) {
        this.addBlock(g,x-(.5*w),y-h-(i*h*2),1.0);
        this.addBlock(g,x+(.5*w),y-h-(i*h*2),1.0);
      }
      for(i = 0; i < 9; i++) {
        this.addBlock(g,x-(w),y-(2*h)-(i*h*2),1.0);
        this.addBlock(g,x+(w),y-(2*h)-(i*h*2),1.0);
      }
      for(i = 0; i < 8; i++) {
        this.addBlock(g,x-(1.5*w),y-(3*h)-(i*h*2),1.0);
        this.addBlock(g,x+(1.5*w),y-(3*h)-(i*h*2),1.0);
      }
      for(i = 0; i < 7; i++) {
        this.addBlock(g,x-(2*w),y-(6*h)-(i*h*2),1.0);
        this.addBlock(g,x+(2*w),y-(6*h)-(i*h*2),1.0);
      }
      for(i = 0; i < 4; i++) {
        this.addBlock(g,x-(2.5*w),y-(11*h)-(i*h*2),1.0);
        this.addBlock(g,x+(2.5*w),y-(11*h)-(i*h*2),1.0);
      }
    }
    this.updateStats();
  }
}
