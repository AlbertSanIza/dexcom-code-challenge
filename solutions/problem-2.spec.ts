import solution from './problem-2'

describe('Problem 2', () => {
    it('Where nums = [2, 7, 11, 15] and target = 9, the result is [0, 1]', () => {
        const nums = [2, 7, 11, 15]
        const target = 9

        const expected = [0, 1]

        expect(solution(nums, target)).toEqual(expected)
    })
    it('Where nums = [3, 2, 4] and target = 6, the result is [1, 2]', () => {
        const nums = [3, 2, 4]
        const target = 6

        const expected = [1, 2]

        expect(solution(nums, target)).toEqual(expected)
    })
    it('Where nums = [3, 3] and target = 6, the result is [0, 1]', () => {
        const nums = [3, 3]
        const target = 6

        const expected = [0, 1]

        expect(solution(nums, target)).toEqual(expected)
    })
    it('Where nums = [1, 2, 3, 4, 5, 6, 7] and target = 4, the result is []', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7]
        const target = 4

        const expected: number[] = []

        expect(solution(nums, target)).toEqual(expected)
    })
})
