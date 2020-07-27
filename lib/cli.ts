const fs = require('fs')
const findUp = require('find-up')


let config = {}, configPath = findUp.sync(['.eonrc.json'])
if (configPath)
{
    config = JSON.parse(fs.readFileSync(configPath))
}
else
{
    configPath = findUp.sync(['.eonrc.js'])
    if (configPath)
        config = require(configPath)
}


require('yargs')
    .config(config)
    .commandDir('commands', { extensions: [ 'js', 'ts' ] })
    .demandCommand()
    .help()
    .argv
