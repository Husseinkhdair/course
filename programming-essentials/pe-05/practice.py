score_text = "80"
project_completed_text = "true"
preferred_field_text = "backend"

try:
    score = float(score_text)
    project_completed = project_completed_text == "true"
    preferred_field = preferred_field_text.strip().lower()

    valid_fields = ["frontend", "backend", "data"]

    is_valid = (
        0 <= score <= 100
        and preferred_field in valid_fields
    )

    if not is_valid:
        print("Invalid input.")

    elif score >= 80 and project_completed:
        print("Next step: Advanced project.")
        print(
            "Rule: Score is at least 80 "
            "and the project is completed."
        )

    elif score < 60 or not project_completed:
        print("Next step: Review and practice.")
        print(
            "Rule: Score is below 60 "
            "or the project is not completed."
        )

    else:
        print(
            f"Next step: Continue "
            f"{preferred_field} learning."
        )
        print(
            "Rule: The trainee is developing "
            "and can continue learning."
        )

except ValueError:
    print("Invalid score.")