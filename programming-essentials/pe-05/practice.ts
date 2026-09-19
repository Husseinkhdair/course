const scoreText: string = "80";
const projectCompletedText: string = "true";
const preferredFieldText: string = "backend";

const score: number = Number(scoreText);
const projectCompleted: boolean = projectCompletedText === "true";
const preferredField: string = preferredFieldText.trim().toLowerCase();

const validFields: string[] = ["frontend", "backend", "data"];

const isValid: boolean =
    Number.isFinite(score) &&
    score >= 0 &&
    score <= 100 &&
    validFields.includes(preferredField);

if (!isValid) {
    console.log("Invalid input.");
} else if (score >= 80 && projectCompleted) {
    console.log("Next step: Advanced project.");
    console.log("Rule: Score is at least 80 and the project is completed.");
} else if (score < 60 || !projectCompleted) {
    console.log("Next step: Review and practice.");
    console.log("Rule: Score is below 60 or the project is not completed.");
} else {
    console.log(`Next step: Continue ${preferredField} learning.`);
    console.log("Rule: The trainee is developing and can continue learning.");
}

export {};