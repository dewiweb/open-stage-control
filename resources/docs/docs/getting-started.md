# Getting started

!!! tip ""
    Prebuilt binaries for Linux, Windows and OS X can be found on the [release](https://github.com/jean-emmanuel/open-stage-control/releases) page.

## Supported platforms

Open Stage Control is a *desktop* server application. It runs on all [platforms supported by Electron](https://electron.atom.io/docs/tutorial/supported-platforms/) or [Node](https://nodejs.org/en/) (in headless mode only, see [Running without Electron](#running-without-electron)). Any device running a compatible browser can connect to the server :

- Chrome/Chromium version `50` or later (Linux, MacOS, Windows, Android, etc)
- iOS version `9.3` or later

!!! tip "Android / iOS native app ?"
    There is no native mobile application. The server's url can be added to the home screen to launch the interface in fullscreen.


## Options

Below are the available command-line options. Note that when running without any command-line switch (ie from a file browser), a launcher window will spawn to help setting them.

!!! tip ""
    Preferences are stored in the user's home folder in a file named `.open-stage-control` (hidden under Linux / macOS)

|| Option | Description |
|---||---|
| `-s` | `--send` | default targets for all widgets (ip:port / domain:port  / midi:port_name pairs) |
| `-l` | `--load` | session file to load |
| | `--state` | state file to load (osc messages will be sent, unless there are other clients connected) |
| `-b` | `--blank` | load a blank session and start the editor |
| `-c` | `--custom-module` | custom module file to load (custom options can be passed after the filename) |
| `-p` | `--port` | http port of the server (default to 8080) |
| `-o` | `--osc-port` | osc input port (default to --port) |
| | `--tcp-port` | tcp server input port |
| | `--tcp-targets` | tcp servers to connect to (ip:port pairs), does not susbtitute for --send |
| `-m` | `--midi` | midi router settings |
| `-d` | `--debug` | log received osc messages in the console |
| `-n` | `--no-gui` | disable default gui |
| `-g` | `--gui-only` | app server's url. If true, local port (--port) is used |
| `-t` | `--theme` | theme name or path (mutliple values allowed) see [theming](/docs/theming/) |
| `-e` | `--examples` | list examples instead of recent sessions |
| | `--url-options` | [url options](/docs/url-options) (opt=value pairs) |
| |`--disable-vsync` | disable gui's vertical synchronization |
| |`--disable-gpu` | disable hardware acceleration |
| |`--force-gpu` | ignore chrome's gpu blacklist |
| |`--read-only` | disable session editing and session history changes |
| |`--remote-saving` | disable remote session saving for hosts that don\'t match the regular expresion |
| |`--remote-root` | set remote file browsing root folder |
| |`--instance-name` | used to differenciate multiple instances in a zeroconf network |
| |`--fullscreen` | launch in fullscreen mode (only affects the default gui, F11 to exit) |

Command-line only :

|| Option | Description |
|---||---|
| `-h` | `--help` | print available options |
| `-v` | `--version` | print version number |
|  | `--inspect` | enable node/electron inspector (visit chrome://inspect with chromium to access DevTools) |

**Examples**

```bash
open-stage-control --send 127.0.0.1:5555 127.0.0.1:6666 --port 7777
```

This will create an app listening on port 7777 for synchronization messages, and sending its widgets state changes to ports 5555 and 6666.

```bash
open-stage-control --no-gui --load path/to/session.js --port 9999
```

This will create a headless app available through http on port 9999 with session.js loaded automatically.

!!! tip "What about HTTPS ?"
    Security is out of the app's scope. If you are concerned about safety, using a private - protected - network should be enough.


## Run from sources

Running the app from the sources slightly differs from using built binaries : we'll build and launch the app with npm (node package manager).

**1. Requirements**

- [Node.js >= 4.8](https://nodejs.org/en/#download)
- [git](https://git-scm.com/downloads)

**2. Download sources**

```bash
git clone https://github.com/jean-emmanuel/open-stage-control
cd open-stage-control/
# uncomment next line if you want the latest release
# instead of the current development version
# git checkout $(git describe --tags `git rev-list --tags --max-count=1`)
npm install
npm run build
```

!!! note "Updating from sources"
    ```bash
    git pull
    npm install
    npm run build
    ```

**3. Run !**

```bash
npm start [ -- options]
```

!!! note ""
    A double hyphen (`--`) is used here to tell npm that the options are to be passed to the app.


## Build from sources

**1. Requirements**

- [Node.js >= 4.8](https://nodejs.org/en/#download)
- [git](https://git-scm.com/downloads)

**2. Download sources & build package**

```bash
git clone https://github.com/jean-emmanuel/open-stage-control
cd open-stage-control/
# uncomment next line if you want the latest release
# instead of the current development version
# git checkout $(git describe --tags `git rev-list --tags --max-count=1`)

# TARGET_PLATFORM can be linux, win32 (windows) or darwin (os x)
export PLATFORM=TARGET_PLATFORM
# TARGET_ARCH can be ia32, x64, armv7l or arm64
export ARCH=TARGET_ARCH


npm install

# run this instead if ARCH is armv7l
# npm install --arch=armv7l


npm run build

npm run package

# Do one of the following if you want a deb package for debian/ubuntu
npm run deb32
npm run deb64
npm run debarm
```

This will build the app in `dist/open-stage-control-PLATFORM-ARCH`.

!!! note ""
    Building the app for windows from a linux system requires wine to be installed.*

## Running in a headless context

Electron, Open Stage Control's engine, is based on chromium and can't run out of the box without a display server. However, using a virtual framebuffer does the trick. Detailed instructions can be found in Electron's [documentation](http://electron.atom.io/docs/tutorial/testing-on-headless-ci/).

In short: install [xvfb](https://en.wikipedia.org/wiki/Xvfb) and prepend your command with `xvfb-run`:  

```bash
xvfb-run open-stage-control -n
```

## Running without Electron

It is possible to run the server in headless mode without Electron using [node](https://nodejs.org/en/download/package-manager/) (v6 or higher) :

```bash
node /path/to/packaged/open-stage-control/resources/app/ -n
node /path/to/sources/open-stage-control/app/ -n
```

Or using the precompilled binaries for node:

```bash
node /path/to/packaged/open-stage-control-node/ -n
```

To build the app for node only from sources:

```bash

# git clone, etc...

npm install

npm run build

npm run package-node

```

## Running in a terminal on Windows

Windows users launching the app from a terminal need to add a double dash (`--`) before their options:

```bash
open-stage-control.exe -- --port 5555 [...]

# when running from sources
npm start -- -- [options]
```
