// Function to generate the daily code based on the current date
function generateDailyCode(date = new Date()) {
    const year = date.getFullYear().toString();      // "2025"
    const month = (date.getMonth() + 1).toString();  // "4" for April
    const day = date.getDate().toString();           // "29"

    const part1 = year.slice(0, 2);                  // "20"
    const part2 = month;                             // "4"
    const part3 = day.split('').reverse().join('');  // "92"
    const part4 = year.slice(2);                     // "25"

    const forwardCode = part1 + part2 + part3 + part4;      // "2049225"
    const reversedCode = forwardCode.split('').reverse().join(''); // "5229402"

    return reversedCode;
}

// Function to map digits to their respective symbols
function mapCodeToSymbols(code) {
    const mapping = {
        '0': 'z',
        '1': '/',
        '2': '"',
        '3': '[',
        '4': '+',
        '5': '@',
        '6': '<',
        '7': '43',
        '8': '69',
        '9': '10'
    };

    return code.split('').map(digit => mapping[digit] || digit).join('');
}

// Generate today's correct password
const reversedCode = generateDailyCode();             // e.g., "5229402"
const correctPassword = mapCodeToSymbols(reversedCode); // e.g., '@""10+z"'

// Select DOM elements
const passwordInput = document.getElementById("password-input");
const warningLabel = document.getElementById("warning-label");
const loginButton = document.getElementById("login-button"); // Select the login button

// Function to add CSS for .show-hidden and .show-login styles
function addStylesToElements() {
    // Add styles for .show-hidden to the warning label
    warningLabel.style.transition = "all 1.3s ease-in-out";  // Changed to 1.3 seconds
    warningLabel.style.transform = "translateY(0px)";
    warningLabel.style.opacity = "1";

    // Add styles for .show-login to the login button
    loginButton.style.transition = "all 1.3s ease-in-out";   // Changed to 1.3 seconds
    loginButton.style.transform = "translateY(0px)";
    loginButton.style.opacity = "1";
}

// Listen for user input
passwordInput.addEventListener("input", () => {
    const input = passwordInput.value;
    
    if (input === correctPassword) {
        warningLabel.classList.add("show-hidden");  // Show the warning label
        loginButton.classList.add("show-login");    // Add .show-login class to the login button
        addStylesToElements();                      // Add inline CSS for both elements
    } else {
        warningLabel.classList.remove("show-hidden");
        loginButton.classList.remove("show-login");
    }
});
