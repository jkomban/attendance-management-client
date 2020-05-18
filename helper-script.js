const path = require('path')
const fs = require('fs');

function copyFiles() {
    const buildPath = path.join(__dirname, 'build/config.json')
    const configPath = path.join(__dirname, 'src', 'config', 'config.json')

    fs.copyFileSync(configPath, buildPath)
}

copyFiles()