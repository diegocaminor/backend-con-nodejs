const miConsola = newconsole.Console(process.stdout, process.stderr);

miConsola.meliodas = (msg = '') => {
    console.log('\x1b[31m', `🐉 Full Counter! ${msg}`)
};

miConsola.escanor = (msg = '') => {
    console.log('\x1b[33m', `🦁 Sunshine! ${msg}`)
};

miConsola.ban = (msg = '') => {
    console.log('\x1b[37m', `🦊 Physical Hunt! ${msg}`)
};

miConsola.king = (msg = '') => {
    console.log('\x1b[34m', `🐻 Status Promotion! ${msg}`)
};

miConsola.diane = (msg = '') => {
    console.log('\x1b[33m', `🐍 Mother Catastrophe! ${msg}`)
};

miConsola.gowther = (msg = '') => {
    console.log('\x1b[35m', `🐏 Lost World! ${msg}`)
};

miConsola.merlin = (msg) => {
    console.log('\x1b[35m', `🐗 Enchant Infinity! ${msg}`)
};

miConsola.meliodas();
miConsola.escanor();
miConsola.ban();
miConsola.king();
miConsola.diane();
miConsola.gowther();
miConsola.merlin("HOLA MERLI!");