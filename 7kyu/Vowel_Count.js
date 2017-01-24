function getCount(str) {
  var vowelsCount = 0;

  var newStr = str.split('');
  for(var i = 0; i < newStr.length; i++){
    if(newStr[i] === "a" || newStr[i] ===  "e"|| newStr[i] === "i" || newStr[i] === "o" || newStr[i] === "u"){
      vowelsCount ++;
  }
}
  return vowelsCount;
}
