const lessonMinutesText: string = "45";
const practiceMinutesText: string = "35";

const lessonMinutes: number = Number(lessonMinutesText);
const practiceMinutes: number = Number(practiceMinutesText);

const isValid: boolean =
    Number.isFinite(lessonMinutes) &&
    Number.isFinite(practiceMinutes) &&
    lessonMinutes >= 0 &&
    practiceMinutes >= 0;

if (!isValid) {
    console.log("Invalid input: minutes must be non-negative numbers.");
} else {
    const totalMinutes: number = lessonMinutes + practiceMinutes;
    const totalHours: number = Math.floor(totalMinutes / 60);
    const remainingMinutes: number = totalMinutes % 60;

    console.log(`Total: ${totalMinutes} minutes`);
    console.log(
        `Time: ${totalHours} hour(s) and ${remainingMinutes} minute(s)`
    );
}

export {};