exports.command = 'make <command>'
exports.desc = 'Make what you specify'
exports.builder = (yargs) => yargs.commandDir('make_commands', { extensions: [ 'js', 'ts' ] })
exports.handler = () => {}
