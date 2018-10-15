// koka generated module: "hilite"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./monarch', './std_core', './std_regex', './std_path', './common'], function(monarch, $std_core, $std_regex, $std_path, $common) {
"use strict";
 
// koka declarations:
function Hilite(highlighted, finalMode)  /* (highlighted : string, finalMode : hilitemode) -> hilite */  {
  return { highlighted: highlighted, finalMode: finalMode };
}
 
// Automatically generated. Retrieves the `highlighted` constructor field of the ":hilite" type.
function highlighted(hilite0)  /* (hilite : hilite) -> string */  {
  return hilite0.highlighted;
}
 
// Automatically generated. Retrieves the `finalMode` constructor field of the ":hilite" type.
function finalMode(hilite0)  /* (hilite : hilite) -> hilitemode */  {
  return hilite0.finalMode;
}
function _copy(_this, highlighted0, finalMode0)  /* (hilite, highlighted : ?string, finalMode : ?hilitemode) -> hilite */  {
  var highlighted_41 = (highlighted0 !== undefined) ? highlighted0 : highlighted(_this);
  var finalMode_47 = (finalMode0 !== undefined) ? finalMode0 : finalMode(_this);
  return Hilite(highlighted_41, finalMode_47);
}
function xcanHilite(name)  /* (name : string) -> bool */  {
  return (monarch.getLanguage(name) != null);
}
function canHilite(name)  /* (name : string) -> bool */  {
  return xcanHilite($std_core.toLower(name));
}
 
// Highlight using highlight.js. Use 'auto' for automatic language detection
function xhilite(src, lang, mode)  /* (src : string, lang : string, mode : hilitemode) -> hilite */  {
  return (function(){ var res = monarch.highlightTextFragment(mode,src); return Hilite(res.html,res.next); })();
}
function xinitialMode(lang)  /* (lang : string) -> hilitemode */  {
  return (function(){ var res = monarch.getInitialMode(lang); if (!res) throw new Error('unknown language: ' + lang); return res; })();
}
 
// Syntax highlight code. 
// If "lang" is the empty string, returns Nothing.
function hilite(src, lang)  /* (src : string, lang : string) -> maybe<string> */  {
  if ((lang === "")) {
    return $std_core.Nothing;
  }
  else {
    $std_core._unit_;
  }
  return $std_core.$catch(function() {  return $std_core.Just(highlighted(xhilite(src, $std_core.toLower(lang), xinitialMode($std_core.toLower(lang)))));}, function(exn  /* exception */ ) {  $common.warning(("could not highlight: " + $std_core.show(exn)), undefined); return $std_core.Nothing;});
}
 
// Syntax highlight code. 
// If "lang" is the empty string, returns Nothing. 
// Use `auto` for automatic language detection.
function hilitePartial(src, lang, mbMode)  /* (src : string, lang : string, mbMode : ?maybe<hilitemode>) -> maybe<(string, hilitemode)> */  {
  var mbMode_214 = (mbMode !== undefined) ? mbMode : $std_core.Nothing;
  if ((lang === "")) {
    return $std_core.Nothing;
  }
  else {
    $std_core._unit_;
  }
  return $std_core.$catch(function() {  if (mbMode_214 == null) {  var mode = xinitialMode($std_core.toLower(lang));} else {  var mode = mbMode_214.unJust;} var res = xhilite(src, $std_core.toLower(lang), mode); return $std_core.Just($std_core._tuple2_(highlighted(res), finalMode(res)));}, function(exn  /* exception */ ) {  $common.warning(("could not highlight: " + $std_core.show(exn)), undefined); return $std_core.Nothing;});
}
function xxregisterLanguage(name, definition)  /* (name : string, definition : string) -> io () */  {
  return monarch.register(definition,name);
}
function registerLanguage(name, definition)  /* (name : string, definition : string) -> io () */  {
  return $std_core.$catch(function() {  return xxregisterLanguage($std_core.toLower(name), definition);}, function(exn  /* exception */ ) {  return $std_core.println(("error: could not register language: " + (name + ("\n" + $std_core.show(exn)))));});
}
 
// koka exports:
return { 'highlighted': highlighted, 'finalMode': finalMode, '_copy': _copy, 'xcanHilite': xcanHilite, 'canHilite': canHilite, 'xhilite': xhilite, 'xinitialMode': xinitialMode, 'hilite': hilite, 'hilitePartial': hilitePartial, 'xxregisterLanguage': xxregisterLanguage, 'registerLanguage': registerLanguage };
});