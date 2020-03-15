const util = require("util");

// cuando utilizamos util.deprecate hacemos un wrap de una función que ya está obsoleta y 
// queremos hacerle saber a nuestros usuarios que no debería usarse
const helloPluto = util.deprecate(() => {
    console.log("hello pluto");
}, "Pluto is deprecated. It is not a planet anymore");

helloPluto();
// hello pluto
// (node:1390) DeprecationWarning: Pluto is deprecated. It is not a planet anymore