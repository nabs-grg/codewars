function disemvowel(str) {
	var vowels = /[aeiou]/gi;
	var removeVowels = ""; 
	return str.replace(vowels,removeVowels);
}

/*

function disemvowel(str) {
  return str.replace(/[aeiou]/gi,""); 
 }
*/