/*
function countup(n) {
    //base case if the number is less than one, it will return an empty array
    if (n < 1) {
      return [];
    } else {
     //
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5));
*/


function countdown(n){
    if (n<1) {
        return [];
    } else {
        const countArray = countdown(n-1);
        countArray.unshift(n);
        return countArray;
    }
}
console.log(countdown(5))
