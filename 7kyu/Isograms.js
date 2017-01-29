function isIsogram(str){
  //...
  var sortStr = str.toLowerCase().split('').sort();
  console.log(sortStr);
  var matchStr = "";
  if(str === ""){
    return true;
  } else {
    for(var i = 0; i < sortStr.length; i++){
      if(sortStr[i] === sortStr[i + 1]){
        return false;
      } 
    }
    return true;
  }
}