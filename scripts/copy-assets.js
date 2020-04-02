var cpr = require('cpr'),
    fs = require('fs'),
    path = require('path'),
    files = [
        ['../resources/images/logo-nobadge.png', '../app/assets/favicon.png'],
        ['../resources/images/logo.png', '../app/assets/logo.png'],
        ['../LICENSE', '../app/LICENSE'],
        ['../src/python/head.py', '../app/server/python/head.py'],
        ['../src/python/list.py', '../app/server/python/list.py'],
        ['../src/python/utils.py', '../app/server/python/utils.py'],
        ['../src/python/midi.py', '../app/server/python/midi.py'],
    ]

for (var i in files) {
    cpr(...files[i].map(f => path.resolve(__dirname + '/' + f)), {
        overwrite: true
    })
}


var packageJson = require('../package.json'),
    appJson = {},
    copiedProps = [
        "name",
        "productName",
        "description",
        "version",
        "author",
        "repository",
        "homepage",
        "license",
        "yargs",
        "engines"
    ]

for (var k of copiedProps) {
    appJson[k] = packageJson[k]
}

appJson.main = appJson.bin = "index.js"
appJson.scripts = {
  "start": "electron index.js",
  "start-node": "node index.js"
}

appJson.optionalDependencies = {
    electron: packageJson.optionalDependencies.electron
}

fs.writeFileSync(path.resolve(__dirname + '/../app/package.json'), JSON.stringify(appJson, null, '  '))
