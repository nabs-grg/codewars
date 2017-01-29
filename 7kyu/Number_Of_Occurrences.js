Array.prototype.numberOfOccurrences = function (element) {
    
    var counter = 0;
    var self = this;
    for(var i = 0; i < self.length; i++)
    {
        if(self[i] == element){ 
        	counter++; 
    	}
    }
    
    return counter;
    
}