const completedExercisesText: string = "8";
const totalExercisesText: string = "10";
const bonusPointsText: string = "5";

const targetPercentage: number = 80;

const completedExercises: number = Number(completedExercisesText);
const totalExercises: number = Number(totalExercisesText);
const bonusPoints: number = Number(bonusPointsText);

const inputsAreValid: boolean =
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
    const basePercentage: number =
        (completedExercises / totalExercises) * 100;

    const finalPercentage: number = Math.min(
        basePercentage + bonusPoints,
        100
    );

    const reachedTarget: boolean =
        finalPercentage >= targetPercentage;

    console.log(
        `Completed: ${completedExercises}/${totalExercises}`
    );

    console.log(`Bonus points: ${bonusPoints}`);
    console.log(`Result: ${finalPercentage}%`);

    console.log(
        reachedTarget
            ? "Target reached."
            : "Target not reached."
    );
}

export {};