function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){

  var newCurrentDate = new Date(currentDate);
  var newExpirationDate = new Date(expirationDate);

  if((enteredCode === correctCode) && (newCurrentDate <= newExpirationDate)){
    return true;
  } else {
    return false;
  }
}