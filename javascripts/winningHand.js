define(function(require){
  
  return {
    checker: function(oneDraw, twoDraw) {
      if (oneDraw > twoDraw) {
          console.log(oneDraw);
          console.log(twoDraw);
      } else if (oneDraw < twoDraw) {
          console.log(oneDraw);
          console.log(twoDraw);
      }
    
  }
}

});