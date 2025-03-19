"use strict";

function divideNumbers(a, b) {
  try {
    if (b === 0) {
      //this is a comparison
      throw new Error("Division by zero is not allowed");
    }
    const answer = a / b;
    return answer; //anytime something is returned from a function, it can be stored into a variable.
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Execution Complete");
  }
}

const result = divideNumbers(12, 6); //calling the function
console.log(result);

async function fetchData() {
  try {
    const res = await fetch("https://httpstat.us/500");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Fetch attempt finished.");
  }
}

fetchData();

function greet(name) {
  if (name === undefined) {
    //need to be a comparison not an assignment operator
    name = "Guest!"; //I initially had return name = "Guest!" but it only kept returning "Guest!".  Not quite sure why but I knew from the instructions it should say "Hello, Guest!" so I removed the return.  Still confused. 
  }
    console.log("Hello, " + name);
  
}

greet();
