//We have defined a function named rangeOfNumbers with two parameters. 
//The function should return an array of integers which begins with a number represented by the startNum parameter 
//and ends with a number represented by the endNum parameter. 
//The starting number will always be less than or equal to the ending number. 
//Your function must use recursion by calling itself and not use loops of any kind. 
//It should also work for cases where both startNum and endNum are the same.


//example output: [1,2,3,4,5]

function rangeOfNumbers(startNum, endNum) {
    // base case
    if (startNum > endNum){
        // if criteria met, return empty array
    return []
    } else {
        //recursive case which will continue until the base case is met
        const numbers = rangeOfNumbers(startNum, endNum-1)
        //Will push that current end num into the numbers array
        numbers.push(endNum)
        //returning the array that has all numbers from startNum to endNum
        return numbers
    }
    
}
  

  console.log(rangeOfNumbers(1,2));