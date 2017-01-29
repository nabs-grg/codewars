function removeSmallest(numbers) {
  //throw "TODO: removeSmallest";
  var i = 0;
  var checkArr = numbers[i];
  
  while(i < numbers.length){
    if(numbers[i] < checkArr){
      checkArr = numbers[i];
    }
    i++;
  }
  
  var position = numbers.indexOf(checkArr);

  if(position > -1){
    numbers.splice(position,1)
  }
  
  return numbers;
}