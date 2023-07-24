'use client'
import { useState } from 'react'

import Code from '@/components/Code'

export default function TestComponent() {
    const [result, setResult] = useState('')
    const [validNums, setValidNums] = useState(true)
    const [nums, setNums] = useState('[4, 3, 2, 7, 8, 2, 3, 1]')

    const onChange = (event: any) => {
        setNums(event.target.value)
        try {
            const numsArray = JSON.parse(event.target.value)
            if (Array.isArray(numsArray) && numsArray.every((num) => typeof num === 'number')) {
                setValidNums(true)
            } else {
                setValidNums(false)
            }
        } catch (error) {
            setValidNums(false)
        }
    }

    const onClick = async () => {
        const response = await fetch('/api/problem/1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nums: JSON.parse(nums) }),
        })
        const data = await response.json()
        setResult(JSON.stringify(data, null, 2))
    }

    return (
        <div>
            <div className="font-bold">Demo </div>
            <div className="flex w-full items-end gap-6">
                <div className="w-full">
                    <label htmlFor="comment" className=" text-sm font-medium leading-6 text-gray-900">
                        nums
                    </label>
                    <input
                        placeholder="[4, 3, 2, 7, 8, 2, 3, 1]"
                        className="w-full rounded-md border-0 p-2 ring-1 ring-inset ring-gray-200"
                        value={nums}
                        onChange={onChange}
                    ></input>
                </div>
                <button
                    className="rounded bg-gray-100 p-2 font-semibold hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-200"
                    onClick={onClick}
                    disabled={!validNums}
                >
                    Run
                </button>
            </div>
            {result && (
                <div>
                    <div className="font-bold">Result </div>
                    <Code text={result} language="json" />
                </div>
            )}
        </div>
    )
}
