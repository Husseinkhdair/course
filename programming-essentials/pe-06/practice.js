const trainingMinutes = [20, 35, 30, 15, 45, 30, 25];

let totalMinutes = 0;
let daysAtLeast30 = 0;
let maximumMinutes = null;

for (let i = 0; i < trainingMinutes.length; i++) {
    const minutes = trainingMinutes[i];

    totalMinutes += minutes;

    if (minutes >= 30) {
        daysAtLeast30++;
    }

    if (maximumMinutes === null || minutes > maximumMinutes) {
        maximumMinutes = minutes;
    }

    console.log(`Day ${i + 1}: ${minutes} minutes`);
}

console.log("----- Summary -----");
console.log(`Total: ${totalMinutes} minutes`);
console.log(`Days >= 30: ${daysAtLeast30}`);
console.log(
    maximumMinutes === null
        ? "Maximum: No data"
        : `Maximum: ${maximumMinutes} minutes`
);