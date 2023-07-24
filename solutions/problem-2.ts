export default function solution(nums: number[], target: number): number[] {
    // Iterate through nums array
    for (let i = 0; i < nums.length - 1; i++) {
        // If the current number plus the next number equals the target, return the indices of the numbers
        if (nums[i] + nums[i + 1] === target) {
            return [i, i + 1]
        }
    }

    // If no pair of numbers equals the target, return an empty array
    return []
}
