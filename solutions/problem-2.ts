export default function solution(nums: number[], target: number): number[] {
    // Create an object to store the indices of already checked numbers
    const indices: { [key: number]: number } = {}

    // Iterate through nums array
    for (let i = 0; i < nums.length; i++) {
        // If the target minus the current number is in the indices object, return the indices of those two numbers
        if (indices[target - nums[i]] !== undefined) {
            return [indices[target - nums[i]], i]
        }
        // If undefined, add the current number and its index to the indices object
        indices[nums[i]] = i
    }

    // If no pair of numbers equals the target, return an empty array
    return []
}
