lesson_minutes_text = "45"
practice_minutes_text = "35"

try:
    lesson_minutes = int(lesson_minutes_text)
    practice_minutes = int(practice_minutes_text)

    is_valid = lesson_minutes >= 0 and practice_minutes >= 0

    if not is_valid:
        print("Invalid input: minutes must be non-negative numbers.")
    else:
        total_minutes = lesson_minutes + practice_minutes
        total_hours = total_minutes // 60
        remaining_minutes = total_minutes % 60

        print(f"Total: {total_minutes} minutes")
        print(
            f"Time: {total_hours} hour(s) "
            f"and {remaining_minutes} minute(s)"
        )

except ValueError:
    print("Invalid input: minutes must be numbers.")