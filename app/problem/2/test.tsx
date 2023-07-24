'use client'
import { useState } from 'react'

import Code from '@/components/Code'

export default function TestComponent() {
    const [result, setResult] = useState('')
    const [target, setTarget] = useState('9')
    const [validNums, setValidNums] = useState(true)
    const [nums, setNums] = useState('[2, 7, 11, 15]')
    const [validTarget, setValidTarget] = useState(true)

    const onNumsChange = (event: any) => {
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

    const onTargetChange = (event: any) => {
        setTarget(event.target.value)
        if (event.target.value !== '' && !isNaN(Number(event.target.value))) {
            setValidTarget(true)
        } else {
            setValidTarget(false)
        }
    }

    const onClick = async () => {
        const response = await fetch('/api/problem/2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nums: JSON.parse(nums), target: Number(target) }),
        })
        const data = await response.json()
        setResult(JSON.stringify(data, null, 4))
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
                        placeholder="[2, 7, 11, 15]"
                        className="w-full rounded-md border-0 p-2 ring-1 ring-inset ring-gray-200"
                        value={nums}
                        onChange={onNumsChange}
                    ></input>
                </div>
                <div className="w-full">
                    <label htmlFor="comment" className=" text-sm font-medium leading-6 text-gray-900">
                        target
                    </label>
                    <input
                        placeholder="9"
                        className="w-full rounded-md border-0 p-2 ring-1 ring-inset ring-gray-200"
                        value={target}
                        onChange={onTargetChange}
                    ></input>
                </div>
                <button
                    className="rounded bg-gray-100 p-2 font-semibold hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-200"
                    onClick={onClick}
                    disabled={!validNums || !validTarget}
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
