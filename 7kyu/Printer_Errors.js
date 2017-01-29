function printerError(s) {
    // your code
    var newArr = s.split('');
    var patternMatch = /[abcdefghijklm]/g
    var errorCount = 0;
    
    for(var i =0; i < newArr.length; i++){
      if(!newArr[i].match(patternMatch)){
        errorCount++;
      }
    }
    
    return errorCount + "/" + newArr.length;
   
}