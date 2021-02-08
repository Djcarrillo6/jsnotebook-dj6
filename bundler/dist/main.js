/*
*** REFACTORED AFTER NPM BUILD GENERATED THE MAIN.JS FILE ***
After running the script "npm build", webpack utilizes these methods to reformat and connect both,
ES modules and Common JS modules together. 
*/

var webpack_modules = {
  './src/message.js': (module) => {
    module.exports = 'Hi There!';  
  },
};

function webpack_require(moduleId) {
  var moduleFn = webpack_modules[moduleId];
  var module = { exports: {} };
  moduleFn(module);
  return module.exports;
};

// index.js file contents
const message = webpack_require('./src/message.js');
console.log(message);