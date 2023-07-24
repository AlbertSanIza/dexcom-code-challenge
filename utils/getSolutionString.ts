import { readFile } from 'fs/promises'

export default async function getSolutionString(problemNumber: number): Promise<string> {
    return await readFile(`./solutions/problem-${problemNumber}.ts`, 'utf-8')
}
