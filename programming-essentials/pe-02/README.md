Project Structure
pe-03/
├── practice.js
├── practice.ts
├── practice.py
└── README.md
Data Dictionary
Name	Type	Example	Variable or Constant	Reason
traineeName	string	"Hussein"	Constant	The name does not change
age	number/int	20	Constant	The example does not update the age
completedLessons	number/int	5	Variable	The lesson count must be updated
isReady	boolean/bool	false	Variable	The readiness state can change
trainerName	null/None	null	Constant	The trainer is intentionally missing
learningLanguage	string	"TypeScript"	Constant	The selected language does not change
status	string	"Still learning"	Variable	The status is calculated from readiness
JavaScript
Run
node practice.js
Main concepts

JavaScript uses:

const

for values that should not be reassigned, and:

let

for values that can change.

Example:

const traineeName = "Hussein";
let completedLessons = 5;

completedLessons = 6;
TypeScript
Run
npx tsx practice.ts

TypeScript allows explicit types:

const age: number = 20;
const traineeName: string = "Hussein";
const isReady: boolean = false;

It also supports type inference:

const learningLanguage = "TypeScript";

TypeScript understands that learningLanguage is a string.

The trainer can intentionally have no value:

const trainerName: string | null = null;
Python
Run
python practice.py

Python uses normal variable assignment:

trainee_name = "Hussein"
age = 20
is_ready = False

A missing value can be represented using:

trainer_name = None