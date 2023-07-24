export default function solution(nums: number[]): number[] {
    // Transform the nums array into a set to eliminate duplicates
    const numsSet = new Set(nums)

    // Create an array to store the missing numbers
    const missingNumbers: number[] = []

    // Iterate through the numbers 1 to nums.length
    for (let i = 1; i <= nums.length; i++) {
        // If the number does not exist in the set, add it to the missing numbers array
        if (!numsSet.has(i)) {
            missingNumbers.push(i)
        }
    }

    return missingNumbers
}
