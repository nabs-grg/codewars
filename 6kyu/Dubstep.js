function songDecoder(song){
  // ...

  var cleanArr = [];
  var newArr = song.split('WUB');

  for(var i = 0; i < newArr.length; i++){
    if(newArr[i] !== ''){
      cleanArr.push(newArr[i]);
    } 
  }
  
  return cleanArr.toString().replace(/,/g,' ')
  
}