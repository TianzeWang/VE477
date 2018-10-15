// koka generated module: "formatBlock"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_string', './std_regex', './std_dict', './std_log', './common', './attributes', './block', './inline', './formatInline', './htmlFormatter'], function($std_core, $std_string, $std_regex, $std_dict, $std_log, $common, $attributes, $block, $inline, $formatInline, $htmlFormatter) {
"use strict";
 
// koka declarations:
function FormatContext(inlineContext, tocBlocks, footnoteBlock, headingBase, langPrefix, pedantic, lineMap, fmt)  /* (inlineContext : inline/inlineContext, tocBlocks : std/dict/dict<list<block/block>>, footnoteBlock : block/block, headingBase : int, langPrefix : string, pedantic : bool, lineMap : common/lineMap, fmt : common/formatter) -> formatContext */  {
  return { inlineContext: inlineContext, tocBlocks: tocBlocks, footnoteBlock: footnoteBlock, headingBase: headingBase, langPrefix: langPrefix, pedantic: pedantic, lineMap: lineMap, fmt: fmt };
}
 
// Automatically generated. Retrieves the `inlineContext` constructor field of the ":formatContext" type.
function inlineContext(formatContext)  /* (formatContext : formatContext) -> inline/inlineContext */  {
  return formatContext.inlineContext;
}
 
// Automatically generated. Retrieves the `tocBlocks` constructor field of the ":formatContext" type.
function tocBlocks(formatContext)  /* (formatContext : formatContext) -> std/dict/dict<list<block/block>> */  {
  return formatContext.tocBlocks;
}
 
// Automatically generated. Retrieves the `footnoteBlock` constructor field of the ":formatContext" type.
function footnoteBlock(formatContext)  /* (formatContext : formatContext) -> block/block */  {
  return formatContext.footnoteBlock;
}
 
// Automatically generated. Retrieves the `headingBase` constructor field of the ":formatContext" type.
function headingBase(formatContext)  /* (formatContext : formatContext) -> int */  {
  return formatContext.headingBase;
}
 
// Automatically generated. Retrieves the `langPrefix` constructor field of the ":formatContext" type.
function langPrefix(formatContext)  /* (formatContext : formatContext) -> string */  {
  return formatContext.langPrefix;
}
 
// Automatically generated. Retrieves the `pedantic` constructor field of the ":formatContext" type.
function pedantic(formatContext)  /* (formatContext : formatContext) -> bool */  {
  return formatContext.pedantic;
}
 
// Automatically generated. Retrieves the `lineMap` constructor field of the ":formatContext" type.
function lineMap(formatContext)  /* (formatContext : formatContext) -> common/lineMap */  {
  return formatContext.lineMap;
}
 
// Automatically generated. Retrieves the `fmt` constructor field of the ":formatContext" type.
function fmt(formatContext)  /* (formatContext : formatContext) -> common/formatter */  {
  return formatContext.fmt;
}
function _copy(_this, inlineContext0, tocBlocks0, footnoteBlock0, headingBase0, langPrefix0, pedantic0, lineMap0, fmt0)  /* (formatContext, inlineContext : ?inline/inlineContext, tocBlocks : ?std/dict/dict<list<block/block>>, footnoteBlock : ?block/block, headingBase : ?int, langPrefix : ?string, pedantic : ?bool, lineMap : ?common/lineMap, fmt : ?common/formatter) -> formatContext */  {
  var inlineContext_142 = (inlineContext0 !== undefined) ? inlineContext0 : inlineContext(_this);
  var tocBlocks_148 = (tocBlocks0 !== undefined) ? tocBlocks0 : tocBlocks(_this);
  var footnoteBlock_154 = (footnoteBlock0 !== undefined) ? footnoteBlock0 : footnoteBlock(_this);
  var headingBase_160 = (headingBase0 !== undefined) ? headingBase0 : headingBase(_this);
  var langPrefix_166 = (langPrefix0 !== undefined) ? langPrefix0 : langPrefix(_this);
  var pedantic_172 = (pedantic0 !== undefined) ? pedantic0 : pedantic(_this);
  var lineMap_185 = (lineMap0 !== undefined) ? lineMap0 : lineMap(_this);
  var fmt_198 = (fmt0 !== undefined) ? fmt0 : fmt(_this);
  return FormatContext(inlineContext_142, tocBlocks_148, footnoteBlock_154, headingBase_160, langPrefix_166, pedantic_172, lineMap_185, fmt_198);
}
function _createFormatContext(inlineContext0, tocBlocks0, footnoteBlock0, headingBase0, langPrefix0, pedantic0, lineMap0, fmt0)  /* (inlineContext : inline/inlineContext, tocBlocks : std/dict/dict<list<block/block>>, footnoteBlock : block/block, headingBase : int, langPrefix : string, pedantic : bool, lineMap : common/lineMap, fmt : ?common/formatter) -> formatContext */  {
  var fmt_215 = (fmt0 !== undefined) ? fmt0 : $common.FmtHtml;
  return FormatContext(inlineContext0, tocBlocks0, footnoteBlock0, headingBase0, langPrefix0, pedantic0, lineMap0, fmt_215);
}
function deriveFirstLineInfo(attrs)  /* (attrs : common/attrs) -> common/attrs */  {
  var _x0 = $common.hasKey(attrs, "data-line-first");
  if (_x0 != null) {
    return $common.addKeyval($common.attrsNone, "data-line-first", _x0.unJust);
  }
  else {
    var _x1 = $common.hasKey(attrs, "data-line");
    return (_x1 != null) ? $common.addKeyval($common.attrsNone, "data-line-first", _x1.unJust) : $common.attrsNone;
  }
}
function deriveMathAttrs(parentAttrs)  /* (parentAttrs : common/attrs) -> common/attrs */  {
  return $common.addKeyvals($common.addClasses($common.attrsNone, $std_core.filter($common.classes(parentAttrs), function(c  /* string */ ) {  return ($std_core.startsWith(c, "snippet") || $std_core.startsWith(c, "math"));})), $std_core.filter($common.keyvals(parentAttrs), function(kv  /* (string, string) */ ) {  var key = $std_core.fst(kv); return ($std_core.startsWith(key, "color") || ($std_core.startsWith(key, "font-") || ($std_core.startsWith(key, "snippet-") || $std_core.startsWith(key, "math-"))));}));
}
function escapeMath(txt, fmt0)  /* (txt : string, fmt : common/formatter) -> string */  {
  return (fmt0 === 1) ? $common.htmlEscape(txt, undefined) : txt;
}
function fmtCmd(context, cmd, txt, attrs)  /* (context : formatContext, cmd : string, txt : string, attrs : ?common/attrs) -> string */  {
  var attrs_438 = (attrs !== undefined) ? attrs : $common.attrsNone;
  var _x0 = fmt(context);
  if (_x0 === 1) {
    if ($inline.bench(inlineContext(context))){
      return $htmlFormatter.tagEnv(cmd, txt, attrs_438, $inline.sanitize(inlineContext(context)));
    }
  }
  return $inline.xfmtCmd(inlineContext(context))(inlineContext(context), cmd, txt, attrs_438);
}
function fmtEnv(context, env, txt, attrs)  /* (context : formatContext, env : string, txt : string, attrs : ?common/attrs) -> string */  {
  var attrs_497 = (attrs !== undefined) ? attrs : $common.attrsNone;
  var _x0 = fmt(context);
  if (_x0 === 1) {
    if ($inline.bench(inlineContext(context))){
      return $htmlFormatter.tagEnv(env, txt, attrs_497, $inline.sanitize(inlineContext(context)));
    }
  }
  return $inline.fmtEnv(inlineContext(context), env, txt, attrs_497);
}
function fmtTable(context, head, body, colattrs, attrs)  /* (context : formatContext, head : list<common/row>, body : list<common/row>, colattrs : list<common/attrs>, attrs : ?common/attrs) -> string */  {
  var attrs_566 = (attrs !== undefined) ? attrs : $common.attrsNone;
  return $inline.xfmtTable(inlineContext(context))(inlineContext(context), head, body, colattrs, attrs_566);
}
function fmtText(context, txt)  /* (context : formatContext, txt : string) -> string */  {
  var _x0 = fmt(context);
  if (_x0 === 1) {
    return txt;
  }
  else {
    return $inline.xfmtCmd(inlineContext(context))(inlineContext(context), "", txt, $common.attrsNone);
  }
}
function lineText(b)  /* (b : block/block) -> string */  {
  return (b._tag === 3) ? b.text : "";
}
function noalign(s)  /* (s : string) -> bool */  {
  return !($std_core.startsWith(s, "align-"));
}
var rxbars = $std_regex.regex("[|+]+$", undefined, undefined);
var rxDashes = $std_regex.regex("^ *(\\\\/)?---+ *[|+]*$", undefined, undefined);
 
//regex(@"^( |- |-- )*---+ *[- ]*[|+]*$")
var rxDDashes = $std_regex.regex("^ *(\\\\/)?===+ *[|+]*$", undefined, undefined);
var rxSubSelect = $std_regex.regex("^(even|odd|last|\\d+)\\-", undefined, undefined);
function formatRows(rows, colstyles, context, attrs, isBody)  /* (rows : list<common/row>, colstyles : list<common/attrs>, context : formatContext, attrs : common/attrs, isBody : bool) -> list<common/row> */  {
  if ($std_core.isNil(rows)) {
    return $std_core.Nil;
  }
  else {
    $std_core._unit_;
  }
  function addRowKey(target, key, test)  /* (target : string, key : string, test : bool) -> list<(string, string)> */  {
    if (!(test)) {
      return $std_core.Nil;
    }
    else {
      var _x0 = $common.hasKey(attrs, key);
      if (_x0 == null) {
        return $std_core.Nil;
      }
      else {
        return $std_core.Cons($std_core._tuple2_(target, _x0.unJust), $std_core.Nil);
      }
    }
  }
  function containsDashes(row)  /* (row : common/row) -> bool */  {
    return $std_core.any($common.cells(row), function(cell  /* common/cell */ ) {  return ($std_regex.contains($common.text_1(cell), rxDashes, undefined) || $std_regex.contains($common.text_1(cell), rxDDashes, undefined));});
  }
  function filterKeyvals(keyvals, prefixes)  /* (keyvals : list<(string, string)>, prefixes : list<string>) -> list<(string, string)> */  {
    return $std_core.filterMap(keyvals, function(kv  /* (string, string) */ ) {  var _x0 = $std_core.find($std_core.reverse(prefixes), function(pre  /* string */ ) {  return $std_core.startsWith(kv.fst, pre);}); if (_x0 != null) {  var skey = ((kv.fst).substr((_x0.unJust).length)); var _x1 = $std_core.isJust($std_regex.find(skey, rxSubSelect, undefined)); if (_x1) {  return $std_core.Nothing;} else {  return $std_core.Just($std_core._tuple2_(skey, kv.snd));}} else {  return $std_core.Nothing;}});
  }
  function defaultCellKeyvals(colNum, rowstyle, isLast)  /* (colNum : int, rowstyle : common/attrs, isLast : bool) -> list<(string, string)> */  {
    var mod = ($std_core.even(colNum)) ? "even-" : "odd-";
    var elem = (isBody) ? "td-" : "th-";
    var idx = ($std_core.show_1(colNum) + "-");
    if (isLast) {
      var _x0 = $std_core.Cons("col-last-", $std_core.Cons((elem + "last-"), $std_core.Nil));
    }
    else {
      var _x0 = $std_core.Nil;
    }
    var prefixes0 = $std_core._plus__3($std_core.Cons("cell-", $std_core.Cons("col-", $std_core.Cons(("col-" + mod), $std_core.Cons(("col-" + idx), $std_core.Cons(elem, $std_core.Cons((elem + mod), $std_core.Cons((elem + idx), $std_core.Nil))))))), _x0);
    var allkvs = $std_core._plus__3($common.keyvals(attrs), $common.keyvals(rowstyle));
    var kvs = filterKeyvals(allkvs, prefixes0);
    return kvs;
  }
  function defaultKeyvals(hasLine, rowNum, isLast0)  /* (hasLine : bool, rowNum : int, isLast : bool) -> list<(string, string)> */  {
    var _x0 = ($std_core.even(rowNum) && rowNum !== 0);
    var mod0 = (_x0) ? "even-" : "odd-";
    var row0 = (isBody) ? "tbody-tr-" : "thead-tr-";
    var idx0 = ($std_core.show_1(rowNum) + "-");
    if (isLast0) {
      var _x0 = $std_core.Cons("tr-last-", $std_core.Cons((row0 + "last-"), $std_core.Nil));
    }
    else {
      var _x0 = $std_core.Nil;
    }
    var prefixes1 = $std_core._plus__3($std_core.Cons("tr-", $std_core.Cons(("tr-" + mod0), $std_core.Cons(("tr-" + idx0), $std_core.Cons(row0, $std_core.Cons((row0 + mod0), $std_core.Cons((row0 + idx0), $std_core.Nil)))))), _x0);
    var kvs0 = filterKeyvals($common.keyvals(attrs), prefixes1);
    return (hasLine) ? $std_core.filter(kvs0, function(kv0  /* (string, string) */ ) {  return ($std_core.startsWith($std_core.fst(kv0), "background-color") || $std_core.startsWith($std_core.fst(kv0), "rule"));}) : kvs0;
  }
  function formatRow(colNum0, row1, cols, rowstyle0)  /* (colNum : int, row : list<common/cell>, cols : list<common/attrs>, rowstyle : common/attrs) -> list<common/cell> */  {
    if (row1 != null) {
      if (cols != null) {
        var colstyle0 = $attributes.mergeDefault(rowstyle0, cols.head);
        var _x1 = $std_regex.find($common.text_1(row1.head), rxbars, undefined);
        if (_x1 == null) {
          var _x0 = $std_core._tuple2_($common.text_1(row1.head), 1);
        }
        else {
          var _x0 = $std_core._tuple2_($std_core.substr_1($common.text_1(row1.head), 0, $std_regex.index(_x1.unJust)), ($std_regex.matched(_x1.unJust)).length);
        }
        if (_x0.snd <= 1) {
          var _x2 = $std_core._tuple2_(colstyle0, cols.tail);
        }
        else {
          var colstylex = $common.addKeyval(colstyle0, "column-span", $std_core.show_1(_x0.snd));
          if (isBody) {
            var colstyley = colstylex;
          }
          else {
            var colstyley = $common.addKeyval(colstylex, "text-align", $std_core.maybe($common.hasKey(rowstyle0, "text-align"), "center", $std_core.id));
          }
          var _x3 = $std_core.drop(cols.tail, ((_x0.snd - 2)|0));
          if (_x3 != null) {
            var _x2 = $std_core._tuple2_($common.addKeyval($common.addClasses(colstyley, $std_core.filter($common.classes(_x3.head), noalign)), "column-span", $std_core.show_1(_x0.snd)), _x3.tail);
          }
          else {
            var _x2 = $std_core._tuple2_($common.addKeyval(colstyley, "column-span", $std_core.show_1(_x0.snd)), $std_core.Nil);
          }
        }
        if ($std_regex.contains(_x0.fst, rxDashes, undefined)) {
          var _x4 = $std_core._tuple3_($common.addClass(_x2.fst, "cell-line"), "", "tl");
        }
        else {
          if ($std_regex.contains(_x0.fst, rxDDashes, undefined)) {
            var _x4 = $std_core._tuple3_($common.addClass(_x2.fst, "cell-double-line"), "", "tl");
          }
          else {
            var _x5 = (isBody) ? "td" : "th";
            var _x4 = $std_core._tuple3_(_x2.fst, _x0.fst, _x5);
          }
        }
        var isLast1 = $std_core.isNil(row1.tail);
        var _x6 = ($std_core.even(colNum0)) ? "col-even" : "col-odd";
        var _x7 = (isLast1) ? $std_core.Cons("col-last", $std_core.Nil) : $std_core.Nil;
        var _x8 = (colNum0 === 1) ? $std_core.Cons("col-first", $std_core.Nil) : $std_core.Nil;
        var extraClasses = $std_core._plus__3($std_core.Cons(_x6, $std_core.Nil), $std_core._plus__3(_x7, _x8));
        var colstyle3 = $common.addKeyval($common.addClasses(_x4.fst, extraClasses), "data-col", $std_core.show_1(colNum0));
        var colstyle4 = $common.addKeyvals(colstyle3, defaultCellKeyvals(colNum0, rowstyle0, isLast1));
        var colstyle5 = $attributes.matchRules($inline.defaults(inlineContext(context)), _x4.thd, colstyle4);
        var elem0 = $common._createCell($inline.formatInline(inlineContext(context), _x4.snd, colstyle5), colstyle5);
        return $std_core.Cons(elem0, formatRow(((colNum0 + _x0.snd)|0), row1.tail, _x2.snd, rowstyle0));
      }
      else {
        return $std_core.Nil;
      }
    }
    else {
      return $std_core.Nil;
    }
  }
  var rowNum0 = { value: 0 };
  var rowCount = { value: 0 };
  var firstHasLine = $std_core.all($std_core.take(rows, 1), containsDashes);
  var lastHasLine = $std_core.all($std_core.take($std_core.reverse(rows), 1), containsDashes);
  var defaults = $inline.defaults(inlineContext(context));
  return $std_core.map_3(rows, function(row2  /* common/row */ ) {  ((rowCount).value = ((((rowCount).value) + 1)|0)); var hasLine0 = containsDashes(row2); var _x0 = (lastHasLine) ? 1 : 0; var isLast2 = (!(hasLine0) && ((rowCount).value) === (($std_core.length_3(rows) - _x0)|0)); if (!(hasLine0)) {  ((rowNum0).value = ((((rowNum0).value) + 1)|0));} else {  $std_core._unit_;} var _x0 = (isBody) ? "tbody" : "thead";var _x2 = $std_core.even(((rowNum0).value)); var _x1 = (_x2) ? "tr-even" : "tr-odd";var _x3 = (isLast2) ? $std_core.Cons("tr-last", $std_core.Nil) : $std_core.Nil;var _x5 = ((rowNum0).value) === 1; var _x4 = (_x5) ? $std_core.Cons("tr-first", $std_core.Nil) : $std_core.Nil; var extraClasses0 = $std_core._plus__3($std_core.Cons(_x0, $std_core.Cons(_x1, $std_core.Nil)), $std_core._plus__3(_x3, _x4)); var rowstyle00 = $attributes.matchRules(defaults, "tr", $common.addKeyval($common.addClasses($common.rowAttrs(row2), extraClasses0), "data-row", $std_core.show_1(((rowNum0).value)))); var rowstyle1 = $common.addKeyvals($common.addKeyvals(rowstyle00, $std_core._plus__3(addRowKey("rule-width", "rule-top-width", (!(isBody) && ((rowNum0).value) === 0)), $std_core._plus__3(addRowKey("rule-width", "rule-mid-width", (isBody && ((rowNum0).value) === 0)), $std_core._plus__3(addRowKey("rule-width", "rule-bottom-width", (isBody && (hasLine0 && ((rowCount).value) === $std_core.length_3(rows)))), $std_core._plus__3(addRowKey("rule-width", "rule-width", true), $std_core._plus__3(addRowKey("padding-top", "rule-top-sep", (!(isBody) && (firstHasLine && (((rowNum0).value) === 1 && !(hasLine0))))), $std_core._plus__3(addRowKey("padding-top", "rule-mid-sep", (isBody && (((rowNum0).value) === 1 && !(hasLine0)))), $std_core._plus__3(addRowKey("padding-bottom", "rule-mid-sep", (!(isBody) && isLast2)), addRowKey("padding-bottom", "rule-bottom-sep", (isBody && isLast2)))))))))), defaultKeyvals(hasLine0, ((rowNum0).value), isLast2)); return $common._createRow(formatRow(1, $common.cells(row2), colstyles, rowstyle1), rowstyle1);});
}
function getLineInfo(attrs)  /* (attrs : common/attrs) -> string */  {
  var _x0 = $common.hasKey(attrs, "data-line");
  if (_x0 != null) {
    var lineno = $std_core.snd($inline.parseLineInfo(_x0.unJust));
    var _x1 = (lineno <= 0 || $std_core.startsWith(_x0.unJust, "0;"));
    if (_x1) {
      return "";
    }
    else {
      return ("%mdk-data-line={" + (_x0.unJust + "}\n"));
    }
  }
  else {
    return "";
  }
}
var rxblank = $std_regex.regex("^\\s*$", undefined, undefined);
function formatBlock(context, block)  /* (context : formatContext, block : block/block) -> div string */  { tailcall: while(1)
{
  if (block._tag === 4) {
    var content = $inline.formatInline(inlineContext(context), block.text, block.attrs);
    if ($common.notag(block.attrs)) {
      return fmtEnv(context, "div", content, block.attrs);
    }
    else {
      if ($std_regex.contains(content, rxblank, undefined)) {
        return "";
      }
      else {
        return fmtEnv(context, "p", content, block.attrs);
      }
    }
  }
  if (block._tag === 3) {
    return $inline.formatInline(inlineContext(context), block.text, block.attrs);
  }
  if (block._tag === 2) {
    var _x0 = fmt(context);
    return (_x0 === 2) ? "" : "\n";
  }
  if (block._tag === 5) {
    $inline.logDataLine(block.attrs);
    return $formatInline.fmtCode(inlineContext(context), "pre", block.text, block.attrs);
  }
  if (block._tag === 7) {
    return fmtEnv(context, block.tag, formatBlocksX(context, block.content), block.attrs);
  }
  if (block._tag === 8) {
    return fmtEnv(context, "li", formatBlocksX(context, block.content), block.attrs);
  }
  if (block._tag === 9) {
    return fmtCmd(context, ("h" + $std_core.show_1($std_core.min(6, $std_core.max(1, ((block.depth + ((headingBase(context) - 1)|0))|0))))), $inline.formatInline(inlineContext(context), block.text, block.attrs), $common.addKeyval(block.attrs, "data-heading-depth", $std_core.show_1(block.depth)));
  }
  if (block._tag === 1) {
    var _x1 = fmt(context);
    if (_x1 === 1) {
      return ("\n<hr " + ($htmlFormatter.htmlFormat(block.attrs, "hr", $inline.sanitize(inlineContext(context))) + ">\n"));
    }
    else {
      return fmtCmd(context, "hr", "", block.attrs);
    }
  }
  if (block._tag === 15) {
    $inline.logDataLine(block.parentAttrs);
    if (block.input._tag === 1) {
      return $formatInline.fmtCode(inlineContext(context), "pre", block.text, deriveFirstLineInfo(block.parentAttrs));
    }
    else if (block.input._tag === 3) {
      return $formatInline.fmtMath(inlineContext(context), true, block.text, deriveMathAttrs(block.parentAttrs), getLineInfo(block.parentAttrs));
    }
    else if (block.input._tag === 2) {
      return $formatInline.fmtMath(inlineContext(context), true, $inline.mathPreBlock(block.text), deriveMathAttrs(block.parentAttrs), getLineInfo(block.parentAttrs));
    }
    else if (block.input._tag === 4) {
      var lineInfo = getLineInfo(block.parentAttrs);
      var mtxt = escapeMath(block.text, fmt(context));
      var _x2 = fmt(context);
      if (_x2 === 2) {
        return (lineInfo + mtxt);
      }
      else {
        $std_log.log("math-full", ("%mdk-begin-mathdefs\n" + (lineInfo + (block.text + "\n"))));
        var _x3 = $inline.mathStatic(inlineContext(context));
        if (_x3) {
          $std_log.log("math-plain", ("%mdk-begin-mathdefs\n" + (lineInfo + (block.text + "\n"))));
          return "";
        }
        else {
          return ("\\[" + (mtxt + "\\]"));
        }
      }
    }
    else if (block.input._tag === 7) {
      return $inline.formatInline(inlineContext(context), block.text, block.parentAttrs);
    }
    else if (block.input._tag === 6) {
      var _x4 = $inline.sanitize(inlineContext(context));
      if (_x4) {
        return "";
      }
      else {
        if (block.input.only == null) {
          return (block.text + "\n");
        }
        if (block.input.only != null && block.input.only.unJust === 2) {
          if ($common._eq__eq_(fmt(context), $common.FmtTex)){
            var lineInfo0 = getLineInfo(block.parentAttrs);
            return ("%mdk-begin-texraw\n" + (lineInfo0 + (block.text + "\n")));
          }
        }
        if (block.input.only != null) {
          if ($common._eq__eq_(block.input.only.unJust, fmt(context))){
            return (block.text + "\n");
          }
        }
        return "\n";
      }
    }
    else {
      return $inline.fmtEscapePre(inlineContext(context), block.text);
    }
  }
  if (block._tag === 6) {
    return fmtEnv(context, "blockquote", formatBlocksX(context, block.content), block.attrs);
  }
  if (block._tag === 10) {
    var colstyles = $std_core.map_3(block.columnAttrs, function(colstyle  /* common/attrs */ ) {  return $attributes.matchRules($inline.defaults(inlineContext(context)), "tc", colstyle);});
    var thead = formatRows(block.header, colstyles, context, block.attrs, false);
    var tbody = formatRows(block.cells, colstyles, context, block.attrs, true);
    return fmtTable(context, thead, tbody, colstyles, $common.addClass(block.attrs, "madoko"));
  }
  if (block._tag === 14 && block.content != null && block.content.head._tag === 15 && block.content.head.input._tag === 1 && block.content.tail == null) {
    if ((pedantic(context) && ($common.elementName(block.attrs, "div") === "pre"))){
      {
        var _x5 = $block._createCode(block.content.head.text, "", undefined);
        block = _x5;
        continue tailcall;
      }
    }
  }
  if (block._tag === 14) {
    if ($common.hasClass(block.attrs, "columns")){
      var cols = $std_core.map_3(block.content, function(b  /* block/block */ ) {  if (b._tag === 14) {  var _x6 = !($common.hasClass(b.attrs, "column")); (_x6) ? $common.warning("a \'Columns\' block should only contain \'Column\' blocks", undefined) : $std_core._unit_; return $common._createCell(formatBlocksX(context, b.content), b.attrs);} else {  $common.warning("a \'Columns\' block can only contain \'Column\' blocks", undefined); return $common._createCell(formatBlock(context, b), $common.attrsNone);}});
      return fmtTable(context, $std_core.Nil, $std_core.Cons($common._createRow(cols, undefined), $std_core.Nil), $std_core.map_3(cols, function(c  /* common/cell */ ) {  return $common.cellAttrs(c);}), block.attrs);
    }
  }
  if (block._tag === 14) {
    var txt5 = formatBlocksX(context, block.content);
    var rnd = $common.input(block.attrs);
    var _x6 = $common.hasKey(block.attrs, "bib-id");
    if (_x6 != null) {
      $std_log.log("aux", ("%mdk bib: " + (_x6.unJust + ($std_core.maybe($common.hasKey(block.attrs, "csl-style"), "", function(s  /* string */ ) {  return (", csl-style:" + $std_core.show_4(s));}) + ($std_core.maybe($common.hasKey(block.attrs, "bib-style"), "", function(s0  /* string */ ) {  return (", bib-style:" + $std_core.show_4(s0));}) + $std_core.maybe($common.hasKey(block.attrs, "locale"), "", function(s1  /* string */ ) {  return (", locale:" + $std_core.show_4(s1));}))))));
    }
    else {
      $std_core._unit_;
    }
    var _x6 = (($std_core.isNil($common.classes(block.attrs)) && ($std_core.isNil($common.keyvals(block.attrs)) && ($common.name(block.attrs) === ""))) || ($common.notag(block.attrs) || ($common.isRaw(rnd) || ($common._eq__eq_(fmt(context), $common.FmtTex) && $common.isMathDefs(rnd)))));
    if (_x6) {
      return txt5;
    }
    else {
      return fmtEnv(context, "div", txt5, $common.addInputClass(block.attrs));
    }
  }
  if (block._tag === 16) {
    var linfo = $inline.fmtLineInfo(inlineContext(context), $std_core.mbstring($common.hasKey(block.attrs, "data-line")));
    var _x7 = ($std_core.toLower(block.name) === "toc");
    if (_x7) {
      var blks = $std_core.maybe($std_dict._lb__rb__2(tocBlocks(context), $std_core.toLower(block.value)), $std_core.Nil, $std_core.id);
      return (linfo + formatBlocksX(context, blks));
    }
    else {
      var _x8 = (($std_core.toLower(block.name) === "footnotes") && $common.isFmtHtml(fmt(context)));
      if (_x8) {
        return (linfo + formatBlock(context, footnoteBlock(context)));
      }
      else {
        return "";
      }
    }
  }
  if (block._tag === 11) {
    return "";
  }
  if (block._tag === 12) {
    return "";
  }
  return "";
}}
function formatBlocksAcc(context0, blocks, acc)  /* forall<h> (context : formatContext, blocks : list<block/block>, acc : std/string/builder<h>) -> <st<h>,div> string */  { tailcall: while(1)
{
  if (blocks == null) {
    return (acc).value;
  }
  else {
    if (blocks.head._tag === 3) {
      var _x9 = $std_core.span(blocks.tail, $block.isLine);
      var content2 = (blocks.head.text + $std_core.join_3($std_core.map_3(_x9.fst, lineText)));
      if (_x9.snd != null && _x9.snd.head._tag === 2) {
        {
          var _x10 = $std_string.append(acc, formatBlock(context0, $block._createPara(content2, blocks.head.attrs)));
          blocks = _x9.snd.tail;
          acc = _x10;
          continue tailcall;
        }
      }
      else {
        if (blocks.head.loose) {
          var newblock = $block._createPara(content2, blocks.head.attrs);
        }
        else {
          var newblock = $block._createLine(content2, blocks.head.loose, blocks.head.attrs);
        }
        {
          var _x11 = $std_string.append(acc, formatBlock(context0, newblock));
          blocks = _x9.snd;
          acc = _x11;
          continue tailcall;
        }
      }
    }
    if (blocks.head._tag === 4) {
      if (!($inline.bench(inlineContext(context0)))){
        if (blocks.tail != null && blocks.tail.head._tag === 14) {
          if ($common.hasClass(blocks.tail.head.attrs, "para-block")){
            {
              var _x12 = $std_string.append(acc, formatBlock(context0, $block._createPara(blocks.head.text, $common.addClass(blocks.head.attrs, "para-continue"))));
              blocks = blocks.tail;
              acc = _x12;
              continue tailcall;
            }
          }
        }
        {
          var _x13 = $std_string.append(acc, formatBlock(context0, blocks.head));
          blocks = blocks.tail;
          acc = _x13;
          continue tailcall;
        }
      }
    }
    {
      var _x14 = $std_string.append(acc, formatBlock(context0, blocks.head));
      blocks = blocks.tail;
      acc = _x14;
      continue tailcall;
    }
  }
}}
function formatBlocksX(context1, blocks0)  /* (context : formatContext, blocks : list<block/block>) -> div string */  {
  return formatBlocksAcc(context1, blocks0, { value: '' });
}
 
// Format blocks into html and parse and format all inline elements
function formatBlocks(context, blocks)  /* (context : formatContext, blocks : list<block/block>) -> string */  {
  return $std_core.unsafeNoDiv(function() {
    return formatBlocksX(context, blocks);
  });
}
function initialFormatContext(icontext, lineMap0, headingBase0, pedantic0, fmt0)  /* (icontext : inline/inlineContext, lineMap : common/lineMap, headingBase : int, pedantic : bool, fmt : common/formatter) -> formatContext */  {
  return _createFormatContext(icontext, $std_dict.dict(), $block.Empty, headingBase0, "language-", pedantic0, lineMap0, fmt0);
}
 
// koka exports:
return { 'FormatContext': FormatContext, 'inlineContext': inlineContext, 'tocBlocks': tocBlocks, 'footnoteBlock': footnoteBlock, 'headingBase': headingBase, 'langPrefix': langPrefix, 'pedantic': pedantic, 'lineMap': lineMap, 'fmt': fmt, '_copy': _copy, '_createFormatContext': _createFormatContext, 'deriveFirstLineInfo': deriveFirstLineInfo, 'deriveMathAttrs': deriveMathAttrs, 'escapeMath': escapeMath, 'fmtCmd': fmtCmd, 'fmtEnv': fmtEnv, 'fmtTable': fmtTable, 'fmtText': fmtText, 'lineText': lineText, 'noalign': noalign, 'rxbars': rxbars, 'rxDashes': rxDashes, 'rxDDashes': rxDDashes, 'rxSubSelect': rxSubSelect, 'formatRows': formatRows, 'getLineInfo': getLineInfo, 'rxblank': rxblank, 'formatBlock': formatBlock, 'formatBlocksAcc': formatBlocksAcc, 'formatBlocksX': formatBlocksX, 'formatBlocks': formatBlocks, 'initialFormatContext': initialFormatContext };
});