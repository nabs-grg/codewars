function XO(str) {
    //code here
    var newStr = str.toLowerCase().split('').sort();
    var countO = 0, countX = 0;
    //console.log(newStr);
    
    for(var i = 0; i < newStr.length; i++){
      if(newStr[i] === 'o'){
        countO = countO + 1;
      } else if(newStr[i] === 'x'){
        countX = countX + 1;
      }
    }
    
    if(countO === countX){
      return true;
    } else {
      return false;
    }
}