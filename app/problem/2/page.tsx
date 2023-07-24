import TestComponent from '@/app/problem/2/test'
import Button from '@/components/Button'
import Code from '@/components/Code'
import getSolutionString from '@/utils/getSolutionString'

export default async function ProblemTwoPage() {
    const solutionString = await getSolutionString(2)

    return (
        <div className="flex flex-col gap-6 p-6 text-justify">
            <div>
                <Button href="/" text="Back" />
            </div>
            <div>
                <div className="text-xl font-bold">Problem 2</div>
                Given a list of integers nums and an integer target, write a function that solves the following problem; return indices of
                the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may
                not use the same element twice. You can return the answer in any order.
            </div>
            <div>
                <div className="font-bold">Examples</div>
                <div>#1 Where nums = [2, 7, 11, 15] and target = 9, the result is [0, 1]</div>
                <div>#2 Where nums = [3, 2, 4] and target = 6, the result is [1, 2]</div>
                <div>#3 Where nums = [3, 3] and target = 6, the result is [0, 1]</div>
            </div>
            <div>
                <div className="font-bold">Solution (Typescript)</div>
                <Code text={solutionString} />
            </div>
            <div>
                <div className="font-bold">Complexity</div>
                <div>Time: O(n) where n is the length of the input array nums</div>
                <div>Space: O(k) where k is the length of the input array nums as a new object</div>
            </div>
            <TestComponent />
        </div>
    )
}
