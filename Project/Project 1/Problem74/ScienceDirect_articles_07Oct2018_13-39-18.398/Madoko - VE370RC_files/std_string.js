// koka generated module: "std/string"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core'], function($std_core) {
"use strict";
 
// koka declarations:
 
// O(1). Append to a string builder
function append(b, s)  /* forall<h> (b : builder<h>, s : string) -> (write<h>) builder<h> */  {
  ((b).value += (s));
  return b;
}
function indent(s, n, c)  /* (s : string, n : ?int, c : ?char) -> string */  {
  var n_62 = (n !== undefined) ? n : 2;
  var c_66 = (c !== undefined) ? c : ' ';
  if (n_62 <= 0) {
    return s;
  }
  else {
    $std_core._unit_;
  }
  var pre = $std_core.string_3(n_62, c_66);
  return $std_core.unlines($std_core.map_5($std_core.lines(s), function(line  /* string */ ) {  return (pre + line);}));
}
 
// O(1). Prepend a string in front of a string builder
function prepend(b, s)  /* forall<h> (b : builder<h>, s : string) -> (write<h>) builder<h> */  {
  ((b).value = (s) + (b).value);
  return b;
}
 
// Trim whitespace on the left and right side of a string
function trim(s)  /* (s : string) -> string */  {
  return ((((s).replace(/^\s\s*/,''))).replace(/\s+$/,''));
}
 
// koka exports:
return { 'append': append, 'indent': indent, 'prepend': prepend, 'trim': trim };
});