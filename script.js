function generatePassword() {

    var specialCharacterArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "}", "~"];
    var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var lowercaseCharactersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppercaseCharactersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var passwordCharacterArray = [];
    var CharacterCount = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    var generatedPassword = "";

    // Check to see if it's a number, and that number is greater or equal to 8 and less than or equal to 128. 
    if (!isNaN(CharacterCount) && CharacterCount >= 8 && CharacterCount <= 128) {

        if (confirm("Will this contain numbers?")) {
            passwordCharacterArray.push(numberArray);
        }
        if (confirm("Will this contain special characters?")) {
            passwordCharacterArray.push(specialCharacterArray);
        }
        if (confirm("Will this contain Uppercase letters?")) {
            passwordCharacterArray.push(uppercaseCharactersArray);
        }
        if (confirm("Will this contain Lowercase letters?")) {
            passwordCharacterArray.push(lowercaseCharactersArray);
        }
        if (passwordCharacterArray.length === 0) {
            alert("You Must select at least one character set to generate your password. Please try again. ")
            return false;
        }

        for (var i = 0; i < CharacterCount; i++) {
            var selectedCharacterArray = (Math.floor(Math.random() * passwordCharacterArray.length))
            generatedPassword = generatedPassword + passwordCharacterArray[selectedCharacterArray][Math.floor(Math.random() * passwordCharacterArray[selectedCharacterArray].length)]
        }
        // All Checks Passed and Calculations done. Return the password. 
        return generatedPassword;
        
    } else {
        alert("Please try again. Only use numbers. The number should be between 8 and 128.");
        return false;
    }

};

// Event Listener
document.querySelector("#generate").addEventListener("click", function (e) {
    e.preventDefault();
    var password = generatePassword();
    if (password === false || password === undefined) {
        // Do nothing. 
    } else {
        // Since everything is good, write the pw to the input. 
        document.getElementById("password").value = password;
    }
});