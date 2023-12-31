import TestComponent from '@/app/problem/1/test'
import Button from '@/components/Button'
import Code from '@/components/Code'
import getSolutionString from '@/utils/getSolutionString'

export default async function ProblemOnePage() {
    const solutionString = await getSolutionString(1)

    return (
        <div className="flex flex-col gap-6 p-6 text-justify">
            <div>
                <Button href="/" text="Back" />
            </div>
            <div>
                <div className="text-xl font-bold">Problem 1</div>
                Given a list nums of n integers where nums[i] is in the range [1, list length], write a function that solves the following
                problem; return a list of all the integers in the range [1, list length] that do not appear in nums.
            </div>
            <div>
                <div className="font-bold">Examples</div>
                <div>#1 Where nums = [4, 3, 2, 7, 8, 2, 3, 1], the result is [5, 6] </div>
                <div>#2 Where nums = [1, 1], the result is [2]</div>
            </div>
            <div>
                <div className="font-bold">Solution (Typescript)</div>
                <Code text={solutionString} />
            </div>
            <div>
                <div className="font-bold">Complexity</div>
                <div>Time: O(n) where n is the length of the input array nums</div>
                <div>Space: O(k) where k is the number of elements in the resulting missing numbers</div>
            </div>
            <TestComponent />
        </div>
    )
}
