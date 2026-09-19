const traineeName: string = "Hussein";
const age: number = 20;

let completedLessons: number = 5;
let isReady: boolean = false;

const trainerName: string | null = null;
const learningLanguage = "TypeScript";

completedLessons = 6;

const status: string = isReady
    ? "Ready to continue"
    : "Still learning";

console.log(`Name: ${traineeName}`);
console.log(`Age: ${age}`);
console.log(`Completed lessons: ${completedLessons}`);
console.log(`Ready: ${isReady}`);
console.log(`Trainer: ${trainerName ?? "Not assigned"}`);
console.log(`Learning language: ${learningLanguage}`);
console.log(`Status: ${status}`);

export {};