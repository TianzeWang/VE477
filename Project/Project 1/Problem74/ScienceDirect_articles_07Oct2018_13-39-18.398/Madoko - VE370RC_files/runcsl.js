// koka generated module: "runcsl"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./csl-madoko', './std_core', './std_path', './texParser'], function(csl, $std_core, $std_path, $texParser) {
"use strict";
 
// koka declarations:
function Citeinfo(id, lineinfo)  /* (id : string, lineinfo : string) -> citeinfo */  {
  return { id: id, lineinfo: lineinfo };
}
function Cslresult(bibliography, bib, warnings, errors, citeformat)  /* (bibliography : string, bib : string, warnings : string, errors : string, citeformat : string) -> cslresult */  {
  return { bibliography: bibliography, bib: bib, warnings: warnings, errors: errors, citeformat: citeformat };
}
function Fileinfo(filename, contents)  /* (filename : string, contents : string) -> fileinfo */  {
  return { filename: filename, contents: contents };
}
 
// Automatically generated. Retrieves the `id` constructor field of the ":citeinfo" type.
function id(citeinfo)  /* (citeinfo : citeinfo) -> string */  {
  return citeinfo.id;
}
 
// Automatically generated. Retrieves the `lineinfo` constructor field of the ":citeinfo" type.
function lineinfo(citeinfo)  /* (citeinfo : citeinfo) -> string */  {
  return citeinfo.lineinfo;
}
function _copy(_this, id0, lineinfo0)  /* (citeinfo, id : ?string, lineinfo : ?string) -> citeinfo */  {
  var id_46 = (id0 !== undefined) ? id0 : id(_this);
  var lineinfo_52 = (lineinfo0 !== undefined) ? lineinfo0 : lineinfo(_this);
  return Citeinfo(id_46, lineinfo_52);
}
 
// Automatically generated. Retrieves the `bibliography` constructor field of the ":cslresult" type.
function bibliography(cslresult)  /* (cslresult : cslresult) -> string */  {
  return cslresult.bibliography;
}
 
// Automatically generated. Retrieves the `bib` constructor field of the ":cslresult" type.
function bib(cslresult)  /* (cslresult : cslresult) -> string */  {
  return cslresult.bib;
}
 
// Automatically generated. Retrieves the `warnings` constructor field of the ":cslresult" type.
function warnings(cslresult)  /* (cslresult : cslresult) -> string */  {
  return cslresult.warnings;
}
 
// Automatically generated. Retrieves the `errors` constructor field of the ":cslresult" type.
function errors(cslresult)  /* (cslresult : cslresult) -> string */  {
  return cslresult.errors;
}
 
// Automatically generated. Retrieves the `citeformat` constructor field of the ":cslresult" type.
function citeformat(cslresult)  /* (cslresult : cslresult) -> string */  {
  return cslresult.citeformat;
}
function _copy_1(_this, bibliography0, bib0, warnings0, errors0, citeformat0)  /* (cslresult, bibliography : ?string, bib : ?string, warnings : ?string, errors : ?string, citeformat : ?string) -> cslresult */  {
  var bibliography_100 = (bibliography0 !== undefined) ? bibliography0 : bibliography(_this);
  var bib_106 = (bib0 !== undefined) ? bib0 : bib(_this);
  var warnings_112 = (warnings0 !== undefined) ? warnings0 : warnings(_this);
  var errors_118 = (errors0 !== undefined) ? errors0 : errors(_this);
  var citeformat_124 = (citeformat0 !== undefined) ? citeformat0 : citeformat(_this);
  return Cslresult(bibliography_100, bib_106, warnings_112, errors_118, citeformat_124);
}
 
// Automatically generated. Retrieves the `filename` constructor field of the ":fileinfo" type.
function filename(fileinfo)  /* (fileinfo : fileinfo) -> string */  {
  return fileinfo.filename;
}
 
// Automatically generated. Retrieves the `contents` constructor field of the ":fileinfo" type.
function contents(fileinfo)  /* (fileinfo : fileinfo) -> string */  {
  return fileinfo.contents;
}
function _copy_2(_this, filename0, contents0)  /* (fileinfo, filename : ?string, contents : ?string) -> fileinfo */  {
  var filename_158 = (filename0 !== undefined) ? filename0 : filename(_this);
  var contents_164 = (contents0 !== undefined) ? contents0 : contents(_this);
  return Fileinfo(filename_158, contents_164);
}
function makeBiblX(citations, bibtexs, bibstyle, madokoStyle, localeStyle, convertTex, pre, attrs)  /* (citations : primarray<citeinfo>, bibtexs : primarray<fileinfo>, bibstyle : fileinfo, madokoStyle : fileinfo, localeStyle : fileinfo, convertTex : (string) -> string, pre : string, attrs : string) -> cslresult */  {
  return csl.makeBibliography(citations,bibtexs,bibstyle,madokoStyle,localeStyle,convertTex, {preid:pre,attrs:attrs});
}
function runCsl(citations, bibs, bibstyle, madokoStyle, localeStyle, id0, attrs0)  /* (citations : list<citeinfo>, bibs : list<fileinfo>, bibstyle : fileinfo, madokoStyle : fileinfo, localeStyle : fileinfo, id : string, attrs0 : string) -> cslresult */  {
  var preid = ($std_core.bool_2(id0)) ? (id0 + ":") : "";
  var attrs = ("data-style:\'" + ($std_path.stemname(filename(bibstyle)) + ("\'; " + attrs0)));
  return makeBiblX($std_core.unlist(citations), $std_core.unlist(bibs), bibstyle, madokoStyle, localeStyle, function(tex  /* string */ ) {  return $texParser.parseTex(tex, undefined, undefined, undefined, undefined, undefined);}, preid, attrs);
}
 
// koka exports:
return { 'Citeinfo': Citeinfo, 'Cslresult': Cslresult, 'Fileinfo': Fileinfo, 'id': id, 'lineinfo': lineinfo, '_copy': _copy, 'bibliography': bibliography, 'bib': bib, 'warnings': warnings, 'errors': errors, 'citeformat': citeformat, '_copy_1': _copy_1, 'filename': filename, 'contents': contents, '_copy_2': _copy_2, 'makeBiblX': makeBiblX, 'runCsl': runCsl };
});