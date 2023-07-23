import { NextResponse } from 'next/server'

function solution(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + nums[i + 1] === target) {
            return [i, i + 1]
        }
    }

    return []
}

export async function POST(request: Request) {
    const body = await request.json()

    const startTime = process.hrtime()
    const result = solution(body.nums || [], body.target || 0)
    const endTime = process.hrtime(startTime)

    return NextResponse.json({ input: body, output: result, executionTime: `${endTime[1] / 1000000} ms` })
}