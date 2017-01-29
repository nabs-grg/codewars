function findShort(s){
	
	var strSplit = s.split(' ');

	var sortWords = strSplit.sort(function(a,b){
	  return a.length-b.length;
	});

	console.log(sortWords);
	var shortLength = 0;
	for (var i = 0; i < 1; i++){
	  shortLength = sortWords[i].length;
	}

	return shortLength;
}