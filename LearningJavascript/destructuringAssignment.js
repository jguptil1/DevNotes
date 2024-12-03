//Example:

const user = { name: 'John Doe', age: 34 };

//Method 1
//const name = user.name;
//const age = user.age;
//console.log(name) will output: John Doe
//console.log(age) will output: 34

//Method 2
//const { name, age } = user;
//console.log(user) will output: { name: 'John Doe', age: 34 }


//Problem:
//Replace the two assignments with an equivalent destructuring assignment. 
//It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.



const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  //const today = HIGH_TEMPERATURES.today;
  //const tomorrow = HIGH_TEMPERATURES.tomorrow;

  //Method 1
  //console.log(today)
  //console.log(tomorrow)
  //console.log(today) will output: 77
  //console.log(tomorrow) will output: 80

  const {today, tomorrow} = HIGH_TEMPERATURES
  console.log(HIGH_TEMPERATURES)



