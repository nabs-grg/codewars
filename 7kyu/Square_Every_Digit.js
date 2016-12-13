function squareDigits(num){
  
  var newNum = String(num);
  var squareNum = []; //var squareNum = ''
  for(var i = 0; i < newNum.length; i++){
    squareNum[i] = Math.pow(newNum[i],2); //squareNum += Math.pow(newNum.charAt(i),2);
  }
return parseInt(squareNum.join('')); //return Number(sqaureNum);
}