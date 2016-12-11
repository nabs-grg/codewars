function dutyFree(normPrice, discount, hol){
  var dutyFree = 0;

  dutyFree = hol/(normPrice * (discount/100));
  return Number(Math.floor(dutyFree));

}
