import Link from 'next/link'

export default function Button({ href, text }: { href: string; text: string }) {
    return (
        <Link href={href} className="rounded bg-gray-100 p-2 font-semibold hover:bg-gray-200">
            {text}
        </Link>
    )
}
