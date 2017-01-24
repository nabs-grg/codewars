function explode(s) {

var newStr = s.split(''),newArr=[];

  for(var i=0;i<newStr.length;i++){
    for(var j=0;j<newStr[i];j++){
      newArr.push(newStr[i]);
    }
  } 

return newArr.join('');

}