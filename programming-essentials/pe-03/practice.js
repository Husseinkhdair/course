const lessonMinutesText = "45";
const practiceMinutesText = "35";

const lessonMinutes = Number(lessonMinutesText);
const practiceMinutes = Number(practiceMinutesText);

const isValid =
    Number.isFinite(lessonMinutes) &&
    Number.isFinite(practiceMinutes) &&
    lessonMinutes >= 0 &&
    practiceMinutes >= 0;

if (!isValid) {
    console.log("Invalid input: minutes must be non-negative numbers.");
} else {
    const totalMinutes = lessonMinutes + practiceMinutes;
    const totalHours = Math.floor(totalMinutes / 60);
    const remainingMinutes = totalMinutes % 60;

    console.log(`Total: ${totalMinutes} minutes`);
    console.log(`Time: ${totalHours} hour(s) and ${remainingMinutes} minute(s)`);
}