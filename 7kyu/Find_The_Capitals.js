var capitals = function (word) {
	
  var newArray = [];
  
  for(var i = 0; i < word.length; i++){
    if(word[i] == word[i].toUpperCase()){
      newArray.push(i);
    }
  }
  return newArray;
};