function position(letter){
//Write your own Code!
	var alphabet = "abcdefghijklmnopqrstuvwxyz";

	for(var i = 0; i <= alphabet.length; i++){
	if(alphabet[i] == letter){
		return "Position of alphabet: " + (i+1);
	}
}  

};

/*Best practice*/
function position(letter){
	return "Position of alphabet: " + (letter.charCodeAt(0) - 96)
}