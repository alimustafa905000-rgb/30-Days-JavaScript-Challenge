# Stopwatch App ⏱

A simple and interactive **Stopwatch App** built using (HTML, CSS, and JavaScript). This project allows users to start, pause, and reset the stopwatch with a clean and responsive user interface.

# Features

* Start the stopwatch
* Pause the stopwatch
* Reset the stopwatch
* Displays:

  * Minutes
  * Seconds
  * Milliseconds
* Responsive design
* Smooth animations
* Modern glassmorphism UI

# Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

 
# How It Works

The stopwatch uses:

* `setInterval()` to run the timer every **10 milliseconds**
* `clearInterval()` to pause or stop the timer
* DOM manipulation to update the timer on the screen

## Logic Flow:

1. **Start Button**

   * Starts the timer
   * Prevents multiple intervals by clearing old intervals

2. **Pause Button**

   * Stops the timer without resetting values

3. **Reset Button**

   * Stops the timer
   * Resets all values to `00:00:00`

# JavaScript Concepts Used

* Variables
* Functions
* Event Listeners
* DOM Selection
* `setInterval()`
* `clearInterval()`
* Conditional Statements
* Ternary Operator

 