// koka generated module: "block"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_log', './std_string', './std_regex', './std_dict', './common', './attributes'], function($std_core, $std_log, $std_string, $std_regex, $std_dict, $common, $attributes) {
"use strict";
 
// koka declarations:
function HLine(attrs)  /* (attrs : common/attrs) -> block */  {
  return { _tag: 1, attrs: attrs };
}
function Blank(text)  /* (text : string) -> block */  {
  return { _tag: 2, text: text };
}
function Line(text, loose, attrs)  /* (text : string, loose : bool, attrs : common/attrs) -> block */  {
  return { _tag: 3, text: text, loose: loose, attrs: attrs };
}
function Para(text, attrs)  /* (text : string, attrs : common/attrs) -> block */  {
  return { _tag: 4, text: text, attrs: attrs };
}
function Code(text, language, attrs)  /* (text : string, language : string, attrs : common/attrs) -> block */  {
  return { _tag: 5, text: text, language: language, attrs: attrs };
}
function Quote(content, attrs)  /* (content : list<block>, attrs : common/attrs) -> block */  {
  return { _tag: 6, content: content, attrs: attrs };
}
function List(tag, content, attrs)  /* (tag : string, content : list<block>, attrs : common/attrs) -> block */  {
  return { _tag: 7, tag: tag, content: content, attrs: attrs };
}
function Item(content, attrs)  /* (content : list<block>, attrs : common/attrs) -> block */  {
  return { _tag: 8, content: content, attrs: attrs };
}
function Heading(depth, text, attrs)  /* (depth : int, text : string, attrs : common/attrs) -> block */  {
  return { _tag: 9, depth: depth, text: text, attrs: attrs };
}
function Table(header, columnAttrs, cells, attrs)  /* (header : list<common/row>, columnAttrs : list<common/attrs>, cells : list<common/row>, attrs : common/attrs) -> block */  {
  return { _tag: 10, header: header, columnAttrs: columnAttrs, cells: cells, attrs: attrs };
}
function DefLink(id, link)  /* (id : string, link : common/link) -> block */  {
  return { _tag: 11, id: id, link: link };
}
function DefFootnote(id, content)  /* (id : string, content : list<block>) -> block */  {
  return { _tag: 12, id: id, content: content };
}
var Empty = { _tag: 13 };  /* block */ 
function Div(content, attrs)  /* (content : list<block>, attrs : common/attrs) -> block */  {
  return { _tag: 14, content: content, attrs: attrs };
}
function Source(text, input, parentAttrs)  /* (text : string, input : common/input, parentAttrs : common/attrs) -> block */  {
  return { _tag: 15, text: text, input: input, parentAttrs: parentAttrs };
}
function Special(name, value, attrs)  /* (name : string, value : string, attrs : common/attrs) -> block */  {
  return { _tag: 16, name: name, value: value, attrs: attrs };
}
function BlockContext(grammar, listGrammar, citestyle, metadata, bench, pedantic, loose, lineNo, lineMap)  /* (grammar : common/grammar<block,blockContext>, listGrammar : common/grammar<block,blockContext>, citestyle : common/citestyle, metadata : std/dict/dict<string>, bench : bool, pedantic : bool, loose : bool, lineNo : int, lineMap : common/lineMap) -> blockContext */  {
  return { grammar: grammar, listGrammar: listGrammar, citestyle: citestyle, metadata: metadata, bench: bench, pedantic: pedantic, loose: loose, lineNo: lineNo, lineMap: lineMap };
}
 
// Automatically generated. Retrieves the `attrs` constructor field of the ":block" type.
function attrs(block)  /* (block : block) -> exn common/attrs */  {
  if (block._tag === 1) {
    return block.attrs;
  }
  else if (block._tag === 3) {
    return block.attrs;
  }
  else if (block._tag === 4) {
    return block.attrs;
  }
  else if (block._tag === 5) {
    return block.attrs;
  }
  else if (block._tag === 6) {
    return block.attrs;
  }
  else if (block._tag === 7) {
    return block.attrs;
  }
  else if (block._tag === 8) {
    return block.attrs;
  }
  else if (block._tag === 9) {
    return block.attrs;
  }
  else if (block._tag === 10) {
    return block.attrs;
  }
  else if (block._tag === 14) {
    return block.attrs;
  }
  else if (block._tag === 16) {
    return block.attrs;
  }
  else {
    return $std_core.patternMatchError("src\\block.kk(25,10)", "attrs");
  }
}
 
// Automatically generated. Retrieves the `text` constructor field of the ":block" type.
function text(block)  /* (block : block) -> exn string */  {
  if (block._tag === 2) {
    return block.text;
  }
  else if (block._tag === 3) {
    return block.text;
  }
  else if (block._tag === 4) {
    return block.text;
  }
  else if (block._tag === 5) {
    return block.text;
  }
  else if (block._tag === 9) {
    return block.text;
  }
  else if (block._tag === 15) {
    return block.text;
  }
  else {
    return $std_core.patternMatchError("src\\block.kk(26,10)", "text");
  }
}
 
// Automatically generated. Retrieves the `loose` constructor field of the ":block" type.
function loose(block)  /* (block : block) -> exn bool */  {
  return (block._tag === 3) ? block.loose : $std_core.patternMatchError("src\\block.kk(27,24)", "loose");
}
 
// Automatically generated. Retrieves the `language` constructor field of the ":block" type.
function language(block)  /* (block : block) -> exn string */  {
  return (block._tag === 5) ? block.language : $std_core.patternMatchError("src\\block.kk(29,24)", "language");
}
 
// Automatically generated. Retrieves the `content` constructor field of the ":block" type.
function content(block)  /* (block : block) -> exn list<block> */  {
  if (block._tag === 6) {
    return block.content;
  }
  else if (block._tag === 7) {
    return block.content;
  }
  else if (block._tag === 8) {
    return block.content;
  }
  else if (block._tag === 12) {
    return block.content;
  }
  else if (block._tag === 14) {
    return block.content;
  }
  else {
    return $std_core.patternMatchError("src\\block.kk(30,10)", "content");
  }
}
 
// Automatically generated. Retrieves the `tag` constructor field of the ":block" type.
function tag(block)  /* (block : block) -> exn string */  {
  return (block._tag === 7) ? block.tag : $std_core.patternMatchError("src\\block.kk(31, 9)", "tag");
}
 
// Automatically generated. Retrieves the `depth` constructor field of the ":block" type.
function depth(block)  /* (block : block) -> exn int */  {
  return (block._tag === 9) ? block.depth : $std_core.patternMatchError("src\\block.kk(33,12)", "depth");
}
 
// Automatically generated. Retrieves the `header` constructor field of the ":block" type.
function header(block)  /* (block : block) -> exn list<common/row> */  {
  return (block._tag === 10) ? block.header : $std_core.patternMatchError("src\\block.kk(34,10)", "header");
}
 
// Automatically generated. Retrieves the `columnAttrs` constructor field of the ":block" type.
function columnAttrs(block)  /* (block : block) -> exn list<common/attrs> */  {
  return (block._tag === 10) ? block.columnAttrs : $std_core.patternMatchError("src\\block.kk(34,29)", "columnAttrs");
}
 
// Automatically generated. Retrieves the `cells` constructor field of the ":block" type.
function cells(block)  /* (block : block) -> exn list<common/row> */  {
  return (block._tag === 10) ? block.cells : $std_core.patternMatchError("src\\block.kk(34,56)", "cells");
}
 
// Automatically generated. Retrieves the `id` constructor field of the ":block" type.
function id(block)  /* (block : block) -> exn string */  {
  if (block._tag === 11) {
    return block.id;
  }
  else if (block._tag === 12) {
    return block.id;
  }
  else {
    return $std_core.patternMatchError("src\\block.kk(35,12)", "id");
  }
}
 
// Automatically generated. Retrieves the `link` constructor field of the ":block" type.
function link(block)  /* (block : block) -> exn common/link */  {
  return (block._tag === 11) ? block.link : $std_core.patternMatchError("src\\block.kk(35,25)", "link");
}
 
// Automatically generated. Retrieves the `input` constructor field of the ":block" type.
function input(block)  /* (block : block) -> exn common/input */  {
  return (block._tag === 15) ? block.input : $std_core.patternMatchError("src\\block.kk(39,26)", "input");
}
 
// Automatically generated. Retrieves the `parentAttrs` constructor field of the ":block" type.
function parentAttrs(block)  /* (block : block) -> exn common/attrs */  {
  return (block._tag === 15) ? block.parentAttrs : $std_core.patternMatchError("src\\block.kk(39,54)", "parentAttrs");
}
 
// Automatically generated. Retrieves the `name` constructor field of the ":block" type.
function name(block)  /* (block : block) -> exn string */  {
  return (block._tag === 16) ? block.name : $std_core.patternMatchError("src\\block.kk(40,12)", "name");
}
 
// Automatically generated. Retrieves the `value` constructor field of the ":block" type.
function value(block)  /* (block : block) -> exn string */  {
  return (block._tag === 16) ? block.value : $std_core.patternMatchError("src\\block.kk(40,27)", "value");
}
 
// Automatically generated. Tests for the "HLine" constructor of the ":block" type.
function isHLine(block)  /* (block : block) -> bool */  {
  return (block._tag === 1);
}
 
// Automatically generated. Tests for the "Blank" constructor of the ":block" type.
function isBlank(block)  /* (block : block) -> bool */  {
  return (block._tag === 2);
}
 
// Automatically generated. Tests for the "Line" constructor of the ":block" type.
function isLine(block)  /* (block : block) -> bool */  {
  return (block._tag === 3);
}
 
// Automatically generated. Tests for the "Para" constructor of the ":block" type.
function isPara(block)  /* (block : block) -> bool */  {
  return (block._tag === 4);
}
 
// Automatically generated. Tests for the "Code" constructor of the ":block" type.
function isCode(block)  /* (block : block) -> bool */  {
  return (block._tag === 5);
}
 
// Automatically generated. Tests for the "Quote" constructor of the ":block" type.
function isQuote(block)  /* (block : block) -> bool */  {
  return (block._tag === 6);
}
 
// Automatically generated. Tests for the "List" constructor of the ":block" type.
function isList(block)  /* (block : block) -> bool */  {
  return (block._tag === 7);
}
 
// Automatically generated. Tests for the "Item" constructor of the ":block" type.
function isItem(block)  /* (block : block) -> bool */  {
  return (block._tag === 8);
}
 
// Automatically generated. Tests for the "Heading" constructor of the ":block" type.
function isHeading(block)  /* (block : block) -> bool */  {
  return (block._tag === 9);
}
 
// Automatically generated. Tests for the "Table" constructor of the ":block" type.
function isTable(block)  /* (block : block) -> bool */  {
  return (block._tag === 10);
}
 
// Automatically generated. Tests for the "DefLink" constructor of the ":block" type.
function isDefLink(block)  /* (block : block) -> bool */  {
  return (block._tag === 11);
}
 
// Automatically generated. Tests for the "DefFootnote" constructor of the ":block" type.
function isDefFootnote(block)  /* (block : block) -> bool */  {
  return (block._tag === 12);
}
 
// Automatically generated. Tests for the "Empty" constructor of the ":block" type.
function isEmpty(block)  /* (block : block) -> bool */  {
  return (block._tag === 13);
}
 
// Automatically generated. Tests for the "Div" constructor of the ":block" type.
function isDiv(block)  /* (block : block) -> bool */  {
  return (block._tag === 14);
}
 
// Automatically generated. Tests for the "Source" constructor of the ":block" type.
function isSource(block)  /* (block : block) -> bool */  {
  return (block._tag === 15);
}
 
// Automatically generated. Tests for the "Special" constructor of the ":block" type.
function isSpecial(block)  /* (block : block) -> bool */  {
  return (block._tag === 16);
}
 
// Automatically generated. Retrieves the `grammar` constructor field of the ":blockContext" type.
function grammar(blockContext)  /* (blockContext : blockContext) -> common/grammar<block,blockContext> */  {
  return blockContext.grammar;
}
 
// Automatically generated. Retrieves the `listGrammar` constructor field of the ":blockContext" type.
function listGrammar(blockContext)  /* (blockContext : blockContext) -> common/grammar<block,blockContext> */  {
  return blockContext.listGrammar;
}
 
// Automatically generated. Retrieves the `citestyle` constructor field of the ":blockContext" type.
function citestyle(blockContext)  /* (blockContext : blockContext) -> common/citestyle */  {
  return blockContext.citestyle;
}
 
// Automatically generated. Retrieves the `metadata` constructor field of the ":blockContext" type.
function metadata(blockContext)  /* (blockContext : blockContext) -> std/dict/dict<string> */  {
  return blockContext.metadata;
}
 
// Automatically generated. Retrieves the `bench` constructor field of the ":blockContext" type.
function bench(blockContext)  /* (blockContext : blockContext) -> bool */  {
  return blockContext.bench;
}
 
// Automatically generated. Retrieves the `pedantic` constructor field of the ":blockContext" type.
function pedantic(blockContext)  /* (blockContext : blockContext) -> bool */  {
  return blockContext.pedantic;
}
 
// Automatically generated. Retrieves the `loose` constructor field of the ":blockContext" type.
function loose_1(blockContext)  /* (blockContext : blockContext) -> bool */  {
  return blockContext.loose;
}
 
// Automatically generated. Retrieves the `lineNo` constructor field of the ":blockContext" type.
function lineNo(blockContext)  /* (blockContext : blockContext) -> int */  {
  return blockContext.lineNo;
}
 
// Automatically generated. Retrieves the `lineMap` constructor field of the ":blockContext" type.
function lineMap(blockContext)  /* (blockContext : blockContext) -> common/lineMap */  {
  return blockContext.lineMap;
}
function _copy(_this, grammar0, listGrammar0, citestyle0, metadata0, bench0, pedantic0, loose0, lineNo0, lineMap0)  /* (blockContext, grammar : ?common/grammar<block,blockContext>, listGrammar : ?common/grammar<block,blockContext>, citestyle : ?common/citestyle, metadata : ?std/dict/dict<string>, bench : ?bool, pedantic : ?bool, loose : ?bool, lineNo : ?int, lineMap : ?common/lineMap) -> blockContext */  {
  var grammar_700 = (grammar0 !== undefined) ? grammar0 : grammar(_this);
  var listGrammar_706 = (listGrammar0 !== undefined) ? listGrammar0 : listGrammar(_this);
  var citestyle_714 = (citestyle0 !== undefined) ? citestyle0 : citestyle(_this);
  var metadata_720 = (metadata0 !== undefined) ? metadata0 : metadata(_this);
  var bench_726 = (bench0 !== undefined) ? bench0 : bench(_this);
  var pedantic_732 = (pedantic0 !== undefined) ? pedantic0 : pedantic(_this);
  var loose_745 = (loose0 !== undefined) ? loose0 : loose_1(_this);
  var lineNo_758 = (lineNo0 !== undefined) ? lineNo0 : lineNo(_this);
  var lineMap_771 = (lineMap0 !== undefined) ? lineMap0 : lineMap(_this);
  return BlockContext(grammar_700, listGrammar_706, citestyle_714, metadata_720, bench_726, pedantic_732, loose_745, lineNo_758, lineMap_771);
}
 
// Attributes: allow escaped newline
var rattrs = "(?:<!--)?\\{:?((?:[^\\\\\'\"\\}\\n]|\\\\[\\s\\S]|\'(?:[^\\\\\']|\\\\[\\s\\S])*\'|\"(?:[^\"\\\\]|\\\\[\\s\\S])*\")*)\\}(?:-->)?";
 
// allow optional colon for maraku compat
var xattrs = (rattrs + " *");
var iattrs = ("(?:" + (xattrs + ")?"));
var hr = ("(?:[*_\\-](?: *[*_\\-]){2,}) *" + (iattrs + "(?:\\n+|$)"));
function _createLine(text0, loose0, attrs0)  /* (text : string, loose : ?bool, attrs : ?common/attrs) -> block */  {
  var loose_933 = (loose0 !== undefined) ? loose0 : false;
  var attrs_937 = (attrs0 !== undefined) ? attrs0 : $common.attrsNone;
  return Line(text0, loose_933, attrs_937);
}
function raw(s)  /* (s : string) -> block */  {
  return _createLine(s, undefined, undefined);
}
function _createBlockContext(grammar0, listGrammar0, citestyle0, metadata0, bench0, pedantic0, loose0, lineNo0, lineMap0)  /* (grammar : common/grammar<block,blockContext>, listGrammar : common/grammar<block,blockContext>, citestyle : common/citestyle, metadata : std/dict/dict<string>, bench : bool, pedantic : bool, loose : ?bool, lineNo : ?int, lineMap : common/lineMap) -> blockContext */  {
  var loose_961 = (loose0 !== undefined) ? loose0 : false;
  var lineNo_965 = (lineNo0 !== undefined) ? lineNo0 : 0;
  return BlockContext(grammar0, listGrammar0, citestyle0, metadata0, bench0, pedantic0, loose_961, lineNo_965, lineMap0);
}
function _createCode(text0, language0, attrs0)  /* (text : string, language : ?string, attrs : ?common/attrs) -> block */  {
  var language_982 = (language0 !== undefined) ? language0 : "";
  var attrs_986 = (attrs0 !== undefined) ? attrs0 : $common.attrsNone;
  return Code(text0, language_982, attrs_986);
}
function _createDiv(content0, attrs0)  /* (content : list<block>, attrs : ?common/attrs) -> block */  {
  var attrs_997 = (attrs0 !== undefined) ? attrs0 : $common.attrsNone;
  return Div(content0, attrs_997);
}
function _createHeading(depth0, text0, attrs0)  /* (depth : int, text : string, attrs : ?common/attrs) -> block */  {
  var attrs_1007 = (attrs0 !== undefined) ? attrs0 : $common.attrsNone;
  return Heading(depth0, text0, attrs_1007);
}
function _createHLine(attrs0)  /* (attrs : ?common/attrs) -> block */  {
  var attrs_1018 = (attrs0 !== undefined) ? attrs0 : $common.attrsNone;
  return HLine(attrs_1018);
}
function _createItem(content0, attrs0)  /* (content : list<block>, attrs : ?common/attrs) -> block */  {
  var attrs_1027 = (attrs0 !== undefined) ? attrs0 : $common.attrsNone;
  return Item(content0, attrs_1027);
}
function _createList(tag0, content0, attrs0)  /* (tag : string, content : list<block>, attrs : ?common/attrs) -> block */  {
  var attrs_1037 = (attrs0 !== undefined) ? attrs0 : $common.attrsNone;
  return List(tag0, content0, attrs_1037);
}
function _createPara(text0, attrs0)  /* (text : string, attrs : ?common/attrs) -> block */  {
  var attrs_1064 = (attrs0 !== undefined) ? attrs0 : $common.attrsNone;
  return Para(text0, attrs_1064);
}
function _createQuote(content0, attrs0)  /* (content : list<block>, attrs : ?common/attrs) -> block */  {
  var attrs_1074 = (attrs0 !== undefined) ? attrs0 : $common.attrsNone;
  return Quote(content0, attrs_1074);
}
function _createSource(text0, input0, parentAttrs0)  /* (text : string, input : ?common/input, parentAttrs : ?common/attrs) -> block */  {
  var input_1087 = (input0 !== undefined) ? input0 : $common._createMarkdown(undefined);
  var parentAttrs_1091 = (parentAttrs0 !== undefined) ? parentAttrs0 : $common.attrsNone;
  return Source(text0, input_1087, parentAttrs_1091);
}
function _createSpecial(name0, value0, attrs0)  /* (name : string, value : ?string, attrs : ?common/attrs) -> block */  {
  var value_1105 = (value0 !== undefined) ? value0 : "";
  var attrs_1109 = (attrs0 !== undefined) ? attrs0 : $common.attrsNone;
  return Special(name0, value_1105, attrs_1109);
}
function _createTable(header0, columnAttrs0, cells0, attrs0)  /* (header : list<common/row>, columnAttrs : list<common/attrs>, cells : list<common/row>, attrs : ?common/attrs) -> block */  {
  var attrs_1120 = (attrs0 !== undefined) ? attrs0 : $common.attrsNone;
  return Table(header0, columnAttrs0, cells0, attrs_1120);
}
function adjustAttrs(b, adjust)  /* (b : block, adjust : (attrs : common/attrs) -> common/attrs) -> block */  {
  if (b._tag === 1) {
    return _createHLine(adjust(b.attrs));
  }
  else if (b._tag === 3) {
    return _createLine(b.text, b.loose, adjust(b.attrs));
  }
  else if (b._tag === 4) {
    return _createPara(b.text, adjust(b.attrs));
  }
  else if (b._tag === 5) {
    return _createCode(b.text, b.language, adjust(b.attrs));
  }
  else if (b._tag === 6) {
    return _createQuote(b.content, adjust(b.attrs));
  }
  else if (b._tag === 7) {
    return _createList(b.tag, b.content, adjust(b.attrs));
  }
  else if (b._tag === 8) {
    return _createItem(b.content, adjust(b.attrs));
  }
  else if (b._tag === 9) {
    return _createHeading(b.depth, b.text, adjust(b.attrs));
  }
  else if (b._tag === 10) {
    return _createTable(b.header, b.columnAttrs, b.cells, adjust(b.attrs));
  }
  else if (b._tag === 14) {
    return _createDiv(b.content, adjust(b.attrs));
  }
  else if (b._tag === 15) {
    return _createSource(b.text, b.input, adjust(b.parentAttrs));
  }
  else if (b._tag === 16) {
    return _createSpecial(b.name, b.value, adjust(b.attrs));
  }
  else {
    return b;
  }
}
var bull = "(?:[*+\\-]|(?:\\d+|[#iIaA])[\\.\\)])";
var endlist = (hr + ("|\\n(?! )(?!\\1" + (bull + " )")));
var alist = ("( *)(" + (bull + (") ([\\s\\S]+?)(?=\\n(?:" + (endlist + ")|$)\\n?"))));
 
// regular expression for content inside a start HTML tag
var inlineTags = $std_core.conslist(["a", "em", "strong", "small", "s", "cite", "q", "dfn", "abbr", "data", "time", "code", "var", "samp", "kbd", "sub", "sup", "i", "b", "u", "mark", "ruby", "rt", "rp", "bdi", "bdo", "span", "br", "wbr", "ins", "del", "img"], $std_core.Nil);
var atag = ("(?!(?:" + ($std_core.join_4(inlineTags, "|") + ")\\b)\\w+(?!:/|@)\\b"));
 
// after a paragraph
var battrs = ("(?:\\n {0,3}" + (xattrs + ")?"));
var blankline = $std_regex.regex("\\n\\n(?!\\s*$)", undefined, undefined);
function blockBlank(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> block */  {
  return Blank($std_regex.matched(cap));
}
var rxindent4 = $std_regex.regex("^    ", undefined, true);
function blockCode(cap, context)  /* (cap : std/regex/matched, context : blockContext) -> block */  {
  var source = $std_regex.replaceAll_1($std_regex._index_($std_regex.groups(cap), 1), rxindent4, "", undefined);
  var _x1 = !((pedantic(context) || bench(context)));
  var _x0 = (_x1) ? $common.addClass($common.attrsNone, "pre-indented") : $common.attrsNone;
  return _createCode(source, "", _x0);
}
function blockDefLink(cap, context)  /* (cap : std/regex/matched, context : blockContext) -> block */  {
  var id0 = $common.definitionId($std_regex._index_($std_regex.groups(cap), 1));
  return DefLink(id0, $common.newLink($common.joinLines($std_regex._index_($std_regex.groups(cap), 2)), $common.joinLines($std_regex._index_($std_regex.groups(cap), 3)), $attributes.parseAttrs($std_regex._index_($std_regex.groups(cap), 4), undefined, undefined), id0, bench(context)));
}
var rxFirstNum = $std_regex.regex("^ *(\\d+)\\.", undefined, undefined);
 
// after a block element
var lattrs = ("\\n {0,3}" + (xattrs + "\\s*$"));
var rxlattrs = $std_regex.regex(lattrs, undefined, undefined);
function blockListX(text0, context, tag0, attrsInit, rxParseItem, parseItem)  /* (text : string, context : blockContext, tag : string, attrsInit : string, rxParseItem : std/regex/regex, parseItem : (string, std/regex/matched, int, blockContext) -> list<block>) -> block */  {
  var loose0 = $std_regex.contains(text0, blankline, undefined);
  var icontext = _copy(context, listGrammar(context), undefined, undefined, undefined, undefined, undefined, loose0, undefined, undefined);
  var _x1 = $std_regex.find(text0, rxlattrs, undefined);
  if (_x1 != null) {
    var _x0 = $std_core._tuple2_($std_core.substr_1(text0, 0, (((text0).length - ($std_regex.matched(_x1.unJust)).length)|0)), (attrsInit + (" " + $std_regex._index_($std_regex.groups(_x1.unJust), 1))));
  }
  else {
    var _x0 = $std_core._tuple2_(text0, attrsInit);
  }
  var _x2 = (loose0) ? "loose" : "compact";
  var attrs0 = $common.addClasses($attributes.parseAttrs(_x0.snd, tag0, undefined), $std_core.Cons(_x2, $std_core.Nil));
  var _x2 = $std_regex.find(_x0.fst, rxFirstNum, undefined);
  if (_x2 == null) {
    var attrs1 = attrs0;
  }
  else {
    var num = $std_core.maybe($std_core.parseInt($std_regex._index_($std_regex.groups(_x2.unJust), 1), undefined), 1, $std_core.id);
    if (num === 1) {
      var attrs1 = attrs0;
    }
    else {
      var attrs1 = $common.addKeyval(attrs0, "start", $std_regex._index_($std_regex.groups(_x2.unJust), 1));
    }
  }
  var extraAttrs = $std_core.join_4($std_core.map_3($common.classes(attrs1), function(cls  /* string */ ) {  return ("." + (cls + "-li"));}), " ");
  function parseItems(src, line, acc)  /* (src : string, line : int, acc : ?list<block>) -> list<block> */  { tailcall: while(1)
  {
    var acc_3522 = (acc !== undefined) ? acc : $std_core.Nil;
    var _x2 = $std_regex.find(src, rxParseItem, undefined);
    if (_x2 == null) {
      return $std_core.reverse(acc_3522);
    }
    else {
      if (line <= 0) {
        var newline = line;
      }
      else {
        var newline = ((line + (("\n") ? (($std_regex.matched(_x2.unJust)).match(new RegExp(("\n").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'))||[]).length : 0))|0);
      }
      {
        var _x3 = ((src).substr($std_regex.next(_x2.unJust) >=1 ? $std_regex.next(_x2.unJust) : 1));
        var _x4 = $std_core._plus__3(parseItem(extraAttrs, _x2.unJust, line, icontext), acc_3522);
        src = _x3;
        line = newline;
        acc = _x4;
        continue tailcall;
      }
    }
  }}
  var _x2 = (loose0) ? "\n\n" : "";
  var items = parseItems((_x0.fst + _x2), lineNo(context), undefined);
  return _createList(tag0, items, attrs1);
}
var defdef = "(?:.*(?:\\n|$)(?:(?:    .*)?(?:\\n|$))*)";
 
// not special block start sequence
var notbspecial = "(?:[^ \\[\\*\\-_\\+\\d><#`~\\niIaA]|[iIaA](?!\\.))";
 
// deflist
var defitem = ("(?:(?:\\* (.*))|((?:" + (notbspecial + ").*))\\n\\n?"));
var defstart = "(?:[:]| {1,2}[~:])";
var rxDefItem = $std_regex.regex(("^(?:" + (defitem + (")?" + (defstart + ("(?:" + (iattrs + (")? *(" + (defdef + ")")))))))), undefined, undefined);
function setLineNo(attrs0, lineMap0, lineNo0, overwrite)  /* (attrs : common/attrs, lineMap : common/lineMap, lineNo : int, overwrite : ?bool) -> common/attrs */  {
  var overwrite_4315 = (overwrite !== undefined) ? overwrite : false;
  var srcline = $common.translateLine(lineMap0, lineNo0);
  var _x0 = (!(overwrite_4315) && $std_core.bool_1($common.hasKey(attrs0, "data-line")));
  var attrs1 = (_x0) ? attrs0 : $common.setLineNo(attrs0, lineNo0, srcline);
  var _x0 = (!($common.isMarkdown($common.input(attrs1))) || $common.hasClass(attrs1, "pre-fenced"));
  if (_x0) {
    var firstline = $common.translateLine(lineMap0, ((lineNo0 + 1)|0));
    return $common.addKeyval(attrs1, "data-line-first", firstline);
  }
  else {
    return attrs1;
  }
}
function blockDiv(cap, context)  /* (cap : std/regex/matched, context : blockContext) -> block */  {
  var cname = $common.definitionId($std_regex._index_($std_regex.groups(cap), 2));
  $std_log.log("customs", ("{ \"name\":" + ($common.json(cname) + (", \"display\":" + ($common.json($std_regex._index_($std_regex.groups(cap), 2)) + "}")))));
  var attrs0 = $attributes.parseAttrs($std_regex._index_($std_regex.groups(cap), 3), cname, (($std_regex._index_($std_regex.groups(cap), 4)).substr(1)));
  return _createDiv($std_core.Nil, attrs0);
}
function blockFencedCode(cap, context)  /* (cap : std/regex/matched, context : blockContext) -> block */  {
  var attrs0 = $attributes.parseAttrs($std_regex._index_($std_regex.groups(cap), 3), undefined, undefined);
  var _x1 = !((pedantic(context) || bench(context)));
  if (_x1) {
    var _x0 = $common.addClasses(attrs0, $std_core.Cons("pre-fenced", $std_core.Cons(("pre-fenced" + $std_core.show_1(($std_regex._index_($std_regex.groups(cap), 1)).length)), $std_core.Nil)));
  }
  else {
    var _x0 = attrs0;
  }
  return _createCode($std_regex._index_($std_regex.groups(cap), 4), $std_regex._index_($std_regex.groups(cap), 2), _x0);
}
function makeHeading(depth0, source, attrStr)  /* (depth : int, source : string, attrStr : string) -> block */  {
  var elem = ("H" + $std_core.show_1(depth0));
  return _createHeading(depth0, source, $attributes.parseAttrs(attrStr, elem, source));
}
function blockHeading(cap, context)  /* (cap : std/regex/matched, context : blockContext) -> block */  {
  var _x1 = ($std_regex._index_($std_regex.groups(cap), 2) === "0");
  if (_x1) {
    var _x0 = 0;
  }
  else {
    var _x0 = ($std_regex._index_($std_regex.groups(cap), 1)).length;
  }
  return makeHeading(_x0, $std_regex._index_($std_regex.groups(cap), 3), $std_regex._index_($std_regex.groups(cap), 4));
}
function blockHeadingLine(cap, context)  /* (cap : std/regex/matched, context : blockContext) -> block */  {
  var _x1 = ($std_core.substr_1($std_regex._index_($std_regex.groups(cap), 3), 0, 1) === "=");
  var _x0 = (_x1) ? 1 : 2;
  return makeHeading(_x0, $std_regex._index_($std_regex.groups(cap), 1), $std_regex._index_($std_regex.groups(cap), 2));
}
function blockHLine(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> block */  {
  return _createHLine($attributes.parseAttrs($std_regex._index_($std_regex.groups(cap), 1), undefined, undefined));
}
function blockHtml(cap, context)  /* (cap : std/regex/matched, context : blockContext) -> block */  {
  return _createSource($std_regex.matched(cap), $common._createRaw($std_core.Just($common.FmtHtml)), $common.attrsNone);
}
var rxindent2x = $std_regex.regex("^  ?", undefined, true);
var rxindent3x = $std_regex.regex("^ {1,3}", undefined, true);
var rxindent4x = $std_regex.regex("^ {1,4}", undefined, true);
var rxindent5x = $std_regex.regex("^ {1,5}", undefined, true);
function rxindent(i)  /* (i : int) -> std/regex/regex */  {
  if (i === 4) {
    return rxindent4x;
  }
  else {
    if (i === 5) {
      return rxindent5x;
    }
    else {
      if (i === 2) {
        return rxindent2x;
      }
      else {
        if (i === 3) {
          return rxindent3x;
        }
        else {
          return $std_regex.regex(("^ {1," + ($std_core.show_1(i) + "}")), undefined, true);
        }
      }
    }
  }
}
var lroman = "(?:x?(?:i(?:v|x|i|ii)?|[vx]i{0,3}))";
var uroman = "(?:X?(?:I(?:V|X|I|II)?|[VX]I{0,3}))";
var bullrest = ("(?:[*+\\-]|(?:\\d+|[#a-zA-Z]|" + (lroman + ("|" + (uroman + ")[\\.\\)])"))));
var rxitem = $std_regex.regex(("^(( *)(?:" + (bullrest + (") +)(?:" + (iattrs + (")?(.*(?:\\n(?!\\2" + (bullrest + " ).*)*\\n?)")))))), undefined, true);
function columnStyle(style)  /* (style : string) -> common/attrs */  {
  var _x0 = $std_regex.find(style, $std_regex.regex(("^([|+])? *(:)?([ ~=-]*)(?:" + (xattrs + ")?([ ~=-]*)(:)? *(?:([|+]) *)?$")), undefined, undefined), undefined);
  if (_x0 == null) {
    return $common.attrsNone;
  }
  else {
    var _x1 = $std_regex.matchedOn($std_regex.groups(_x0.unJust), 2);
    if (_x1) {
      var _x2 = $std_regex.matchedOn($std_regex.groups(_x0.unJust), 6);
      var align = (_x2) ? " ; text-align:center" : " ; text-align:left";
    }
    else {
      var _x3 = $std_regex.matchedOn($std_regex.groups(_x0.unJust), 6);
      var align = (_x3) ? " ; text-align:right" : "";
    }
    var _x2 = ($std_regex._index_($std_regex.groups(_x0.unJust), 1) !== "+");
    var _x1 = (_x2) ? "" : " ; .cell-border-left";
    var _x4 = ($std_regex._index_($std_regex.groups(_x0.unJust), 7) !== "+");
    var _x3 = (_x4) ? "" : " ; .cell-border-right";
    var borders = (_x1 + _x3);
    var c = $std_core.substr_1($std_string.trim(($std_regex._index_($std_regex.groups(_x0.unJust), 3) + $std_regex._index_($std_regex.groups(_x0.unJust), 5))), 0, 1);
    if ((c === "=")) {
      var content0 = "===";
    }
    else {
      var content0 = ((c === "-")) ? "---" : "";
    }
    return $attributes.parseAttrs(($std_regex._index_($std_regex.groups(_x0.unJust), 4) + (align + borders)), "col", content0);
  }
}
var rxCell = $std_regex.regex("(?:^ *(?:\\||\\+(?=[-=])))?((?:[^\\\\|+]|\\\\.|\\+ *(?![-=]))+(?:[|]+|[+]+(?= *[-=])|$))", undefined, undefined);
var rxRowAttr = $std_regex.regex(("[\\+\\|]" + (xattrs + "$")), undefined, undefined);
 
// Split a row into cells, keeping final separators ("|" or "+") at the end of each cell.
function columns(row, context, ofs)  /* (row : string, context : blockContext, ofs : int) -> common/row */  {
  var cells0 = $std_core.map_3($std_core.list_4($std_regex.findAll(row, rxCell, undefined)), function(cap  /* std/regex/matched */ ) {  return $common._createCell($std_regex._index_($std_regex.groups(cap), 1), undefined);});
  var attrs0 = $std_core.maybe($std_regex.find(row, rxRowAttr, undefined), $common.attrsNone, function(cap0  /* std/regex/matched */ ) {  return $attributes.parseAttrs($std_regex._index_($std_regex.groups(cap0), 1), "tr", undefined);});
  var _x1 = lineNo(context) > 0;
  if (_x1) {
    var _x0 = setLineNo(attrs0, lineMap(context), ((lineNo(context) + ofs)|0), undefined);
  }
  else {
    var _x0 = attrs0;
  }
  return $common._createRow(cells0, _x0);
}
function npcolumns(row, context, ofs)  /* (row : string, context : blockContext, ofs : int) -> common/row */  {
  return columns(("|" + (row + "|")), context, ofs);
}
function rows(body)  /* (body : string) -> list<string> */  {
  return $std_core.list_4($std_core.split_1(((body).replace(/\s+$/,'')), "\n"));
}
function blockNpTable(cap, context)  /* (cap : std/regex/matched, context : blockContext) -> block */  {
  var header0 = npcolumns($std_regex._index_($std_regex.groups(cap), 1), context, 0);
  var cols = $std_core.map_3($common.cells(npcolumns($std_regex._index_($std_regex.groups(cap), 2), context, 1)), function(c  /* common/cell */ ) {  return columnStyle($common.text_1(c));});
  var cells0 = $std_core.mapIndexed(rows($std_regex._index_($std_regex.groups(cap), 3)), function(i  /* int */ , row  /* string */ ) {  return npcolumns(row, context, ((i + 2)|0));});
  return _createTable($std_core.Cons(header0, $std_core.Nil), cols, cells0, $attributes.parseAttrs($std_regex._index_($std_regex.groups(cap), 4), undefined, undefined));
}
var rxPattrs = $std_regex.regex(("\\n {0,3}" + (xattrs + "\\s*$")), undefined, undefined);
function blockPara(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> block */  {
  var full = $std_regex._index_($std_regex.groups(cap), 1);
  var _x1 = $std_regex.find(full, rxPattrs, undefined);
  if (_x1 == null) {
    var _x0 = $std_core._tuple2_(full, "");
  }
  else {
    var _x0 = $std_core._tuple2_($std_core.substr_1(full, 0, $std_regex.index(_x1.unJust)), $std_regex._index_($std_regex.groups(_x1.unJust), 1));
  }
  return _createPara(_x0.fst, $attributes.parseAttrs(_x0.snd, "P", _x0.fst));
}
var rxquotePrefix = $std_regex.regex("^ *> ?", undefined, true);
 
/* --------------------------------------
 Block element functions 
---------------------------------------- */
function blockSpecial(cap, context)  /* (cap : std/regex/matched, context : blockContext) -> block */  {
  function mkblock(name0, content0, lineno0)  /* (name : string, content : list<string>, lineno : ?int) -> list<string> */  {
    var lineno_10683 = (lineno0 !== undefined) ? lineno0 : lineNo(context);
    if ($std_core.isNil(content0)) {
      return $std_core.Nil;
    }
    else {
      return $std_core._plus__3($std_core.Cons(("~ Begin " + (name0 + (" { line-adjust:0; line:" + ($std_core.show_1(lineno_10683) + " }")))), $std_core.Nil), $std_core._plus__3(content0, $std_core.Cons(("~ End " + name0), $std_core.Nil)));
    }
  }
  function entry(name1, className)  /* (name : string, className : ?string) -> list<string> */  {
    var className_11374 = (className !== undefined) ? className : name1;
    var _x0 = $std_dict._lb__rb__2(metadata(context), name1);
    if (_x0 != null) {
      if (($std_string.trim(_x0.unJust) !== "")){
        return mkblock(className_11374, $std_core.Cons(("&" + (name1 + ";")), $std_core.Nil), undefined);
      }
    }
    return $std_core.Nil;
  }
  function author(idx)  /* (idx : int) -> list<string> */  {
    return mkblock("Author", $std_core.concat($std_core.Cons(entry(("author" + $std_core.show_1(idx)), "AuthorName"), $std_core.Cons(entry(("affiliation" + $std_core.show_1(idx)), "AuthorAddress"), $std_core.Cons(entry(("address" + $std_core.show_1(idx)), "AuthorAddress"), $std_core.Cons(entry(("author-note" + $std_core.show_1(idx)), "AuthorNote"), $std_core.Cons(entry(("email" + $std_core.show_1(idx)), "AuthorEmail"), $std_core.Nil)))))), undefined);
  }
  function authorRow(idxs)  /* (idxs : list<int>) -> list<string> */  {
    return mkblock("AuthorRow", $std_core.concat_1(idxs, author), undefined);
  }
  function group(xs, n, acc)  /* forall<a> (xs : list<a>, n : ?int, acc : ?list<a>) -> list<list<a>> */  {
    var n_12038 = (n !== undefined) ? n : 3;
    var acc_12042 = (acc !== undefined) ? acc : xs;
    if (xs == null) {
      return $std_core.Nil;
    }
    else {
      if (acc_12042 == null) {
        return $std_core.Nil;
      }
      else {
        return $std_core.Cons($std_core.take(acc_12042, n_12038), group(xs.tail, n_12038, $std_core.drop(acc_12042, n_12038)));
      }
    }
  }
  function joinnl(lines)  /* (lines : list<string>) -> string */  {
    return $std_core.join_3($std_core.map_3(lines, function(line  /* string */ ) {  return (line + "\n");}));
  }
  function readInt(name2, $default)  /* (name : string, default : ?int) -> int */  {
    var default_12256 = ($default !== undefined) ? $default : 0;
    var _x0 = $std_dict._lb__rb__2(metadata(context), name2);
    if (_x0 != null) {
      return $std_core.parseIntDefault($std_string.trim(_x0.unJust), default_12256, undefined);
    }
    else {
      return default_12256;
    }
  }
  var _x0 = ($std_core.toLower($std_regex._index_($std_regex.groups(cap), 1)) === "title");
  if (_x0) {
    var authorCount = readInt("author-count", undefined);
    var titleBlock = $std_core.join_4($std_core.concat($std_core.Cons(mkblock("TitleHeader", $std_core._plus__3(entry("title", "Title"), $std_core._plus__3(entry("subtitle", "Subtitle"), $std_core._plus__3(entry("sub-title", "Subtitle"), entry("title-note", "TitleNote")))), undefined), $std_core.Cons(mkblock("Authors", $std_core.concat_1(group($std_core.list(1, authorCount), readInt("author-columns", 3), undefined), authorRow), undefined), $std_core.Cons(entry("title-footer", "TitleFooter"), $std_core.Nil)))), "\n");
    return _createDiv($std_core.Nil, $attributes.parseAttrs("line-adjust:0", "titleblock", titleBlock));
  }
  else {
    return _createSpecial($std_regex._index_($std_regex.groups(cap), 1), $std_regex._index_($std_regex.groups(cap), 2), undefined);
  }
}
 
// split the separator row in cells, and include the separators for determining the column style
function columnStyles(row)  /* (row : string) -> list<common/attrs> */  {
  return $std_core.map_3($std_core.map_3($std_core.list_4($std_regex.findAll(row, $std_regex.regex("[|+][^|+]+(?:[|+] *$)?", undefined, undefined), undefined)), function(cap  /* std/regex/matched */ ) {  return $std_regex.matched(cap);}), columnStyle);
}
function blockTable(cap, context)  /* (cap : std/regex/matched, context : blockContext) -> block */  {
  var _x0 = ($std_regex._index_($std_regex.groups(cap), 1) === "");
  if (_x0) {
    var headers = $std_core.Nil;
  }
  else {
    var headers = $std_core.mapIndexed(rows($std_regex._index_($std_regex.groups(cap), 1)), function(i  /* int */ , row  /* string */ ) {  return columns(row, context, i);});
  }
  var cols = columnStyles($std_regex._index_($std_regex.groups(cap), 2));
  var ofs = (($std_core.length_3(headers) + 1)|0);
  var cells0 = $std_core.mapIndexed(rows($std_regex._index_($std_regex.groups(cap), 4)), function(i0  /* int */ , row0  /* string */ ) {  return columns(row0, context, ((i0 + ofs)|0));});
  var txts = $std_core.map_3(cols, $common.source);
  if ($std_core.all(txts, function(txt  /* string */ ) {  return (txt === "");})) {
    var hline = $std_core.Nil;
  }
  else {
    var hline = $std_core.Cons($common._createRow($std_core.map_3(txts, function(t  /* string */ ) {  return $common._createCell(t, undefined);}), undefined), $std_core.Nil);
  }
  return _createTable(headers, cols, $std_core._plus__3(hline, cells0), $attributes.parseAttrs($std_regex._index_($std_regex.groups(cap), 5), undefined, undefined));
}
var defdefs = ("(?:" + (defstart + (defdef + ")+")));
 
// inline: headers and fences
var pattrs = ("(?: {0,3}" + (xattrs + ")?"));
var deflist = ("^(?:" + (defitem + (defdefs + (")+" + pattrs))));
 
// Various
var xlinkid = "((?:[^\\[\\]\\n]|\\[[^\\]\\n]*\\])*)";
var endpara = (" *(?:<" + (atag + ("|```|~+|>.|#{1,6} |\\[" + (xlinkid + ("\\]:|" + (hr + ("|.+?\\n *(?:===|---)" + ")")))))));
var closedTag = ("(" + (atag + ")[\\s\\S]+?</\\1>"));
var comment = "!--[\\s\\S]*?-->";
var tagContent = "(?:\"[^\"]*\"|\'[^\']*\'|[^\'\">])*";
var soloTag = ("" + (atag + (tagContent + ">")));
var html = ("<(?:" + ($std_core.join_4($std_core.Cons(closedTag, $std_core.Cons(soloTag, $std_core.Cons(comment, $std_core.Nil))), "|") + ") *(?:\\n+|\\s*$)"));
function blockLine(cap, context)  /* (cap : std/regex/matched, context : blockContext) -> block */  {
  return _createLine($std_regex.matched(cap), loose_1(context), undefined);
}
var ruleLine = $common.Rule("para-line", $std_regex.regex("^.+(\\n|$)", undefined, undefined), blockLine);
var rxtableBody = "((?: *(?:\\||\\+[-=]).*(?:\\n|$))+)";
 
// Tables
var rxtableHeader = "((?:(?:\\| *|\\+)[-=][-=+| ]*\\n *)?(?:\\| *[^-=~: ].+\\n *)*)";
var rxtableSep = ("((?:\\| *|\\+)[-=~:](?:[-=~+| :]|" + (xattrs + ")*)\n"));
var ruleLineX = $common.Rule("parax-line", $std_regex.regex(("^" + (notbspecial + ".*(\\n|$)")), undefined, undefined), blockLine);
function parseBlocksAcc(context, acc, src)  /* (context : blockContext, acc : list<block>, src : string) -> list<block> */  { tailcall: while(1)
{
  if ((src === "")) {
    return acc;
  }
  else {
    $std_core._unit_;
  }
  var _x0 = $common.matchRules(grammar(context), context, src, raw);
  {
    var _x1 = $std_core.Cons(_x0.fst, acc);
    var _x2 = ((src).substr(_x0.snd >=1 ? _x0.snd : 1));
    acc = _x1;
    src = _x2;
    continue tailcall;
  }
}}
var rxPreWhite = $std_regex.regex("^\\s+", undefined, undefined);
function parseBlocksAccLine(context, acc, line, src)  /* (context : blockContext, acc : list<block>, line : int, src : string) -> list<block> */  { tailcall: while(1)
{
  if ((src === "")) {
    return acc;
  }
  else {
    $std_core._unit_;
  }
  var _x0 = $common.matchRules(grammar(context), _copy(context, undefined, undefined, undefined, undefined, undefined, undefined, undefined, line, undefined), src, raw);
  var line2 = ((line + (("\n") ? ((_x0.thd).match(new RegExp(("\n").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'))||[]).length : 0))|0);
  var _x1 = $std_regex.find(_x0.thd, rxPreWhite, undefined);
  if (_x1 == null) {
    var ofs = 0;
  }
  else {
    var ofs = (("\n") ? (($std_regex.matched(_x1.unJust)).match(new RegExp(("\n").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'))||[]).length : 0);
  }
  var block2 = adjustAttrs(_x0.fst, function(attrs0  /* common/attrs */ ) {  return setLineNo(attrs0, lineMap(context), ((line + ofs)|0), undefined);});
  {
    var _x1 = $std_core.Cons(block2, acc);
    var _x2 = ((src).substr(_x0.snd >=1 ? _x0.snd : 1));
    acc = _x1;
    line = line2;
    src = _x2;
    continue tailcall;
  }
}}
 
// Parse text into blocks
function parseBlocks_1(context, src, line)  /* (context : blockContext, src : string, line : ?int) -> list<block> */  {
  var line_19535 = (line !== undefined) ? line : 0;
  if (line_19535 > 0) {
    var bs = parseBlocksAccLine(_copy(context, undefined, undefined, undefined, undefined, undefined, undefined, undefined, line_19535, undefined), $std_core.Nil, line_19535, src);
  }
  else {
    var _x0 = lineNo(context) > 0;
    if (_x0) {
      var bs = parseBlocksAccLine(context, $std_core.Nil, lineNo(context), src);
    }
    else {
      var bs = parseBlocksAcc(context, $std_core.Nil, src);
    }
  }
  return $std_core.reverse(bs);
}
function blockDefFootnote(cap, context)  /* (cap : std/regex/matched, context : blockContext) -> block */  {
  var id0 = $common.definitionId($std_regex._index_($std_regex.groups(cap), 1));
  var txt = ("~ Begin Footnote { id=\'fn-" + (id0 + ("\' }\n" + ($std_regex.replaceAll_1($std_regex._index_($std_regex.groups(cap), 2), rxindent4, "", undefined) + ("\n" + "~ End Footnote")))));
  return DefFootnote(id0, parseBlocks_1(context, txt, undefined));
}
function blockDefList(cap, context)  /* (cap : std/regex/matched, context : blockContext) -> block */  {
  function parseItem(extraAttrs, icap, line, icontext)  /* (extraAttrs : string, icap : std/regex/matched, line : int, icontext : blockContext) -> list<block> */  {
    var item = $std_regex.replaceAll_1($std_regex._index_($std_regex.groups(icap), 4), rxindent4, "", undefined);
    var attrs0 = $attributes.parseAttrs($std_regex._index_($std_regex.groups(icap), 3), "dd", item);
    var _x0 = ($std_regex._index_($std_regex.groups(icap), 1) === "");
    if (_x0) {
      var term = $std_regex._index_($std_regex.groups(icap), 2);
    }
    else {
      var term = $std_regex._index_($std_regex.groups(icap), 1);
    }
    if ((term === "")) {
      var dterm = $std_core.Nil;
    }
    else {
      var attrsd = $attributes.parseAttrs(extraAttrs, "dt", term);
      var dterm = $std_core.Cons(_createDiv($std_core.Cons(_createLine(term, undefined, undefined), $std_core.Nil), attrsd), $std_core.Nil);
    }
    if (line <= 0) {
      var _x0 = attrs0;
    }
    else {
      var _x0 = setLineNo(attrs0, lineMap(context), line, undefined);
    }
    var ddesc = _createDiv(parseBlocks_1(icontext, item, line), _x0);
    return $std_core._plus__3($std_core.Cons(ddesc, $std_core.Nil), dterm);
  }
  return blockListX($std_string.trim($std_regex.matched(cap)), context, "dl", ".dl", rxDefItem, parseItem);
}
function blockList(cap, context)  /* (cap : std/regex/matched, context : blockContext) -> block */  {
  var _x0 = ($std_regex._index_($std_regex.groups(cap), 2)).length > 1;
  var tag0 = (_x0) ? "ol" : "ul";
  function parseItem(extraAttrs, icap, line, icontext)  /* (extraAttrs : string, icap : std/regex/matched, line : int, icontext : blockContext) -> list<block> */  {
    if (pedantic(icontext)) {
      var _x0 = rxindent4;
    }
    else {
      var _x0 = rxindent(($std_regex._index_($std_regex.groups(icap), 1)).length);
    }
    var item = $std_regex.replaceAll_1($std_regex._index_($std_regex.groups(icap), 4), _x0, "", undefined);
    var attrs0 = $attributes.parseAttrs((extraAttrs + (" ; " + $std_regex._index_($std_regex.groups(icap), 3))), "li", item);
    if (line <= 0) {
      var _x0 = attrs0;
    }
    else {
      var _x0 = setLineNo(attrs0, lineMap(context), line, undefined);
    }
    return $std_core.Cons(_createItem(parseBlocks_1(icontext, item, line), _x0), $std_core.Nil);
  }
  var bull0 = $std_core.substr_1($std_regex._index_($std_regex.groups(cap), 2), 0, 1);
  if ((bull0 === "*")) {
    var attrs00 = ".list-star";
  }
  else {
    if ((bull0 === "+")) {
      var attrs00 = ".list-plus";
    }
    else {
      if ((bull0 === "-")) {
        var attrs00 = ".list-dash";
      }
      else {
        if ((bull0 === "i")) {
          var attrs00 = "list-style-type:lower-roman";
        }
        else {
          if ((bull0 === "I")) {
            var attrs00 = "list-style-type:upper-roman";
          }
          else {
            if ((bull0 === "a")) {
              var attrs00 = "list-style-type:lower-alpha";
            }
            else {
              var attrs00 = ((bull0 === "A")) ? "list-style-type:upper-alpha" : "";
            }
          }
        }
      }
    }
  }
  var _x0 = $std_core.endsWith($std_regex._index_($std_regex.groups(cap), 2), ")");
  if (_x0) {
    var attrs1 = (attrs00 + " ; .list-sep-paren");
  }
  else {
    var _x1 = $std_core.endsWith($std_regex._index_($std_regex.groups(cap), 2), ")");
    var attrs1 = (_x1) ? (attrs00 + " ; .list-sep-dot") : attrs00;
  }
  return blockListX($std_regex.matched(cap), context, tag0, ("." + (tag0 + (" ; " + attrs1))), rxitem, parseItem);
}
function blockQuote(cap, context)  /* (cap : std/regex/matched, context : blockContext) -> block */  {
  var text0 = $std_regex.replaceAll_1($std_regex._index_($std_regex.groups(cap), 1), rxquotePrefix, "", undefined);
  var content0 = parseBlocks_1(context, text0, undefined);
  return _createQuote(content0, $attributes.parseAttrs($std_regex._index_($std_regex.groups(cap), 2), undefined, undefined));
}
 
// The main block grammar
var blockGrammar = $std_core.conslist([$common.Rule("lheading", $std_regex.regex(("^(?!    )([^ \\n].*?)" + (iattrs + "\\n *(===+|---+) *(?:\\n+|$)")), undefined, undefined), blockHeadingLine), $common.Rule("deflist", $std_regex.regex(deflist, undefined, undefined), blockDefList), $common.Rule("parax", $std_regex.regex(("^(" + (notbspecial + ("[^|\\n]*?(?:\\n|$)(?:(?!" + (endpara + ").+(?:\\n|$))*)\\n*")))), undefined, undefined), blockPara), $common.Rule("code", $std_regex.regex("^(    (?:.|\\n+    )*)\\n*", undefined, undefined), blockCode), $common.Rule("html", $std_regex.regex(("^ *" + html), undefined, undefined), blockHtml), $common.Rule("deflink", $std_regex.regex(("^ *\\[(?!\\^)" + (xlinkid + ("\\]: *<?((?:[^\\\\\\s>]|\\\\(?:.|\\n *))+)>?(?: +[\"(]((?:[^\\n\\\\]|\\\\(?:.|\\n *))+)[\")])?(?: |\\\\\\n *)*" + (iattrs + "(\\n+|$)")))), undefined, undefined), blockDefLink), $common.Rule("deffootnote", $std_regex.regex(("^ *\\[\\^" + (xlinkid + "\\]: *(?:\\n {4})?(.*(?:\\n+ {4}.*)*)(?:\\n+|$)")), undefined, undefined), blockDefFootnote), $common.Rule("hline", $std_regex.regex(("^ *" + hr), undefined, undefined), blockHLine), $common.Rule("list", $std_regex.regex(("^" + alist), undefined, undefined), blockList), $common.Rule("heading", $std_regex.regex(("^ *(#{1,6})(0?) *(.+?) *#* *" + (iattrs + "(?:\\n+|$)")), undefined, undefined), blockHeading), $common.Rule("blockquote", $std_regex.regex(("^((?: *>.+(?:\\n[^{\\n]+)*\\n*)+)" + (battrs + "(?:\n+|$)")), undefined, undefined), blockQuote), $common.Rule("fenced", $std_regex.regex(("^ *(```+) *(?:([^{}\\s]+) *)?" + (iattrs + "\\n([\\s\\S]+?)\\n *\\1 *(?:\\n+|$)")), undefined, undefined), blockFencedCode), $common.Rule("table", $std_regex.regex(("^ *" + (rxtableHeader + (rxtableSep + (rxtableBody + (pattrs + "\\n*"))))), undefined, undefined), blockTable), $common.Rule("nptable", $std_regex.regex(("^ *(\\S[^|\\n]*?\\|.*?)\\n *([-=~:]+ *\\|[-=~| :]*)\\n((?:.*\\|.*(?:\\n|$))*)" + (pattrs + "\\n*")), undefined, undefined), blockNpTable), $common.Rule("divnamed", $std_regex.regex(("^ *(~+) *[Bb]egin +([\\w\\d\\-]*) *" + (iattrs + "(?=\\n)([\\s\\S]*?)\\n *\\1 *[Ee]nd +\\2 *(?:\\n+|$)")), undefined, undefined), blockDiv), $common.Rule("div", $std_regex.regex(("^ *(~+) *([\\w\\d\\-]*) *" + (iattrs + "(?=\\n)([\\s\\S]*?)\\n *\\1 *(?:\\n+|$)")), undefined, undefined), blockDiv), $common.Rule("special", $std_regex.regex("^ *\\[ *(TOC|FOOTNOTES|TITLE)(?: *= *([\\w-]*))? *\\] *\\n*", undefined, undefined), blockSpecial), $common.Rule("para", $std_regex.regex(("^(.+(?:\\n|$)(?:(?!" + (endpara + ").+(?:\\n|$))*)\\n*")), undefined, undefined), blockPara), $common.Rule("blank", $std_regex.regex("^\\n+", undefined, undefined), blockBlank), ruleLine], $std_core.Nil);
var blockListGrammar = $common.ruleReplace($common.ruleReplace(blockGrammar, true, ruleLineX), true, ruleLine);
 
// Parse text into blocks
function parseBlocks(src, lineNo0, lineMap0, citestyle0, mdata, bench0, pedantic0)  /* (src : string, lineNo : int, lineMap : common/lineMap, citestyle : ?common/citestyle, mdata : std/dict/dict<string>, bench : ?bool, pedantic : ?bool) -> list<block> */  {
  var citestyle_19494 = (citestyle0 !== undefined) ? citestyle0 : $common.citeAuto;
  var bench_19498 = (bench0 !== undefined) ? bench0 : false;
  var pedantic_19502 = (pedantic0 !== undefined) ? pedantic0 : false;
  var bcontext = _createBlockContext(blockGrammar, blockListGrammar, citestyle_19494, mdata, bench_19498, pedantic_19502, false, lineNo0, lineMap0);
  return parseBlocks_1(bcontext, src, undefined);
}
var notbspecialx = "(?:[^ \\[\\*\\-_\\+\\d><#`~\\niIaA]|[iIaA](?!\\.))";
 
// koka exports:
return { 'HLine': HLine, 'Blank': Blank, 'Line': Line, 'Para': Para, 'Code': Code, 'Quote': Quote, 'List': List, 'Item': Item, 'Heading': Heading, 'Table': Table, 'DefLink': DefLink, 'DefFootnote': DefFootnote, 'Empty': Empty, 'Div': Div, 'Source': Source, 'Special': Special, 'attrs': attrs, 'text': text, 'loose': loose, 'language': language, 'content': content, 'tag': tag, 'depth': depth, 'header': header, 'columnAttrs': columnAttrs, 'cells': cells, 'id': id, 'link': link, 'input': input, 'parentAttrs': parentAttrs, 'name': name, 'value': value, 'isHLine': isHLine, 'isBlank': isBlank, 'isLine': isLine, 'isPara': isPara, 'isCode': isCode, 'isQuote': isQuote, 'isList': isList, 'isItem': isItem, 'isHeading': isHeading, 'isTable': isTable, 'isDefLink': isDefLink, 'isDefFootnote': isDefFootnote, 'isEmpty': isEmpty, 'isDiv': isDiv, 'isSource': isSource, 'isSpecial': isSpecial, 'grammar': grammar, 'listGrammar': listGrammar, 'citestyle': citestyle, 'metadata': metadata, 'bench': bench, 'pedantic': pedantic, 'loose_1': loose_1, 'lineNo': lineNo, 'lineMap': lineMap, '_copy': _copy, 'rattrs': rattrs, 'xattrs': xattrs, 'iattrs': iattrs, 'hr': hr, '_createLine': _createLine, 'raw': raw, '_createBlockContext': _createBlockContext, '_createCode': _createCode, '_createDiv': _createDiv, '_createHeading': _createHeading, '_createHLine': _createHLine, '_createItem': _createItem, '_createList': _createList, '_createPara': _createPara, '_createQuote': _createQuote, '_createSource': _createSource, '_createSpecial': _createSpecial, '_createTable': _createTable, 'adjustAttrs': adjustAttrs, 'bull': bull, 'endlist': endlist, 'alist': alist, 'inlineTags': inlineTags, 'atag': atag, 'battrs': battrs, 'blankline': blankline, 'blockBlank': blockBlank, 'rxindent4': rxindent4, 'blockCode': blockCode, 'blockDefLink': blockDefLink, 'rxFirstNum': rxFirstNum, 'lattrs': lattrs, 'rxlattrs': rxlattrs, 'blockListX': blockListX, 'defdef': defdef, 'notbspecial': notbspecial, 'defitem': defitem, 'defstart': defstart, 'rxDefItem': rxDefItem, 'setLineNo': setLineNo, 'blockDiv': blockDiv, 'blockFencedCode': blockFencedCode, 'makeHeading': makeHeading, 'blockHeading': blockHeading, 'blockHeadingLine': blockHeadingLine, 'blockHLine': blockHLine, 'blockHtml': blockHtml, 'rxindent2x': rxindent2x, 'rxindent3x': rxindent3x, 'rxindent4x': rxindent4x, 'rxindent5x': rxindent5x, 'rxindent': rxindent, 'lroman': lroman, 'uroman': uroman, 'bullrest': bullrest, 'rxitem': rxitem, 'columnStyle': columnStyle, 'rxCell': rxCell, 'rxRowAttr': rxRowAttr, 'columns': columns, 'npcolumns': npcolumns, 'rows': rows, 'blockNpTable': blockNpTable, 'rxPattrs': rxPattrs, 'blockPara': blockPara, 'rxquotePrefix': rxquotePrefix, 'blockSpecial': blockSpecial, 'columnStyles': columnStyles, 'blockTable': blockTable, 'defdefs': defdefs, 'pattrs': pattrs, 'deflist': deflist, 'xlinkid': xlinkid, 'endpara': endpara, 'closedTag': closedTag, 'comment': comment, 'tagContent': tagContent, 'soloTag': soloTag, 'html': html, 'blockLine': blockLine, 'ruleLine': ruleLine, 'rxtableBody': rxtableBody, 'rxtableHeader': rxtableHeader, 'rxtableSep': rxtableSep, 'ruleLineX': ruleLineX, 'parseBlocksAcc': parseBlocksAcc, 'rxPreWhite': rxPreWhite, 'parseBlocksAccLine': parseBlocksAccLine, 'parseBlocks_1': parseBlocks_1, 'blockDefFootnote': blockDefFootnote, 'blockDefList': blockDefList, 'blockList': blockList, 'blockQuote': blockQuote, 'blockGrammar': blockGrammar, 'blockListGrammar': blockListGrammar, 'parseBlocks': parseBlocks, 'notbspecialx': notbspecialx };
});