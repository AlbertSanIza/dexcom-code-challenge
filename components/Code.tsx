'use client'
import { CodeBlock } from 'react-code-blocks'

export default function Button({ text, language = 'typescript' }: { text: string; language?: string }) {
    return <CodeBlock language={language} text={text} startingLineNumber={1} wrapLongLines={false} />
}
