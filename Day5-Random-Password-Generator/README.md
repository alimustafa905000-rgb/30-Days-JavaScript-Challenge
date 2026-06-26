# Password Generator

A simple and secure **Password Generator** built with (HTML, CSS, and JavaScript). This project generates random strong passwords and allows users to copy them to the clipboard with one click.

# Features

* Generate a random 12-character password
* Includes:

  * Uppercase letters (A-Z)
  * Lowercase letters (a-z)
  * Numbers (0-9)
  * Special symbols (!@#$%^&*()_+)
* One-click copy to clipboard
* User-friendly interface
* Fast and lightweight

# Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

# How It Works

1. Click the **Generate Password** button.
2. A random password will be created.
3. Click the **Copy** button to copy the password.
4. Paste it wherever needed.
 

# JavaScript Logic

* Defines character sets (uppercase, lowercase, numbers, symbols)
* Combines all characters into one string
* Generates a random password using `Math.random()`
* Displays the password in the input field
* Uses `navigator.clipboard.writeText()` for copy functionality

 