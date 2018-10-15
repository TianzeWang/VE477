// koka generated module: "driver"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_log', './std_regex', './std_path', './std_dict', './std_date', './std_string', './common', './options', './metadata', './madoko', './block', './storage', './hilite', './mathParse', './mathStatic', './texParser', './includes', './bibliography'], function($std_core, $std_log, $std_regex, $std_path, $std_dict, $std_date, $std_string, $common, $options, $metadata, $madoko, $block, $storage, $hilite, $mathParse, $mathStatic, $texParser, $includes, $bibliography) {
"use strict";
 
// koka declarations:
function Runners(runPdfLatex, runBibtex, runMathStatic, runZip)  /* (runPdfLatex : (srcFile : string, texFile : string, opts : options/options, content : string, continue : (int) -> io ()) -> io (), runBibtex : (bibFiles : list<string>, opts : options/options, continue : (bool) -> io ()) -> io (), runMathStatic : mathStatic/runMathStaticFun, runZip : (files : list<string>, zipFile : string, opts : options/options, continue : (bool) -> io ()) -> io ()) -> runners */  {
  return { runPdfLatex: runPdfLatex, runBibtex: runBibtex, runMathStatic: runMathStatic, runZip: runZip };
}
 
// Automatically generated. Retrieves the `runPdfLatex` constructor field of the ":runners" type.
function runPdfLatex(runners)  /* (runners : runners) -> ((srcFile : string, texFile : string, opts : options/options, content : string, continue : (int) -> io ()) -> io ()) */  {
  return runners.runPdfLatex;
}
 
// Automatically generated. Retrieves the `runBibtex` constructor field of the ":runners" type.
function runBibtex(runners)  /* (runners : runners) -> ((bibFiles : list<string>, opts : options/options, continue : (bool) -> io ()) -> io ()) */  {
  return runners.runBibtex;
}
 
// Automatically generated. Retrieves the `runMathStatic` constructor field of the ":runners" type.
function runMathStatic(runners)  /* (runners : runners) -> mathStatic/runMathStaticFun */  {
  return runners.runMathStatic;
}
 
// Automatically generated. Retrieves the `runZip` constructor field of the ":runners" type.
function runZip(runners)  /* (runners : runners) -> ((files : list<string>, zipFile : string, opts : options/options, continue : (bool) -> io ()) -> io ()) */  {
  return runners.runZip;
}
function _copy(_this, runPdfLatex0, runBibtex0, runMathStatic0, runZip0)  /* (runners, runPdfLatex : ?(srcFile : string, texFile : string, opts : options/options, content : string, continue : (int) -> io ()) -> io (), runBibtex : ?(bibFiles : list<string>, opts : options/options, continue : (bool) -> io ()) -> io (), runMathStatic : ?mathStatic/runMathStaticFun, runZip : ?(files : list<string>, zipFile : string, opts : options/options, continue : (bool) -> io ()) -> io ()) -> runners */  {
  var runPdfLatex_91 = (runPdfLatex0 !== undefined) ? runPdfLatex0 : runPdfLatex(_this);
  var runBibtex_98 = (runBibtex0 !== undefined) ? runBibtex0 : runBibtex(_this);
  var runMathStatic_105 = (runMathStatic0 !== undefined) ? runMathStatic0 : runMathStatic(_this);
  var runZip_112 = (runZip0 !== undefined) ? runZip0 : runZip(_this);
  return Runners(runPdfLatex_91, runBibtex_98, runMathStatic_105, runZip_112);
}
var standardTexStyles = $std_core.Cons("ellipse.sty", $std_core.Cons("options.sty", $std_core.Cons("longbox.sty", $std_core.Cons("longfbox.sty", $std_core.Cons("madoko2.sty", $std_core.Nil)))));
 
// Create a Tex zip
function createTexZip(inName, outTexName, refers, mopts, runners, cont)  /* (inName : string, outTexName : string, refers : list<string>, mopts : options/options, runners : runners, cont : (bool) -> io ()) -> io () */  {
  var namesRefer = $std_core.map_3(refers, function(fname  /* string */ ) {  var _x0 = ((fname !== "") && ($common.relative(fname) && ($std_path.extname(fname) !== ".bib"))); if (_x0) {  var outName = $std_path.normalize($std_path.combine($std_path.dirname(outTexName), fname)); if ((outName !== fname)) {  $std_core.trace(("refer: " + (fname + (" to " + outName)))); $storage.mkdirp($std_path.dirname(outName), undefined); $storage.copyFile(fname, outName); return $std_core.Just(outName);} else {  return $std_core.Nothing;}} else {  return $std_core.Nothing;}});
  var names = $std_core._plus__3($std_core.Cons(outTexName, $std_core.Cons($std_path.changeExt(outTexName, ".pdf"), $std_core.Nil)), $std_core._plus__3(standardTexStyles, $std_core._plus__3($std_core.concatMaybe(namesRefer), $std_core.Cons($std_path.changeExt(outTexName, ".bbl"), $std_core.Nil))));
  return runZip(runners)(names, $std_path.changeExt(outTexName, ".zip"), mopts, cont);
}
var rxXmp = $std_regex.regex("<xmp\\b.*?>([\\s\\S]*?)</xmp>", undefined, undefined);
function extractFirstXmp(s)  /* (s : string) -> string */  {
  var _x0 = $std_regex.find(s, rxXmp, undefined);
  if (_x0 == null) {
    return "";
  }
  else {
    return $std_regex._index_($std_regex.groups(_x0.unJust), 1);
  }
}
var rxLocation = $std_regex.regex("^\\s*location:(.*)", true, undefined);
var rxWarning = $std_regex.regex("^(\\s*(?:error|warning):)(.*)", true, undefined);
 
// Fixup locations in warnings:
function fixWarnings(txt)  /* (txt : string) -> string */  {
  var location = { value: "" };
  var hist = $std_dict.mdict();
  var ls = $std_core.map_3($std_core.list_4($std_core.lines(txt)), function(line  /* string */ ) {  var _x0 = $std_regex.find(line, rxLocation, undefined); if (_x0 == null) {  var _x1 = $std_regex.find(line, rxWarning, undefined); if (_x1 == null) {  return $std_core.Just((line + "\n"));} else {  var count = $std_core.mbint($std_dict._lb__rb__1(hist, line)); (hist)[line] = ((count + 1)|0); if (count === 4) {  return $std_core.Just(("warning: " + (((location).value) + (" ignoring from now on:" + (line + "\n")))));} else {  if (count > 4) {  return $std_core.Nothing;} else {  return $std_core.Just(($std_regex._index_($std_regex.groups(_x1.unJust), 1) + (((location).value) + ($std_regex._index_($std_regex.groups(_x1.unJust), 2) + "\n"))));}}}} else {  ((location).value = ($std_regex._index_($std_regex.groups(_x0.unJust), 1) + ":")); return $std_core.Nothing;}});
  return $std_core.join_3($std_core.concatMaybe(ls));
}
function outputName(inputName, options)  /* (inputName : string, options : options/commandOptions) -> string */  {
  if ($std_core.endsWith(inputName, ".xmp.html")) {
    var noextName = $std_core.substr_1(inputName, 0, (((inputName).length - 9)|0));
  }
  else {
    var noextName = $std_path.noext(inputName);
  }
  var outName = ($options.convertTex(options)) ? (inputName + ".mdk") : (noextName + ".html");
  var _x0 = ($options.outputDir(options) === "");
  if (_x0) {
    return outName;
  }
  else {
    return ($options.outputDir(options) + ("/" + $std_path.basename(outName)));
  }
}
var rxDataLinesPre = $std_regex.regex("(?:\r?\n%mdk-data-line=.*(?=\r?\n%mdk-data-line))+", undefined, undefined);
function withLogCompress(name, action)  /* forall<a,e> (name : string, action : () -> <ndet|e> a) -> <ndet|e> (string, a) */  {
  var _x0 = $std_log.withLog(name, action);
  return $std_core._tuple2_($std_regex.replaceAll_1(_x0.fst, rxDataLinesPre, "", undefined), _x0.snd);
}
function $process(inName, outName, searchDirs, content, icontent, xopts0, mopts, firstTime, runners, redo, $continue)  /* (inName : string, outName : string, searchDirs : list<string>, content : string, icontent : string, xopts0 : options/options, mopts : options/options, firstTime : bool, runners : runners, redo : () -> io (), continue : (string) -> io ()) -> io () */  {
  function embedFiles(opts, files, html0)  /* (opts : options/options, files : list<string>, html0 : string) -> io (options/options, string) */  {
    var _x0 = $std_core.length_3(files) === 0;
    if (_x0) {
      return $std_core._tuple2_(opts, html0);
    }
    else {
      $std_core._unit_;
    }
    var infos = $std_core.concat_1(files, function(fname  /* string */ ) {  var mime = $common.mimeFromExt(fname); if ($std_core.startsWith(mime, "text/")) {  var data = $includes.searchReadTextFileDef(fname, "", searchDirs, "", false);} else {  if ($std_core.startsWith(mime, "image/")) {  var img = $storage.readBase64FileDef($std_path.combine($std_path.dirname(inName), fname), "", false); if ((img !== "")) {  var data = ("data:" + (mime + (";base64," + img)));} else {  var data = img;}} else {  var data = "";}} var _x0 = ((data !== "") && (data).length > $options.embedLimit_1(mopts)); if (_x0) {  var newName = $std_path.combine($std_path.dirname(outName), fname); var _x1 = ($std_path.normalize(newName) !== $std_path.normalize(fname)); if (_x1) {  $storage.mkdirp($std_path.dirname(newName), undefined); if ($std_core.startsWith(mime, "text/")) {  $storage.tryWriteTextFile(newName, data);} else {  $storage.tryWriteBase64File(newName, $std_regex.replace_1(data, $std_regex.regex("^data:[^;]*;base64,", undefined, undefined), "", undefined));} $std_core._unit_;} else {  $std_core._unit_;}} else {  $std_core._unit_;} var _x0 = ((data !== "") && (data).length < $options.embedLimit_1(mopts)); if (_x0) {  return $std_core.Cons($std_core._tuple2_(fname, $common.Embedinfo(fname, data)), $std_core.Nil);} else {  var _x1 = ((fname !== "") && $options.embedLimit_1(mopts) > 0); if (_x1) {  var _x3 = (data).length > 0; var _x2 = (_x3) ? " (too large)" : " (does not exist)"; $options.printErr(mopts, ("warning: unable to embed: " + (fname + _x2)), undefined);} else {  $std_core._unit_;} return $std_core.Nil;}});
    var _x0 = $std_core.length_3(infos) === 0;
    if (_x0) {
      return $std_core._tuple2_(opts, html0);
    }
    else {
      $std_core._unit_;
    }
    var newopts = $options._copy_1(opts, undefined, undefined, $std_core.min($options.verbose(opts), 1), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $std_dict._plus_($options.embedinfos(opts), $std_dict.dict_1(infos)), undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    var newhtml = $std_core.fst($madoko.markdown(icontent, newopts, undefined));
    return $std_core._tuple2_(newopts, newhtml);
  }
  function genTexZip(outTexName, refers)  /* (outTexName : string, refers : list<string>) -> io () */  {
    return ($options.texzip(mopts)) ? createTexZip(inName, outTexName, refers, mopts, runners, function(err  /* bool */ ) {  return $std_core._unit_;}) : $std_core._unit_;
  }
  function genPdf(outTexName0, refers0)  /* (outTexName : string, refers : list<string>) -> io () */  {
    if ($options.pdf(mopts)) {
      return runPdfLatex(runners)(inName, outTexName0, mopts, content, function(err0  /* int */ ) {  return (err0 === 0) ? genTexZip(outTexName0, refers0) : $std_core._unit_;});
    }
    else {
      return $std_core._unit_;
    }
  }
  function phaseHtml()  /* () -> io () */  {
    var _x0 = $std_log.withLog("embed", function() {  return withLogCompress("math-plain", function() {  return withLogCompress("math-full", function() {  return withLogCompress("warning", function() {  return withLogCompress("aux", function() {  return $madoko.markdown(icontent, xopts0, undefined);});});});});});
    var _x1 = ((_x0.snd.snd.snd.snd.fst === "") || !(((_x0.snd.snd.snd.snd.fst).indexOf("\\citation{") >= 0)));
    if (_x1) {
      var bibChanged = $std_core.Nil;
    }
    else {
      var bibChanged = $bibliography.writeCitationsData(_x0.snd.snd.snd.snd.fst, outName, searchDirs, $common.splitPaths($options.bib(mopts)), mopts);
    }
    var _x1 = (!($std_core.isNil(bibChanged)) && (firstTime && ($options.bibtex(mopts) !== "")));
    if (_x1) {
      var _x2 = $std_core.bool_2($options.bib(mopts));
      if (_x2) {
        return $bibliography.genBibtex(runBibtex(runners), bibChanged, $std_path.dirname(outName), searchDirs, mopts, function(err1  /* bool */ ) {  return redo();});
      }
      else {
        $options.printErr(mopts, "warning: found citations but no bibliography file is specified.\n Hint: specify \'Bibliography: <myfile>.bib\' in the metadata.", undefined);
        return redo();
      }
    }
    else {
      var _x3 = embedFiles(xopts0, $std_core.list_4($std_core.split_1(_x0.fst, "\n")), _x0.snd.snd.snd.snd.snd.fst);
      var _x4 = !($storage.tryWriteTextFile(outName, _x3.snd));
      if (_x4) {
        $options.printErr(mopts, ("error: unable to write: " + outName), undefined);
      }
      else {
        $std_core._unit_;
      }
      var warns = fixWarnings(_x0.snd.snd.snd.fst);
      if ((warns !== "")) {
        $std_log.log("stdout", warns);
        var _x4 = $options.verbose(mopts) >= 1;
        (_x4) ? $std_core.print(warns) : $std_core._unit_;
      }
      else {
        $std_core._unit_;
      }
      var outTexName1 = $std_path.changeExt(outName, ".tex");
      var _x4 = !($options.tex(mopts));
      if (_x4) {
        var texRefers = $std_core.Nil;
      }
      else {
        var _x5 = $options.verbose(mopts) >= 1;
        if (_x5) {
          $std_core.println(("process: " + (inName + (" -> " + outTexName1))));
        }
        else {
          $std_core._unit_;
        }
        var _x5 = $std_log.withLog("texwarning", function() {  return $std_log.withLog("files", function() {  return $std_log.withLog("filesRefer", function() {  return $std_core.fst($madoko.markdown(icontent, _x3.fst, $common.FmtTex));});});});
        if ((_x5.fst !== "")) {
          $std_log.log("stdout", _x5.fst);
          var _x6 = $options.verbose(mopts) >= 1;
          (_x6) ? $std_core.print(_x5.fst) : $std_core._unit_;
        }
        else {
          $std_core._unit_;
        }
        var _x6 = !($storage.tryWriteTextFile(outTexName1, _x5.snd.snd.snd));
        if (_x6) {
          $options.printErr(mopts, ("error: unable to write: " + outTexName1), undefined);
        }
        else {
          $std_core._unit_;
        }
        var texRefers = $std_core._plus__3($std_core.list_4($std_core.split_1(_x5.snd.fst, "\n")), $std_core.list_4($std_core.split_1(_x5.snd.snd.fst, "\n")));
      }
      var _x4 = (($mathParse.containsSnippet(_x0.snd.fst) && $options.isStatic($options.mode($options.math(mopts)))) || $mathParse.containsSnippet(_x0.snd.snd.fst));
      if (_x4) {
        var _x5 = ($options.verbose(mopts) >= 2 && ($options.isDynamic($options.mode($options.math(mopts))) && $mathParse.containsSnippet(_x0.snd.snd.fst)));
        if (_x5) {
          $options.print(mopts, "warning: dynamic math mode but some math requires pdf", 2);
        }
        else {
          $std_core._unit_;
        }
        $mathStatic.mathStatic(_x0.snd.fst, _x0.snd.snd.fst, inName, outName, mopts, content, runMathStatic(runners), function(mbmres  /* maybe<(std/dict/dict<common/mathinfo>, string)> */ ) {  if (mbmres != null) {  $options.print(mopts, "re-aligning math in HTML.", undefined); var html2 = $std_core.fst($madoko.markdown(icontent, $options._copy_1(_x3.fst, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(_x3.fst), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, mbmres.unJust.snd, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, mbmres.unJust.fst), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined)); var _x5 = !($storage.tryWriteTextFile(outName, html2)); if (_x5) {  $options.printErr(mopts, ("error: unable to write: " + outName), undefined);} else {  $std_core._unit_;}} else {  $std_core._unit_;} return genPdf(outTexName1, texRefers);});
      }
      else {
        genPdf(outTexName1, texRefers);
      }
      return $continue(_x3.snd);
    }
  }
  return phaseHtml();
}
 
// Register colorizers
function registerColorizers(opts, searchDirs, content)  /* (opts : options/options, searchDirs : list<string>, content : string) -> io () */  {
  var searchDirsEx = $std_core.concat_1(searchDirs, function(dir  /* string */ ) {  return $std_core.Cons(dir, $std_core.Cons($std_path.combine(dir, "lang"), $std_core.Nil));});
  var registered = $std_dict.mdict();
  var langs1 = $std_core.list_4($std_core.split_1($options.hilitelang(opts), ";"));
  var langs2 = $std_core.map_3($std_core.list_4($std_regex.findAll(content, $std_regex.regex("(?:^ *```+ *|\\blanguage\\s*[:=])([\\w\\-\\/]+)\\b", undefined, true), undefined)), function(cap  /* std/regex/matched */ ) {  return $std_path.basename($std_regex._index_($std_regex.groups(cap), 1));});
  var langs = $std_core.map_3($std_core._plus__3(langs1, langs2), $std_core.toLower);
  return $std_core.foreach(langs, function(lang  /* string */ ) {  var _x0 = $std_dict._lb__rb__1(registered, lang); if (_x0 != null) {  return $std_core._unit_;} else {  (registered)[lang] = true; if ((lang !== "")) {  var _x1 = $includes.trySearchReadTextFile(lang, searchDirsEx, ".json", undefined); if (_x1 == null) {  $std_log.log("files", $std_path.changeExt(lang, ".json")); return $options.printErr(opts, ("warning: unable to read language definition: " + lang), undefined);} else {  var langName = $std_core.toLower($std_path.noext($std_path.basename(lang))); return $hilite.registerLanguage(langName, _x1.unJust.snd);}} else {  return $std_core._unit_;}}});
}
var rxMadokoComment = $std_regex.regex("^<!--madoko[ \\t\\r]*\\n([\\s\\S]*?)^-->[ \\t\\r]*\\n", true, true);
 
// Remove <!--madoko comments
function removeMadokoComments(txt)  /* (txt : string) -> string */  {
  return $std_regex.replaceAll_1(txt, rxMadokoComment, "\n$1\n", undefined);
}
function tryCopyTextFileFromNoSandboxTo(fname, srcDir, outDir)  /* (fname : string, srcDir : string, outDir : string) -> <st<global>,ui,div,net,console,file,ndet> () */  {
  var inName = $std_path.combine(srcDir, fname);
  var outName = $std_path.combine(outDir, fname);
  return $std_core.$catch(function() {  var txt = $storage.readTextFileNoSandbox(inName); $storage.tryWriteTextFile(outName, txt); return $std_core._unit_;}, function(exn  /* exception */ ) {  return $std_core._unit_;});
}
function processContent(inName, outName, content, opts, firstTime, runners, $continue)  /* (inName : string, outName : string, content : string, opts : options/commandOptions, firstTime : ?bool, runners : runners, continue : (output : string, inputName : string, outputName : string, options : options/options) -> io ()) -> io () */  {
  var firstTime_7813 = (firstTime !== undefined) ? firstTime : false;
  var _x0 = $options.sandbox($options.options(opts));
  (_x0) ? $storage.enforceSandbox(undefined) : $std_core._unit_;
  if ($options.convertTex(opts)) {
    var output = $texParser.parseTex(content, undefined, undefined, undefined, undefined, false);
    $storage.writeTextFileSync(outName, output);
    return $continue(output, inName, outName, $options.options(opts));
  }
  else {
    $std_core._unit_;
  }
  var styleDir = ($options.installDir(opts) + "/../styles");
  var searchDirs = $std_core.Cons($std_path.dirname(inName), $std_core.Cons($std_path.dirname(outName), $std_core.Cons(styleDir, $std_core.Nil)));
  var _x0 = ($std_core.endsWith(inName, ".xmp.html") || $std_core.endsWith(inName, ".xmp"));
  if (_x0) {
    var arg_8171 = $options.options(opts);
    var arg_8178 = true;
    var arg_8179 = $std_core.maybe($options.full($options.options(opts)), $std_core.Just(false), $std_core.Just);
    var arg_8172 = undefined;
    var arg_8173 = undefined;
    var arg_8174 = undefined;
    var arg_8175 = undefined;
    var arg_8176 = undefined;
    var arg_8177 = undefined;
    var arg_8180 = undefined;
    var arg_8181 = undefined;
    var arg_8182 = undefined;
    var arg_8183 = undefined;
    var arg_8184 = undefined;
    var arg_8185 = undefined;
    var arg_8186 = undefined;
    var arg_8187 = undefined;
    var arg_8188 = undefined;
    var arg_8189 = undefined;
    var arg_8190 = undefined;
    var arg_8191 = undefined;
    var arg_8192 = undefined;
    var arg_8193 = undefined;
    var arg_8194 = undefined;
    var arg_8195 = undefined;
    var arg_8196 = undefined;
    var arg_8197 = undefined;
    var arg_8198 = undefined;
    var arg_8199 = undefined;
    var arg_8200 = undefined;
    var arg_8201 = undefined;
    var arg_8202 = undefined;
    var arg_8203 = undefined;
    var arg_8204 = undefined;
    var arg_8205 = undefined;
    var arg_8206 = undefined;
    var arg_8207 = undefined;
    var arg_8208 = undefined;
    var arg_8209 = undefined;
    var arg_8210 = undefined;
    var arg_8211 = undefined;
    var arg_8212 = undefined;
    var arg_8213 = undefined;
    var arg_8214 = undefined;
    var arg_8215 = undefined;
    var arg_8216 = undefined;
    var arg_8217 = undefined;
    var arg_8218 = undefined;
    var arg_8219 = undefined;
    var arg_8220 = undefined;
    var arg_8221 = undefined;
    var arg_8222 = undefined;
    var arg_8223 = undefined;
    var arg_8224 = undefined;
    var arg_8225 = undefined;
    var arg_8226 = undefined;
    var arg_8227 = undefined;
    var arg_8228 = undefined;
    var arg_8229 = undefined;
    var arg_8230 = undefined;
    var arg_8231 = undefined;
    var arg_8232 = undefined;
    var arg_8233 = undefined;
    var arg_8234 = undefined;
    var opts0 = $options._copy_1(arg_8171, arg_8172, arg_8173, arg_8174, arg_8175, arg_8176, arg_8177, arg_8178, arg_8179, arg_8180, arg_8181, arg_8182, arg_8183, arg_8184, arg_8185, arg_8186, arg_8187, arg_8188, arg_8189, arg_8190, arg_8191, arg_8192, arg_8193, arg_8194, arg_8195, arg_8196, arg_8197, arg_8198, arg_8199, arg_8200, arg_8201, arg_8202, arg_8203, arg_8204, arg_8205, arg_8206, arg_8207, arg_8208, arg_8209, arg_8210, arg_8211, arg_8212, arg_8213, arg_8214, arg_8215, arg_8216, arg_8217, arg_8218, arg_8219, arg_8220, arg_8221, arg_8222, arg_8223, arg_8224, arg_8225, arg_8226, arg_8227, arg_8228, arg_8229, arg_8230, arg_8231, arg_8232, arg_8233, arg_8234);
  }
  else {
    var opts0 = $options.options(opts);
  }
  return $includes.include(content, false, inName, outName, searchDirs, opts0, function(icontent0  /* string */ , lmap  /* common/lineMap */ ) {  var icontent = removeMadokoComments(icontent0); var date = $std_date.now(); var arg_8775 = opts0;var arg_8836 = lmap;var _x0 = ($options.sandbox(opts0)) ? 60000 : $options.processTimeout(opts0); var arg_8828 = _x0;var arg_8830 = $std_core._plus__3($options.metadata(opts0), $std_core._plus__3($std_core.Cons($std_core._tuple2_("docname", $std_path.stemname(inName)), $std_core.Cons($std_core._tuple2_("filename", inName), $std_core.Nil)), $std_core._plus__3($std_core.Cons($std_core._tuple2_("madoko-version", $options.version(opts0)), $std_core.Nil), $std_core.Cons($std_core._tuple2_("date", $std_date.isoLocalDate(date)), $std_core.Cons($std_core._tuple2_("time", $std_core.substr_1($std_date.isoLocalTime(date), 0, 5)), $std_core.Cons($std_core._tuple2_("year", $std_core.show_1($std_date.year(date))), $std_core.Cons($std_core._tuple2_("month", $std_date.show2($std_date.month(date))), $std_core.Cons($std_core._tuple2_("day", $std_date.show2($std_date.day(date))), $std_core.Cons($std_core._tuple2_("hours", $std_date.show2($std_date.hours(date))), $std_core.Cons($std_core._tuple2_("minutes", $std_date.show2($std_date.minutes(date))), $std_core.Cons($std_core._tuple2_("seconds", $std_date.show2($std_date.seconds(date))), $std_core.Nil)))))))))));var arg_8776 = undefined;var arg_8777 = undefined;var arg_8778 = undefined;var arg_8779 = undefined;var arg_8780 = undefined;var arg_8781 = undefined;var arg_8782 = undefined;var arg_8783 = undefined;var arg_8784 = undefined;var arg_8785 = undefined;var arg_8786 = undefined;var arg_8787 = undefined;var arg_8788 = undefined;var arg_8789 = undefined;var arg_8790 = undefined;var arg_8791 = undefined;var arg_8792 = undefined;var arg_8793 = undefined;var arg_8794 = undefined;var arg_8795 = undefined;var arg_8796 = undefined;var arg_8797 = undefined;var arg_8798 = undefined;var arg_8799 = undefined;var arg_8800 = undefined;var arg_8801 = undefined;var arg_8802 = undefined;var arg_8803 = undefined;var arg_8804 = undefined;var arg_8805 = undefined;var arg_8806 = undefined;var arg_8807 = undefined;var arg_8808 = undefined;var arg_8809 = undefined;var arg_8810 = undefined;var arg_8811 = undefined;var arg_8812 = undefined;var arg_8813 = undefined;var arg_8814 = undefined;var arg_8815 = undefined;var arg_8816 = undefined;var arg_8817 = undefined;var arg_8818 = undefined;var arg_8819 = undefined;var arg_8820 = undefined;var arg_8821 = undefined;var arg_8822 = undefined;var arg_8823 = undefined;var arg_8824 = undefined;var arg_8825 = undefined;var arg_8826 = undefined;var arg_8827 = undefined;var arg_8829 = undefined;var arg_8831 = undefined;var arg_8832 = undefined;var arg_8833 = undefined;var arg_8834 = undefined;var arg_8835 = undefined;var arg_8837 = undefined;var arg_8838 = undefined; var opts1 = $options._copy_1(arg_8775, arg_8776, arg_8777, arg_8778, arg_8779, arg_8780, arg_8781, arg_8782, arg_8783, arg_8784, arg_8785, arg_8786, arg_8787, arg_8788, arg_8789, arg_8790, arg_8791, arg_8792, arg_8793, arg_8794, arg_8795, arg_8796, arg_8797, arg_8798, arg_8799, arg_8800, arg_8801, arg_8802, arg_8803, arg_8804, arg_8805, arg_8806, arg_8807, arg_8808, arg_8809, arg_8810, arg_8811, arg_8812, arg_8813, arg_8814, arg_8815, arg_8816, arg_8817, arg_8818, arg_8819, arg_8820, arg_8821, arg_8822, arg_8823, arg_8824, arg_8825, arg_8826, arg_8827, arg_8828, arg_8829, arg_8830, arg_8831, arg_8832, arg_8833, arg_8834, arg_8835, arg_8836, arg_8837, arg_8838); var opts2 = $bibliography.extractCitestyle(opts1, outName); if ($options.xmp(opts2)) {  var mmopts = $std_core.fst($metadata.parseMeta(opts2, $common.FmtHtml, extractFirstXmp($madoko.normalizeSource(icontent))));} else {  var mmopts = $std_core.fst($metadata.parseMeta(opts2, $common.FmtHtml, $madoko.normalizeSource(icontent)));} if ($options.rebuild(mmopts)) {  var dims = "";} else {  var dims = $storage.readTextFileDef($std_path.changeExt(outName, ".dimx"), "", false);} var _x0 = $mathParse.parseMathDim(dims, $options.math(mmopts)); var xopts = $options._copy_1(opts2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(opts2), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _x0.snd, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _x0.fst), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined); var mopts = $options._copy_1(mmopts, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(mmopts), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _x0.snd, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _x0.fst), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined); registerColorizers(mopts, searchDirs, icontent); if ($options.copyStyles(mopts)) {  tryCopyTextFileFromNoSandboxTo("madoko.css", styleDir, $std_path.dirname(outName)); var _x1 = ($options.tex(xopts) || $options.isStatic($options.mode($options.math(mopts)))); if (_x1) {  var _x2 = $std_core.find($options.metadata(mopts), function(md  /* (string, string) */ ) {  return ($std_core.fst(md) === "tex2");}); if (_x2 != null) {  var isTex2 = ($std_core.toLower($std_core.snd(_x2.unJust)) === "true");} else {  var isTex2 = false;} if (isTex2) {  var files = standardTexStyles;} else {  var files = $std_core.Cons("css.sty", $std_core.Cons("madoko.sty", $std_core.Nil));} $std_core.foreach(files, function(fname  /* string */ ) {  return tryCopyTextFileFromNoSandboxTo(fname, styleDir, $std_path.dirname(outName));});} else {  $std_core._unit_;}} else {  $std_core._unit_;} return $process(inName, outName, searchDirs, content, icontent, xopts, mopts, firstTime_7813, runners, function() {  return processContent(inName, outName, content, opts, false, runners, $continue);}, function(html  /* string */ ) {  return $continue(html, inName, outName, mopts);});});
}
var rxCurDir = $std_regex.regex("^(\\.)(?=[\\\\/])", undefined, undefined);
 
// koka exports:
return { 'Runners': Runners, 'runPdfLatex': runPdfLatex, 'runBibtex': runBibtex, 'runMathStatic': runMathStatic, 'runZip': runZip, '_copy': _copy, 'standardTexStyles': standardTexStyles, 'createTexZip': createTexZip, 'rxXmp': rxXmp, 'extractFirstXmp': extractFirstXmp, 'rxLocation': rxLocation, 'rxWarning': rxWarning, 'fixWarnings': fixWarnings, 'outputName': outputName, 'rxDataLinesPre': rxDataLinesPre, 'withLogCompress': withLogCompress, '$process': $process, 'registerColorizers': registerColorizers, 'rxMadokoComment': rxMadokoComment, 'removeMadokoComments': removeMadokoComments, 'tryCopyTextFileFromNoSandboxTo': tryCopyTextFileFromNoSandboxTo, 'processContent': processContent, 'rxCurDir': rxCurDir };
});