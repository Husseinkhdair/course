lessons = [
    {"name": "Python Basics", "completed": True, "minutes": 45},
    {"name": "Loops", "completed": False, "minutes": 30},
    {"name": "Functions", "completed": True, "minutes": 50},
    {"name": "Testing", "completed": False, "minutes": 40},
]


def create_report(lessons):
    completed_count = 0
    total_minutes = 0
    incomplete_lessons = []

    for lesson in lessons:
        total_minutes += lesson["minutes"]

        if lesson["completed"]:
            completed_count += 1
        else:
            incomplete_lessons.append(lesson["name"])

    print("===== Weekly Learning Report =====")
    print(f"Completed: {completed_count}")
    print(f"Total minutes: {total_minutes}")

    print("Incomplete lessons:")

    for i in range(len(incomplete_lessons)):
        print(f"{i + 1}. {incomplete_lessons[i]}")

    if len(incomplete_lessons) == 0:
        print("None")


def get_valid_input():
    attempts = 0

    while attempts < 3:
        value = "invalid"

        if value == "valid":
            return value

        attempts += 1
        print(f"Invalid input. Attempt {attempts}/3")

    print("Maximum attempts reached.")
    return None


create_report(lessons)
get_valid_input()