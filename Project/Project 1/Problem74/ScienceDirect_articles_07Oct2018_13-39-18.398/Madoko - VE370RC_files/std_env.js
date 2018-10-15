// koka generated module: "std/env"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_path', './std_dict'], function($std_core, $std_path, $std_dict) {
"use strict";
 
// koka declarations:
function getEnvironment()  /* () -> std/dict/dict<string> */  {
  return (typeof process !== 'undefined' ? process.env : {});
}
 
// The environment variables for this program
var env = getEnvironment();
function getArgv()  /* () -> vector<string> */  {
  return (typeof process !== 'undefined' ? process.argv : []);
}
 
// The unprocessed command line that was used to start this program.
// On ''Node'' the first arguments will often be of the form "[""node"",""interactive.js"",...]".
var argv = $std_core.list_4(getArgv());
 
// Return the arguments that were passed to program itself.
// Strips off the initial program from the unprocessed command line.
// i.e. If a program started as:
//     > node myprogram.js --flag bla
// The "arguments" list will be "[""--flag"",""bla""]"
match: {
  if (argv != null) {
    if (($std_path.stemname(argv.head) === "node")){
      var $arguments = $std_core.drop(argv.tail, 1);
      break match;
    }
  }
  var $arguments = $std_core.drop(argv, 1);
}
 
// Returns the value of an environment variable "name".
// Returns "default" (= |""|) if the environment variable was not present.
function getEnv(name, $default)  /* (name : string, default : ?string) -> string */  {
  var default_127 = ($default !== undefined) ? $default : "";
  var _x0 = $std_dict._lb__rb__2(env, name);
  return (_x0 == null) ? default_127 : _x0.unJust;
}
 
// koka exports:
return { 'getEnvironment': getEnvironment, 'env': env, 'getArgv': getArgv, 'argv': argv, '$arguments': $arguments, 'getEnv': getEnv };
});