function findOdd(A) {
  //happy coding!
  var sortArr = A.sort(function(a,b){
    return a - b;
  })
  
  console.log(sortArr);
  
  for(var i = 0; i < sortArr.length; i += 2){
    if(sortArr[i] !== sortArr[i+1]){
      return sortArr[i];
    }
  }

  return 0;
}