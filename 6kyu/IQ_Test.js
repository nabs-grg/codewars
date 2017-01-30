function iqTest(numbers){
  // ...
  var newNum = numbers.split(' ');
  var oddCount = 0;
  var evenCount = 0;
  var oddPosArr = 0;
  var evenPosArr = 0;
  
  for(var i = 0; i < newNum.length; i++){
    if(newNum[i] % 2 === 0){
      evenCount++;
      evenPosArr += i;
    } else {
      oddCount++;
      oddPosArr += i;
    }
  }
  if(oddCount === 1){
   return oddPosArr + 1;
  } else {
    return evenPosArr + 1;
  }
  
  console.log(evenCount);
}