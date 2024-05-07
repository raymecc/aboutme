// Arithmetic Calculator
document.getElementById("arithmetic-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form values
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operation = document.querySelector('input[name="operation"]:checked').value;
  
    // Perform arithmetic operation
    var result;
    switch (operation) {
      case "addition":
        result = num1 + num2;
        break;
      case "subtraction":
        result = num1 - num2;
        break;
      case "multiplication":
        result = num1 * num2;
        break;
      case "division":
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          alert("Error: Division by zero!");
          return;
        }
        break;
    }
  
    // Display result
    alert("Result: " + result);
  });
  
  // Factorial Calculator
  document.getElementById("factorial-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form value
    var number = parseInt(document.getElementById("number").value);
    
    // Calculate factorial
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
      factorial *= i;
    }
  
    // Display result
    alert("Factorial of " + number + " is: " + factorial);
  });
  
  // Fibonacci Number Generator
  document.getElementById("fibonacci-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form value
    var nth = parseInt(document.getElementById("nth").value);
  
    // Generate Fibonacci sequence
    var fib = [];
    fib[0] = 0;
    fib[1] = 1;
    for (var i = 2; i <= nth; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  
    // Display result
    alert("The " + nth + "th Fibonacci number is: " + fib[nth]);
  });
  
  // Maximum, Minimum, and Range Finder
  document.getElementById("range-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form values
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
  
    // Find maximum, minimum, and range
    var max = Math.max(num1, num2, num3);
    var min = Math.min(num1, num2, num3);
    var range = max - min;
  
    // Display result
    alert("Maximum number: " + max + "\nMinimum number: " + min + "\nRange: " + range);
  });
  
  // Mailing List Sign-up
  document.getElementById("mailing-list-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form values
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var zipCode = document.getElementById("zip-code").value;
  
    // Construct HTML string for new sign-up
    var newSignUp = "<p><strong>Name:</strong> " + firstName + " " + lastName + "<br><strong>Email:</strong> " + email + "<br><strong>ZIP Code:</strong> " + zipCode + "</p>";
  
    // Append new sign-up to the signup-list div
    document.getElementById("signup-list").innerHTML += newSignUp;
  
    // Reset the form
    document.getElementById("mailing-list-form").reset();
  });
  