// ZJ-TASK:

// Shunday function yozing, u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
// MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8

function reduceNestedArray(param: (number | (number | number[])[])[]) {
    let sum: number = 0;
    const res = param.flat(2)
    for (let i = 0; i < res.length; i++) {
        sum += res[i]
    }

    return sum;
}

const result = reduceNestedArray([1, [1, 2, [4]]])
console.log(result)