function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
	var rna = dna.replace(/T/g,'U');
	return rna
}