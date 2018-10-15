// koka generated module: "cssFormatter"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_dict', './std_string', './std_regex', './common'], function($std_core, $std_dict, $std_string, $std_regex, $common) {
"use strict";
 
// koka declarations:
function isBraced(s)  /* (s : string) -> bool */  {
  return ($std_core.startsWith(s, "{") && ((s).indexOf("}")) === (((s).length - 1)|0));
}
var rxEndComment = $std_regex.regex("(^|[^\\\\])%.*$", undefined, undefined);
function braced(s)  /* (s : string) -> string */  {
  if (isBraced(s)) {
    return s;
  }
  else {
    var nl = ($std_regex.contains(s, rxEndComment, undefined)) ? "\n" : "";
    return ("{" + (s + (nl + "}")));
  }
}
var rxCssEscape = $std_regex.regex("\\\\(?:([a-fA-F0-9]{1,6})\\s?|([^\\r\\n\\fa-fA-F0-9]))", undefined, undefined);
var rxCssIgnore = $std_regex.regex("\\s*!important$", undefined, undefined);
function cssNormalize(v)  /* (v : string) -> string */  {
  return $std_regex.replaceAll_1($std_regex.replaceAll($std_string.trim(v), rxCssEscape, function(cap  /* std/regex/matched */ ) {  var _x0 = $std_core.bool_2($std_regex._index_($std_regex.groups(cap), 2)); if (_x0) {  var i = $std_core.parseIntDefault($std_regex._index_($std_regex.groups(cap), 2), 32, true); return $std_core.string_3(1, String.fromCharCode(i));} else {  return $std_regex._index_($std_regex.groups(cap), 1);}}, undefined), rxCssIgnore, "", undefined);
}
function cssBool(v0)  /* (v0 : string) -> string */  {
  var v = $std_core.toLower(cssNormalize(v0));
  var _x0 = ((v === "true") || (v === "1"));
  return (_x0) ? "true" : "false";
}
var cssNamedColorsList = $std_core.conslist([$std_core._tuple2_("black", $std_core._tuple3_(0, 0, 0)), $std_core._tuple2_("silver", $std_core._tuple3_(192, 192, 192)), $std_core._tuple2_("gray", $std_core._tuple3_(128, 128, 128)), $std_core._tuple2_("grey", $std_core._tuple3_(128, 128, 128)), $std_core._tuple2_("white", $std_core._tuple3_(255, 255, 255)), $std_core._tuple2_("maroon", $std_core._tuple3_(128, 0, 0)), $std_core._tuple2_("red", $std_core._tuple3_(255, 0, 0)), $std_core._tuple2_("purple", $std_core._tuple3_(128, 0, 128)), $std_core._tuple2_("fuchsia", $std_core._tuple3_(255, 0, 255)), $std_core._tuple2_("green", $std_core._tuple3_(0, 128, 0)), $std_core._tuple2_("lime", $std_core._tuple3_(0, 255, 0)), $std_core._tuple2_("olive", $std_core._tuple3_(128, 128, 0)), $std_core._tuple2_("yellow", $std_core._tuple3_(255, 255, 0)), $std_core._tuple2_("navy", $std_core._tuple3_(0, 0, 128)), $std_core._tuple2_("blue", $std_core._tuple3_(0, 0, 255)), $std_core._tuple2_("teal", $std_core._tuple3_(0, 128, 128)), $std_core._tuple2_("aqua", $std_core._tuple3_(0, 255, 255)), $std_core._tuple2_("orange", $std_core._tuple3_(255, 165, 0)), $std_core._tuple2_("aliceblue", $std_core._tuple3_(240, 248, 255)), $std_core._tuple2_("antiquewhite", $std_core._tuple3_(250, 235, 215)), $std_core._tuple2_("aquamarine", $std_core._tuple3_(127, 255, 212)), $std_core._tuple2_("azure", $std_core._tuple3_(240, 255, 255)), $std_core._tuple2_("beige", $std_core._tuple3_(245, 245, 220)), $std_core._tuple2_("bisque", $std_core._tuple3_(255, 228, 196)), $std_core._tuple2_("blanchedalmond", $std_core._tuple3_(255, 228, 196)), $std_core._tuple2_("blueviolet", $std_core._tuple3_(138, 43, 226)), $std_core._tuple2_("brown", $std_core._tuple3_(165, 42, 42)), $std_core._tuple2_("burlywood", $std_core._tuple3_(222, 184, 135)), $std_core._tuple2_("cadetblue", $std_core._tuple3_(95, 158, 160)), $std_core._tuple2_("chartreuse", $std_core._tuple3_(127, 255, 0)), $std_core._tuple2_("chocolate", $std_core._tuple3_(210, 105, 30)), $std_core._tuple2_("coral", $std_core._tuple3_(255, 127, 80)), $std_core._tuple2_("cornflowerblue", $std_core._tuple3_(100, 149, 237)), $std_core._tuple2_("cornsilk", $std_core._tuple3_(255, 248, 220)), $std_core._tuple2_("crimson", $std_core._tuple3_(220, 20, 60)), $std_core._tuple2_("darkblue", $std_core._tuple3_(0, 0, 139)), $std_core._tuple2_("darkcyan", $std_core._tuple3_(0, 139, 139)), $std_core._tuple2_("darkgoldenrod", $std_core._tuple3_(184, 134, 11)), $std_core._tuple2_("darkgray", $std_core._tuple3_(169, 169, 169)), $std_core._tuple2_("darkgrey", $std_core._tuple3_(169, 169, 169)), $std_core._tuple2_("darkgreen", $std_core._tuple3_(0, 100, 0)), $std_core._tuple2_("darkgray", $std_core._tuple3_(169, 169, 169)), $std_core._tuple2_("darkgrey", $std_core._tuple3_(169, 169, 169)), $std_core._tuple2_("darkkhaki", $std_core._tuple3_(189, 183, 107)), $std_core._tuple2_("darkmagenta", $std_core._tuple3_(139, 0, 139)), $std_core._tuple2_("darkolivegreen", $std_core._tuple3_(85, 107, 47)), $std_core._tuple2_("darkorange", $std_core._tuple3_(255, 140, 0)), $std_core._tuple2_("darkorchid", $std_core._tuple3_(153, 50, 204)), $std_core._tuple2_("darkred", $std_core._tuple3_(139, 0, 0)), $std_core._tuple2_("darksalmon", $std_core._tuple3_(233, 150, 122)), $std_core._tuple2_("darkseagreen", $std_core._tuple3_(143, 188, 143)), $std_core._tuple2_("darkslateblue", $std_core._tuple3_(72, 61, 139)), $std_core._tuple2_("darkslategray", $std_core._tuple3_(47, 79, 79)), $std_core._tuple2_("darkslategrey", $std_core._tuple3_(47, 79, 79)), $std_core._tuple2_("darkturquoise", $std_core._tuple3_(0, 206, 209)), $std_core._tuple2_("darkviolet", $std_core._tuple3_(148, 0, 211)), $std_core._tuple2_("deeppink", $std_core._tuple3_(255, 20, 147)), $std_core._tuple2_("deepskyblue", $std_core._tuple3_(0, 191, 255)), $std_core._tuple2_("dimgray", $std_core._tuple3_(105, 105, 105)), $std_core._tuple2_("dimgrey", $std_core._tuple3_(105, 105, 105)), $std_core._tuple2_("dodgerblue", $std_core._tuple3_(30, 144, 255)), $std_core._tuple2_("firebrick", $std_core._tuple3_(178, 34, 34)), $std_core._tuple2_("floralwhite", $std_core._tuple3_(255, 250, 240)), $std_core._tuple2_("forestgreen", $std_core._tuple3_(34, 139, 34)), $std_core._tuple2_("gainsboro", $std_core._tuple3_(220, 220, 220)), $std_core._tuple2_("ghostwhite", $std_core._tuple3_(248, 248, 255)), $std_core._tuple2_("gold", $std_core._tuple3_(255, 215, 0)), $std_core._tuple2_("goldenrod", $std_core._tuple3_(218, 165, 32)), $std_core._tuple2_("greenyellow", $std_core._tuple3_(173, 255, 47)), $std_core._tuple2_("grey", $std_core._tuple3_(128, 128, 128)), $std_core._tuple2_("honeydew", $std_core._tuple3_(240, 255, 240)), $std_core._tuple2_("hotpink", $std_core._tuple3_(255, 105, 180)), $std_core._tuple2_("indianred", $std_core._tuple3_(205, 92, 92)), $std_core._tuple2_("indigo", $std_core._tuple3_(75, 0, 130)), $std_core._tuple2_("ivory", $std_core._tuple3_(255, 255, 240)), $std_core._tuple2_("khaki", $std_core._tuple3_(240, 230, 140)), $std_core._tuple2_("lavender", $std_core._tuple3_(230, 230, 250)), $std_core._tuple2_("lavenderblush", $std_core._tuple3_(255, 240, 245)), $std_core._tuple2_("lawngreen", $std_core._tuple3_(124, 252, 0)), $std_core._tuple2_("lemonchiffon", $std_core._tuple3_(255, 250, 205)), $std_core._tuple2_("lightblue", $std_core._tuple3_(173, 216, 230)), $std_core._tuple2_("lightcoral", $std_core._tuple3_(240, 128, 128)), $std_core._tuple2_("lightcyan", $std_core._tuple3_(224, 255, 255)), $std_core._tuple2_("lightgoldenrodyellow", $std_core._tuple3_(250, 250, 210)), $std_core._tuple2_("lightgray", $std_core._tuple3_(211, 211, 211)), $std_core._tuple2_("lightgrey", $std_core._tuple3_(211, 211, 211)), $std_core._tuple2_("lightgreen", $std_core._tuple3_(144, 238, 144)), $std_core._tuple2_("lightpink", $std_core._tuple3_(255, 182, 193)), $std_core._tuple2_("lightsalmon", $std_core._tuple3_(255, 160, 122)), $std_core._tuple2_("lightseagreen", $std_core._tuple3_(32, 178, 170)), $std_core._tuple2_("lightskyblue", $std_core._tuple3_(135, 206, 250)), $std_core._tuple2_("lightslategray", $std_core._tuple3_(119, 136, 153)), $std_core._tuple2_("lightslategrey", $std_core._tuple3_(119, 136, 153)), $std_core._tuple2_("lightsteelblue", $std_core._tuple3_(176, 196, 222)), $std_core._tuple2_("lightyellow", $std_core._tuple3_(255, 255, 224)), $std_core._tuple2_("limegreen", $std_core._tuple3_(50, 205, 50)), $std_core._tuple2_("linen", $std_core._tuple3_(250, 240, 230)), $std_core._tuple2_("mediumaquamarine", $std_core._tuple3_(102, 205, 170)), $std_core._tuple2_("mediumblue", $std_core._tuple3_(0, 0, 205)), $std_core._tuple2_("mediumorchid", $std_core._tuple3_(186, 85, 211)), $std_core._tuple2_("mediumpurple", $std_core._tuple3_(147, 112, 219)), $std_core._tuple2_("mediumseagreen", $std_core._tuple3_(60, 179, 113)), $std_core._tuple2_("mediumslateblue", $std_core._tuple3_(123, 104, 238)), $std_core._tuple2_("mediumspringgreen", $std_core._tuple3_(0, 250, 154)), $std_core._tuple2_("mediumturquoise", $std_core._tuple3_(72, 209, 204)), $std_core._tuple2_("mediumvioletred", $std_core._tuple3_(199, 21, 133)), $std_core._tuple2_("midnightblue", $std_core._tuple3_(25, 25, 112)), $std_core._tuple2_("mintcream", $std_core._tuple3_(245, 255, 250)), $std_core._tuple2_("mistyrose", $std_core._tuple3_(255, 228, 225)), $std_core._tuple2_("moccasin", $std_core._tuple3_(255, 228, 181)), $std_core._tuple2_("navajowhite", $std_core._tuple3_(255, 222, 173)), $std_core._tuple2_("oldlace", $std_core._tuple3_(253, 245, 230)), $std_core._tuple2_("olivedrab", $std_core._tuple3_(107, 142, 35)), $std_core._tuple2_("orangered", $std_core._tuple3_(255, 69, 0)), $std_core._tuple2_("orchid", $std_core._tuple3_(218, 112, 214)), $std_core._tuple2_("palegoldenrod", $std_core._tuple3_(238, 232, 170)), $std_core._tuple2_("palegreen", $std_core._tuple3_(152, 251, 152)), $std_core._tuple2_("paleturquoise", $std_core._tuple3_(175, 238, 238)), $std_core._tuple2_("palevioletred", $std_core._tuple3_(219, 112, 147)), $std_core._tuple2_("papayawhip", $std_core._tuple3_(255, 239, 213)), $std_core._tuple2_("peachpuff", $std_core._tuple3_(255, 218, 185)), $std_core._tuple2_("peru", $std_core._tuple3_(205, 133, 63)), $std_core._tuple2_("pink", $std_core._tuple3_(255, 192, 203)), $std_core._tuple2_("plum", $std_core._tuple3_(221, 160, 221)), $std_core._tuple2_("powderblue", $std_core._tuple3_(176, 224, 230)), $std_core._tuple2_("rosybrown", $std_core._tuple3_(188, 143, 143)), $std_core._tuple2_("royalblue", $std_core._tuple3_(65, 105, 225)), $std_core._tuple2_("saddlebrown", $std_core._tuple3_(139, 69, 19)), $std_core._tuple2_("salmon", $std_core._tuple3_(250, 128, 114)), $std_core._tuple2_("sandybrown", $std_core._tuple3_(244, 164, 96)), $std_core._tuple2_("seagreen", $std_core._tuple3_(46, 139, 87)), $std_core._tuple2_("seashell", $std_core._tuple3_(255, 245, 238)), $std_core._tuple2_("sienna", $std_core._tuple3_(160, 82, 45)), $std_core._tuple2_("skyblue", $std_core._tuple3_(135, 206, 235)), $std_core._tuple2_("slateblue", $std_core._tuple3_(106, 90, 205)), $std_core._tuple2_("slategray", $std_core._tuple3_(112, 128, 144)), $std_core._tuple2_("slategrey", $std_core._tuple3_(112, 128, 144)), $std_core._tuple2_("snow", $std_core._tuple3_(255, 250, 250)), $std_core._tuple2_("springgreen", $std_core._tuple3_(0, 255, 127)), $std_core._tuple2_("steelblue", $std_core._tuple3_(70, 130, 180)), $std_core._tuple2_("tan", $std_core._tuple3_(210, 180, 140)), $std_core._tuple2_("thistle", $std_core._tuple3_(216, 191, 216)), $std_core._tuple2_("tomato", $std_core._tuple3_(255, 99, 71)), $std_core._tuple2_("turquoise", $std_core._tuple3_(64, 224, 208)), $std_core._tuple2_("violet", $std_core._tuple3_(238, 130, 238)), $std_core._tuple2_("wheat", $std_core._tuple3_(245, 222, 179)), $std_core._tuple2_("whitesmoke", $std_core._tuple3_(245, 245, 245)), $std_core._tuple2_("yellowgreen", $std_core._tuple3_(154, 205, 50)), $std_core._tuple2_("rebeccapurple", $std_core._tuple3_(102, 51, 153))], $std_core.Nil);
function cssRgb(rgb)  /* (rgb : (int, int, int)) -> string */  {
  function hex(i)  /* (i : int) -> string */  {
    return $std_core.showHex($std_core.max($std_core.min(i, 255), 0), 2, undefined);
  }
  var _x0 = (rgb.fst === 0 && (rgb.snd === 0 && rgb.thd === 0));
  if (_x0) {
    return "black";
  }
  else {
    var _x1 = (rgb.fst >= 255 && (rgb.snd >= 255 && rgb.thd >= 255));
    if (_x1) {
      return "white";
    }
    else {
      return ("\\#" + (hex(rgb.fst) + (hex(rgb.snd) + hex(rgb.thd))));
    }
  }
}
var cssNamedColors = $std_dict.dict_1($std_core.map_3(cssNamedColorsList, function(kv  /* (string, (int, int, int)) */ ) {  return $std_core._tuple2_($std_core.fst(kv), cssRgb($std_core.snd(kv)));}));
var cssStdNamesList = $std_core.conslist(["red", "lime", "blue", "yellow", "cyan", "magenta", "navy", "maroon", "green", "teal", "purple", "olive", "black", "dimgray", "gray", "darkgray", "silver", "lightgray", "gainsboro", "floralwhite", "ivory", "white", "orange", "aqua", "fuchsia", "darkgreen", "transparent", "currentcolor"], $std_core.Nil);
var cssStdNames = $std_dict.dict_1($std_core.map_3(cssStdNamesList, function(s  /* string */ ) {  return $std_core._tuple2_(s, true);}));
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
var rxHsl = $std_regex.regex("^\\s*hsla?\\((\\d+),(\\d+)%?,(\\d+)%?(?:,\\d+%?)?\\)\\s*$", undefined, undefined);
var rxRgb = $std_regex.regex("^\\s*rgba?\\((\\d+)(%)?,(\\d+)%?,(\\d+)%?(?:,\\d+%?)?\\)\\s*$", undefined, undefined);
var rxRgbX = $std_regex.regex("^\\s*#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9]{3})?", undefined, undefined);
function cssColor(v0)  /* (v0 : string) -> string */  {
  var v = $std_core.toLower(cssNormalize(v0));
  var _x0 = $std_regex.find(v, rxRgbX, undefined);
  if (_x0 != null) {
    var rgbx = $std_core.map_1($std_core._tuple3_(1, 2, 3), function(i  /* int */ ) {  var _x1 = ($std_regex._index_($std_regex.groups(_x0.unJust), 4) === ""); if (_x1) {  return ($std_regex._index_($std_regex.groups(_x0.unJust), i) + $std_regex._index_($std_regex.groups(_x0.unJust), i));} else {  return $std_core.substr_1($std_regex.matched(_x0.unJust), ((1 + $std_core.intMultiply(2,((i - 1)|0)))|0), 2);}});
    var rgb = $std_core.map_1(rgbx, function(s  /* string */ ) {  return $std_core.parseIntDefault(s, 0, true);});
    return cssRgb(rgb);
  }
  else {
    var _x1 = $std_regex.find(v, rxRgb, undefined);
    if (_x1 != null) {
      var rgb0 = $std_core.map_1($std_core._tuple3_($std_regex._index_($std_regex.groups(_x1.unJust), 1), $std_regex._index_($std_regex.groups(_x1.unJust), 3), $std_regex._index_($std_regex.groups(_x1.unJust), 4)), function(c  /* string */ ) {  return $std_core.parseIntDefault(c, 0, undefined);});
      var _x2 = ($std_regex._index_($std_regex.groups(_x1.unJust), 2) === "%");
      var rgb1 = (_x2) ? $std_core.map_1(rgb0, function(p  /* int */ ) {  return $std_core.int_3(((p) * 2.55), undefined);}) : rgb0;
      return cssRgb(rgb1);
    }
    else {
      var _x2 = $std_regex.find(v, rxHsl, undefined);
      if (_x2 != null) {
        var rgb2 = hslToRgb($std_core.parseIntDefault($std_regex._index_($std_regex.groups(_x2.unJust), 1), 0, undefined), $std_core.parseIntDefault($std_regex._index_($std_regex.groups(_x2.unJust), 2), 0, undefined), $std_core.parseIntDefault($std_regex._index_($std_regex.groups(_x2.unJust), 3), 0, undefined));
        return cssRgb(rgb2);
      }
      else {
        var _x3 = $std_dict._lb__rb__2(cssStdNames, v);
        if (_x3 != null) {
          return ((v === "transparent")) ? "" : v;
        }
        else {
          var _x4 = $std_dict._lb__rb__2(cssNamedColors, v);
          if (_x4 != null) {
            return _x4.unJust;
          }
          else {
            $common.warning(("unknown named css color: " + v), undefined);
            return v;
          }
        }
      }
    }
  }
}
function cssColorArg(v)  /* (v : string) -> string */  {
  if ((v === "")) {
    return "{}";
  }
  else {
    return ("{" + (cssColor(v) + "}"));
  }
}
function cssColorCmd(v)  /* (v : string) -> string */  {
  if ((v === "")) {
    return "";
  }
  else {
    return ("\\mdcolor{" + (cssColor(v) + "}"));
  }
}
function cssIsColor(term)  /* (term : string) -> bool */  {
  return ($std_regex.contains(term, rxRgbX, undefined) || ($std_regex.contains(term, rxRgb, undefined) || ($std_regex.contains(term, rxHsl, undefined) || ((cssNamedColors)[$std_core.toLower(cssNormalize(term))]!==undefined))));
}
var regNum = "([\\-\\+]?(?:\\d+|\\d*\\.\\d+)(?:[eE]\\d+)?)";
var rxLen = $std_regex.regex((regNum + "(em|ex|ch|rem|vh|vw|vmin|vmax|px|mm|cm|in|pt|pc)\\b"), undefined, undefined);
function cssIsLength(term)  /* (term : string) -> bool */  {
  return $std_regex.contains(term, rxLen, undefined);
}
var rxEsc = "\\\\(?:[0-9a-fA-F]{1,6}\\s*|.)";
var rxCssTerm = $std_regex.regex(("(?:\'(?:[^\\n\\\\\']|" + (rxEsc + (")*\'|\"(?:[^\\n\\\\\"]|" + (rxEsc + (")*\"|-?[a-zA-Z_]\\w*\\([^\\)]*\\)|(?:[^\'\"\\\\\\s]|" + (rxEsc + ")+)")))))), undefined, undefined);
 
// Split multiple CSS values that can be separated by spaces (like `margin`)
function cssSplitValues(s)  /* (s : string) -> list<string> */  {
  return $std_core.map_3($std_core.list_4($std_regex.findAll(s, rxCssTerm, undefined)), function(cap  /* std/regex/matched */ ) {  return cssNormalize($std_regex.matched(cap));});
}
function cssExpandBorder(kvs, post)  /* (kvs : std/dict/dict<string>, post : ?string) -> list<(string, string)> */  {
  var post_9665 = (post !== undefined) ? post : "";
  var _x0 = $std_dict._lb__rb__2(kvs, ("border" + post_9665));
  if (_x0 == null) {
    return $std_core.Nil;
  }
  else {
    var terms = cssSplitValues(_x0.unJust);
    return $std_core.map_3(terms, function(term  /* string */ ) {  if (cssIsLength(term)) {  return $std_core._tuple2_(("border" + (post_9665 + "-width")), term);} else {  if (cssIsColor(term)) {  return $std_core._tuple2_(("border" + (post_9665 + "-color")), term);} else {  return $std_core._tuple2_(("border" + (post_9665 + "-style")), term);}}});
  }
}
 
// Expand keys that define multiple values at once; ie. border may have `border-(width|color|style)` values.
function cssExpandMultiKeys(kvs)  /* (kvs : std/dict/dict<string>) -> std/dict/dict<string> */  {
  var xss = $std_core.Cons(cssExpandBorder(kvs, undefined), $std_core.Cons(cssExpandBorder(kvs, "-top"), $std_core.Cons(cssExpandBorder(kvs, "-right"), $std_core.Cons(cssExpandBorder(kvs, "-bottom"), $std_core.Cons(cssExpandBorder(kvs, "-left"), $std_core.Nil)))));
  return $std_dict._plus_($std_dict.dict_1($std_core.concat(xss)), kvs);
}
function cssExpandTRBL(kvs, key)  /* (kvs : std/dict/dict<string>, key : string) -> list<(string, string)> */  {
  var i = ((key).lastIndexOf('-'));
  if (i < 0) {
    var _x0 = $std_core._tuple2_(key, "");
  }
  else {
    var _x0 = $std_core._tuple2_($std_core.substr_1(key, 0, i), ((key).substr(i)));
  }
  var _x1 = $std_dict._lb__rb__2(kvs, key);
  if (_x1 == null) {
    return $std_core.Nil;
  }
  else {
    var _x2 = cssSplitValues(_x1.unJust);
    if (_x2 != null && _x2.tail == null) {
      var vs = $std_core.Cons(_x2.head, $std_core.Cons(_x2.head, $std_core.Cons(_x2.head, $std_core.Cons(_x2.head, $std_core.Nil))));
    }
    else if (_x2 != null && _x2.tail != null && _x2.tail.tail == null) {
      var vs = $std_core.Cons(_x2.head, $std_core.Cons(_x2.tail.head, $std_core.Cons(_x2.head, $std_core.Cons(_x2.tail.head, $std_core.Nil))));
    }
    else if (_x2 != null && _x2.tail != null && _x2.tail.tail != null && _x2.tail.tail.tail == null) {
      var vs = $std_core.Cons(_x2.head, $std_core.Cons(_x2.tail.head, $std_core.Cons(_x2.tail.tail.head, $std_core.Nil)));
    }
    else {
      var vs = _x2;
    }
    var ks = $std_core.map_3($std_core.Cons("top", $std_core.Cons("right", $std_core.Cons("bottom", $std_core.Cons("left", $std_core.Nil)))), function(side  /* string */ ) {  return (_x0.fst + ("-" + (side + _x0.snd)));});
    var zs = $std_core.zip(ks, vs);
    var _x2 = $std_core.length_3(zs) === 4;
    if (_x2) {
      return zs;
    }
    else {
      $common.warning(("Unable to parse CSS values: " + _x1.unJust), undefined);
      return $std_core.Nil;
    }
  }
}
 
// Expand keys that stand for multiple keys; i.e. `margin` is a shorthand for `margin-(top|right|bottom|left)`.
function cssExpandKeys(kvs0)  /* (kvs0 : std/dict/dict<string>) -> std/dict/dict<string> */  {
  var kvs = cssExpandMultiKeys(kvs0);
  var xs = $std_core.concat($std_core.Cons(cssExpandTRBL(kvs, "margin"), $std_core.Cons(cssExpandTRBL(kvs, "padding"), $std_core.Cons(cssExpandTRBL(kvs, "border-style"), $std_core.Cons(cssExpandTRBL(kvs, "border-width"), $std_core.Cons(cssExpandTRBL(kvs, "border-color"), $std_core.Cons(cssExpandTRBL(kvs, "border-radius"), $std_core.Nil)))))));
  return $std_dict._plus_($std_dict.dict_1(xs), kvs);
}
var cssUnits = $std_dict.dict_1($std_core.map_3($std_core.Cons("px", $std_core.Cons("rem", $std_core.Cons("vh", $std_core.Cons("vw", $std_core.Cons("vmin", $std_core.Cons("vmax", $std_core.Cons("ch", $std_core.Nil))))))), function(s  /* string */ ) {  return $std_core._tuple2_(s, true);}));
function cssValue(v)  /* (v : string) -> string */  {
  return cssNormalize(v);
}
var rxNum = $std_regex.regex(regNum, undefined, undefined);
var rxPerc = $std_regex.regex("^\\s*(\\d{1,3})%\\s*$", undefined, undefined);
function cssWidth(v0, auto, percOf, defunit)  /* (v0 : string, auto : ?string, percOf : ?string, defunit : ?string) -> string */  {
  var auto_11435 = (auto !== undefined) ? auto : "";
  var percOf_11439 = (percOf !== undefined) ? percOf : "width";
  var defunit_11443 = (defunit !== undefined) ? defunit : "px";
  var v = $std_core.toLower(cssNormalize(v0));
  var _x0 = $std_regex.find(v, rxPerc, undefined);
  if (_x0 != null) {
    var perc = (($std_core.maybe($std_core.parseInt($std_regex._index_($std_regex.groups(_x0.unJust), 1), undefined), 100, $std_core.id)) / 100.0);
    return ("\\dim" + (percOf_11439 + braced($std_core.showFixed(perc, 2))));
  }
  else {
    var _x1 = $std_regex.find(v, rxLen, undefined);
    if (_x1 != null) {
      var _x2 = ((cssUnits)[$std_regex._index_($std_regex.groups(_x1.unJust), 2)]!==undefined);
      if (_x2) {
        return ("\\dim" + ($std_regex._index_($std_regex.groups(_x1.unJust), 2) + braced($std_regex._index_($std_regex.groups(_x1.unJust), 1))));
      }
      else {
        return cssValue(v);
      }
    }
    else {
      var _x3 = $std_regex.find(v, rxNum, undefined);
      if (_x3 != null) {
        if (((cssUnits)[defunit_11443]!==undefined)) {
          return ("\\dim" + (defunit_11443 + braced(cssValue(v))));
        }
        else {
          return (cssValue(v) + defunit_11443);
        }
      }
      else {
        if ((v === "auto")) {
          return auto_11435;
        }
        else {
          if ((v === "normal")) {
            return ("1" + defunit_11443);
          }
          else {
            return ((v === "available")) ? "\\dimavailable" : cssValue(v);
          }
        }
      }
    }
  }
}
function cssFontLength(v)  /* (v : string) -> string */  {
  return cssWidth(v, "", "font", "em");
}
function cssHeight(v, auto)  /* (v : string, auto : ?string) -> string */  {
  var auto_12454 = (auto !== undefined) ? auto : "";
  return cssWidth(v, auto_12454, "height", "px");
}
function cssIsBlock(kvs)  /* (kvs : std/dict/dict<string>) -> bool */  {
  var _x0 = $std_dict._lb__rb__2(kvs, "display");
  if (_x0 == null) {
    return false;
  }
  else {
    var display = $std_core.toLower(cssNormalize(_x0.unJust));
    return (display === "block");
  }
}
function cssIsInlineBlock(kvs)  /* (kvs : std/dict/dict<string>) -> bool */  {
  var _x0 = $std_dict._lb__rb__2(kvs, "display");
  if (_x0 == null) {
    return false;
  }
  else {
    var display = $std_core.toLower(cssNormalize(_x0.unJust));
    return (display === "inline-block");
  }
}
function cssPercentage(v0)  /* (v0 : string) -> string */  {
  var v = cssValue(v0);
  if ($std_core.endsWith(v, "%")) {
    var _x0 = $std_core.parseInt($std_core.substr_1(v, 0, (((v).length - 1)|0)), undefined);
    if (_x0 == null) {
      $common.warning(("illegal percentage: " + v), undefined);
      return v;
    }
    else {
      return ($std_core.show_1($std_core._fs__1(_x0.unJust, 100)) + ("." + $std_core.fill($std_core.show_1($std_core._perc__1(_x0.unJust, 100)), 2, '0')));
    }
  }
  else {
    return v;
  }
}
var rxCssListTerm = $std_regex.regex(("(?:\'(?:[^\\n\\\\\']|" + (rxEsc + (")*\'|\"(?:[^\\n\\\\\"]|" + (rxEsc + (")*\"|[\\-a-zA-Z_/](?:[\\w\\-\\t \\.\\@/]|" + (rxEsc + ")*)")))))), undefined, undefined);
 
// Split comma seperated CSS values (like `font-family`)
function cssSplitList(s)  /* (s : string) -> list<string> */  {
  return $std_core.map_3($std_core.list_4($std_regex.findAll(s, rxCssListTerm, undefined)), function(cap  /* std/regex/matched */ ) {  return $common.unquote($std_regex.matched(cap));});
}
var rxPixels = $std_regex.regex("^\\s*(\\d+(?:\\.\\d+)?)px\\s*$", undefined, undefined);
 
// koka exports:
return { 'isBraced': isBraced, 'rxEndComment': rxEndComment, 'braced': braced, 'rxCssEscape': rxCssEscape, 'rxCssIgnore': rxCssIgnore, 'cssNormalize': cssNormalize, 'cssBool': cssBool, 'cssNamedColorsList': cssNamedColorsList, 'cssRgb': cssRgb, 'cssNamedColors': cssNamedColors, 'cssStdNamesList': cssStdNamesList, 'cssStdNames': cssStdNames, 'hslToRgb': hslToRgb, 'rxHsl': rxHsl, 'rxRgb': rxRgb, 'rxRgbX': rxRgbX, 'cssColor': cssColor, 'cssColorArg': cssColorArg, 'cssColorCmd': cssColorCmd, 'cssIsColor': cssIsColor, 'regNum': regNum, 'rxLen': rxLen, 'cssIsLength': cssIsLength, 'rxEsc': rxEsc, 'rxCssTerm': rxCssTerm, 'cssSplitValues': cssSplitValues, 'cssExpandBorder': cssExpandBorder, 'cssExpandMultiKeys': cssExpandMultiKeys, 'cssExpandTRBL': cssExpandTRBL, 'cssExpandKeys': cssExpandKeys, 'cssUnits': cssUnits, 'cssValue': cssValue, 'rxNum': rxNum, 'rxPerc': rxPerc, 'cssWidth': cssWidth, 'cssFontLength': cssFontLength, 'cssHeight': cssHeight, 'cssIsBlock': cssIsBlock, 'cssIsInlineBlock': cssIsInlineBlock, 'cssPercentage': cssPercentage, 'rxCssListTerm': rxCssListTerm, 'cssSplitList': cssSplitList, 'rxPixels': rxPixels };
});