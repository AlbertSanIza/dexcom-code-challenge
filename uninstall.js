const fs = require('fs')
const path = require('path')

const deleteNodeModules = (dir) => {
    const files = fs.readdirSync(dir)
    for (let i = 0; i < files.length; i += 1) {
        const fileName = path.join(dir, files[i])
        const stat = fs.lstatSync(fileName)

        if (stat.isDirectory()) {
            if (fileName.includes('node_modules') || fileName.includes('.next')) {
                console.log('🚀 Delete:', fileName)
                fs.rmSync(fileName, { recursive: true, force: true })
            } else {
                deleteNodeModules(fileName)
            }
        }
    }
}

deleteNodeModules(process.cwd())
