function GetSum( a,b ){
var start = a, 
    end   = b, 
    sum   = 0;

  if(a > b){ 
    start = b; end = a;
   }
  for(var i = start;i <= end;i++){
    sum += i;
   }
   return sum;
}