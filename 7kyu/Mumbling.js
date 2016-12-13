function accum(str) {

  var newStr = '';
  for(var i = 0; i < str.length; i++){
    
    for(var j = 0; j <= i; j++){
    
      if(j == 0){
        newStr += str[i].toUpperCase();
      } else {
        newStr += str[i].toLowerCase();
      }
    }
    if(i != str.length - 1){
      newStr += "-" 
    }
  }
  return newStr;
}