// koka generated module: "texCommon"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_dict', './std_regex', './common'], function($std_core, $std_dict, $std_regex, $common) {
"use strict";
 
// koka declarations:
var optarg = "(?:\\[([^\\]]*)\\]\\s*)";
var optargs = (optarg + "*");
var texcmd = "\\\\[@a-zA-Z]+\\b\\s*";
var texval = ("(?:[^\\\\{}]|" + (texcmd + "|\\\\.\\s*)"));
var texarg0 = (texval + "*");
function texnest(s)  /* (s : string) -> string */  {
  return ("(?:" + (texval + ("|(?:\\{" + (s + "\\}))"))));
}
var texarg1 = (texnest(texarg0) + "*");
var texarg2 = (texnest(texarg1) + "*");
var texarg3 = (texnest(texarg2) + "*");
var texarg = ("(" + (texnest(texarg3) + ")"));
 
// captures most tex commands
var rxTexCmd = ("(?:\\\\(?:begin|end)\\b\\s*" + (optargs + (texarg + ("|" + (texcmd + (optargs + ")"))))));
var texAccents = $std_dict.dict_1($std_core.conslist([$std_core._tuple2_("`", "grave"), $std_core._tuple2_("\'", "acute"), $std_core._tuple2_("^", "circ"), $std_core._tuple2_("\"", "uml"), $std_core._tuple2_("~", "tilde"), $std_core._tuple2_("r", "ring"), $std_core._tuple2_("c", "cedil"), $std_core._tuple2_("v", "caron"), $std_core._tuple2_("u", "breve"), $std_core._tuple2_("=", "macron"), $std_core._tuple2_("k", "ogonek"), $std_core._tuple2_(".", "dota"), $std_core._tuple2_("d", "dotb"), $std_core._tuple2_("H", "huml"), $std_core._tuple2_("b", "barb"), $std_core._tuple2_("r", "ring"), $std_core._tuple2_("t", "tie"), $std_core._tuple2_("G", "dgrave"), $std_core._tuple2_("H", "dacute")], $std_core.Nil));
var texargs = ("(" + (texnest(texarg3) + "*)"));
var texlen = "\\-?\\d+(?:\\.\\d+)?(?:pt|mm|cm|in|ex|em|bp|pc|dd|cc|sp|fil{1,3})\\b";
var texdim = ("(" + (texlen + (")\\s*(?:plus\\b\\s*(" + (texlen + (")\\s*)?(?:minus\\b\\s*(" + (texlen + ")\\s*)?"))))));
 
// koka exports:
return { 'optarg': optarg, 'optargs': optargs, 'texcmd': texcmd, 'texval': texval, 'texarg0': texarg0, 'texnest': texnest, 'texarg1': texarg1, 'texarg2': texarg2, 'texarg3': texarg3, 'texarg': texarg, 'rxTexCmd': rxTexCmd, 'texAccents': texAccents, 'texargs': texargs, 'texlen': texlen, 'texdim': texdim };
});