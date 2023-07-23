import { NextResponse } from 'next/server'

import solution from '@/utils/solution-2'

export async function POST(request: Request) {
    const body = await request.json()

    const startTime = process.hrtime()
    const result = solution(body.nums || [], body.target || 0)
    const endTime = process.hrtime(startTime)

    return NextResponse.json({ input: body, output: result, executionTime: `${endTime[1] / 1000000} ms` })
}
