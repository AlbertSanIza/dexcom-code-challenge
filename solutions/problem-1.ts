export default function solution(nums: number[]): number[] {
    const numsSet = new Set(nums)
    const missingNumbers: number[] = []
    for (let i = 1; i <= nums.length; i++) {
        if (!numsSet.has(i)) {
            missingNumbers.push(i)
        }
    }
    return missingNumbers
}
