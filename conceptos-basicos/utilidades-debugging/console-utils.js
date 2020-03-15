// pequeños placeholders para formatear nuestros datos:
// %s significa string
// %d significa número
// %j significa json
console.log("Un %s y un %s", "perrito", "gatito");

// el console.info es un alias del console.log es decir no cambia para nada
console.info("Hello world");
// console.warn es un alias de error
console.warn("Hello world");
// console.assert() lo que hace es: si hay algún error entonces lo mostrará
// es una manera muy práctica y rápida de hacer pequeñas pruebas en nuestro código para verificar si algún test que estamos corriendo no está funcionando
console.assert(42 == '42'); // ""
console.assert(42 === '42'); // Assertion failed

// a diferencia del console.error, console.trace nos indica la línea en la que está ocurriendo el error
console.trace("hello");

const util = require("util");
const debuglog = util.debuglog("foo");
// esto solo se mostrará si pasamos la variable de entorno NODE_DEBUG con el namespace que corresponde, en este caso sería foo
// NODE_DEBUG=foo node console-utils.js
debuglog("hello from foo");