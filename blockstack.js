function BlockStack(g) {
  var blocks = [];
  var totalWeight;
  var centerOfGx = 0;
  var centerOfGy = 0;
  var overhang = 0;

  var text = g.add.text(500,605,"");
  var centerMark = g.add.image(0,0,'center',null, { isStatic: true });
  centerMark.setAlpha(0);

  this.getCenterMark = function() {
    return centerMark;
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
    blocks.filter(function(block) {
      return block.getBlock();
    });
  }

  this.updateStats = function() {
    // re-calculate center of gravity
    centerOfGx = 0;
    centerOfGy = 0;
    overhang = 0;
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
    overhang = (overhang-428)/50;

    text.setText("# of Blocks: " + Number(blocks.length) +
                 "\nOverhang: " + Number(overhang).toFixed(3) +
                 "\nCenter of Gravity: " + Number(centerOfGx-478).toFixed(3));

    centerMark.x = centerOfGx;
    centerMark.y = centerOfGy;
    centerMark.setAlpha(1);
    centerMark.setDepth(1000);
  }

  this.newPattern = function(type) {
    while (blocks.length != 0) {
      blocks.pop(b).destroy();
    }

    var x = 478;
    var y = 580;
    var w = 100;
    var h = 20;

    if(type === "spinal5"){
      var i;
      var j=-50;
      for(i = 0; i < 5; i++){
        j = j + (w/(5-i)*.5);
        this.addBlock(g,x+j,y-(i*h),1.0);
      }
    }
    if(type === "spinal15"){
      var i;
      var j=-50;
      for(i = 0; i < 15; i++){
        j = j + (w/(15-i)*.5);
        this.addBlock(g,x+j,y-(i*h),1.0);
      }
    }
    if(type === "spinal28"){
      var i;
      var j=-50;
      for(i = 0; i < 28; i++){
        j = j + (w/(28-i)*.5);
        this.addBlock(g,x+j,y-(i*h),1.0);
      }
    }
    if(type === "parabola3"){
      // base triangle
      this.addBlock(g,x,y,1.0);

      this.addBlock(g,x-.5*w,y-h,1.0);
      this.addBlock(g,x+.5*w,y-h,1.0);

      // 3-slab
      this.addBlock(g,x-w,y-2*h,1.0);
      this.addBlock(g,x,y-2*h,1.0);
      this.addBlock(g,x+w,y-2*h,1.0);

      this.addBlock(g,x-.5*w,y-3*h,1.0);
      this.addBlock(g,x+.5*w,y-3*h,1.0);

      this.addBlock(g,x-w,y-4*h,1.0);
      this.addBlock(g,x,y-4*h,1.0);
      this.addBlock(g,x+w,y-4*h,1.0);
    }
    if(type === "parabola4"){
      // base triangle
      this.addBlock(g,x,y,1.0);

      this.addBlock(g,x-.5*w,y-h,1.0);
      this.addBlock(g,x+.5*w,y-h,1.0);

      // 3-slab
      this.addBlock(g,x-w,y-2*h,1.0);
      this.addBlock(g,x,y-2*h,1.0);
      this.addBlock(g,x+w,y-2*h,1.0);

      this.addBlock(g,x-.5*w,y-3*h,1.0);
      this.addBlock(g,x+.5*w,y-3*h,1.0);

      this.addBlock(g,x-w,y-4*h,1.0);
      this.addBlock(g,x,y-4*h,1.0);
      this.addBlock(g,x+w,y-4*h,1.0);

      // 4-slab
      this.addBlock(g,x-1.5*w,y-5*h,1.0);
      this.addBlock(g,x-.5*w,y-5*h,1.0);
      this.addBlock(g,x+.5*w,y-5*h,1.0);
      this.addBlock(g,x+1.5*w,y-5*h,1.0);

      this.addBlock(g,x-w,y-6*h,1.0);
      this.addBlock(g,x,y-6*h,1.0);
      this.addBlock(g,x+w,y-6*h,1.0);

      this.addBlock(g,x-1.5*w,y-7*h,1.0);
      this.addBlock(g,x-.5*w,y-7*h,1.0);
      this.addBlock(g,x+.5*w,y-7*h,1.0);
      this.addBlock(g,x+1.5*w,y-7*h,1.0);

      this.addBlock(g,x-w,y-8*h,1.0);
      this.addBlock(g,x,y-8*h,1.0);
      this.addBlock(g,x+w,y-8*h,1.0);

      this.addBlock(g,x-1.5*w,y-9*h,1.0);
      this.addBlock(g,x-.5*w,y-9*h,1.0);
      this.addBlock(g,x+.5*w,y-9*h,1.0);
      this.addBlock(g,x+1.5*w,y-9*h,1.0);
    }
    if(type === "parabola5"){
      // base triangle
      this.addBlock(g,x,y,1.0);

      this.addBlock(g,x-.5*w,y-h,1.0);
      this.addBlock(g,x+.5*w,y-h,1.0);

      // 3-slab
      this.addBlock(g,x-w,y-2*h,1.0);
      this.addBlock(g,x,y-2*h,1.0);
      this.addBlock(g,x+w,y-2*h,1.0);

      this.addBlock(g,x-.5*w,y-3*h,1.0);
      this.addBlock(g,x+.5*w,y-3*h,1.0);

      this.addBlock(g,x-w,y-4*h,1.0);
      this.addBlock(g,x,y-4*h,1.0);
      this.addBlock(g,x+w,y-4*h,1.0);

      // 4-slab
      this.addBlock(g,x-1.5*w,y-5*h,1.0);
      this.addBlock(g,x-.5*w,y-5*h,1.0);
      this.addBlock(g,x+.5*w,y-5*h,1.0);
      this.addBlock(g,x+1.5*w,y-5*h,1.0);

      this.addBlock(g,x-w,y-6*h,1.0);
      this.addBlock(g,x,y-6*h,1.0);
      this.addBlock(g,x+w,y-6*h,1.0);

      this.addBlock(g,x-1.5*w,y-7*h,1.0);
      this.addBlock(g,x-.5*w,y-7*h,1.0);
      this.addBlock(g,x+.5*w,y-7*h,1.0);
      this.addBlock(g,x+1.5*w,y-7*h,1.0);

      this.addBlock(g,x-w,y-8*h,1.0);
      this.addBlock(g,x,y-8*h,1.0);
      this.addBlock(g,x+w,y-8*h,1.0);

      this.addBlock(g,x-1.5*w,y-9*h,1.0);
      this.addBlock(g,x-.5*w,y-9*h,1.0);
      this.addBlock(g,x+.5*w,y-9*h,1.0);
      this.addBlock(g,x+1.5*w,y-9*h,1.0);

      // 5-slab
      this.addBlock(g,x-2*w,y-10*h,1.0);
      this.addBlock(g,x-w,y-10*h,1.0);
      this.addBlock(g,x,y-10*h,1.0);
      this.addBlock(g,x+w,y-10*h,1.0);
      this.addBlock(g,x+2*w,y-10*h,1.0);

      this.addBlock(g,x-1.5*w,y-11*h,1.0);
      this.addBlock(g,x-.5*w,y-11*h,1.0);
      this.addBlock(g,x+.5*w,y-11*h,1.0);
      this.addBlock(g,x+1.5*w,y-11*h,1.0);

      this.addBlock(g,x-2*w,y-12*h,1.0);
      this.addBlock(g,x-w,y-12*h,1.0);
      this.addBlock(g,x,y-12*h,1.0);
      this.addBlock(g,x+w,y-12*h,1.0);
      this.addBlock(g,x+2*w,y-12*h,1.0);

      this.addBlock(g,x-1.5*w,y-13*h,1.0);
      this.addBlock(g,x-.5*w,y-13*h,1.0);
      this.addBlock(g,x+.5*w,y-13*h,1.0);
      this.addBlock(g,x+1.5*w,y-13*h,1.0);

      this.addBlock(g,x-2*w,y-14*h,1.0);
      this.addBlock(g,x-w,y-14*h,1.0);
      this.addBlock(g,x,y-14*h,1.0);
      this.addBlock(g,x+w,y-14*h,1.0);
      this.addBlock(g,x+2*w,y-14*h,1.0);

      this.addBlock(g,x-1.5*w,y-15*h,1.0);
      this.addBlock(g,x-.5*w,y-15*h,1.0);
      this.addBlock(g,x+.5*w,y-15*h,1.0);
      this.addBlock(g,x+1.5*w,y-15*h,1.0);

      this.addBlock(g,x-2*w,y-16*h,1.0);
      this.addBlock(g,x-w,y-16*h,1.0);
      this.addBlock(g,x,y-16*h,1.0);
      this.addBlock(g,x+w,y-16*h,1.0);
      this.addBlock(g,x+2*w,y-16*h,1.0);
    }
    if(type === "parabola6"){
      // base triangle
      this.addBlock(g,x,y,1.0);

      this.addBlock(g,x-.5*w,y-h,1.0);
      this.addBlock(g,x+.5*w,y-h,1.0);

      // 3-slab
      this.addBlock(g,x-w,y-2*h,1.0);
      this.addBlock(g,x,y-2*h,1.0);
      this.addBlock(g,x+w,y-2*h,1.0);

      this.addBlock(g,x-.5*w,y-3*h,1.0);
      this.addBlock(g,x+.5*w,y-3*h,1.0);

      this.addBlock(g,x-w,y-4*h,1.0);
      this.addBlock(g,x,y-4*h,1.0);
      this.addBlock(g,x+w,y-4*h,1.0);

      // 4-slab
      this.addBlock(g,x-1.5*w,y-5*h,1.0);
      this.addBlock(g,x-.5*w,y-5*h,1.0);
      this.addBlock(g,x+.5*w,y-5*h,1.0);
      this.addBlock(g,x+1.5*w,y-5*h,1.0);

      this.addBlock(g,x-w,y-6*h,1.0);
      this.addBlock(g,x,y-6*h,1.0);
      this.addBlock(g,x+w,y-6*h,1.0);

      this.addBlock(g,x-1.5*w,y-7*h,1.0);
      this.addBlock(g,x-.5*w,y-7*h,1.0);
      this.addBlock(g,x+.5*w,y-7*h,1.0);
      this.addBlock(g,x+1.5*w,y-7*h,1.0);

      this.addBlock(g,x-w,y-8*h,1.0);
      this.addBlock(g,x,y-8*h,1.0);
      this.addBlock(g,x+w,y-8*h,1.0);

      this.addBlock(g,x-1.5*w,y-9*h,1.0);
      this.addBlock(g,x-.5*w,y-9*h,1.0);
      this.addBlock(g,x+.5*w,y-9*h,1.0);
      this.addBlock(g,x+1.5*w,y-9*h,1.0);

      // 5-slab
      this.addBlock(g,x-2*w,y-10*h,1.0);
      this.addBlock(g,x-w,y-10*h,1.0);
      this.addBlock(g,x,y-10*h,1.0);
      this.addBlock(g,x+w,y-10*h,1.0);
      this.addBlock(g,x+2*w,y-10*h,1.0);

      this.addBlock(g,x-1.5*w,y-11*h,1.0);
      this.addBlock(g,x-.5*w,y-11*h,1.0);
      this.addBlock(g,x+.5*w,y-11*h,1.0);
      this.addBlock(g,x+1.5*w,y-11*h,1.0);

      this.addBlock(g,x-2*w,y-12*h,1.0);
      this.addBlock(g,x-w,y-12*h,1.0);
      this.addBlock(g,x,y-12*h,1.0);
      this.addBlock(g,x+w,y-12*h,1.0);
      this.addBlock(g,x+2*w,y-12*h,1.0);

      this.addBlock(g,x-1.5*w,y-13*h,1.0);
      this.addBlock(g,x-.5*w,y-13*h,1.0);
      this.addBlock(g,x+.5*w,y-13*h,1.0);
      this.addBlock(g,x+1.5*w,y-13*h,1.0);

      this.addBlock(g,x-2*w,y-14*h,1.0);
      this.addBlock(g,x-w,y-14*h,1.0);
      this.addBlock(g,x,y-14*h,1.0);
      this.addBlock(g,x+w,y-14*h,1.0);
      this.addBlock(g,x+2*w,y-14*h,1.0);

      this.addBlock(g,x-1.5*w,y-15*h,1.0);
      this.addBlock(g,x-.5*w,y-15*h,1.0);
      this.addBlock(g,x+.5*w,y-15*h,1.0);
      this.addBlock(g,x+1.5*w,y-15*h,1.0);

      this.addBlock(g,x-2*w,y-16*h,1.0);
      this.addBlock(g,x-w,y-16*h,1.0);
      this.addBlock(g,x,y-16*h,1.0);
      this.addBlock(g,x+w,y-16*h,1.0);
      this.addBlock(g,x+2*w,y-16*h,1.0);

      // 6-slab
      this.addBlock(g,x-2.5*w,y-17*h,1.0);
      this.addBlock(g,x-1.5*w,y-17*h,1.0);
      this.addBlock(g,x-.5*w,y-17*h,1.0);
      this.addBlock(g,x+.5*w,y-17*h,1.0);
      this.addBlock(g,x+1.5*w,y-17*h,1.0);
      this.addBlock(g,x+2.5*w,y-17*h,1.0);

      this.addBlock(g,x-2*w,y-18*h,1.0);
      this.addBlock(g,x-w,y-18*h,1.0);
      this.addBlock(g,x,y-18*h,1.0);
      this.addBlock(g,x+w,y-18*h,1.0);
      this.addBlock(g,x+2*w,y-18*h,1.0);

      this.addBlock(g,x-2.5*w,y-19*h,1.0);
      this.addBlock(g,x-1.5*w,y-19*h,1.0);
      this.addBlock(g,x-.5*w,y-19*h,1.0);
      this.addBlock(g,x+.5*w,y-19*h,1.0);
      this.addBlock(g,x+1.5*w,y-19*h,1.0);
      this.addBlock(g,x+2.5*w,y-19*h,1.0);

      this.addBlock(g,x-2*w,y-20*h,1.0);
      this.addBlock(g,x-w,y-20*h,1.0);
      this.addBlock(g,x,y-20*h,1.0);
      this.addBlock(g,x+w,y-20*h,1.0);
      this.addBlock(g,x+2*w,y-20*h,1.0);

      this.addBlock(g,x-2.5*w,y-21*h,1.0);
      this.addBlock(g,x-1.5*w,y-21*h,1.0);
      this.addBlock(g,x-.5*w,y-21*h,1.0);
      this.addBlock(g,x+.5*w,y-21*h,1.0);
      this.addBlock(g,x+1.5*w,y-21*h,1.0);
      this.addBlock(g,x+2.5*w,y-21*h,1.0);

      this.addBlock(g,x-2*w,y-22*h,1.0);
      this.addBlock(g,x-w,y-22*h,1.0);
      this.addBlock(g,x,y-22*h,1.0);
      this.addBlock(g,x+w,y-22*h,1.0);
      this.addBlock(g,x+2*w,y-22*h,1.0);

      this.addBlock(g,x-2.5*w,y-23*h,1.0);
      this.addBlock(g,x-1.5*w,y-23*h,1.0);
      this.addBlock(g,x-.5*w,y-23*h,1.0);
      this.addBlock(g,x+.5*w,y-23*h,1.0);
      this.addBlock(g,x+1.5*w,y-23*h,1.0);
      this.addBlock(g,x+2.5*w,y-23*h,1.0);

      this.addBlock(g,x-2*w,y-24*h,1.0);
      this.addBlock(g,x-w,y-24*h,1.0);
      this.addBlock(g,x,y-24*h,1.0);
      this.addBlock(g,x+w,y-24*h,1.0);
      this.addBlock(g,x+2*w,y-24*h,1.0);

      this.addBlock(g,x-2.5*w,y-25*h,1.0);
      this.addBlock(g,x-1.5*w,y-25*h,1.0);
      this.addBlock(g,x-.5*w,y-25*h,1.0);
      this.addBlock(g,x+.5*w,y-25*h,1.0);
      this.addBlock(g,x+1.5*w,y-25*h,1.0);
      this.addBlock(g,x+2.5*w,y-25*h,1.0);
    }
    if(type === "blank"){  //do nothing
      centerMark.setAlpha(0);
    }
    this.updateStats();
  }

  // this.update = function() {
  //   blocks.forEach(function(block) {
  //     block.update();
  //   });
  // }
}
