function nbYear(p0, percent, aug, p) {
    // your code
    var newPop = 0;
    var year = 0;
    
    while(newPop < p){
      newPop = p0 + (p0 * (percent / 100)) + aug;
      p0 = newPop
      year++;
      console.log(newPop);
    }
    
    return year;
}