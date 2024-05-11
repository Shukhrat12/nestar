// ZK-TASK:

// Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
// MASALAN: printNumbers()

function printNumbers() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
}

let res = setInterval(printNumbers, 1000)

setTimeout(() => { clearInterval(res); printNumbers }, 5000);
