trainee_name = "Hussein"
age = 20
completed_lessons = 5
is_ready = False
trainer_name = None
learning_language = "Python"

completed_lessons = 6

if is_ready:
    status = "Ready to continue"
else:
    status = "Still learning"

print(f"Name: {trainee_name}")
print(f"Age: {age}")
print(f"Completed lessons: {completed_lessons}")
print(f"Ready: {is_ready}")
print(f"Trainer: {trainer_name if trainer_name else 'Not assigned'}")
print(f"Learning language: {learning_language}")
print(f"Status: {status}")