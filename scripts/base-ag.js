// Function to generate the daily code based on the current date
function generateDailyCode(date = new Date()) {
    const year = date.getFullYear().toString();              // "2025"
    const month = (date.getMonth() + 1).toString();          // "4" for April
    const day = date.getDate().toString();                   // "29"

    const part1 = year.slice(0, 2);                          // "20"
    const part2 = month;                                     // "4"
    const part3 = day.split('').reverse().join('');         // "92"
    const part4 = year.slice(2);                            // "25"

    const forwardCode = part1 + part2 + part3 + part4;      // "2049225"
    const reversedCode = forwardCode.split('').reverse().join(''); // "5229402"

    return {
        forward: forwardCode,
        reversed: reversedCode
    };
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

// Example usage:
const codes = generateDailyCode();
console.log("Forward Code:", codes.forward);
console.log("Reversed Code:", codes.reversed);

// Map to symbols
const forwardSymbol = mapCodeToSymbols(codes.forward);
const reversedSymbol = mapCodeToSymbols(codes.reversed);

console.log("Mapped Forward Code:", forwardSymbol);  // Example output: "+/""
console.log("Mapped Reversed Code:", reversedSymbol);  // Example output: "10+69"
