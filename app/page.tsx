import Button from '@/components/Button'

export default function HomePage() {
    return (
        <div className="absolute flex h-full w-full flex-col items-center justify-center gap-6">
            <div className="text-xl">Dexcom Code Challenge by Albert Sanchez</div>
            <div className="flex gap-6">
                <Button href="/problem/1" text="Problem 1" />
                <Button href="/problem/2" text="Problem 2" />
            </div>
        </div>
    )
}
