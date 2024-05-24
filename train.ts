//MITASK: ZP-TASK:

// Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

function majorityElement(nums: number[]): number {
    const count: { [key: number]: number } = {};

    for (const num of nums) {
        if (count[num] !== undefined) {
            count[num]++;
        } else {
            count[num] = 1;
        }
    }

    let majority = nums[0];
    let maxCount = 0;

    for (const num in count) {
        if (count[num] > maxCount) {
            maxCount = count[num];
            majority = Number(num);
        }
    }

    return majority;
}

// Misol:
console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));  // Natija: 4
