// ❓ DESCRIPTION:
// The editor has two console.logs to help you see what is happening.
// Check the console as you code to see how it changes.
// Declare a local variable myVar inside myLocalScope and run the tests.

// ✅ SOLUTION:
function myLocalScope() {
  // Only change code below this line
  let myVar = 5;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);