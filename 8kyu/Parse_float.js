function parseF(s) {
	var num = parseFloat(s);
	if(num >= 0){
		return num;
	} else {
		return null;
	}
}