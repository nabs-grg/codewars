function positiveSum(arr) {

  var filterArr = arr.filter(function(arr){
    return arr >= 0;
  });
  
  var sum = filterArr.reduce(function(a,b){
    return a + b;
  }, 0);
  
  return sum;
}