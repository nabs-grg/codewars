function findNextSquare(sq) {
  var rootOne, nextRoot;
  // Return the next square if sq if a perfect square, -1 otherwise
  if(Math.sqrt(sq) % 1 === 0){
    rootOne = Math.sqrt(sq);
    nextRoot = rootOne + 1;
    return nextRoot * nextRoot;
  } else {
  return -1;
  }
}