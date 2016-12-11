function litres(time) {
  var totalTime = 0;
  for(var i = 1; i <= time; i++){
    totalTime += 0.5;
  }
  return Math.floor(totalTime);
}