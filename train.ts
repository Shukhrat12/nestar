// Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. 
//Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true

function areParenthesesBalanced(input: string): boolean {
    if (!input.includes('(') && !input.includes(')')) {
        return false;
    }
    let balance = 0;
    for (let char of input) {
        if (char === '(') {
            balance++;
        } else if (char === ')') {
            balance--;
        }
        if (balance < 0) {
            return false;
        }
    }
    return balance === 0;
}

console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda")); // true
console.log(areParenthesesBalanced("string)ichida(qavslar(")); // false
console.log(areParenthesesBalanced("string(ichida(qavslar)soni()balansda(")); // false
console.log(areParenthesesBalanced("((()))")); // true
console.log(areParenthesesBalanced("(()))(")); // false
console.log(areParenthesesBalanced("string")); // false
