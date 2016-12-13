function average(scores) {
    
  var sum = scores.reduce(function(a,b){
    return a + b;
  },0);
  return +(sum/scores.length).toFixed(0);
}