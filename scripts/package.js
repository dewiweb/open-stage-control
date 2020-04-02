const packager = require('electron-packager'),
      path = require('path'),
      appData = require('../app/package.json'),
      safeFFMPEG = require('electron-packager-plugin-non-proprietary-codecs-ffmpeg').default

var rpi = process.argv.includes('--old-rpi'),
    all = process.argv.includes('--all')

packager({
    dir: path.resolve(__dirname + '/../app'),
    name: appData.name,
    all: all ? true : undefined,
    platform: rpi ? 'linux' : process.env.PLATFORM,
    arch: rpi ? 'armv7l' : process.env.ARCH,
    electronVersion:  rpi ? '1.7.11' : require('../package.json').optionalDependencies.electron,
    overwrite: true,
    out: path.resolve(__dirname + '/../dist'),
    icon: path.resolve(__dirname + '/../resources/images/logo'),
    ignore: /node_modules\/(serialport|uws)/,
    afterExtract: [safeFFMPEG],
    prune: false
}).then(()=>{

    console.warn('\x1b[36m%s\x1b[0m', '=> Build artifacts created in ' + path.resolve(__dirname + '/../dist'))

})
