// koka generated module: "expression"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_log', './std_dict', './std_regex', './std_string', './common'], function($std_core, $std_log, $std_dict, $std_regex, $std_string, $common) {
"use strict";
 
// koka declarations:
function Int(i)  /* (i : int) -> constant */  {
  return { _tag: 1, i: i };
}
function Bool(b)  /* (b : bool) -> constant */  {
  return { _tag: 2, b: b };
}
function String(s)  /* (s : string) -> constant */  {
  return { _tag: 3, s: s };
}
function Regex(r)  /* (r : std/regex/regex) -> constant */  {
  return { _tag: 4, r: r };
}
var Null = { _tag: 5 };  /* constant */ 
function UnOp(op, expr)  /* (op : string, expr : expr) -> expr */  {
  return { _tag: 1, op: op, expr: expr };
}
function BinOp(op, left, right)  /* (op : string, left : expr, right : expr) -> expr */  {
  return { _tag: 2, op: op, left: left, right: right };
}
function If(cond, ethen, eelse)  /* (cond : expr, ethen : expr, eelse : expr) -> expr */  {
  return { _tag: 3, cond: cond, ethen: ethen, eelse: eelse };
}
function Const(c)  /* (c : constant) -> expr */  {
  return { _tag: 4, c: c };
}
function Var(v, display)  /* (v : string, display : string) -> expr */  {
  return { _tag: 5, v: v, display: display };
}
 
// Automatically generated. Retrieves the `i` constructor field of the ":constant" type.
function i(constant)  /* (constant : constant) -> exn int */  {
  return (constant._tag === 1) ? constant.i : $std_core.patternMatchError("src\\expression.kk(34, 8)", "i");
}
 
// Automatically generated. Retrieves the `b` constructor field of the ":constant" type.
function b(constant)  /* (constant : constant) -> exn bool */  {
  return (constant._tag === 2) ? constant.b : $std_core.patternMatchError("src\\expression.kk(35, 9)", "b");
}
 
// Automatically generated. Retrieves the `s` constructor field of the ":constant" type.
function s(constant)  /* (constant : constant) -> exn string */  {
  return (constant._tag === 3) ? constant.s : $std_core.patternMatchError("src\\expression.kk(36,11)", "s");
}
 
// Automatically generated. Retrieves the `r` constructor field of the ":constant" type.
function r(constant)  /* (constant : constant) -> exn std/regex/regex */  {
  return (constant._tag === 4) ? constant.r : $std_core.patternMatchError("src\\expression.kk(37,10)", "r");
}
 
// Automatically generated. Tests for the "Int" constructor of the ":constant" type.
function isInt(constant)  /* (constant : constant) -> bool */  {
  return (constant._tag === 1);
}
 
// Automatically generated. Tests for the "Bool" constructor of the ":constant" type.
function isBool(constant)  /* (constant : constant) -> bool */  {
  return (constant._tag === 2);
}
 
// Automatically generated. Tests for the "String" constructor of the ":constant" type.
function isString(constant)  /* (constant : constant) -> bool */  {
  return (constant._tag === 3);
}
 
// Automatically generated. Tests for the "Regex" constructor of the ":constant" type.
function isRegex(constant)  /* (constant : constant) -> bool */  {
  return (constant._tag === 4);
}
 
// Automatically generated. Tests for the "Null" constructor of the ":constant" type.
function isNull(constant)  /* (constant : constant) -> bool */  {
  return (constant._tag === 5);
}
 
// Automatically generated. Retrieves the `op` constructor field of the ":expr" type.
function op(expr0)  /* (expr : expr) -> exn string */  {
  if (expr0._tag === 1) {
    return expr0.op;
  }
  else if (expr0._tag === 2) {
    return expr0.op;
  }
  else {
    return $std_core.patternMatchError("src\\expression.kk(26, 9)", "op");
  }
}
 
// Automatically generated. Retrieves the `expr` constructor field of the ":expr" type.
function expr(expr0)  /* (expr : expr) -> exn expr */  {
  return (expr0._tag === 1) ? expr0.expr : $std_core.patternMatchError("src\\expression.kk(26,22)", "expr");
}
 
// Automatically generated. Retrieves the `left` constructor field of the ":expr" type.
function left(expr0)  /* (expr : expr) -> exn expr */  {
  return (expr0._tag === 2) ? expr0.left : $std_core.patternMatchError("src\\expression.kk(27,22)", "left");
}
 
// Automatically generated. Retrieves the `right` constructor field of the ":expr" type.
function right(expr0)  /* (expr : expr) -> exn expr */  {
  return (expr0._tag === 2) ? expr0.right : $std_core.patternMatchError("src\\expression.kk(27,35)", "right");
}
 
// Automatically generated. Retrieves the `cond` constructor field of the ":expr" type.
function cond(expr0)  /* (expr : expr) -> exn expr */  {
  return (expr0._tag === 3) ? expr0.cond : $std_core.patternMatchError("src\\expression.kk(28, 7)", "cond");
}
 
// Automatically generated. Retrieves the `ethen` constructor field of the ":expr" type.
function ethen(expr0)  /* (expr : expr) -> exn expr */  {
  return (expr0._tag === 3) ? expr0.ethen : $std_core.patternMatchError("src\\expression.kk(28,20)", "ethen");
}
 
// Automatically generated. Retrieves the `eelse` constructor field of the ":expr" type.
function eelse(expr0)  /* (expr : expr) -> exn expr */  {
  return (expr0._tag === 3) ? expr0.eelse : $std_core.patternMatchError("src\\expression.kk(28,34)", "eelse");
}
 
// Automatically generated. Retrieves the `c` constructor field of the ":expr" type.
function c(expr0)  /* (expr : expr) -> exn constant */  {
  return (expr0._tag === 4) ? expr0.c : $std_core.patternMatchError("src\\expression.kk(29,10)", "c");
}
 
// Automatically generated. Retrieves the `v` constructor field of the ":expr" type.
function v(expr0)  /* (expr : expr) -> exn string */  {
  return (expr0._tag === 5) ? expr0.v : $std_core.patternMatchError("src\\expression.kk(30, 8)", "v");
}
 
// Automatically generated. Retrieves the `display` constructor field of the ":expr" type.
function display(expr0)  /* (expr : expr) -> exn string */  {
  return (expr0._tag === 5) ? expr0.display : $std_core.patternMatchError("src\\expression.kk(30,20)", "display");
}
 
// Automatically generated. Tests for the "UnOp" constructor of the ":expr" type.
function isUnOp(expr0)  /* (expr : expr) -> bool */  {
  return (expr0._tag === 1);
}
 
// Automatically generated. Tests for the "BinOp" constructor of the ":expr" type.
function isBinOp(expr0)  /* (expr : expr) -> bool */  {
  return (expr0._tag === 2);
}
 
// Automatically generated. Tests for the "If" constructor of the ":expr" type.
function isIf(expr0)  /* (expr : expr) -> bool */  {
  return (expr0._tag === 3);
}
 
// Automatically generated. Tests for the "Const" constructor of the ":expr" type.
function isConst(expr0)  /* (expr : expr) -> bool */  {
  return (expr0._tag === 4);
}
 
// Automatically generated. Tests for the "Var" constructor of the ":expr" type.
function isVar(expr0)  /* (expr : expr) -> bool */  {
  return (expr0._tag === 5);
}
function _lt__star__gt_(p1, p2)  /* forall<a,b> (p1 : parser<a>, p2 : parser<b>) -> parser<(a, b)> */  {
  return function(s0  /* string */ ) {
    var _x0 = p1(s0);
    if (_x0 == null) {
      return $std_core.Nothing;
    }
    else {
      var _x1 = p2($std_core.snd(_x0.unJust));
      if (_x1 == null) {
        return $std_core.Nothing;
      }
      else {
        return $std_core.Just($std_core._tuple2_($std_core._tuple2_($std_core.fst(_x0.unJust), $std_core.fst(_x1.unJust)), $std_core.snd(_x1.unJust)));
      }
    }
  };
}
function map(p, f)  /* forall<a,b> (p : parser<a>, f : (a) -> b) -> parser<b> */  {
  return function(s0  /* string */ ) {
    var _x0 = p(s0);
    if (_x0 == null) {
      return $std_core.Nothing;
    }
    else {
      return $std_core.Just($std_core._tuple2_(f($std_core.fst(_x0.unJust)), $std_core.snd(_x0.unJust)));
    }
  };
}
function _lt__dollar__gt_(p1, p2)  /* forall<a,b> (p1 : parser<(a) -> b>, p2 : parser<a>) -> parser<b> */  {
  return map(_lt__star__gt_(p1, p2), function(x  /* ((1282) -> 1283, 1282) */ ) {  return $std_core.fst(x)($std_core.snd(x));});
}
function succeed(x)  /* forall<a> (x : a) -> parser<a> */  {
  return function(s0  /* string */ ) {
    return $std_core.Just($std_core._tuple2_(x, s0));
  };
}
function _dollar__gt_(f, p)  /* forall<a,b> (f : (a) -> b, p : parser<a>) -> parser<b> */  {
  return _lt__dollar__gt_(succeed(f), p);
}
function _star__gt_(p1, p2)  /* forall<a,b> (p1 : parser<a>, p2 : parser<b>) -> parser<b> */  {
  return map(_lt__star__gt_(p1, p2), function(x  /* (1527, 1528) */ ) {  return $std_core.snd(x);});
}
function map2(p, f)  /* forall<a,b,c,e> (p : parser<(a, b)>, f : (a, b) -> c) -> e parser<c> */  {
  return map(p, function(x  /* (1790, 1791) */ ) {  return f($std_core.fst(x), $std_core.snd(x));});
}
function _lt__dollar_(p1, p2)  /* forall<a,b> (p1 : parser<a>, p2 : parser<(a) -> b>) -> parser<b> */  {
  return map2(_lt__star__gt_(p1, p2), function(x  /* 1823 */ , f  /* (1823) -> 1824 */ ) {  return f(x);});
}
function _lt__star_(p1, p2)  /* forall<a,b> (p1 : parser<a>, p2 : parser<b>) -> parser<a> */  {
  return map(_lt__star__gt_(p1, p2), function(x  /* (2024, 2025) */ ) {  return $std_core.fst(x);});
}
function _x7C__x7C_(p1, p2)  /* forall<a> (p1 : parser<a>, p2 : parser<a>) -> parser<a> */  {
  return function(s0  /* string */ ) {
    var _x0 = p1(s0);
    return (_x0 == null) ? p2(s0) : _x0;
  };
}
function berr(b1, b2)  /* forall<a> (b1 : bool, b2 : bool) -> exn a */  {
  return $std_core.error("cannot compare booleans");
}
function cint(c0)  /* (c : constant) -> constant */  {
  if (c0._tag === 3) {
    var _x0 = $std_core.parseInt($std_string.trim(c0.s), undefined);
    return (_x0 != null) ? Int(_x0.unJust) : c0;
  }
  else {
    return c0;
  }
}
function show_1(c0)  /* (c : constant) -> string */  {
  if (c0._tag === 2) {
    return $std_core.show_5(c0.b);
  }
  else if (c0._tag === 1) {
    return $std_core.show_1(c0.i);
  }
  else if (c0._tag === 3) {
    return $std_core.show_4(c0.s);
  }
  else if (c0._tag === 4) {
    return ("/" + ($std_regex.source(c0.r) + "/"));
  }
  else {
    return "none";
  }
}
function show(expr0, outer)  /* (expr : expr, outer : ?bool) -> string */  {
  var outer_2103 = (outer !== undefined) ? outer : true;
  function parens(s0)  /* (s : string) -> string */  {
    if (outer_2103) {
      return s0;
    }
    else {
      return ("(" + (s0 + ")"));
    }
  }
  if (expr0._tag === 4) {
    return show_1(expr0.c);
  }
  else if (expr0._tag === 5) {
    return expr0.display;
  }
  else if (expr0._tag === 3) {
    return parens(("@if " + (show(expr0.cond, undefined) + (" @then " + (show(expr0.ethen, undefined) + (" @else " + show(expr0.eelse, undefined)))))));
  }
  else if (expr0._tag === 1) {
    return (expr0.op + ("(" + (show(expr0.expr, undefined) + ")")));
  }
  else {
    return parens((show(expr0.left, false) + (" " + (expr0.op + (" " + show(expr0.right, false))))));
  }
}
function binop(c1, c2, op0, iop, sop, bop)  /* forall<a> (c1 : constant, c2 : constant, op : string, iop : (int, int) -> exn a, sop : (string, string) -> exn a, bop : (bool, bool) -> exn a) -> exn a */  {
  var msg = ("comparing values of different types (" + (op0 + (") on (" + (show_1(c1) + (") and (" + (show_1(c2) + ")"))))));
  if (c1._tag === 1) {
    var _x0 = cint(c2);
    return (_x0._tag === 1) ? iop(c1.i, _x0.i) : $std_core.error(msg);
  }
  else if (c1._tag === 3) {
    if (c2._tag === 3) {
      return sop(c1.s, c2.s);
    }
    else if (c2._tag === 1) {
      var _x1 = cint(c1);
      return (_x1._tag === 1) ? iop(_x1.i, c2.i) : $std_core.error(msg);
    }
    else {
      return $std_core.error(msg);
    }
  }
  else if (c1._tag === 2) {
    return (c2._tag === 2) ? bop(c1.b, c2.b) : $std_core.error(msg);
  }
  else {
    return $std_core.error(msg);
  }
}
function bool(c0)  /* (c : constant) -> exn bool */  {
  if (c0._tag === 2) {
    return c0.b;
  }
  if (c0._tag === 1) {
    if ((c0.i === 0 || c0.i === 1)){
      return c0.i === 1;
    }
  }
  if (c0._tag === 3) {
    var t = $std_core.toLower($std_string.trim(c0.s));
    var _x0 = ((t === "true") || (t === "1"));
    if (_x0) {
      return true;
    }
    else {
      var _x1 = ((t === "false") || (t === "0"));
      if (_x1) {
        return false;
      }
      else {
        return $std_core.error(("cannot use string a boolean condition: " + $std_core.show_4(c0.s)));
      }
    }
  }
  if (c0._tag === 4) {
    return $std_core.error(("cannot use regular expression as a boolean condition: /" + ($std_regex.source(c0.r) + "/")));
  }
  if (c0._tag === 5) {
    return $std_core.error("cannot use none expression as a boolean condition");
  }
  return $std_core.patternMatchError("src\\expression.kk(152, 3)", "bool");
}
function ierr(i1, i2)  /* forall<a> (i1 : int, i2 : int) -> exn a */  {
  return $std_core.error("cannot compare integers");
}
function matchSubcode(s1, s2)  /* (s1 : string, s2 : string) -> bool */  {
  return ((s1 === s2) || $std_core.startsWith(s1, (s2 + "-")));
}
var rxSpaces = $std_regex.regex("\\s+", undefined, undefined);
function matchWord(s1, s2)  /* (s1 : string, s2 : string) -> bool */  {
  return $std_core.any($std_core.list_4($std_regex.split(s2, rxSpaces, undefined, undefined)), function(w  /* string */ ) {  return (s1 === w);});
}
function serr(s1, s2)  /* forall<a> (s1 : string, s2 : string) -> exn a */  {
  return $std_core.error("cannot compare strings");
}
function satisfy(r0)  /* (r : string) -> parser<std/regex/matched> */  {
  return function(s0  /* string */ ) {
    var _x0 = $std_regex.find(s0, $std_regex.regex(("^\\s*" + r0), true, undefined), undefined);
    if (_x0 != null) {
      return $std_core.Just($std_core._tuple2_(_x0.unJust, ((s0).substr($std_regex.next(_x0.unJust) >=1 ? $std_regex.next(_x0.unJust) : 1))));
    }
    else {
      return $std_core.Nothing;
    }
  };
}
function string(c0)  /* (c : constant) -> string */  {
  if (c0._tag === 2) {
    return (c0.b) ? "True" : "";
  }
  else if (c0._tag === 1) {
    return $std_core.show_1(c0.i);
  }
  else if (c0._tag === 3) {
    return c0.s;
  }
  else if (c0._tag === 4) {
    return $std_regex.source(c0.r);
  }
  else {
    return "";
  }
}
function string_1(r0)  /* (r : string) -> parser<string> */  {
  return map(satisfy(("(" + (r0 + ")"))), function(cap  /* std/regex/matched */ ) {  return $std_regex._index_($std_regex.groups(cap), 1);});
}
function evalExpr(expr0, lookup)  /* forall<e> (expr : expr, lookup : (string, string) -> <exn|e> constant) -> <exn|e> constant */  { tailcall: while(1)
{
  if (expr0._tag === 4) {
    return expr0.c;
  }
  else if (expr0._tag === 5) {
    return lookup(expr0.v, expr0.display);
  }
  else if (expr0._tag === 1) {
    var _x0 = ((expr0.op === "not") || (expr0.op === "!"));
    if (_x0) {
      return Bool(!(bool(evalExpr(expr0.expr, lookup))));
    }
    else {
      var _x1 = ((expr0.op === "regexp") || (expr0.op === "regexpi"));
      if (_x1) {
        return Regex($std_regex.regex(string(evalExpr(expr0.expr, lookup)), (expr0.op === "regexpi"), undefined));
      }
      else {
        if ((expr0.op === "lower")) {
          return String($std_core.toLower(string(evalExpr(expr0.expr, lookup))));
        }
        else {
          if ((expr0.op === "upper")) {
            return String($std_core.toUpper(string(evalExpr(expr0.expr, lookup))));
          }
          else {
            return $std_core.error(("invalid operator: " + expr0.op));
          }
        }
      }
    }
  }
  else if (expr0._tag === 2) {
    var x1 = evalExpr(expr0.left, lookup);
    var x2 = evalExpr(expr0.right, lookup);
    var _x2 = ((expr0.op === "and") || (expr0.op === "&&"));
    if (_x2) {
      return Bool((bool(x1) && bool(x2)));
    }
    else {
      var _x3 = ((expr0.op === "or") || (expr0.op === "||"));
      if (_x3) {
        return Bool((bool(x1) || bool(x2)));
      }
      else {
        var _x4 = ((expr0.op === ":") || ((expr0.op === "==") || (expr0.op === "=")));
        if (_x4) {
          return Bool(binop(x1, x2, expr0.op, function(x  /* int */ , y  /* int */ ) {  return x === y;}, function(x0  /* string */ , y0  /* string */ ) {  return (x0 === y0);}, function(x3  /* bool */ , y1  /* bool */ ) {  return $std_core._eq__eq__5(x3, y1);}));
        }
        else {
          if ((expr0.op === "!=")) {
            return Bool(binop(x1, x2, expr0.op, function(x4  /* int */ , y2  /* int */ ) {  return x4 !== y2;}, function(x5  /* string */ , y3  /* string */ ) {  return (x5 !== y3);}, function(x6  /* bool */ , y4  /* bool */ ) {  return $std_core._excl__eq__5(x6, y4);}));
          }
          else {
            if ((expr0.op === ">")) {
              return Bool(binop(cint(x1), cint(x2), expr0.op, function(x7  /* int */ , y5  /* int */ ) {  return x7 > y5;}, serr, berr));
            }
            else {
              if ((expr0.op === ">=")) {
                return Bool(binop(cint(x1), cint(x2), expr0.op, function(x8  /* int */ , y6  /* int */ ) {  return x8 >= y6;}, serr, berr));
              }
              else {
                if ((expr0.op === "<")) {
                  return Bool(binop(cint(x1), cint(x2), expr0.op, function(x9  /* int */ , y7  /* int */ ) {  return x9 < y7;}, serr, berr));
                }
                else {
                  if ((expr0.op === "<=")) {
                    return Bool(binop(cint(x1), cint(x2), expr0.op, function(x10  /* int */ , y8  /* int */ ) {  return x10 <= y8;}, serr, berr));
                  }
                  else {
                    if ((expr0.op === "~=")) {
                      return Bool(binop(x1, x2, expr0.op, ierr, matchWord, berr));
                    }
                    else {
                      if ((expr0.op === "|=")) {
                        return Bool(binop(x1, x2, expr0.op, ierr, matchSubcode, berr));
                      }
                      else {
                        if ((expr0.op === "^=")) {
                          return Bool(binop(x1, x2, expr0.op, ierr, $std_core.startsWith, berr));
                        }
                        else {
                          if ((expr0.op === "$=")) {
                            return Bool(binop(x1, x2, expr0.op, ierr, $std_core.endsWith, berr));
                          }
                          else {
                            if ((expr0.op === "*=")) {
                              return Bool(binop(x1, x2, expr0.op, ierr, $std_core.contains_1, berr));
                            }
                            else {
                              if ((expr0.op === "~~")) {
                                if (x2._tag === 4) {
                                  return Bool($std_regex.contains(string(x1), x2.r, undefined));
                                }
                                else {
                                  return $std_core.error("first argument of \'~~\' must be a regular expression");
                                }
                              }
                              else {
                                return $std_core.error(("invalid operator: " + expr0.op));
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
  else {
    var _x5 = bool(evalExpr(expr0.cond, lookup));
    return (_x5) ? evalExpr(expr0.ethen, lookup) : evalExpr(expr0.eelse, lookup);
  }
}}
var parseBool = _x7C__x7C_(map(string_1("true\\b"), function(s0  /* string */ ) {  return Bool(true);}), map(string_1("false\\b"), function(s1  /* string */ ) {  return Bool(false);}));
var parseCInt = map(string_1("\\d+"), function(s0  /* string */ ) {  return Int($std_core.maybe($std_core.parseInt(s0, undefined), 0, $std_core.id));});
var parseString = map(string_1("\'(?:[^\\\\\']|\\\\[.\\n])*\'|\"(?:[^\\\\\"]|\\\\[.\\n])*\""), function(s0  /* string */ ) {  return String($common.unquote(s0));});
var parseConst = map(_x7C__x7C_(parseBool, _x7C__x7C_(parseCInt, parseString)), function(c0  /* constant */ ) {  return Const(c0);});
function manyx(p, s0)  /* forall<a> (p : parser<a>, s : string) -> div maybe<(list<a>, string)> */  {
  var _x0 = p(s0);
  if (_x0 == null) {
    return $std_core.Just($std_core._tuple2_($std_core.Nil, s0));
  }
  else {
    var _x1 = (_x0.unJust.snd).length >= (s0).length;
    if (_x1) {
      return $std_core.Nothing;
    }
    else {
      var _x2 = manyx(p, _x0.unJust.snd);
      if (_x2 == null) {
        return $std_core.Nothing;
      }
      else {
        return $std_core.Just($std_core._tuple2_($std_core.Cons(_x0.unJust.fst, $std_core.fst(_x2.unJust)), $std_core.snd(_x2.unJust)));
      }
    }
  }
}
function many(p)  /* forall<a> (p : parser<a>) -> parser<list<a>> */  {
  return function(s0  /* string */ ) {
    return $std_core.unsafeTotal(function() {
      return manyx(p, s0);
    });
  };
}
var parseMode = map(satisfy("@(no)?([\\w\\-]*)"), function(cap  /* std/regex/matched */ ) {  var v0 = Var($common.normalizeId($std_regex._index_($std_regex.groups(cap), 2)), $std_regex._index_($std_regex.groups(cap), 2)); var _x0 = $std_core.isEmpty($std_regex._index_($std_regex.groups(cap), 1)); return (_x0) ? v0 : UnOp("not", v0);});
var parseModes = map2(_lt__star__gt_(parseMode, many(parseMode)), function(x  /* expr */ , xs  /* list<expr> */ ) {  return $std_core.foldl(xs, x, function(a  /* expr */ , b0  /* expr */ ) {  return BinOp("and", a, b0);});});
var parseRegex = map(satisfy("/((?:[^\\\\/\\n]|\\\\.)*)/(i)?"), function(cap  /* std/regex/matched */ ) {  return UnOp(("regexp" + $std_regex._index_($std_regex.groups(cap), 2)), Const(String($std_regex._index_($std_regex.groups(cap), 1))));});
var parseVar = _x7C__x7C_(map(string_1("[\\w\\-]+"), function(s0  /* string */ ) {  return Var($common.normalizeId(s0), s0);}), map(satisfy("&([\\w\\-]+);"), function(cap  /* std/regex/matched */ ) {  return Var($common.normalizeId($std_regex._index_($std_regex.groups(cap), 1)), $std_regex._index_($std_regex.groups(cap), 1));}));
function parseAtom()  /* () -> div parser<expr> */  {
  return _x7C__x7C_(parseModes, _x7C__x7C_(parseConst, _x7C__x7C_(parseVar, _x7C__x7C_(parseRegex, _lt__star_(_star__gt_(string_1("\\("), function(s0  /* string */ ) {  return parseExpr(s0);}), string_1("\\)"))))));
}
function parseIf()  /* () -> div parser<expr> */  {
  return _x7C__x7C_(map(_lt__star__gt_(_lt__star__gt_(_lt__star_(_star__gt_(string_1("@if\\b"), parseBinary()), string_1("@then")), parseAtom()), _x7C__x7C_(_star__gt_(string_1("@else"), parseAtom()), succeed(Const(Null)))), function(res  /* ((expr, expr), expr) */ ) {  return If($std_core.fst($std_core.fst(res)), $std_core.snd($std_core.fst(res)), $std_core.snd(res));}), parseBinary());
}
var parseExpr = $std_core.unsafeTotal(parseIf);
function parseBinary()  /* () -> div parser<expr> */  {
  return _lt__dollar_(parseUnary(), _x7C__x7C_(map2(_lt__star__gt_(string_1("(and\\b|or\\b|(~~|:|==|!=|>=|<=|>|<|&&|\\|\\||[~\\^\\|\\$\\*]?=)(?=[\\s\\w/\"\']))"), function(s1  /* string */ ) {  return parseExpr(s1);}), function(op0  /* string */ , arg2  /* expr */ ) {  return function(arg1  /* expr */ ) {  return BinOp(op0, arg1, arg2);};}), succeed($std_core.id)));
}
function parseUnary()  /* () -> div parser<expr> */  {
  return _x7C__x7C_(map2(_lt__star__gt_(string_1("(!|not\\b|regexp\\b|lower\\b|upper\\b)"), parseAtom()), function(f  /* string */ , e  /* expr */ ) {  return UnOp(f, e);}), parseAtom());
}
function evaluate(expr0, $eval, $default)  /* forall<a,e> (expr : string, eval : (expr) -> <exn|e> a, default : a) -> e a */  {
  var mbres = $std_core.unsafeTotal(function() {
    return parseExpr(expr0);
  });
  if (mbres != null) {
    if ($std_core.isEmpty($std_string.trim($std_core.snd(mbres.unJust)))){
      return $std_core.$catch(function() {  return $eval($std_core.fst(mbres.unJust));}, function(exn  /* exception */ ) {  $common.warning($std_core.show(exn), undefined); return $default;});
    }
  }
  $common.warning(("invalid expression: \'" + (expr0 + "\'")), undefined);
  return $default;
}
function many1(p)  /* forall<a> (p : parser<a>) -> parser<list<a>> */  {
  return map2(_lt__star__gt_(p, many(p)), function(x  /* 14237 */ , xs  /* list<14237> */ ) {  return $std_core.Cons(x, xs);});
}
function optional(p, def)  /* forall<a> (p : parser<a>, def : a) -> parser<a> */  {
  return _x7C__x7C_(p, succeed(def));
}
function parseAttrSelector()  /* () -> parser<expr> */  {
  return map2(_lt__star_(_lt__star__gt_(_star__gt_(string_1("\\["), function(s0  /* string */ ) {  return parseExpr(s0);}), optional(string_1("i\\b"), "")), string_1("\\]")), function(expr0  /* expr */ , i0  /* string */ ) {  if ((i0 !== "i")) {  return expr0;} else {  if (expr0._tag === 2) {  return BinOp(expr0.op, UnOp("lower", expr0.left), UnOp("lower", expr0.right));} else {  return expr0;}}});
}
function parseAttrSelectors(pat)  /* (pat : string) -> list<expr> */  {
  var mbres = $std_core.unsafeTotal(function() {
    return many(parseAttrSelector())(pat);
  });
  if (mbres != null) {
    if ($std_core.isEmpty($std_string.trim($std_core.snd(mbres.unJust)))){
      return $std_core.fst(mbres.unJust);
    }
  }
  $common.warning(("invalid attribute selector: \'" + (pat + "\'")), undefined);
  return $std_core.Nil;
}
 
// koka exports:
return { 'Int': Int, 'Bool': Bool, 'String': String, 'Regex': Regex, 'Null': Null, 'UnOp': UnOp, 'BinOp': BinOp, 'If': If, 'Const': Const, 'Var': Var, 'i': i, 'b': b, 's': s, 'r': r, 'isInt': isInt, 'isBool': isBool, 'isString': isString, 'isRegex': isRegex, 'isNull': isNull, 'op': op, 'expr': expr, 'left': left, 'right': right, 'cond': cond, 'ethen': ethen, 'eelse': eelse, 'c': c, 'v': v, 'display': display, 'isUnOp': isUnOp, 'isBinOp': isBinOp, 'isIf': isIf, 'isConst': isConst, 'isVar': isVar, '_lt__star__gt_': _lt__star__gt_, 'map': map, '_lt__dollar__gt_': _lt__dollar__gt_, 'succeed': succeed, '_dollar__gt_': _dollar__gt_, '_star__gt_': _star__gt_, 'map2': map2, '_lt__dollar_': _lt__dollar_, '_lt__star_': _lt__star_, '_x7C__x7C_': _x7C__x7C_, 'berr': berr, 'cint': cint, 'show_1': show_1, 'show': show, 'binop': binop, 'bool': bool, 'ierr': ierr, 'matchSubcode': matchSubcode, 'rxSpaces': rxSpaces, 'matchWord': matchWord, 'serr': serr, 'satisfy': satisfy, 'string': string, 'string_1': string_1, 'evalExpr': evalExpr, 'parseBool': parseBool, 'parseCInt': parseCInt, 'parseString': parseString, 'parseConst': parseConst, 'manyx': manyx, 'many': many, 'parseMode': parseMode, 'parseModes': parseModes, 'parseRegex': parseRegex, 'parseVar': parseVar, 'parseAtom': parseAtom, 'parseIf': parseIf, 'parseExpr': parseExpr, 'parseBinary': parseBinary, 'parseUnary': parseUnary, 'evaluate': evaluate, 'many1': many1, 'optional': optional, 'parseAttrSelector': parseAttrSelector, 'parseAttrSelectors': parseAttrSelectors };
});