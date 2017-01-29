function sumTwoSmallestNumbers(numbers) {  
  //Code here
  
  var totalSum = 0;
  var sortArr = numbers.sort(function(a,b){
    return a-b;
  });
  
  for(var i = 0; i < 2; i++){
      totalSum += parseInt(sortArr[i]);
  }
  
  return totalSum;
  console.log(sortArr)
  
};