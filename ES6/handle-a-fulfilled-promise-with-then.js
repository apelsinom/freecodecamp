// ❓ DESCRIPTION:
// Fix the code so that i declared in the if statement is a
// separate variable than i declared in the first line of the
// function. Be certain not to use the var keyword anywhere in your code.

// Add the then method to your promise. Use result as the
// parameter of its callback function and log result to the console.

// ✅ SOLUTION:

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result => {
  console.log(result)
});