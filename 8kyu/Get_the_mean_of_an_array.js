function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
	var average = 0;
	var sum = 0;
	for(var i = 0; i < marks.length; i ++){
	  sum +=   parseInt(marks[i],10);
}

	average = sum/marks.length;
	return Math.floor(average); //the given array rounded downward to its nearest integer
}