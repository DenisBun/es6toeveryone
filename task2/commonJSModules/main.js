const obj = require('./utils'); // import whole module
console.log(obj);

const defaultObj = require('./utils').default; //import default
console.log(defaultObj);

const redColorAlias = require('./utils').redColor; // import aliased
console.log(redColorAlias);

const someNamedThing = require('./utils').someNamedThing; //import named
console.log(someNamedThing);