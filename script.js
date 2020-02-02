
// Utility Function to test a number range. 
function testNumberRange(number){
    if (number >= 8 && number <= 128) {
        return true;
    } else {
        return false;
    }
}

// Function for converting array values to Uppercase. 
var ArrayToUpperCase = function (x) {
    return x.toUpperCase();
};  

// This updates the password input with the value we pass
function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}

// This is our password Generator. 
function generatePassword() {
    var confirmNumber;
    var confirmCharacter;
    var confirmUppercase;
    var confirmLowercase;
    var choices;
    var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
    var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var alpha2 = alpha.map(ArrayToUpperCase);
    var space = [];
    var password = [];

    // This is what the user typed in the prompt, then we parse the number from the string.  
    // This is how long the password will be. 
    var input = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    console.log("Input ::  "+input);
   
    if (input) {
        console.log("We have valid input from the prompt. ");

        // If the input is in the right number range. 
        if (testNumberRange(input)) {
            // It's in the right range. 
            console.log("It's in the correct number range. ");
             // Continues once user input is validated

            confirmNumber = confirm("Will this contain numbers?");
            confirmCharacter = confirm("Will this contain special characters?");
            confirmUppercase = confirm("Will this contain Uppercase letters?");
            confirmLowercase = confirm("Will this contain Lowercase letters?");
            
            
            // Else if for 4 negative options
            if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
                choices = alert("You must choose a criteria!");
            }
            // First if statement that uses user input prompts to determine choices
            // Else if for 4 positive options
            else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

                choices = character.concat(number, alpha, alpha2);
            }
            // Else if for 3 positive options
            else if (confirmCharacter && confirmNumber && confirmUppercase) {
                choices = character.concat(number, alpha2);
            }
            else if (confirmCharacter && confirmNumber && confirmLowercase) {
                choices = character.concat(number, alpha);
            }
            else if (confirmCharacter && confirmLowercase && confirmUppercase) {
                choices = character.concat(alpha, alpha2);
            }
            else if (confirmNumber && confirmLowercase && confirmUppercase) {
                choices = number.concat(alpha, alpha2);
            }
            // Else if for 2 positive options 
            else if (confirmCharacter && confirmNumber) {
                choices = character.concat(number);

            } else if (confirmCharacter && confirmLowercase) {
                choices = character.concat(alpha);

            } else if (confirmCharacter && confirmUppercase) {
                choices = character.concat(alpha2);
            }
            else if (confirmLowercase && confirmNumber) {
                choices = alpha.concat(number);

            } else if (confirmLowercase && confirmUppercase) {
                choices = alpha.concat(alpha2);

            } else if (confirmNumber && confirmUppercase) {
                choices = number.concat(alpha2);
            }
            // Else if for 1 positive option
            else if (confirmCharacter) {
                choices = character;
            }
            else if (confirmNumber) {
                choices = number;
            }
            else if (confirmLowercase) {
                choices = alpha;
            }
            // Created space variable to fill uppercase conversion
            else if (confirmUppercase) {
                choices = space.concat(alpha2);
            };

            // password variable is an array placeholder for user generated amount of length
            var password = [];

            // Start random selection variables:
            // Random selection for all variables: 
            for (var i = 0; i < input; i++) {
                var pickChoices = choices[Math.floor(Math.random() * choices.length)];
                password.push(pickChoices);
            }
       
            var ps = password.join("");
            UserInput(ps);
            return ps;

        } else {
            // its not in the right range. 
            console.log("Were not good to move on. ");
            alert('There was an issue. Please try again. You Must Enter the correct Range. Please enter a value between 8 and 128. ');

        }
        // End if the user is the right number range. 

    // Make sure the input provided is between this number range.     
    } else {
        alert("This is a required field.");
        return;
    }

};

// Add an event listener to the button with the ID of generate. 
document.querySelector("#generate").addEventListener("click", function (e) {
    e.preventDefault();
    var GeneratedPassword = generatePassword();
    document.getElementById("password").placeholder = GeneratedPassword;
});
