function getMiddle(s)
{
  var newArr = s.split('');
  var newNum = 0;
  //Code goes here!
   if(newArr.length % 2 !== 0){
     newNum = (newArr.length + 1)/2;
     return newArr[newNum - 1];
   } else if(newArr.length % 2 == 0){
      newNum = newArr.length/2;
      return newArr[newNum-1] + newArr[newNum]  ;
    }
}