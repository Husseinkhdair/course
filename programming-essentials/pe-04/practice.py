completed_exercises_text = "8"
total_exercises_text = "10"
bonus_points_text = "5"

target_percentage = 80

try:
    completed_exercises = float(completed_exercises_text)
    total_exercises = float(total_exercises_text)
    bonus_points = float(bonus_points_text)

    inputs_are_valid = (
        total_exercises > 0
        and completed_exercises >= 0
        and completed_exercises <= total_exercises
        and bonus_points >= 0
    )

    if not inputs_are_valid:
        print("Invalid input.")
    else:
        base_percentage = (
            completed_exercises / total_exercises
        ) * 100

        final_percentage = min(
            base_percentage + bonus_points,
            100
        )

        reached_target = (
            final_percentage >= target_percentage
        )

        print(
            f"Completed: "
            f"{completed_exercises:g}/{total_exercises:g}"
        )

        print(f"Bonus points: {bonus_points:g}")
        print(f"Result: {final_percentage:g}%")

        if reached_target:
            print("Target reached.")
        else:
            print("Target not reached.")

except ValueError:
    print("Invalid input: values must be numbers.")