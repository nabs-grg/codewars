String.prototype.toJadenCase = function () {
  //...
  //var str = "How can mirrors be real if our eyes aren't real";
  var newStr = this.split(' ');
  var jadenStr = '';
  
  for(var i = 0; i < newStr.length; i++){
    for(var j = 0; j < newStr[i].length;j++){
      if(j == 0){
        jadenStr += newStr[i][j].toUpperCase();
      } else {
        jadenStr += newStr[i][j];
      
      }
      //console.log(newStr[i].length)
    }
    if(i < newStr.length - 1){
      jadenStr += " ";
    }
  }
   return jadenStr;
};