// koka generated module: "common"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_log', './std_regex', './std_dict', './std_path'], function($std_core, $std_log, $std_regex, $std_dict, $std_path) {
"use strict";
 
// koka declarations:
var FmtHtml = 1;  /* formatter */ 
var FmtTex = 2;  /* formatter */ 
var Pre = { _tag: 1 };  /* input */ 
var MathPre = { _tag: 2 };  /* input */ 
var Math = { _tag: 3 };  /* input */ 
var MathDefs = { _tag: 4 };  /* input */ 
var Tex = { _tag: 5 };  /* input */ 
function Raw(only)  /* (only : maybe<formatter>) -> input */  {
  return { _tag: 6, only: only };
}
function Markdown(only)  /* (only : maybe<formatter>) -> input */  {
  return { _tag: 7, only: only };
}
function Attrs(empty, sticky, defaults, text, replacers, notag, tight, input, elem, texelem, htmlelem, name, label, source, lineNo, classes, counters, keyvals)  /* (empty : bool, sticky : bool, defaults : bool, text : string, replacers : list<string>, notag : bool, tight : bool, input : input, elem : string, texelem : string, htmlelem : string, name : string, label : string, source : string, lineNo : int, classes : list<string>, counters : list<(string, string)>, keyvals : list<(string, string)>) -> attrs */  {
  return { empty: empty, sticky: sticky, defaults: defaults, text: text, replacers: replacers, notag: notag, tight: tight, input: input, elem: elem, texelem: texelem, htmlelem: htmlelem, name: name, label: label, source: source, lineNo: lineNo, classes: classes, counters: counters, keyvals: keyvals };
}
function Cell(text, cellAttrs)  /* (text : string, cellAttrs : attrs) -> cell */  {
  return { text: text, cellAttrs: cellAttrs };
}
function Row(cells, rowAttrs)  /* (cells : list<cell>, rowAttrs : attrs) -> row */  {
  return { cells: cells, rowAttrs: rowAttrs };
}
var Numeric = 1;  /* citemode */ 
var Natural = 2;  /* citemode */ 
var Textual = 3;  /* citemode */ 
var Super = 4;  /* citemode */ 
var Auto = 5;  /* citemode */ 
function Citestyle(mode, open, close, citesep, aysep, yysep, sort, compress)  /* (mode : citemode, open : string, close : string, citesep : string, aysep : string, yysep : string, sort : bool, compress : bool) -> citestyle */  {
  return { mode: mode, open: open, close: close, citesep: citesep, aysep: aysep, yysep: yysep, sort: sort, compress: compress };
}
function Embedinfo(embedName, embedData)  /* (embedName : string, embedData : string) -> embedinfo */  {
  return { embedName: embedName, embedData: embedData };
}
function Rule(name, regex, action)  /* forall<a,b> (name : string, regex : std/regex/regex, action : (cap : std/regex/matched, context : b) -> a) -> rule<a,b> */  {
  return { name: name, regex: regex, action: action };
}
function Label(element, labelText, labelCaption, labelAttrs)  /* (element : string, labelText : string, labelCaption : string, labelAttrs : attrs) -> label */  {
  return { element: element, labelText: labelText, labelCaption: labelCaption, labelAttrs: labelAttrs };
}
var End = null;  /* lineMap */ 
function Include(line, start, count, fileName, lineMap, rest)  /* (line : int, start : int, count : int, fileName : string, lineMap : lineMap, rest : lineMap) -> lineMap */  {
  return { line: line, start: start, count: count, fileName: fileName, lineMap: lineMap, rest: rest };
}
function Link(href, title, linkattrs, linkid)  /* (href : string, title : string, linkattrs : attrs, linkid : string) -> link */  {
  return { href: href, title: title, linkattrs: linkattrs, linkid: linkid };
}
function Mathinfo(imageName, page, height, width, depth, iheight, iwidth, bboxFuzz, size, imageData, originalData)  /* (imageName : string, page : int, height : double, width : double, depth : double, iheight : double, iwidth : double, bboxFuzz : double, size : int, imageData : string, originalData : string) -> mathinfo */  {
  return { imageName: imageName, page: page, height: height, width: width, depth: depth, iheight: iheight, iwidth: iwidth, bboxFuzz: bboxFuzz, size: size, imageData: imageData, originalData: originalData };
}
var Plain = 1;  /* mathkind */ 
var Full = 2;  /* mathkind */ 
var Png = 1;  /* mathrender */ 
var Svg = 2;  /* mathrender */ 
function Succ(prev)  /* (prev : peano) -> peano */  {
  return { prev: prev };
}
var Zero = null;  /* peano */ 
 
// Automatically generated. Tests for the "FmtHtml" constructor of the ":formatter" type.
function isFmtHtml(formatter)  /* (formatter : formatter) -> bool */  {
  return (formatter === 1);
}
 
// Automatically generated. Tests for the "FmtTex" constructor of the ":formatter" type.
function isFmtTex(formatter)  /* (formatter : formatter) -> bool */  {
  return (formatter === 2);
}
 
// Automatically generated. Retrieves the `only` constructor field of the ":input" type.
function only(input0)  /* (input : input) -> exn maybe<formatter> */  {
  if (input0._tag === 6) {
    return input0.only;
  }
  else if (input0._tag === 7) {
    return input0.only;
  }
  else {
    return $std_core.patternMatchError("src\\common.kk(421, 8)", "only");
  }
}
 
// Automatically generated. Tests for the "Pre" constructor of the ":input" type.
function isPre(input0)  /* (input : input) -> bool */  {
  return (input0._tag === 1);
}
 
// Automatically generated. Tests for the "MathPre" constructor of the ":input" type.
function isMathPre(input0)  /* (input : input) -> bool */  {
  return (input0._tag === 2);
}
 
// Automatically generated. Tests for the "Math" constructor of the ":input" type.
function isMath(input0)  /* (input : input) -> bool */  {
  return (input0._tag === 3);
}
 
// Automatically generated. Tests for the "MathDefs" constructor of the ":input" type.
function isMathDefs(input0)  /* (input : input) -> bool */  {
  return (input0._tag === 4);
}
 
// Automatically generated. Tests for the "Tex" constructor of the ":input" type.
function isTex(input0)  /* (input : input) -> bool */  {
  return (input0._tag === 5);
}
 
// Automatically generated. Tests for the "Raw" constructor of the ":input" type.
function isRaw(input0)  /* (input : input) -> bool */  {
  return (input0._tag === 6);
}
 
// Automatically generated. Tests for the "Markdown" constructor of the ":input" type.
function isMarkdown(input0)  /* (input : input) -> bool */  {
  return (input0._tag === 7);
}
 
// Automatically generated. Retrieves the `empty` constructor field of the ":attrs" type.
function empty(attrs)  /* (attrs : attrs) -> bool */  {
  return attrs.empty;
}
 
// Automatically generated. Retrieves the `sticky` constructor field of the ":attrs" type.
function sticky(attrs)  /* (attrs : attrs) -> bool */  {
  return attrs.sticky;
}
 
// Automatically generated. Retrieves the `defaults` constructor field of the ":attrs" type.
function defaults(attrs)  /* (attrs : attrs) -> bool */  {
  return attrs.defaults;
}
 
// Automatically generated. Retrieves the `text` constructor field of the ":attrs" type.
function text(attrs)  /* (attrs : attrs) -> string */  {
  return attrs.text;
}
 
// Automatically generated. Retrieves the `replacers` constructor field of the ":attrs" type.
function replacers(attrs)  /* (attrs : attrs) -> list<string> */  {
  return attrs.replacers;
}
 
// Automatically generated. Retrieves the `notag` constructor field of the ":attrs" type.
function notag(attrs)  /* (attrs : attrs) -> bool */  {
  return attrs.notag;
}
 
// Automatically generated. Retrieves the `tight` constructor field of the ":attrs" type.
function tight(attrs)  /* (attrs : attrs) -> bool */  {
  return attrs.tight;
}
 
// Automatically generated. Retrieves the `input` constructor field of the ":attrs" type.
function input(attrs)  /* (attrs : attrs) -> input */  {
  return attrs.input;
}
 
// Automatically generated. Retrieves the `elem` constructor field of the ":attrs" type.
function elem(attrs)  /* (attrs : attrs) -> string */  {
  return attrs.elem;
}
 
// Automatically generated. Retrieves the `texelem` constructor field of the ":attrs" type.
function texelem(attrs)  /* (attrs : attrs) -> string */  {
  return attrs.texelem;
}
 
// Automatically generated. Retrieves the `htmlelem` constructor field of the ":attrs" type.
function htmlelem(attrs)  /* (attrs : attrs) -> string */  {
  return attrs.htmlelem;
}
 
// Automatically generated. Retrieves the `name` constructor field of the ":attrs" type.
function name(attrs)  /* (attrs : attrs) -> string */  {
  return attrs.name;
}
 
// Automatically generated. Retrieves the `label` constructor field of the ":attrs" type.
function label(attrs)  /* (attrs : attrs) -> string */  {
  return attrs.label;
}
 
// Automatically generated. Retrieves the `source` constructor field of the ":attrs" type.
function source(attrs)  /* (attrs : attrs) -> string */  {
  return attrs.source;
}
 
// Automatically generated. Retrieves the `lineNo` constructor field of the ":attrs" type.
function lineNo(attrs)  /* (attrs : attrs) -> int */  {
  return attrs.lineNo;
}
 
// Automatically generated. Retrieves the `classes` constructor field of the ":attrs" type.
function classes(attrs)  /* (attrs : attrs) -> list<string> */  {
  return attrs.classes;
}
 
// Automatically generated. Retrieves the `counters` constructor field of the ":attrs" type.
function counters(attrs)  /* (attrs : attrs) -> list<(string, string)> */  {
  return attrs.counters;
}
 
// Automatically generated. Retrieves the `keyvals` constructor field of the ":attrs" type.
function keyvals(attrs)  /* (attrs : attrs) -> list<(string, string)> */  {
  return attrs.keyvals;
}
function _copy(_this, empty0, sticky0, defaults0, text0, replacers0, notag0, tight0, input0, elem0, texelem0, htmlelem0, name0, label0, source0, lineNo0, classes0, counters0, keyvals0)  /* (attrs, empty : ?bool, sticky : ?bool, defaults : ?bool, text : ?string, replacers : ?list<string>, notag : ?bool, tight : ?bool, input : ?input, elem : ?string, texelem : ?string, htmlelem : ?string, name : ?string, label : ?string, source : ?string, lineNo : ?int, classes : ?list<string>, counters : ?list<(string, string)>, keyvals : ?list<(string, string)>) -> attrs */  {
  var empty_473 = (empty0 !== undefined) ? empty0 : empty(_this);
  var sticky_479 = (sticky0 !== undefined) ? sticky0 : sticky(_this);
  var defaults_485 = (defaults0 !== undefined) ? defaults0 : defaults(_this);
  var text_491 = (text0 !== undefined) ? text0 : text(_this);
  var replacers_497 = (replacers0 !== undefined) ? replacers0 : replacers(_this);
  var notag_503 = (notag0 !== undefined) ? notag0 : notag(_this);
  var tight_509 = (tight0 !== undefined) ? tight0 : tight(_this);
  var input_515 = (input0 !== undefined) ? input0 : input(_this);
  var elem_521 = (elem0 !== undefined) ? elem0 : elem(_this);
  var texelem_527 = (texelem0 !== undefined) ? texelem0 : texelem(_this);
  var htmlelem_533 = (htmlelem0 !== undefined) ? htmlelem0 : htmlelem(_this);
  var name_539 = (name0 !== undefined) ? name0 : name(_this);
  var label_547 = (label0 !== undefined) ? label0 : label(_this);
  var source_560 = (source0 !== undefined) ? source0 : source(_this);
  var lineNo_566 = (lineNo0 !== undefined) ? lineNo0 : lineNo(_this);
  var classes_572 = (classes0 !== undefined) ? classes0 : classes(_this);
  var counters_578 = (counters0 !== undefined) ? counters0 : counters(_this);
  var keyvals_584 = (keyvals0 !== undefined) ? keyvals0 : keyvals(_this);
  return Attrs(empty_473, sticky_479, defaults_485, text_491, replacers_497, notag_503, tight_509, input_515, elem_521, texelem_527, htmlelem_533, name_539, label_547, source_560, lineNo_566, classes_572, counters_578, keyvals_584);
}
 
// Automatically generated. Retrieves the `text` constructor field of the ":cell" type.
function text_1(cell)  /* (cell : cell) -> string */  {
  return cell.text;
}
 
// Automatically generated. Retrieves the `cellAttrs` constructor field of the ":cell" type.
function cellAttrs(cell)  /* (cell : cell) -> attrs */  {
  return cell.cellAttrs;
}
function _copy_1(_this, text0, cellAttrs0)  /* (cell, text : ?string, cellAttrs : ?attrs) -> cell */  {
  var text_638 = (text0 !== undefined) ? text0 : text_1(_this);
  var cellAttrs_644 = (cellAttrs0 !== undefined) ? cellAttrs0 : cellAttrs(_this);
  return Cell(text_638, cellAttrs_644);
}
 
// Automatically generated. Retrieves the `cells` constructor field of the ":row" type.
function cells(row)  /* (row : row) -> list<cell> */  {
  return row.cells;
}
 
// Automatically generated. Retrieves the `rowAttrs` constructor field of the ":row" type.
function rowAttrs(row)  /* (row : row) -> attrs */  {
  return row.rowAttrs;
}
function _copy_2(_this, cells0, rowAttrs0)  /* (row, cells : ?list<cell>, rowAttrs : ?attrs) -> row */  {
  var cells_675 = (cells0 !== undefined) ? cells0 : cells(_this);
  var rowAttrs_681 = (rowAttrs0 !== undefined) ? rowAttrs0 : rowAttrs(_this);
  return Row(cells_675, rowAttrs_681);
}
 
// Automatically generated. Tests for the "Numeric" constructor of the ":citemode" type.
function isNumeric(citemode)  /* (citemode : citemode) -> bool */  {
  return (citemode === 1);
}
 
// Automatically generated. Tests for the "Natural" constructor of the ":citemode" type.
function isNatural(citemode)  /* (citemode : citemode) -> bool */  {
  return (citemode === 2);
}
 
// Automatically generated. Tests for the "Textual" constructor of the ":citemode" type.
function isTextual(citemode)  /* (citemode : citemode) -> bool */  {
  return (citemode === 3);
}
 
// Automatically generated. Tests for the "Super" constructor of the ":citemode" type.
function isSuper(citemode)  /* (citemode : citemode) -> bool */  {
  return (citemode === 4);
}
 
// Automatically generated. Tests for the "Auto" constructor of the ":citemode" type.
function isAuto(citemode)  /* (citemode : citemode) -> bool */  {
  return (citemode === 5);
}
 
// Automatically generated. Retrieves the `mode` constructor field of the ":citestyle" type.
function mode(citestyle)  /* (citestyle : citestyle) -> citemode */  {
  return citestyle.mode;
}
 
// Automatically generated. Retrieves the `open` constructor field of the ":citestyle" type.
function open(citestyle)  /* (citestyle : citestyle) -> string */  {
  return citestyle.open;
}
 
// Automatically generated. Retrieves the `close` constructor field of the ":citestyle" type.
function close(citestyle)  /* (citestyle : citestyle) -> string */  {
  return citestyle.close;
}
 
// Automatically generated. Retrieves the `citesep` constructor field of the ":citestyle" type.
function citesep(citestyle)  /* (citestyle : citestyle) -> string */  {
  return citestyle.citesep;
}
 
// Automatically generated. Retrieves the `aysep` constructor field of the ":citestyle" type.
function aysep(citestyle)  /* (citestyle : citestyle) -> string */  {
  return citestyle.aysep;
}
 
// Automatically generated. Retrieves the `yysep` constructor field of the ":citestyle" type.
function yysep(citestyle)  /* (citestyle : citestyle) -> string */  {
  return citestyle.yysep;
}
 
// Automatically generated. Retrieves the `sort` constructor field of the ":citestyle" type.
function sort(citestyle)  /* (citestyle : citestyle) -> bool */  {
  return citestyle.sort;
}
 
// Automatically generated. Retrieves the `compress` constructor field of the ":citestyle" type.
function compress(citestyle)  /* (citestyle : citestyle) -> bool */  {
  return citestyle.compress;
}
function _copy_3(_this, mode0, open0, close0, citesep0, aysep0, yysep0, sort0, compress0)  /* (citestyle, mode : ?citemode, open : ?string, close : ?string, citesep : ?string, aysep : ?string, yysep : ?string, sort : ?bool, compress : ?bool) -> citestyle */  {
  var mode_802 = (mode0 !== undefined) ? mode0 : mode(_this);
  var open_808 = (open0 !== undefined) ? open0 : open(_this);
  var close_814 = (close0 !== undefined) ? close0 : close(_this);
  var citesep_820 = (citesep0 !== undefined) ? citesep0 : citesep(_this);
  var aysep_826 = (aysep0 !== undefined) ? aysep0 : aysep(_this);
  var yysep_832 = (yysep0 !== undefined) ? yysep0 : yysep(_this);
  var sort_838 = (sort0 !== undefined) ? sort0 : sort(_this);
  var compress_844 = (compress0 !== undefined) ? compress0 : compress(_this);
  return Citestyle(mode_802, open_808, close_814, citesep_820, aysep_826, yysep_832, sort_838, compress_844);
}
 
// Automatically generated. Retrieves the `embedName` constructor field of the ":embedinfo" type.
function embedName(embedinfo)  /* (embedinfo : embedinfo) -> string */  {
  return embedinfo.embedName;
}
 
// Automatically generated. Retrieves the `embedData` constructor field of the ":embedinfo" type.
function embedData(embedinfo)  /* (embedinfo : embedinfo) -> string */  {
  return embedinfo.embedData;
}
function _copy_4(_this, embedName0, embedData0)  /* (embedinfo, embedName : ?string, embedData : ?string) -> embedinfo */  {
  var embedName_887 = (embedName0 !== undefined) ? embedName0 : embedName(_this);
  var embedData_893 = (embedData0 !== undefined) ? embedData0 : embedData(_this);
  return Embedinfo(embedName_887, embedData_893);
}
 
// Automatically generated. Retrieves the `name` constructor field of the ":rule" type.
function name_1(rule)  /* forall<a,b> (rule : rule<a,b>) -> string */  {
  return rule.name;
}
 
// Automatically generated. Retrieves the `regex` constructor field of the ":rule" type.
function regex(rule)  /* forall<a,b> (rule : rule<a,b>) -> std/regex/regex */  {
  return rule.regex;
}
 
// Automatically generated. Retrieves the `action` constructor field of the ":rule" type.
function action(rule)  /* forall<a,b> (rule : rule<a,b>) -> ((cap : std/regex/matched, context : b) -> a) */  {
  return rule.action;
}
function _copy_5(_this, name0, regex0, action0)  /* forall<a,b> (rule<a,b>, name : ?string, regex : ?std/regex/regex, action : ?(cap : std/regex/matched, context : b) -> a) -> rule<a,b> */  {
  var name_1011 = (name0 !== undefined) ? name0 : name_1(_this);
  var regex_1038 = (regex0 !== undefined) ? regex0 : regex(_this);
  var action_1047 = (action0 !== undefined) ? action0 : action(_this);
  return Rule(name_1011, regex_1038, action_1047);
}
 
// Automatically generated. Retrieves the `element` constructor field of the ":label" type.
function element(label0)  /* (label : label) -> string */  {
  return label0.element;
}
 
// Automatically generated. Retrieves the `labelText` constructor field of the ":label" type.
function labelText(label0)  /* (label : label) -> string */  {
  return label0.labelText;
}
 
// Automatically generated. Retrieves the `labelCaption` constructor field of the ":label" type.
function labelCaption(label0)  /* (label : label) -> string */  {
  return label0.labelCaption;
}
 
// Automatically generated. Retrieves the `labelAttrs` constructor field of the ":label" type.
function labelAttrs(label0)  /* (label : label) -> attrs */  {
  return label0.labelAttrs;
}
function _copy_6(_this, element0, labelText0, labelCaption0, labelAttrs0)  /* (label, element : ?string, labelText : ?string, labelCaption : ?string, labelAttrs : ?attrs) -> label */  {
  var element_1140 = (element0 !== undefined) ? element0 : element(_this);
  var labelText_1146 = (labelText0 !== undefined) ? labelText0 : labelText(_this);
  var labelCaption_1152 = (labelCaption0 !== undefined) ? labelCaption0 : labelCaption(_this);
  var labelAttrs_1158 = (labelAttrs0 !== undefined) ? labelAttrs0 : labelAttrs(_this);
  return Label(element_1140, labelText_1146, labelCaption_1152, labelAttrs_1158);
}
 
// Automatically generated. Retrieves the `line` constructor field of the ":lineMap" type.
function line(lineMap0)  /* (lineMap : lineMap) -> exn int */  {
  return (lineMap0 != null) ? lineMap0.line : $std_core.patternMatchError("src\\common.kk(159, 5)", "line");
}
 
// Automatically generated. Retrieves the `start` constructor field of the ":lineMap" type.
function start(lineMap0)  /* (lineMap : lineMap) -> exn int */  {
  return (lineMap0 != null) ? lineMap0.start : $std_core.patternMatchError("src\\common.kk(160, 5)", "start");
}
 
// Automatically generated. Retrieves the `count` constructor field of the ":lineMap" type.
function count(lineMap0)  /* (lineMap : lineMap) -> exn int */  {
  return (lineMap0 != null) ? lineMap0.count : $std_core.patternMatchError("src\\common.kk(161, 5)", "count");
}
 
// Automatically generated. Retrieves the `fileName` constructor field of the ":lineMap" type.
function fileName(lineMap0)  /* (lineMap : lineMap) -> exn string */  {
  return (lineMap0 != null) ? lineMap0.fileName : $std_core.patternMatchError("src\\common.kk(162, 5)", "fileName");
}
 
// Automatically generated. Retrieves the `lineMap` constructor field of the ":lineMap" type.
function lineMap(lineMap0)  /* (lineMap : lineMap) -> exn lineMap */  {
  return (lineMap0 != null) ? lineMap0.lineMap : $std_core.patternMatchError("src\\common.kk(163, 5)", "lineMap");
}
 
// Automatically generated. Retrieves the `rest` constructor field of the ":lineMap" type.
function rest(lineMap0)  /* (lineMap : lineMap) -> exn lineMap */  {
  return (lineMap0 != null) ? lineMap0.rest : $std_core.patternMatchError("src\\common.kk(164, 5)", "rest");
}
 
// Automatically generated. Tests for the "End" constructor of the ":lineMap" type.
function isEnd(lineMap0)  /* (lineMap : lineMap) -> bool */  {
  return (lineMap0 == null);
}
 
// Automatically generated. Tests for the "Include" constructor of the ":lineMap" type.
function isInclude(lineMap0)  /* (lineMap : lineMap) -> bool */  {
  return (lineMap0 != null);
}
 
// Automatically generated. Retrieves the `href` constructor field of the ":link" type.
function href(link)  /* (link : link) -> string */  {
  return link.href;
}
 
// Automatically generated. Retrieves the `title` constructor field of the ":link" type.
function title(link)  /* (link : link) -> string */  {
  return link.title;
}
 
// Automatically generated. Retrieves the `linkattrs` constructor field of the ":link" type.
function linkattrs(link)  /* (link : link) -> attrs */  {
  return link.linkattrs;
}
 
// Automatically generated. Retrieves the `linkid` constructor field of the ":link" type.
function linkid(link)  /* (link : link) -> string */  {
  return link.linkid;
}
function _copy_7(_this, href0, title0, linkattrs0, linkid0)  /* (link, href : ?string, title : ?string, linkattrs : ?attrs, linkid : ?string) -> link */  {
  var href_1335 = (href0 !== undefined) ? href0 : href(_this);
  var title_1341 = (title0 !== undefined) ? title0 : title(_this);
  var linkattrs_1347 = (linkattrs0 !== undefined) ? linkattrs0 : linkattrs(_this);
  var linkid_1353 = (linkid0 !== undefined) ? linkid0 : linkid(_this);
  return Link(href_1335, title_1341, linkattrs_1347, linkid_1353);
}
 
// Automatically generated. Retrieves the `imageName` constructor field of the ":mathinfo" type.
function imageName(mathinfo)  /* (mathinfo : mathinfo) -> string */  {
  return mathinfo.imageName;
}
 
// Automatically generated. Retrieves the `page` constructor field of the ":mathinfo" type.
function page(mathinfo)  /* (mathinfo : mathinfo) -> int */  {
  return mathinfo.page;
}
 
// Automatically generated. Retrieves the `height` constructor field of the ":mathinfo" type.
function height(mathinfo)  /* (mathinfo : mathinfo) -> double */  {
  return mathinfo.height;
}
 
// Automatically generated. Retrieves the `width` constructor field of the ":mathinfo" type.
function width(mathinfo)  /* (mathinfo : mathinfo) -> double */  {
  return mathinfo.width;
}
 
// Automatically generated. Retrieves the `depth` constructor field of the ":mathinfo" type.
function depth(mathinfo)  /* (mathinfo : mathinfo) -> double */  {
  return mathinfo.depth;
}
 
// Automatically generated. Retrieves the `iheight` constructor field of the ":mathinfo" type.
function iheight(mathinfo)  /* (mathinfo : mathinfo) -> double */  {
  return mathinfo.iheight;
}
 
// Automatically generated. Retrieves the `iwidth` constructor field of the ":mathinfo" type.
function iwidth(mathinfo)  /* (mathinfo : mathinfo) -> double */  {
  return mathinfo.iwidth;
}
 
// Automatically generated. Retrieves the `bboxFuzz` constructor field of the ":mathinfo" type.
function bboxFuzz(mathinfo)  /* (mathinfo : mathinfo) -> double */  {
  return mathinfo.bboxFuzz;
}
 
// Automatically generated. Retrieves the `size` constructor field of the ":mathinfo" type.
function size(mathinfo)  /* (mathinfo : mathinfo) -> int */  {
  return mathinfo.size;
}
 
// Automatically generated. Retrieves the `imageData` constructor field of the ":mathinfo" type.
function imageData(mathinfo)  /* (mathinfo : mathinfo) -> string */  {
  return mathinfo.imageData;
}
 
// Automatically generated. Retrieves the `originalData` constructor field of the ":mathinfo" type.
function originalData(mathinfo)  /* (mathinfo : mathinfo) -> string */  {
  return mathinfo.originalData;
}
function _copy_8(_this, imageName0, page0, height0, width0, depth0, iheight0, iwidth0, bboxFuzz0, size0, imageData0, originalData0)  /* (mathinfo, imageName : ?string, page : ?int, height : ?double, width : ?double, depth : ?double, iheight : ?double, iwidth : ?double, bboxFuzz : ?double, size : ?int, imageData : ?string, originalData : ?string) -> mathinfo */  {
  var imageName_1471 = (imageName0 !== undefined) ? imageName0 : imageName(_this);
  var page_1477 = (page0 !== undefined) ? page0 : page(_this);
  var height_1483 = (height0 !== undefined) ? height0 : height(_this);
  var width_1489 = (width0 !== undefined) ? width0 : width(_this);
  var depth_1495 = (depth0 !== undefined) ? depth0 : depth(_this);
  var iheight_1501 = (iheight0 !== undefined) ? iheight0 : iheight(_this);
  var iwidth_1507 = (iwidth0 !== undefined) ? iwidth0 : iwidth(_this);
  var bboxFuzz_1513 = (bboxFuzz0 !== undefined) ? bboxFuzz0 : bboxFuzz(_this);
  var size_1519 = (size0 !== undefined) ? size0 : size(_this);
  var imageData_1525 = (imageData0 !== undefined) ? imageData0 : imageData(_this);
  var originalData_1531 = (originalData0 !== undefined) ? originalData0 : originalData(_this);
  return Mathinfo(imageName_1471, page_1477, height_1483, width_1489, depth_1495, iheight_1501, iwidth_1507, bboxFuzz_1513, size_1519, imageData_1525, originalData_1531);
}
 
// Automatically generated. Tests for the "Plain" constructor of the ":mathkind" type.
function isPlain(mathkind)  /* (mathkind : mathkind) -> bool */  {
  return (mathkind === 1);
}
 
// Automatically generated. Tests for the "Full" constructor of the ":mathkind" type.
function isFull(mathkind)  /* (mathkind : mathkind) -> bool */  {
  return (mathkind === 2);
}
 
// Automatically generated. Tests for the "Png" constructor of the ":mathrender" type.
function isPng(mathrender)  /* (mathrender : mathrender) -> bool */  {
  return (mathrender === 1);
}
 
// Automatically generated. Tests for the "Svg" constructor of the ":mathrender" type.
function isSvg(mathrender)  /* (mathrender : mathrender) -> bool */  {
  return (mathrender === 2);
}
 
// Automatically generated. Retrieves the `prev` constructor field of the ":peano" type.
function prev(peano0)  /* (peano : peano) -> exn peano */  {
  return (peano0 != null) ? peano0.prev : $std_core.patternMatchError("src\\common.kk(27, 8)", "prev");
}
 
// Automatically generated. Tests for the "Succ" constructor of the ":peano" type.
function isSucc(peano0)  /* (peano : peano) -> bool */  {
  return (peano0 != null);
}
 
// Automatically generated. Tests for the "Zero" constructor of the ":peano" type.
function isZero(peano0)  /* (peano : peano) -> bool */  {
  return (peano0 == null);
}
function _eq__eq_(x, y)  /* (x : formatter, y : formatter) -> bool */  {
  return (x === 1) ? isFmtHtml(y) : isFmtTex(y);
}
function _createMarkdown(only0)  /* (only : ?maybe<formatter>) -> input */  {
  var only_1663 = (only0 !== undefined) ? only0 : $std_core.Nothing;
  return Markdown(only_1663);
}
 
// Attributes
function _createAttrs(empty0, sticky0, defaults0, text0, replacers0, notag0, tight0, input0, elem0, texelem0, htmlelem0, name0, label0, source0, lineNo0, classes0, counters0, keyvals0)  /* (empty : ?bool, sticky : ?bool, defaults : ?bool, text : ?string, replacers : ?list<string>, notag : ?bool, tight : ?bool, input : ?input, elem : ?string, texelem : ?string, htmlelem : ?string, name : ?string, label : ?string, source : ?string, lineNo : ?int, classes : ?list<string>, counters : ?list<(string, string)>, keyvals : ?list<(string, string)>) -> attrs */  {
  var empty_1672 = (empty0 !== undefined) ? empty0 : false;
  var sticky_1676 = (sticky0 !== undefined) ? sticky0 : false;
  var defaults_1680 = (defaults0 !== undefined) ? defaults0 : true;
  var text_1684 = (text0 !== undefined) ? text0 : "";
  var replacers_1689 = (replacers0 !== undefined) ? replacers0 : $std_core.Nil;
  var notag_1693 = (notag0 !== undefined) ? notag0 : false;
  var tight_1697 = (tight0 !== undefined) ? tight0 : false;
  var input_1704 = (input0 !== undefined) ? input0 : _createMarkdown(undefined);
  var elem_1708 = (elem0 !== undefined) ? elem0 : "";
  var texelem_1712 = (texelem0 !== undefined) ? texelem0 : "";
  var htmlelem_1716 = (htmlelem0 !== undefined) ? htmlelem0 : "";
  var name_1720 = (name0 !== undefined) ? name0 : "";
  var label_1724 = (label0 !== undefined) ? label0 : "";
  var source_1728 = (source0 !== undefined) ? source0 : "";
  var lineNo_1732 = (lineNo0 !== undefined) ? lineNo0 : 0;
  var classes_1737 = (classes0 !== undefined) ? classes0 : $std_core.Nil;
  var counters_1742 = (counters0 !== undefined) ? counters0 : $std_core.Nil;
  var keyvals_1747 = (keyvals0 !== undefined) ? keyvals0 : $std_core.Nil;
  return Attrs(empty_1672, sticky_1676, defaults_1680, text_1684, replacers_1689, notag_1693, tight_1697, input_1704, elem_1708, texelem_1712, htmlelem_1716, name_1720, label_1724, source_1728, lineNo_1732, classes_1737, counters_1742, keyvals_1747);
}
var attrsNone = _createAttrs(true, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
function _createCell(text0, cellAttrs0)  /* (text : string, cellAttrs : ?attrs) -> cell */  {
  var cellAttrs_1813 = (cellAttrs0 !== undefined) ? cellAttrs0 : attrsNone;
  return Cell(text0, cellAttrs_1813);
}
function _createCitestyle(mode0, open0, close0, citesep0, aysep0, yysep0, sort0, compress0)  /* (mode : citemode, open : string, close : string, citesep : string, aysep : string, yysep : string, sort : ?bool, compress : ?bool) -> citestyle */  {
  var sort_1823 = (sort0 !== undefined) ? sort0 : false;
  var compress_1827 = (compress0 !== undefined) ? compress0 : false;
  return Citestyle(mode0, open0, close0, citesep0, aysep0, yysep0, sort_1823, compress_1827);
}
 
// A label is created for every element with an id.
function _createLabel(element0, labelText0, labelCaption0, labelAttrs0)  /* (element : string, labelText : string, labelCaption : string, labelAttrs : ?attrs) -> label */  {
  var labelAttrs_1843 = (labelAttrs0 !== undefined) ? labelAttrs0 : attrsNone;
  return Label(element0, labelText0, labelCaption0, labelAttrs_1843);
}
 
// A url link.
function _createLink(href0, title0, linkattrs0, linkid0)  /* (href : string, title : ?string, linkattrs : ?attrs, linkid : ?string) -> link */  {
  var title_1857 = (title0 !== undefined) ? title0 : "";
  var linkattrs_1861 = (linkattrs0 !== undefined) ? linkattrs0 : attrsNone;
  var linkid_1865 = (linkid0 !== undefined) ? linkid0 : "";
  return Link(href0, title_1857, linkattrs_1861, linkid_1865);
}
function _createRaw(only0)  /* (only : ?maybe<formatter>) -> input */  {
  var only_1878 = (only0 !== undefined) ? only0 : $std_core.Nothing;
  return Raw(only_1878);
}
function _createRow(cells0, rowAttrs0)  /* (cells : list<cell>, rowAttrs : ?attrs) -> row */  {
  var rowAttrs_1887 = (rowAttrs0 !== undefined) ? rowAttrs0 : attrsNone;
  return Row(cells0, rowAttrs_1887);
}
function contains(xs, s)  /* (xs : list<string>, s : string) -> bool */  {
  return $std_core.bool_1($std_core.find(xs, function(x  /* string */ ) {  return (x === s);}));
}
function quote(s)  /* (s : string) -> string */  {
  if (((s).indexOf("\"") >= 0)) {
    return ("\'" + (s + "\'"));
  }
  else {
    return ("\"" + (s + "\""));
  }
}
function addClass(attrs, cname)  /* (attrs : attrs, cname : string) -> attrs */  {
  if ((cname === "")) {
    return attrs;
  }
  else {
    $std_core._unit_;
  }
  var _x0 = $std_core.any(classes(attrs), function(nm  /* string */ ) {  return (nm === cname);});
  if (_x0) {
    return attrs;
  }
  else {
    return _copy(attrs, false, undefined, undefined, (text(attrs) + (" ; class: " + quote(cname))), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $std_core._plus__3(classes(attrs), $std_core.Cons(cname, $std_core.Nil)), undefined, undefined);
  }
}
function addClasses(attrs, classes0)  /* (attrs : attrs, classes : list<string>) -> attrs */  {
  return $std_core.foldl(classes0, attrs, function(acc  /* attrs */ , c  /* string */ ) {  return addClass(acc, c);});
}
function showFormatter(f)  /* (f : formatter) -> string */  {
  return (f === 2) ? "tex" : "html";
}
function showInput(r)  /* (r : input) -> string */  {
  if (r._tag === 1) {
    return "pre";
  }
  else if (r._tag === 2) {
    return "mathpre";
  }
  else if (r._tag === 3) {
    return "math";
  }
  else if (r._tag === 4) {
    return "mathdefs";
  }
  else if (r._tag === 5) {
    return "tex";
  }
  else if (r._tag === 6) {
    return ("raw(" + ($std_core.maybe(r.only, "", showFormatter) + ")"));
  }
  else {
    return "markdown";
  }
}
function addInputClass(attrs)  /* (attrs : attrs) -> attrs */  {
  var _x0 = isMarkdown(input(attrs));
  if (_x0) {
    return attrs;
  }
  else {
    return addClass(attrs, ("input-" + showInput(input(attrs))));
  }
}
function addKeyval(attrs, key, value)  /* (attrs : attrs, key : string, value : string) -> attrs */  {
  var arg_3219 = attrs;
  var arg_3237 = $std_core._plus__3($std_core.filter(keyvals(attrs), function(kv  /* (string, string) */ ) {  return ($std_core.fst(kv) !== key);}), $std_core.Cons($std_core._tuple2_(key, value), $std_core.Nil));
  var arg_3223 = (text(attrs) + (" ; " + (key + (": " + quote(value)))));
  var arg_3220 = false;
  var arg_3221 = undefined;
  var arg_3222 = undefined;
  var arg_3224 = undefined;
  var arg_3225 = undefined;
  var arg_3226 = undefined;
  var arg_3227 = undefined;
  var arg_3228 = undefined;
  var arg_3229 = undefined;
  var arg_3230 = undefined;
  var arg_3231 = undefined;
  var arg_3232 = undefined;
  var arg_3233 = undefined;
  var arg_3234 = undefined;
  var arg_3235 = undefined;
  var arg_3236 = undefined;
  return _copy(arg_3219, arg_3220, arg_3221, arg_3222, arg_3223, arg_3224, arg_3225, arg_3226, arg_3227, arg_3228, arg_3229, arg_3230, arg_3231, arg_3232, arg_3233, arg_3234, arg_3235, arg_3236, arg_3237);
}
function addKeyvalIfNotEmpty(attrs, key, value)  /* (attrs : attrs, key : string, value : string) -> attrs */  {
  var _x0 = ((value === "") || (key === ""));
  return (_x0) ? attrs : addKeyval(attrs, key, value);
}
function hasKey(attrs, key)  /* (attrs : attrs, key : string) -> maybe<string> */  {
  return $std_core.maybe($std_core.find(keyvals(attrs), function(kv  /* (string, string) */ ) {  return ($std_core.fst(kv) === key);}), $std_core.Nothing, function(kv0  /* (string, string) */ ) {  return $std_core.Just($std_core.snd(kv0));});
}
function addKeyvalIfNotExist(attrs, key, value)  /* (attrs : attrs, key : string, value : string) -> attrs */  {
  var _x0 = $std_core.bool_1(hasKey(attrs, key));
  return (_x0) ? attrs : addKeyval(attrs, key, value);
}
function addKeyvals(attrs, kvs)  /* (attrs : attrs, kvs : list<(string, string)>) -> attrs */  {
  return $std_core.foldl(kvs, attrs, function(acc  /* attrs */ , kv  /* (string, string) */ ) {  return addKeyval(acc, $std_core.fst(kv), $std_core.snd(kv));});
}
var citeAuto = _createCitestyle(Auto, "\\[", "\\]", ", ", ", ", ", ", undefined, undefined);
var citeNatural = _createCitestyle(Natural, "(", ")", "; ", ", ", ", ", undefined, undefined);
var citeNumeric = _createCitestyle(Numeric, "\\[", "\\]", ", ", ", ", ", ", true, true);
var citeSqNatural = _createCitestyle(Natural, "\\[", "\\]", "; ", ", ", ", ", undefined, undefined);
var citeSuper = _createCitestyle(Super, "", "", ",", ",", ",", true, true);
var citeTextual = _createCitestyle(Textual, "(", ")", "; ", ", ", ", ", undefined, undefined);
 
// Combine rules into one regular expression. 
// For inline expressions, this does not improve the performance much.
function combineRules(rules)  /* forall<a,b> (rules : list<rule<a,b>>) -> rule<a,b> */  {
  var _x0 = $std_core.unzip($std_core.map_3(rules, function(rule  /* rule<4272,4273> */ ) {  return $std_core._tuple2_($std_regex.source(regex(rule)), action(rule));}));
  var actions = $std_core.vector_4(_x0.snd);
  var rx = $std_regex.regexAlt(_x0.fst, undefined, undefined);
  return Rule("<combined>", rx, function(cap  /* std/regex/matched */ , context  /* 4273 */ ) {  var i = $std_core.max(0, $std_regex.alternative($std_regex.groups(cap))); return $std_core.unsafeTotal(function() {  return (actions)[i](cap, context);});});
}
var rxspaces = $std_regex.regex("\\s+", undefined, undefined);
 
// A definition identifier is always lower case and sequences of spaces are replaced by a single space.
// Used for links for example.
function definitionId(s)  /* (s : string) -> string */  {
  return $std_core.toLower($std_regex.replaceAll_1(s, rxspaces, " ", undefined));
}
function elementName(attrs, def)  /* (attrs : attrs, def : string) -> string */  {
  var _x0 = (elem(attrs) === "");
  return (_x0) ? def : elem(attrs);
}
var rxChoicePattern = $std_regex.regex("\\[(\\w+(?:,\\w+)*)\\]", undefined, undefined);
 
/* --------------------------------------
 Expand list style patterns
---------------------------------------- */
function expandChoices(s)  /* (s : string) -> list<string> */  {
  var _x0 = $std_regex.find(s, rxChoicePattern, undefined);
  if (_x0 != null) {
    var pre = $std_core.substr_1(s, 0, $std_regex.index(_x0.unJust));
    var post = ((s).substr($std_regex.next(_x0.unJust)));
    return $std_core.map_3($std_core.list_4($std_core.split_1($std_regex._index_($std_regex.groups(_x0.unJust), 1), ",")), function(part  /* string */ ) {  return (pre + (part + post));});
  }
  else {
    return $std_core.Cons(s, $std_core.Nil);
  }
}
 
// Normalize an identifier: just keep letters, digits, underscores, colons, stars, and dashes,
// replace whitespace, colons, and stars by a dash, and convert to lower case.
function normalizeId(txt)  /* (txt : string) -> string */  {
  return $std_core.toLower($std_regex.replaceAll_1($std_regex.replaceAll_1(txt, $std_regex.regex("[^\\w\\-_:\\*\\s]+", undefined, undefined), "", undefined), $std_regex.regex("\\s+|[:\\*]", undefined, undefined), "-", undefined));
}
 
// Generate a fresh id if it is not specified
function generateHeaderId(attrs, heading, pre)  /* (attrs : attrs, heading : string, pre : ?string) -> attrs */  {
  var pre_5285 = (pre !== undefined) ? pre : "sec-";
  var _x0 = (name(attrs) !== "");
  if (_x0) {
    var attrs1 = attrs;
  }
  else {
    var newid = normalizeId(heading);
    var newname = ((newid === "")) ? "section" : (pre_5285 + newid);
    var attrs1 = _copy(attrs, false, undefined, undefined, (text(attrs) + (" ; id:" + quote(newname))), undefined, undefined, undefined, undefined, undefined, undefined, undefined, newname, undefined, undefined, undefined, undefined, undefined, undefined);
  }
  return attrs1;
}
function hasClass(attrs, className)  /* (attrs : attrs, className : string) -> bool */  {
  return $std_core.bool_1($std_core.find(classes(attrs), function(cname  /* string */ ) {  return (cname === className);}));
}
function hasBoolKey(attrs, key)  /* (attrs : attrs, key : string) -> bool */  {
  var value = $std_core.toLower($std_core.maybe(hasKey(attrs, key), "", $std_core.id));
  return (hasClass(attrs, key) || ((value === "true") || (value === "1")));
}
var rxamp = $std_regex.regex("&", undefined, undefined);
var rxapos = $std_regex.regex("\'", undefined, undefined);
var rxgt = $std_regex.regex(">", undefined, undefined);
var rxhtml = $std_regex.regex("[&<>\"\']", undefined, undefined);
var rxlt = $std_regex.regex("<", undefined, undefined);
var rxnoEntityAmp = $std_regex.regex("&(?!#?\\w+;)", undefined, undefined);
var rxquot = $std_regex.regex("\"", undefined, undefined);
function htmlEscape(s, allowEntity)  /* (s : string, allowEntity : ?bool) -> string */  {
  var allowEntity_5969 = (allowEntity !== undefined) ? allowEntity : false;
  if ($std_regex.contains(s, rxhtml, undefined)) {
    var _x0 = (allowEntity_5969) ? rxnoEntityAmp : rxamp;
    return $std_regex.replaceAll_1($std_regex.replaceAll_1($std_regex.replaceAll_1($std_regex.replaceAll_1($std_regex.replaceAll_1(s, _x0, "&amp;", undefined), rxlt, "&lt;", undefined), rxgt, "&gt;", undefined), rxquot, "&quot;", undefined), rxapos, "&#39;", undefined);
  }
  else {
    return s;
  }
}
function isNumCite(cs)  /* (cs : citestyle) -> bool */  {
  var _x0 = mode(cs);
  if (_x0 === 2) {
    return false;
  }
  else if (_x0 === 3) {
    return false;
  }
  else if (_x0 === 5) {
    return false;
  }
  else {
    return true;
  }
}
var rxLineBreak = $std_regex.regex("\\\\\\n\\r?[ \\t]*", undefined, undefined);
 
// Join lines that were broken using `\` followed by a newline.
function joinLines(s)  /* (s : string) -> string */  {
  return $std_regex.replaceAll_1(s, rxLineBreak, "", undefined);
}
function json(s)  /* (s : string) -> string */  {
  var cs = $std_core.map_3($std_core.list_5(s), function(c  /* char */ ) {  if ((c === '\n')) {  return "\\n";} else {  if ((c === '\r')) {  return "\\r";} else {  if ((c === '\t')) {  return "\\t";} else {  if ((c === '\"')) {  return "\\\"";} else {  if ((c === '\\')) {  return "\\\\";} else {  var _x0 = ((c >= ' ') && (c <= '~')); if (_x0) {  return (c);} else {  return ("\\u" + $std_core.showHex((c).charCodeAt(0), 4, undefined));}}}}}}});
  return ("\"" + ($std_core.join_3(cs) + "\""));
}
function logLocation(lineInfo, logname)  /* (lineInfo : string, logname : ?string) -> () */  {
  var logname_7557 = (logname !== undefined) ? logname : "warning";
  return $std_log.log(logname_7557, ("  location: " + lineInfo));
}
function lookupKey(attrs, key, def)  /* (attrs : attrs, key : string, def : string) -> string */  {
  return $std_core.maybe(hasKey(attrs, key), def, $std_core.id);
}
 
// Generic rule matcher: takes a list of rules and applies the action that matches
// on the given "src". Returns the result of the action and the string following the
// match.
function matchRules(rules, context, src, def)  /* forall<a,b> (rules : grammar<a,b>, context : b, src : string, def : (string) -> a) -> (a, int, string) */  { tailcall: while(1)
{
  if (rules == null) {
    var matched = $std_core.substr_1(src, 0, 1);
    return $std_core._tuple3_(def(matched), 1, matched);
  }
  else {
    var _x0 = $std_regex.find(src, regex(rules.head), undefined);
    if (_x0 != null) {
      return $std_core._tuple3_(action(rules.head)(_x0.unJust, context), $std_regex.next(_x0.unJust), $std_regex.matched(_x0.unJust));
    }
    else {
      {
        rules = rules.tail;
        continue tailcall;
      }
    }
  }
}}
var mimes = $std_dict.dict_1($std_core.conslist([$std_core._tuple2_("", "text/plain"), $std_core._tuple2_("mdk", "text/plain"), $std_core._tuple2_("md", "text/plain"), $std_core._tuple2_("mkdn", "text/plain"), $std_core._tuple2_("markdown", "text/plain"), $std_core._tuple2_("txt", "text/plain"), $std_core._tuple2_("css", "text/css"), $std_core._tuple2_("html", "text/html"), $std_core._tuple2_("htm", "text/html"), $std_core._tuple2_("js", "text/javascript"), $std_core._tuple2_("tex", "text/tex"), $std_core._tuple2_("sty", "text/latex"), $std_core._tuple2_("cls", "text/latex"), $std_core._tuple2_("bib", "text/plain"), $std_core._tuple2_("bbl", "text/plain"), $std_core._tuple2_("bst", "text/plain"), $std_core._tuple2_("aux", "text/plain"), $std_core._tuple2_("png", "image/png"), $std_core._tuple2_("jpg", "image/jpg"), $std_core._tuple2_("jpeg", "image/jpg"), $std_core._tuple2_("gif", "image/gif"), $std_core._tuple2_("svg", "image/svg+xml"), $std_core._tuple2_("eps", "image/eps"), $std_core._tuple2_("pdf", "application/pdf")], $std_core.Nil));
function mimeFromExt(fname)  /* (fname : string) -> string */  {
  var ext = $std_core.toLower((($std_path.extname(fname)).substr(1)));
  var _x0 = $std_dict._lb__rb__2(mimes, ext);
  return (_x0 != null) ? _x0.unJust : "";
}
function newLink(href0, title0, linkattrs0, linkid0, bench)  /* (href : string, title : ?string, linkattrs : ?attrs, linkid : ?string, bench : bool) -> link */  {
  var title_8314 = (title0 !== undefined) ? title0 : "";
  var linkattrs_8318 = (linkattrs0 !== undefined) ? linkattrs0 : attrsNone;
  var linkid_8322 = (linkid0 !== undefined) ? linkid0 : "";
  var _x1 = (!(bench) && $std_core.startsWith(href0, "#"));
  var _x0 = (_x1) ? addClass(linkattrs_8318, "localref") : linkattrs_8318;
  return _createLink(href0, title_8314, _x0, linkid_8322);
}
var rxVal = "\\s*(\"[^\"]*\"|\'[^\']*\'|[^\\s,;\'\"]*)\\s*";
var rxValOpt = ("(?:," + (rxVal + ")?"));
var rxVals = (rxVal + ("," + (rxVal + (rxValOpt + (rxValOpt + rxValOpt)))));
var rxCiteSpec = $std_regex.regex(("^(natural|sqnatural|textual|numeric|super|auto)(?:[:](sort|nosort))?(?:[:]" + (rxVals + ")?")), undefined, undefined);
function unquote(s)  /* (s : string) -> string */  {
  var _x0 = ($std_core.startsWith(s, "\'") && $std_core.endsWith(s, "\'"));
  if (_x0) {
    return $std_core.substr_1(s, 1, (((s).length - 2)|0));
  }
  else {
    var _x1 = ($std_core.startsWith(s, "\"") && $std_core.endsWith(s, "\""));
    if (_x1) {
      return $std_core.substr_1(s, 1, (((s).length - 2)|0));
    }
    else {
      return s;
    }
  }
}
function parseCiteStyle(text0)  /* (text : string) -> maybe<citestyle> */  {
  var _x0 = $std_regex.find($std_core.toLower(text0), rxCiteSpec, undefined);
  if (_x0 != null) {
    var _x1 = ($std_regex._index_($std_regex.groups(_x0.unJust), 1) === "natural");
    if (_x1) {
      var cite = citeNatural;
    }
    else {
      var _x2 = ($std_regex._index_($std_regex.groups(_x0.unJust), 1) === "sqnatural");
      if (_x2) {
        var cite = citeSqNatural;
      }
      else {
        var _x3 = ($std_regex._index_($std_regex.groups(_x0.unJust), 1) === "textual");
        if (_x3) {
          var cite = citeTextual;
        }
        else {
          var _x4 = ($std_regex._index_($std_regex.groups(_x0.unJust), 1) === "numeric");
          if (_x4) {
            var cite = citeNumeric;
          }
          else {
            var _x5 = ($std_regex._index_($std_regex.groups(_x0.unJust), 1) === "super");
            var cite = (_x5) ? citeSuper : citeAuto;
          }
        }
      }
    }
    var _x1 = ($std_regex._index_($std_regex.groups(_x0.unJust), 2) !== "");
    if (_x1) {
      var xsort = ($std_regex._index_($std_regex.groups(_x0.unJust), 2) === "sort");
    }
    else {
      var xsort = sort(cite);
    }
    var xcompress = xsort;
    var _x1 = $std_regex.matchedOn($std_regex.groups(_x0.unJust), 3);
    if (_x1) {
      var _x2 = $std_regex.matchedOn($std_regex.groups(_x0.unJust), 5);
      if (_x2) {
        var sep = unquote($std_regex._index_($std_regex.groups(_x0.unJust), 5));
      }
      else {
        var sep = "; ";
      }
      var _x2 = $std_regex.matchedOn($std_regex.groups(_x0.unJust), 6);
      if (_x2) {
        var aysep0 = unquote($std_regex._index_($std_regex.groups(_x0.unJust), 6));
      }
      else {
        var aysep0 = ", ";
      }
      var _x2 = $std_regex.matchedOn($std_regex.groups(_x0.unJust), 7);
      if (_x2) {
        var yysep0 = unquote($std_regex._index_($std_regex.groups(_x0.unJust), 7));
      }
      else {
        var yysep0 = aysep0;
      }
      var style = _createCitestyle(mode(cite), unquote($std_regex._index_($std_regex.groups(_x0.unJust), 3)), unquote($std_regex._index_($std_regex.groups(_x0.unJust), 4)), sep, aysep0, yysep0, xsort, xcompress);
    }
    else {
      var _x2 = $std_core._excl__eq__5(sort(cite), xsort);
      if (_x2) {
        var style = _copy_3(cite, undefined, undefined, undefined, undefined, undefined, undefined, xsort, xcompress);
      }
      else {
        var style = cite;
      }
    }
    return $std_core.Just(style);
  }
  else {
    return $std_core.Nothing;
  }
}
 
// Warning messages get logged
function warning(message, logname)  /* (message : string, logname : ?string) -> () */  {
  var logname_10634 = (logname !== undefined) ? logname : "warning";
  return $std_log.log(logname_10634, ("  warning: " + message));
}
function parseCiteStyleDef(text0, def)  /* (text : string, def : ?citestyle) -> citestyle */  {
  var def_10672 = (def !== undefined) ? def : citeNumeric;
  var _x0 = parseCiteStyle(text0);
  if (_x0 != null) {
    return _x0.unJust;
  }
  else {
    warning(("unrecognized citation style: " + text0), undefined);
    return def_10672;
  }
}
function peano(n)  /* (n : int) -> peano */  {
  var p = { value: Zero };
  $std_core.repeat(n, function() {  return ((p).value = Succ(((p).value)));});
  return ((p).value);
}
var peano10 = peano(10);
var peanoN = peano(100);
 
// Picks path that first matches one of the given (lower-case) extensions, or the last one if none matched.
function pickExtension(exts, paths)  /* (exts : list<string>, paths : list<string>) -> string */  { tailcall: while(1)
{
  if (paths == null) {
    return "";
  }
  else if (paths != null && paths.tail == null) {
    return paths.head;
  }
  else {
    var pathext = $std_core.toLower($std_path.extname(paths.head));
    var _x0 = $std_core.find(exts, function(ext  /* string */ ) {  return (pathext === ext);});
    return (_x0 != null) ? paths.head : pickExtension(exts, paths.tail);
  }
}}
var rxProtocol = $std_regex.regex("^(\\w+:|//)", undefined, undefined);
function relative(path)  /* (path : string) -> bool */  {
  return !($std_regex.contains(path, rxProtocol, undefined));
}
function removeKeys(attrs, keys)  /* (attrs : attrs, keys : list<string>) -> attrs */  {
  var arg_11237 = attrs;
  var arg_11255 = $std_core.filter(keyvals(attrs), function(kv  /* (string, string) */ ) {  return $std_core.all(keys, function(key  /* string */ ) {  return ($std_core.fst(kv) !== key);});});
  var arg_11238 = undefined;
  var arg_11239 = undefined;
  var arg_11240 = undefined;
  var arg_11241 = undefined;
  var arg_11242 = undefined;
  var arg_11243 = undefined;
  var arg_11244 = undefined;
  var arg_11245 = undefined;
  var arg_11246 = undefined;
  var arg_11247 = undefined;
  var arg_11248 = undefined;
  var arg_11249 = undefined;
  var arg_11250 = undefined;
  var arg_11251 = undefined;
  var arg_11252 = undefined;
  var arg_11253 = undefined;
  var arg_11254 = undefined;
  return _copy(arg_11237, arg_11238, arg_11239, arg_11240, arg_11241, arg_11242, arg_11243, arg_11244, arg_11245, arg_11246, arg_11247, arg_11248, arg_11249, arg_11250, arg_11251, arg_11252, arg_11253, arg_11254, arg_11255);
}
function reverseAcc(lineMap0, acc)  /* (lineMap : lineMap, acc : lineMap) -> lineMap */  { tailcall: while(1)
{
  if (lineMap0 == null) {
    return acc;
  }
  else {
    {
      var _x0 = Include(lineMap0.line, lineMap0.start, lineMap0.count, lineMap0.fileName, lineMap0.lineMap, acc);
      lineMap0 = lineMap0.rest;
      acc = _x0;
      continue tailcall;
    }
  }
}}
function reverse(lineMap0)  /* (lineMap : lineMap) -> lineMap */  {
  return reverseAcc(lineMap0, End);
}
 
// This is just for statistics
var ruleHist = $std_core.unsafeTotal(function() {
  return $std_dict.mdict();
});
function ruleInc(rule)  /* (rule : string) -> () */  {
  return $std_core.unsafeTotal(function() {
    var _x0 = $std_dict._lb__rb__1(ruleHist, rule);
    if (_x0 == null) {
      return (ruleHist)[rule] = 0;
    }
    else {
      return (ruleHist)[rule] = ((_x0.unJust + 1)|0);
    }
  });
}
function ruleRemove(grammar, pred, names)  /* forall<a,b> (grammar : grammar<a,b>, pred : bool, names : list<string>) -> grammar<a,b> */  {
  if (!(pred)) {
    return grammar;
  }
  else {
    $std_core._unit_;
  }
  return $std_core.filter(grammar, function(rule  /* rule<11857,11858> */ ) {  return $std_core.all(names, function(nm  /* string */ ) {  return !($std_core.startsWith(name_1(rule), nm));});});
}
 
// Replace a rule in a grammar by another one, if the rule name is a prefix of the name of the new rule.
function ruleReplace(grammar, pred, rule)  /* forall<a,b> (grammar : grammar<a,b>, pred : bool, rule : rule<a,b>) -> grammar<a,b> */  {
  return (!(pred)) ? grammar : $std_core.map_3(grammar, function(r  /* rule<12046,12047> */ ) {  var _x0 = $std_core.startsWith(name_1(rule), name_1(r)); return (_x0) ? rule : r;});
}
var rxTrimLines = $std_regex.regex("^([ \\t\\r]*\\n)+|([ \\t\\r]*\\n)+$", undefined, undefined);
function show(cm)  /* (cm : citemode) -> string */  {
  if (cm === 1) {
    return "numeric";
  }
  else if (cm === 2) {
    return "natural";
  }
  else if (cm === 3) {
    return "textual";
  }
  else if (cm === 4) {
    return "super";
  }
  else {
    return "auto";
  }
}
function show_1(cs)  /* (cs : citestyle) -> string */  {
  var _x0 = (sort(cs)) ? "sort" : "nosort";
  return (show(mode(cs)) + (":" + (_x0 + (":" + $std_core.join_4($std_core.map_3($std_core.Cons(open(cs), $std_core.Cons(close(cs), $std_core.Cons(citesep(cs), $std_core.Cons(aysep(cs), $std_core.Cons(yysep(cs), $std_core.Nil))))), $std_core.show_4), ",")))));
}
function show_2(m)  /* (m : mathrender) -> string */  {
  return (m === 2) ? "svg" : "png";
}
function show_3(m)  /* (m : mathkind) -> string */  {
  return (m === 1) ? "plain" : "full";
}
function show_4(attrs)  /* (attrs : attrs) -> string */  {
  return ("{" + (text(attrs) + "}"));
}
function setLineNo(attrs, line0, dataline)  /* (attrs : attrs, line : int, dataline : string) -> attrs */  {
  return addKeyval(_copy(attrs, false, undefined, undefined, (text(attrs) + (" ; line:" + $std_core.show_1(line0))), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, line0, undefined, undefined, undefined), "data-line", dataline);
}
function showMime(m)  /* (m : mathrender) -> string */  {
  return (m === 2) ? "image/svg+xml" : "image/png";
}
 
// Split semi-colon seperated paths into parts
function splitPaths(paths)  /* (paths : string) -> list<string> */  {
  return $std_core.filter($std_core.list_4($std_core.split_1(paths, ";")), function(s  /* string */ ) {  return (s !== "");});
}
function traceRuleHist()  /* () -> () */  {
  return $std_core.unsafeTotal(function() {
    return $std_core.foreach($std_dict.list_1($std_dict.freeze(ruleHist)), function(kv  /* (string, int) */ ) {  return $std_core.trace(($std_core.align(kv.fst, 20, undefined) + (": " + $std_core.show_1(kv.snd))));});
  });
}
function translateLine(lineInfos, lineNo0)  /* (lineInfos : lineMap, lineNo : int) -> string */  { tailcall: while(1)
{
  if (lineInfos == null) {
    return $std_core.show_1(lineNo0);
  }
  else {
    if (lineNo0 < lineInfos.line) {
      return $std_core.show_1(lineNo0);
    }
    else {
      var _x0 = lineNo0 >= ((lineInfos.line + lineInfos.count)|0);
      if (_x0) {
        {
          var _x1 = ((lineNo0 - ((lineInfos.count - 1)|0))|0);
          lineInfos = lineInfos.rest;
          lineNo0 = _x1;
          continue tailcall;
        }
      }
      else {
        return ($std_core.show_1(lineInfos.line) + (";" + (lineInfos.fileName + (":" + translateLine(lineInfos.lineMap, ((((lineNo0 - lineInfos.line)|0) + lineInfos.start)|0))))));
      }
    }
  }
}}
function trimLines(s)  /* (s : string) -> string */  {
  return $std_regex.replaceAll_1(s, rxTrimLines, "", undefined);
}
function unindent(txt)  /* (txt : string) -> string */  {
  var lines = $std_core.list_4($std_core.lines(txt));
  var cindent = $std_core.minimum($std_core.map_3($std_core.filter(lines, function(s  /* string */ ) {  return !($std_regex.contains(s, $std_regex.regex("^\\s*$", undefined, undefined), undefined));}), function(s0  /* string */ ) {  var _x0 = $std_regex.find(s0, $std_regex.regex("^\\s*", undefined, undefined), undefined); if (_x0 == null) {  return 0;} else {  return ($std_regex.matched(_x0.unJust)).length;}}));
  if (cindent <= 0) {
    return txt;
  }
  else {
    return $std_core.join_4($std_core.map_3(lines, function(s1  /* string */ ) {  return ((s1).substr(cindent));}), "\n");
  }
}
 
// koka exports:
return { 'FmtHtml': FmtHtml, 'FmtTex': FmtTex, 'Pre': Pre, 'MathPre': MathPre, 'Math': Math, 'MathDefs': MathDefs, 'Tex': Tex, 'Raw': Raw, 'Markdown': Markdown, 'Attrs': Attrs, 'Cell': Cell, 'Row': Row, 'Numeric': Numeric, 'Natural': Natural, 'Textual': Textual, 'Super': Super, 'Auto': Auto, 'Citestyle': Citestyle, 'Embedinfo': Embedinfo, 'Rule': Rule, 'Label': Label, 'End': End, 'Include': Include, 'Link': Link, 'Mathinfo': Mathinfo, 'Plain': Plain, 'Full': Full, 'Png': Png, 'Svg': Svg, 'Succ': Succ, 'Zero': Zero, 'isFmtHtml': isFmtHtml, 'isFmtTex': isFmtTex, 'only': only, 'isPre': isPre, 'isMathPre': isMathPre, 'isMath': isMath, 'isMathDefs': isMathDefs, 'isTex': isTex, 'isRaw': isRaw, 'isMarkdown': isMarkdown, 'empty': empty, 'sticky': sticky, 'defaults': defaults, 'text': text, 'replacers': replacers, 'notag': notag, 'tight': tight, 'input': input, 'elem': elem, 'texelem': texelem, 'htmlelem': htmlelem, 'name': name, 'label': label, 'source': source, 'lineNo': lineNo, 'classes': classes, 'counters': counters, 'keyvals': keyvals, '_copy': _copy, 'text_1': text_1, 'cellAttrs': cellAttrs, '_copy_1': _copy_1, 'cells': cells, 'rowAttrs': rowAttrs, '_copy_2': _copy_2, 'isNumeric': isNumeric, 'isNatural': isNatural, 'isTextual': isTextual, 'isSuper': isSuper, 'isAuto': isAuto, 'mode': mode, 'open': open, 'close': close, 'citesep': citesep, 'aysep': aysep, 'yysep': yysep, 'sort': sort, 'compress': compress, '_copy_3': _copy_3, 'embedName': embedName, 'embedData': embedData, '_copy_4': _copy_4, 'name_1': name_1, 'regex': regex, 'action': action, '_copy_5': _copy_5, 'element': element, 'labelText': labelText, 'labelCaption': labelCaption, 'labelAttrs': labelAttrs, '_copy_6': _copy_6, 'line': line, 'start': start, 'count': count, 'fileName': fileName, 'lineMap': lineMap, 'rest': rest, 'isEnd': isEnd, 'isInclude': isInclude, 'href': href, 'title': title, 'linkattrs': linkattrs, 'linkid': linkid, '_copy_7': _copy_7, 'imageName': imageName, 'page': page, 'height': height, 'width': width, 'depth': depth, 'iheight': iheight, 'iwidth': iwidth, 'bboxFuzz': bboxFuzz, 'size': size, 'imageData': imageData, 'originalData': originalData, '_copy_8': _copy_8, 'isPlain': isPlain, 'isFull': isFull, 'isPng': isPng, 'isSvg': isSvg, 'prev': prev, 'isSucc': isSucc, 'isZero': isZero, '_eq__eq_': _eq__eq_, '_createMarkdown': _createMarkdown, '_createAttrs': _createAttrs, 'attrsNone': attrsNone, '_createCell': _createCell, '_createCitestyle': _createCitestyle, '_createLabel': _createLabel, '_createLink': _createLink, '_createRaw': _createRaw, '_createRow': _createRow, 'contains': contains, 'quote': quote, 'addClass': addClass, 'addClasses': addClasses, 'showFormatter': showFormatter, 'showInput': showInput, 'addInputClass': addInputClass, 'addKeyval': addKeyval, 'addKeyvalIfNotEmpty': addKeyvalIfNotEmpty, 'hasKey': hasKey, 'addKeyvalIfNotExist': addKeyvalIfNotExist, 'addKeyvals': addKeyvals, 'citeAuto': citeAuto, 'citeNatural': citeNatural, 'citeNumeric': citeNumeric, 'citeSqNatural': citeSqNatural, 'citeSuper': citeSuper, 'citeTextual': citeTextual, 'combineRules': combineRules, 'rxspaces': rxspaces, 'definitionId': definitionId, 'elementName': elementName, 'rxChoicePattern': rxChoicePattern, 'expandChoices': expandChoices, 'normalizeId': normalizeId, 'generateHeaderId': generateHeaderId, 'hasClass': hasClass, 'hasBoolKey': hasBoolKey, 'rxamp': rxamp, 'rxapos': rxapos, 'rxgt': rxgt, 'rxhtml': rxhtml, 'rxlt': rxlt, 'rxnoEntityAmp': rxnoEntityAmp, 'rxquot': rxquot, 'htmlEscape': htmlEscape, 'isNumCite': isNumCite, 'rxLineBreak': rxLineBreak, 'joinLines': joinLines, 'json': json, 'logLocation': logLocation, 'lookupKey': lookupKey, 'matchRules': matchRules, 'mimes': mimes, 'mimeFromExt': mimeFromExt, 'newLink': newLink, 'rxVal': rxVal, 'rxValOpt': rxValOpt, 'rxVals': rxVals, 'rxCiteSpec': rxCiteSpec, 'unquote': unquote, 'parseCiteStyle': parseCiteStyle, 'warning': warning, 'parseCiteStyleDef': parseCiteStyleDef, 'peano': peano, 'peano10': peano10, 'peanoN': peanoN, 'pickExtension': pickExtension, 'rxProtocol': rxProtocol, 'relative': relative, 'removeKeys': removeKeys, 'reverseAcc': reverseAcc, 'reverse': reverse, 'ruleHist': ruleHist, 'ruleInc': ruleInc, 'ruleRemove': ruleRemove, 'ruleReplace': ruleReplace, 'rxTrimLines': rxTrimLines, 'show': show, 'show_1': show_1, 'show_2': show_2, 'show_3': show_3, 'show_4': show_4, 'setLineNo': setLineNo, 'showMime': showMime, 'splitPaths': splitPaths, 'traceRuleHist': traceRuleHist, 'translateLine': translateLine, 'trimLines': trimLines, 'unindent': unindent };
});