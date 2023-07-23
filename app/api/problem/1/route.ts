import { NextResponse } from 'next/server'

function solution(nums: number[]): number[] {
    const numsSet = new Set(nums)

    const missingNumbers: number[] = []
    for (let i = 1; i <= nums.length; i++) {
        if (!numsSet.has(i)) {
            missingNumbers.push(i)
        }
    }

    return missingNumbers
}

export async function POST(request: Request) {
    const body = await request.json()

    const startTime = process.hrtime()
    const result = solution(body.nums || [])
    const endTime = process.hrtime(startTime)

    return NextResponse.json({ input: body, output: result, executionTime: `${endTime[1] / 1000000} ms` })
}
