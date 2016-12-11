function sumSquares(array) {

  var result = array.map(function(currentValue){
    return currentValue * currentValue;  
  })
  
  var arraySum = result.reduce(function(a,b){
    return a + b; 
  },0);
  
  return arraySum;

}