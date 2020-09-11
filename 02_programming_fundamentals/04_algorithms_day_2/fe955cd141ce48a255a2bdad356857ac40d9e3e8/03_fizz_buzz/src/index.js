function fizzBuzz(list) {
  const tableauRendu = [];
  for(let i = 0; i <= (list[list.length-1] - list[0]) ; i++ ){
    if((list[i]%3) === 0 && (list[i]%5) === 0){
      tableauRendu.push("FizzBuzz");
    } else if( (list[i]%3) === 0 ){
      console.log("Voici i :" + (list[i]%3));
      tableauRendu.push("Fizz");
      console.log(tableauRendu);
    } else if( (list[i]%5) === 0){
      tableauRendu.push("Buzz");
    } else {
      tableauRendu.push(list[i]);
    }
  }
  return tableauRendu;
/*
  return list.map((integer) => {
    if (integer % 3 === 0 && integer % 5 === 0) return "FizzBuzz";
    if (integer % 3 === 0) return "Fizz";
    if (integer % 5 === 0) return "Buzz";
    return integer;
  });
*/
}
// Leave the line below untouched for tests to work properly.
module.exports = fizzBuzz;
