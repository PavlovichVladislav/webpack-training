async function start() {
   return await Promise.resolve("async is working");
}

start().then(console.log);

const unused = 42;
console.log(unused);

import("lodash").then(_ => console.log("Lodash", _.default.random(1, 5, true)));
