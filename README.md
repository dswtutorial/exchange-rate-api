DSW Tutorial - REST API - Simple GET Request
========

# exchange-rate-api 
This repo source code has intended bugs! 

To be able to run the server properly, you will have to fix those bugs.
Each week I will add new bugs, I believe that fixing bugs is the best way to learn and to become a better coder.

Only after you fixed the bugs, you will have a nodeJS app running a simple expressJS server,
that 
- exposes a simple GET request, that returns an html page.
- uses a simple GET REST API to obtain exchange rate data.

# goals
* Run a simple ExpressJS server with NodeJS.
* Learn how to use a simple GET REST API.
* Learn to find bugs and fix them!
    * #1 port already in use. (EADDRINUSE, Address already in use)
    * #2 more bugs to come soon...

# steps to run this code 
* full explaination are available in Hebrew on https://www.dswtutorial.com/how-to-fix-bug-nodejs-address-already-in-use/
1. prepare your environment to tun the node app
    1. fork repo (https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
    1. download Git Bash (If you are using windows, https://git-scm.com/downloads)
    1. open GitBash
    1. #run: mkdir /c/git (I recommend /c/git on Windows)
    1. #run: cd /c/git (navigation to the required folder is needed)
    1. #run: git clone https://github.com/{yourusername}/exchange-rate-api.git (copies the repo to your computer)
    1. #run:  cd /c/git/exchange-rate-api
    1. install nodejs (https://nodejs.org/en/download/)
    1. #run: npm build (make sure you cd to /c/git/exchange-rate-api)
    1. install vscode (https://code.visualstudio.com/docs/setup/setup-overview)
    1. configure vscode to debug nodejs *already configured in cloned repo* (https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)
    1. #run: code . (will open vs code and open the project folder /c/git/exchange-rate-api/myExpressApp)
1. open the project with the path you choosed (C:\git\exchange-rate-api\myExpressApp) *already opened if used "code ."*.
1. run the project (F5 on keyboard)
1. Oops, there is a bug (it is OK, don't be scared).
1. if you did all as expected, after running the app, you should see this message:
   ```javascript
            C:\Program Files\nodejs\node.exe --inspect-brk=6758 bin\www 
            Debugger listening on ws://127.0.0.1:6758/28196371-fd09-4827-8fb6-ebd56b88eb54
            For help, see: https://nodejs.org/en/docs/inspector
            Debugger attached.
            server is listening on 3000
            app.js:60
            Error: listen EADDRINUSE: address already in use :::3000
                at Server.setupListenHandle [as _listen2] (net.js:1309:16)
                at listenInCluster (net.js:1357:12)
                at Server.listen (net.js:1445:7)
                at Object.<anonymous> (c:\git\exchange-rate-api\myExpressApp\bin\www:24:27)
                at Module._compile (internal/modules/cjs/loader.js:1154:14)
                at Object.Module._extensions..js (internal/modules/cjs/loader.js:1177:10)
                at Module.load (internal/modules/cjs/loader.js:1001:32)
                at Function.Module._load (internal/modules/cjs/loader.js:900:14)
                at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
                at internal/main/run_main_module.js:18:47
            Emitted 'error' event on Server instance at:
                at emitErrorNT (net.js:1336:8)
                at processTicksAndRejections (internal/process/task_queues.js:84:21)
   ```
1. Read the blog post on how to handle the bug "EADDRINUSE: address already in use" -  https://www.dswtutorial.com/how-to-fix-bug-nodejs-address-already-in-use/ (port is already taken, while running nodejs with expressjs server).
1. fix the bug :)
1. commit with a descreptive message of what you did to fix the bug.
1. push to your forked repo.
1. comment the url to your forked repo on the blog post https://www.dswtutorial.com/how-to-fix-bug-nodejs-address-already-in-use/
1. I will review your fix on your repo, answer questions about this bug or REST APIs, and help you with anything.
