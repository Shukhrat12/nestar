// ZK-TASK:

// Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
// MASALAN: printNumbers()

// function printNumbers() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i)
//     }
// }

// let res = setInterval(printNumbers, 1000)

// setTimeout(() => { clearInterval(res); printNumbers }, 5000);

// Shunday function yozing, 
// u parametrda berilgan stringni kebab casega otkazib qaytarsin. 
// Bosh harflarni kichik harflarga ham otkazsin.

// MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”

// function stringToKebab(str: string) {
//     const res = str.replaceAll(" ", "-").toLocaleLowerCase();
//     return res
// }

// const result = stringToKebab("I love Kebab")
// console.log(result)

// ZM-TASK:

// Shunday function yozing, u function parametrga berilgan raqamlarni orqasiga ogirib qaytarsin.
// MASALAN: reverseInteger(123456789) return 987654321

function reverseInteger(num: number) {
    const strParam = num.toString()
    let str = ''
    for (let i = strParam.length - 1; i >= 0; i--) {
        const element = strParam[i];
        str += element
    }
    return str
}

const result = reverseInteger(123456789)
console.log(result)