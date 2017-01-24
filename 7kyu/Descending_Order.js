function descendingOrder(n){

  var sortNum = String(n).split("");
  var newSort = sortNum.sort().reverse().join('');
  
  return parseInt(newSort);
}