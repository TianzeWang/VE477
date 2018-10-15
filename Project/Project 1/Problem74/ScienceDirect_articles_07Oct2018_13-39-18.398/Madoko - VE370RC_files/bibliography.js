// koka generated module: "bibliography"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_log', './std_regex', './std_path', './std_dict', './std_string', './std_crypto', './common', './options', './storage', './texParser', './includes', './runcsl'], function($std_core, $std_log, $std_regex, $std_path, $std_dict, $std_string, $std_crypto, $common, $options, $storage, $texParser, $includes, $runcsl) {
"use strict";
 
// koka declarations:
function Auxinfo(auxfile, auxid, style)  /* (auxfile : string, auxid : string, style : options/bibstyle) -> auxinfo */  {
  return { auxfile: auxfile, auxid: auxid, style: style };
}
 
// Automatically generated. Retrieves the `auxfile` constructor field of the ":auxinfo" type.
function auxfile(auxinfo)  /* (auxinfo : auxinfo) -> string */  {
  return auxinfo.auxfile;
}
 
// Automatically generated. Retrieves the `auxid` constructor field of the ":auxinfo" type.
function auxid(auxinfo)  /* (auxinfo : auxinfo) -> string */  {
  return auxinfo.auxid;
}
 
// Automatically generated. Retrieves the `style` constructor field of the ":auxinfo" type.
function style(auxinfo)  /* (auxinfo : auxinfo) -> options/bibstyle */  {
  return auxinfo.style;
}
function _copy(_this, auxfile0, auxid0, style0)  /* (auxinfo, auxfile : ?string, auxid : ?string, style : ?options/bibstyle) -> auxinfo */  {
  var auxfile_88 = (auxfile0 !== undefined) ? auxfile0 : auxfile(_this);
  var auxid_94 = (auxid0 !== undefined) ? auxid0 : auxid(_this);
  var style_100 = (style0 !== undefined) ? style0 : style(_this);
  return Auxinfo(auxfile_88, auxid_94, style_100);
}
function auxInsert(auxName, auxData, style0, xs)  /* (auxName : string, auxData : string, style : options/bibstyle, xs : list<(string, (string, options/bibstyle))>) -> list<(string, (string, options/bibstyle))> */  {
  if (xs == null) {
    return $std_core.Cons($std_core._tuple2_(auxName, $std_core._tuple2_(auxData, style0)), $std_core.Nil);
  }
  else {
    var _x0 = ($std_core.fst(xs.head) === auxName);
    if (_x0) {
      return $std_core.Cons($std_core._tuple2_($std_core.fst(xs.head), $std_core._tuple2_((auxData + ("\n" + $std_core.fst($std_core.snd(xs.head)))), style0)), xs.tail);
    }
    else {
      return $std_core.Cons(xs.head, auxInsert(auxName, auxData, style0, xs.tail));
    }
  }
}
 
// Find and copy bib files to the output directory, and return a `bibdata` command with md5 hash
function createBibData(auxDir, searchDirs, bibNames, mcs)  /* (auxDir : string, searchDirs : list<string>, bibNames : list<string>, mcs : maybe<common/citestyle>) -> io string */  {
  var _x0 = $std_core.unzip($std_core.concat($std_core.map_3(bibNames, function(bibName  /* string */ ) {  var _x1 = $includes.trySearchReadTextFile(bibName, searchDirs, ".bib", undefined); if (_x1 == null) {  $common.warning(("unable to find bibliography file: " + bibName), undefined); return $std_core.Nil;} else {  var _x2 = ($std_path.dirname(_x1.unJust.fst) !== auxDir); if (_x2) {  var _x3 = !($storage.tryWriteTextFile($std_path.combine(auxDir, $std_path.basename(_x1.unJust.fst)), _x1.unJust.snd)); if (_x3) {  $std_core.println(("warning: unable to copy bibliography file to output directory: " + bibName));} else {  $std_core._unit_;}} else {  $std_core._unit_;} return $std_core.Cons($std_core._tuple2_($std_path.stemname(_x1.unJust.fst), _x1.unJust.snd), $std_core.Nil);}})));
  var digest = $std_crypto.md5($std_core.join_3(_x0.snd));
  if (mcs == null) {
    var _x2 = "";
  }
  else {
    var _x2 = ("\n%\\citestyle{" + ($common.show_1(mcs.unJust) + "}"));
  }
  return ("\\bibdata{" + ($std_core.join_4(_x0.fst, ",") + ("}\n%md5:" + (digest + (_x2 + "\n")))));
}
var rxCiteStyle = $std_regex.regex("\\bcite\\-style *: *\"([^\"]+)\"", undefined, undefined);
function extractCitestyle(opts, outName)  /* (opts : options/options, outName : string) -> io options/options */  {
  var auxName = ($std_path.noext(outName) + "-bib.bbl.mdk");
  var contents = $storage.readTextFileDef(auxName, "", false);
  var _x0 = $std_regex.find(contents, rxCiteStyle, undefined);
  if (_x0 == null) {
    return opts;
  }
  else {
    var _x1 = $common.parseCiteStyle($std_regex._index_($std_regex.groups(_x0.unJust), 1));
    if (_x1 == null) {
      return opts;
    }
    else {
      return $options._copy_1(opts, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $std_core.Just(_x1.unJust), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $std_core.Cons($std_core._tuple2_("cite-style", $std_regex._index_($std_regex.groups(_x0.unJust), 1)), $options.metadata(opts)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    }
  }
}
var rxCitation = $std_regex.regex("^\\\\citation\\{([^\\}]+)\\}", undefined, undefined);
var rxDataLine = $std_regex.regex("^%mdk-data-line=\\{([^\\}]+)\\}", undefined, undefined);
function findCitations(aux)  /* (aux : string) -> list<runcsl/citeinfo> */  {
  var lineinfo = { value: "" };
  return $std_core.concatMaybe($std_core.map_3($std_core.list_4($std_core.lines(aux)), function(line  /* string */ ) {  var _x0 = $std_regex.find(line, rxDataLine, undefined); if (_x0 != null) {  ((lineinfo).value = $std_regex._index_($std_regex.groups(_x0.unJust), 1)); return $std_core.Nothing;} else {  var _x1 = $std_regex.find(line, rxCitation, undefined); if (_x1 != null) {  return $std_core.Just($runcsl.Citeinfo($std_regex._index_($std_regex.groups(_x1.unJust), 1), ((lineinfo).value)));} else {  return $std_core.Nothing;}}}));
}
var rxIndepParent = $std_regex.regex("<link *href *= *\"(?:https?://www.zotero.org/styles/)?([^\"]+)\" *rel *= *\"independent-parent\" */>", undefined, undefined);
function searchReadTextFile(fname, searchDirs, ext, required, mopts)  /* (fname : string, searchDirs : list<string>, ext : string, required : bool, mopts : options/options) -> io runcsl/fileinfo */  {
  var _x0 = $includes.trySearchReadTextFile(fname, searchDirs, ext, required);
  if (_x0 == null) {
    $options.printErr(mopts, ("warning: unable to read: " + $std_path.defaultExt(fname, ext)), undefined);
    return $runcsl.Fileinfo(fname, "");
  }
  else {
    return $runcsl.Fileinfo(_x0.unJust.fst, _x0.unJust.snd);
  }
}
 
// Write the final aux file; returns `True` if successful
function writeFinalAux(auxfile0)  /* (auxfile : string) -> io bool */  {
  return $storage.tryCopyTextFile(auxfile0, $std_path.changeExt(auxfile0, ".final.aux"), true);
}
 
// Generate CSL bibliography; return `True` if successful
function genBibCsl(aux, outdir, searchDirs, mopts)  /* forall<a> (aux : auxinfo, outdir : a, searchDirs : list<string>, mopts : options/options) -> io bool */  {
  var _x1 = $std_core.bool_2(auxid(aux));
  if (_x1) {
    var _x0 = ("(" + (auxid(aux) + ") "));
  }
  else {
    var _x0 = "";
  }
  $options.print(mopts, ("bibliography " + (_x0 + ("style: " + $std_path.stemname($options.styleName(style(aux)))))), undefined);
  var searchDirsCsl = $std_core.concat_1(searchDirs, function(dir  /* string */ ) {  return $std_core.Cons(dir, $std_core.Cons($std_path.combine(dir, "csl"), $std_core.Nil));});
  var searchDirsLoc = $std_core.concat_1(searchDirs, function(dir0  /* string */ ) {  return $std_core.Cons(dir0, $std_core.Cons($std_path.combine(dir0, "locales"), $std_core.Nil));});
  var madokoStyle = searchReadTextFile("madoko.csl", searchDirsCsl, "", true, mopts);
  var locale = searchReadTextFile(("locales-" + ($options.locale(style(aux)) + ".xml")), searchDirsLoc, "", true, mopts);
  var auxcontents = $storage.readTextFileDef(auxfile(aux), "", false);
  var bibfiles = $std_core.map_3($common.splitPaths($options.bib(mopts)), function(bib  /* string */ ) {  return searchReadTextFile(bib, searchDirs, ".bib", true, mopts);});
  var citations = findCitations(auxcontents);
  var cslStyle0 = searchReadTextFile($options.styleName(style(aux)), searchDirsCsl, ".csl", true, mopts);
  var _x0 = $std_regex.find($runcsl.contents(cslStyle0), rxIndepParent, undefined);
  if (_x0 == null) {
    var cslStyle = cslStyle0;
  }
  else {
    $options.print(mopts, ("      parent style: " + $std_regex._index_($std_regex.groups(_x0.unJust), 1)), undefined);
    var cslStyle = searchReadTextFile($std_regex._index_($std_regex.groups(_x0.unJust), 1), searchDirsCsl, ".csl", true, mopts);
  }
  var _x0 = ($std_core.length_3(citations) > 0 && ($std_core.bool_2($runcsl.contents(cslStyle)) && ($std_core.bool_2($runcsl.contents(madokoStyle)) && $std_core.bool_2($runcsl.contents(locale)))));
  if (_x0) {
    var res = $runcsl.runCsl(citations, bibfiles, cslStyle, madokoStyle, locale, auxid(aux), "");
    var _x1 = $std_core.bool_2($runcsl.warnings(res));
    if (_x1) {
      $options.printErr(mopts, $runcsl.warnings(res), undefined);
    }
    else {
      $std_core._unit_;
    }
    var _x1 = $std_core.bool_2($runcsl.errors(res));
    if (_x1) {
      $options.printErr(mopts, $runcsl.errors(res), undefined);
      return false;
    }
    else {
      $storage.writeTextFileSync($std_path.changeExt(auxfile(aux), ".bbl.mdk"), $runcsl.bibliography(res));
      $storage.writeTextFileSync($std_path.changeExt(auxfile(aux), ".bib.json"), $runcsl.bib(res));
      return writeFinalAux(auxfile(aux));
    }
  }
  else {
    $options.printErr(mopts, "could not find all required CSL bibliography files", undefined);
    return false;
  }
}
function genBibtex(runBibtex, auxInfos, outdir, searchDirs, mopts, $continue)  /* forall<e> (runBibtex : (list<string>, options/options, (err : bool) -> <io|e> ()) -> io (), auxInfos : list<auxinfo>, outdir : string, searchDirs : list<string>, mopts : options/options, continue : (bool) -> io ()) -> io () */  {
  var _x0 = $std_core.partition(auxInfos, function(info  /* auxinfo */ ) {  return $options.isCsl(style(info));});
  function continueCsl(biberr)  /* (biberr : bool) -> io () */  {
    var ok = $std_core.all(_x0.fst, function(aux  /* auxinfo */ ) {  return genBibCsl(aux, outdir, searchDirs, mopts);});
    return $continue((biberr || !(ok)));
  }
  $std_core.foreach(_x0.snd, function(aux0  /* auxinfo */ ) {  var bstyle = $options.styleName(style(aux0)); var _x1 = (($std_path.extname(bstyle) !== "") || ($std_path.dirname(bstyle) !== "")); if (_x1) {  $storage.tryCopyTextFileFromTo($std_path.defaultExt($std_path.basename(bstyle), ".bst"), $std_path.dirname(bstyle), outdir, true); return $std_core._unit_;} else {  return $std_core._unit_;}});
  return runBibtex($std_core.map_3(_x0.snd, auxfile), mopts, function(err  /* bool */ ) {  if (!(err)) {  var ok0 = $std_core.all(_x0.snd, function(bib  /* auxinfo */ ) {  var bblname = $std_path.changeExt(auxfile(bib), ".bbl"); var _x1 = $storage.tryReadTextFile(bblname, true); if (_x1._tag === 1) {  $common.warning(("Unable to read bibliography file: " + bblname), undefined); return false;} else {  var bibl = $texParser.parseTex(_x1.left, auxid(bib), $std_core.maybe($options.citestyle(mopts), $common.citeNumeric, $std_core.id), $std_path.stemname($options.styleName(style(bib))), undefined, undefined); var mdkname = (bblname + ".mdk"); $storage.writeTextFileSync(mdkname, bibl); return writeFinalAux(auxfile(bib));}}); return continueCsl(!(ok0));} else {  return continueCsl(err);}});
}
var rxBibFile = $std_regex.regex("^ *%mdk bib: *([^\\s,]*) *(?:, *csl-style: *([^\\s,]*) *)?(?:, *bib-style: *([^\\s,]*))?(?:, *locale: *([^\\s,]* *))?$", undefined, true);
var rxCite = $std_regex.regex("^(?:(?:%?\\\\(citation|bibstyle|biblocale|bibdata|cslstyle|cslocale|citestyle)\\b.*)|(?:%md5:.*))$", undefined, true);
 
// split citations in different parts: one for each bibliography ([BIB=<id>] element)
function splitCiteData(citeData, opts)  /* (citeData : string, opts : options/options) -> io list<(string, (string, options/bibstyle))> */  {
  var _x0 = ($std_string.trim(citeData) === "");
  if (_x0) {
    return $std_core.Nil;
  }
  else {
    $std_core._unit_;
  }
  var _x0 = $options.bibStyle(opts);
  match: {
    if (_x0._tag === 2) {
      if ($std_core.isEmpty(_x0.locale)){
        var style0 = $options.Csl(_x0.styleName, $options.locale_1(opts));
        break match;
      }
    }
    if (_x0._tag === 1) {
      if ($std_core.isEmpty(_x0.locale)){
        var style0 = $options.Bst(_x0.styleName, $options.locale_1(opts));
        break match;
      }
    }
    var style0 = _x0;
  }
  var _x0 = $std_regex.find(citeData, rxBibFile, undefined);
  if (_x0 == null) {
    return $std_core.Cons($std_core._tuple2_("", $std_core._tuple2_(citeData, style0)), $std_core.Nil);
  }
  else {
    var auxName = $std_regex._index_($std_regex.groups(_x0.unJust), 1);
    var auxRaw = $std_core.substr_1(citeData, 0, $std_regex.index(_x0.unJust));
    if ($std_core.isEmpty(auxName)) {
      var auxData = auxRaw;
    }
    else {
      var auxData = (auxRaw).replace(new RegExp((("\\citation{" + (auxName + ":"))).replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'),"\\citation{");
    }
    var _x1 = $std_core.bool_2($std_regex._index_($std_regex.groups(_x0.unJust), 2));
    if (_x1) {
      var stylex = $options.Csl($std_regex._index_($std_regex.groups(_x0.unJust), 2), $std_regex._index_($std_regex.groups(_x0.unJust), 4));
    }
    else {
      var _x2 = $std_core.bool_2($std_regex._index_($std_regex.groups(_x0.unJust), 3));
      if (_x2) {
        var stylex = $options.Bst($std_regex._index_($std_regex.groups(_x0.unJust), 3), $std_regex._index_($std_regex.groups(_x0.unJust), 4));
      }
      else {
        var stylex = style0;
      }
    }
    return auxInsert(auxName, auxData, stylex, splitCiteData(((citeData).substr($std_regex.next(_x0.unJust) >=1 ? $std_regex.next(_x0.unJust) : 1)), opts));
  }
}
 
// Write citations to an aux file. Returns "True" if the bibliography data changed.
function writeCitations(auxData, bibData, bibStyle, auxName, opts)  /* (auxData : string, bibData : string, bibStyle : options/bibstyle, auxName : string, opts : options/options) -> io bool */  {
  var oldData = $storage.readTextFileDef($std_path.changeExt(auxName, ".final.aux"), "", false);
  if (bibStyle._tag === 1) {
    var _x0 = ("\\bibstyle{" + ($std_path.stemname(bibStyle.styleName) + ("}\n%\\biblocale{" + (bibStyle.locale + "}\n"))));
  }
  else {
    var _x0 = ("%\\cslstyle{" + (bibStyle.styleName + ("}\n%\\csllocale{" + (bibStyle.locale + "}\n"))));
  }
  var newData = ("% Generated by Madoko, version " + ($options.version(opts) + ("\n" + (auxData + ("\n" + (_x0 + bibData))))));
  if ((newData !== oldData)) {
    var _x0 = !($storage.tryWriteTextFile(auxName, newData));
    if (_x0) {
      $options.printErr(opts, ("error: unable to write citations: " + auxName), undefined);
    }
    else {
      $std_core._unit_;
    }
  }
  else {
    $std_core._unit_;
  }
  var oldCites = $std_core.join_4($std_core.map_3($std_core.list_4($std_regex.findAll(oldData, rxCite, undefined)), function(cap  /* std/regex/matched */ ) {  return $std_regex.matched(cap);}), "\n");
  var newCites = $std_core.join_4($std_core.map_3($std_core.list_4($std_regex.findAll(newData, rxCite, undefined)), function(cap0  /* std/regex/matched */ ) {  return $std_regex.matched(cap0);}), "\n");
  return (oldCites !== newCites);
}
function writeCitationsData(citeData, outName, searchDirs, bibNames, opts)  /* (citeData : string, outName : string, searchDirs : list<string>, bibNames : list<string>, opts : options/options) -> io list<auxinfo> */  {
  var defaultAux = ($std_path.noext(outName) + "-bib.aux");
  var cites = splitCiteData(citeData, opts);
  var bibData = createBibData($std_path.dirname(outName), searchDirs, bibNames, $options.citestyle(opts));
  return $std_core.filterMap(cites, function(kv  /* (string, (string, options/bibstyle)) */ ) {  var _x0 = ((kv.fst === "")) ? "" : ("-" + kv.fst); var auxName = ($std_path.noext(outName) + ("-bib" + (_x0 + ".aux"))); var changed = writeCitations(kv.snd.fst, bibData, kv.snd.snd, auxName, opts); var _x0 = (changed || $options.rebuild(opts)); if (_x0) {  return $std_core.Just(Auxinfo(auxName, kv.fst, kv.snd.snd));} else {  return $std_core.Nothing;}});
}
 
// koka exports:
return { 'auxfile': auxfile, 'auxid': auxid, 'style': style, '_copy': _copy, 'auxInsert': auxInsert, 'createBibData': createBibData, 'rxCiteStyle': rxCiteStyle, 'extractCitestyle': extractCitestyle, 'rxCitation': rxCitation, 'rxDataLine': rxDataLine, 'findCitations': findCitations, 'rxIndepParent': rxIndepParent, 'searchReadTextFile': searchReadTextFile, 'writeFinalAux': writeFinalAux, 'genBibCsl': genBibCsl, 'genBibtex': genBibtex, 'rxBibFile': rxBibFile, 'rxCite': rxCite, 'splitCiteData': splitCiteData, 'writeCitations': writeCitations, 'writeCitationsData': writeCitationsData };
});