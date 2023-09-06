// ❓ DESCRIPTION:
// Replace the two assignments with an equivalent destructuring assignment.
// It should still assign the variables lowToday and highToday the values
// of today.low and today.high from the LOCAL_FORECAST object.

// ✅ SOLUTION:
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const {today: {low: lowToday, high:highToday} } = LOCAL_FORECAST;

// Only change code above this line