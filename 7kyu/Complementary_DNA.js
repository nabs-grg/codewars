function DNAStrand(dna){
  //your code here
  newDna = '';
  for(var i = 0; i < dna.length; i++){
    //console.log(dna[i]);
    if(dna[i] === 'A'){
      newDna += 'T';
    } else if(dna[i] === 'C'){
      newDna += 'G';
    } else if(dna[i] === 'T'){
      newDna += 'A';
    } else if(dna[i] === 'G'){
      newDna += 'C';
    }
  }
  
  return newDna;
}