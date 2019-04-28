function BlockStack(g) {
  var blocks = [];
  var totalWeight;
  var centerOfGx;
  var centerOfGy;

  function getCenterOfG() { // Might have to split into two functions
    return(centerOfGx,centerOfGy);
  }

  this.addBlock = function(g,x,y,sm) {
    blocks.push(new Block(g,x,y,sm));
    this.updateStats();
  }

  function removeBlock(b) {
    blocks.pop(b).destroy();
    this.updateStats();
  }

  this.updateStats = function() {
    // re-calculate center of gravity
  }

  function destroy() {
    //for block in blockstack { block.destroy(); }
  }
}
