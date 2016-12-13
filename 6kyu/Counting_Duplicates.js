function duplicateCount(text){
  var arr = [], dupArr = [];
  for(var i=0; i<text.length; i++) {
    var t = text[i].toLowerCase();
    if(arr.indexOf(t)<0) arr.push(t);
    else if(dupArr.indexOf(t)<0) dupArr.push(t);
  }
  return dupArr.length;
}