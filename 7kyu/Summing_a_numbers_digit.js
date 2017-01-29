function sumDigits(number) {
  var num = String(number).split('');
  var total = 0;
  for(var i = 0; i < num.length;i++){
    if(num[i] != '-'){
      total += parseFloat(num[i]);
    }
  }
  
  return total;
}