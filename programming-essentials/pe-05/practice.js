const scoreText = "80";
const projectCompletedText = "true";
const preferredFieldText = "backend";

const score = Number(scoreText);
const projectCompleted = projectCompletedText === "true";
const preferredField = preferredFieldText.trim().toLowerCase();

const validFields = ["frontend", "backend", "data"];

const isValid =
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