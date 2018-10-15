// koka generated module: "std/flags"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_env'], function($std_core, $std_env) {
"use strict";
 
// koka declarations:
function Flg(set)  /* forall<a> (set : (a) -> a) -> flagKind<a> */  {
  return { _tag: 1, set: set };
}
function Arg(arg)  /* forall<a> (arg : string) -> flagKind<a> */  {
  return { _tag: 2, arg: arg };
}
var End = { _tag: 3 };  /* forall<a> flagKind<a> */ 
function Unknown(arg)  /* forall<a> (arg : string) -> flagKind<a> */  {
  return { _tag: 4, arg: arg };
}
function Error(msg)  /* forall<a> (msg : string) -> flagKind<a> */  {
  return { _tag: 5, msg: msg };
}
function Flag($default)  /* forall<a> (default : (a, bool) -> a) -> optionArg<a> */  {
  return { _tag: 1, $default: $default };
}
function Req(parse, help)  /* forall<a> (parse : (a, string) -> a, help : string) -> optionArg<a> */  {
  return { _tag: 2, parse: parse, help: help };
}
function Opt(parse, help)  /* forall<a> (parse : (a, maybe<string>) -> a, help : string) -> optionArg<a> */  {
  return { _tag: 3, parse: parse, help: help };
}
function Option(shortNames, longNames, arg, help, llongNames)  /* forall<a> (shortNames : string, longNames : list<string>, arg : optionArg<a>, help : string, llongNames : list<string>) -> option<a> */  {
  return { shortNames: shortNames, longNames: longNames, arg: arg, help: help, llongNames: llongNames };
}
var Permute = { _tag: 1 };  /* forall<a> optionOrder<a> */ 
var Preorder = { _tag: 2 };  /* forall<a> optionOrder<a> */ 
function Wrap(wrap)  /* forall<a> (wrap : (string) -> a) -> optionOrder<a> */  {
  return { _tag: 3, wrap: wrap };
}
function TestOptions(verbose, version, name, output, $arguments)  /* (verbose : bool, version : bool, name : string, output : string, arguments : list<string>) -> testOptions */  {
  return { verbose: verbose, version: version, name: name, output: output, $arguments: $arguments };
}
 
// Automatically generated. Retrieves the `set` constructor field of the ":flagKind" type.
function set(flagKind)  /* forall<a> (flagKind : flagKind<a>) -> exn ((a) -> a) */  {
  return (flagKind._tag === 1) ? flagKind.set : $std_core.patternMatchError("..\\koka-0.6\\lib\\std\\flags.kk(156, 8)", "set");
}
 
// Automatically generated. Retrieves the `arg` constructor field of the ":flagKind" type.
function arg(flagKind)  /* forall<a> (flagKind : flagKind<a>) -> exn string */  {
  if (flagKind._tag === 2) {
    return flagKind.arg;
  }
  else if (flagKind._tag === 4) {
    return flagKind.arg;
  }
  else {
    return $std_core.patternMatchError("..\\koka-0.6\\lib\\std\\flags.kk(157, 8)", "arg");
  }
}
 
// Automatically generated. Retrieves the `msg` constructor field of the ":flagKind" type.
function msg(flagKind)  /* forall<a> (flagKind : flagKind<a>) -> exn string */  {
  return (flagKind._tag === 5) ? flagKind.msg : $std_core.patternMatchError("..\\koka-0.6\\lib\\std\\flags.kk(160,10)", "msg");
}
 
// Automatically generated. Tests for the "Flg" constructor of the ":flagKind" type.
function isFlg(flagKind)  /* forall<a> (flagKind : flagKind<a>) -> bool */  {
  return (flagKind._tag === 1);
}
 
// Automatically generated. Tests for the "Arg" constructor of the ":flagKind" type.
function isArg(flagKind)  /* forall<a> (flagKind : flagKind<a>) -> bool */  {
  return (flagKind._tag === 2);
}
 
// Automatically generated. Tests for the "End" constructor of the ":flagKind" type.
function isEnd(flagKind)  /* forall<a> (flagKind : flagKind<a>) -> bool */  {
  return (flagKind._tag === 3);
}
 
// Automatically generated. Tests for the "Unknown" constructor of the ":flagKind" type.
function isUnknown(flagKind)  /* forall<a> (flagKind : flagKind<a>) -> bool */  {
  return (flagKind._tag === 4);
}
 
// Automatically generated. Tests for the "Error" constructor of the ":flagKind" type.
function isError(flagKind)  /* forall<a> (flagKind : flagKind<a>) -> bool */  {
  return (flagKind._tag === 5);
}
 
// Automatically generated. Retrieves the `default` constructor field of the ":optionArg" type.
function $default(optionArg)  /* forall<a> (optionArg : optionArg<a>) -> exn ((a, bool) -> a) */  {
  return (optionArg._tag === 1) ? optionArg.$default : $std_core.patternMatchError("..\\koka-0.6\\lib\\std\\flags.kk(42,13)", "default");
}
 
// Automatically generated. Retrieves the `help` constructor field of the ":optionArg" type.
function help(optionArg)  /* forall<a> (optionArg : optionArg<a>) -> exn string */  {
  if (optionArg._tag === 2) {
    return optionArg.help;
  }
  else if (optionArg._tag === 3) {
    return optionArg.help;
  }
  else {
    return $std_core.patternMatchError("..\\koka-0.6\\lib\\std\\flags.kk(44,37)", "help");
  }
}
 
// Automatically generated. Tests for the "Flag" constructor of the ":optionArg" type.
function isFlag(optionArg)  /* forall<a> (optionArg : optionArg<a>) -> bool */  {
  return (optionArg._tag === 1);
}
 
// Automatically generated. Tests for the "Req" constructor of the ":optionArg" type.
function isReq(optionArg)  /* forall<a> (optionArg : optionArg<a>) -> bool */  {
  return (optionArg._tag === 2);
}
 
// Automatically generated. Tests for the "Opt" constructor of the ":optionArg" type.
function isOpt(optionArg)  /* forall<a> (optionArg : optionArg<a>) -> bool */  {
  return (optionArg._tag === 3);
}
 
// Automatically generated. Retrieves the `shortNames` constructor field of the ":option" type.
function shortNames(option)  /* forall<a> (option : option<a>) -> string */  {
  return option.shortNames;
}
 
// Automatically generated. Retrieves the `longNames` constructor field of the ":option" type.
function longNames(option)  /* forall<a> (option : option<a>) -> list<string> */  {
  return option.longNames;
}
 
// Automatically generated. Retrieves the `arg` constructor field of the ":option" type.
function arg_1(option)  /* forall<a> (option : option<a>) -> optionArg<a> */  {
  return option.arg;
}
 
// Automatically generated. Retrieves the `help` constructor field of the ":option" type.
function help_1(option)  /* forall<a> (option : option<a>) -> string */  {
  return option.help;
}
 
// Automatically generated. Retrieves the `llongNames` constructor field of the ":option" type.
function llongNames(option)  /* forall<a> (option : option<a>) -> list<string> */  {
  return option.llongNames;
}
function _copy(_this, shortNames0, longNames0, arg0, help0, llongNames0)  /* forall<a> (option<a>, shortNames : ?string, longNames : ?list<string>, arg : ?optionArg<a>, help : ?string, llongNames : ?list<string>) -> option<a> */  {
  var shortNames_478 = (shortNames0 !== undefined) ? shortNames0 : shortNames(_this);
  var longNames_485 = (longNames0 !== undefined) ? longNames0 : longNames(_this);
  var arg_512 = (arg0 !== undefined) ? arg0 : arg_1(_this);
  var help_535 = (help0 !== undefined) ? help0 : help_1(_this);
  var llongNames_542 = (llongNames0 !== undefined) ? llongNames0 : llongNames(_this);
  return Option(shortNames_478, longNames_485, arg_512, help_535, llongNames_542);
}
 
// Automatically generated. Retrieves the `wrap` constructor field of the ":optionOrder" type.
function wrap(optionOrder)  /* forall<a> (optionOrder : optionOrder<a>) -> exn ((string) -> a) */  {
  return (optionOrder._tag === 3) ? optionOrder.wrap : $std_core.patternMatchError("..\\koka-0.6\\lib\\std\\flags.kk(24,13)", "wrap");
}
 
// Automatically generated. Tests for the "Permute" constructor of the ":optionOrder" type.
function isPermute(optionOrder)  /* forall<a> (optionOrder : optionOrder<a>) -> bool */  {
  return (optionOrder._tag === 1);
}
 
// Automatically generated. Tests for the "Preorder" constructor of the ":optionOrder" type.
function isPreorder(optionOrder)  /* forall<a> (optionOrder : optionOrder<a>) -> bool */  {
  return (optionOrder._tag === 2);
}
 
// Automatically generated. Tests for the "Wrap" constructor of the ":optionOrder" type.
function isWrap(optionOrder)  /* forall<a> (optionOrder : optionOrder<a>) -> bool */  {
  return (optionOrder._tag === 3);
}
 
// Automatically generated. Retrieves the `verbose` constructor field of the ":testOptions" type.
function verbose(testOptions0)  /* (testOptions : testOptions) -> bool */  {
  return testOptions0.verbose;
}
 
// Automatically generated. Retrieves the `version` constructor field of the ":testOptions" type.
function version(testOptions0)  /* (testOptions : testOptions) -> bool */  {
  return testOptions0.version;
}
 
// Automatically generated. Retrieves the `name` constructor field of the ":testOptions" type.
function name(testOptions0)  /* (testOptions : testOptions) -> string */  {
  return testOptions0.name;
}
 
// Automatically generated. Retrieves the `output` constructor field of the ":testOptions" type.
function output(testOptions0)  /* (testOptions : testOptions) -> string */  {
  return testOptions0.output;
}
 
// Automatically generated. Retrieves the `arguments` constructor field of the ":testOptions" type.
function $arguments(testOptions0)  /* (testOptions : testOptions) -> list<string> */  {
  return testOptions0.$arguments;
}
function _copy_1(_this, verbose0, version0, name0, output0, arguments0)  /* (testOptions, verbose : ?bool, version : ?bool, name : ?string, output : ?string, arguments : ?list<string>) -> testOptions */  {
  var verbose_650 = (verbose0 !== undefined) ? verbose0 : verbose(_this);
  var version_656 = (version0 !== undefined) ? version0 : version(_this);
  var name_662 = (name0 !== undefined) ? name0 : name(_this);
  var output_668 = (output0 !== undefined) ? output0 : output(_this);
  var arguments_676 = (arguments0 !== undefined) ? arguments0 : $arguments(_this);
  return TestOptions(verbose_650, version_656, name_662, output_668, arguments_676);
}
 
// Specifies a single option
// For example: "Option(""h?"",[""help""],Flag(Help),""show help information"")".
function _createOption(shortNames0, longNames0, arg0, help0, llongNames0)  /* forall<a> (shortNames : string, longNames : list<string>, arg : optionArg<a>, help : string, llongNames : ?list<string>) -> option<a> */  {
  var llongNames_785 = (llongNames0 !== undefined) ? llongNames0 : $std_core.map_3(longNames0, $std_core.toLower);
  return Option(shortNames0, longNames0, arg0, help0, llongNames_785);
}
function setName(t, name0)  /* (t : testOptions, name : string) -> testOptions */  {
  return _copy_1(t, undefined, undefined, name0, undefined, undefined);
}
function setOutput(t, mbs)  /* (t : testOptions, mbs : maybe<string>) -> testOptions */  {
  if (mbs == null) {
    return _copy_1(t, undefined, undefined, undefined, "stdout", undefined);
  }
  else {
    return _copy_1(t, undefined, undefined, undefined, mbs.unJust, undefined);
  }
}
function setVerbose(t, v)  /* (t : testOptions, v : bool) -> testOptions */  {
  return _copy_1(t, v, undefined, undefined, undefined, undefined);
}
function setVersion(t, v)  /* (t : testOptions, v : bool) -> testOptions */  {
  return _copy_1(t, undefined, v, undefined, undefined, undefined);
}
var testOptions = $std_core.Cons(_createOption("V?", $std_core.Cons("version", $std_core.Nil), Flag(setVersion), "display version information", undefined), $std_core.Cons(_createOption("v", $std_core.Cons("verbose", $std_core.Nil), Flag(setVerbose), "verbosely list files", undefined), $std_core.Cons(_createOption("o", $std_core.Cons("output", $std_core.Nil), Opt(setOutput, "FILE"), "use FILE for dump", undefined), $std_core.Cons(_createOption("n", $std_core.Cons("name", $std_core.Nil), Req(setName, "USER"), "only show USER files", undefined), $std_core.Nil))));
function _createTestOptions(verbose0, version0, name0, output0, arguments0)  /* (verbose : ?bool, version : ?bool, name : ?string, output : ?string, arguments : ?list<string>) -> testOptions */  {
  var verbose_1098 = (verbose0 !== undefined) ? verbose0 : false;
  var version_1102 = (version0 !== undefined) ? version0 : false;
  var name_1106 = (name0 !== undefined) ? name0 : "";
  var output_1110 = (output0 !== undefined) ? output0 : "";
  var arguments_1115 = (arguments0 !== undefined) ? arguments0 : $std_core.Nil;
  return TestOptions(verbose_1098, version_1102, name_1106, output_1110, arguments_1115);
}
function $break(s, c)  /* (s : string, c : char) -> (string, string) */  {
  var parts = $std_core.list_4($std_core.split_2(s, (c), 2));
  return (parts != null && parts.tail != null) ? $std_core._tuple2_(parts.head, parts.tail.head) : $std_core._tuple2_(s, "");
}
function showLongArg(arg0)  /* forall<a> (arg : optionArg<a>) -> string */  {
  if (arg0._tag === 1) {
    return "";
  }
  else if (arg0._tag === 2) {
    return ("=" + arg0.help);
  }
  else {
    return ("[=" + (arg0.help + "]"));
  }
}
function showShortArg(arg0)  /* forall<a> (arg : optionArg<a>) -> string */  {
  if (arg0._tag === 1) {
    return "";
  }
  else if (arg0._tag === 2) {
    return ("<" + (arg0.help + ">"));
  }
  else {
    return ("[" + (arg0.help + "]"));
  }
}
function showFlag(flag)  /* forall<a> (flag : option<a>) -> list<(string, string, string)> */  {
  var short = $std_core.join_4($std_core.map_3($std_core.list_5(shortNames(flag)), function(c  /* char */ ) {  return ("-" + ((c) + showShortArg(arg_1(flag))));}), " ");
  var long = $std_core.join_4($std_core.map_3(longNames(flag), function(name0  /* string */ ) {  return ("--" + (name0 + showLongArg(arg_1(flag))));}), " ");
  var _x0 = $std_core.list_4($std_core.lines(help_1(flag)));
  if (_x0 != null) {
    return $std_core._plus__3($std_core.Cons($std_core._tuple3_(short, long, _x0.head), $std_core.Nil), $std_core.map_3(_x0.tail, function(s  /* string */ ) {  return $std_core._tuple3_("", "", s);}));
  }
  else {
    return $std_core.Cons($std_core._tuple3_(short, long, ""), $std_core.Nil);
  }
}
 
// Unzip a list of triples into three lists
function unzip3(xs)  /* forall<a,b,c> (xs : list<(a, b, c)>) -> (list<a>, list<b>, list<c>) */  {
  function iter(ys, acc1, acc2, acc3)  /* forall<a,b,c> (list<(a, b, c)>, list<a>, list<b>, list<c>) -> (list<a>, list<b>, list<c>) */  { tailcall: while(1)
  {
    if (ys != null) {
      {
        var _x0 = $std_core.Cons(ys.head.fst, acc1);
        var _x1 = $std_core.Cons(ys.head.snd, acc2);
        var _x2 = $std_core.Cons(ys.head.thd, acc3);
        ys = ys.tail;
        acc1 = _x0;
        acc2 = _x1;
        acc3 = _x2;
        continue tailcall;
      }
    }
    else {
      return $std_core._tuple3_($std_core.reverse(acc1), $std_core.reverse(acc2), $std_core.reverse(acc3));
    }
  }}
  return iter(xs, $std_core.Nil, $std_core.Nil, $std_core.Nil);
}
function zipWith3Acc(f, acc, xs, ys, zs)  /* forall<a,b,c,d,e> ((a, b, c) -> e d, list<d>, list<a>, list<b>, list<c>) -> e list<d> */  { tailcall: while(1)
{
  if (xs == null) {
    return $std_core.reverse(acc);
  }
  else {
    if (ys == null) {
      return $std_core.reverse(acc);
    }
    else {
      if (zs != null) {
        {
          var _x0 = $std_core.Cons(f(xs.head, ys.head, zs.head), acc);
          acc = _x0;
          xs = xs.tail;
          ys = ys.tail;
          zs = zs.tail;
          continue tailcall;
        }
      }
      else {
        return $std_core.reverse(acc);
      }
    }
  }
}}
function zipWith3(f, xs, ys, zs)  /* forall<a,b,c,d,e> (f : (a, b, c) -> e d, xs : list<a>, ys : list<b>, zs : list<c>) -> e list<d> */  {
  return zipWith3Acc(f, $std_core.Nil, xs, ys, zs);
}
 
// Return a nicely formatted string describing the usage of a command,
// consisting of a "header" followed by the descriptions of the "flags".
function usageInfo(flags, header)  /* forall<a> (flags : list<option<a>>, header : string) -> string */  {
  function flushLeft(s, width)  /* (s : string, width : int) -> string */  {
    var _x0 = (s).length >= width;
    if (_x0) {
      return s;
    }
    else {
      $std_core._unit_;
    }
    return (s + $std_core.string_3(((width - (s).length)|0), ' '));
  }
  function alignLeft(xs)  /* (xs : list<string>) -> list<string> */  {
    var n = $std_core.maximum($std_core.map_3(xs, function(s0  /* string */ ) {  return (s0).length;}));
    return $std_core.map_3(xs, function(s1  /* string */ ) {  return flushLeft(s1, n);});
  }
  function paste(x, y, z)  /* (x : string, y : string, z : string) -> string */  {
    return (" " + (x + ("  " + (y + ("  " + z)))));
  }
  var _x0 = unzip3($std_core.concat($std_core.map_3(flags, showFlag)));
  var table = zipWith3(paste, alignLeft(_x0.fst), alignLeft(_x0.snd), _x0.thd);
  return (header + ("\n" + $std_core.unlines($std_core.vector_4(table))));
}
function errorAmbiguous(applicable, opt)  /* forall<a,b> (applicable : list<option<a>>, opt : string) -> flagKind<b> */  {
  var header = ("option \"" + (opt + "\" is ambiguous. It could be one of:"));
  return Error(usageInfo(applicable, header));
}
function errorNegate(flagname)  /* forall<a> (flagname : string) -> flagKind<a> */  {
  return Error(("option \"--" + (flagname + "\" cannot be negated")));
}
function errorNoarg(opt)  /* forall<a> (opt : string) -> flagKind<a> */  {
  return Error(("option \"" + (opt + "\" does not take an argument")));
}
function errorRequired(help0, opt)  /* forall<a> (help : string, opt : string) -> flagKind<a> */  {
  return Error(("option \"" + (opt + ("\" requires an argument " + help0))));
}
function errorUnknownMessage(opt)  /* (opt : string) -> string */  {
  return ("unrecognized option \"" + (opt + "\""));
}
function errorUnknown(opt)  /* forall<a> (opt : string) -> flagKind<a> */  {
  return Error(errorUnknownMessage(opt));
}
function parseLong(s, flags)  /* forall<a> (s : string, flags : list<option<a>>) -> total flagKind<a> */  {
  var _x0 = $break(s, '=');
  var opt = ("--" + s);
  var flagname = $std_core.toLower(_x0.fst);
  var _x1 = ($std_core.startsWith(flagname, "no-") && (flagname).length > 3);
  var baseflagname = (_x1) ? ((flagname).substr(3)) : "";
  var lnames = $std_core.concat_1(flags, function(flag  /* option<4972> */ ) {  return llongNames(flag);});
  var exacts = $std_core.filter(flags, function(flag0  /* option<4972> */ ) {  return $std_core.any(llongNames(flag0), function(name0  /* string */ ) {  return ((name0 === flagname) || (name0 === baseflagname));});});
  var prefixes = $std_core.filter(flags, function(flag1  /* option<4972> */ ) {  return $std_core.any(llongNames(flag1), function(name1  /* string */ ) {  return ($std_core.startsWith(name1, flagname) || ((baseflagname !== "") && $std_core.startsWith(name1, baseflagname)));});});
  var applicable = ($std_core.isNil(exacts)) ? prefixes : exacts;
  if (applicable == null) {
    return errorUnknown(opt);
  }
  else if (applicable != null && applicable.tail != null) {
    return errorAmbiguous(applicable, opt);
  }
  else {
    var _x1 = arg_1(applicable.head);
    if (_x1._tag === 1) {
      if ((_x0.snd === "")) {
        return Flg(function(o  /* 4972 */ ) {
          return _x1.$default(o, (baseflagname === ""));
        });
      }
      else {
        var _x2 = ($std_core.toLower(_x0.snd) === "true");
        if (_x2) {
          return Flg(function(o0  /* 4972 */ ) {
            return _x1.$default(o0, true);
          });
        }
        else {
          var _x3 = ($std_core.toLower(_x0.snd) === "false");
          return (_x3) ? Flg(function(o1  /* 4972 */ ) {
            return _x1.$default(o1, false);
          }) : errorNoarg(opt);
        }
      }
    }
    else if (_x1._tag === 2) {
      if ((baseflagname !== "")) {
        return errorNegate(baseflagname);
      }
      else {
        var _x4 = (_x0.snd).length > 0;
        return (_x4) ? Flg(function(o2  /* 4972 */ ) {
          return _x1.parse(o2, _x0.snd);
        }) : errorRequired(_x1.help, opt);
      }
    }
    else {
      if ((baseflagname !== "")) {
        return errorNegate(baseflagname);
      }
      else {
        var _x5 = (_x0.snd).length > 0;
        return (_x5) ? Flg(function(o3  /* 4972 */ ) {
          return _x1.parse(o3, $std_core.Just(_x0.snd));
        }) : Flg(function(o4  /* 4972 */ ) {
          return _x1.parse(o4, $std_core.Nothing);
        });
      }
    }
  }
}
function parseShorts(s, flags)  /* forall<a> (s : string, flags : list<option<a>>) -> list<flagKind<a>> */  {
  var done = { value: false };
  var fs = $std_core.mapIndexed($std_core.list_5(s), function(i  /* int */ , c  /* char */ ) {  if (((done).value)) {  return $std_core.Nothing;} else {  $std_core._unit_;} var opt = ("-" + (c)); var applicable = $std_core.filter(flags, function(flag  /* option<5656> */ ) {  return ((shortNames(flag)).indexOf(c) >= 0);}); if (applicable == null) {  return $std_core.Just(errorUnknown(opt));} else if (applicable != null && applicable.tail != null) {  return $std_core.Just(errorAmbiguous(applicable, opt));} else {  var _x0 = arg_1(applicable.head); if (_x0._tag === 1) {  return $std_core.Just(Flg(function(o  /* 5656 */ ) {  return _x0.$default(o, true);}));} else if (_x0._tag === 2) {  var arg0 = ((s).substr(((i + 1)|0))); var _x1 = (arg0).length > 0; if (_x1) {  ((done).value = true); return $std_core.Just(Flg(function(o0  /* 5656 */ ) {  return _x0.parse(o0, arg0);}));} else {  return $std_core.Just(errorRequired(_x0.help, opt));}} else {  var arg1 = ((s).substr(((i + 1)|0))); var _x2 = (arg1).length > 0; if (_x2) {  ((done).value = true); return $std_core.Just(Flg(function(o1  /* 5656 */ ) {  return _x0.parse(o1, $std_core.Just(arg1));}));} else {  return $std_core.Just(Flg(function(o2  /* 5656 */ ) {  return _x0.parse(o2, $std_core.Nothing);}));}}}});
  return $std_core.concat($std_core.map_3(fs, $std_core.list_2));
}
function processNext(arg0, flags)  /* forall<a> (arg : string, flags : list<option<a>>) -> list<flagKind<a>> */  {
  if (("--" === arg0)) {
    return $std_core.Cons(End, $std_core.Nil);
  }
  else {
    if ($std_core.startsWith(arg0, "--")) {
      return $std_core.Cons(parseLong(((arg0).substr(2)), flags), $std_core.Nil);
    }
    else {
      var _x0 = ($std_core.startsWith(arg0, "-") && (arg0).length >= 2);
      if (_x0) {
        return parseShorts(((arg0).substr(1)), flags);
      }
      else {
        return $std_core.Cons(Arg(arg0), $std_core.Nil);
      }
    }
  }
}
 
// Parse the command line arguments "args" (see "std/env/argv")
// according to the flag descriptions "flags". Takes an optional argument
// "ordering" that specifies how flags are handled that follow nonFlag arguments.
// The default ordering is "Permute". Returns three lists: the list of parsed options,
// a list of nonOption arguments, and a list of potential error messages.
function parse(initial, flags, args, ordering)  /* forall<a> (initial : a, flags : list<option<a>>, args : list<string>, ordering : ?optionOrder<a>) -> total (a, list<string>, list<string>) */  {
  var ordering_5833 = (ordering !== undefined) ? ordering : Permute;
  var done = { value: false };
  var opts0 = $std_core.map_3(args, function(arg0  /* string */ ) {  if (((done).value)) {  var opts = $std_core.Cons(Arg(arg0), $std_core.Nil);} else {  var opts = processNext(arg0, flags);} $std_core.foreach(opts, function(opt  /* flagKind<6182> */ ) {  if (opt._tag === 3) {  return ((done).value = true);}if (opt._tag === 2) {  if (isPreorder(ordering_5833)){  return ((done).value = true);}} return $std_core._unit_;}); return opts;});
  return $std_core.foldl($std_core.concat(opts0), $std_core._tuple3_(initial, $std_core.Nil, $std_core.Nil), function(acc  /* (6182, list<string>, list<string>) */ , opt0  /* flagKind<6182> */ ) {  if (opt0._tag === 1) {  return $std_core._tuple3_(opt0.set(acc.fst), acc.snd, acc.thd);} else if (opt0._tag === 4) {  return $std_core._tuple3_(acc.fst, acc.snd, $std_core.Cons(errorUnknownMessage(opt0.arg), acc.thd));} else if (opt0._tag === 5) {  return $std_core._tuple3_(acc.fst, acc.snd, $std_core.Cons(opt0.msg, acc.thd));} else if (opt0._tag === 2) {  return $std_core._tuple3_(acc.fst, $std_core.Cons(opt0.arg, acc.snd), acc.thd);} else {  return $std_core._tuple3_(acc.fst, acc.snd, acc.thd);}});
}
function showOptions(o)  /* (o : testOptions) -> string */  {
  return ("{" + ($std_core.join_4($std_core.Cons(("verbose=" + $std_core.show_5(verbose(o))), $std_core.Cons(("version=" + $std_core.show_5(version(o))), $std_core.Cons(("name=" + $std_core.show_4(name(o))), $std_core.Cons(("output=" + $std_core.show_4(output(o))), $std_core.Cons(("arguments=" + $std_core.join_4($arguments(o), ",")), $std_core.Nil))))), ";") + "}"));
}
function test(cmdargs)  /* (cmdargs : list<string>) -> console () */  {
  var header = "usage:\n program [options] files\n\noptions:";
  var _x0 = parse(_createTestOptions(undefined, undefined, undefined, undefined, undefined), testOptions, cmdargs, undefined);
  if ($std_core.isNil(_x0.thd)) {
    $std_core.println("\nsuccess!");
    $std_core.println(("options: " + showOptions(_x0.fst)));
    $std_core.println(("arguments: " + $std_core.join_4(_x0.snd, " ")));
    if (version(_x0.fst)) {
      return $std_core.println(usageInfo(testOptions, header));
    }
    else {
      return $std_core._unit_;
    }
  }
  else {
    return $std_core.println(($std_core.join_4(_x0.thd, "\n") + ("\n" + usageInfo(testOptions, header))));
  }
}
 
// koka exports:
return { 'Flag': Flag, 'Req': Req, 'Opt': Opt, 'Option': Option, 'Permute': Permute, 'Preorder': Preorder, 'Wrap': Wrap, 'set': set, 'arg': arg, 'msg': msg, 'isFlg': isFlg, 'isArg': isArg, 'isEnd': isEnd, 'isUnknown': isUnknown, 'isError': isError, '$default': $default, 'help': help, 'isFlag': isFlag, 'isReq': isReq, 'isOpt': isOpt, 'shortNames': shortNames, 'longNames': longNames, 'arg_1': arg_1, 'help_1': help_1, 'llongNames': llongNames, '_copy': _copy, 'wrap': wrap, 'isPermute': isPermute, 'isPreorder': isPreorder, 'isWrap': isWrap, 'verbose': verbose, 'version': version, 'name': name, 'output': output, '$arguments': $arguments, '_copy_1': _copy_1, '_createOption': _createOption, 'setName': setName, 'setOutput': setOutput, 'setVerbose': setVerbose, 'setVersion': setVersion, 'testOptions': testOptions, '_createTestOptions': _createTestOptions, '$break': $break, 'showLongArg': showLongArg, 'showShortArg': showShortArg, 'showFlag': showFlag, 'unzip3': unzip3, 'zipWith3Acc': zipWith3Acc, 'zipWith3': zipWith3, 'usageInfo': usageInfo, 'errorAmbiguous': errorAmbiguous, 'errorNegate': errorNegate, 'errorNoarg': errorNoarg, 'errorRequired': errorRequired, 'errorUnknownMessage': errorUnknownMessage, 'errorUnknown': errorUnknown, 'parseLong': parseLong, 'parseShorts': parseShorts, 'processNext': processNext, 'parse': parse, 'showOptions': showOptions, 'test': test };
});