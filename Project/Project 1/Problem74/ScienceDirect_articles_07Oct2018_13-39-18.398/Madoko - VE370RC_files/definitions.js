// koka generated module: "definitions"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_dict', './std_regex', './std_log', './std_path', './std_string', './common', './options', './attributes', './block', './inline', './formatBlock', './formatInline', './texParser'], function($std_core, $std_dict, $std_regex, $std_log, $std_path, $std_string, $common, $options, $attributes, $block, $inline, $formatBlock, $formatInline, $texParser) {
"use strict";
 
// koka declarations:
var Arabic0 = { _tag: 1 };  /* format */ 
function Arabic(width)  /* (width : int) -> format */  {
  return { _tag: 2, width: width };
}
function Decimal0(digits)  /* (digits : list<int>) -> format */  {
  return { _tag: 3, digits: digits };
}
function Decimal(digits)  /* (digits : list<int>) -> format */  {
  return { _tag: 4, digits: digits };
}
var Lowercase = { _tag: 5 };  /* format */ 
var Uppercase = { _tag: 6 };  /* format */ 
var LowerRoman = { _tag: 7 };  /* format */ 
var UpperRoman = { _tag: 8 };  /* format */ 
function EntityList(items)  /* (items : list<string>) -> format */  {
  return { _tag: 9, items: items };
}
function UnicodeBase(start, end)  /* (start : int, end : int) -> format */  {
  return { _tag: 10, start: start, end: end };
}
function Entity(item)  /* (item : string) -> format */  {
  return { _tag: 11, item: item };
}
function Counter(value, format)  /* (value : int, format : format) -> counter */  {
  return { value: value, format: format };
}
var ParNone = 1;  /* parinfo */ 
var ParEnded = 2;  /* parinfo */ 
var ParBlock = 3;  /* parinfo */ 
function Secinfo(level, secMax, secBase, secDefaults)  /* (level : int, secMax : int, secBase : int, secDefaults : (common/attrs) -> common/attrs) -> secinfo */  {
  return { level: level, secMax: secMax, secBase: secBase, secDefaults: secDefaults };
}
 
// Automatically generated. Retrieves the `width` constructor field of the ":format" type.
function width(format0)  /* (format : format) -> exn int */  {
  return (format0._tag === 2) ? format0.width : $std_core.patternMatchError("src\\definitions.kk(691,11)", "width");
}
 
// Automatically generated. Retrieves the `digits` constructor field of the ":format" type.
function digits(format0)  /* (format : format) -> exn list<int> */  {
  if (format0._tag === 3) {
    return format0.digits;
  }
  else if (format0._tag === 4) {
    return format0.digits;
  }
  else {
    return $std_core.patternMatchError("src\\definitions.kk(692,13)", "digits");
  }
}
 
// Automatically generated. Retrieves the `items` constructor field of the ":format" type.
function items(format0)  /* (format : format) -> exn list<string> */  {
  return (format0._tag === 9) ? format0.items : $std_core.patternMatchError("src\\definitions.kk(698,15)", "items");
}
 
// Automatically generated. Retrieves the `start` constructor field of the ":format" type.
function start(format0)  /* (format : format) -> exn int */  {
  return (format0._tag === 10) ? format0.start : $std_core.patternMatchError("src\\definitions.kk(699,16)", "start");
}
 
// Automatically generated. Retrieves the `end` constructor field of the ":format" type.
function end(format0)  /* (format : format) -> exn int */  {
  return (format0._tag === 10) ? format0.end : $std_core.patternMatchError("src\\definitions.kk(699,29)", "end");
}
 
// Automatically generated. Retrieves the `item` constructor field of the ":format" type.
function item(format0)  /* (format : format) -> exn string */  {
  return (format0._tag === 11) ? format0.item : $std_core.patternMatchError("src\\definitions.kk(700,11)", "item");
}
 
// Automatically generated. Tests for the "Arabic0" constructor of the ":format" type.
function isArabic0(format0)  /* (format : format) -> bool */  {
  return (format0._tag === 1);
}
 
// Automatically generated. Tests for the "Arabic" constructor of the ":format" type.
function isArabic(format0)  /* (format : format) -> bool */  {
  return (format0._tag === 2);
}
 
// Automatically generated. Tests for the "Decimal0" constructor of the ":format" type.
function isDecimal0(format0)  /* (format : format) -> bool */  {
  return (format0._tag === 3);
}
 
// Automatically generated. Tests for the "Decimal" constructor of the ":format" type.
function isDecimal(format0)  /* (format : format) -> bool */  {
  return (format0._tag === 4);
}
 
// Automatically generated. Tests for the "Lowercase" constructor of the ":format" type.
function isLowercase(format0)  /* (format : format) -> bool */  {
  return (format0._tag === 5);
}
 
// Automatically generated. Tests for the "Uppercase" constructor of the ":format" type.
function isUppercase(format0)  /* (format : format) -> bool */  {
  return (format0._tag === 6);
}
 
// Automatically generated. Tests for the "LowerRoman" constructor of the ":format" type.
function isLowerRoman(format0)  /* (format : format) -> bool */  {
  return (format0._tag === 7);
}
 
// Automatically generated. Tests for the "UpperRoman" constructor of the ":format" type.
function isUpperRoman(format0)  /* (format : format) -> bool */  {
  return (format0._tag === 8);
}
 
// Automatically generated. Tests for the "EntityList" constructor of the ":format" type.
function isEntityList(format0)  /* (format : format) -> bool */  {
  return (format0._tag === 9);
}
 
// Automatically generated. Tests for the "UnicodeBase" constructor of the ":format" type.
function isUnicodeBase(format0)  /* (format : format) -> bool */  {
  return (format0._tag === 10);
}
 
// Automatically generated. Tests for the "Entity" constructor of the ":format" type.
function isEntity(format0)  /* (format : format) -> bool */  {
  return (format0._tag === 11);
}
 
// Automatically generated. Retrieves the `value` constructor field of the ":counter" type.
function value(counter)  /* (counter : counter) -> int */  {
  return counter.value;
}
 
// Automatically generated. Retrieves the `format` constructor field of the ":counter" type.
function format(counter)  /* (counter : counter) -> format */  {
  return counter.format;
}
function _copy(_this, value0, format0)  /* (counter, value : ?int, format : ?format) -> counter */  {
  var value_418 = (value0 !== undefined) ? value0 : value(_this);
  var format_424 = (format0 !== undefined) ? format0 : format(_this);
  return Counter(value_418, format_424);
}
 
// Automatically generated. Tests for the "ParNone" constructor of the ":parinfo" type.
function isParNone(parinfo)  /* (parinfo : parinfo) -> bool */  {
  return (parinfo === 1);
}
 
// Automatically generated. Tests for the "ParEnded" constructor of the ":parinfo" type.
function isParEnded(parinfo)  /* (parinfo : parinfo) -> bool */  {
  return (parinfo === 2);
}
 
// Automatically generated. Tests for the "ParBlock" constructor of the ":parinfo" type.
function isParBlock(parinfo)  /* (parinfo : parinfo) -> bool */  {
  return (parinfo === 3);
}
 
// Automatically generated. Retrieves the `level` constructor field of the ":secinfo" type.
function level(secinfo)  /* (secinfo : secinfo) -> int */  {
  return secinfo.level;
}
 
// Automatically generated. Retrieves the `secMax` constructor field of the ":secinfo" type.
function secMax(secinfo)  /* (secinfo : secinfo) -> int */  {
  return secinfo.secMax;
}
 
// Automatically generated. Retrieves the `secBase` constructor field of the ":secinfo" type.
function secBase(secinfo)  /* (secinfo : secinfo) -> int */  {
  return secinfo.secBase;
}
 
// Automatically generated. Retrieves the `secDefaults` constructor field of the ":secinfo" type.
function secDefaults(secinfo)  /* (secinfo : secinfo) -> ((common/attrs) -> common/attrs) */  {
  return secinfo.secDefaults;
}
function _copy_1(_this, level0, secMax0, secBase0, secDefaults0)  /* (secinfo, level : ?int, secMax : ?int, secBase : ?int, secDefaults : ?(common/attrs) -> common/attrs) -> secinfo */  {
  var level_493 = (level0 !== undefined) ? level0 : level(_this);
  var secMax_499 = (secMax0 !== undefined) ? secMax0 : secMax(_this);
  var secBase_505 = (secBase0 !== undefined) ? secBase0 : secBase(_this);
  var secDefaults_512 = (secDefaults0 !== undefined) ? secDefaults0 : secDefaults(_this);
  return Secinfo(level_493, secMax_499, secBase_505, secDefaults_512);
}
function _createArabic(width0)  /* (width : ?int) -> format */  {
  var width_530 = (width0 !== undefined) ? width0 : 0;
  return Arabic(width_530);
}
function _createCounter(value0, format0)  /* (value : ?int, format : ?format) -> counter */  {
  var value_539 = (value0 !== undefined) ? value0 : 0;
  var format_546 = (format0 !== undefined) ? format0 : _createArabic(undefined);
  return Counter(value_539, format_546);
}
var cjkDecimals = $std_core.conslist([12295, 19968, 20108, 19977, 22235, 20116, 20845, 19971, 20843, 20061, 21313], $std_core.Nil);
var rxEntityList = $std_regex.regex("^entity-list\\(([^\\s,\\)]+(?: *, *[^\\s,\\)]+)*)\\)", undefined, undefined);
var rxUnicodeBase = $std_regex.regex("^unicode-base\\((\\d+)(?: *, *(\\d+))?\\)$", undefined, undefined);
var symbolDecimal = $std_core.Cons("&ast;", $std_core.Cons("&dagger;", $std_core.Cons("&Dagger;", $std_core.Cons("&sect;", $std_core.Cons("&para;", $std_core.Nil)))));
function setcounterstyle(counter, xvalue, v)  /* (counter : counter, xvalue : string, v : string) -> counter */  {
  var _x0 = ((v === "upper-alpha") || ((v === "upper-case") || (v === "upper-latin")));
  if (_x0) {
    return _copy(counter, value(counter), Uppercase);
  }
  else {
    var _x1 = ((v === "lower-alpha") || ((v === "lower-case") || (v === "lower-latin")));
    if (_x1) {
      return _copy(counter, value(counter), Lowercase);
    }
    else {
      var _x2 = ((v === "decimal") || (v === "arabic"));
      if (_x2) {
        return _copy(counter, value(counter), _createArabic(undefined));
      }
      else {
        var _x3 = ((v === "decimal0") || (v === "arabic0"));
        if (_x3) {
          return _copy(counter, value(counter), Arabic0);
        }
        else {
          var _x4 = ((v === "decimal-leading-zero") || (v === "arabic-leading-zero"));
          if (_x4) {
            return _copy(counter, value(counter), _createArabic(2));
          }
          else {
            if ((v === "lower-roman")) {
              return _copy(counter, value(counter), LowerRoman);
            }
            else {
              if ((v === "upper-roman")) {
                return _copy(counter, value(counter), UpperRoman);
              }
              else {
                if ((v === "lower-greek")) {
                  return _copy(counter, value(counter), UnicodeBase(945, 969));
                }
                else {
                  if ((v === "upper-greek")) {
                    return _copy(counter, value(counter), UnicodeBase(913, 937));
                  }
                  else {
                    if ((v === "cjk-decimal")) {
                      return _copy(counter, value(counter), Decimal(cjkDecimals));
                    }
                    else {
                      if ((v === "cjk-decimal0")) {
                        return _copy(counter, value(counter), Decimal0(cjkDecimals));
                      }
                      else {
                        if ((v === "symbolic")) {
                          return _copy(counter, value(counter), EntityList(symbolDecimal));
                        }
                        else {
                          if ((v === "circled-decimal")) {
                            return _copy(counter, value(counter), UnicodeBase(9312, 9321));
                          }
                          else {
                            if ((v === "disc")) {
                              return _copy(counter, value(counter), Entity("&bull;"));
                            }
                            else {
                              if ((v === "circle")) {
                                return _copy(counter, value(counter), Entity("&circ;"));
                              }
                              else {
                                if ((v === "square")) {
                                  return _copy(counter, value(counter), Entity("&bbox;"));
                                }
                                else {
                                  var _x5 = ((v === "dash") || (v === "-"));
                                  if (_x5) {
                                    return _copy(counter, value(counter), Entity("&ndash;"));
                                  }
                                  else {
                                    if ((v === "none")) {
                                      return _copy(counter, value(counter), Entity(""));
                                    }
                                    else {
                                      if ($std_regex.contains(v, rxUnicodeBase, undefined)) {
                                        var _x6 = $std_regex.find(v, rxUnicodeBase, undefined);
                                        if (_x6 == null) {
                                          return _copy(counter, value(counter), _createArabic(undefined));
                                        }
                                        else {
                                          var start0 = $std_core.maybe($std_core.parseInt($std_regex._index_($std_regex.groups(_x6.unJust), 1), undefined), 49, $std_core.id);
                                          var end0 = $std_core.maybe($std_core.parseInt($std_regex._index_($std_regex.groups(_x6.unJust), 2), undefined), 0, $std_core.id);
                                          var _x7 = (end0 < start0) ? ((start0 + 9)|0) : end0;
                                          return _copy(counter, value(counter), UnicodeBase(start0, _x7));
                                        }
                                      }
                                      else {
                                        if ($std_regex.contains(v, rxEntityList, undefined)) {
                                          var _x8 = $std_regex.find(v, rxEntityList, undefined);
                                          if (_x8 == null) {
                                            return _copy(counter, value(counter), _createArabic(undefined));
                                          }
                                          else {
                                            var items0 = $std_core.list_4($std_regex.split($std_regex._index_($std_regex.groups(_x8.unJust), 1), $std_regex.regex(" *, *", undefined, undefined), undefined, undefined));
                                            return _copy(counter, value(counter), EntityList(items0));
                                          }
                                        }
                                        else {
                                          var _x9 = $std_core.list_5(xvalue);
                                          if (_x9 != null && _x9.tail == null) {
                                            if (((_x9.head >= 'a') && (_x9.head <= 'z'))){
                                              return _createCounter(((($std_core._dash__2(_x9.head, 'a')).charCodeAt(0) + 1)|0), Lowercase);
                                            }
                                          }
                                          if (_x9 != null && _x9.tail == null) {
                                            if (((_x9.head >= 'A') && (_x9.head <= 'Z'))){
                                              return _createCounter(((($std_core._dash__2(_x9.head, 'A')).charCodeAt(0) + 1)|0), Uppercase);
                                            }
                                          }
                                          $common.warning(("unrecognized counter value: " + xvalue), undefined);
                                          return counter;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
 
// increment or set a count to a value
function increment(counter, xvalue)  /* (counter : counter, xvalue : string) -> counter */  {
  var v = $std_core.toLower(xvalue);
  var _x0 = ((v === "++") || (v === ""));
  if (_x0) {
    return _copy(counter, ((value(counter) + 1)|0), undefined);
  }
  else {
    if ((v === "--")) {
      return _copy(counter, ((value(counter) - 1)|0), undefined);
    }
    else {
      var _x1 = $std_core.parseInt(v, undefined);
      if (_x1 != null) {
        return _copy(counter, _x1.unJust, undefined);
      }
      else {
        return setcounterstyle(counter, xvalue, v);
      }
    }
  }
}
 
// reset lower counters (ie. for h1-h2, reset h1-h2-h3, h1-h2-h3-h4, ...)
function resetNestedCounters(counters, counter, nested)  /* forall<h> (counters : std/dict/mdict<h,counter>, counter : string, nested : std/dict/mdict<h,list<string>>) -> st<h> () */  {
  var _x0 = $std_dict._lb__rb__1(nested, counter);
  return (_x0 == null) ? $std_core._unit_ : $std_core.foreach(_x0.unJust, function(cnt  /* string */ ) {  var _x1 = $std_dict._lb__rb__1(counters, cnt); if (_x1 == null) {  return $std_core._unit_;} else {  return (counters)[cnt] = _copy(_x1.unJust, 0, undefined);}});
}
function initializeCounter(nested, name)  /* forall<h> (nested : std/dict/mdict<h,list<string>>, name : string) -> st<h> () */  {
  var prefixes = $std_core.init($std_core.list_4($std_core.split_1(name, "-")));
  return $std_core.foreachIndexed(prefixes, function(i  /* int */ , ___lp_675_comma_33_rp_  /* string */ ) {  var pre = $std_core.join_4($std_core.take(prefixes, ((i + 1)|0)), "-"); return (nested)[pre] = $std_core.Cons(name, $std_core.maybe($std_dict._lb__rb__1(nested, pre), $std_core.Nil, $std_core.id));});
}
function setCounter(counters, name, counter, nested)  /* forall<h> (counters : std/dict/mdict<h,counter>, name : string, counter : counter, nested : std/dict/mdict<h,list<string>>) -> st<h> counter */  {
  var _x0 = $std_core.isNothing($std_dict._lb__rb__1(counters, name));
  (_x0) ? initializeCounter(nested, name) : $std_core._unit_;
  (counters)[name] = counter;
  return counter;
}
 
// adjust a counter
function adjustCounter(counters, name, value0, nested)  /* forall<h> (counters : std/dict/mdict<h,counter>, name : string, value : string, nested : std/dict/mdict<h,list<string>>) -> st<h> () */  {
  setCounter(counters, name, increment($std_core.maybe($std_dict._lb__rb__1(counters, name), _createCounter(undefined, undefined), $std_core.id), value0), nested);
  return resetNestedCounters(counters, name, nested);
}
function showAsChar(i)  /* (i : int) -> string */  {
  return $std_core.string_3(1, String.fromCharCode(i));
}
function showFromList(value0, items0)  /* (value : int, items : list<string>) -> string */  {
  if (value0 <= 0) {
    return "?";
  }
  else {
    $std_core._unit_;
  }
  var base = $std_core.length_3(items0);
  var _x0 = $std_core.drop(items0, $std_core._perc__1(((value0 - 1)|0), base));
  var item0 = (_x0 != null) ? _x0.head : "?";
  return $std_core.join_3($std_core.replicate(item0, (($std_core._fs__1(((value0 - 1)|0), base) + 1)|0)));
}
function showRoman(value0)  /* (value : int) -> string */  {
  var huns = $std_core.Cons("", $std_core.Cons("C", $std_core.Cons("CC", $std_core.Cons("CCC", $std_core.Cons("CD", $std_core.Cons("D", $std_core.Cons("DC", $std_core.Cons("DCC", $std_core.Cons("DCCC", $std_core.Cons("CM", $std_core.Nil))))))))));
  var tens = $std_core.Cons("", $std_core.Cons("X", $std_core.Cons("XX", $std_core.Cons("XXX", $std_core.Cons("XL", $std_core.Cons("L", $std_core.Cons("LX", $std_core.Cons("LXX", $std_core.Cons("LXXX", $std_core.Cons("XC", $std_core.Nil))))))))));
  var ones = $std_core.Cons("", $std_core.Cons("I", $std_core.Cons("II", $std_core.Cons("III", $std_core.Cons("IV", $std_core.Cons("V", $std_core.Cons("VI", $std_core.Cons("VII", $std_core.Cons("VIII", $std_core.Cons("IX", $std_core.Nil))))))))));
  if (value0 === 0) {
    return "0";
  }
  else {
    var _x0 = (value0 < 0) ? "-" : "";
    return (_x0 + ($std_core.mbstring($std_core._lb__rb__4(huns, $std_core._fs__1($std_core._perc__1(value0, 1000), 100))) + ($std_core.mbstring($std_core._lb__rb__4(tens, $std_core._fs__1($std_core._perc__1(value0, 100), 10))) + $std_core.mbstring($std_core._lb__rb__4(ones, $std_core._perc__1(value0, 10))))));
  }
}
function showEntity(i)  /* (i : int) -> string */  {
  var _x0 = (i >= 32 && i <= 127);
  if (_x0) {
    return $std_core.string_3(1, String.fromCharCode(i));
  }
  else {
    return ("&#" + ($std_core.show_1(i) + ";"));
  }
}
function showDigits(i, digits0)  /* (i : int, digits : list<int>) -> string */  {
  var s = $std_core.show_1(i);
  return $std_core.join_3($std_core.map_3($std_core.list_5(s), function(c  /* char */ ) {  var d = ($std_core._dash__2(c, '0')).charCodeAt(0); var _x0 = $std_core.drop(digits0, d); return (_x0 != null) ? showEntity(_x0.head) : $std_core.string_3(1, c);}));
}
function showUnicodeBase(value0, start0, end0, showCode)  /* (value : int, start : int, end : ?int, showCode : ?(int) -> string) -> string */  {
  var end_8797 = (end0 !== undefined) ? end0 : ((start0 + 9)|0);
  var showCode_8802 = (showCode !== undefined) ? showCode : showEntity;
  if (value0 <= 0) {
    return "?";
  }
  else {
    $std_core._unit_;
  }
  var base = ((((end_8797 - start0)|0) + 1)|0);
  var code = ((start0 + $std_core._perc__1(((value0 - 1)|0), base))|0);
  var entity = showEntity(code);
  return $std_core.join_3($std_core.replicate(entity, (($std_core._fs__1(((value0 - 1)|0), base) + 1)|0)));
}
function show(counter)  /* (counter : counter) -> string */  {
  var _x0 = format(counter);
  if (_x0._tag === 2) {
    return $std_core.align($std_core.show_1(value(counter)), _x0.width, '0');
  }
  else if (_x0._tag === 5) {
    return showUnicodeBase(value(counter), ('a').charCodeAt(0), ('z').charCodeAt(0), showAsChar);
  }
  else if (_x0._tag === 6) {
    return showUnicodeBase(value(counter), ('A').charCodeAt(0), ('Z').charCodeAt(0), showAsChar);
  }
  else if (_x0._tag === 7) {
    return $std_core.toLower(showRoman(value(counter)));
  }
  else if (_x0._tag === 8) {
    return showRoman(value(counter));
  }
  else if (_x0._tag === 1) {
    return $std_core.show_1(((value(counter) - 1)|0));
  }
  else if (_x0._tag === 4) {
    return showDigits(value(counter), _x0.digits);
  }
  else if (_x0._tag === 3) {
    return showDigits(((value(counter) - 1)|0), _x0.digits);
  }
  else if (_x0._tag === 9) {
    return showFromList(value(counter), _x0.items);
  }
  else if (_x0._tag === 10) {
    return showUnicodeBase(value(counter), _x0.start, _x0.end, undefined);
  }
  else {
    return _x0.item;
  }
}
function blockName(block)  /* (block : block/block) -> string */  {
  if (block._tag === 4) {
    return "p";
  }
  else if (block._tag === 5) {
    return "pre";
  }
  else if (block._tag === 6) {
    return "blockquote";
  }
  else if (block._tag === 7) {
    return block.tag;
  }
  else if (block._tag === 8) {
    return "li";
  }
  else if (block._tag === 1) {
    return "hr";
  }
  else if (block._tag === 10) {
    return "table";
  }
  else if (block._tag === 9) {
    return ("h" + $std_core.show_1(block.depth));
  }
  else if (block._tag === 14) {
    return $common.elementName(block.attrs, "div");
  }
  else {
    return "";
  }
}
function tocList(items0, depth, defaultAttrs)  /* (items : string, depth : int, defaultAttrs : attributes/rules) -> string */  {
  if ($std_core.isEmpty(items0)) {
    return "";
  }
  else {
    var tildes = ($std_core.string_3(((depth + 1)|0), '~') + " ");
    return (tildes + ("Begin TocBlock { .tocblock" + ($std_core.show_1(((depth + 1)|0)) + (" }\n" + (items0 + (tildes + "End TocBlock\n"))))));
  }
}
function tocItems(headings, outerDepth, labels, metadata, defaultAttrs)  /* (headings : list<(int, common/attrs)>, outerDepth : int, labels : std/dict/dict<common/label>, metadata : std/dict/dict<string>, defaultAttrs : attributes/rules) -> div string */  {
  if (headings == null) {
    return "";
  }
  else {
    var _x0 = headings.head.fst > ((outerDepth + 1)|0);
    if (_x0) {
      return tocList(tocItems(headings, ((outerDepth + 1)|0), labels, metadata, defaultAttrs), outerDepth, defaultAttrs);
    }
    else {
      var _x1 = $std_core.span(headings.tail, function(h  /* (int, common/attrs) */ ) {  return $std_core.fst(h) > headings.head.fst;});
      var txt = $attributes.expandKeys_1($common.lookupKey(headings.head.snd, "toc-line", "[??]"), $common.source(headings.head.snd), headings.head.snd, labels, metadata);
      var tocline = ("[\\/" + (txt + ("\\/](#" + ($common.name(headings.head.snd) + ")"))));
      var item0 = ("~ Begin TocItem { .tocitem" + ($std_core.show_1(headings.head.fst) + ("; data-toc-target-elem:" + ($common.elem(headings.head.snd) + ("; data-toc-target:" + ($std_core.show_4($common.name(headings.head.snd)) + ("; toctarget:" + ($std_core.show_4($common.name(headings.head.snd)) + ("; data-toc-depth:" + ($std_core.show_1(headings.head.fst) + ("; data-toc-line:" + ($std_core.show_4(txt) + (" }\n" + (tocline + "\n~ End TocItem\n"))))))))))))));
      var subitems = tocList(tocItems(_x1.fst, headings.head.fst, labels, metadata, defaultAttrs), headings.head.fst, defaultAttrs);
      return (item0 + (subitems + tocItems(_x1.snd, outerDepth, labels, metadata, defaultAttrs)));
    }
  }
}
 
// Create a table of contents
function createToc(tocName, headings, labels, metadata, defaultAttrs)  /* (tocName : string, headings : list<(int, common/attrs)>, labels : std/dict/dict<common/label>, metadata : std/dict/dict<string>, defaultAttrs : attributes/rules) -> div block/block */  {
  var tocClass = ($std_core.isEmpty(tocName)) ? ".toc-contents" : (".toc-" + tocName);
  var attrsText = (".toc; " + tocClass);
  var source = tocList(tocItems(headings, 0, labels, metadata, defaultAttrs), 0, defaultAttrs);
  return $block._createDiv($std_core.Nil, $attributes.parseAttrs(attrsText, "toc", source));
}
var rxcounter = $std_regex.regex("(?:\\\\/)?@([\\w\\-]+)(?:\\\\/)?", undefined, undefined);
 
// expand the counters in a string
function expandCounter(lab, counters, nested)  /* forall<h> (lab : string, counters : std/dict/mdict<h,counter>, nested : std/dict/mdict<h,list<string>>) -> st<h> string */  {
  return $std_regex.replaceAll(lab, rxcounter, function(cap  /* std/regex/matched */ ) {  var cname = $common.definitionId($std_regex._index_($std_regex.groups(cap), 1)); var _x0 = $std_dict._lb__rb__1(counters, cname); if (_x0 != null) {  return show(_x0.unJust);} else {  var counter0 = setCounter(counters, cname, _createCounter(undefined, undefined), nested); return show(counter0);}}, undefined);
}
 
// expand counters in label,
function expandCounters(attrs, counters, metadata, nested)  /* forall<h> (attrs : common/attrs, counters : std/dict/mdict<h,counter>, metadata : std/dict/dict<string>, nested : std/dict/mdict<h,list<string>>) -> st<h> common/attrs */  {
  var xlab = expandCounter($attributes.expandKeys_1($common.label(attrs), $common.source(attrs), attrs, $std_dict.dict(), metadata), counters, nested);
  var _x0 = (xlab !== $common.label(attrs));
  if (_x0) {
    var attrs1 = $common._copy(attrs, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, xlab, undefined, undefined, undefined, undefined, undefined);
  }
  else {
    var attrs1 = attrs;
  }
  var arg_12578 = attrs1;
  var arg_12596 = $std_core.map_3($common.keyvals(attrs1), function(kv  /* (string, string) */ ) {  var _x0 = ((kv.fst === "start") || $std_core.endsWith(kv.fst, "-label")); if (_x0) {  return $std_core._tuple2_(kv.fst, expandCounter($attributes.expandKeys_1(kv.snd, $common.source(attrs1), attrs1, $std_dict.dict(), metadata), counters, nested));} else {  return kv;}});
  var arg_12579 = undefined;
  var arg_12580 = undefined;
  var arg_12581 = undefined;
  var arg_12582 = undefined;
  var arg_12583 = undefined;
  var arg_12584 = undefined;
  var arg_12585 = undefined;
  var arg_12586 = undefined;
  var arg_12587 = undefined;
  var arg_12588 = undefined;
  var arg_12589 = undefined;
  var arg_12590 = undefined;
  var arg_12591 = undefined;
  var arg_12592 = undefined;
  var arg_12593 = undefined;
  var arg_12594 = undefined;
  var arg_12595 = undefined;
  return $common._copy(arg_12578, arg_12579, arg_12580, arg_12581, arg_12582, arg_12583, arg_12584, arg_12585, arg_12586, arg_12587, arg_12588, arg_12589, arg_12590, arg_12591, arg_12592, arg_12593, arg_12594, arg_12595, arg_12596);
}
function extractCaption(blocks)  /* (blocks : list<block/block>) -> string */  { tailcall: while(1)
{
  if (blocks == null) {
    return "";
  }
  else {
    var post = ($std_core.isNil(blocks.tail)) ? "" : "&nl;...";
    if (blocks.head._tag === 9) {
      return (blocks.head.text + post);
    }
    else if (blocks.head._tag === 3) {
      return (blocks.head.text + post);
    }
    else if (blocks.head._tag === 4) {
      return (blocks.head.text + post);
    }
    else if (blocks.head._tag === 5) {
      return (blocks.head.text + post);
    }
    else if (blocks.head._tag === 6) {
      {
        blocks = blocks.head.content;
        continue tailcall;
      }
    }
    else if (blocks.head._tag === 7) {
      {
        blocks = blocks.head.content;
        continue tailcall;
      }
    }
    else if (blocks.head._tag === 8) {
      {
        blocks = blocks.head.content;
        continue tailcall;
      }
    }
    else if (blocks.head._tag === 14) {
      {
        blocks = blocks.head.content;
        continue tailcall;
      }
    }
    else {
      {
        blocks = blocks.tail;
        continue tailcall;
      }
    }
  }
}}
function headingLevel(block, $default, defaultSection)  /* (block : block/block, default : int, defaultSection : ?int) -> int */  {
  var defaultSection_12777 = (defaultSection !== undefined) ? defaultSection : $default;
  if (block._tag === 9) {
    if (!($common.hasClass(block.attrs, "no-section"))){
      return block.depth;
    }
  }
  if (block._tag === 14) {
    if ($common.hasClass(block.attrs, "section")){
      var _x0 = $common.hasKey(block.attrs, "data-depth");
      if (_x0 != null) {
        return $std_core.maybe($std_core.parseInt(_x0.unJust, undefined), defaultSection_12777, $std_core.id);
      }
      else {
        return defaultSection_12777;
      }
    }
  }
  return $default;
}
function findHeading(blocks, secinfo)  /* (blocks : list<block/block>, secinfo : secinfo) -> maybe<(list<block/block>, block/block, list<block/block>)> */  {
  var lvl = $std_core.max(level(secinfo), secBase(secinfo));
  var _x0 = $std_core.span(blocks, function(b  /* block/block */ ) {  var d = headingLevel(b, ((lvl + 1)|0), lvl); return d > lvl;});
  if (_x0.snd != null) {
    return $std_core.Just($std_core._tuple3_(_x0.fst, _x0.snd.head, _x0.snd.tail));
  }
  else {
    return $std_core.Nothing;
  }
}
function incLineNo(lineNo, inc)  /* (lineNo : int, inc : ?int) -> int */  {
  var inc_12991 = (inc !== undefined) ? inc : 1;
  return (lineNo > 0) ? ((lineNo + inc_12991)|0) : lineNo;
}
function mapBlocks(blocks, action)  /* forall<h,e> (blocks : list<block/block>, action : (parinfo, block/block) -> <st<h>,div|e> block/block) -> <st<h>,div|e> list<block/block> */  {
  var previousPar = { value: ParNone };
  return $std_core.map_3(blocks, function(block  /* block/block */ ) {  var nblock = action(((previousPar).value), block); match: {  if (nblock._tag === 4) {  var _x0 = ($common.hasClass(nblock.attrs, "para-block")) ? ParBlock : ParEnded; ((previousPar).value = _x0); break match;}if (nblock._tag === 14) {  if (((blockName(nblock) === "figure") || $common.hasClass(nblock.attrs, "float"))){  $std_core._unit_; break match;}}if (nblock._tag === 15 && nblock.input._tag === 6 && nblock.input.only != null && nblock.input.only.unJust === 1) {  if ($std_core.startsWith(nblock.text, "<!--")){  $std_core._unit_; break match;}}if (nblock._tag === 14) {  if ($common.hasClass(nblock.attrs, "para-end")) {  var _x1 = ParEnded;} else {  var _x1 = ($common.hasClass(nblock.attrs, "para-block")) ? ParBlock : ParNone;} ((previousPar).value = _x1); break match;}if (nblock._tag === 5) {  if ($common.hasClass(nblock.attrs, "para-end")) {  var _x2 = ParEnded;} else {  var _x2 = ($common.hasClass(nblock.attrs, "para-block")) ? ParBlock : ParNone;} ((previousPar).value = _x2); break match;}if (nblock._tag === 12) {  $std_core._unit_; break match;} ((previousPar).value = ParNone);} if (nblock._tag === 14) {  var _x0 = mapBlocks(nblock.content, action); match: {  if (_x0 != null && _x0.head._tag === 4) {  if ($common.tight(nblock.attrs)){  var ncontent = $std_core.Cons($block._createLine(_x0.head.text, false, _x0.head.attrs), _x0.tail); break match;}} var ncontent = _x0;} return $block._createDiv(ncontent, nblock.attrs);} else if (nblock._tag === 6) {  return $block._createQuote(mapBlocks(nblock.content, action), nblock.attrs);} else if (nblock._tag === 7) {  return $block._createList(nblock.tag, mapBlocks(nblock.content, action), nblock.attrs);} else if (nblock._tag === 8) {  return $block._createItem(mapBlocks(nblock.content, action), nblock.attrs);} else {  return nblock;}});
}
 
// Fast version for benchmarking
function parseDefinitionsBench(fcontext, blocks)  /* (fcontext : formatBlock/formatContext, blocks : list<block/block>) -> div (list<block/block>, formatBlock/formatContext) */  {
  var links = $std_dict.mdict();
  $std_core.foreach(blocks, function(block  /* block/block */ ) {  return (block._tag === 11) ? (links)[block.id] = block.link : $std_core._unit_;});
  var arg_13853 = $formatBlock.inlineContext(fcontext);
  var arg_13855 = $std_dict.freeze(links);
  var arg_13854 = undefined;
  var arg_13856 = undefined;
  var arg_13857 = undefined;
  var arg_13858 = undefined;
  var arg_13859 = undefined;
  var arg_13860 = undefined;
  var arg_13861 = undefined;
  var arg_13862 = undefined;
  var arg_13863 = undefined;
  var arg_13864 = undefined;
  var arg_13865 = undefined;
  var arg_13866 = undefined;
  var arg_13867 = undefined;
  var arg_13868 = undefined;
  var arg_13869 = undefined;
  var arg_13870 = undefined;
  var arg_13871 = undefined;
  var arg_13872 = undefined;
  var arg_13873 = undefined;
  var arg_13874 = undefined;
  var arg_13875 = undefined;
  var arg_13876 = undefined;
  var arg_13877 = undefined;
  var arg_13878 = undefined;
  var arg_13879 = undefined;
  var arg_13880 = undefined;
  var arg_13881 = undefined;
  var arg_13882 = undefined;
  var arg_13883 = undefined;
  return $std_core._tuple2_(blocks, $formatBlock._copy(fcontext, $inline.copy(arg_13853, arg_13854, arg_13855, arg_13856, arg_13857, arg_13858, arg_13859, arg_13860, arg_13861, arg_13862, arg_13863, arg_13864, arg_13865, arg_13866, arg_13867, arg_13868, arg_13869, arg_13870, arg_13871, arg_13872, arg_13873, arg_13874, arg_13875, arg_13876, arg_13877, arg_13878, arg_13879, arg_13880, arg_13881, arg_13882, arg_13883), $std_dict.dict(), $block.Empty, undefined, undefined, undefined, undefined, undefined));
}
var secInit = Secinfo(1, 6, 1, $std_core.id);
function sectionMap(blocks, secinfo)  /* (blocks : list<block/block>, secinfo : secinfo) -> div list<block/block> */  {
  var _x0 = level(secinfo) > secMax(secinfo);
  if (_x0) {
    return blocks;
  }
  else {
    $std_core._unit_;
  }
  return $std_core.map_3(blocks, function(block  /* block/block */ ) {  if (block._tag === 14) {  return $block._createDiv(sections(block.content, secinfo), block.attrs);} else {  return block;}});
}
function sections(blocks0, secinfo0)  /* (blocks : list<block/block>, secinfo : secinfo) -> div list<block/block> */  {
  var _x0 = level(secinfo0) > secMax(secinfo0);
  if (_x0) {
    return blocks0;
  }
  else {
    $std_core._unit_;
  }
  var _x0 = findHeading(blocks0, secinfo0);
  if (_x0 == null) {
    return sectionMap(blocks0, secinfo0);
  }
  else {
    return $std_core._plus__3(sectionMap(_x0.unJust.fst, secinfo0), sectionSpan(_x0.unJust.snd, _x0.unJust.thd, secinfo0));
  }
}
function sectionSpan(h0, blocks1, secinfo1)  /* (h : block/block, blocks : list<block/block>, secinfo : secinfo) -> div list<block/block> */  {
  function createSection(content0)  /* (content : list<block/block>) -> div list<block/block> */  {
    var lvl = headingLevel(h0, level(secinfo1), undefined);
    var nsecinfo = _copy_1(secinfo1, ((lvl + 1)|0), undefined, undefined, undefined);
    var ncontent = sections(content0, nsecinfo);
    if (h0._tag === 9) {
      var _x1 = $std_core.partition($common.keyvals(h0.attrs), function(kv  /* (string, string) */ ) {  return $std_core.startsWith($std_core.fst(kv), "data-");});
      var _x2 = $std_core.partition($common.classes(h0.attrs), function(c  /* string */ ) {  return $std_core.startsWith(c, "section-");});
      var _x4 = ($common.name(h0.attrs) === "");
      if (_x4) {
        var _x3 = "";
      }
      else {
        var _x3 = ("; id:\'" + ($common.name(h0.attrs) + "\'"));
      }
      var secattrs = (".section" + ($std_core.show_1(h0.depth) + ("; data-section-depth: " + ($std_core.show_1(h0.depth) + _x3))));
      var _x3 = ($common.name(h0.attrs) === "");
      if (_x3) {
        var hattrs = h0.attrs;
      }
      else {
        var hattrs = $common._copy(h0.attrs, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ("heading-" + $common.name(h0.attrs)), undefined, undefined, undefined, undefined, undefined, undefined);
      }
      var sattrs = $attributes.parseAttrs(secattrs, "section", undefined);
      var divattrs = secDefaults(secinfo1)($common.addKeyvals($common.addClasses(sattrs, _x2.fst), _x1.fst));
      return $std_core.Cons($block._createDiv($std_core.Cons($block._createHeading(h0.depth, h0.text, $common._copy(hattrs, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _x2.snd, undefined, _x1.snd)), ncontent), divattrs), $std_core.Nil);
    }
    else {
      return $std_core._plus__3(sectionMap($std_core.Cons(h0, $std_core.Nil), nsecinfo), ncontent);
    }
  }
  var _x1 = findHeading(blocks1, secinfo1);
  if (_x1 == null) {
    return createSection(blocks1);
  }
  else {
    return $std_core._plus__3(createSection(_x1.unJust.fst), sectionSpan(_x1.unJust.snd, _x1.unJust.thd, secinfo1));
  }
}
function transformDiv(blocks, attrs, fcontext)  /* (blocks : list<block/block>, attrs : common/attrs, fcontext : formatBlock/formatContext) -> block/block */  {
  var _x0 = ($common.lookupKey(attrs, "transform", "") === "false");
  if (_x0) {
    return $block._createDiv(blocks, attrs);
  }
  else {
    $std_core._unit_;
  }
  if (blocks == null) {
    $std_core._unit_;
  }
  else if (blocks != null && blocks.head._tag === 15 && blocks.tail == null) {
    $std_core._unit_;
  }
  else {
    return $block._createDiv(blocks, attrs);
  }
  var citestyle = $inline.citestyle($formatBlock.inlineContext(fcontext));
  var txt = $attributes.transformText(attrs, $common.source(attrs), $std_dict.dict(), $inline.metadata($formatBlock.inlineContext(fcontext)));
  var _x0 = $common.input(attrs);
  if (_x0._tag === 5) {
    return $block._createDiv($block.parseBlocks($texParser.parseTex(txt, $common.name(attrs), citestyle, "", $inline.verbose($formatBlock.inlineContext(fcontext)) >= 3, undefined), incLineNo($common.lineNo(attrs), undefined), $formatBlock.lineMap(fcontext), citestyle, $inline.metadata($formatBlock.inlineContext(fcontext)), undefined, undefined), attrs);
  }
  else if (_x0._tag === 7) {
    var _x1 = $common.hasKey(attrs, "line-adjust");
    if (_x1 == null) {
      var adjLineNo = incLineNo($common.lineNo(attrs), undefined);
    }
    else {
      var adjLineNo = incLineNo($common.lineNo(attrs), $std_core.maybe($std_core.parseInt(_x1.unJust, undefined), 0, $std_core.id));
    }
    return $block._createDiv($block.parseBlocks(txt, adjLineNo, $formatBlock.lineMap(fcontext), citestyle, $inline.metadata($formatBlock.inlineContext(fcontext)), undefined, undefined), attrs);
  }
  else {
    var _x1 = $common.hasKey(attrs, "line-adjust");
    if (_x1 == null) {
      var adjLineNo0 = incLineNo($common.lineNo(attrs), undefined);
    }
    else {
      var adjLineNo0 = incLineNo($common.lineNo(attrs), $std_core.maybe($std_core.parseInt(_x1.unJust, undefined), 0, $std_core.id));
    }
    var attrsx = $block.setLineNo(attrs, $formatBlock.lineMap(fcontext), adjLineNo0, true);
    return $block._createDiv($std_core.Cons($block._createSource(txt, _x0, attrsx), $std_core.Nil), attrs);
  }
}
function transformItem(blocks, attrs)  /* (blocks : list<block/block>, attrs : common/attrs) -> block/block */  {
  var _x0 = $common.hasKey(attrs, "li-label");
  if (_x0 == null) {
    return $block._createItem(blocks, attrs);
  }
  else {
    return $block._createItem($std_core._plus__3($std_core.Cons($block._createLine(("[" + (_x0.unJust + "]{.li-label}")), undefined, undefined), $std_core.Nil), blocks), attrs);
  }
}
 
// Sets new attributes for a block, and applies conversion to text
function setAttrs(block, xs, fcontext)  /* (block : block/block, xs : common/attrs, fcontext : formatBlock/formatContext) -> block/block */  {
  if (block._tag === 1) {
    return $block._createHLine(xs);
  }
  else if (block._tag === 4) {
    return $block._createPara($attributes.transformText(xs, block.text, $std_dict.dict(), $inline.metadata($formatBlock.inlineContext(fcontext))), xs);
  }
  else if (block._tag === 9) {
    return $block._createHeading(block.depth, $attributes.transformText(xs, block.text, $std_dict.dict(), $inline.metadata($formatBlock.inlineContext(fcontext))), xs);
  }
  else if (block._tag === 10) {
    return $block._createTable(block.header, block.columnAttrs, block.cells, xs);
  }
  else if (block._tag === 7) {
    return $block._createList(block.tag, block.content, xs);
  }
  else if (block._tag === 8) {
    return transformItem(block.content, xs);
  }
  else if (block._tag === 14) {
    return transformDiv(block.content, xs, fcontext);
  }
  else if (block._tag === 6) {
    return $block._createQuote(block.content, xs);
  }
  else if (block._tag === 5) {
    var _x0 = ((block.language === "") && !($common.isPre($common.input(xs))));
    if (_x0) {
      return transformDiv($std_core.Cons($block._createSource(block.text, undefined, undefined), $std_core.Nil), $common._copy(xs, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "pre", undefined, undefined, undefined, undefined, block.text, undefined, undefined, undefined, undefined), fcontext);
    }
    else {
      return $block._createCode($attributes.transformText(xs, block.text, $std_dict.dict(), $inline.metadata($formatBlock.inlineContext(fcontext))), block.language, xs);
    }
  }
  else {
    return block;
  }
}
function shouldRender(attrs, fmt)  /* (attrs : common/attrs, fmt : common/formatter) -> bool */  {
  var _x0 = ($common.lookupKey(attrs, "display", "") === "none");
  if (_x0) {
    return false;
  }
  else {
    var _x1 = $common.input(attrs);
    if (_x1._tag === 7 && _x1.only != null) {
      return $common._eq__eq_(_x1.only.unJust, fmt);
    }
    else if (_x1._tag === 6 && _x1.only != null) {
      return $common._eq__eq_(_x1.only.unJust, fmt);
    }
    else {
      return true;
    }
  }
}
function unformat(s)  /* (s : string) -> string */  {
  return $std_string.trim($std_regex.replaceAll(s, $formatInline.rxLink, function(cap  /* std/regex/matched */ ) {  return $std_regex.replaceAll_1($std_regex._index_($std_regex.groups(cap), 1), $formatInline.rxLink, "$1", undefined);}, undefined));
}
 
// Full version that does attribute processing
function parseDefinitionsFull(fcontext, blocks, mdata, tocDepth, secBase0, secDepth)  /* (fcontext : formatBlock/formatContext, blocks : list<block/block>, mdata : options/metadata, tocDepth : ?int, secBase : int, secDepth : int) -> div (list<block/block>, formatBlock/formatContext) */  {
  var tocDepth_17110 = (tocDepth !== undefined) ? tocDepth : 0;
  var counters = $std_dict.mdict();
  var nested = $std_dict.mdict();
  var labels = $std_dict.mdict();
  var links = $std_dict.mdict();
  var footnotes = $std_dict.mdict();
  var footnoteCount = { value: 0 };
  var footnoteItems = { value: $std_core.Nil };
  var tocs = { value: $std_dict.mdict() };
  var footnotesAtEnd = { value: true };
  var defaultAttrs = $attributes.rulesFromMeta(mdata);
  function mapBlock(b, f)  /* forall<h,e> (b : block/block, f : (parinfo, block/block) -> <st<h>,div|e> block/block) -> <st<h>,div|e> list<block/block> */  {
    return $std_core.take(mapBlocks($std_core.Cons(b, $std_core.Nil), f), 1);
  }
   
  // process attributes
  function $process(attrs, previousPar, block)  /* (attrs : common/attrs, previousPar : parinfo, block : block/block) -> <st<void>,div> block/block */  {
    var bname = blockName(block);
    var _x0 = !($common.defaults(attrs));
    if (_x0) {
      var attrsd = attrs;
    }
    else {
      var attrsy = $attributes.matchRules(defaultAttrs, bname, attrs);
      var _x1 = (($common.name(attrsy) !== "") && ($common.label(attrsy) === ""));
      if (_x1) {
        var attrsd = $common._copy(attrsy, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ("@" + bname), undefined, undefined, undefined, undefined, undefined);
      }
      else {
        var attrsd = attrsy;
      }
    }
    var _x0 = !(shouldRender(attrsd, $formatBlock.fmt(fcontext)));
    if (_x0) {
      return $block.Empty;
    }
    else {
      $std_core._unit_;
    }
    var _x0 = ((bname !== "") && ($common.defaults(attrs) && !($common.hasClass(attrs, "clearnum"))));
    (_x0) ? adjustCounter(counters, bname, "", nested) : $std_core._unit_;
    $std_core.foreach($common.counters(attrsd), function(cv  /* (string, string) */ ) {  return adjustCounter(counters, cv.fst, cv.snd, nested);});
    var cmdata = $inline.metadata($formatBlock.inlineContext(fcontext));
    var attrsx0 = $attributes.expand(expandCounters(attrsd, counters, cmdata, nested), cmdata, undefined);
    if (block._tag === 9) {
      var caption = $common.lookupKey(attrsx0, "caption", block.text);
      var ecaption = $attributes.transformText(attrsx0, caption, $std_dict.dict(), $inline.metadata($formatBlock.inlineContext(fcontext)));
      var xcaption = $attributes.expandKeys_1(ecaption, $common.source(attrsx0), attrsx0, $std_dict.dict(), $inline.metadata($formatBlock.inlineContext(fcontext)));
      var _x1 = !($std_core.bool_1($common.hasKey(attrsx0, "toc")));
      if (_x1) {
        var _x0 = $std_core.Nil;
      }
      else {
        var _x0 = $std_core.Cons($std_core._tuple2_("bookmark", unformat(xcaption)), $std_core.Nil);
      }
      var kvs = $std_core._plus__3($std_core.Cons($std_core._tuple2_("caption", xcaption), $std_core.Nil), _x0);
      var attrsx = $common.addKeyvals(attrsx0, kvs);
    }
    else {
      var attrsx = attrsx0;
    }
    var _x0 = ($common.name(attrsx) !== "");
    if (_x0) {
      var labelCaption = $std_core.maybe($common.hasKey(attrsx, "caption"), "", $std_core.id);
      (labels)[$common.name(attrsx)] = $common._createLabel(bname, $common.label(attrsx), labelCaption, undefined);
      var _x1 = $common.hasKey(attrsx, "cite-label");
      if (_x1 == null) {
        $std_core._unit_;
      }
      else {
        var clabelx = $attributes.expandKeys_1(_x1.unJust, $common.source(attrsx), attrsx, $std_dict.dict(), $inline.metadata($formatBlock.inlineContext(fcontext)));
        (labels)[("@" + $common.name(attrsx))] = $common._createLabel(bname, clabelx, labelCaption, attrsx);
      }
    }
    else {
      $std_core._unit_;
    }
    if (block._tag === 4) {
      if (previousPar === 3) {
        var attrsp = $common.addClasses(attrsx, $std_core.Cons("noindent", $std_core.Cons("para-continued", $std_core.Nil)));
      }
      else if (previousPar === 2) {
        var attrsp = $common.addClass(attrsx, "indent");
      }
      else {
        var attrsp = $common.addClass(attrsx, "noindent");
      }
    }
    else {
      var attrsp = attrsx;
    }
    var rblock = setAttrs(block, attrsp, fcontext);
    var _x0 = $common.hasKey(attrsp, "toc");
    if (_x0 == null) {
      $std_core._unit_;
    }
    else {
      if (rblock._tag === 9) {
        var _x1 = $common.hasKey(attrsp, "toc-depth");
        if (_x1 == null) {
          var dp = rblock.depth;
        }
        else {
          var dp = $std_core.maybe($std_core.parseInt(_x1.unJust, undefined), rblock.depth, $std_core.id);
        }
        var _x2 = $std_core.bool_1($common.hasKey(rblock.attrs, "toc-line"));
        var _x1 = (_x2) ? rblock.attrs : $common.addKeyval(rblock.attrs, "toc-line", rblock.text);
        var entry = $std_core._tuple2_(dp, _x1);
      }
      else {
        var depth = $std_core.maybe($std_core.parseInt($common.lookupKey(attrsp, "toc-depth", "1"), undefined), 1, $std_core.id);
        var entry = $std_core._tuple2_(depth, attrsp);
      }
      (((tocs).value))[$std_core.toLower(_x0.unJust)] = $std_core.Cons(entry, $std_core.maybe($std_dict._lb__rb__1(((tocs).value), $std_core.toLower(_x0.unJust)), $std_core.Nil, $std_core.id));
    }
    return rblock;
  }
   
  // process a block
  function parseDefBlock(previousPar0, block0)  /* (previousPar : parinfo, block : block/block) -> <st<void>,div> block/block */  {
    if (block0._tag === 11) {
      (links)[block0.id] = block0.link;
      var _x0 = ($common.relative($common.href(block0.link)) && $std_core.startsWith($common.mimeFromExt($std_path.extname($common.href(block0.link))), "image/"));
      if (_x0) {
        $std_log.log("filesRefer", $common.href(block0.link));
        var _x1 = ($std_path.extname($common.href(block0.link)) === ".eps");
        if (_x1) {
          $std_log.log("filesRefer", $std_path.changeExt($common.href(block0.link), ".png"));
        }
        else {
          $std_core._unit_;
        }
      }
      else {
        $std_core._unit_;
      }
      var attrs0 = $common.attrsNone;
    }
    else if (block0._tag === 12) {
      ((footnoteCount).value = ((((footnoteCount).value) + 1)|0));
      var ncontent = mapBlocks(block0.content, parseDefBlock);
      (footnotes)[block0.id] = $inline.Footnote(("&fn-" + (block0.id + ";")), function(ictx  /* inline/inlineContext */ ) {  return $formatBlock.formatBlocks($formatBlock._copy(fcontext, ictx, undefined, undefined, undefined, undefined, undefined, undefined, undefined), ncontent);}, extractCaption(ncontent));
      ((footnoteItems).value = $std_core.Cons(ncontent, ((footnoteItems).value)));
      var attrs0 = $common.attrsNone;
    }
    else if (block0._tag === 4) {
      var attrs0 = block0.attrs;
    }
    else if (block0._tag === 5) {
      if ((block0.language === "")) {
        var attrs0 = block0.attrs;
      }
      else {
        var attrs0 = $common.addClass($common.addKeyval(block0.attrs, "language", block0.language), ("language-" + block0.language));
      }
    }
    else if (block0._tag === 6) {
      var attrs0 = block0.attrs;
    }
    else if (block0._tag === 7) {
      var attrs0 = block0.attrs;
    }
    else if (block0._tag === 8) {
      var attrs0 = block0.attrs;
    }
    else if (block0._tag === 1) {
      var attrs0 = block0.attrs;
    }
    else if (block0._tag === 10) {
      var attrs0 = block0.attrs;
    }
    else if (block0._tag === 14) {
      var attrs0 = block0.attrs;
    }
    else if (block0._tag === 9) {
      var attrs0 = $common.generateHeaderId(block0.attrs, block0.text, undefined);
    }
    else if (block0._tag === 16) {
      ((block0.name === "FOOTNOTES")) ? ((footnotesAtEnd).value = false) : $std_core._unit_;
      var attrs0 = $common.attrsNone;
    }
    else {
      var attrs0 = $common.attrsNone;
    }
    return $process(attrs0, previousPar0, block0);
  }
  var newblocks = mapBlocks(blocks, parseDefBlock);
  var labelsDict = $std_dict.freeze(labels);
  var tocBlocks = $std_dict.dict_1($std_core.map_3($std_dict.list(((tocs).value)), function(entry0  /* (string, list<(int, common/attrs)>) */ ) {  return $std_core._tuple2_($std_core.fst(entry0), mapBlocks($std_core.Cons(createToc($std_core.fst(entry0), $std_core.reverse($std_core.snd(entry0)), labelsDict, $inline.metadata($formatBlock.inlineContext(fcontext)), defaultAttrs), $std_core.Nil), parseDefBlock));}));
  var _x0 = $std_core.isNil(((footnoteItems).value));
  if (_x0) {
    var footnoteBlock = $block.Empty;
  }
  else {
    var footnoteBlock = $block._createDiv($std_core.Cons($block._createHLine(undefined), $std_core.concat($std_core.reverse(((footnoteItems).value)))), $common._createAttrs(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $std_core.Cons("footnotes", $std_core.Cons("madoko", $std_core.Nil)), undefined, undefined));
  }
  var _x0 = !(((footnotesAtEnd).value));
  if (_x0) {
    var fblocks = newblocks;
  }
  else {
    if (newblocks != null && newblocks.head._tag === 14 && newblocks.tail == null) {
      var fblocks = $std_core.Cons($block._createDiv($std_core._plus__3(newblocks.head.content, $std_core.Cons($block._createSpecial("FOOTNOTES", undefined, undefined), $std_core.Nil)), newblocks.head.attrs), $std_core.Nil);
    }
    else {
      var fblocks = $std_core._plus__3(newblocks, $std_core.Cons($block._createSpecial("FOOTNOTES", undefined, undefined), $std_core.Nil));
    }
  }
  var secblocks = sections(fblocks, _copy_1(secInit, undefined, secDepth, secBase0, function(a  /* common/attrs */ ) {  return $attributes.matchRules(defaultAttrs, "section", a);}));
  var arg_22588 = $formatBlock.inlineContext(fcontext);
  var arg_22590 = $std_dict.freeze(links);
  var arg_22591 = labelsDict;
  var arg_22592 = $std_dict.freeze(footnotes);
  var arg_22593 = defaultAttrs;
  var arg_22589 = undefined;
  var arg_22594 = undefined;
  var arg_22595 = undefined;
  var arg_22596 = undefined;
  var arg_22597 = undefined;
  var arg_22598 = undefined;
  var arg_22599 = undefined;
  var arg_22600 = undefined;
  var arg_22601 = undefined;
  var arg_22602 = undefined;
  var arg_22603 = undefined;
  var arg_22604 = undefined;
  var arg_22605 = undefined;
  var arg_22606 = undefined;
  var arg_22607 = undefined;
  var arg_22608 = undefined;
  var arg_22609 = undefined;
  var arg_22610 = undefined;
  var arg_22611 = undefined;
  var arg_22612 = undefined;
  var arg_22613 = undefined;
  var arg_22614 = undefined;
  var arg_22615 = undefined;
  var arg_22616 = undefined;
  var arg_22617 = undefined;
  var arg_22618 = undefined;
  return $std_core._tuple2_(secblocks, $formatBlock._copy(fcontext, $inline.copy(arg_22588, arg_22589, arg_22590, arg_22591, arg_22592, arg_22593, arg_22594, arg_22595, arg_22596, arg_22597, arg_22598, arg_22599, arg_22600, arg_22601, arg_22602, arg_22603, arg_22604, arg_22605, arg_22606, arg_22607, arg_22608, arg_22609, arg_22610, arg_22611, arg_22612, arg_22613, arg_22614, arg_22615, arg_22616, arg_22617, arg_22618), tocBlocks, footnoteBlock, undefined, undefined, undefined, undefined, undefined));
}
 
// Visits all blocks and returns a dictionary of links, labels, footnotes,
// a footnote block, and a table-of-contents block.
function parseDefinitions(fcontext, blocks, metadata, tocDepth, secBase0, secDepth)  /* (fcontext : formatBlock/formatContext, blocks : list<block/block>, metadata : options/metadata, tocDepth : ?int, secBase : ?int, secDepth : ?int) -> div (list<block/block>, formatBlock/formatContext) */  {
  var tocDepth_22714 = (tocDepth !== undefined) ? tocDepth : 0;
  var secBase_22718 = (secBase0 !== undefined) ? secBase0 : 1;
  var secDepth_22722 = (secDepth !== undefined) ? secDepth : 6;
  var _x0 = $inline.bench($formatBlock.inlineContext(fcontext));
  if (_x0) {
    return parseDefinitionsBench(fcontext, blocks);
  }
  else {
    return parseDefinitionsFull(fcontext, blocks, metadata, tocDepth_22714, secBase_22718, secDepth_22722);
  }
}
 
// Parse source into blocks (see "parseBlocks") and 
// process all definitions (see "parseDefinitions").
function parseBody(fcontext, lineNo, src, metadata, tocDepth, secBase0, secDepth)  /* (fcontext : formatBlock/formatContext, lineNo : int, src : string, metadata : options/metadata, tocDepth : int, secBase : int, secDepth : int) -> div (list<block/block>, formatBlock/formatContext) */  {
  return parseDefinitions(fcontext, $std_core.Cons($block._createDiv($std_core.Nil, $attributes.parseAttrs((".madoko; line-adjust:0; line:" + $std_core.show_1(lineNo)), "body", src)), $std_core.Nil), metadata, tocDepth, secBase0, secDepth);
}
var secNone = Secinfo(1, 0, 1, $std_core.id);
 
// koka exports:
return { 'width': width, 'digits': digits, 'items': items, 'start': start, 'end': end, 'item': item, 'isArabic0': isArabic0, 'isArabic': isArabic, 'isDecimal0': isDecimal0, 'isDecimal': isDecimal, 'isLowercase': isLowercase, 'isUppercase': isUppercase, 'isLowerRoman': isLowerRoman, 'isUpperRoman': isUpperRoman, 'isEntityList': isEntityList, 'isUnicodeBase': isUnicodeBase, 'isEntity': isEntity, 'value': value, 'format': format, '_copy': _copy, 'isParNone': isParNone, 'isParEnded': isParEnded, 'isParBlock': isParBlock, 'level': level, 'secMax': secMax, 'secBase': secBase, 'secDefaults': secDefaults, '_copy_1': _copy_1, '_createArabic': _createArabic, '_createCounter': _createCounter, 'cjkDecimals': cjkDecimals, 'rxEntityList': rxEntityList, 'rxUnicodeBase': rxUnicodeBase, 'symbolDecimal': symbolDecimal, 'setcounterstyle': setcounterstyle, 'increment': increment, 'resetNestedCounters': resetNestedCounters, 'initializeCounter': initializeCounter, 'setCounter': setCounter, 'adjustCounter': adjustCounter, 'showAsChar': showAsChar, 'showFromList': showFromList, 'showRoman': showRoman, 'showEntity': showEntity, 'showDigits': showDigits, 'showUnicodeBase': showUnicodeBase, 'show': show, 'blockName': blockName, 'tocList': tocList, 'tocItems': tocItems, 'createToc': createToc, 'rxcounter': rxcounter, 'expandCounter': expandCounter, 'expandCounters': expandCounters, 'extractCaption': extractCaption, 'headingLevel': headingLevel, 'findHeading': findHeading, 'incLineNo': incLineNo, 'mapBlocks': mapBlocks, 'parseDefinitionsBench': parseDefinitionsBench, 'secInit': secInit, 'sectionMap': sectionMap, 'sections': sections, 'sectionSpan': sectionSpan, 'transformDiv': transformDiv, 'transformItem': transformItem, 'setAttrs': setAttrs, 'shouldRender': shouldRender, 'unformat': unformat, 'parseDefinitionsFull': parseDefinitionsFull, 'parseDefinitions': parseDefinitions, 'parseBody': parseBody, 'secNone': secNone };
});