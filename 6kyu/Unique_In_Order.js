var uniqueInOrder=function(iterable){

  //your code here - remember iterable can be a string or an array

  var newArr = []
  if(Object.prototype.toString.call(iterable) === '[object String]'){
    iterable.split('');
  } 

  for(var i = 0; i < iterable.length; i++){
    if(iterable[i] !== iterable[i + 1]){
      newArr.push(iterable[i]);
    }
  }
  
  return newArr;
}