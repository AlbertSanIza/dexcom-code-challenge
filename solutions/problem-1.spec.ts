import solution from './problem-1'

describe('Problem 1', () => {
    it('Where nums = [4, 3, 2, 7, 8, 2, 3, 1], the result is [5, 6]', () => {
        const nums = [4, 3, 2, 7, 8, 2, 3, 1]

        const expected = [5, 6]

        expect(solution(nums)).toEqual(expected)
    })
    it('Where nums = [1, 1], the result is [2]', () => {
        const nums = [1, 1]

        const expected = [2]

        expect(solution(nums)).toEqual(expected)
    })
    it('Where nums = [2, 2], the result is [1]', () => {
        const nums = [2, 2]

        const expected = [1]

        expect(solution(nums)).toEqual(expected)
    })
    it('Where nums = [1], the result is []', () => {
        const nums = [1]

        const expected: number[] = []

        expect(solution(nums)).toEqual(expected)
    })
    it('Where nums = [2], the result is [1]', () => {
        const nums = [2]
        const expected = [1]

        expect(solution(nums)).toEqual(expected)
    })
    it('Where nums = [4, 5, 6], the result is [1, 2, 3]', () => {
        const nums = [4, 5, 6]

        const expected = [1, 2, 3]

        expect(solution(nums)).toEqual(expected)
    })
})
