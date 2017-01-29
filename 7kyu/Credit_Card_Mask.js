// return masked string
function maskify(cc) {
  var newStr = cc.split('');
  console.log(newStr);
  
  for(var i =0; i < newStr.length - 4; i++){
    newStr[i] = '#'
  }
  return newStr.join('');
}