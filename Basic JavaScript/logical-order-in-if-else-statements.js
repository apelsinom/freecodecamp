// ❓ DESCRIPTION:
// Change the order of logic in the function so that it
// will return the correct statements in all cases.

// ✅ SOLUTION:
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

console.log(orderMyLogic(7));