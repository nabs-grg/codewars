function highAndLow(numbers){
  
  numbers = numbers.split(' ').map(function(item){
    return parseInt(item);
  });
    
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers); 
}

/*
function highAndLow(numbers){

	numbers = numbers.split(' ').map(Number)

	var largest  = Math.max.apply(null, numbers);
	var smallest  = Math.min.apply(null, numbers);

	return largest + " " + smallest;

}
*/