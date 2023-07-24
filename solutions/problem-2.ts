export default function solution(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + nums[i + 1] === target) {
            return [i, i + 1]
        }
    }
    return []
}
