const completedExercisesText = "8";
const totalExercisesText = "10";
const bonusPointsText = "5";

const targetPercentage = 80;

const completedExercises = Number(completedExercisesText);
const totalExercises = Number(totalExercisesText);
const bonusPoints = Number(bonusPointsText);

const inputsAreValid =
    Number.isFinite(completedExercises) &&
    Number.isFinite(totalExercises) &&
    Number.isFinite(bonusPoints) &&
    totalExercises > 0 &&
    completedExercises >= 0 &&
    completedExercises <= totalExercises &&
    bonusPoints >= 0;

if (!inputsAreValid) {
    console.log("Invalid input.");
} else {
    const basePercentage =
        (completedExercises / totalExercises) * 100;

    const finalPercentage = Math.min(
        basePercentage + bonusPoints,
        100
    );

    const reachedTarget = finalPercentage >= targetPercentage;

    console.log(`Completed: ${completedExercises}/${totalExercises}`);
    console.log(`Bonus points: ${bonusPoints}`);
    console.log(`Result: ${finalPercentage}%`);
    console.log(
        reachedTarget
            ? "Target reached."
            : "Target not reached."
    );
}