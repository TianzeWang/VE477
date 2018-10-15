// koka generated module: "webmain"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_dict', './std_log', './version', './common', './options', './driver', './storage', './mathStatic'], function($std_core, $std_dict, $std_log, $version, $common, $options, $driver, $storage, $mathStatic) {
"use strict";
 
// koka declarations:
function addImage(embeds, imageName, data)  /* (embeds : std/dict/dict<common/embedinfo>, imageName : string, data : string) -> std/dict/dict<common/embedinfo> */  {
  return $std_dict._plus_(embeds, $std_dict.dict_1($std_core.Cons($std_core._tuple2_(imageName, $common.Embedinfo(imageName, data)), $std_core.Nil)));
}
function clearStorage()  /* () -> io () */  {
  return $storage.clear();
}
var coptions = $options._createCommandOptions(undefined, undefined, undefined, undefined, undefined, undefined);
function initialOptions(args)  /* (args : ?string) -> io options/options */  {
  var args_138 = (args !== undefined) ? args : "";
  if ((args_138 === "")) {
    var opts = $options._createOptions($version.version, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  }
  else {
    var _x0 = $options.parseOptions($version.version, args_138);
    if (_x0 != null) {
      var opts = $options.options(_x0.unJust);
    }
    else {
      var opts = $options._createOptions($version.version, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    }
  }
  return $options._copy_1(opts, undefined, undefined, undefined, 0, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(opts), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $std_core.intMultiply(512,1024), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 0, undefined, true, false, undefined, undefined, undefined);
}
function markdown(inputName, input, outdir, options0, modes, convertTex, $continue)  /* (inputName : string, input : string, outdir : string, options0 : options/options, modes : string, convertTex : bool, continue : (md : string, stdout : string, needRerun : bool, options : options/options, files : string, filesRefer : string, filesWrite : string, labels : string, links : string, customs : string, entities : string) -> io ()) -> io () */  {
  $std_core.printRedirect(function(s  /* string */ ) {
    return $std_log.log("stdout", s);
  });
  var extramdata = $std_core.map_3($std_core.list_4($std_core.split_1(modes, ";")), function(key  /* string */ ) {  return $std_core._tuple2_(key, "True");});
  var options = $options._copy_1(options0, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $std_core._plus__3($options.metadata(options0), extramdata), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  var copts = $options._copy_2(coptions, undefined, convertTex, outdir, undefined, undefined, options);
  var outName = $driver.outputName(inputName, copts);
  var rerun = { value: false };
  function runBibtex(bibFiles, opts, cont)  /* (bibFiles : list<string>, opts : options/options, cont : (bool) -> io ()) -> io () */  {
    ((rerun).value = $std_core.isCons(bibFiles));
    return cont($std_core.isCons(bibFiles));
  }
  function runMathStatic(content, inpName, outputname, texNamePlain, texNameFull, plainPages, fullPages, oldMathPlain, oldMathFull, xopts, cont0)  /* (content : string, inpName : string, outputname : string, texNamePlain : string, texNameFull : string, plainPages : mathStatic/pages, fullPages : mathStatic/pages, oldMathPlain : string, oldMathFull : string, xopts : options/options, cont : (maybe<(std/dict/dict<common/mathinfo>, string)>) -> io ()) -> io () */  {
    ((rerun).value = true);
    $std_core.trace("math rerun");
    return cont0($std_core.Nothing);
  }
  function runPdfLatex(srcFile, texFile, opts0, content0, cont1)  /* (srcFile : string, texFile : string, opts : options/options, content : string, cont : (int) -> io ()) -> io () */  {
    $options.printErr(options, "cannot generate pdf in the browser", undefined);
    return cont1(1);
  }
  function runZip(files, zipFile, opts1, cont2)  /* (files : list<string>, zipFile : string, opts : options/options, cont : (bool) -> io ()) -> io () */  {
    $options.printErr(options, "cannot zip files in the browser", undefined);
    return cont2(false);
  }
  var runners = $driver.Runners(runPdfLatex, runBibtex, runMathStatic, runZip);
  $std_log.withLog("stdout", function() {  return $std_log.withLog("files", function() {  return $std_log.withLog("filesRefer", function() {  return $std_log.withLog("filesWrite", function() {  return $std_log.withLog("labels", function() {  return $std_log.withLog("links", function() {  return $std_log.withLog("customs", function() {  return $std_log.withLog("entities", function() {  return $driver.processContent(inputName, outName, input, copts, true, runners, function(output  /* string */ , ___lp_112_comma_92_rp_  /* string */ , ___lp_112_comma_94_rp_  /* string */ , options1  /* options/options */ ) {  var stdout = $std_log.getLog("stdout"); var files0 = $std_log.getLog("files"); var filesRefer = $std_log.getLog("filesRefer"); var filesWrite = $std_log.getLog("filesWrite"); var labels = $std_log.getLog("labels"); var links = $std_log.getLog("links"); var customs = $std_log.getLog("customs"); var entities = $std_log.getLog("entities"); return $continue(output, stdout, ((rerun).value), options1, files0, filesRefer, filesWrite, labels, links, customs, entities);});});});});});});});});});
  return $std_core._unit_;
}
function readTextFile(fname)  /* (fname : string) -> io string */  {
  return $storage.readTextFileSync(fname, undefined);
}
function unlinkFile(fname)  /* (fname : string) -> io () */  {
  return $storage.unlinkSync(fname);
}
function writeTextFile(fileName, content)  /* (fileName : string, content : string) -> io () */  {
  return $storage.writeTextFileSync(fileName, content);
}
 
// koka exports:
return { 'addImage': addImage, 'clearStorage': clearStorage, 'coptions': coptions, 'initialOptions': initialOptions, 'markdown': markdown, 'readTextFile': readTextFile, 'unlinkFile': unlinkFile, 'writeTextFile': writeTextFile };
});