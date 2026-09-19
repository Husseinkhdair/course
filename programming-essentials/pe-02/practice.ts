let traineeName: string = "Hussein";
let age: number = 20;
let completedLessons: number = 5;
let isReady: boolean = true;
const trainerName: string = "Ahmed";

console.log(traineeName, typeof traineeName);
console.log(age, typeof age);
console.log(completedLessons, typeof completedLessons);
console.log(isReady, typeof isReady);
console.log(trainerName, typeof trainerName);

traineeName = "Ali";
age = 21;
completedLessons = 6;
isReady = false;

console.log("\nAfter changes:");
console.log(traineeName);
console.log(age);
console.log(completedLessons);
console.log(isReady);

// خطأ مقصود:
// completedLessons = "six";

// بعد قراءة رسالة المترجم نعيد القيمة الصحيحة
completedLessons = 7;

console.log("\nFinal lessons:", completedLessons);

export {};