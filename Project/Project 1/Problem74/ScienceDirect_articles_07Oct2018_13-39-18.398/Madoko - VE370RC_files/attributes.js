// koka generated module: "attributes"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_regex', './std_dict', './std_string', './common', './entity', './expression'], function($std_core, $std_regex, $std_dict, $std_string, $common, $entity, $expression) {
"use strict";
 
// koka declarations:
function Pattern(elem, name, classes, attrselectors, weight)  /* (elem : string, name : string, classes : list<string>, attrselectors : list<expression/expr>, weight : int) -> pattern */  {
  return { elem: elem, name: name, classes: classes, attrselectors: attrselectors, weight: weight };
}
function Rules(rules)  /* (rules : list<(pattern, string)>) -> rules */  {
  return { rules: rules };
}
 
// Automatically generated. Retrieves the `elem` constructor field of the ":pattern" type.
function elem(pattern)  /* (pattern : pattern) -> string */  {
  return pattern.elem;
}
 
// Automatically generated. Retrieves the `name` constructor field of the ":pattern" type.
function name(pattern)  /* (pattern : pattern) -> string */  {
  return pattern.name;
}
 
// Automatically generated. Retrieves the `classes` constructor field of the ":pattern" type.
function classes(pattern)  /* (pattern : pattern) -> list<string> */  {
  return pattern.classes;
}
 
// Automatically generated. Retrieves the `attrselectors` constructor field of the ":pattern" type.
function attrselectors(pattern)  /* (pattern : pattern) -> list<expression/expr> */  {
  return pattern.attrselectors;
}
 
// Automatically generated. Retrieves the `weight` constructor field of the ":pattern" type.
function weight(pattern)  /* (pattern : pattern) -> int */  {
  return pattern.weight;
}
function _copy(_this, elem0, name0, classes0, attrselectors0, weight0)  /* (pattern, elem : ?string, name : ?string, classes : ?list<string>, attrselectors : ?list<expression/expr>, weight : ?int) -> pattern */  {
  var elem_215 = (elem0 !== undefined) ? elem0 : elem(_this);
  var name_237 = (name0 !== undefined) ? name0 : name(_this);
  var classes_250 = (classes0 !== undefined) ? classes0 : classes(_this);
  var attrselectors_256 = (attrselectors0 !== undefined) ? attrselectors0 : attrselectors(_this);
  var weight_262 = (weight0 !== undefined) ? weight0 : weight(_this);
  return Pattern(elem_215, name_237, classes_250, attrselectors_256, weight_262);
}
 
// Automatically generated. Retrieves the `rules` constructor field of the ":rules" type.
function rules(rules0)  /* (rules : rules) -> list<(pattern, string)> */  {
  return rules0.rules;
}
function _copy_1(_this, rules0)  /* (rules, rules : ?list<(pattern, string)>) -> rules */  {
  var rules_290 = (rules0 !== undefined) ? rules0 : rules(_this);
  return Rules(rules_290);
}
function filterx(xs, pred)  /* forall<a,e> (xs : list<a>, pred : (a) -> e bool) -> e list<a> */  { tailcall: while(1)
{
  if (xs == null) {
    return $std_core.Nil;
  }
  else {
    if (pred(xs.head)) {
      return $std_core.Cons(xs.head, filterx(xs.tail, pred));
    }
    else {
      {
        xs = xs.tail;
        continue tailcall;
      }
    }
  }
}}
 
// insert a pattern value sorted on weight, from low to high
function insert(xs, weight0, value)  /* (xs : list<(int, string)>, weight : int, value : string) -> list<(int, string)> */  {
  if (xs == null) {
    return $std_core.Cons($std_core._tuple2_(weight0, value), $std_core.Nil);
  }
  else {
    var _x0 = $std_core.fst(xs.head) <= weight0;
    if (_x0) {
      return $std_core.Cons(xs.head, insert(xs.tail, weight0, value));
    }
    else {
      return $std_core.Cons($std_core._tuple2_(weight0, value), xs);
    }
  }
}
function keyNotFound(key, matched)  /* (key : string, matched : string) -> string */  {
  $common.warning(("undefined key: " + key), undefined);
  return matched;
}
var rxkey = $std_regex.regex("\\\\&|(?:\\\\/)?&([\\w\\-:]*|&);(\\\\/)?", undefined, undefined);
 
// expand keys in a string
function expandKeys_2(p0, txt, source, attrs, labels, metadata, notFound)  /* (p0 : common/peano, txt : string, source : string, attrs : common/attrs, labels : std/dict/dict<common/label>, metadata : std/dict/dict<string>, notFound : ?(string, string) -> string) -> string */  {
  var notFound_668 = (notFound !== undefined) ? notFound : keyNotFound;
  if ((txt === "")) {
    return txt;
  }
  else {
    $std_core._unit_;
  }
  return (p0 == null) ? txt : $std_regex.replaceAll(txt, rxkey, function(cap  /* std/regex/matched */ ) {  var rawkey = $std_regex._index_($std_regex.groups(cap), 1); var key = $common.normalizeId(rawkey); if ((rawkey === "")) {  return $std_regex.matched(cap);} else {  if ((rawkey === "&")) {  return "&";} else {  var _x0 = ((key === "label") && !($common.empty(attrs))); if (_x0) {  return $common.label(attrs);} else {  var _x1 = ((key === "id") && !($common.empty(attrs))); if (_x1) {  return $common.name(attrs);} else {  var _x2 = ((key === "class") && !($common.empty(attrs))); if (_x2) {  return $std_core.join_4($common.classes(attrs), " ");} else {  var _x3 = ((key === "source") && !($common.empty(attrs))); if (_x3) {  return source;} else {  var _x4 = $std_core.find($common.keyvals(attrs), function(kv  /* (string, string) */ ) {  return ($std_core.fst(kv) === key);}); if (_x4 != null) {  var _x5 = (txt === $std_core.snd(_x4.unJust)); if (_x5) {  return $std_core.snd(_x4.unJust);} else {  return expandKeys_2(p0.prev, $std_core.snd(_x4.unJust), source, attrs, $std_dict.dict(), metadata, notFound_668);}} else {  var _x6 = $std_dict._lb__rb__2(labels, key); if (_x6 != null) {  return $common.labelText(_x6.unJust);} else {  var _x7 = $std_dict._lb__rb__2(metadata, key); if (_x7 != null) {  return expandKeys_2(p0.prev, _x7.unJust, source, attrs, $std_dict.dict(), metadata, notFound_668);} else {  var _x8 = $entity.entityNameAsNum(rawkey); if (_x8 != null) {  return _x8.unJust;} else {  return notFound_668(key, $std_regex.matched(cap));}}}}}}}}}}}, undefined);
}
function expandKeys(txt, metadata)  /* (txt : string, metadata : std/dict/dict<string>) -> string */  {
  return expandKeys_2($common.peanoN, txt, "", $common.attrsNone, $std_dict.dict(), metadata, undefined);
}
function expandKeys_1(txt, source, attrs, labels, metadata)  /* (txt : string, source : string, attrs : common/attrs, labels : std/dict/dict<common/label>, metadata : std/dict/dict<string>) -> string */  {
  return expandKeys_2($common.peanoN, txt, source, attrs, labels, metadata, undefined);
}
function ignoreNotFound(key, matched)  /* (key : string, matched : string) -> string */  {
  return matched;
}
function expandKeyPattern(name0, attrs)  /* (name : string, attrs : common/attrs) -> string */  {
  return expandKeys_2($common.peanoN, ("&" + (name0 + ";")), $common.source(attrs), attrs, $std_dict.dict(), $std_dict.dict(), ignoreNotFound);
}
function show(p)  /* (p : pattern) -> string */  {
  return ("~" + (elem(p) + ("#" + (name(p) + ("." + ($std_core.join_4(classes(p), ".") + $std_core.join_3($std_core.map_3(attrselectors(p), function(e  /* expression/expr */ ) {  return ("[" + ($expression.show(e, undefined) + "]"));}))))))));
}
function matchSelector(e, attrs)  /* (e : expression/expr, attrs : common/attrs) -> bool */  {
  function lookup(v, display)  /* forall<a> (v : string, display : a) -> expression/constant */  {
    return $expression.String(expandKeyPattern(v, attrs));
  }
  return $std_core.$catch(function() {  return $expression.bool($expression.evalExpr(e, lookup));}, function(exn  /* exception */ ) {  $common.warning($std_core.show(exn), undefined); return false;});
}
function matches(pat, xelem, xname, attrs)  /* (pat : pattern, xelem : string, xname : string, attrs : common/attrs) -> bool */  {
  return (($std_core.isEmpty(elem(pat)) || (elem(pat) === xelem)) && (($std_core.isEmpty(name(pat)) || (name(pat) === xname)) && (($std_core.isNil(classes(pat)) || $std_core.all(classes(pat), function(c  /* string */ ) {  return $common.hasClass(attrs, c);})) && ($std_core.isNil(attrselectors(pat)) || $std_core.all(attrselectors(pat), function(e  /* expression/expr */ ) {  return matchSelector(e, attrs);})))));
}
function getMatches(rules0, attrs, name0, elemName)  /* (rules : list<(pattern, string)>, attrs : common/attrs, name : string, elemName : string) -> (string, list<(pattern, string)>) */  {
  var def = { value: $std_core.Nil };
  var newrules = filterx(rules0, function(rule  /* (pattern, string) */ ) {  if (matches(rule.fst, elemName, name0, attrs)) {  ((def).value = insert(((def).value), weight(rule.fst), rule.snd)); return false;} else {  return true;}});
  var final = $std_core.join_4($std_core.map_3(((def).value), $std_core.snd), " ; ");
  return $std_core._tuple2_(final, newrules);
}
var rxCommentValue = $std_regex.regex("^/\\*(?:[^\\\\\\*]|\\\\.|\\*(?!/))*\\*/", undefined, undefined);
function legalValue(s)  /* (s : string) -> bool */  {
  return (!($std_core.isEmpty(s)) && !($std_regex.contains(s, rxCommentValue, undefined)));
}
var rxQuoted = "(?:\'(?:[^\\n\\\\\']|\\\\[\\s\\S])*\'|\"(?:[^\\n\\\\\"]|\\\\[\\s\\S])*\")";
var rxCssValue = ("(?:" + (rxQuoted + ("|" + "(?:&(?:#[xX]?)?[\\w\\-]+;|[^\\\\\"\'\\s;,]|\\\\.)*)")));
var rxCssVal = ("(?:\\s*:\\s*(" + (rxCssValue + ("(?:(?:\\s+|\\s*(,\\s*)+)" + (rxCssValue + ")*))"))));
var rxHtmlValue = ("(?:" + (rxQuoted + ("|" + "(?:[^\\\\\"\'\\s]|\\\\.)*)")));
var rxHtmlVal = ("(?:\\s*=\\s*(" + (rxHtmlValue + "))"));
var rxId = "(?:[\\.#][\\w\\.#@\\-:]*|[@\\-\\w][\\w\\.#@\\-]*)";
var rxAttr = $std_regex.regex(("^(" + (rxId + (")(?:" + (rxHtmlVal + ("|" + (rxCssVal + ")?")))))), undefined, undefined);
var rxNoSep = $std_regex.regex("^([^\\s;]|;(?!\\s))+", undefined, undefined);
var rxNoSpaces = $std_regex.regex(("\\\\.|" + rxQuoted), undefined, undefined);
var rxSep = $std_regex.regex("^(\\s+(?:;*(?:$|\\s+))?|;(?:$|\\s+))", undefined, undefined);
var rxSpaces = $std_regex.regex("\\s+", undefined, undefined);
function parseAttributesAcc(original, s, acc)  /* (original : string, s : string, acc : list<(string, string, string)>) -> list<(string, string, string)> */  { tailcall: while(1)
{
  if ((s === "")) {
    return $std_core.reverse(acc);
  }
  else {
    $std_core._unit_;
  }
  var _x0 = $std_regex.find(s, rxAttr, undefined);
  if (_x0 == null) {
    var _x1 = $std_regex.find(s, rxSep, undefined);
    if (_x1 == null) {
      var _x2 = $std_regex.find(s, rxNoSep, undefined);
      if (_x2 == null) {
        $common.warning(("invalid attribute: " + (s + ("\n  in: " + original))), undefined);
        return $std_core.reverse(acc);
      }
      else {
        $common.warning(("invalid attribute: " + ($std_regex.matched(_x2.unJust) + ("\n  in: " + original))), undefined);
        {
          var _x3 = ((s).substr($std_regex.next(_x2.unJust) >=1 ? $std_regex.next(_x2.unJust) : 1));
          s = _x3;
          continue tailcall;
        }
      }
    }
    else {
      {
        var _x4 = ((s).substr($std_regex.next(_x1.unJust) >=1 ? $std_regex.next(_x1.unJust) : 1));
        s = _x4;
        continue tailcall;
      }
    }
  }
  else {
    var values = $std_regex.splitExclude($std_string.trim($std_regex.firstMatched($std_regex.groups(_x0.unJust), 2, undefined)), rxSpaces, rxNoSpaces);
    var value = $std_core.join_4($std_core.map_3($std_core.filter(values, legalValue), $common.unquote), " ");
    var _x5 = ($std_core.length_3(values) === 1 && !(($std_core.startsWith(value, "\"") || $std_core.startsWith(value, "\'"))));
    var kwvalue = (_x5) ? value : "";
    var res = $std_core._tuple3_($std_core.toLower($std_regex._index_($std_regex.groups(_x0.unJust), 1)), kwvalue, value);
    {
      var _x5 = ((s).substr($std_regex.next(_x0.unJust) >=1 ? $std_regex.next(_x0.unJust) : 1));
      var _x6 = $std_core.Cons(res, acc);
      s = _x5;
      acc = _x6;
      continue tailcall;
    }
  }
}}
function parseAttributesX(s)  /* (s : string) -> list<(string, string, string)> */  {
  var res = parseAttributesAcc(s, s, $std_core.Nil);
  return res;
}
function smemo(f)  /* forall<a,e> (f : (string) -> e a) -> ((string) -> e a) */  {
  return ((function(){ var dict={}; return (function(s) { if (dict[s]===undefined) dict[s] = (f)(s); return dict[s]; }); })());
}
 
// Parse an attribute string
var parseAttributes = smemo(parseAttributesX);
function parsePageAlign(name0, value)  /* (name : string, value : string) -> list<(string, string)> */  {
  if ((name0 !== "page-align")) {
    return $std_core.Nil;
  }
  else {
    $std_core._unit_;
  }
  if ((value === "top")) {
    var placement = "t";
  }
  else {
    if ((value === "bottom")) {
      var placement = "b";
    }
    else {
      if ((value === "topbottom")) {
        var placement = "tb";
      }
      else {
        if ((value === "page")) {
          var placement = "p";
        }
        else {
          if ((value === "here")) {
            var placement = "h";
          }
          else {
            if ((value === "forcehere")) {
              var placement = "h!";
            }
            else {
              var placement = ((value === "inplace")) ? "H" : "";
            }
          }
        }
      }
    }
  }
  return $std_core.Cons($std_core._tuple2_("tex-float-placement", placement), $std_core.Nil);
}
function toBool(s)  /* (s : string) -> bool */  {
  return ((s === "") || (s === "true"));
}
function extendAttrs(attrs0, attrsStr, source)  /* (attrs0 : common/attrs, attrsStr : string, source : string) -> common/attrs */  {
  var _x0 = ((attrsStr === "") && (source === ""));
  if (_x0) {
    return attrs0;
  }
  else {
    $std_core._unit_;
  }
  var attrsx = $common._copy(attrs0, false, false, undefined, ($common.text(attrs0) + (" ; " + attrsStr)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, source, undefined, $std_core.Nil, undefined, undefined);
  var kvs = parseAttributes($common.joinLines(attrsStr));
  var attrs = $std_core.foldl(kvs, attrsx, function(acc  /* common/attrs */ , kv  /* (string, string, string) */ ) {  var start = $std_core.substr_1(kv.fst, 0, 1); if ((kv.snd === "clear")) {  if ((start === ".")) {  var cname = ((kv.fst).substr(1)); var arg_7322 = acc;var arg_7338 = $std_core.filter($common.classes(acc), function(c  /* string */ ) {  return (c !== cname);});var arg_7323 = undefined;var arg_7324 = undefined;var arg_7325 = undefined;var arg_7326 = undefined;var arg_7327 = undefined;var arg_7328 = undefined;var arg_7329 = undefined;var arg_7330 = undefined;var arg_7331 = undefined;var arg_7332 = undefined;var arg_7333 = undefined;var arg_7334 = undefined;var arg_7335 = undefined;var arg_7336 = undefined;var arg_7337 = undefined;var arg_7339 = undefined;var arg_7340 = undefined; return $common._copy(arg_7322, arg_7323, arg_7324, arg_7325, arg_7326, arg_7327, arg_7328, arg_7329, arg_7330, arg_7331, arg_7332, arg_7333, arg_7334, arg_7335, arg_7336, arg_7337, arg_7338, arg_7339, arg_7340);} else {  if ((start === "@")) {  var cname0 = ((kv.fst).substr(1)); var arg_7620 = acc;var arg_7637 = $std_core.filter($common.counters(acc), function(c0  /* (string, string) */ ) {  return ($std_core.fst(c0) !== cname0);});var arg_7621 = undefined;var arg_7622 = undefined;var arg_7623 = undefined;var arg_7624 = undefined;var arg_7625 = undefined;var arg_7626 = undefined;var arg_7627 = undefined;var arg_7628 = undefined;var arg_7629 = undefined;var arg_7630 = undefined;var arg_7631 = undefined;var arg_7632 = undefined;var arg_7633 = undefined;var arg_7634 = undefined;var arg_7635 = undefined;var arg_7636 = undefined;var arg_7638 = undefined; return $common._copy(arg_7620, arg_7621, arg_7622, arg_7623, arg_7624, arg_7625, arg_7626, arg_7627, arg_7628, arg_7629, arg_7630, arg_7631, arg_7632, arg_7633, arg_7634, arg_7635, arg_7636, arg_7637, arg_7638);} else {  if ((kv.fst === "class")) {  return $common._copy(acc, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $std_core.Nil, undefined, undefined);} else {  if ((kv.fst === "counters")) {  return $common._copy(acc, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $std_core.Nil, undefined);} else {  var _x0 = ((kv.fst === "replace") || ((kv.fst === "before") || (kv.fst === "after"))); if (_x0) {  return $common._copy(acc, undefined, undefined, undefined, undefined, $std_core.Nil, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);} else {  var arg_8318 = acc;var arg_8336 = $std_core.filter($common.keyvals(acc), function(k  /* (string, string) */ ) {  return ($std_core.fst(k) !== kv.fst);});var arg_8319 = undefined;var arg_8320 = undefined;var arg_8321 = undefined;var arg_8322 = undefined;var arg_8323 = undefined;var arg_8324 = undefined;var arg_8325 = undefined;var arg_8326 = undefined;var arg_8327 = undefined;var arg_8328 = undefined;var arg_8329 = undefined;var arg_8330 = undefined;var arg_8331 = undefined;var arg_8332 = undefined;var arg_8333 = undefined;var arg_8334 = undefined;var arg_8335 = undefined; return $common._copy(arg_8318, arg_8319, arg_8320, arg_8321, arg_8322, arg_8323, arg_8324, arg_8325, arg_8326, arg_8327, arg_8328, arg_8329, arg_8330, arg_8331, arg_8332, arg_8333, arg_8334, arg_8335, arg_8336);}}}}}} else {  if ((kv.fst === "clear")) {  return $common._createAttrs(undefined, undefined, false, $common.text(attrsx), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);} else {  var _x1 = ((kv.fst === "-") || ((kv.fst === "clearnum") || (kv.fst === ".clearnum"))); if (_x1) {  var arg_8735 = acc;var arg_8752 = $std_core.Nil;var arg_8748 = "";var arg_8740 = $std_core.Nil;var arg_8751 = $std_core._plus__3($std_core.Cons("clearnum", $std_core.Nil), $std_core.filter($common.classes(acc), function(nm  /* string */ ) {  return (nm !== "clearnum");}));var arg_8736 = undefined;var arg_8737 = undefined;var arg_8738 = undefined;var arg_8739 = undefined;var arg_8741 = undefined;var arg_8742 = undefined;var arg_8743 = undefined;var arg_8744 = undefined;var arg_8745 = undefined;var arg_8746 = undefined;var arg_8747 = undefined;var arg_8749 = undefined;var arg_8750 = undefined;var arg_8753 = undefined; return $common._copy(arg_8735, arg_8736, arg_8737, arg_8738, arg_8739, arg_8740, arg_8741, arg_8742, arg_8743, arg_8744, arg_8745, arg_8746, arg_8747, arg_8748, arg_8749, arg_8750, arg_8751, arg_8752, arg_8753);} else {  if ((start === "#")) {  var arg_8900 = acc;var arg_8912 = $common.definitionId(((kv.fst).substr(1)));var _x2 = ((kv.thd !== "")) ? kv.thd : $common.label(acc); var arg_8913 = _x2;var arg_8901 = undefined;var arg_8902 = undefined;var arg_8903 = undefined;var arg_8904 = undefined;var arg_8905 = undefined;var arg_8906 = undefined;var arg_8907 = undefined;var arg_8908 = undefined;var arg_8909 = undefined;var arg_8910 = undefined;var arg_8911 = undefined;var arg_8914 = undefined;var arg_8915 = undefined;var arg_8916 = undefined;var arg_8917 = undefined;var arg_8918 = undefined; return $common._copy(arg_8900, arg_8901, arg_8902, arg_8903, arg_8904, arg_8905, arg_8906, arg_8907, arg_8908, arg_8909, arg_8910, arg_8911, arg_8912, arg_8913, arg_8914, arg_8915, arg_8916, arg_8917, arg_8918);} else {  if ((start === ".")) {  var cname1 = ((kv.fst).substr(1)); var _x2 = $std_core.any($common.classes(acc), function(nm0  /* string */ ) {  return (nm0 === cname1);}); if (_x2) {  return acc;} else {  return $common._copy(acc, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $std_core._plus__3($common.classes(acc), $std_core.Cons(cname1, $std_core.Nil)), undefined, undefined);}} else {  if ((start === "@")) {  return $common._copy(acc, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $std_core._plus__3($common.counters(acc), $std_core.Cons($std_core._tuple2_(((kv.fst).substr(1)), kv.thd), $std_core.Nil)), undefined);} else {  if ((kv.fst === "elem")) {  var ename = $common.definitionId(kv.thd); var arg_9486 = acc;var arg_9495 = ename;var arg_9502 = $std_core._plus__3($std_core.Cons(ename, $std_core.Nil), $std_core.filter($common.classes(acc), function(nm1  /* string */ ) {  return (nm1 !== ename);}));var arg_9487 = undefined;var arg_9488 = undefined;var arg_9489 = undefined;var arg_9490 = undefined;var arg_9491 = undefined;var arg_9492 = undefined;var arg_9493 = undefined;var arg_9494 = undefined;var arg_9496 = undefined;var arg_9497 = undefined;var arg_9498 = undefined;var arg_9499 = undefined;var arg_9500 = undefined;var arg_9501 = undefined;var arg_9503 = undefined;var arg_9504 = undefined; return $common._copy(arg_9486, arg_9487, arg_9488, arg_9489, arg_9490, arg_9491, arg_9492, arg_9493, arg_9494, arg_9495, arg_9496, arg_9497, arg_9498, arg_9499, arg_9500, arg_9501, arg_9502, arg_9503, arg_9504);} else {  if ((kv.fst === "tex-elem")) {  return $common._copy(acc, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, kv.thd, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);} else {  if ((kv.fst === "html-elem")) {  return $common._copy(acc, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, kv.thd, undefined, undefined, undefined, undefined, undefined, undefined, undefined);} else {  if ((kv.fst === "id")) {  return $common._copy(acc, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $common.definitionId(kv.thd), undefined, undefined, undefined, undefined, undefined, undefined);} else {  if ((kv.fst === "class")) {  var cname2 = $common.definitionId(kv.thd); var _x3 = $std_core.any($common.classes(acc), function(nm2  /* string */ ) {  return (nm2 === cname2);}); if (_x3) {  return acc;} else {  return $common._copy(acc, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $std_core._plus__3($common.classes(acc), $std_core.Cons(cname2, $std_core.Nil)), undefined, undefined);}} else {  if ((kv.fst === "label")) {  return $common._copy(acc, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, kv.thd, undefined, undefined, undefined, undefined, undefined);} else {  if ((kv.fst === "sticky")) {  return $common._copy(acc, undefined, toBool(kv.thd), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);} else {  if ((kv.fst === "notag")) {  return $common._copy(acc, undefined, undefined, undefined, undefined, undefined, toBool(kv.thd), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);} else {  if ((kv.fst === "tag")) {  return $common._copy(acc, undefined, undefined, undefined, undefined, undefined, !(toBool(kv.thd)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);} else {  if ((kv.fst === "line")) {  var _x4 = $std_core.parseInt(kv.thd, undefined); if (_x4 == null) {  $common.warning(("unrecognized line number: line=" + kv.thd), undefined); return acc;} else {  return $common._copy(acc, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _x4.unJust, undefined, undefined, undefined);}} else {  if ((kv.fst === "replace")) {  return $common._copy(acc, undefined, undefined, undefined, undefined, $std_core._plus__3($common.replacers(acc), $std_core.Cons(kv.thd, $std_core.Nil)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);} else {  if ((kv.fst === "before")) {  return $common._copy(acc, undefined, undefined, undefined, undefined, $std_core._plus__3($common.replacers(acc), $std_core.Cons((kv.thd + "\\/&source;"), $std_core.Nil)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);} else {  if ((kv.fst === "after")) {  return $common._copy(acc, undefined, undefined, undefined, undefined, $std_core._plus__3($common.replacers(acc), $std_core.Cons(("\\/&source;" + kv.thd), $std_core.Nil)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);} else {  if ((kv.fst === "input")) {  var v = kv.snd; if ((v === "pre")) {  var r = $common.Pre;} else {  if ((v === "raw")) {  var r = $common._createRaw($std_core.Nothing);} else {  if ((v === "texraw")) {  var r = $common._createRaw($std_core.Just($common.FmtTex));} else {  if ((v === "htmlraw")) {  var r = $common._createRaw($std_core.Just($common.FmtHtml));} else {  if ((v === "tex")) {  var r = $common.Tex;} else {  if ((v === "math")) {  var r = $common.Math;} else {  if ((v === "mathpre")) {  var r = $common.MathPre;} else {  if ((v === "mathdefs")) {  var r = $common.MathDefs;} else {  if ((v === "normal")) {  var r = $common._createMarkdown(undefined);} else {  if ((v === "markdown")) {  var r = $common._createMarkdown(undefined);} else {  if ((v === "htmlonly")) {  var r = $common._createMarkdown($std_core.Just($common.FmtHtml));} else {  if ((v === "texonly")) {  var r = $common._createMarkdown($std_core.Just($common.FmtTex));} else {  $common.warning(("unrecognized input value: " + kv.thd), undefined); var r = $common._createMarkdown(undefined);}}}}}}}}}}}} return $common._copy(acc, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);} else {  if ((kv.fst === "tight")) {  return $common._copy(acc, undefined, undefined, undefined, undefined, undefined, undefined, toBool(kv.thd), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);} else {  if ((kv.fst === "start")) {  var _x5 = $std_core.parseInt($std_string.trim(kv.thd), undefined); if (_x5 != null) {  var cntrs = $std_core._plus__3($common.counters(acc), $std_core.Cons($std_core._tuple2_(($common.elem(acc) + "-li"), $std_core.show_1(((_x5.unJust - 1)|0))), $std_core.Nil));} else {  var cntrs = $common.counters(acc);}} else {  var _x6 = ((kv.fst === "list-style-type") && $std_core.bool_2($common.elem(acc))); if (_x6) {  var cntrs = $std_core._plus__3($common.counters(acc), $std_core.Cons($std_core._tuple2_(($common.elem(acc) + "-li"), $std_string.trim(kv.thd)), $std_core.Nil));} else {  var cntrs = $common.counters(acc);}} var extra = $std_core.concat($std_core.Cons(parsePageAlign(kv.fst, kv.snd), $std_core.Nil)); var arg_13173 = acc;var arg_13191 = $std_core._plus__3($std_core.filter($common.keyvals(acc), function(kval  /* (string, string) */ ) {  return (($std_core.fst(kval) !== kv.fst) && $std_core.all(extra, function(kvx  /* (string, string) */ ) {  return ($std_core.fst(kvx) !== $std_core.fst(kval));}));}), $std_core._plus__3($std_core.Cons($std_core._tuple2_(kv.fst, kv.thd), $std_core.Nil), extra));var arg_13190 = cntrs;var arg_13174 = undefined;var arg_13175 = undefined;var arg_13176 = undefined;var arg_13177 = undefined;var arg_13178 = undefined;var arg_13179 = undefined;var arg_13180 = undefined;var arg_13181 = undefined;var arg_13182 = undefined;var arg_13183 = undefined;var arg_13184 = undefined;var arg_13185 = undefined;var arg_13186 = undefined;var arg_13187 = undefined;var arg_13188 = undefined;var arg_13189 = undefined; return $common._copy(arg_13173, arg_13174, arg_13175, arg_13176, arg_13177, arg_13178, arg_13179, arg_13180, arg_13181, arg_13182, arg_13183, arg_13184, arg_13185, arg_13186, arg_13187, arg_13188, arg_13189, arg_13190, arg_13191);}}}}}}}}}}}}}}}}}}}}}});
  return $common.addClasses(attrs, $common.classes(attrs0));
}
function mergeDefault(attrs, def)  /* (attrs : common/attrs, def : common/attrs) -> common/attrs */  {
  return extendAttrs(def, $common.text(attrs), $common.source(attrs));
}
function parseAttrs(attrStr, elemName, source)  /* (attrStr : string, elemName : ?string, source : ?string) -> common/attrs */  {
  var elemName_13259 = (elemName !== undefined) ? elemName : "";
  var source_13263 = (source !== undefined) ? source : "";
  var _x0 = ((attrStr === "") && ((elemName_13259 === "") && (source_13263 === "")));
  if (_x0) {
    return $common.attrsNone;
  }
  else {
    $std_core._unit_;
  }
  var attrs0 = $common._createAttrs(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  if ((elemName_13259 !== "")) {
    var _x0 = ("elem:\'" + (elemName_13259 + "\'; "));
  }
  else {
    var _x0 = "";
  }
  return extendAttrs(attrs0, (_x0 + attrStr), source_13263);
}
function apply(rules0, attrs, name0, elemName, p)  /* (rules : list<(pattern, string)>, attrs : common/attrs, name : string, elemName : string, p : common/peano) -> common/attrs */  { tailcall: while(1)
{
  if (p == null) {
    return attrs;
  }
  else {
    var _x0 = getMatches(rules0, attrs, name0, elemName);
    if ((_x0.fst === "")) {
      return attrs;
    }
    else {
      $std_core._unit_;
    }
    var attrs2 = mergeDefault(attrs, parseAttrs(_x0.fst, undefined, undefined));
    {
      rules0 = _x0.snd;
      attrs = attrs2;
      p = p.prev;
      continue tailcall;
    }
  }
}}
function evalCondition(cond, source, attrs, labels, metadata)  /* (cond : string, source : string, attrs : common/attrs, labels : std/dict/dict<common/label>, metadata : std/dict/dict<string>) -> expression/constant */  {
  function lookup(v, display)  /* forall<a> (v : string, display : a) -> expression/constant */  {
    return $expression.String(expandKeys_1(("&" + (v + ";")), source, attrs, labels, metadata));
  }
  var res = $expression.evaluate(cond, function(e  /* expression/expr */ ) {  return $expression.evalExpr(e, lookup);}, $expression.String(""));
  return res;
}
function caseConvert(txt)  /* (txt : string) -> string */  {
  return $std_regex.replaceAll(txt, $std_regex.regex("\\\\([\\\\/E])|\\\\([ul])(.)|\\\\([UL])([\\s\\S]*?)(\\\\E|$)", undefined, undefined), function(cap  /* std/regex/matched */ ) {  var _x0 = $std_regex.matchedOn($std_regex.groups(cap), 1); if (_x0) {  return $std_regex._index_($std_regex.groups(cap), 1);} else {  var _x1 = $std_regex.matchedOn($std_regex.groups(cap), 2); if (_x1) {  var _x2 = ($std_regex._index_($std_regex.groups(cap), 2) === "u"); if (_x2) {  return $std_core.toUpper($std_regex._index_($std_regex.groups(cap), 3));} else {  return $std_core.toLower($std_regex._index_($std_regex.groups(cap), 3));}} else {  var _x3 = $std_regex.matchedOn($std_regex.groups(cap), 4); if (_x3) {  var _x4 = ($std_regex._index_($std_regex.groups(cap), 4) === "U"); if (_x4) {  return $std_core.toUpper($std_regex._index_($std_regex.groups(cap), 5));} else {  return $std_core.toLower($std_regex._index_($std_regex.groups(cap), 5));}} else {  return $std_regex.matched(cap);}}}}, undefined);
}
var rxBar = $std_regex.regex("//", undefined, undefined);
var rxCaptureGroup = $std_regex.regex("\\\\([\\d\\\\])", undefined, undefined);
var rxCaseEsc = $std_regex.regex("\\\\((\\\\)|[/ulULE])", undefined, undefined);
var rxEntry = $std_regex.regex("^((?:[^\\\\/]|\\\\.)*)/(.*)$", undefined, undefined);
var rxExcludeBar = $std_regex.regex("[^\\\\/]|\\\\.|/(?!/)", undefined, undefined);
var rxOpenParen = $std_regex.regex("\\\\.|(\\((?!\\?))", undefined, undefined);
 
// remove all grouping from a regular expression
function ungroup(r)  /* (r : string) -> string */  {
  return $std_regex.replaceAll(r, rxOpenParen, function(cap  /* std/regex/matched */ ) {  var _x0 = ($std_regex._index_($std_regex.groups(cap), 1) !== ""); return (_x0) ? "(?:" : $std_regex.matched(cap);}, undefined);
}
 
// perform a mapping.
function regexMapping(mapping, flags, txt)  /* (mapping : string, flags : string, txt : string) -> string */  {
  var entries = $std_core.map_3($std_regex.splitExclude(mapping, rxBar, rxExcludeBar), function(entry  /* string */ ) {  var _x0 = $std_regex.find(entry, rxEntry, undefined); if (_x0 != null) {  return $std_core._tuple2_($std_regex._index_($std_regex.groups(_x0.unJust), 1), $std_regex._index_($std_regex.groups(_x0.unJust), 2));} else {  $common.warning(("illegal mapping: " + entry), undefined); return $std_core._tuple2_(entry, "");}});
  var rexp = $std_regex.regex($std_core.join_4($std_core.map_3(entries, function(e  /* (string, string) */ ) {  return ("(" + (ungroup($std_core.fst(e)) + ")"));}), "|"), ((flags).indexOf("i") >= 0), ((flags).indexOf("m") >= 0));
  var convCase = ((flags).indexOf("c") >= 0);
  function replaceGroups(cap)  /* (cap : std/regex/matched) -> string */  {
    var i = $std_regex.firstMatchedOn($std_regex.groups(cap), 1, $std_core.length_3(entries));
    if (i <= 0) {
      return "";
    }
    else {
      $std_core._unit_;
    }
    var _x0 = $std_core.drop(entries, ((i - 1)|0));
    if (_x0 == null) {
      var subst = $std_regex.matched(cap);
    }
    else {
      var _x1 = $std_regex.find($std_regex.matched(cap), $std_regex.regex(_x0.head.fst, undefined, undefined), undefined);
      var subst = (_x1 == null) ? $std_regex.matched(cap) : $std_regex.replaceAll(_x0.head.snd, rxCaptureGroup, function(gcap  /* std/regex/matched */ ) {  var _x2 = ($std_regex._index_($std_regex.groups(gcap), 1) !== "\\"); if (_x2) {  var j = $std_core.maybe($std_core.parseInt($std_regex._index_($std_regex.groups(gcap), 1), undefined), 0, $std_core.id); if (convCase) {  return $std_regex.replaceAll_1($std_regex._index_($std_regex.groups(_x1.unJust), j), rxCaseEsc, "\\\\$2$1", undefined);} else {  return $std_regex._index_($std_regex.groups(_x1.unJust), j);}} else {  return $std_regex._index_($std_regex.groups(gcap), 1);}}, undefined);
    }
    return (convCase) ? caseConvert(subst) : subst;
  }
  var gtxt = (((flags).indexOf("g") >= 0)) ? $std_regex.replaceAll(txt, rexp, replaceGroups, undefined) : $std_regex.replace(txt, rexp, replaceGroups, undefined);
  return gtxt;
}
function regexReplacer(rxText, rtxt, flags, txt)  /* (rxText : string, rtxt : string, flags : string, txt : string) -> string */  {
  var rexp = $std_regex.regex(rxText, ((flags).indexOf("i") >= 0), ((flags).indexOf("m") >= 0));
  var convCase = ((flags).indexOf("c") >= 0);
  function replaceGroups(cap)  /* (cap : std/regex/matched) -> string */  {
    var repl = $std_regex.replaceAll(rtxt, rxCaptureGroup, function(gcap  /* std/regex/matched */ ) {  var _x0 = ($std_regex._index_($std_regex.groups(gcap), 1) !== "\\"); if (_x0) {  var i = $std_core.maybe($std_core.parseInt($std_regex._index_($std_regex.groups(gcap), 1), undefined), 0, $std_core.id); if (convCase) {  return $std_regex.replaceAll_1($std_regex._index_($std_regex.groups(cap), i), rxCaseEsc, "\\\\$2$1", undefined);} else {  return $std_regex._index_($std_regex.groups(cap), i);}} else {  return $std_regex._index_($std_regex.groups(gcap), 1);}}, undefined);
    return (convCase) ? caseConvert(repl) : repl;
  }
  var gtxt = (((flags).indexOf("g") >= 0)) ? $std_regex.replaceAll(txt, rexp, replaceGroups, undefined) : $std_regex.replace(txt, rexp, replaceGroups, undefined);
  return gtxt;
}
var rxmapping = $std_regex.regex("^//((?:[^\\\\]|\\\\.)*)//([gimc]*)$", undefined, undefined);
var rxescaped = "(?:[^\\\\/]|\\\\.)";
var rxregex = $std_regex.regex(("^/(" + (rxescaped + ("*)/(" + (rxescaped + "*)/([gimc]*)$")))), undefined, undefined);
function applyReplacer(repl, txt, attrs, labels, metadata)  /* (repl : string, txt : string, attrs : common/attrs, labels : std/dict/dict<common/label>, metadata : std/dict/dict<string>) -> string */  {
  function expand0(s)  /* (s : string) -> string */  {
    return expandKeys_2($common.peanoN, s, txt, attrs, labels, metadata, function(___lp_431_comma_55_rp_  /* string */ , ___lp_431_comma_57_rp_  /* string */ ) {  return "";});
  }
  function checkReplace(rrepl)  /* (rrepl : string) -> string */  {
    var _x0 = $std_regex.find(rrepl, rxregex, undefined);
    if (_x0 == null) {
      var _x1 = $std_regex.find(rrepl, rxmapping, undefined);
      if (_x1 == null) {
        return expand0(rrepl);
      }
      else {
        return regexMapping(expand0($std_regex._index_($std_regex.groups(_x1.unJust), 1)), $std_regex._index_($std_regex.groups(_x1.unJust), 2), txt);
      }
    }
    else {
      return regexReplacer(expand0($std_regex._index_($std_regex.groups(_x0.unJust), 1)), expand0($std_regex._index_($std_regex.groups(_x0.unJust), 2)), $std_regex._index_($std_regex.groups(_x0.unJust), 3), txt);
    }
  }
  function checkCond(crepl)  /* (crepl : string) -> string */  {
    var _x0 = !($std_core.startsWith(crepl, "@if"));
    if (_x0) {
      return checkReplace(crepl);
    }
    else {
      var _x1 = evalCondition(crepl, txt, attrs, labels, metadata);
      if (_x1._tag === 5) {
        return txt;
      }
      else {
        return checkReplace($expression.string(_x1));
      }
    }
  }
  return checkCond(repl);
}
var emptyRules = Rules($std_core.Nil);
function expand(attrs, metadata, labels)  /* (attrs : common/attrs, metadata : std/dict/dict<string>, labels : ?std/dict/dict<common/label>) -> common/attrs */  {
  var labels_20681 = (labels !== undefined) ? labels : $std_dict.dict();
  if ($common.empty(attrs)) {
    return attrs;
  }
  else {
    $std_core._unit_;
  }
  var arg_21036 = attrs;
  var arg_21054 = $std_core.map_3($common.keyvals(attrs), function(kv  /* (string, string) */ ) {  return $std_core._tuple2_($std_core.fst(kv), expandKeys_1($std_core.snd(kv), $common.source(attrs), attrs, labels_20681, metadata));});
  var arg_21037 = undefined;
  var arg_21038 = undefined;
  var arg_21039 = undefined;
  var arg_21040 = undefined;
  var arg_21041 = undefined;
  var arg_21042 = undefined;
  var arg_21043 = undefined;
  var arg_21044 = undefined;
  var arg_21045 = undefined;
  var arg_21046 = undefined;
  var arg_21047 = undefined;
  var arg_21048 = undefined;
  var arg_21049 = undefined;
  var arg_21050 = undefined;
  var arg_21051 = undefined;
  var arg_21052 = undefined;
  var arg_21053 = undefined;
  return $common._copy(arg_21036, arg_21037, arg_21038, arg_21039, arg_21040, arg_21041, arg_21042, arg_21043, arg_21044, arg_21045, arg_21046, arg_21047, arg_21048, arg_21049, arg_21050, arg_21051, arg_21052, arg_21053, arg_21054);
}
function expandKeyName(name0, labels, metadata)  /* (name : string, labels : std/dict/dict<common/label>, metadata : std/dict/dict<string>) -> string */  {
  return expandKeys_2($common.peanoN, ("&" + (name0 + ";")), "", $common.attrsNone, labels, metadata, undefined);
}
function makePattern(elem0, name0, classes0, attrselectors0, weight0)  /* (elem : ?string, name : ?string, classes : ?list<string>, attrselectors : ?list<expression/expr>, weight : ?int) -> pattern */  {
  var elem_21132 = (elem0 !== undefined) ? elem0 : "";
  var name_21136 = (name0 !== undefined) ? name0 : "";
  var classes_21141 = (classes0 !== undefined) ? classes0 : $std_core.Nil;
  var attrselectors_21146 = (attrselectors0 !== undefined) ? attrselectors0 : $std_core.Nil;
  var weight_21152 = (weight0 !== undefined) ? weight0 : $std_core._tilde_(1);
  var clss = $std_core.filter(classes_21141, function(s  /* string */ ) {  return !($std_core.isEmpty(s));});
  if (weight_21152 >= 0) {
    var w = weight_21152;
  }
  else {
    var _x0 = ($std_core.isEmpty(name_21136)) ? 0 : 1;
    var _x1 = ($std_core.isEmpty(elem_21132)) ? 0 : 1;
    var w = (($std_core.intMultiply(100,_x0) + (($std_core.intMultiply(10,$std_core.length_3(clss)) + _x1)|0))|0);
  }
  return Pattern($common.definitionId(elem_21132), $common.definitionId(name_21136), clss, attrselectors_21146, w);
}
function matchRules(r, elementName, attrs)  /* (r : rules, elementName : string, attrs : common/attrs) -> common/attrs */  {
  var _x0 = !($common.defaults(attrs));
  if (_x0) {
    return attrs;
  }
  else {
    $std_core._unit_;
  }
  var name0 = $common.definitionId($common.name(attrs));
  var elemName = $common.definitionId(elementName);
  return apply(rules(r), attrs, name0, elemName, $common.peano10);
}
var rxPattern = $std_regex.regex("^(?:~([\\w\\-:]+))?(?:#([\\w\\-:]+))?((?:\\.(?:[\\w\\-:]+))*)(?:(\\[[^\\]]*\\])*)$", undefined, undefined);
function rulesFromMeta(metadata)  /* (metadata : list<(string, string)>) -> rules */  {
  var rules0 = $std_core.concat_1(metadata, function(kv  /* (string, string) */ ) {  var _x0 = ($std_core.startsWith(kv.fst, "~") || ($std_core.startsWith(kv.fst, "#") || $std_core.startsWith(kv.fst, "."))); if (_x0) {  var _x1 = $std_regex.find(kv.fst, rxPattern, undefined); if (_x1 == null) {  $common.warning(("illegal pattern: " + kv.fst), undefined); return $std_core.Nil;} else {  var attrsels = $expression.parseAttrSelectors($std_regex._index_($std_regex.groups(_x1.unJust), 4)); var classes0 = $std_core.list_4($std_core.split_1($std_regex._index_($std_regex.groups(_x1.unJust), 3), ".")); var pat = makePattern($std_regex._index_($std_regex.groups(_x1.unJust), 1), $std_regex._index_($std_regex.groups(_x1.unJust), 2), classes0, attrsels, undefined); return $std_core.Cons($std_core._tuple2_(pat, kv.snd), $std_core.Nil);}} else {  return $std_core.Nil;}});
  return Rules(rules0);
}
function transformText(attrs, txt, labels, metadata)  /* (attrs : common/attrs, txt : string, labels : std/dict/dict<common/label>, metadata : std/dict/dict<string>) -> string */  {
  if ($common.empty(attrs)) {
    return txt;
  }
  else {
    $std_core._unit_;
  }
  return $std_core.foldl($common.replacers(attrs), txt, function(cur  /* string */ , repl  /* string */ ) {  var res = applyReplacer(repl, cur, attrs, labels, metadata); return res;});
}
function unescape(s)  /* (s : string) -> string */  {
  return s;
}
 
// koka exports:
return { 'elem': elem, 'name': name, 'classes': classes, 'attrselectors': attrselectors, 'weight': weight, '_copy': _copy, 'rules': rules, '_copy_1': _copy_1, 'filterx': filterx, 'insert': insert, 'keyNotFound': keyNotFound, 'rxkey': rxkey, 'expandKeys_2': expandKeys_2, 'expandKeys': expandKeys, 'expandKeys_1': expandKeys_1, 'ignoreNotFound': ignoreNotFound, 'expandKeyPattern': expandKeyPattern, 'show': show, 'matchSelector': matchSelector, 'matches': matches, 'getMatches': getMatches, 'rxCommentValue': rxCommentValue, 'legalValue': legalValue, 'rxQuoted': rxQuoted, 'rxCssValue': rxCssValue, 'rxCssVal': rxCssVal, 'rxHtmlValue': rxHtmlValue, 'rxHtmlVal': rxHtmlVal, 'rxId': rxId, 'rxAttr': rxAttr, 'rxNoSep': rxNoSep, 'rxNoSpaces': rxNoSpaces, 'rxSep': rxSep, 'rxSpaces': rxSpaces, 'parseAttributesAcc': parseAttributesAcc, 'parseAttributesX': parseAttributesX, 'smemo': smemo, 'parseAttributes': parseAttributes, 'parsePageAlign': parsePageAlign, 'toBool': toBool, 'extendAttrs': extendAttrs, 'mergeDefault': mergeDefault, 'parseAttrs': parseAttrs, 'apply': apply, 'evalCondition': evalCondition, 'caseConvert': caseConvert, 'rxBar': rxBar, 'rxCaptureGroup': rxCaptureGroup, 'rxCaseEsc': rxCaseEsc, 'rxEntry': rxEntry, 'rxExcludeBar': rxExcludeBar, 'rxOpenParen': rxOpenParen, 'ungroup': ungroup, 'regexMapping': regexMapping, 'regexReplacer': regexReplacer, 'rxmapping': rxmapping, 'rxescaped': rxescaped, 'rxregex': rxregex, 'applyReplacer': applyReplacer, 'emptyRules': emptyRules, 'expand': expand, 'expandKeyName': expandKeyName, 'makePattern': makePattern, 'matchRules': matchRules, 'rxPattern': rxPattern, 'rulesFromMeta': rulesFromMeta, 'transformText': transformText, 'unescape': unescape };
});