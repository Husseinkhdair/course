type Lesson = {
    name: string;
    completed: boolean;
    minutes: number;
};

const lessons: Lesson[] = [
    { name: "Python Basics", completed: true, minutes: 45 },
    { name: "Loops", completed: false, minutes: 30 },
    { name: "Functions", completed: true, minutes: 50 },
    { name: "Testing", completed: false, minutes: 40 }
];

function createReport(lessons: Lesson[]): void {
    let completedCount = 0;
    let totalMinutes = 0;
    const incompleteLessons: string[] = [];

    for (let i = 0; i < lessons.length; i++) {
        const lesson = lessons[i];

        totalMinutes += lesson.minutes;

        if (lesson.completed) {
            completedCount++;
        } else {
            incompleteLessons.push(lesson.name);
        }
    }

    console.log("===== Weekly Learning Report =====");
    console.log(`Completed: ${completedCount}`);
    console.log(`Total minutes: ${totalMinutes}`);

    console.log("Incomplete lessons:");

    for (let i = 0; i < incompleteLessons.length; i++) {
        console.log(`${i + 1}. ${incompleteLessons[i]}`);
    }

    if (incompleteLessons.length === 0) {
        console.log("None");
    }
}

function getValidInput(): string | null {
    let attempts = 0;
    let value: string;

    while (attempts < 3) {
        value = "invalid";

        if (value === "valid") {
            return value;
        }

        attempts++;
        console.log(`Invalid input. Attempt ${attempts}/3`);
    }

    console.log("Maximum attempts reached.");
    return null;
}

createReport(lessons);
getValidInput();

export{}
