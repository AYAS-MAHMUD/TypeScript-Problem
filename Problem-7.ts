// Problem 7:
// Description:

// Define an enum Day for the days of the week.
// Create a function that returns "Weekday" or "Weekend" based on the input day.
// Enum & Function Signature:
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Monday:
    case Day.Tuesday:
    case Day.Wednesday:
    case Day.Thursday:
    case Day.Friday:
      return "Weekday";

    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";

    default:
      return "Invalid day";
  }
}

const a = getDayType(Day.Monday);
const b = getDayType(Day.Sunday);

console.log(a); // Weekday
console.log(b); // Weekend