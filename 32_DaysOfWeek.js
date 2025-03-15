// function daysofweek(day){
//     switch(day){
//     case 1:
//         console.log("monday");
//     break;
//     case 2:
//         console.log("tueday");
//     break;
    
//     default:
//         console.log("fff")
//         break;
//     }
// }
// daysofweek(9)


function DaysOfWeek(day) {
    switch (day) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
        default: return "Invalid day"; // Corrected default message
    }
}

// Testing the function
console.log(DaysOfWeek(7));  // Output: Sunday
console.log(DaysOfWeek(4));  // Output: Thursday
console.log(DaysOfWeek(10)); // Output: Invalid day
