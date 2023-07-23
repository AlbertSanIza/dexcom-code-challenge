import Button from '@/components/Button'

export default function ProblemOnePage() {
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
            <div className="font-bold">Solution</div>
            <div className="font-bold">Time and Space Complexity</div>
            <div className="font-bold">Demo</div>
        </div>
    )
}
