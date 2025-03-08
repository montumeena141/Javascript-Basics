// Library Fine Calculator
/*
    Fine Structure:
    - First 5 days: $0.50/day
    - Days 6-10: $1.00/day
    - Days 11-30: $5.00/day
    - More than 30 days: $10.00/day
*/

var overDueDays = 15; // Number of overdue days
var fine = 0; // Initialize fine

// Calculate fine based on overdue days
if (overDueDays <= 5) {
    fine = overDueDays * 0.50;
} else if (overDueDays <= 10) {
    fine = (5 * 0.50) + ((overDueDays - 5) * 1.00); 
    // First 5 days cost $2.5, remaining days cost $1 each
} else if (overDueDays <= 30) {
    fine = (5 * 0.50) + (5 * 1.00) + ((overDueDays - 10) * 5);
    // First 10 days cost $7.5, remaining days cost $5 each
} else {
    fine = (5 * 0.50) + (5 * 1.00) + (20 * 5) + ((overDueDays - 30) * 10);
    // First 30 days cost $107.5, remaining days cost $10 each
}

console.log("Total fine: $", fine);
