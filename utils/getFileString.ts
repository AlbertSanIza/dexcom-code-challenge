import { readFile } from 'fs/promises'

export default async function getSolutionString(problemNumber: number): Promise<string> {
    return await readFile(`./app/api/problem/1/${problemNumber}.ts`, 'utf-8')
}
