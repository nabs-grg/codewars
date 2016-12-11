function generateRange(min, max, step){
	var newArray = [];
	var finalArray = [];
	for(min; min <= max; min = min+step){
		finalArray = newArray.push(min);
	}
	return newArray;
}