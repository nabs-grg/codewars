function solution(number){
  console.log(number)
  var totalSum = 0;
  var count = 1;
  while(count < number){
    if(count % 3 === 0 || count % 5 === 0){
      totalSum += count;
    }
    count++;
  }
  return totalSum;
}