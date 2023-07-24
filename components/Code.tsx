'use client'
import { CodeBlock } from 'react-code-blocks'

export default function Button({ text }: { text: string }) {
    return <CodeBlock language="typescript" text={text} startingLineNumber={1} wrapLongLines={false} />
}
