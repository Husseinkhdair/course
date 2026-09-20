training_minutes = [20, 35, 30, 15, 45, 30, 25]

total_minutes = 0
days_at_least_30 = 0
maximum_minutes = None

for i in range(len(training_minutes)):
    minutes = training_minutes[i]

    total_minutes += minutes

    if minutes >= 30:
        days_at_least_30 += 1

    if maximum_minutes is None or minutes > maximum_minutes:
        maximum_minutes = minutes

    print(f"Day {i + 1}: {minutes} minutes")

print("----- Summary -----")
print(f"Total: {total_minutes} minutes")
print(f"Days >= 30: {days_at_least_30}")

if maximum_minutes is None:
    print("Maximum: No data")
else:
    print(f"Maximum: {maximum_minutes} minutes")