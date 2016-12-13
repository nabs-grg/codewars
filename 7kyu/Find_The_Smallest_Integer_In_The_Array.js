class SmallestIntegerFinder {
  
  findSmallestInt(args) {
  
  var temp = args[0];
    for(var i = 1; i < args.length; i++){
    if(args[i] < temp){
      temp = args[i];
      
    } 
    }
    return temp;
  }
}