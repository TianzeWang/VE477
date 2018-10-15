// koka generated module: "texFormatter"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_log', './std_path', './std_dict', './std_string', './std_regex', './common', './entity', './inline', './options', './texCommon', './attributes', './codeAlign'], function($std_core, $std_log, $std_path, $std_dict, $std_string, $std_regex, $common, $entity, $inline, $options, $texCommon, $attributes, $codeAlign) {
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
var rxNamedEntity = $std_regex.regex("&(\\w+);", undefined, undefined);
function escapeEntity(s)  /* (s : string) -> string */  {
  return $std_regex.replaceAll_1(s, rxNamedEntity, "&amp;$1;", undefined);
}
var regxTexCmd = $std_regex.regex($texCommon.rxTexCmd, undefined, undefined);
function extractText(s)  /* (s : string) -> string */  {
  return $std_regex.replaceAll_1(s, regxTexCmd, " ", undefined);
}
function hslToRgb(hi, si, li)  /* (hi : int, si : int, li : int) -> (int, int, int) */  {
  var h = (($std_core._perc__1(hi, 360)) / 360.0);
  var s = ((si) * 1.0e-2);
  var l = ((li) * 1.0e-2);
  if ((s === 0.0)) {
    var x = $std_core.int_3((l * 255.0), undefined);
    return $std_core._tuple3_(x, x, x);
  }
  else {
    $std_core._unit_;
  }
  if ((l < 0.5)) {
    var q = (l * (1.0 + s));
  }
  else {
    var q = (l + (s - (l * s)));
  }
  var p = ((2.0 * l) - q);
  function hue2rgb(t0)  /* (t0 : double) -> int */  {
    if ((t0 < 0.0)) {
      var t = (t0 + 1.0);
    }
    else {
      var t = ((t0 > 1.0)) ? (t0 - 1.0) : t0;
    }
    var _x0 = (t < (1.0 / 6.0));
    if (_x0) {
      var c = (p + (((q - p) * 6.0) * t));
    }
    else {
      if ((t < 0.5)) {
        var c = q;
      }
      else {
        var _x1 = (t < (2.0 / 3.0));
        if (_x1) {
          var c = (p + (((q - p) * ((2.0 / 3.0) - t)) * 6.0));
        }
        else {
          var c = p;
        }
      }
    }
    return $std_core.int_3((c * 255.0), undefined);
  }
  return $std_core._tuple3_(hue2rgb((h + (1.0 / 3.0))), hue2rgb(h), hue2rgb((h - (1.0 / 3.0))));
}
var rxComma = $std_regex.regex("\\s*,\\s*", undefined, undefined);
var rxHsl = $std_regex.regex("^\\s*hsla?\\((\\d+),(\\d+)%?,(\\d+)%?(?:,\\d+%?)?\\)\\s*$", undefined, undefined);
var rxPerc = $std_regex.regex("^\\s*(\\d{1,3})%\\s*$", undefined, undefined);
var rxPixels = $std_regex.regex("^\\s*(\\d+(?:\\.\\d+)?)px\\s*$", undefined, undefined);
var rxQuoted = $std_regex.regex("\'[^\']*\'|\"[^\"]*\"", undefined, undefined);
var rxRgb = $std_regex.regex("^\\s*rgba?\\((\\d+)(%)?,(\\d+)%?,(\\d+)%?(?:,\\d+%?)?\\)\\s*$", undefined, undefined);
var rxEntity = $std_regex.regex("&((?:#[xX]?)?(\\w)(\\w*));", undefined, undefined);
var specials = $std_core.conslist([$std_core._tuple2_("%", "\\%"), $std_core._tuple2_("~", "{\\textasciitilde}"), $std_core._tuple2_("#", "\\#"), $std_core._tuple2_("&", "\\&"), $std_core._tuple2_("$", "\\$"), $std_core._tuple2_("{", "\\{"), $std_core._tuple2_("}", "\\}"), $std_core._tuple2_("_", "\\_"), $std_core._tuple2_("^", "{\\textasciicircum}"), $std_core._tuple2_("|", "{\\textbar}"), $std_core._tuple2_("<", "{\\textless}"), $std_core._tuple2_(">", "{\\textgreater}"), $std_core._tuple2_("\\", "{\\textbackslash}")], $std_core.Nil);
var rxSpecial = $std_regex.regex(("&#?\\w+;|[" + ($std_core.join_3($std_core.map_3(specials, $std_core.fst)) + "\\]")), undefined, undefined);
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
function normalizeVal(v0, percwidth)  /* (v0 : string, percwidth : ?string) -> string */  {
  var percwidth_3871 = (percwidth !== undefined) ? percwidth : "\\linewidth";
  var v = $std_core.join_4($std_regex.splitExclude(v0, rxComma, rxQuoted), ",");
  var _x0 = $std_regex.find(v, rxPerc, undefined);
  if (_x0 != null) {
    var perc = (($std_core.maybe($std_core.parseInt($std_regex._index_($std_regex.groups(_x0.unJust), 1), undefined), 100, $std_core.id)) / 100.0);
    return ($std_core.showFixed(perc, 2) + percwidth_3871);
  }
  else {
    var _x1 = $std_regex.find(v, rxPixels, undefined);
    if (_x1 != null) {
      return ($std_regex._index_($std_regex.groups(_x1.unJust), 1) + "\\cssPixel");
    }
    else {
      var _x2 = $std_regex.find(v, rxRgb, undefined);
      if (_x2 != null) {
        var rgb = $std_core.map_3($std_core.Cons($std_regex._index_($std_regex.groups(_x2.unJust), 1), $std_core.Cons($std_regex._index_($std_regex.groups(_x2.unJust), 3), $std_core.Cons($std_regex._index_($std_regex.groups(_x2.unJust), 4), $std_core.Nil))), function(c  /* string */ ) {  return $std_core.parseIntDefault(c, 0, undefined);});
        var _x3 = ($std_regex._index_($std_regex.groups(_x2.unJust), 2) === "%");
        var hrgb = (_x3) ? $std_core.map_3(rgb, function(p  /* int */ ) {  return $std_core.int_3(((p) * 2.55), undefined);}) : rgb;
        return ("\\#" + $std_core.join_3($std_core.map_3(hrgb, function(c0  /* int */ ) {  return $std_core.showHex(c0, 2, undefined);})));
      }
      else {
        var _x3 = $std_regex.find(v, rxHsl, undefined);
        if (_x3 != null) {
          var _x4 = hslToRgb($std_core.parseIntDefault($std_regex._index_($std_regex.groups(_x3.unJust), 1), 0, undefined), $std_core.parseIntDefault($std_regex._index_($std_regex.groups(_x3.unJust), 2), 0, undefined), $std_core.parseIntDefault($std_regex._index_($std_regex.groups(_x3.unJust), 3), 0, undefined));
          return ("\\#" + $std_core.join_3($std_core.map_3($std_core.Cons(_x4.fst, $std_core.Cons(_x4.snd, $std_core.Cons(_x4.thd, $std_core.Nil))), function(c1  /* int */ ) {  return $std_core.showHex(c1, 2, undefined);})));
        }
        else {
          return $std_regex.replaceAll_1(texText(escapeEntity(v)), $std_regex.regex("\n", undefined, undefined), "\\\\", undefined);
        }
      }
    }
  }
}
var rxRgbX = $std_regex.regex("^\\s*#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9]{3})?", undefined, undefined);
function normalizeColor(v)  /* (v : string) -> string */  {
  var _x0 = $std_regex.find(v, rxRgbX, undefined);
  if (_x0 != null) {
    var _x1 = ($std_regex._index_($std_regex.groups(_x0.unJust), 4) === "");
    if (_x1) {
      return ("\\#" + $std_core.toUpper($std_core.join_3($std_core.map_3($std_core.Cons(1, $std_core.Cons(1, $std_core.Cons(2, $std_core.Cons(2, $std_core.Cons(3, $std_core.Cons(3, $std_core.Nil)))))), function(i  /* int */ ) {  return $std_regex._index_($std_regex.groups(_x0.unJust), i);}))));
    }
    else {
      return ("\\" + $std_core.toUpper($std_string.trim(v)));
    }
  }
  else {
    return normalizeVal(v, undefined);
  }
}
function fmtColorArg(clr)  /* (clr : string) -> string */  {
  var c = normalizeColor(clr);
  if ($std_core.startsWith(c, "#")) {
    return ("[HTML]{" + (((c).substr(1)) + "}"));
  }
  else {
    if ($std_core.startsWith(c, "\\#")) {
      return ("[HTML]{" + (((c).substr(2)) + "}"));
    }
    else {
      return ("{" + ($std_core.toUpper($std_core.substr_1(c, 0, 1)) + ($std_core.toLower(((c).substr(1))) + "}")));
    }
  }
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
function showAttr(key, value)  /* (key : string, value : string) -> string */  {
  var csskey = $common.normalizeId(key);
  var _x0 = ((csskey === "color") || $std_core.endsWith(csskey, "-color"));
  if (_x0) {
    var cssval = normalizeColor(value);
  }
  else {
    var _x1 = ((csskey === "max-width") || (csskey === "max-height"));
    if (_x1) {
      var cssval = normalizeVal(value, "\\naturalwidth");
    }
    else {
      var cssval = normalizeVal(value, undefined);
    }
  }
  return (csskey + ("={" + (cssval + "}")));
}
function texAttrsX(attrs)  /* (attrs : ?common/attrs) -> string */  {
  var attrs_8047 = (attrs !== undefined) ? attrs : $common.attrsNone;
  if ($common.empty(attrs_8047)) {
    return "";
  }
  else {
    var _x1 = $std_core.isNil($common.classes(attrs_8047));
    if (_x1) {
      var _x0 = $std_core.Nil;
    }
    else {
      var _x0 = $std_core.Cons(("class={" + ($std_core.join_4($std_core.map_3($common.classes(attrs_8047), $common.normalizeId), ",") + "}")), $std_core.Nil);
    }
    var _x3 = ($common.name(attrs_8047) === "");
    if (_x3) {
      var _x2 = $std_core.Nil;
    }
    else {
      var _x2 = $std_core.Cons(("id=" + $common.name(attrs_8047)), $std_core.Nil);
    }
    var _x5 = ($common.label(attrs_8047) === "");
    if (_x5) {
      var _x4 = $std_core.Nil;
    }
    else {
      var _x4 = $std_core.Cons(("label={" + (texText(escapeEntity($common.label(attrs_8047))) + "}")), $std_core.Nil);
    }
    var _x7 = ($common.elem(attrs_8047) === "");
    if (_x7) {
      var _x6 = $std_core.Nil;
    }
    else {
      var _x6 = $std_core.Cons(("elem={" + (texText(escapeEntity($common.elem(attrs_8047))) + "}")), $std_core.Nil);
    }
    var txt = $std_core.join_4($std_core.concat($std_core.Cons(_x0, $std_core.Cons(_x2, $std_core.Cons(_x4, $std_core.Cons(_x6, $std_core.Cons($std_core.map_3($std_core.filter($common.keyvals(attrs_8047), nosuppressKey), function(kv  /* (string, string) */ ) {  var name = ($std_core.startsWith(kv.fst, "tex-")) ? ((kv.fst).substr(4)) : kv.fst; return showAttr(name, kv.snd);}), $std_core.Nil)))))), ",");
    if ((txt === "")) {
      return "";
    }
    else {
      return ("[" + (txt + "]"));
    }
  }
}
function texCmd(cmd, body, attrs, pre)  /* (cmd : string, body : string, attrs : ?common/attrs, pre : ?string) -> string */  {
  var attrs_10405 = (attrs !== undefined) ? attrs : $common.attrsNone;
  var pre_10409 = (pre !== undefined) ? pre : "md";
  var _x0 = ($common.texelem(attrs_10405) !== "");
  if (_x0) {
    var cmdName = $common.texelem(attrs_10405);
  }
  else {
    var cmdName = (pre_10409 + $std_core.capitalize(normalizeCmd(cmd)));
  }
  return ("\\" + (cmdName + (texAttrsX(attrs_10405) + ("{" + (body + "}")))));
}
function texEnvPlain(env, body, attrs)  /* (env : string, body : string, attrs : common/attrs) -> string */  {
  var _x0 = ($common.texelem(attrs) !== "");
  if (_x0) {
    var envName = $common.texelem(attrs);
  }
  else {
    var envName = ("md" + $std_core.capitalize(normalizeCmd(env)));
  }
  var envCmd = ("\\begin{" + (envName + ("}" + (texAttrsX(attrs) + ("%mdk\n" + (((body).replace(/\s+$/,'')) + ("%mdk\n" + ("\\end{" + (envName + "}%mdk\n")))))))));
  var _x0 = $common.hasKey(attrs, "float");
  if (_x0 == null) {
    return envCmd;
  }
  else {
    return ("\\mdFloatBox{" + (_x0.unJust + ("}{" + ($common.lookupKey(attrs, "lines", "") + ("}{" + (envCmd + "}"))))));
  }
}
function texEnv(env, body, attrs)  /* (env : string, body : string, attrs : ?common/attrs) -> string */  {
  var attrs_11155 = (attrs !== undefined) ? attrs : $common.attrsNone;
  return texEnvPlain(env, body, attrs_11155);
}
function fmtCell(elem, body, attrs, pre)  /* (elem : string, body : string, attrs : common/attrs, pre : string) -> string */  {
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
    var bcolor = ("{\\cellcolor" + (fmtColorArg(_x0.unJust) + "}"));
  }
  var _x0 = ($common.hasClass(attrs, "cell-border-left")) ? "|" : "";
  var _x1 = ($common.hasClass(attrs, "cell-border-right")) ? "|" : "";
  var fmt = (_x0 + (align + _x1));
  var arg_11868 = attrs;
  var arg_11884 = $std_core.filter($common.classes(attrs), function(c  /* string */ ) {  return ((c !== "cell-border-left") && ((c !== "cell-border-right") && !($std_core.startsWith(c, "align-"))));});
  var arg_11886 = $std_core.filter($common.keyvals(attrs), function(kv  /* (string, string) */ ) {  return (($std_core.fst(kv) !== "column-span") && ($std_core.fst(kv) !== "background-color"));});
  var arg_11869 = undefined;
  var arg_11870 = undefined;
  var arg_11871 = undefined;
  var arg_11872 = undefined;
  var arg_11873 = undefined;
  var arg_11874 = undefined;
  var arg_11875 = undefined;
  var arg_11876 = undefined;
  var arg_11877 = undefined;
  var arg_11878 = undefined;
  var arg_11879 = undefined;
  var arg_11880 = undefined;
  var arg_11881 = undefined;
  var arg_11882 = undefined;
  var arg_11883 = undefined;
  var arg_11885 = undefined;
  var attrsx = $common._copy(arg_11868, arg_11869, arg_11870, arg_11871, arg_11872, arg_11873, arg_11874, arg_11875, arg_11876, arg_11877, arg_11878, arg_11879, arg_11880, arg_11881, arg_11882, arg_11883, arg_11884, arg_11885, arg_11886);
  if ((elem === "column")) {
    var content = texEnv(elem, body, attrsx);
  }
  else {
    var content = texCmd(elem, body, $common.addKeyval(attrsx, "display", "table-cell"), undefined);
  }
  var _x0 = ((colspan === "1") && ((fmt === "l") && (bcolor === "")));
  if (_x0) {
    return content;
  }
  else {
    return ("\\multicolumn{" + (colspan + ("}{" + (fmt + ("}{" + (bcolor + (content + "}")))))));
  }
}
function fmtColumn(colattr)  /* (colattr : common/attrs) -> string */  {
  return "l";
}
var fmtRowLineBreak = "\\morecmidrules\n";
function fmtLine(lines, row)  /* (lines : list<line>, row : common/row) -> string */  {
  function width(cattrs)  /* (cattrs : common/attrs) -> string */  {
    var _x0 = $common.hasKey(cattrs, "rule-width");
    if (_x0 != null) {
      return ("[" + (normalizeVal(_x0.unJust, undefined) + "]"));
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
function fmtRow(td, row, pre)  /* (td : string, row : common/row, pre : string) -> string */  {
  return ($std_core.join_4($std_core.map_3($common.cells(row), function(cell  /* common/cell */ ) {  return fmtCell(td, $std_string.trim($common.text_1(cell)), $common.cellAttrs(cell), pre);}), "&") + "\\\\\n");
}
function fmtRows(rows, td, pre)  /* (rows : list<common/row>, td : string, pre : string) -> string */  {
  var lastIsLine = { value: false };
  var xrows = $std_core.map_3(rows, function(row  /* common/row */ ) {  var lineRow = $std_core.map_3($common.cells(row), function(cell  /* common/cell */ ) {  var _x0 = $common.hasClass($common.cellAttrs(cell), "cell-line"); if (_x0) {  return Single;} else {  var _x1 = $common.hasClass($common.cellAttrs(cell), "cell-double-line"); return (_x1) ? Double : NoLine;}}); var _x0 = !($std_core.all(lineRow, isNoLine)); if (_x0) {  var _x1 = (((lastIsLine).value)) ? fmtRowLineBreak : ""; var res = (_x1 + fmtLine(lineRow, row)); ((lastIsLine).value = true); return res;} else {  var _x1 = (((lastIsLine).value)) ? "\n" : ""; var res0 = (_x1 + fmtRow(td, row, pre)); ((lastIsLine).value = false); return res0;}});
  var _x0 = (((lastIsLine).value)) ? "\n" : "";
  return ($std_core.join_3(xrows) + _x0);
}
function fmtTexCmd(context, cmd, txt, attrs)  /* (context : inline/inlineContext, cmd : string, txt : string, attrs : common/attrs) -> string */  {
  if ((cmd === "")) {
    return texText(txt);
  }
  else {
    if ((cmd === "br")) {
      return "\\mdBr\n";
    }
    else {
      return texCmd(cmd, txt, attrs, undefined);
    }
  }
}
function fmtTexCodeCell(ccell)  /* (ccell : codeAlign/ccell) -> string */  {
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
var rxSpaces = $std_regex.regex(" +", undefined, undefined);
function preSpace(txt, start)  /* (txt : string, start : ?bool) -> string */  {
  var start_15907 = (start !== undefined) ? start : true;
  return (($std_regex.replaceAll($std_regex.replaceAll(txt, rxIndent, function(cap  /* std/regex/matched */ ) {  var _x0 = (start_15907) ? "\\preindent" : "\\prespace"; return ($std_regex._index_($std_regex.groups(cap), 1) + (_x0 + ("{" + ($std_core.show_1(($std_regex._index_($std_regex.groups(cap), 2)).length) + "}"))));}, undefined), rxSpaces, function(cap0  /* std/regex/matched */ ) {  return ("\\prespace{" + ($std_core.show_1(($std_regex.matched(cap0)).length) + "}"));}, undefined)).replace(new RegExp(("\n|<br>").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'),"\\prebr{}\n")).replace(new RegExp(("`").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'),"{`}");
}
function fmtTexCodePlain(context, txt, startline)  /* (context : inline/inlineContext, txt : string, startline : bool) -> string */  {
  return preSpace(texText($common.htmlEscape(txt, false)), startline);
}
function fmtTexCodeTable(context, ct, attrs)  /* (context : inline/inlineContext, ct : codeAlign/codeTable, attrs : common/attrs) -> string */  {
  var table = ($common.hasClass(attrs, "long")) ? "LongTable" : "Table";
  return ("\\begin{mdCode" + (table + ("}" + (texAttrsX(attrs) + ("{" + ($std_core.show_1($codeAlign.columns(ct)) + ("}" + ("{" + ($std_core.join_4($std_core.map_3($std_core.list(1, $codeAlign.columns(ct)), function(___lp_189_comma_117_rp_  /* int */ ) {  return "l";}), "") + ("}\n" + ($std_core.join_4($std_core.map_3($codeAlign.rows(ct), function(row  /* codeAlign/crow */ ) {  return $std_core.join_4($std_core.map_3(row, fmtTexCodeCell), "&");}), "\\\\\n") + "\n\\end{mdCodeTable}\n")))))))))));
}
function fmtTexCodeToken(context, classes, txt, lang, attrs)  /* (context : inline/inlineContext, classes : list<string>, txt : string, lang : string, attrs : common/attrs) -> string */  {
  if ($std_core.any(classes, function(cname  /* string */ ) {  return (cname === "white");})) {
    var start = "{";
  }
  else {
    var cclasses = $std_core.filter($std_core.map_3(classes, function(cname0  /* string */ ) {  return $std_regex.replaceAll_1($std_regex.replaceAll(cname0, $std_regex.regex("(?:^|[^a-z]+)(?:([a-z])([a-z]*))?", true, undefined), function(ccap  /* std/regex/matched */ ) {  return ($std_core.toUpper($std_regex._index_($std_regex.groups(ccap), 1)) + $std_regex._index_($std_regex.groups(ccap), 2));}, undefined), $std_regex.regex("[^a-zA-Z]+", undefined, undefined), "", undefined);}), function(cname1  /* string */ ) {  return ((cname1 !== "") && (cname1 !== "Token"));});
    var start = ("\\mdToken{" + ($std_core.join_4(cclasses, ",") + "}{"));
  }
  var end = "}";
  return (start + (txt + end));
}
function fmtTexEnv(context, env, txt, attrs)  /* (context : inline/inlineContext, env : string, txt : string, attrs : common/attrs) -> string */  {
  if ((env === "")) {
    return texText(txt);
  }
  else {
    return texEnv(env, txt, attrs);
  }
}
function fmtTexEscape(context, txt, allowEntity)  /* (context : inline/inlineContext, txt : string, allowEntity : bool) -> string */  {
  if (allowEntity) {
    return texText($common.htmlEscape(txt, allowEntity));
  }
  else {
    return $std_regex.replaceAll_1($std_regex.replaceAll_1(txt, $std_regex.regex("\\$", undefined, undefined), "$\\mbox{\\$}$", undefined), $std_regex.regex("\\|", undefined, undefined), "$\\mbox{\\char124}$", undefined);
  }
}
function fmtTexFootnote(context, id, fn)  /* (context : inline/inlineContext, id : string, fn : inline/footnote) -> string */  {
  return ("\\mdFootnote[id=back-fn-" + (id + (",label={" + ($inline.footnoteNum(fn) + ("}]{" + ($inline.footnoteContent(fn)(context) + "}"))))));
}
function fmtTexLineInfo(context, lineInfo)  /* (context : inline/inlineContext, lineInfo : string) -> string */  {
  return ("%mdk-data-line={" + (lineInfo + "}\n{}"));
}
function texLinkText(txt)  /* (txt : string) -> string */  {
  return (((txt).replace(new RegExp(("~").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'),"\\textasciitilde ")).replace(new RegExp(("%").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'),"\\%")).replace(new RegExp(("#").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'),"\\#");
}
function fmtTexLink(context, isImage, link, content)  /* (context : inline/inlineContext, isImage : bool, link : common/link, content : string) -> string */  {
  var _x0 = $std_core.bool_2($common.linkid(link));
  if (_x0) {
    var attrs = $common.addKeyval($common.linkattrs(link), "data-linkid", $common.linkid(link));
  }
  else {
    var attrs = $common.linkattrs(link);
  }
  if (isImage) {
    return texCmd("img", $common.href(link), attrs, undefined);
  }
  else {
    var _x1 = $std_core.startsWith($common.href(link), "#");
    if (_x1) {
      var _x0 = (($common.href(link)).substr(1));
    }
    else {
      var _x0 = $common.href(link);
    }
    var _x3 = $common.hasClass($common.linkattrs(link), "tex-tooltip");
    if (_x3) {
      var _x2 = extractText($common.title(link));
    }
    else {
      var _x2 = "";
    }
    return (texCmd("a", texLinkText(_x0), attrs, undefined) + ("{" + (_x2 + ("}" + ("{" + (content + "}"))))));
  }
}
function fmtTexTable(context, head, body, colattrs, attrs)  /* (context : inline/inlineContext, head : list<common/row>, body : list<common/row>, colattrs : list<common/attrs>, attrs : common/attrs) -> string */  {
  var pre = "md";
  var rows = $std_core._plus__3(head, body);
  var td = ($common.hasClass(attrs, "columns")) ? "column" : "td";
  var table = ($common.hasClass(attrs, "long")) ? "LongTable" : "Table";
  var columns = $std_core.max(1, $std_core.maximum($std_core.map_3(rows, function(r  /* common/row */ ) {  return $std_core.length_3($common.cells(r));})));
  var colattrsx = $std_core.take($std_core._plus__3(colattrs, $std_core.map_3($std_core.list($std_core.length_3(colattrs), columns), function(i  /* int */ ) {  return $common.attrsNone;})), columns);
  return ("\\begin{" + (pre + (table + ("}" + (texAttrsX($common.addClass(attrs, "block")) + ("{" + ($std_core.show_1(columns) + ("}" + ("{" + ($std_core.join_3($std_core.map_3(colattrsx, fmtColumn)) + ("}\n" + (fmtRows(head, "th", pre) + ("\n" + (fmtRows(body, td, pre) + ("\\end{" + (pre + (table + "}\n")))))))))))))))));
}
function texClassName(attrs, def)  /* (attrs : common/attrs, def : string) -> (string, common/attrs) */  {
  var name = $common.elementName(attrs, def);
  var arg_42372 = attrs;
  var arg_42388 = $std_core.filter($common.classes(attrs), function(c  /* string */ ) {  return (c !== name);});
  var arg_42373 = undefined;
  var arg_42374 = undefined;
  var arg_42375 = undefined;
  var arg_42376 = undefined;
  var arg_42377 = undefined;
  var arg_42378 = undefined;
  var arg_42379 = undefined;
  var arg_42380 = undefined;
  var arg_42381 = undefined;
  var arg_42382 = undefined;
  var arg_42383 = undefined;
  var arg_42384 = undefined;
  var arg_42385 = undefined;
  var arg_42386 = undefined;
  var arg_42387 = undefined;
  var arg_42389 = undefined;
  var arg_42390 = undefined;
  return $std_core._tuple2_($std_core.capitalize(normalizeCmd(name)), $common._copy(arg_42372, arg_42373, arg_42374, arg_42375, arg_42376, arg_42377, arg_42378, arg_42379, arg_42380, arg_42381, arg_42382, arg_42383, arg_42384, arg_42385, arg_42386, arg_42387, arg_42388, arg_42389, arg_42390));
}
 
// koka exports:
return { 'isSingle': isSingle, 'isDouble': isDouble, 'isNoLine': isNoLine, 'accents': accents, 'rxNamedEntity': rxNamedEntity, 'escapeEntity': escapeEntity, 'regxTexCmd': regxTexCmd, 'extractText': extractText, 'hslToRgb': hslToRgb, 'rxComma': rxComma, 'rxHsl': rxHsl, 'rxPerc': rxPerc, 'rxPixels': rxPixels, 'rxQuoted': rxQuoted, 'rxRgb': rxRgb, 'rxEntity': rxEntity, 'specials': specials, 'rxSpecial': rxSpecial, 'texEntity': texEntity, 'texSpecial': texSpecial, 'texText': texText, 'normalizeVal': normalizeVal, 'rxRgbX': rxRgbX, 'normalizeColor': normalizeColor, 'fmtColorArg': fmtColorArg, 'rxCmdSpecial': rxCmdSpecial, 'rxDigits': rxDigits, 'normalizeCmd': normalizeCmd, 'nosuppressKey': nosuppressKey, 'showAttr': showAttr, 'texAttrsX': texAttrsX, 'texCmd': texCmd, 'texEnvPlain': texEnvPlain, 'texEnv': texEnv, 'fmtCell': fmtCell, 'fmtColumn': fmtColumn, 'fmtRowLineBreak': fmtRowLineBreak, 'fmtLine': fmtLine, 'fmtRow': fmtRow, 'fmtRows': fmtRows, 'fmtTexCmd': fmtTexCmd, 'fmtTexCodeCell': fmtTexCodeCell, 'rxIndent': rxIndent, 'rxSpaces': rxSpaces, 'preSpace': preSpace, 'fmtTexCodePlain': fmtTexCodePlain, 'fmtTexCodeTable': fmtTexCodeTable, 'fmtTexCodeToken': fmtTexCodeToken, 'fmtTexEnv': fmtTexEnv, 'fmtTexEscape': fmtTexEscape, 'fmtTexFootnote': fmtTexFootnote, 'fmtTexLineInfo': fmtTexLineInfo, 'texLinkText': texLinkText, 'fmtTexLink': fmtTexLink, 'fmtTexTable': fmtTexTable, 'texClassName': texClassName };
});