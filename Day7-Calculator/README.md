Calculator App :

A simple and responsive Calculator App built using HTML, CSS, and JavaScript. This project performs basic arithmetic operations with a clean and interactive user interface.

# Features
Perform basic calculations
Addition (+)
Subtraction (-)
Multiplication (*)
Division (/)
Percentage (%)
Clear all input
Delete last entered value
Error handling for invalid expressions
Responsive design


# Technologies Used
HTML5
CSS3
JavaScript (ES6)
 

# How It Works

The calculator works by:

Selecting the display using querySelector()
Appending values when buttons are clicked
Clearing the display
Deleting the last character
Evaluating the mathematical expression using eval()
Functions Used:
appendValue(value)

Adds numbers or operators to the display.

display.value += value;
clearDisplay()

Clears the entire display.

display.value = "";
deleteLast()

Removes the last entered value.

display.value = display.value.slice(0, -1);
calculate()

Calculates the result of the expression.

display.value = eval(display.value);

If the expression is invalid, it shows:
Error


# JavaScript Concepts Used
DOM Manipulation
Functions
Event Handling
String Methods (slice)
Error Handling (try...catch)
eval() Function