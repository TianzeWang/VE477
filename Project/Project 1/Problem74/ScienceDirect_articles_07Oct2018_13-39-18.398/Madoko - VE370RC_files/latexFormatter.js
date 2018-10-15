// koka generated module: "latexFormatter"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_log', './std_path', './std_dict', './std_string', './std_regex', './common', './entity', './inline', './options', './attributes', './codeAlign', './storage', './texCommon', './cssFormatter'], function($std_core, $std_log, $std_path, $std_dict, $std_string, $std_regex, $common, $entity, $inline, $options, $attributes, $codeAlign, $storage, $texCommon, $cssFormatter) {
"use strict";
 
// koka declarations:
var Single = 1;  /* line */ 
var Double = 2;  /* line */ 
var NoLine = 3;  /* line */ 
 
// Automatically generated. Tests for the "Single" constructor of the ":line" type.
function isSingle(line)  /* (line : line) -> bool */  {
  return (line === 1);
}
 
// Automatically generated. Tests for the "Double" constructor of the ":line" type.
function isDouble(line)  /* (line : line) -> bool */  {
  return (line === 2);
}
 
// Automatically generated. Tests for the "NoLine" constructor of the ":line" type.
function isNoLine(line)  /* (line : line) -> bool */  {
  return (line === 3);
}
var accents = $std_dict.dict_1($std_core.map_3($std_dict.list_1($texCommon.texAccents), function(te  /* (string, string) */ ) {  return $std_core._tuple2_($std_core.snd(te), $std_core.fst(te));}));
function adjustFloatAttrs(attrs)  /* (attrs : common/attrs) -> common/attrs */  {
  var _x0 = ($common.hasClass(attrs, "float") || ($cssFormatter.cssValue($common.lookupKey(attrs, "display", "")) === "block"));
  if (_x0) {
    var flt = $cssFormatter.cssValue($common.lookupKey(attrs, "tex-float", $common.lookupKey(attrs, "float", "")));
    var _x1 = ((flt === "left") || ((flt === "right") || ((flt === "inside") || (flt === "outside"))));
    if (_x1) {
      var _x2 = $common.hasKey(attrs, "width");
      if (_x2 != null) {
        return $common.addKeyvalIfNotExist($common.addKeyval($common.removeKeys(attrs, $std_core.Cons("width", $std_core.Cons("tex-env-outer", $std_core.Nil))), "tex-wrap-width", _x2.unJust), "tex-wrap-placement", $std_core.substr_1(flt, 0, 1));
      }
      else {
        return attrs;
      }
    }
    else {
      return attrs;
    }
  }
  else {
    return attrs;
  }
}
function appendCmd(body, kvs, key)  /* (body : string, kvs : std/dict/dict<string>, key : string) -> string */  {
  var _x0 = $std_dict._lb__rb__2(kvs, key);
  return (_x0 == null) ? body : (body + _x0.unJust);
}
function applyBlock(body, isBlock, attrs)  /* (body : string, isBlock : bool, attrs : common/attrs) -> string */  {
  var _x0 = $common.hasKey(attrs, "data-line");
  if (_x0 != null) {
    var lineinfo = ("\n%mdk-data-line={" + (_x0.unJust + "}"));
  }
  else {
    var lineinfo = "";
  }
  if (isBlock) {
    return (lineinfo + ("\n" + ($std_string.trim(body) + "%mdk\n")));
  }
  else {
    return body;
  }
}
var rxCmdOk = $std_regex.regex("^[^a-zA-Z0-9\\s]", undefined, undefined);
var rxCmdSpace = $std_regex.regex("^\\s", undefined, undefined);
function cmdconnect(cmd, s)  /* (cmd : string, s : string) -> string */  {
  var _x0 = ($std_core.isEmpty(cmd) || ($std_core.isEmpty(s) || $std_core.endsWith(cmd, "}")));
  if (_x0) {
    return (cmd + s);
  }
  else {
    if ($std_regex.contains(s, rxCmdOk, undefined)) {
      return (cmd + s);
    }
    else {
      if ($std_regex.contains(s, rxCmdSpace, undefined)) {
        return (cmd + ("{}" + s));
      }
      else {
        return (cmd + (" " + s));
      }
    }
  }
}
function applyCmd(body, kvs, key)  /* (body : string, kvs : std/dict/dict<string>, key : string) -> string */  {
  var _x0 = $std_dict._lb__rb__2(kvs, key);
  if (_x0 == null) {
    return body;
  }
  else {
    var post = $std_core.maybe($std_dict._lb__rb__2(kvs, (key + "-postfix")), "", $std_core.id);
    if ($std_core.startsWith(_x0.unJust, "{")) {
      return $cssFormatter.braced(cmdconnect((((_x0.unJust).substr(1)) + post), body));
    }
    else {
      return (_x0.unJust + (post + $cssFormatter.braced(body)));
    }
  }
}
function blockEnv(body, env, args)  /* (body : string, env : string, args : ?string) -> string */  {
  var args_2288 = (args !== undefined) ? args : "";
  return ("\\begin{" + (env + ("}" + (args_2288 + ("%mdk\n" + (body + ("%mdk\n\\end{" + (env + "}"))))))));
}
function find(d, key, $default)  /* (d : std/dict/dict<string>, key : string, default : ?string) -> string */  {
  var default_2519 = ($default !== undefined) ? $default : "";
  return $std_core.maybe($std_dict._lb__rb__2(d, key), default_2519, $std_core.id);
}
var rxEnv = $std_regex.regex("^(\\w+)([\\s\\S]*)$", undefined, undefined);
function applyEnv(body, kvs, key, attrs)  /* (body : string, kvs : std/dict/dict<string>, key : string, attrs : common/attrs) -> string */  {
  var _x0 = $std_dict._lb__rb__2(kvs, key);
  if (_x0 == null) {
    return body;
  }
  else {
    var post = $std_core.maybe($std_dict._lb__rb__2(kvs, (key + "-postfix")), "", $std_core.id);
    var _x1 = $std_regex.find(_x0.unJust, rxEnv, undefined);
    if (_x1 != null) {
      return blockEnv(body, ($std_regex._index_($std_regex.groups(_x1.unJust), 1) + post), $attributes.expandKeys_1($std_regex._index_($std_regex.groups(_x1.unJust), 2), "", attrs, $std_dict.dict(), kvs));
    }
    else {
      return blockEnv(body, (_x0.unJust + post), undefined);
    }
  }
}
var rxCommentEnd = $std_regex.regex("(?:^|[^\\\\])%.*$", undefined, undefined);
function unbrace(s)  /* (s : string) -> string */  {
  var _x0 = ($std_core.startsWith(s, "{") && $std_core.endsWith(s, "}"));
  if (_x0) {
    var _x1 = ((s).indexOf("}")) < (((s).length - 1)|0);
    if (_x1) {
      return s;
    }
    else {
      return $std_core.substr_1(s, 1, (((s).length - 2)|0));
    }
  }
  else {
    return ($std_regex.contains(s, rxCommentEnd, undefined)) ? (s + "\n") : s;
  }
}
function braceCmd(body, cmd)  /* (body : string, cmd : string) -> string */  {
  return ("{" + (cmdconnect(cmd, unbrace(body)) + "}"));
}
function containsAny(d, keys)  /* forall<a> (d : std/dict/dict<a>, keys : list<string>) -> bool */  {
  return $std_core.any(keys, function(key  /* string */ ) {  return ((d)[key]!==undefined);});
}
function warning(msg)  /* (msg : string) -> () */  {
  return $common.warning(msg, "texwarning");
}
function cssAttr(kvs, key, show, allowed, cssKey)  /* (kvs : std/dict/dict<string>, key : string, show : (string) -> string, allowed : ?list<string>, cssKey : ?string) -> list<string> */  {
  var allowed_3657 = (allowed !== undefined) ? allowed : $std_core.Nil;
  var cssKey_3661 = (cssKey !== undefined) ? cssKey : key;
  var _x0 = $std_dict._lb__rb__2(kvs, key);
  if (_x0 == null) {
    return $std_core.Nil;
  }
  else {
    var _x1 = ($std_core.isCons(allowed_3657) && !($std_core.any(allowed_3657, function(v  /* string */ ) {  return (v === _x0.unJust);})));
    if (_x1) {
      warning(("illegal CSS value: " + (key + (":\'" + (_x0.unJust + ("\'\n  expecting one of: " + $std_core.join_4(allowed_3657, ",")))))));
      return $std_core.Nil;
    }
    else {
      return $std_core.Cons((cssKey_3661 + ("=" + show(_x0.unJust))), $std_core.Nil);
    }
  }
}
function cssHeightX(value)  /* (value : string) -> string */  {
  return $cssFormatter.cssHeight(value, undefined);
}
function onKey(body, kvs, key, action)  /* (body : string, kvs : std/dict/dict<string>, key : string, action : (string, string) -> string) -> string */  {
  var _x0 = $std_dict._lb__rb__2(kvs, key);
  if (_x0 == null) {
    return body;
  }
  else {
    return ($std_core.isEmpty(_x0.unJust)) ? body : action(_x0.unJust, body);
  }
}
function onKeys(body, kvs, keys, action)  /* (body : string, kvs : std/dict/dict<string>, keys : list<string>, action : (string) -> string) -> string */  {
  return (containsAny(kvs, keys)) ? action(body) : body;
}
function cssInlineMargin(body0, kvs, margin)  /* (body0 : string, kvs : std/dict/dict<string>, margin : string) -> string */  {
  var body10 = onKey(onKey(body0, kvs, (margin + "-left"), function(width  /* string */ , body  /* string */ ) {  return ("\\hspace*" + ($cssFormatter.braced($cssFormatter.cssWidth(width, undefined, undefined, undefined)) + body));}), kvs, (margin + "-right"), function(width0  /* string */ , body1  /* string */ ) {  return (body1 + ("\\hspace*" + $cssFormatter.braced($cssFormatter.cssWidth(width0, undefined, undefined, undefined))));});
  if ($cssFormatter.cssIsInlineBlock(kvs)) {
    var body20 = onKeys(body10, kvs, $std_core.Cons((margin + "-top"), $std_core.Cons((margin + "-bottom"), $std_core.Nil)), function(body2  /* string */ ) {  return ("\\md" + (margin + ("tb" + ($cssFormatter.braced($cssFormatter.cssHeight(find(kvs, (margin + "-top"), undefined), undefined)) + ($cssFormatter.braced($cssFormatter.cssHeight(find(kvs, (margin + "-bottom"), undefined), undefined)) + $cssFormatter.braced(body2))))));});
  }
  else {
    var body20 = body10;
  }
  return onKey(body20, kvs, "float", function(value  /* string */ , body3  /* string */ ) {  if ((value === "left")) {  return ("\\mdfloatleft" + $cssFormatter.braced(body3));} else {  if ((value === "right")) {  return ("\\mdfloatright" + $cssFormatter.braced(body3));} else {  if ((value === "center")) {  return ("\\mdfloatcenter" + $cssFormatter.braced(body3));} else {  return body3;}}}});
}
function cssRadius(kvs, key)  /* (kvs : std/dict/dict<string>, key : string) -> list<string> */  {
  var _x0 = $std_dict._lb__rb__2(kvs, key);
  if (_x0 == null) {
    return $std_core.Nil;
  }
  else {
    var _x1 = $cssFormatter.cssSplitValues(_x0.unJust);
    if (_x1 != null && _x1.tail == null) {
      return $std_core.Cons((key + ("=" + $cssFormatter.cssWidth(_x1.head, undefined, undefined, undefined))), $std_core.Nil);
    }
    else if (_x1 != null && _x1.tail != null && _x1.tail.tail == null) {
      return $std_core.Cons((key + ("={" + ($cssFormatter.cssWidth(_x1.head, undefined, undefined, undefined) + ("," + ($cssFormatter.cssWidth(_x1.tail.head, undefined, undefined, undefined) + "}"))))), $std_core.Nil);
    }
    else {
      warning(("illegal CSS radius: " + (key + (":\'" + _x0.unJust))));
      return $std_core.Nil;
    }
  }
}
function cssAttrX(kvs, key, show)  /* (kvs : std/dict/dict<string>, key : string, show : (string) -> string) -> (list<string>, string) */  {
  var _x0 = $std_dict._lb__rb__2(kvs, key);
  if (_x0 == null) {
    return $std_core._tuple2_($std_core.Nil, "");
  }
  else {
    var svalue = show(_x0.unJust);
    return $std_core._tuple2_($std_core.Cons((key + ("=" + svalue)), $std_core.Nil), svalue);
  }
}
function cssTRBL(kvs, pre, post, show)  /* (kvs : std/dict/dict<string>, pre : string, post : string, show : (string) -> string) -> list<string> */  {
  var _x0 = cssAttrX(kvs, (pre + ("-top" + post)), show);
  var _x1 = cssAttrX(kvs, (pre + ("-right" + post)), show);
  var _x2 = cssAttrX(kvs, (pre + ("-bottom" + post)), show);
  var _x3 = cssAttrX(kvs, (pre + ("-left" + post)), show);
  var _x4 = ((_x0.snd === _x1.snd) && ((_x1.snd === _x2.snd) && (_x2.snd === _x3.snd)));
  if (_x4) {
    if ($std_core.isNil(_x0.fst)) {
      return $std_core.Nil;
    }
    else {
      return $std_core.Cons((pre + (post + ("=" + _x0.snd))), $std_core.Nil);
    }
  }
  else {
    return $std_core.concat($std_core.Cons(_x0.fst, $std_core.Cons(_x1.fst, $std_core.Cons(_x2.fst, $std_core.Cons(_x3.fst, $std_core.Nil)))));
  }
}
function cssVerticalAlign(kvs)  /* (kvs : std/dict/dict<string>) -> list<string> */  {
  var _x0 = $std_dict._lb__rb__2(kvs, "vertical-align");
  if (_x0 == null) {
    return $std_core.Nil;
  }
  else {
    if ($cssFormatter.cssIsLength(_x0.unJust)) {
      return $std_core.Cons(("raise=" + $cssFormatter.cssWidth(_x0.unJust, undefined, undefined, undefined)), $std_core.Nil);
    }
    else {
      return $std_core.Cons(("vertical-align=" + $cssFormatter.cssValue(_x0.unJust)), $std_core.Nil);
    }
  }
}
function cssWidthX(value)  /* (value : string) -> string */  {
  return $cssFormatter.cssWidth(value, undefined, undefined, undefined);
}
function trimEnv(body, env, args)  /* (body : string, env : string, args : ?string) -> string */  {
  var args_6338 = (args !== undefined) ? args : "";
  return blockEnv($std_string.trim(body), env, args_6338);
}
function padding(body, kvs)  /* (body : string, kvs : std/dict/dict<string>) -> string */  {
  var ptop = $cssFormatter.cssWidth(find(kvs, "padding-top", undefined), undefined, undefined, undefined);
  var pbottom = $cssFormatter.cssWidth(find(kvs, "padding-bottom", undefined), undefined, undefined, undefined);
  var pleft = $cssFormatter.cssWidth(find(kvs, "padding-left", undefined), undefined, undefined, undefined);
  var pright = $cssFormatter.cssWidth(find(kvs, "padding-right", undefined), undefined, undefined, undefined);
  var _x0 = ((ptop === pbottom) && ((pbottom === pleft) && (pleft === pright)));
  if (_x0) {
    return trimEnv(body, "mdbpadding", $cssFormatter.braced(ptop));
  }
  else {
    return trimEnv(body, "mdbpaddingx", $std_core.join_3($std_core.map_3($std_core.Cons(ptop, $std_core.Cons(pright, $std_core.Cons(pbottom, $std_core.Cons(pleft, $std_core.Nil)))), $cssFormatter.braced)));
  }
}
function cssBox(body, kvs, isBlock)  /* (body : string, kvs : std/dict/dict<string>, isBlock : bool) -> string */  {
  var breakable = ($std_core.bool_2(find(kvs, "breakable", undefined)) || $std_core.bool_2(find(kvs, "long", undefined)));
  var fboxkeys = $std_core.Cons("border-top-style", $std_core.Cons("border-bottom-style", $std_core.Cons("border-left-style", $std_core.Cons("border-right-style", $std_core.Cons("vertical-align", $std_core.Cons("height-align", $std_core.Cons("baseline", $std_core.Cons("background-color", $std_core.Cons("height", $std_core.Cons("width", $std_core.Nil))))))))));
  var _x0 = (breakable || containsAny(kvs, fboxkeys));
  if (_x0) {
    var attrs = $std_core.concat($std_core.conslist([cssTRBL(kvs, "padding", "", cssWidthX), cssTRBL(kvs, "border", "-width", cssWidthX), cssTRBL(kvs, "border", "-color", $cssFormatter.cssColor), cssTRBL(kvs, "border", "-style", $cssFormatter.cssValue), cssRadius(kvs, "border-radius"), cssRadius(kvs, "border-top-left-radius"), cssRadius(kvs, "border-top-right-radius"), cssRadius(kvs, "border-bottom-left-radius"), cssRadius(kvs, "border-bottom-right-radius"), cssVerticalAlign(kvs), cssAttr(kvs, "height-align", $cssFormatter.cssValue, $std_core.Cons("top", $std_core.Cons("middle", $std_core.Cons("bottom", $std_core.Nil))), undefined), cssAttr(kvs, "text-align", $cssFormatter.cssValue, $std_core.Cons("default", $std_core.Cons("left", $std_core.Cons("center", $std_core.Cons("right", $std_core.Cons("justify", $std_core.Nil))))), undefined), cssAttr(kvs, "baseline", $cssFormatter.cssValue, $std_core.Cons("bottom", $std_core.Cons("middle", $std_core.Cons("top", $std_core.Nil))), undefined), cssAttr(kvs, "background-color", $cssFormatter.cssColor, undefined, undefined), cssAttr(kvs, "background-clip", $cssFormatter.cssValue, $std_core.Cons("border-box", $std_core.Cons("padding-box", $std_core.Cons("content-box", $std_core.Nil))), undefined), cssAttr(kvs, "height", cssHeightX, undefined, undefined), cssAttr(kvs, "width", cssWidthX, undefined, undefined), cssAttr(kvs, "breakable", $cssFormatter.cssBool, undefined, undefined)], $std_core.Nil));
    var args = $cssFormatter.braced($std_core.join_4(attrs, ","));
    if (isBlock) {
      return trimEnv(body, "mdblock", args);
    }
    else {
      return ("\\mdinline" + (args + $cssFormatter.braced(body)));
    }
  }
  else {
    return onKeys(onKey(body, kvs, "text-align", function(value  /* string */ , b  /* string */ ) {  if (!(isBlock)) {  return b;} else {  if ((value === "left")) {  var _x1 = "mdflushleft";} else {  if ((value === "right")) {  var _x1 = "mdflushright";} else {  var _x1 = ((value === "center")) ? "mdcenter" : "mdjustify";}} return blockEnv(b, _x1, undefined);}}), kvs, $std_core.Cons("padding-left", $std_core.Cons("padding-right", $std_core.Cons("padding-top", $std_core.Cons("padding-bottom", $std_core.Nil)))), function(b0  /* string */ ) {  return (isBlock) ? padding(b0, kvs) : cssInlineMargin(b0, kvs, "padding");});
  }
}
function cssFont(body, kvs)  /* (body : string, kvs : std/dict/dict<string>) -> string */  {
  return onKey(onKey(onKey(onKey(onKey(body, kvs, "font-weight", function(value  /* string */ , b  /* string */ ) {  if ((value === "bold")) {  var cmd = "\\bfseries";} else {  if ((value === "bolder")) {  var cmd = "\\bfseries";} else {  if ((value === "lighter")) {  var cmd = "\\lfseries";} else {  if ((value === "normal")) {  var cmd = "\\mdseries";} else {  var _x0 = $std_core.parseInt(value, undefined); if (_x0 != null) {  if (_x0.unJust < 400) {  var cmd = "\\lfseries";} else {  var cmd = (_x0.unJust > 500) ? "\\bfseries" : "\\mdseries";}} else {  var cmd = "";}}}}} return braceCmd(b, cmd);}), kvs, "font-size", function(value0  /* string */ , b0  /* string */ ) {  if ((value0 === "larger")) {  var cmd0 = "\\mdfontsize{\\dimfont{1.2}}";} else {  if ((value0 === "smaller")) {  var cmd0 = "\\mdfontsize{\\dimfont{0.8}}";} else {  if ((value0 === "xx-small")) {  var cmd0 = "\\tiny";} else {  if ((value0 === "x-small")) {  var cmd0 = "\\scriptsize";} else {  if ((value0 === "small")) {  var cmd0 = "\\small";} else {  if ((value0 === "medium")) {  var cmd0 = "\\normalsize";} else {  if ((value0 === "large")) {  var cmd0 = "\\large";} else {  if ((value0 === "x-large")) {  var cmd0 = "\\Large";} else {  if ((value0 === "xx-large")) {  var cmd0 = "\\LARGE";} else {  var cmd0 = ("\\mdfontsize" + $cssFormatter.braced($cssFormatter.cssFontLength(value0)));}}}}}}}}} return braceCmd(b0, cmd0);}), kvs, "font-style", function(value1  /* string */ , b1  /* string */ ) {  if ((value1 === "italic")) {  var cmd1 = "\\itshape";} else {  if ((value1 === "oblique")) {  var cmd1 = "\\slshape";} else {  if ((value1 === "normal")) {  var cmd1 = "\\upshape";} else {  warning(("illegal font-style value: " + value1)); var cmd1 = "\\upshape";}}} return braceCmd(b1, cmd1);}), kvs, "font-variant", function(value2  /* string */ , b2  /* string */ ) {  if ((value2 === "small-caps")) {  var cmd2 = "\\scshape";} else {  if ((value2 === "all-small-caps")) {  var cmd2 = "\\scshape";} else {  if ((value2 === "petite-caps")) {  var cmd2 = "\\scshape";} else {  if ((value2 === "all-petite-caps")) {  var cmd2 = "\\scshape";} else {  var cmd2 = ((value2 === "normal")) ? "\\upshape" : "";}}}} return braceCmd(b2, cmd2);}), kvs, "font-family", function(value3  /* string */ , b3  /* string */ ) {  var fonts = $std_core.filter($cssFormatter.cssSplitList(value3), $std_core.bool_2); var _x0 = $std_core.partition($std_core.filter(fonts, function(f  /* string */ ) {  return !($std_core.startsWith(f, "html-"));}), function(f0  /* string */ ) {  return $std_core.startsWith(f0, "tex-");}); var families = $std_core.map_3($std_core._plus__3(_x0.fst, _x0.snd), function(fam  /* string */ ) {  if ((fam === "serif")) {  var spec = "!rmfamily";} else {  if ((fam === "sans-serif")) {  var spec = "!sffamily";} else {  if ((fam === "monospace")) {  var spec = "!ttfamily";} else {  if ((fam === "cursive")) {  var spec = "!cursive";} else {  if ((fam === "fantasy")) {  var spec = "!fantasy";} else {  if ($std_core.startsWith(fam, "tex-family-")) {  var _x1 = $std_regex.find(fam, $std_regex.regex("^tex-family[-/](?:([A-Z]\\w\\w?)[-/])?([\\w\\-]+)(?:/(l|m|b|bx|sb|c))?(?:/(n|it|sl|bf|sc))?(?:[@/](\\d+\\.\\d+))?$", undefined, undefined), undefined); if (_x1 != null) {  var spec = ("@" + $std_core.join_4($std_core.Cons($std_regex._index_($std_regex.groups(_x1.unJust), 1), $std_core.Cons($std_regex._index_($std_regex.groups(_x1.unJust), 2), $std_core.Cons($std_regex._index_($std_regex.groups(_x1.unJust), 3), $std_core.Cons($std_regex._index_($std_regex.groups(_x1.unJust), 4), $std_core.Cons($std_regex._index_($std_regex.groups(_x1.unJust), 5), $std_core.Nil))))), "/"));} else {  var spec = ((fam).substr(11));}} else {  if ($std_core.startsWith(fam, "tex-cmd-")) {  var spec = ("!" + ((fam).substr(8)));} else {  var spec = ($std_core.startsWith(fam, "tex-")) ? ((fam).substr(4)) : fam;}}}}}}} return (((spec).indexOf(',') >= 0)) ? $cssFormatter.braced(spec) : spec;}); match: {  if (families != null && families.tail == null) {  if ($std_core.startsWith(families.head, "!")){  var cmd3 = ("\\" + ((families.head).substr(1))); break match;}} var cmd3 = ("\\mdfontfamily" + $cssFormatter.braced($std_core.join_4(families, ",")));} return braceCmd(b3, cmd3);});
}
function onClasses(body, attrs, classes, action)  /* (body : string, attrs : common/attrs, classes : list<string>, action : (string) -> string) -> string */  {
  return ($std_core.any(classes, function(c  /* string */ ) {  return $common.hasClass(attrs, c);})) ? action(body) : body;
}
function cssText(body, kvs, attrs, isBlock)  /* (body : string, kvs : std/dict/dict<string>, attrs : common/attrs, isBlock : bool) -> string */  {
  if (isBlock) {
    return onKey(onKey(onClasses(body, attrs, $std_core.Cons("para-continued", $std_core.Cons("para-block", $std_core.Cons("noindent", $std_core.Nil))), function(b  /* string */ ) {  return cmdconnect("\\noindent", b);}), kvs, "text-indent", function(value  /* string */ , b0  /* string */ ) {  var _x0 = ($common.hasClass(attrs, "noindent")) ? "" : "\\noindent";var _x2 = ((value === "") || ((value === "0") || (value === "0em"))); if (_x2) {  var _x1 = "";} else {  var _x1 = ("\\hspace*" + $cssFormatter.braced($cssFormatter.cssWidth(value, undefined, undefined, undefined)));} return cmdconnect((_x0 + _x1), b0);}), kvs, "line-height", function(value0  /* string */ , b1  /* string */ ) {  return braceCmd(b1, ("\\mdlineheight" + $cssFormatter.braced($cssFormatter.cssFontLength(value0))));});
  }
  else {
    return body;
  }
}
function cssInner(body0, kvs, attrs, isBlock)  /* (body0 : string, kvs : std/dict/dict<string>, attrs : common/attrs, isBlock : bool) -> string */  {
  return onKey(cssText(cssFont(onKey(body0, kvs, "color", function(value  /* string */ , body  /* string */ ) {  return braceCmd(body, ("\\mdcolor" + $cssFormatter.braced($cssFormatter.cssColor(value))));}), kvs), kvs, attrs, isBlock), kvs, "tex-label-inner-before", function(value0  /* string */ , body1  /* string */ ) {  return ("\\label" + ($cssFormatter.braced(value0) + ("%mdk\n" + body1)));});
}
function cssPagebreak(value)  /* (value : string) -> string */  {
  var key = $std_core.toLower($cssFormatter.cssValue(value));
  var _x0 = $std_core.parseInt(key, undefined);
  if (_x0 != null) {
    var cmd = ("\\penalty" + $cssFormatter.braced($std_core.show_1(_x0.unJust)));
  }
  else {
    if ((key === "always")) {
      var cmd = "\\newpage";
    }
    else {
      if ((key === "avoid")) {
        var cmd = "\\nobreak";
      }
      else {
        var _x1 = ((key === "left") || (key === "verso"));
        if (_x1) {
          var cmd = "\\cleartoleftpage";
        }
        else {
          var _x2 = ((key === "right") || (key === "recto"));
          if (_x2) {
            var cmd = "\\cleardoublepage";
          }
          else {
            if ((key === "auto")) {
              var cmd = "\\goodbreak";
            }
            else {
              if ((key === "clear")) {
                var cmd = "\\clearpage";
              }
              else {
                warning(("unknown page-break value: " + $std_core.show_4(value)));
                var cmd = "";
              }
            }
          }
        }
      }
    }
  }
  return ($std_core.isEmpty(cmd)) ? "" : (cmd + "%mdk\n");
}
function dimContentWidth(kvs, widthName)  /* (kvs : std/dict/dict<string>, widthName : ?string) -> string */  {
  var widthName_10802 = (widthName !== undefined) ? widthName : "width";
  var w0 = find(kvs, widthName_10802, undefined);
  var maxw = find(kvs, "max-width", undefined);
  var minw = find(kvs, "min-width", undefined);
  var _x0 = !($std_core.isEmpty(w0));
  if (_x0) {
    var w = w0;
  }
  else {
    var _x1 = !($std_core.isEmpty(maxw));
    var w = (_x1) ? maxw : minw;
  }
  if ($std_core.isEmpty(w)) {
    return "";
  }
  else {
    $std_core._unit_;
  }
  if ($std_core.isEmpty(maxw)) {
    var width0 = $cssFormatter.cssWidth(w, undefined, undefined, undefined);
  }
  else {
    var width0 = ("\\dimmin" + ($cssFormatter.braced($cssFormatter.cssWidth(w, undefined, undefined, undefined)) + $cssFormatter.braced($cssFormatter.cssWidth(maxw, undefined, undefined, undefined))));
  }
  if ($std_core.isEmpty(minw)) {
    var width = width0;
  }
  else {
    var width = ("\\dimmax" + ($cssFormatter.braced(width0) + $cssFormatter.braced($cssFormatter.cssWidth(minw, undefined, undefined, undefined))));
  }
  return width;
}
function dimBorderBoxWidth(kvs, widthName)  /* (kvs : std/dict/dict<string>, widthName : ?string) -> string */  {
  var widthName_11109 = (widthName !== undefined) ? widthName : "width";
  var width = dimContentWidth(kvs, widthName_11109);
  if ($std_core.isEmpty(width)) {
    return "";
  }
  else {
    $std_core._unit_;
  }
  var extra = $std_core.map_3($std_core.filter($std_core.Cons(find(kvs, "border-left-width", undefined), $std_core.Cons(find(kvs, "padding-left", undefined), $std_core.Cons(find(kvs, "border-right-width", undefined), $std_core.Cons(find(kvs, "padding-right", undefined), $std_core.Nil)))), $std_core.bool_2), function(wd  /* string */ ) {  return $cssFormatter.cssWidth(wd, undefined, undefined, undefined);});
  if ($std_core.isNil(extra)) {
    return width;
  }
  else {
    return ("\\dimeval" + $cssFormatter.braced($std_core.join_4($std_core._plus__3($std_core.Cons(width, $std_core.Nil), extra), "+")));
  }
}
function dimMarginBoxWidth(kvs, widthName)  /* (kvs : std/dict/dict<string>, widthName : ?string) -> string */  {
  var widthName_11625 = (widthName !== undefined) ? widthName : "width";
  var width = dimBorderBoxWidth(kvs, widthName_11625);
  if ($std_core.isEmpty(width)) {
    return "";
  }
  else {
    $std_core._unit_;
  }
  var extra = $std_core.map_3($std_core.filter($std_core.Cons(find(kvs, "margin-left", undefined), $std_core.Cons(find(kvs, "margin-right", undefined), $std_core.Nil)), $std_core.bool_2), function(wd  /* string */ ) {  return $cssFormatter.cssWidth(wd, undefined, undefined, undefined);});
  if ($std_core.isNil(extra)) {
    return width;
  }
  else {
    return ("\\dimeval" + $cssFormatter.braced($std_core.join_4($std_core._plus__3($std_core.Cons(width, $std_core.Nil), extra), "+")));
  }
}
function dimAuto(w, other)  /* (w : string, other : ?string) -> string */  {
  var other_12054 = (other !== undefined) ? other : "";
  if ($std_core.isEmpty(w)) {
    return "";
  }
  else {
    return ("\\dimauto" + ($cssFormatter.braced(w) + $cssFormatter.braced(other_12054)));
  }
}
function marginLR(kvs, pre)  /* (kvs : std/dict/dict<string>, pre : ?string) -> (string, string) */  {
  var pre_12130 = (pre !== undefined) ? pre : "margin";
  if ((pre_12130 === "margin")) {
    var width = dimBorderBoxWidth(kvs, undefined);
  }
  else {
    var width = $cssFormatter.cssWidth(find(kvs, "width", ""), undefined, undefined, undefined);
  }
  var left = $cssFormatter.cssWidth(find(kvs, (pre_12130 + "-left"), undefined), "auto", undefined, undefined);
  var mright = $cssFormatter.cssWidth(find(kvs, (pre_12130 + "-right"), undefined), "auto", undefined, undefined);
  var _x0 = ($std_core.bool_2(width) && ($std_core.isEmpty(left) && $std_core.isEmpty(mright)));
  var right = (_x0) ? "auto" : mright;
  if ((left === "auto")) {
    if ((right === "auto")) {
      var auto = dimAuto(width, undefined);
      return $std_core._tuple2_(auto, auto);
    }
    else {
      return $std_core._tuple2_(dimAuto(width, right), right);
    }
  }
  else {
    if ((right === "auto")) {
      return $std_core._tuple2_(left, dimAuto(width, left));
    }
    else {
      return $std_core._tuple2_(left, right);
    }
  }
}
function margins(body, kvs)  /* (body : string, kvs : std/dict/dict<string>) -> string */  {
  var mtop = $cssFormatter.cssWidth(find(kvs, "margin-top", undefined), undefined, undefined, undefined);
  var mbottom = $cssFormatter.cssWidth(find(kvs, "margin-bottom", undefined), undefined, undefined, undefined);
  var _x0 = marginLR(kvs, undefined);
  var _x1 = ((mtop === mbottom) && ((mbottom === _x0.fst) && (_x0.fst === _x0.snd)));
  if (_x1) {
    return trimEnv(body, "mdbmargin", $cssFormatter.braced(mtop));
  }
  else {
    var _x2 = ($std_core.isEmpty(_x0.fst) && $std_core.isEmpty(_x0.snd));
    if (_x2) {
      return trimEnv(body, "mdbmargintb", $std_core.join_3($std_core.map_3($std_core.Cons(mtop, $std_core.Cons(mbottom, $std_core.Nil)), $cssFormatter.braced)));
    }
    else {
      return trimEnv(body, "mdbmarginx", $std_core.join_3($std_core.map_3($std_core.Cons(mtop, $std_core.Cons(_x0.snd, $std_core.Cons(mbottom, $std_core.Cons(_x0.fst, $std_core.Nil)))), $cssFormatter.braced)));
    }
  }
}
function cssOuter(body0, kvs, attrs, isBlock)  /* (body0 : string, kvs : std/dict/dict<string>, attrs : common/attrs, isBlock : bool) -> string */  {
  var _x0 = $std_core.isJust($std_dict._lb__rb__2(kvs, "tex-label-inner-before"));
  if (_x0) {
    var body1 = body0;
  }
  else {
    var _x1 = $std_dict._lb__rb__2(kvs, "tex-label-before");
    if (_x1 != null) {
      var body1 = ("\\label" + ($cssFormatter.braced(_x1.unJust) + ("%mdk\n" + body0)));
    }
    else {
      var _x2 = $std_dict._lb__rb__2(kvs, "tex-label");
      match: {
        if (_x2 != null) {
          if ($std_core.bool_2(_x2.unJust)){
            var body1 = (body0 + ("\\label" + ($cssFormatter.braced(_x2.unJust) + "%mdk\n")));
            break match;
          }
        }
        var _x3 = $std_core.isEmpty($common.name(attrs));
        if (_x3) {
          var body1 = body0;
        }
        else {
          var body1 = (body0 + ("\\label" + ($cssFormatter.braced($common.name(attrs)) + "%mdk\n")));
        }
      }
    }
  }
  if (isBlock) {
    var body1x = onKeys(body1, kvs, $std_core.Cons("margin-left", $std_core.Cons("margin-right", $std_core.Cons("margin-top", $std_core.Cons("margin-bottom", $std_core.Nil)))), function(b  /* string */ ) {  return margins(b, kvs);});
    var _x0 = !(((kvs)["tex-wrap-width"]!==undefined));
    if (_x0) {
      var body2 = body1x;
    }
    else {
      var width = dimMarginBoxWidth(kvs, "tex-wrap-width");
      var wrapfig = find(kvs, "tex-wrap-env", "wrapfigure");
      var wraplines = find(kvs, "tex-wrap-lines", "");
      var wrapplace = find(kvs, "tex-wrap-placement", "o");
      if ($std_core.bool_2(wraplines)) {
        var _x1 = ("[" + (wraplines + "]"));
      }
      else {
        var _x1 = "";
      }
      var args = (_x1 + ($cssFormatter.braced(wrapplace) + $cssFormatter.braced(width)));
      var body2 = blockEnv(body1x, wrapfig, args);
    }
  }
  else {
    var body2 = cssInlineMargin(body1, kvs, "margin");
  }
  return onKey(onKey(body2, kvs, "page-break-before", function(value  /* string */ , b0  /* string */ ) {  return cmdconnect(cssPagebreak(value), b0);}), kvs, "page-break-after", function(value0  /* string */ , b1  /* string */ ) {  return (b1 + cssPagebreak(value0));});
}
function insertCmd(body, kvs, key)  /* (body : string, kvs : std/dict/dict<string>, key : string) -> string */  {
  var _x0 = $std_dict._lb__rb__2(kvs, key);
  if (_x0 == null) {
    return body;
  }
  else {
    var _x1 = ($std_core.startsWith(_x0.unJust, "{")) ? ((_x0.unJust).substr(1)) : _x0.unJust;
    var cbody = cmdconnect(_x1, body);
    return ($std_core.startsWith(_x0.unJust, "{")) ? $cssFormatter.braced(cbody) : cbody;
  }
}
function cssAttrs(attrs0, body, defaults, elem)  /* (attrs0 : ?common/attrs, body : string, defaults : ?list<(string, string)>, elem : ?string) -> string */  {
  var attrs0_14146 = (attrs0 !== undefined) ? attrs0 : $common.attrsNone;
  var defaults_14151 = (defaults !== undefined) ? defaults : $std_core.Nil;
  var elem_14155 = (elem !== undefined) ? elem : "";
  var attrs = adjustFloatAttrs(attrs0_14146);
  var kvs = $cssFormatter.cssExpandKeys($std_dict.dict_1($std_core._plus__3(defaults_14151, $common.keyvals(attrs))));
  var _x0 = $std_dict._lb__rb__2(kvs, "display");
  if (_x0 != null) {
    var hidden = ($std_core.toLower($cssFormatter.cssValue(_x0.unJust)) === "none");
  }
  else {
    var hidden = false;
  }
  if (hidden) {
    return "";
  }
  else {
    $std_core._unit_;
  }
  var isBlock = $cssFormatter.cssIsBlock(kvs);
  return applyBlock(appendCmd(insertCmd(applyEnv(applyCmd(cssOuter(cssBox(applyEnv(applyCmd(appendCmd(insertCmd(cssInner(applyEnv(applyCmd(appendCmd(insertCmd(body, kvs, "tex-cmd-inner-before"), kvs, "tex-cmd-inner-after"), kvs, "tex-cmd-inner"), kvs, "tex-env-inner", attrs), kvs, attrs, isBlock), kvs, "tex-cmd-before"), kvs, "tex-cmd-after"), kvs, "tex-cmd"), kvs, "tex-env", attrs), kvs, isBlock), kvs, attrs, isBlock), kvs, "tex-cmd-outer"), kvs, "tex-env-outer", attrs), kvs, "tex-cmd-outer-before"), kvs, "tex-cmd-outer-after"), (isBlock && (!($common.hasClass(attrs, "para-block")) && !($common.hasClass(attrs, "para-continued")))), attrs);
}
function dimContentHeight(kvs)  /* (kvs : std/dict/dict<string>) -> string */  {
  var h0 = find(kvs, "height", undefined);
  var maxh = find(kvs, "max-height", undefined);
  var minh = find(kvs, "min-height", undefined);
  var _x0 = !($std_core.isEmpty(h0));
  if (_x0) {
    var h = h0;
  }
  else {
    var _x1 = !($std_core.isEmpty(maxh));
    var h = (_x1) ? maxh : minh;
  }
  if ($std_core.isEmpty(h)) {
    return "";
  }
  else {
    $std_core._unit_;
  }
  if ($std_core.isEmpty(maxh)) {
    var height0 = $cssFormatter.cssHeight(h, undefined);
  }
  else {
    var height0 = ("\\dimmin" + ($cssFormatter.braced($cssFormatter.cssHeight(h, undefined)) + $cssFormatter.braced($cssFormatter.cssHeight(maxh, undefined))));
  }
  if ($std_core.isEmpty(minh)) {
    var height = height0;
  }
  else {
    var height = ("\\dimmax" + ($cssFormatter.braced(height0) + $cssFormatter.braced($cssFormatter.cssHeight(minh, undefined))));
  }
  return height;
}
function cssImageArgs(attrs)  /* (attrs : common/attrs) -> (common/attrs, string) */  {
  var kvs = $std_dict.dict_1($common.keyvals(attrs));
  var w = dimContentWidth(kvs, undefined);
  var h = dimContentHeight(kvs);
  var _x0 = ($std_core.isEmpty(w)) ? "" : (",width=" + w);
  var _x1 = ($std_core.isEmpty(h)) ? "" : (",height=" + h);
  var args0 = ("keepaspectratio=true" + (_x0 + _x1));
  var args = onKey(onKey(onKey(args0, kvs, "zoom", function(value  /* string */ , b  /* string */ ) {  return (b + (",scale=" + $cssFormatter.cssPercentage(value)));}), kvs, "transform-scale", function(value0  /* string */ , b0  /* string */ ) {  return (b0 + (",scale=" + $cssFormatter.cssPercentage(value0)));}), kvs, "transform-rotate", function(value1  /* string */ , b1  /* string */ ) {  return (b1 + (",angle=" + $cssFormatter.cssValue(value1)));});
  var attrsx = $common.removeKeys(attrs, $std_core.Cons("width", $std_core.Cons("height", $std_core.Cons("zoom", $std_core.Cons("transform-rotate", $std_core.Cons("transform-scale", $std_core.Nil))))));
  return $std_core._tuple2_(attrsx, args);
}
function cssListArgs(attrs)  /* (attrs : common/attrs) -> string */  {
  var kvs = $std_dict.dict_1($common.keyvals(attrs));
  var _x0 = ($common.hasClass(attrs, "compact")) ? "noitemsep,topsep=\\mdcompacttopsep" : "";
  var args = onKey(onKey(_x0, kvs, "start", function(value  /* string */ , b  /* string */ ) {  return (b + (",start=" + $cssFormatter.cssValue(value)));}), kvs, "list-style-type", function(value0  /* string */ , b0  /* string */ ) {  var value1 = $cssFormatter.cssValue(value0); if ((value1 === "lower-roman")) {  var tag = "\\roman*";} else {  if ((value1 === "upper-roman")) {  var tag = "\\Roman*";} else {  var _x1 = ((value1 === "lower-alpha") || (value1 === "lower-latin")); if (_x1) {  var tag = "\\alph*";} else {  var _x2 = ((value1 === "upper-alpha") || (value1 === "upper-latin")); if (_x2) {  var tag = "\\Alph*";} else {  if ((value1 === "decimal")) {  var tag = "\\arabic*";} else {  if ((value1 === "disc")) {  var tag = "\\textbullet";} else {  if ((value1 === "circle")) {  var tag = "$\\circ$";} else {  if ((value1 === "square")) {  var tag = "$\\blacksquare$";} else {  if ((value1 === "dash")) {  var tag = "{--}";} else {  var tag = ((value1 === "none")) ? "" : "\\arabic*";}}}}}}}}} var _x1 = $std_dict._lb__rb__2(kvs, "list-format"); if (_x1 == null) {  if ($std_core.endsWith(tag, "*")) {  var _x2 = ($common.hasClass(attrs, "list-sep-paren")) ? ")" : "."; var fmt = ("#1" + _x2);} else {  var fmt = "#1";}} else {  var fmt = _x1.unJust;} var label = (fmt).replace(new RegExp(("#1").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'),tag); return (b0 + (",label=" + label));});
  if ($std_core.isEmpty(args)) {
    return "";
  }
  else {
    return ("[" + (args + "]"));
  }
}
var rxNamedEntity = $std_regex.regex("&(\\w+);", undefined, undefined);
function escapeEntity(s)  /* (s : string) -> string */  {
  return $std_regex.replaceAll_1(s, rxNamedEntity, "&amp;$1;", undefined);
}
var regxTexCmd = $std_regex.regex($texCommon.rxTexCmd, undefined, undefined);
function extractText(s)  /* (s : string) -> string */  {
  return $std_regex.replaceAll_1(s, regxTexCmd, " ", undefined);
}
function texEnvPlain(env, body, attrs)  /* (env : string, body : string, attrs : common/attrs) -> string */  {
  var envCmd = cssAttrs(attrs, body, $std_core.Cons($std_core._tuple2_("display", "block"), $std_core.Nil), env);
  return envCmd;
}
function texEnv(env, body, attrs)  /* (env : string, body : string, attrs : ?common/attrs) -> string */  {
  var attrs_16166 = (attrs !== undefined) ? attrs : $common.attrsNone;
  return texEnvPlain(env, body, attrs_16166);
}
function fmtCellBlock(elem, body, attrs, colfmt, defcolwidth)  /* (elem : string, body : string, attrs : common/attrs, colfmt : string, defcolwidth : string) -> string */  {
  var _x0 = $std_core.bool_1($common.hasKey(attrs, "width"));
  if (_x0) {
    return texEnv(elem, body, attrs);
  }
  else {
    return texEnv(elem, body, $common.addKeyval(attrs, "width", "available"));
  }
}
function texCmd(cmd, body, attrs, pre)  /* (cmd : string, body : string, attrs : ?common/attrs, pre : ?string) -> string */  {
  var attrs_16229 = (attrs !== undefined) ? attrs : $common.attrsNone;
  var pre_16233 = (pre !== undefined) ? pre : "md";
  return cssAttrs(attrs_16229, body, $std_core.Cons($std_core._tuple2_("display", "inline"), $std_core.Nil), cmd);
}
function fmtCellInline(elem, body, attrs, colfmt)  /* (elem : string, body : string, attrs : common/attrs, colfmt : string) -> string */  {
  var colspan = $common.lookupKey(attrs, "column-span", "1");
  var _x0 = $common.hasKey(attrs, "text-align");
  if (_x0 != null) {
    var align = $std_core.substr_1(_x0.unJust, 0, 1);
  }
  else {
    var align = ((elem === "th")) ? "c" : "l";
  }
  var _x0 = $common.hasKey(attrs, "background-color");
  if (_x0 == null) {
    var bcolor = "";
  }
  else {
    var bcolor = ("{\\mdcellcolor" + ($cssFormatter.cssColorArg(_x0.unJust) + "}"));
  }
  var _x0 = ($common.hasClass(attrs, "cell-border-left")) ? "|" : "";
  var _x1 = ($common.hasClass(attrs, "cell-border-right")) ? "|" : "";
  var fmt = (_x0 + (align + _x1));
  var arg_17129 = attrs;
  var arg_17145 = $std_core.filter($common.classes(attrs), function(c  /* string */ ) {  return ((c !== "cell-border-left") && ((c !== "cell-border-right") && !($std_core.startsWith(c, "align-"))));});
  var arg_17147 = $std_core.filter($common.keyvals(attrs), function(kv  /* (string, string) */ ) {  return (($std_core.fst(kv) !== "column-span") && (($std_core.fst(kv) !== "background-color") && ($std_core.fst(kv) !== "text-align")));});
  var arg_17130 = undefined;
  var arg_17131 = undefined;
  var arg_17132 = undefined;
  var arg_17133 = undefined;
  var arg_17134 = undefined;
  var arg_17135 = undefined;
  var arg_17136 = undefined;
  var arg_17137 = undefined;
  var arg_17138 = undefined;
  var arg_17139 = undefined;
  var arg_17140 = undefined;
  var arg_17141 = undefined;
  var arg_17142 = undefined;
  var arg_17143 = undefined;
  var arg_17144 = undefined;
  var arg_17146 = undefined;
  var attrsx = $common._copy(arg_17129, arg_17130, arg_17131, arg_17132, arg_17133, arg_17134, arg_17135, arg_17136, arg_17137, arg_17138, arg_17139, arg_17140, arg_17141, arg_17142, arg_17143, arg_17144, arg_17145, arg_17146, arg_17147);
  if ((elem === "column")) {
    var content = texEnv(elem, body, attrsx);
  }
  else {
    var content = texCmd(elem, body, $common.addKeyval(attrsx, "display", "inline"), undefined);
  }
  var _x0 = ((colspan === "1") && (fmt === colfmt));
  if (_x0) {
    return (bcolor + content);
  }
  else {
    return ("\\multicolumn{" + (colspan + ("}{" + (fmt + ("}{" + (bcolor + (content + "}")))))));
  }
}
function fmtCell(elem, body, attrs, colfmt, defcolwidth)  /* (elem : string, body : string, attrs : common/attrs, colfmt : string, defcolwidth : string) -> string */  {
  var _x0 = ((elem === "column") || ($common.lookupKey(attrs, "display", "") === "block"));
  return (_x0) ? fmtCellBlock(elem, body, attrs, colfmt, defcolwidth) : fmtCellInline(elem, body, attrs, colfmt);
}
function fmtColumn(attrs, colattr)  /* (attrs : common/attrs, colattr : common/attrs) -> string */  {
  var _x0 = $common.hasKey(colattr, "text-align");
  return (_x0 != null) ? $std_core.substr_1(_x0.unJust, 0, 1) : "l";
}
function fmtDefaultColumnWidth(colattrs)  /* (colattrs : list<common/attrs>) -> string */  {
  var fixed = $std_core.concat_1(colattrs, function(ca  /* common/attrs */ ) {  var _x0 = $std_core.bool_1($common.hasKey(ca, "width")); if (_x0) {  var kvs = $cssFormatter.cssExpandKeys($std_dict.dict_1($common.keyvals(ca))); return $std_core.Cons(("-" + dimBorderBoxWidth(kvs, undefined)), $std_core.Nil);} else {  return $std_core.Nil;}});
  var flexible = (($std_core.length_3(colattrs) - $std_core.length_3(fixed))|0);
  if (flexible === 0) {
    return "0pt";
  }
  else {
    return ("\\dimeval{(\\linewidth" + ($std_core.join_3(fixed) + (")/" + ($std_core.show_1(flexible) + "}"))));
  }
}
var rxEntity = $std_regex.regex("&((?:#[xX]?)?(\\w)(\\w*));", undefined, undefined);
var specials = $std_core.conslist([$std_core._tuple2_("%", "\\%"), $std_core._tuple2_("~", "\\textasciitilde{}"), $std_core._tuple2_("#", "\\#"), $std_core._tuple2_("&", "\\&"), $std_core._tuple2_("$", "\\$"), $std_core._tuple2_("{", "\\{"), $std_core._tuple2_("}", "\\}"), $std_core._tuple2_("[", "{}["), $std_core._tuple2_("_", "\\_"), $std_core._tuple2_("^", "\\textasciicircum{}"), $std_core._tuple2_("|", "\\textbar{}"), $std_core._tuple2_("<", "\\textless{}"), $std_core._tuple2_(">", "\\textgreater{}"), $std_core._tuple2_("\\", "\\textbackslash{}")], $std_core.Nil);
var rxSpecial = $std_regex.regex(("&#?\\w+;|[" + ($std_core.join_3($std_core.map_3(specials, function(kv  /* (string, string) */ ) {  var c = $std_core.fst(kv); var _x0 = ((c === "[") || (c === "^")); return (_x0) ? ("\\" + c) : c;})) + "\\]")), undefined, undefined);
function texEntity(cap)  /* (cap : std/regex/matched) -> string */  {
  var _x0 = $std_dict._lb__rb__2(accents, $std_regex._index_($std_regex.groups(cap), 3));
  if (_x0 != null) {
    return ("{\\" + (_x0.unJust + ("{" + ($std_regex._index_($std_regex.groups(cap), 2) + "}}"))));
  }
  else {
    return $entity.entityToTex($std_regex._index_($std_regex.groups(cap), 1));
  }
}
function texSpecial(cap)  /* (cap : std/regex/matched) -> string */  {
  var _x0 = $std_core.find(specials, function(kv  /* (string, string) */ ) {  return ($std_core.fst(kv) === $std_regex.matched(cap));});
  return (_x0 == null) ? $std_regex.matched(cap) : $std_core.snd(_x0.unJust);
}
function texText(txt)  /* (txt : string) -> string */  {
  return $std_regex.replaceAll($std_regex.replaceAll(txt, rxSpecial, texSpecial, undefined), rxEntity, texEntity, undefined);
}
function fmtLatexCmd(context, cmd, txt, attrs)  /* (context : inline/inlineContext, cmd : string, txt : string, attrs : common/attrs) -> string */  {
  if ((cmd === "")) {
    return texText(txt);
  }
  else {
    if ((cmd === "br")) {
      return "\\mdbr\n";
    }
    else {
      return texCmd(cmd, txt, attrs, undefined);
    }
  }
}
function fmtLatexCodeCell(ccell)  /* (ccell : codeAlign/ccell) -> string */  {
  var align = ($codeAlign.center(ccell)) ? "c" : "l";
  var _x0 = $codeAlign.span(ccell) <= 1;
  if (_x0) {
    return $codeAlign.content(ccell);
  }
  else {
    return ("\\multicolumn{" + ($std_core.show_1($codeAlign.span(ccell)) + ("}{" + (align + ("}{" + ($codeAlign.content(ccell) + "}"))))));
  }
}
var rxIndent = $std_regex.regex("(^|\\n)( +)", undefined, undefined);
function preSpace(txt, start)  /* (txt : string, start : ?bool) -> string */  {
  var start_21044 = (start !== undefined) ? start : true;
  var txt1 = (!(start_21044)) ? txt : $std_regex.replaceAll(txt, rxIndent, function(cap  /* std/regex/matched */ ) {  return ($std_regex._index_($std_regex.groups(cap), 1) + ("\\preindent{" + ($std_core.show_1(($std_regex._index_($std_regex.groups(cap), 2)).length) + "}")));}, undefined);
  return ((txt1).replace(new RegExp(("\n").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'),"\\\\\n")).replace(new RegExp((" ").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'),"~");
}
function fmtLatexCodePlain(context, txt, startline)  /* (context : inline/inlineContext, txt : string, startline : bool) -> string */  {
  return preSpace(texText($common.htmlEscape(txt, false)), startline);
}
function getTableEnv(attrs)  /* (attrs : common/attrs) -> string */  {
  var _x0 = ($common.hasBoolKey(attrs, "pretty-breakable") || ($common.hasBoolKey(attrs, "breakable") || $common.hasClass(attrs, "long")));
  return (_x0) ? $common.lookupKey(attrs, "tex-longtable", "longtable") : "tabular";
}
function fmtLatexCodeTable(context, ct, attrs)  /* (context : inline/inlineContext, ct : codeAlign/codeTable, attrs : common/attrs) -> string */  {
  var table = getTableEnv(attrs);
  var content = ("\\begin{mdcodetabular}" + ($cssFormatter.braced($std_core.show_1($codeAlign.columns(ct))) + ("\\begin" + ($cssFormatter.braced(table) + ("{" + ($std_core.join_4($std_core.map_3($std_core.list(1, $codeAlign.columns(ct)), function(___lp_239_comma_65_rp_  /* int */ ) {  return "l";}), "") + ("}\n" + ($std_core.join_4($std_core.map_3($codeAlign.rows(ct), function(row  /* codeAlign/crow */ ) {  return $std_core.join_4($std_core.map_3(row, fmtLatexCodeCell), "&");}), "\\\\\n") + ("\n\\end" + ($cssFormatter.braced(table) + "\\end{mdcodetabular}%mdk\n"))))))))));
  return texEnv("", content, $common.addClass(attrs, "para-block"));
}
function fmtLatexCodeToken(context, classes, txt, lang, attrs)  /* (context : inline/inlineContext, classes : list<string>, txt : string, lang : string, attrs : common/attrs) -> string */  {
  return texCmd("span", txt, attrs, undefined);
}
function texList(tag, body, attrs)  /* (tag : string, body : string, attrs : common/attrs) -> string */  {
  var args = cssListArgs(attrs);
  var _x1 = $std_core.bool_1($common.hasKey(attrs, "list-style-type"));
  var _x0 = (_x1) ? "enumerate" : $common.lookupKey(attrs, "tex-env", "enumerate");
  var env = (_x0 + args);
  return cssAttrs($common.addKeyval(attrs, "tex-env", env), body, $std_core.Cons($std_core._tuple2_("display", "block"), $std_core.Nil), "");
}
function fmtLatexEnv(context, env, txt, attrs)  /* (context : inline/inlineContext, env : string, txt : string, attrs : common/attrs) -> string */  {
  if ((env === "")) {
    return texText(txt);
  }
  else {
    var _x0 = ((env === "ul") || (env === "ol"));
    if (_x0) {
      return texList(env, txt, attrs);
    }
    else {
      return texEnv(env, txt, attrs);
    }
  }
}
function fmtLatexEscape(context, txt, allowEntity)  /* (context : inline/inlineContext, txt : string, allowEntity : bool) -> string */  {
  if (allowEntity) {
    return texText($common.htmlEscape(txt, allowEntity));
  }
  else {
    return $std_regex.replaceAll_1($std_regex.replaceAll_1(txt, $std_regex.regex("\\$", undefined, undefined), "$\\mbox{\\$}$", undefined), $std_regex.regex("\\|", undefined, undefined), "$\\mbox{\\char124}$", undefined);
  }
}
function texCmdX(cmd, body, attrs, extra)  /* (cmd : string, body : string, attrs : ?common/attrs, extra : ?list<(string, string)>) -> string */  {
  var attrs_26557 = (attrs !== undefined) ? attrs : $common.attrsNone;
  var extra_26562 = (extra !== undefined) ? extra : $std_core.Nil;
  return cssAttrs(attrs_26557, body, $std_core._plus__3($std_core.Cons($std_core._tuple2_("display", "inline"), $std_core.Cons($std_core._tuple2_("tex-cmd", cmd), $std_core.Nil)), extra_26562), undefined);
}
function fmtLatexFootnote(context, id, fn)  /* (context : inline/inlineContext, id : string, fn : inline/footnote) -> string */  {
  return texCmdX(("\\mdfootnote" + $cssFormatter.braced($inline.footnoteNum(fn))), (($inline.footnoteContent(fn)(context)).replace(/^\s\s*/,'')), $common.attrsNone, $std_core.Cons($std_core._tuple2_("id", ("back-fn-" + id)), $std_core.Nil));
}
var rxPkgOpt = $std_regex.regex("^\\s*(?:\\[(.*?)\\]\\s*)?{?([^\\*]+)\\s*(?:\\*\\s*)?(?:}\\s*)?$", undefined, undefined);
function fmtOptArg(pre, pkg, norm, ext)  /* (pre : string, pkg : string, norm : (string) -> string, ext : ?string) -> string */  {
  var ext_26765 = (ext !== undefined) ? ext : ".sty";
  var _x1 = $std_regex.find(pkg, rxPkgOpt, undefined);
  if (_x1 != null) {
    var pname = $std_regex._index_($std_regex.groups(_x1.unJust), 2);
    var _x2 = (($std_path.extname(pname) !== "") || ($std_path.dirname(pname) !== ""));
    if (_x2) {
      $std_log.log("files", $std_path.changeExt(pname, ext_26765));
    }
    else {
      $std_core._unit_;
    }
    var _x3 = ($std_regex._index_($std_regex.groups(_x1.unJust), 1) !== "");
    if (_x3) {
      var _x2 = ("[" + ($std_regex._index_($std_regex.groups(_x1.unJust), 1) + "]"));
    }
    else {
      var _x2 = "";
    }
    var _x5 = ((ext_26765 === ".cls") || (ext_26765 === ".sty"));
    var _x4 = (_x5) ? $std_path.noext(pname) : pname;
    var _x0 = (_x2 + ("{" + (norm(_x4) + "}")));
  }
  else {
    var pname0 = $std_string.trim(pkg);
    var _x6 = (($std_path.extname(pname0) !== "") || ($std_path.dirname(pname0) !== ""));
    if (_x6) {
      $std_log.log("files", $std_path.changeExt(pname0, ext_26765));
    }
    else {
      $std_core._unit_;
    }
    var _x7 = ((ext_26765 === ".cls") || (ext_26765 === ".sty"));
    var _x6 = (_x7) ? $std_path.noext(pname0) : pname0;
    var _x0 = ("{" + (norm(_x6) + "}"));
  }
  return (pre + _x0);
}
function normalize(sandbox, path)  /* (sandbox : bool, path : string) -> string */  {
  return (sandbox) ? $storage.xnormalize(path) : path;
}
var rxTexFile = $std_regex.regex("^[^\\n\\r\\[\\]]+?\\.tex$", true, undefined);
function fmtLatexFullX(body, options, metadata1, mathmode, mathrender)  /* (body : string, options : options/options, metadata1 : std/dict/dict<string>, mathmode : ?string, mathrender : ?string) -> string */  {
  var mathmode_28378 = (mathmode !== undefined) ? mathmode : "";
  var mathrender_28382 = (mathrender !== undefined) ? mathrender : "";
  var metadata0 = $std_dict.dict_1($std_core.Cons($std_core._tuple2_("heading-base", $std_core.show_1($options.headingBase(options))), $std_core.Cons($std_core._tuple2_("tex-section-num", $std_core.toLower($std_core.show_5($options.texSectionNum(options)))), $std_core.Cons($std_core._tuple2_("bib-label", "true"), $std_core.Cons($std_core._tuple2_("font-spec", "true"), $std_core.Nil)))));
  var metadata = $std_dict._plus_(metadata0, metadata1);
  function expand(s)  /* (s : string) -> string */  {
    return $attributes.expandKeys(s, metadata);
  }
  function norm(p)  /* (p : string) -> string */  {
    return normalize($options.sandbox(options), p);
  }
  var plainMath = (mathmode_28378 === "plain");
  if (plainMath) {
    var _x0 = "";
  }
  else {
    var _x0 = expand($options.packagesx(options));
  }
  var pkgs = $common.splitPaths((expand($options.packages(options)) + _x0));
  var _x0 = ($options.docClass_1(options) !== "");
  if (_x0) {
    var doc0 = norm($options.docClass_1(options));
  }
  else {
    var _x1 = $options.headingBase(options) >= 2;
    var doc0 = (_x1) ? "article" : "book";
  }
  var doc = expand(doc0);
  if ($std_core.isEmpty(mathmode_28378)) {
    var _x0 = "";
  }
  else {
    var _x0 = ("\\newcommand\\mdmathmode{" + (mathmode_28378 + "}"));
  }
  if ($std_core.isEmpty(mathrender_28382)) {
    var _x1 = "";
  }
  else {
    var _x1 = ("\\newcommand\\mdmathrender{" + (mathrender_28382 + "}"));
  }
  if (plainMath) {
    var _x3 = "";
  }
  else {
    var _x3 = expand($options.texHeaderx(options));
  }
  if (plainMath) {
    var _x4 = "";
  }
  else {
    var _x4 = expand($options.texDocHeaderx(options));
  }
  return $std_core.join_4($std_core.conslist([fmtOptArg("\\documentclass", doc, norm, ".cls"), ("% generated by Madoko, version " + $options.version(options)), "%mdk-data-line={1}", _x0, _x1, $std_core.join_4($std_core.map_3(pkgs, function(pkg  /* string */ ) {  var _x2 = $std_regex.find(pkg, rxTexFile, undefined); if (_x2 != null) {  $std_log.log("files", $std_path.changeExt(pkg, ".tex")); return ("\\input{" + (norm(pkg) + "}"));} else {  return fmtOptArg("\\usepackage", pkg, norm, undefined);}}), "\n"), expand($options.texHeader(options)), _x3, "\\begin{document}", expand($options.texDocHeader(options)), _x4, body, expand($options.texFooter(options)), "\\end{document}", ""], $std_core.Nil), "\n");
}
 
/* --------------------------------------
  Full header 
---------------------------------------- */
function fmtLatexFull(body, options, metadata)  /* (body : string, options : options/options, metadata : std/dict/dict<string>) -> string */  {
  return fmtLatexFullX(body, options, metadata, undefined, undefined);
}
function fmtLatexLineInfo(context, lineInfo)  /* (context : inline/inlineContext, lineInfo : string) -> string */  {
  return ("\\mdline{" + (lineInfo + "}"));
}
var latexImageExtensions = $std_core.Cons(".pdf", $std_core.Cons(".eps", $std_core.Cons(".ps", $std_core.Cons(".png", $std_core.Cons(".jpg", $std_core.Cons(".jpeg", $std_core.Nil))))));
function texLinkText(txt)  /* (txt : string) -> string */  {
  return $std_regex.replaceAll(txt, $std_regex.regex("([%{}&#\\\\])", undefined, undefined), function(cap  /* std/regex/matched */ ) {  return $std_core.join_3($std_core.map_3($std_core.list_5($std_regex.matched(cap)), function(c  /* char */ ) {  return ("\\%" + $std_core.showHex((c).charCodeAt(0), 2, undefined));}));}, undefined);
}
function fmtLatexLink(context, isImage, link, content)  /* (context : inline/inlineContext, isImage : bool, link : common/link, content : string) -> string */  {
  var _x0 = $std_core.bool_2($common.linkid(link));
  if (_x0) {
    var attrs = $common.addKeyval($common.linkattrs(link), "data-linkid", $common.linkid(link));
  }
  else {
    var attrs = $common.linkattrs(link);
  }
  var _x1 = $std_core.startsWith($common.href(link), "#");
  if (_x1) {
    var _x0 = (($common.href(link)).substr(1));
  }
  else {
    var _x0 = $common.href(link);
  }
  var url = texLinkText(_x0);
  if (isImage) {
    var hrefs = $common.expandChoices(url);
    var imgref = $common.pickExtension(latexImageExtensions, hrefs);
    var imgname = normalize($inline.sandbox(context), imgref);
    $std_log.log("files", imgname);
    var _x0 = cssImageArgs(attrs);
    return texCmdX(("\\includegraphics[" + (_x0.snd + ("]" + $cssFormatter.braced($std_path.noext(imgname))))), "", _x0.fst, undefined);
  }
  else {
    var _x1 = $common.hasClass($common.linkattrs(link), "tex-tooltip");
    if (_x1) {
      var titleCmd = $std_core.Cons($std_core._tuple2_("tex-cmd-outer-after", ("\\mdtooltip" + $cssFormatter.braced(extractText($common.title(link))))), $std_core.Nil);
    }
    else {
      var titleCmd = $std_core.Nil;
    }
    if ($common.hasClass(attrs, "localref")) {
      if ($common.hasClass(attrs, "bibref")) {
        var cmd = ("\\mdcite" + $cssFormatter.braced(url));
      }
      else {
        var cmd = ("\\mdref" + $cssFormatter.braced(url));
      }
    }
    else {
      var cmd = ("\\href" + $cssFormatter.braced(url));
    }
    return texCmdX(cmd, content, attrs, titleCmd);
  }
}
function fmtLatexMathCmd(context, cmd, txt, attrs)  /* (context : inline/inlineContext, cmd : string, txt : string, attrs : common/attrs) -> string */  {
  return cssAttrs(attrs, txt, $std_core.Cons($std_core._tuple2_("display", "inline"), $std_core.Nil), "span");
}
function fmtLatexMathEnv(context, env, txt, attrs)  /* (context : inline/inlineContext, env : string, txt : string, attrs : common/attrs) -> string */  {
  return cssAttrs(attrs, txt, $std_core.Cons($std_core._tuple2_("display", "inline"), $std_core.Nil), "span");
}
function fmtLatexMathFull(mode, body, options)  /* (mode : common/mathkind, body : string, options : options/options) -> string */  {
  return fmtLatexFullX(body, options, $std_dict.dict(), $common.show_3(mode), $common.show_2($options.getMathRender($options.math(options), mode)));
}
var fmtRowLineBreak = "\\morecmidrules\n";
function fmtLine(lines, row)  /* (lines : list<line>, row : common/row) -> string */  {
  function width(cattrs)  /* (cattrs : common/attrs) -> string */  {
    var _x0 = $common.hasKey(cattrs, "rule-width");
    if (_x0 != null) {
      return ("[" + ($cssFormatter.cssWidth(_x0.unJust, undefined, undefined, undefined) + "]"));
    }
    else {
      return "";
    }
  }
  var _x0 = !($std_core.any(lines, isDouble));
  if (_x0) {
    var line2 = "";
  }
  else {
    var line2 = (fmtRowLineBreak + $std_core.join_3($std_core.zipWithIndexed($common.cells(row), lines, function(i  /* int */ , cell  /* common/cell */ , line  /* line */ ) {  var attrs = $common.cellAttrs(cell); var _x1 = !(isDouble(line)); if (_x1) {  return "";} else {  return ("\\cmidrule" + (width(attrs) + ("{" + ($std_core.show_1(((i + 1)|0)) + ("-" + ($std_core.show_1(((i + $std_core.maybe($std_core.parseInt($common.lookupKey(attrs, "column-span", "1"), undefined), 1, $std_core.id))|0)) + "}"))))));}})));
  }
  var _x0 = (!($std_core.any(lines, isNoLine)) && (line2 === ""));
  if (_x0) {
    var line1 = ("\\midrule" + width($common.rowAttrs(row)));
  }
  else {
    var line1 = $std_core.join_3($std_core.zipWithIndexed($common.cells(row), lines, function(i0  /* int */ , cell0  /* common/cell */ , line0  /* line */ ) {  var attrs0 = $common.cellAttrs(cell0); if (isNoLine(line0)) {  return "";} else {  return ("\\cmidrule" + (width(attrs0) + ("{" + ($std_core.show_1(((i0 + 1)|0)) + ("-" + ($std_core.show_1(((i0 + $std_core.maybe($std_core.parseInt($common.lookupKey(attrs0, "column-span", "1"), undefined), 1, $std_core.id))|0)) + "}"))))));}}));
  }
  return (line1 + line2);
}
function fmtRow(td, row, colfmts, defcolwidth)  /* (td : string, row : common/row, colfmts : list<string>, defcolwidth : string) -> string */  {
  return ($std_core.join_4($std_core.zipWith($common.cells(row), colfmts, function(cell  /* common/cell */ , colfmt  /* string */ ) {  return fmtCell(td, $std_string.trim($common.text_1(cell)), $common.cellAttrs(cell), colfmt, defcolwidth);}), "&") + "\\\\\n");
}
function fmtRows(rows, td, colfmts, defcolwidth)  /* (rows : list<common/row>, td : string, colfmts : list<string>, defcolwidth : string) -> string */  {
  var lastIsLine = { value: false };
  var xrows = $std_core.map_3(rows, function(row  /* common/row */ ) {  var lineRow = $std_core.map_3($common.cells(row), function(cell  /* common/cell */ ) {  var _x0 = $common.hasClass($common.cellAttrs(cell), "cell-line"); if (_x0) {  return Single;} else {  var _x1 = $common.hasClass($common.cellAttrs(cell), "cell-double-line"); return (_x1) ? Double : NoLine;}}); var _x0 = !($std_core.all(lineRow, isNoLine)); if (_x0) {  var _x1 = (((lastIsLine).value)) ? fmtRowLineBreak : ""; var res = (_x1 + fmtLine(lineRow, row)); ((lastIsLine).value = true); return res;} else {  var _x1 = (((lastIsLine).value)) ? "\n" : ""; var res0 = (_x1 + fmtRow(td, row, colfmts, defcolwidth)); ((lastIsLine).value = false); return res0;}});
  var _x0 = (((lastIsLine).value)) ? "\n" : "";
  return ($std_core.join_3(xrows) + _x0);
}
function fmtLatexTable(context, head, body, colattrs, attrs)  /* (context : inline/inlineContext, head : list<common/row>, body : list<common/row>, colattrs : list<common/attrs>, attrs : common/attrs) -> string */  {
  var rows = $std_core._plus__3(head, body);
  var td = ($common.hasClass(attrs, "columns")) ? "column" : "td";
  var breakable = ($common.hasBoolKey(attrs, "breakable") || $common.hasClass(attrs, "long"));
  var table = (breakable) ? "longtable" : "tabular";
  var columns = $std_core.max(1, $std_core.maximum($std_core.map_3(rows, function(r  /* common/row */ ) {  return $std_core.length_3($common.cells(r));})));
  var colattrsx = $std_core.take($std_core._plus__3(colattrs, $std_core.map_3($std_core.list($std_core.length_3(colattrs), columns), function(i  /* int */ ) {  return $common.attrsNone;})), columns);
  var colfmts = $std_core.map_3(colattrsx, function(ca  /* common/attrs */ ) {  return fmtColumn(attrs, ca);});
  var defcolwidth = fmtDefaultColumnWidth(colattrsx);
  var tabcolsep = $cssFormatter.cssWidth($common.lookupKey(attrs, "tex-tabcolsep", "1ex"), undefined, undefined, undefined);
  var tbody = ("\\begin{mdtabular}" + ($cssFormatter.braced($std_core.show_1(columns)) + ($cssFormatter.braced(defcolwidth) + ($cssFormatter.braced(tabcolsep) + ("%mdk\n\\begin{" + (table + ("}" + ("{" + ($std_core.join_3(colfmts) + ("}" + (fmtRows(head, "th", colfmts, defcolwidth) + ("\n" + (fmtRows(body, td, colfmts, defcolwidth) + ("\\end{" + (table + "}\\end{mdtabular}\n")))))))))))))));
  if (breakable) {
    var _x0 = $std_core.Cons($std_core._tuple2_("display", "block"), $std_core.Nil);
  }
  else {
    var _x0 = $std_core.Nil;
  }
  return cssAttrs(attrs, tbody, _x0, undefined);
}
var rxCmdSpecial = $std_regex.regex("[^a-zA-Z0-9]", undefined, undefined);
var rxDigits = $std_regex.regex("\\d+", undefined, undefined);
function normalizeCmd(cmd)  /* (cmd : string) -> string */  {
  return $std_regex.replaceAll($std_regex.replaceAll_1(cmd, rxCmdSpecial, "", undefined), rxDigits, function(cap  /* std/regex/matched */ ) {  return $std_core.join_3($std_core.map_3($std_core.list(1, $std_core.maybe($std_core.parseInt($std_regex.matched(cap), undefined), 0, $std_core.id)), function(i  /* int */ ) {  return "x";}));}, undefined);
}
function nosuppressKey(kv)  /* (kv : (string, string)) -> bool */  {
  var key = $std_core.fst(kv);
  return ((key !== "source") && !(($std_core.startsWith(key, "html-") || $std_core.startsWith(key, "css-"))));
}
var rxSpaces = $std_regex.regex(" +", undefined, undefined);
function texArgs(xs)  /* (xs : list<string>) -> string */  {
  return $std_core.join_3($std_core.map_3(xs, $cssFormatter.braced));
}
function texAttrsX(attrs)  /* (attrs : common/attrs) -> string */  {
  return "";
}
function texClassName(attrs, def)  /* (attrs : common/attrs, def : string) -> (string, common/attrs) */  {
  var name = $common.elementName(attrs, def);
  var arg_37295 = attrs;
  var arg_37311 = $std_core.filter($common.classes(attrs), function(c  /* string */ ) {  return (c !== name);});
  var arg_37296 = undefined;
  var arg_37297 = undefined;
  var arg_37298 = undefined;
  var arg_37299 = undefined;
  var arg_37300 = undefined;
  var arg_37301 = undefined;
  var arg_37302 = undefined;
  var arg_37303 = undefined;
  var arg_37304 = undefined;
  var arg_37305 = undefined;
  var arg_37306 = undefined;
  var arg_37307 = undefined;
  var arg_37308 = undefined;
  var arg_37309 = undefined;
  var arg_37310 = undefined;
  var arg_37312 = undefined;
  var arg_37313 = undefined;
  return $std_core._tuple2_($std_core.capitalize(normalizeCmd(name)), $common._copy(arg_37295, arg_37296, arg_37297, arg_37298, arg_37299, arg_37300, arg_37301, arg_37302, arg_37303, arg_37304, arg_37305, arg_37306, arg_37307, arg_37308, arg_37309, arg_37310, arg_37311, arg_37312, arg_37313));
}
function trimEnvCmd(body, name, args, isBlock)  /* (body : string, name : string, args : string, isBlock : bool) -> string */  {
  if (isBlock) {
    return trimEnv(body, ("mdb" + name), args);
  }
  else {
    return ("\\md" + (name + (args + $cssFormatter.braced(body))));
  }
}
 
// koka exports:
return { 'isSingle': isSingle, 'isDouble': isDouble, 'isNoLine': isNoLine, 'accents': accents, 'adjustFloatAttrs': adjustFloatAttrs, 'appendCmd': appendCmd, 'applyBlock': applyBlock, 'rxCmdOk': rxCmdOk, 'rxCmdSpace': rxCmdSpace, 'cmdconnect': cmdconnect, 'applyCmd': applyCmd, 'blockEnv': blockEnv, 'find': find, 'rxEnv': rxEnv, 'applyEnv': applyEnv, 'rxCommentEnd': rxCommentEnd, 'unbrace': unbrace, 'braceCmd': braceCmd, 'containsAny': containsAny, 'warning': warning, 'cssAttr': cssAttr, 'cssHeightX': cssHeightX, 'onKey': onKey, 'onKeys': onKeys, 'cssInlineMargin': cssInlineMargin, 'cssRadius': cssRadius, 'cssAttrX': cssAttrX, 'cssTRBL': cssTRBL, 'cssVerticalAlign': cssVerticalAlign, 'cssWidthX': cssWidthX, 'trimEnv': trimEnv, 'padding': padding, 'cssBox': cssBox, 'cssFont': cssFont, 'onClasses': onClasses, 'cssText': cssText, 'cssInner': cssInner, 'cssPagebreak': cssPagebreak, 'dimContentWidth': dimContentWidth, 'dimBorderBoxWidth': dimBorderBoxWidth, 'dimMarginBoxWidth': dimMarginBoxWidth, 'dimAuto': dimAuto, 'marginLR': marginLR, 'margins': margins, 'cssOuter': cssOuter, 'insertCmd': insertCmd, 'cssAttrs': cssAttrs, 'dimContentHeight': dimContentHeight, 'cssImageArgs': cssImageArgs, 'cssListArgs': cssListArgs, 'rxNamedEntity': rxNamedEntity, 'escapeEntity': escapeEntity, 'regxTexCmd': regxTexCmd, 'extractText': extractText, 'texEnvPlain': texEnvPlain, 'texEnv': texEnv, 'fmtCellBlock': fmtCellBlock, 'texCmd': texCmd, 'fmtCellInline': fmtCellInline, 'fmtCell': fmtCell, 'fmtColumn': fmtColumn, 'fmtDefaultColumnWidth': fmtDefaultColumnWidth, 'rxEntity': rxEntity, 'specials': specials, 'rxSpecial': rxSpecial, 'texEntity': texEntity, 'texSpecial': texSpecial, 'texText': texText, 'fmtLatexCmd': fmtLatexCmd, 'fmtLatexCodeCell': fmtLatexCodeCell, 'rxIndent': rxIndent, 'preSpace': preSpace, 'fmtLatexCodePlain': fmtLatexCodePlain, 'getTableEnv': getTableEnv, 'fmtLatexCodeTable': fmtLatexCodeTable, 'fmtLatexCodeToken': fmtLatexCodeToken, 'texList': texList, 'fmtLatexEnv': fmtLatexEnv, 'fmtLatexEscape': fmtLatexEscape, 'texCmdX': texCmdX, 'fmtLatexFootnote': fmtLatexFootnote, 'rxPkgOpt': rxPkgOpt, 'fmtOptArg': fmtOptArg, 'normalize': normalize, 'rxTexFile': rxTexFile, 'fmtLatexFullX': fmtLatexFullX, 'fmtLatexFull': fmtLatexFull, 'fmtLatexLineInfo': fmtLatexLineInfo, 'latexImageExtensions': latexImageExtensions, 'texLinkText': texLinkText, 'fmtLatexLink': fmtLatexLink, 'fmtLatexMathCmd': fmtLatexMathCmd, 'fmtLatexMathEnv': fmtLatexMathEnv, 'fmtLatexMathFull': fmtLatexMathFull, 'fmtRowLineBreak': fmtRowLineBreak, 'fmtLine': fmtLine, 'fmtRow': fmtRow, 'fmtRows': fmtRows, 'fmtLatexTable': fmtLatexTable, 'rxCmdSpecial': rxCmdSpecial, 'rxDigits': rxDigits, 'normalizeCmd': normalizeCmd, 'nosuppressKey': nosuppressKey, 'rxSpaces': rxSpaces, 'texArgs': texArgs, 'texAttrsX': texAttrsX, 'texClassName': texClassName, 'trimEnvCmd': trimEnvCmd };
});