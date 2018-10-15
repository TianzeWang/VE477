// koka generated module: "inline"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_dict', './std_string', './std_regex', './std_log', './common', './attributes', './codeAlign', './hilite'], function($std_core, $std_dict, $std_string, $std_regex, $std_log, $common, $attributes, $codeAlign, $hilite) {
"use strict";
 
// koka declarations:
function Authorinfo(name, address, email, note)  /* (name : string, address : string, email : string, note : string) -> authorinfo */  {
  return { name: name, address: address, email: email, note: note };
}
function Footnote(footnoteNum, footnoteContent, footnoteCaption)  /* (footnoteNum : string, footnoteContent : (inlineContext) -> string, footnoteCaption : string) -> footnote */  {
  return { footnoteNum: footnoteNum, footnoteContent: footnoteContent, footnoteCaption: footnoteCaption };
}
function InlineContext(grammar, links, labels, footnotes, defaults, metadata, mathinfos, embedinfos, citestyle, xsanitize, bench, verbose, mathStatic, highlight, starBold, sandbox, prettyAlign, xfmtCmd, xfmtEscape, xfmtLink, xfmtFootnote, xfmtTable, xfmtEnv, xfmtCodePlain, xfmtCodeToken, xfmtLineInfo, xfmtCodeTable, xfmtMathCmd, xfmtMathEnv, fmt)  /* (grammar : common/grammar<string,inlineContext>, links : std/dict/dict<common/link>, labels : std/dict/dict<common/label>, footnotes : std/dict/dict<footnote>, defaults : attributes/rules, metadata : std/dict/dict<string>, mathinfos : std/dict/dict<common/mathinfo>, embedinfos : std/dict/dict<common/embedinfo>, citestyle : common/citestyle, xsanitize : bool, bench : bool, verbose : int, mathStatic : bool, highlight : bool, starBold : bool, sandbox : bool, prettyAlign : int, xfmtCmd : (ctx : inlineContext, cmd : string, body : string, attrs : common/attrs) -> string, xfmtEscape : (ctx : inlineContext, body : string, allowEntity : bool) -> string, xfmtLink : (ctx : inlineContext, isImage : bool, link : common/link, content : string) -> string, xfmtFootnote : (context : inlineContext, id : string, fn : footnote) -> string, xfmtTable : (context : inlineContext, head : list<common/row>, body : list<common/row>, colattrs : list<common/attrs>, attrs : common/attrs) -> string, xfmtEnv : (context : inlineContext, env : string, txt : string, attrs : common/attrs) -> string, xfmtCodePlain : (context : inlineContext, txt : string, startline : bool) -> string, xfmtCodeToken : (context : inlineContext, classes : list<string>, txt : string, lang : string, attrs : common/attrs) -> string, xfmtLineInfo : (context : inlineContext, lineInfo : string) -> string, xfmtCodeTable : (context : inlineContext, ct : codeAlign/codeTable, attrs : common/attrs) -> string, xfmtMathCmd : (ctx : inlineContext, cmd : string, body : string, attrs : common/attrs) -> string, xfmtMathEnv : (context : inlineContext, env : string, txt : string, attrs : common/attrs) -> string, fmt : common/formatter) -> inlineContext */  {
  return { grammar: grammar, links: links, labels: labels, footnotes: footnotes, defaults: defaults, metadata: metadata, mathinfos: mathinfos, embedinfos: embedinfos, citestyle: citestyle, xsanitize: xsanitize, bench: bench, verbose: verbose, mathStatic: mathStatic, highlight: highlight, starBold: starBold, sandbox: sandbox, prettyAlign: prettyAlign, xfmtCmd: xfmtCmd, xfmtEscape: xfmtEscape, xfmtLink: xfmtLink, xfmtFootnote: xfmtFootnote, xfmtTable: xfmtTable, xfmtEnv: xfmtEnv, xfmtCodePlain: xfmtCodePlain, xfmtCodeToken: xfmtCodeToken, xfmtLineInfo: xfmtLineInfo, xfmtCodeTable: xfmtCodeTable, xfmtMathCmd: xfmtMathCmd, xfmtMathEnv: xfmtMathEnv, fmt: fmt };
}
function Titleinfo(title, subtitle, authors, note)  /* (title : string, subtitle : string, authors : list<authorinfo>, note : string) -> titleinfo */  {
  return { title: title, subtitle: subtitle, authors: authors, note: note };
}
 
// Automatically generated. Retrieves the `name` constructor field of the ":authorinfo" type.
function name(authorinfo)  /* (authorinfo : authorinfo) -> string */  {
  return authorinfo.name;
}
 
// Automatically generated. Retrieves the `address` constructor field of the ":authorinfo" type.
function address(authorinfo)  /* (authorinfo : authorinfo) -> string */  {
  return authorinfo.address;
}
 
// Automatically generated. Retrieves the `email` constructor field of the ":authorinfo" type.
function email(authorinfo)  /* (authorinfo : authorinfo) -> string */  {
  return authorinfo.email;
}
 
// Automatically generated. Retrieves the `note` constructor field of the ":authorinfo" type.
function note(authorinfo)  /* (authorinfo : authorinfo) -> string */  {
  return authorinfo.note;
}
function _copy(_this, name0, address0, email0, note0)  /* (authorinfo, name : ?string, address : ?string, email : ?string, note : ?string) -> authorinfo */  {
  var name_186 = (name0 !== undefined) ? name0 : name(_this);
  var address_192 = (address0 !== undefined) ? address0 : address(_this);
  var email_198 = (email0 !== undefined) ? email0 : email(_this);
  var note_204 = (note0 !== undefined) ? note0 : note(_this);
  return Authorinfo(name_186, address_192, email_198, note_204);
}
 
// Automatically generated. Retrieves the `footnoteNum` constructor field of the ":footnote" type.
function footnoteNum(footnote)  /* (footnote : footnote) -> string */  {
  return footnote.footnoteNum;
}
 
// Automatically generated. Retrieves the `footnoteContent` constructor field of the ":footnote" type.
function footnoteContent(footnote)  /* (footnote : footnote) -> ((inlineContext) -> string) */  {
  return footnote.footnoteContent;
}
 
// Automatically generated. Retrieves the `footnoteCaption` constructor field of the ":footnote" type.
function footnoteCaption(footnote)  /* (footnote : footnote) -> string */  {
  return footnote.footnoteCaption;
}
function _copy_1(_this, footnoteNum0, footnoteContent0, footnoteCaption0)  /* (footnote, footnoteNum : ?string, footnoteContent : ?(inlineContext) -> string, footnoteCaption : ?string) -> footnote */  {
  var footnoteNum_241 = (footnoteNum0 !== undefined) ? footnoteNum0 : footnoteNum(_this);
  var footnoteContent_248 = (footnoteContent0 !== undefined) ? footnoteContent0 : footnoteContent(_this);
  var footnoteCaption_254 = (footnoteCaption0 !== undefined) ? footnoteCaption0 : footnoteCaption(_this);
  return Footnote(footnoteNum_241, footnoteContent_248, footnoteCaption_254);
}
 
// Automatically generated. Retrieves the `grammar` constructor field of the ":inlineContext" type.
function grammar(inlineContext)  /* (inlineContext : inlineContext) -> common/grammar<string,inlineContext> */  {
  return inlineContext.grammar;
}
 
// Automatically generated. Retrieves the `links` constructor field of the ":inlineContext" type.
function links(inlineContext)  /* (inlineContext : inlineContext) -> std/dict/dict<common/link> */  {
  return inlineContext.links;
}
 
// Automatically generated. Retrieves the `labels` constructor field of the ":inlineContext" type.
function labels(inlineContext)  /* (inlineContext : inlineContext) -> std/dict/dict<common/label> */  {
  return inlineContext.labels;
}
 
// Automatically generated. Retrieves the `footnotes` constructor field of the ":inlineContext" type.
function footnotes(inlineContext)  /* (inlineContext : inlineContext) -> std/dict/dict<footnote> */  {
  return inlineContext.footnotes;
}
 
// Automatically generated. Retrieves the `defaults` constructor field of the ":inlineContext" type.
function defaults(inlineContext)  /* (inlineContext : inlineContext) -> attributes/rules */  {
  return inlineContext.defaults;
}
 
// Automatically generated. Retrieves the `metadata` constructor field of the ":inlineContext" type.
function metadata(inlineContext)  /* (inlineContext : inlineContext) -> std/dict/dict<string> */  {
  return inlineContext.metadata;
}
 
// Automatically generated. Retrieves the `mathinfos` constructor field of the ":inlineContext" type.
function mathinfos(inlineContext)  /* (inlineContext : inlineContext) -> std/dict/dict<common/mathinfo> */  {
  return inlineContext.mathinfos;
}
 
// Automatically generated. Retrieves the `embedinfos` constructor field of the ":inlineContext" type.
function embedinfos(inlineContext)  /* (inlineContext : inlineContext) -> std/dict/dict<common/embedinfo> */  {
  return inlineContext.embedinfos;
}
 
// Automatically generated. Retrieves the `citestyle` constructor field of the ":inlineContext" type.
function citestyle(inlineContext)  /* (inlineContext : inlineContext) -> common/citestyle */  {
  return inlineContext.citestyle;
}
 
// Automatically generated. Retrieves the `xsanitize` constructor field of the ":inlineContext" type.
function xsanitize(inlineContext)  /* (inlineContext : inlineContext) -> bool */  {
  return inlineContext.xsanitize;
}
 
// Automatically generated. Retrieves the `bench` constructor field of the ":inlineContext" type.
function bench(inlineContext)  /* (inlineContext : inlineContext) -> bool */  {
  return inlineContext.bench;
}
 
// Automatically generated. Retrieves the `verbose` constructor field of the ":inlineContext" type.
function verbose(inlineContext)  /* (inlineContext : inlineContext) -> int */  {
  return inlineContext.verbose;
}
 
// Automatically generated. Retrieves the `mathStatic` constructor field of the ":inlineContext" type.
function mathStatic(inlineContext)  /* (inlineContext : inlineContext) -> bool */  {
  return inlineContext.mathStatic;
}
 
// Automatically generated. Retrieves the `highlight` constructor field of the ":inlineContext" type.
function highlight(inlineContext)  /* (inlineContext : inlineContext) -> bool */  {
  return inlineContext.highlight;
}
 
// Automatically generated. Retrieves the `starBold` constructor field of the ":inlineContext" type.
function starBold(inlineContext)  /* (inlineContext : inlineContext) -> bool */  {
  return inlineContext.starBold;
}
 
// Automatically generated. Retrieves the `sandbox` constructor field of the ":inlineContext" type.
function sandbox(inlineContext)  /* (inlineContext : inlineContext) -> bool */  {
  return inlineContext.sandbox;
}
 
// Automatically generated. Retrieves the `prettyAlign` constructor field of the ":inlineContext" type.
function prettyAlign(inlineContext)  /* (inlineContext : inlineContext) -> int */  {
  return inlineContext.prettyAlign;
}
 
// Automatically generated. Retrieves the `xfmtCmd` constructor field of the ":inlineContext" type.
function xfmtCmd(inlineContext)  /* (inlineContext : inlineContext) -> ((ctx : inlineContext, cmd : string, body : string, attrs : common/attrs) -> string) */  {
  return inlineContext.xfmtCmd;
}
 
// Automatically generated. Retrieves the `xfmtEscape` constructor field of the ":inlineContext" type.
function xfmtEscape(inlineContext)  /* (inlineContext : inlineContext) -> ((ctx : inlineContext, body : string, allowEntity : bool) -> string) */  {
  return inlineContext.xfmtEscape;
}
 
// Automatically generated. Retrieves the `xfmtLink` constructor field of the ":inlineContext" type.
function xfmtLink(inlineContext)  /* (inlineContext : inlineContext) -> ((ctx : inlineContext, isImage : bool, link : common/link, content : string) -> string) */  {
  return inlineContext.xfmtLink;
}
 
// Automatically generated. Retrieves the `xfmtFootnote` constructor field of the ":inlineContext" type.
function xfmtFootnote(inlineContext)  /* (inlineContext : inlineContext) -> ((context : inlineContext, id : string, fn : footnote) -> string) */  {
  return inlineContext.xfmtFootnote;
}
 
// Automatically generated. Retrieves the `xfmtTable` constructor field of the ":inlineContext" type.
function xfmtTable(inlineContext)  /* (inlineContext : inlineContext) -> ((context : inlineContext, head : list<common/row>, body : list<common/row>, colattrs : list<common/attrs>, attrs : common/attrs) -> string) */  {
  return inlineContext.xfmtTable;
}
 
// Automatically generated. Retrieves the `xfmtEnv` constructor field of the ":inlineContext" type.
function xfmtEnv(inlineContext)  /* (inlineContext : inlineContext) -> ((context : inlineContext, env : string, txt : string, attrs : common/attrs) -> string) */  {
  return inlineContext.xfmtEnv;
}
 
// Automatically generated. Retrieves the `xfmtCodePlain` constructor field of the ":inlineContext" type.
function xfmtCodePlain(inlineContext)  /* (inlineContext : inlineContext) -> ((context : inlineContext, txt : string, startline : bool) -> string) */  {
  return inlineContext.xfmtCodePlain;
}
 
// Automatically generated. Retrieves the `xfmtCodeToken` constructor field of the ":inlineContext" type.
function xfmtCodeToken(inlineContext)  /* (inlineContext : inlineContext) -> ((context : inlineContext, classes : list<string>, txt : string, lang : string, attrs : common/attrs) -> string) */  {
  return inlineContext.xfmtCodeToken;
}
 
// Automatically generated. Retrieves the `xfmtLineInfo` constructor field of the ":inlineContext" type.
function xfmtLineInfo(inlineContext)  /* (inlineContext : inlineContext) -> ((context : inlineContext, lineInfo : string) -> string) */  {
  return inlineContext.xfmtLineInfo;
}
 
// Automatically generated. Retrieves the `xfmtCodeTable` constructor field of the ":inlineContext" type.
function xfmtCodeTable(inlineContext)  /* (inlineContext : inlineContext) -> ((context : inlineContext, ct : codeAlign/codeTable, attrs : common/attrs) -> string) */  {
  return inlineContext.xfmtCodeTable;
}
 
// Automatically generated. Retrieves the `xfmtMathCmd` constructor field of the ":inlineContext" type.
function xfmtMathCmd(inlineContext)  /* (inlineContext : inlineContext) -> ((ctx : inlineContext, cmd : string, body : string, attrs : common/attrs) -> string) */  {
  return inlineContext.xfmtMathCmd;
}
 
// Automatically generated. Retrieves the `xfmtMathEnv` constructor field of the ":inlineContext" type.
function xfmtMathEnv(inlineContext)  /* (inlineContext : inlineContext) -> ((context : inlineContext, env : string, txt : string, attrs : common/attrs) -> string) */  {
  return inlineContext.xfmtMathEnv;
}
 
// Automatically generated. Retrieves the `fmt` constructor field of the ":inlineContext" type.
function fmt(inlineContext)  /* (inlineContext : inlineContext) -> common/formatter */  {
  return inlineContext.fmt;
}
function _copy_2(_this, grammar0, links0, labels0, footnotes0, defaults0, metadata0, mathinfos0, embedinfos0, citestyle0, xsanitize0, bench0, verbose0, mathStatic0, highlight0, starBold0, sandbox0, prettyAlign0, xfmtCmd0, xfmtEscape0, xfmtLink0, xfmtFootnote0, xfmtTable0, xfmtEnv0, xfmtCodePlain0, xfmtCodeToken0, xfmtLineInfo0, xfmtCodeTable0, xfmtMathCmd0, xfmtMathEnv0, fmt0)  /* (inlineContext, grammar : ?common/grammar<string,inlineContext>, links : ?std/dict/dict<common/link>, labels : ?std/dict/dict<common/label>, footnotes : ?std/dict/dict<footnote>, defaults : ?attributes/rules, metadata : ?std/dict/dict<string>, mathinfos : ?std/dict/dict<common/mathinfo>, embedinfos : ?std/dict/dict<common/embedinfo>, citestyle : ?common/citestyle, xsanitize : ?bool, bench : ?bool, verbose : ?int, mathStatic : ?bool, highlight : ?bool, starBold : ?bool, sandbox : ?bool, prettyAlign : ?int, xfmtCmd : ?(ctx : inlineContext, cmd : string, body : string, attrs : common/attrs) -> string, xfmtEscape : ?(ctx : inlineContext, body : string, allowEntity : bool) -> string, xfmtLink : ?(ctx : inlineContext, isImage : bool, link : common/link, content : string) -> string, xfmtFootnote : ?(context : inlineContext, id : string, fn : footnote) -> string, xfmtTable : ?(context : inlineContext, head : list<common/row>, body : list<common/row>, colattrs : list<common/attrs>, attrs : common/attrs) -> string, xfmtEnv : ?(context : inlineContext, env : string, txt : string, attrs : common/attrs) -> string, xfmtCodePlain : ?(context : inlineContext, txt : string, startline : bool) -> string, xfmtCodeToken : ?(context : inlineContext, classes : list<string>, txt : string, lang : string, attrs : common/attrs) -> string, xfmtLineInfo : ?(context : inlineContext, lineInfo : string) -> string, xfmtCodeTable : ?(context : inlineContext, ct : codeAlign/codeTable, attrs : common/attrs) -> string, xfmtMathCmd : ?(ctx : inlineContext, cmd : string, body : string, attrs : common/attrs) -> string, xfmtMathEnv : ?(context : inlineContext, env : string, txt : string, attrs : common/attrs) -> string, fmt : ?common/formatter) -> inlineContext */  {
  var grammar_495 = (grammar0 !== undefined) ? grammar0 : grammar(_this);
  var links_501 = (links0 !== undefined) ? links0 : links(_this);
  var labels_507 = (labels0 !== undefined) ? labels0 : labels(_this);
  var footnotes_513 = (footnotes0 !== undefined) ? footnotes0 : footnotes(_this);
  var defaults_526 = (defaults0 !== undefined) ? defaults0 : defaults(_this);
  var metadata_532 = (metadata0 !== undefined) ? metadata0 : metadata(_this);
  var mathinfos_538 = (mathinfos0 !== undefined) ? mathinfos0 : mathinfos(_this);
  var embedinfos_544 = (embedinfos0 !== undefined) ? embedinfos0 : embedinfos(_this);
  var citestyle_552 = (citestyle0 !== undefined) ? citestyle0 : citestyle(_this);
  var xsanitize_558 = (xsanitize0 !== undefined) ? xsanitize0 : xsanitize(_this);
  var bench_564 = (bench0 !== undefined) ? bench0 : bench(_this);
  var verbose_570 = (verbose0 !== undefined) ? verbose0 : verbose(_this);
  var mathStatic_576 = (mathStatic0 !== undefined) ? mathStatic0 : mathStatic(_this);
  var highlight_582 = (highlight0 !== undefined) ? highlight0 : highlight(_this);
  var starBold_588 = (starBold0 !== undefined) ? starBold0 : starBold(_this);
  var sandbox_594 = (sandbox0 !== undefined) ? sandbox0 : sandbox(_this);
  var prettyAlign_600 = (prettyAlign0 !== undefined) ? prettyAlign0 : prettyAlign(_this);
  var xfmtCmd_607 = (xfmtCmd0 !== undefined) ? xfmtCmd0 : xfmtCmd(_this);
  var xfmtEscape_614 = (xfmtEscape0 !== undefined) ? xfmtEscape0 : xfmtEscape(_this);
  var xfmtLink_621 = (xfmtLink0 !== undefined) ? xfmtLink0 : xfmtLink(_this);
  var xfmtFootnote_628 = (xfmtFootnote0 !== undefined) ? xfmtFootnote0 : xfmtFootnote(_this);
  var xfmtTable_635 = (xfmtTable0 !== undefined) ? xfmtTable0 : xfmtTable(_this);
  var xfmtEnv_642 = (xfmtEnv0 !== undefined) ? xfmtEnv0 : xfmtEnv(_this);
  var xfmtCodePlain_649 = (xfmtCodePlain0 !== undefined) ? xfmtCodePlain0 : xfmtCodePlain(_this);
  var xfmtCodeToken_656 = (xfmtCodeToken0 !== undefined) ? xfmtCodeToken0 : xfmtCodeToken(_this);
  var xfmtLineInfo_663 = (xfmtLineInfo0 !== undefined) ? xfmtLineInfo0 : xfmtLineInfo(_this);
  var xfmtCodeTable_670 = (xfmtCodeTable0 !== undefined) ? xfmtCodeTable0 : xfmtCodeTable(_this);
  var xfmtMathCmd_677 = (xfmtMathCmd0 !== undefined) ? xfmtMathCmd0 : xfmtMathCmd(_this);
  var xfmtMathEnv_684 = (xfmtMathEnv0 !== undefined) ? xfmtMathEnv0 : xfmtMathEnv(_this);
  var fmt_690 = (fmt0 !== undefined) ? fmt0 : fmt(_this);
  return InlineContext(grammar_495, links_501, labels_507, footnotes_513, defaults_526, metadata_532, mathinfos_538, embedinfos_544, citestyle_552, xsanitize_558, bench_564, verbose_570, mathStatic_576, highlight_582, starBold_588, sandbox_594, prettyAlign_600, xfmtCmd_607, xfmtEscape_614, xfmtLink_621, xfmtFootnote_628, xfmtTable_635, xfmtEnv_642, xfmtCodePlain_649, xfmtCodeToken_656, xfmtLineInfo_663, xfmtCodeTable_670, xfmtMathCmd_677, xfmtMathEnv_684, fmt_690);
}
 
// Automatically generated. Retrieves the `title` constructor field of the ":titleinfo" type.
function title(titleinfo)  /* (titleinfo : titleinfo) -> string */  {
  return titleinfo.title;
}
 
// Automatically generated. Retrieves the `subtitle` constructor field of the ":titleinfo" type.
function subtitle(titleinfo)  /* (titleinfo : titleinfo) -> string */  {
  return titleinfo.subtitle;
}
 
// Automatically generated. Retrieves the `authors` constructor field of the ":titleinfo" type.
function authors(titleinfo)  /* (titleinfo : titleinfo) -> list<authorinfo> */  {
  return titleinfo.authors;
}
 
// Automatically generated. Retrieves the `note` constructor field of the ":titleinfo" type.
function note_1(titleinfo)  /* (titleinfo : titleinfo) -> string */  {
  return titleinfo.note;
}
function _copy_3(_this, title0, subtitle0, authors0, note0)  /* (titleinfo, title : ?string, subtitle : ?string, authors : ?list<authorinfo>, note : ?string) -> titleinfo */  {
  var title_789 = (title0 !== undefined) ? title0 : title(_this);
  var subtitle_795 = (subtitle0 !== undefined) ? subtitle0 : subtitle(_this);
  var authors_801 = (authors0 !== undefined) ? authors0 : authors(_this);
  var note_814 = (note0 !== undefined) ? note0 : note_1(_this);
  return Titleinfo(title_789, subtitle_795, authors_801, note_814);
}
function sanitize(context)  /* (context : inlineContext) -> bool */  {
  return xsanitize(context);
}
 
// Copy an ":inlineContext"
function copy(self, grammar0, links0, labels0, footnotes0, defaults0, metadata0, mathinfos0, embedinfos0, citestyle0, sanitize0, bench0, verbose0, mathStatic0, highlight0, starBold0, sandbox0, prettyAlign0, xfmtCmd0, xfmtEscape0, xfmtLink0, xfmtFootnote0, xfmtTable0, xfmtEnv0, xfmtCodePlain0, xfmtCodeToken0, xfmtLineInfo0, xfmtCodeTable0, xfmtMathCmd0, xfmtMathEnv0, fmt0)  /* (self : inlineContext, grammar : ?common/grammar<string,inlineContext>, links : ?std/dict/dict<common/link>, labels : ?std/dict/dict<common/label>, footnotes : ?std/dict/dict<footnote>, defaults : ?attributes/rules, metadata : ?std/dict/dict<string>, mathinfos : ?std/dict/dict<common/mathinfo>, embedinfos : ?std/dict/dict<common/embedinfo>, citestyle : ?common/citestyle, sanitize : ?bool, bench : ?bool, verbose : ?int, mathStatic : ?bool, highlight : ?bool, starBold : ?bool, sandbox : ?bool, prettyAlign : ?int, xfmtCmd : ?(ctx : inlineContext, cmd : string, body : string, attrs : common/attrs) -> string, xfmtEscape : ?(ctx : inlineContext, body : string, allowEntity : bool) -> string, xfmtLink : ?(ctx : inlineContext, isImage : bool, link : common/link, content : string) -> string, xfmtFootnote : ?(context : inlineContext, id : string, fn : footnote) -> string, xfmtTable : ?(context : inlineContext, head : list<common/row>, body : list<common/row>, colattrs : list<common/attrs>, attrs : common/attrs) -> string, xfmtEnv : ?(context : inlineContext, env : string, txt : string, attrs : common/attrs) -> string, xfmtCodePlain : ?(context : inlineContext, txt : string, startline : bool) -> string, xfmtCodeToken : ?(context : inlineContext, classes : list<string>, txt : string, lang : string, attrs : common/attrs) -> string, xfmtLineInfo : ?(context : inlineContext, lineInfo : string) -> string, xfmtCodeTable : ?(context : inlineContext, ct : codeAlign/codeTable, attrs : common/attrs) -> string, xfmtMathCmd : ?(ctx : inlineContext, cmd : string, body : string, attrs : common/attrs) -> string, xfmtMathEnv : ?(context : inlineContext, env : string, txt : string, attrs : common/attrs) -> string, fmt : ?common/formatter) -> inlineContext */  {
  var grammar_844 = (grammar0 !== undefined) ? grammar0 : grammar(self);
  var links_850 = (links0 !== undefined) ? links0 : links(self);
  var labels_856 = (labels0 !== undefined) ? labels0 : labels(self);
  var footnotes_862 = (footnotes0 !== undefined) ? footnotes0 : footnotes(self);
  var defaults_875 = (defaults0 !== undefined) ? defaults0 : defaults(self);
  var metadata_881 = (metadata0 !== undefined) ? metadata0 : metadata(self);
  var mathinfos_887 = (mathinfos0 !== undefined) ? mathinfos0 : mathinfos(self);
  var embedinfos_893 = (embedinfos0 !== undefined) ? embedinfos0 : embedinfos(self);
  var citestyle_901 = (citestyle0 !== undefined) ? citestyle0 : citestyle(self);
  var sanitize_907 = (sanitize0 !== undefined) ? sanitize0 : sanitize(self);
  var bench_913 = (bench0 !== undefined) ? bench0 : bench(self);
  var verbose_919 = (verbose0 !== undefined) ? verbose0 : verbose(self);
  var mathStatic_925 = (mathStatic0 !== undefined) ? mathStatic0 : mathStatic(self);
  var highlight_931 = (highlight0 !== undefined) ? highlight0 : highlight(self);
  var starBold_937 = (starBold0 !== undefined) ? starBold0 : starBold(self);
  var sandbox_943 = (sandbox0 !== undefined) ? sandbox0 : sandbox(self);
  var prettyAlign_949 = (prettyAlign0 !== undefined) ? prettyAlign0 : prettyAlign(self);
  var xfmtCmd_956 = (xfmtCmd0 !== undefined) ? xfmtCmd0 : xfmtCmd(self);
  var xfmtEscape_963 = (xfmtEscape0 !== undefined) ? xfmtEscape0 : xfmtEscape(self);
  var xfmtLink_970 = (xfmtLink0 !== undefined) ? xfmtLink0 : xfmtLink(self);
  var xfmtFootnote_977 = (xfmtFootnote0 !== undefined) ? xfmtFootnote0 : xfmtFootnote(self);
  var xfmtTable_984 = (xfmtTable0 !== undefined) ? xfmtTable0 : xfmtTable(self);
  var xfmtEnv_991 = (xfmtEnv0 !== undefined) ? xfmtEnv0 : xfmtEnv(self);
  var xfmtCodePlain_998 = (xfmtCodePlain0 !== undefined) ? xfmtCodePlain0 : xfmtCodePlain(self);
  var xfmtCodeToken_1005 = (xfmtCodeToken0 !== undefined) ? xfmtCodeToken0 : xfmtCodeToken(self);
  var xfmtLineInfo_1012 = (xfmtLineInfo0 !== undefined) ? xfmtLineInfo0 : xfmtLineInfo(self);
  var xfmtCodeTable_1019 = (xfmtCodeTable0 !== undefined) ? xfmtCodeTable0 : xfmtCodeTable(self);
  var xfmtMathCmd_1026 = (xfmtMathCmd0 !== undefined) ? xfmtMathCmd0 : xfmtMathCmd(self);
  var xfmtMathEnv_1033 = (xfmtMathEnv0 !== undefined) ? xfmtMathEnv0 : xfmtMathEnv(self);
  var fmt_1039 = (fmt0 !== undefined) ? fmt0 : fmt(self);
  return InlineContext(grammar_844, links_850, labels_856, footnotes_862, defaults_875, metadata_881, mathinfos_887, embedinfos_893, citestyle_901, sanitize_907, bench_913, verbose_919, mathStatic_925, highlight_931, starBold_937, sandbox_943, prettyAlign_949, xfmtCmd_956, xfmtEscape_963, xfmtLink_970, xfmtFootnote_977, xfmtTable_984, xfmtEnv_991, xfmtCodePlain_998, xfmtCodeToken_1005, xfmtLineInfo_1012, xfmtCodeTable_1019, xfmtMathCmd_1026, xfmtMathEnv_1033, fmt_1039);
}
function fmtCmd(context, cmd, txt, attrs)  /* (context : inlineContext, cmd : string, txt : string, attrs : ?common/attrs) -> string */  {
  var attrs_1077 = (attrs !== undefined) ? attrs : $common.attrsNone;
  return xfmtCmd(context)(context, cmd, txt, attrs_1077);
}
function fmtCodePlain(context, txt, startline)  /* (context : inlineContext, txt : string, startline : ?bool) -> string */  {
  var startline_1091 = (startline !== undefined) ? startline : true;
  return xfmtCodePlain(context)(context, txt, startline_1091);
}
function fmtCodeTable(context, ct, attrs)  /* (context : inlineContext, ct : codeAlign/codeTable, attrs : ?common/attrs) -> string */  {
  var attrs_1104 = (attrs !== undefined) ? attrs : $common.attrsNone;
  return xfmtCodeTable(context)(context, ct, attrs_1104);
}
function fmtCodeToken(context, classes, txt, lang, attrs)  /* (context : inlineContext, classes : list<string>, txt : string, lang : string, attrs : common/attrs) -> string */  {
  return xfmtCodeToken(context)(context, classes, txt, lang, attrs);
}
function fmtEnv(context, env, txt, attrs)  /* (context : inlineContext, env : string, txt : string, attrs : ?common/attrs) -> string */  {
  var attrs_1128 = (attrs !== undefined) ? attrs : $common.attrsNone;
  return xfmtEnv(context)(context, env, txt, attrs_1128);
}
function fmtEscape(context, txt)  /* (context : inlineContext, txt : string) -> string */  {
  return xfmtEscape(context)(context, txt, true);
}
function fmtEscapePre(context, txt)  /* (context : inlineContext, txt : string) -> string */  {
  return xfmtEscape(context)(context, txt, false);
}
function fmtFootnote(context, id, fn)  /* (context : inlineContext, id : string, fn : footnote) -> string */  {
  return xfmtFootnote(context)(context, id, fn);
}
function fmtLineInfo(context, lineInfo)  /* (context : inlineContext, lineInfo : string) -> string */  {
  return xfmtLineInfo(context)(context, lineInfo);
}
function fmtLink(context, isImage, link, content)  /* (context : inlineContext, isImage : bool, link : common/link, content : string) -> string */  {
  return xfmtLink(context)(context, isImage, link, content);
}
function fmtMathCmd(context, cmd, txt, attrs)  /* (context : inlineContext, cmd : string, txt : string, attrs : ?common/attrs) -> string */  {
  var attrs_1187 = (attrs !== undefined) ? attrs : $common.attrsNone;
  return xfmtMathCmd(context)(context, cmd, txt, attrs_1187);
}
function fmtMathEnv(context, env, txt, attrs)  /* (context : inlineContext, env : string, txt : string, attrs : ?common/attrs) -> string */  {
  var attrs_1201 = (attrs !== undefined) ? attrs : $common.attrsNone;
  return xfmtMathEnv(context)(context, env, txt, attrs_1201);
}
function fmtText(context, txt)  /* (context : inlineContext, txt : string) -> string */  {
  return xfmtCmd(context)(context, "", txt, $common.attrsNone);
}
function formatInlineAcc(context, acc, txt, lineNo, linePrefix)  /* forall<h> (context : inlineContext, acc : std/string/builder<h>, txt : string, lineNo : int, linePrefix : string) -> st<h> string */  { tailcall: while(1)
{
  if ((txt === "")) {
    return (acc).value;
  }
  else {
    $std_core._unit_;
  }
  var location = (linePrefix + $std_core.show_1(lineNo));
  var lineInfo = (lineNo <= 0) ? "" : fmtLineInfo(context, location);
  if (lineNo > 0) {
    var texLineInfo = ("%mdk-data-line={" + (location + "}"));
    $std_log.log("math-plain", texLineInfo);
    $std_log.log("math-full", texLineInfo);
    $std_log.log("aux", texLineInfo);
    $common.logLocation(location, undefined);
  }
  else {
    $std_core._unit_;
  }
  var _x0 = $common.matchRules(grammar(context), context, txt, $std_core.id);
  if (lineNo <= 0) {
    var newLineNo = 0;
  }
  else {
    var newLineNo = ((lineNo + (("\n") ? (($std_core.substr_1(txt, 0, _x0.snd)).match(new RegExp(("\n").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'))||[]).length : 0))|0);
  }
  {
    var _x1 = $std_string.append($std_string.append(acc, lineInfo), _x0.fst);
    var _x2 = ((txt).substr(_x0.snd >=1 ? _x0.snd : 1));
    acc = _x1;
    txt = _x2;
    lineNo = newLineNo;
    continue tailcall;
  }
}}
var rxDataLine = $std_regex.regex("^(.*:)?(\\d+)$", undefined, undefined);
function parseLineInfo(lineInfo)  /* (lineInfo : string) -> (string, int) */  {
  var _x0 = $std_regex.find(lineInfo, rxDataLine, undefined);
  if (_x0 == null) {
    return $std_core._tuple2_("", 0);
  }
  else {
    return $std_core._tuple2_($std_regex._index_($std_regex.groups(_x0.unJust), 1), $std_core.parseIntDefault($std_regex._index_($std_regex.groups(_x0.unJust), 2), 0, undefined));
  }
}
 
// Parse _inline_ markdown elements and return formatted html
function formatInline(context, txt, attrs)  /* (context : inlineContext, txt : string, attrs : ?common/attrs) -> string */  {
  var attrs_1845 = (attrs !== undefined) ? attrs : $common.attrsNone;
  var _x0 = parseLineInfo($common.lookupKey(attrs_1845, "data-line", ""));
  return formatInlineAcc(context, { value: '' }, txt, _x0.snd, _x0.fst);
}
function logDataLine(attrs)  /* (attrs : common/attrs) -> () */  {
  var _x0 = $common.hasKey(attrs, "data-line");
  return (_x0 == null) ? $std_core._unit_ : $common.logLocation(_x0.unJust, undefined);
}
function mathPreX(txt)  /* (txt : string) -> string */  {
  var ignorearg = "(?:mbox|begin|end|(?:text|math|varmath)(?:kw|id|rm|sf|tt|up|it|sl|sc|bf|md|lf|normal|bb|cal|scr|bbm|bbmss|bbmtt|ds|frak|swab|goth)?)";
  return $std_regex.replaceAll($std_regex.replaceAll(txt, $std_regex.regex(("(\\\\" + (ignorearg + "{(?:[^\\\\}]|\\\\.)*}|\\\\[a-zA-Z@]+ *|\\\\[^a-z@])|^( +)|( +)|(\\n)")), undefined, true), function(cap  /* std/regex/matched */ ) {  var n = ($std_regex.matched(cap)).length; var _x0 = $std_regex.matchedOn($std_regex.groups(cap), 2); if (_x0) {  return ("\\mdmathindent{" + ($std_core.show_1(n) + "}"));} else {  var _x1 = $std_regex.matchedOn($std_regex.groups(cap), 3); if (_x1) {  return $std_core.string_3(n, '~');} else {  var _x2 = $std_regex.matchedOn($std_regex.groups(cap), 4); return (_x2) ? "\\\\\n" : $std_regex.matched(cap);}}}, undefined), $std_regex.regex(("(\\\\" + (ignorearg + "{(?:[^\\\\}]|\\\\.)*}|\\\\[a-z@]+(?![a-z@]))|#([a-z][a-z\\d]*(?![a-z\\d]))|([a-z][a-z\\d]*(?![a-z\\d]))|@([a-z][a-z\\d]*(?![a-z\\d]))")), true, undefined), function(cap0  /* std/regex/matched */ ) {  var grp = $std_regex.firstMatchedOn($std_regex.groups(cap0), undefined, undefined); if (grp === 2) {  return $std_regex._index_($std_regex.groups(cap0), 2);} else {  if (grp < 2) {  return $std_regex.matched(cap0);} else {  var _x3 = $std_regex.matchedOn($std_regex.groups(cap0), 4); var cmd = (_x3) ? "mathkw" : "mathid"; var captxt = $std_regex._index_($std_regex.groups(cap0), grp); var _x4 = $std_regex.find(captxt, $std_regex.regex("^([^\\d]*(?:\\d+[^\\d]+)*)(\\d*)$", undefined, undefined), undefined); if (_x4 != null) {  var _x3 = $std_core._tuple2_($std_regex._index_($std_regex.groups(_x4.unJust), 1), $std_regex._index_($std_regex.groups(_x4.unJust), 2));} else {  var _x3 = $std_core._tuple2_(captxt, "");} if ((_x3.snd === "")) {  var _x5 = "";} else {  var _x5 = ("_{" + (_x3.snd + "}"));} return ("\\" + (cmd + ("{" + (_x3.fst + ("}" + _x5)))));}}}, undefined);
}
function mathPre(txt)  /* (txt : string) -> string */  {
  return ("\\mathpre{" + (mathPreX(txt) + "}"));
}
function mathPreBlock(txt)  /* (txt : string) -> string */  {
  var pre = mathPreX(txt);
  return ("\\begin{mdmathpre}%mdk\n" + (pre + "\n\\end{mdmathpre}%mdk\n"));
}
function pick(fmt0, htmlElem, texElem)  /* forall<a> (fmt : common/formatter, htmlElem : a, texElem : a) -> a */  {
  return (fmt0 === 1) ? htmlElem : texElem;
}
 
// koka exports:
return { 'Authorinfo': Authorinfo, 'Footnote': Footnote, 'InlineContext': InlineContext, 'Titleinfo': Titleinfo, 'name': name, 'address': address, 'email': email, 'note': note, '_copy': _copy, 'footnoteNum': footnoteNum, 'footnoteContent': footnoteContent, 'footnoteCaption': footnoteCaption, '_copy_1': _copy_1, 'grammar': grammar, 'links': links, 'labels': labels, 'footnotes': footnotes, 'defaults': defaults, 'metadata': metadata, 'mathinfos': mathinfos, 'embedinfos': embedinfos, 'citestyle': citestyle, 'xsanitize': xsanitize, 'bench': bench, 'verbose': verbose, 'mathStatic': mathStatic, 'highlight': highlight, 'starBold': starBold, 'sandbox': sandbox, 'prettyAlign': prettyAlign, 'xfmtCmd': xfmtCmd, 'xfmtEscape': xfmtEscape, 'xfmtLink': xfmtLink, 'xfmtFootnote': xfmtFootnote, 'xfmtTable': xfmtTable, 'xfmtEnv': xfmtEnv, 'xfmtCodePlain': xfmtCodePlain, 'xfmtCodeToken': xfmtCodeToken, 'xfmtLineInfo': xfmtLineInfo, 'xfmtCodeTable': xfmtCodeTable, 'xfmtMathCmd': xfmtMathCmd, 'xfmtMathEnv': xfmtMathEnv, 'fmt': fmt, '_copy_2': _copy_2, 'title': title, 'subtitle': subtitle, 'authors': authors, 'note_1': note_1, '_copy_3': _copy_3, 'sanitize': sanitize, 'copy': copy, 'fmtCmd': fmtCmd, 'fmtCodePlain': fmtCodePlain, 'fmtCodeTable': fmtCodeTable, 'fmtCodeToken': fmtCodeToken, 'fmtEnv': fmtEnv, 'fmtEscape': fmtEscape, 'fmtEscapePre': fmtEscapePre, 'fmtFootnote': fmtFootnote, 'fmtLineInfo': fmtLineInfo, 'fmtLink': fmtLink, 'fmtMathCmd': fmtMathCmd, 'fmtMathEnv': fmtMathEnv, 'fmtText': fmtText, 'formatInlineAcc': formatInlineAcc, 'rxDataLine': rxDataLine, 'parseLineInfo': parseLineInfo, 'formatInline': formatInline, 'logDataLine': logDataLine, 'mathPreX': mathPreX, 'mathPre': mathPre, 'mathPreBlock': mathPreBlock, 'pick': pick };
});