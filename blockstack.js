function BlockStack(g) {
  var blocks = [];
  var totalWeight;
  var centerOfGx;
  var centerOfGy;

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

  this.updateStats = function() {
    // re-calculate center of gravity
  }

  this.newPattern = function(type) {
    while (blocks.length != 0) { // this only destroys half of the blocks????
      blocks.pop(b).destroy();
    }

    var x = 475;
    var y = 580;
    var w = 100;
    var h = 20;

    console.log(type);
    if(type === "first"){
      this.addBlock(g,x,y,1.0);

      this.addBlock(g,x-50,y-20,1.0);
      this.addBlock(g,x+50,y-20,1.0);

      this.addBlock(g,x-100,y-40,1.0);
      this.addBlock(g,x,y-40,1.0);
      this.addBlock(g,x+100,y-40,1.0);

      this.addBlock(g,x-50,y-60,1.0);
      this.addBlock(g,x+50,y-60,1.0);

      this.addBlock(g,x,y-80,1.0);

    }
    // if(type.equals("spinal large")) {
    //   console.log("spinal large");
    // }
    // if(type.equals("parabolic small")) {
    //   console.log("parabolic small");
    // }
    // if(type.equals("parabolic large")) {
    //   console.log("parabolic large");
    // }

    console.log("New stack size: " + blocks.length);
    this.updateStats();
  }
}
