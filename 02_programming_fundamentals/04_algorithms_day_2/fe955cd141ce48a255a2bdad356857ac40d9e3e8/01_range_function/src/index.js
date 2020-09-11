function range(int1, int2) {
  let tab = [];
  if (int1>int2) {
    for(let i=int1; i >= int2; i--){
      tab.push(i);
    }
  }
  else if(int2>int1){
    for(let i=int1; i <= int2;i++){
      tab.push(i);
    }
  }
  else {
    tab.push(int1);
    //tab.push(int2);
  }
  return tab;
}

// Do not remove last lines, it is for tests
module.exports = range;
