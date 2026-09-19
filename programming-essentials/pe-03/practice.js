const traineeName = "Hussein";
const age = 20;
let completedLessons = 5;
let isReady = false;
const trainerName = null;
const learningLanguage = "Python";

completedLessons = 6;

const status = isReady
    ? "Ready to continue"
    : "Still learning";

console.log(`Name: ${traineeName}`);
console.log(`Age: ${age}`);
console.log(`Completed lessons: ${completedLessons}`);
console.log(`Ready: ${isReady}`);
console.log(`Trainer: ${trainerName ?? "Not assigned"}`);
console.log(`Learning language: ${learningLanguage}`);
console.log(`Status: ${status}`);