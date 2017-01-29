var vampire_test = function(a, b){

  var c = String(a * b);
  var d = a + '' + b
  
  var e = c.split('').sort().toString();
  var f = d.split('').sort().toString();
  
  if( e === f){
    return true;
  } else {
    return false;
  }
}