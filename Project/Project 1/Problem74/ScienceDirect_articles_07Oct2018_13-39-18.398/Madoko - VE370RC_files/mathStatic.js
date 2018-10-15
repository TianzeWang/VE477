// koka generated module: "mathStatic"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_string', './std_regex', './std_path', './std_dict', './common', './options', './latexFormatter', './storage', './mathParse'], function($std_core, $std_string, $std_regex, $std_path, $std_dict, $common, $options, $latexFormatter, $storage, $mathParse) {
"use strict";
 
// koka declarations:
function range(lo, n)  /* (lo : int, n : int) -> list<(int, int)> */  {
  if (lo <= 0) {
    return $std_core.Nil;
  }
  else {
    return $std_core.Cons($std_core._tuple2_(lo, ((lo + n)|0)), $std_core.Nil);
  }
}
function compress(pages, lo, n)  /* (pages : list<int>, lo : ?int, n : ?int) -> pages */  { tailcall: while(1)
{
  var lo_128 = (lo !== undefined) ? lo : $std_core._tilde_(1);
  var n_132 = (n !== undefined) ? n : 0;
  if (pages == null) {
    return range(lo_128, n_132);
  }
  else {
    var _x0 = pages.head === ((lo_128 + ((n_132 + 1)|0))|0);
    if (_x0) {
      {
        var _x1 = lo_128;
        var _x2 = ((n_132 + 1)|0);
        pages = pages.tail;
        lo = _x1;
        n = _x2;
        continue tailcall;
      }
    }
    else {
      return $std_core._plus__3(range(lo_128, n_132), compress(pages.tail, pages.head, 0));
    }
  }
}}
function concurrent(tasks, $continue)  /* (tasks : list<(cont : (int) -> io ()) -> io ()>, continue : (int) -> io ()) -> io () */  {
  if ($std_core.isNil(tasks)) {
    return $continue(0);
  }
  else {
    $std_core._unit_;
  }
  var count0 = { value: $std_core.length_3(tasks) };
  var lasterr = { value: 0 };
  function taskContinue(err)  /* (err : int) -> io () */  {
    ((count0).value = ((((count0).value) - 1)|0));
    (err !== 0) ? ((lasterr).value = err) : $std_core._unit_;
    var _x0 = ((count0).value) <= 0;
    if (_x0) {
      return $continue(((lasterr).value));
    }
    else {
      return $std_core._unit_;
    }
  }
  return $std_core.foreach(tasks, function(task  /* (cont : (int) -> io ()) -> io () */ ) {  return $std_core.onFail(function() {  return ((count0).value = ((((count0).value) - 1)|0));}, function() {  return task(taskContinue);});});
}
function count(ps)  /* (ps : pages) -> int */  {
  return $std_core.foldl(ps, 0, function(n  /* int */ , p  /* (int, int) */ ) {  return ((n + (($std_core.snd(p) - (($std_core.fst(p) + 1)|0))|0))|0);});
}
var rxHdr = $std_regex.regex("^.*\\n", undefined, undefined);
function getHeader(src)  /* (src : string) -> string */  {
  var _x0 = $std_regex.find(src, rxHdr, undefined);
  return (_x0 != null) ? $std_regex.matched(_x0.unJust) : "";
}
function inside(page, pages)  /* (page : int, pages : pages) -> bool */  {
  if (pages == null) {
    return false;
  }
  else {
    return ((pages.head.fst <= page && page <= pages.head.snd) || inside(page, pages.tail));
  }
}
function mathAnalyseChanged(snippets, dim, rebuild)  /* (snippets : string, dim : std/dict/dict<common/mathinfo>, rebuild : bool) -> pages */  {
  var digests = $std_core.mapIndexed($std_core.list_4($std_regex.findAll(snippets, $mathParse.rxDigest, undefined)), function(idx  /* int */ , cap  /* std/regex/matched */ ) {  return $std_core._tuple2_(((idx + 1)|0), $std_regex._index_($std_regex.groups(cap), 1));});
  var maxPage = $std_core.length_3(digests);
  var pages = $std_core.concat_1(digests, function(idigest  /* (int, string) */ ) {  var _x0 = $std_dict._lb__rb__2(dim, idigest.snd); if (_x0 != null) {  if (!(rebuild)){  return $std_core.Nil;}} return $std_core.Cons(idigest.fst, $std_core.Nil);});
  return compress(pages, undefined, undefined);
}
function mathHeader(xopts, mode)  /* (xopts : options/options, mode : common/mathkind) -> string */  {
  var mrender = $options.getMathRender($options.math(xopts), mode);
  var _x0 = ($common.isPlain(mode)) ? $options.getMathLatex(xopts) : $options.getMathLatexFull(xopts);
  if (mrender === 2) {
    var _x1 = $std_core.Cons(("MathSvgFontFormat: " + $std_core.show_4($options.svgFontFormat($options.math(xopts)))), $std_core.Cons(("MathSvgSharePaths: " + $std_core.show_5($options.svgShare($options.math(xopts)))), $std_core.Cons(("MathSvgPrecision: " + $std_core.show_1($options.svgPrec($options.math(xopts)))), $std_core.Cons(("Dvisvg: " + $options.dvisvg($options.math(xopts))), $std_core.Nil))));
  }
  else {
    var _x1 = $std_core.Cons(("Dvipng: " + $options.dvipng($options.math(xopts))), $std_core.Cons(("Convert: " + $options.convert($options.math(xopts))), $std_core.Cons(("Dvips: " + $options.dvips($options.math(xopts))), $std_core.Cons(("Ps2pdf: " + $options.ps2pdf($options.math(xopts))), $std_core.Nil))));
  }
  var deps = $std_core._plus__3($std_core.Cons(("% MathMode: " + $common.show_3(mode)), $std_core.Cons(("MathRender: " + $common.show_2(mrender)), $std_core.Cons(("MathDpi: " + $std_core.show_1($options.dpi($options.math(xopts)))), $std_core.Cons(("MathEmbedLimit: " + $std_core.show_1($options.embedLimit($options.math(xopts)))), $std_core.Cons(("MathScale: " + $std_core.show_1($options.getMathScale($options.math(xopts), mrender))), $std_core.Cons(("MathBaseline: " + $std_core.show_1($options.baseline($options.math(xopts)))), $std_core.Cons(("MathDocClass: " + $options.docClass($options.math(xopts))), $std_core.Cons(("MathImgDir: " + $options.imgDir($options.math(xopts))), $std_core.Cons(("MathLatex: " + _x0), $std_core.Nil))))))))), _x1);
  return ($std_core.join_4(deps, ", ") + "\n");
}
function mathContent(xopts, mode, body)  /* (xopts : options/options, mode : common/mathkind, body : ?string) -> string */  {
  var body_3979 = (body !== undefined) ? body : "";
  var _x0 = ($options.docClass($options.math(xopts)) !== "");
  if (_x0) {
    var opts = $options._copy_1(xopts, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options.docClass($options.math(xopts)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  }
  else {
    var opts = xopts;
  }
  var xbody = ("\\begin{mdSnippets}\n" + (body_3979 + "\n\\end{mdSnippets}"));
  return (mathHeader(opts, mode) + $latexFormatter.fmtLatexMathFull(mode, xbody, opts));
}
function mathFormat(xopts, mode, math, outName)  /* (xopts : options/options, mode : common/mathkind, math : string, outName : string) -> (string, string, string) */  {
  var texName = $std_path.changeExt($std_path.appendStem(outName, ("-math-" + $common.show_3(mode))), ".tex");
  var texFinalName = $std_path.changeExt(texName, ".final.tex");
  return $std_core._tuple3_(texName, texFinalName, mathContent(xopts, mode, math));
}
function mathStatic(mathPlain, mathFull, inName, outName, xopts, content, runMathStatic, $continue)  /* (mathPlain : string, mathFull : string, inName : string, outName : string, xopts : options/options, content : string, runMathStatic : runMathStaticFun, continue : (maybe<(std/dict/dict<common/mathinfo>, string)>) -> io ()) -> io () */  {
  var _x0 = mathFormat(xopts, $common.Plain, mathPlain, outName);
  var _x1 = mathFormat(xopts, $common.Full, mathFull, outName);
  var oldMathPlain = $storage.readTextFileDef(_x0.snd, mathContent(xopts, $common.Plain, ""), true);
  var oldMathFull = $storage.readTextFileDef(_x1.snd, mathContent(xopts, $common.Full, ""), true);
  var dimxName = $std_path.changeExt(inName, ".dimx");
  var _x2 = ($storage.fexistsSync(dimxName) && ((_x0.thd === oldMathPlain) && ((_x1.thd === oldMathFull) && !($options.rebuild(xopts)))));
  if (_x2) {
    return $continue($std_core.Nothing);
  }
  else {
    $std_core._unit_;
  }
  $options.print(xopts, "rendering math.", undefined);
  var _x2 = (((_x0.thd !== oldMathPlain) || ($options.rebuild(xopts) || !($storage.fexistsSync(_x0.fst)))) && !($storage.tryWriteTextFile(_x0.fst, _x0.thd)));
  if (_x2) {
    $options.printErr(xopts, ("error: unable to write: " + _x0.fst), undefined);
    return $continue($std_core.Nothing);
  }
  else {
    $std_core._unit_;
  }
  var _x2 = (((_x1.thd !== oldMathFull) || ($options.rebuild(xopts) || !($storage.fexistsSync(_x1.fst)))) && !($storage.tryWriteTextFile(_x1.fst, _x1.thd)));
  if (_x2) {
    $options.printErr(xopts, ("error: unable to write: " + _x1.fst), undefined);
    return $continue($std_core.Nothing);
  }
  else {
    $std_core._unit_;
  }
  var rebuildPlain = ($mathParse.unsnippet(oldMathPlain, "old plain") !== $mathParse.unsnippet(_x0.thd, "new plain"));
  var rebuildFull = ($mathParse.unsnippet(oldMathFull, "old full") !== $mathParse.unsnippet(_x1.thd, "new full"));
  var plainPages = mathAnalyseChanged(_x0.thd, $options.dim($options.math(xopts)), ($options.rebuild(xopts) || rebuildPlain));
  var fullPages = mathAnalyseChanged(_x1.thd, $options.dim($options.math(xopts)), ($options.rebuild(xopts) || rebuildFull));
  var _x2 = $options.verbose(xopts) >= 1;
  if (_x2) {
    var _x3 = ($std_core.isNil(plainPages) && $mathParse.containsSnippet(mathPlain));
    (_x3) ? $options.print(xopts, "math unchanged (plain)", undefined) : $std_core._unit_;
    var _x3 = ($std_core.isNil(fullPages) && $mathParse.containsSnippet(mathFull));
    (_x3) ? $options.print(xopts, "math unchanged (full)", undefined) : $std_core._unit_;
  }
  else {
    $std_core._unit_;
  }
  var _x2 = ($std_core.isNil(plainPages) && $std_core.isNil(fullPages));
  if (_x2) {
    $storage.tryRename(_x0.fst, _x0.snd);
    $storage.tryRename(_x1.fst, _x1.snd);
    return $continue($std_core.Nothing);
  }
  else {
    $std_core._unit_;
  }
  return runMathStatic(content, inName, outName, _x0.fst, _x1.fst, plainPages, fullPages, oldMathPlain, oldMathFull, xopts, $continue);
}
 
// koka exports:
return { 'range': range, 'compress': compress, 'concurrent': concurrent, 'count': count, 'rxHdr': rxHdr, 'getHeader': getHeader, 'inside': inside, 'mathAnalyseChanged': mathAnalyseChanged, 'mathHeader': mathHeader, 'mathContent': mathContent, 'mathFormat': mathFormat, 'mathStatic': mathStatic };
});