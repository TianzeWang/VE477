// koka generated module: "codeAlign"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_log', './std_regex', './std_dict', './common', './attributes'], function($std_core, $std_log, $std_regex, $std_dict, $common, $attributes) {
"use strict";
 
// koka declarations:
function Ccell(span, center, content)  /* (span : int, center : bool, content : string) -> ccell */  {
  return { span: span, center: center, content: content };
}
function CodeTable(columns, rows)  /* (columns : int, rows : list<crow>) -> codeTable */  {
  return { columns: columns, rows: rows };
}
 
// Automatically generated. Retrieves the `span` constructor field of the ":ccell" type.
function span(ccell)  /* (ccell : ccell) -> int */  {
  return ccell.span;
}
 
// Automatically generated. Retrieves the `center` constructor field of the ":ccell" type.
function center(ccell)  /* (ccell : ccell) -> bool */  {
  return ccell.center;
}
 
// Automatically generated. Retrieves the `content` constructor field of the ":ccell" type.
function content(ccell)  /* (ccell : ccell) -> string */  {
  return ccell.content;
}
function _copy(_this, span0, center0, content0)  /* (ccell, span : ?int, center : ?bool, content : ?string) -> ccell */  {
  var span_104 = (span0 !== undefined) ? span0 : span(_this);
  var center_110 = (center0 !== undefined) ? center0 : center(_this);
  var content_116 = (content0 !== undefined) ? content0 : content(_this);
  return Ccell(span_104, center_110, content_116);
}
 
// Automatically generated. Retrieves the `columns` constructor field of the ":codeTable" type.
function columns(codeTable)  /* (codeTable : codeTable) -> int */  {
  return codeTable.columns;
}
 
// Automatically generated. Retrieves the `rows` constructor field of the ":codeTable" type.
function rows(codeTable)  /* (codeTable : codeTable) -> list<crow> */  {
  return codeTable.rows;
}
function _copy_1(_this, columns0, rows0)  /* (codeTable, columns : ?int, rows : ?list<crow>) -> codeTable */  {
  var columns_144 = (columns0 !== undefined) ? columns0 : columns(_this);
  var rows_150 = (rows0 !== undefined) ? rows0 : rows(_this);
  return CodeTable(columns_144, rows_150);
}
function map(ct, f)  /* (ct : codeTable, f : (string, int) -> string) -> codeTable */  {
  var arg_373 = ct;
  var arg_375 = $std_core.map_3(rows(ct), function(row  /* crow */ ) {  return $std_core.mapIndexed(row, function(idx  /* int */ , ccell  /* ccell */ ) {  return _copy(ccell, undefined, undefined, f(content(ccell), idx));});});
  var arg_374 = undefined;
  return _copy_1(arg_373, arg_374, arg_375);
}
function getColumn(col, text, parts)  /* (col : int, text : string, parts : list<(int, string)>) -> int */  {
  return (parts == null) ? 999 : parts.head.fst;
}
function getSpan(acols, col, acc)  /* (acols : list<int>, col : int, acc : ?list<int>) -> (list<int>, list<int>) */  { tailcall: while(1)
{
  var acc_418 = (acc !== undefined) ? acc : $std_core.Nil;
  if (acols == null) {
    return $std_core._tuple2_($std_core.reverse(acc_418), $std_core.Nil);
  }
  else {
    if (acols.head >= col) {
      return $std_core._tuple2_($std_core.reverse(acc_418), acols.tail);
    }
    else {
      {
        var _x0 = $std_core.Cons(acols.head, acc_418);
        acols = acols.tail;
        acc = _x0;
        continue tailcall;
      }
    }
  }
}}
var rxHtmlTags = "</?\\w+\\b[^>]*>";
var rxWhite = $std_regex.regex((rxHtmlTags + "|\\s+"), undefined, undefined);
function isWhite(s)  /* (s : string) -> bool */  {
  return ($std_regex.replaceAll_1(s, rxWhite, "", undefined) === "");
}
function tagsSpaces(cap)  /* (cap : std/regex/matched) -> string */  {
  var _x0 = $std_core.startsWith($std_regex.matched(cap), "<ESCAPED");
  if (_x0) {
    return $std_core.string_3($std_core.maybe($std_core.parseInt($std_regex._index_($std_regex.groups(cap), 1), undefined), 1, $std_core.id), '.');
  }
  else {
    var _x1 = $std_core.startsWith($std_regex.matched(cap), "&");
    return (_x1) ? "." : "";
  }
}
function tagsLength(cap)  /* (cap : std/regex/matched) -> int */  {
  return ((($std_regex.matched(cap)).length - (tagsSpaces(cap)).length)|0);
}
function htmlCol(caps, col, extra)  /* (caps : list<std/regex/matched>, col : int, extra : int) -> int */  { tailcall: while(1)
{
  if (caps == null) {
    return ((col + extra)|0);
  }
  else {
    var _x0 = ($std_regex.index(caps.head) < ((col + extra)|0) || ($std_regex.index(caps.head) === ((col + extra)|0) && $std_core.startsWith($std_regex.matched(caps.head), "</")));
    if (_x0) {
      {
        var _x1 = ((extra + tagsLength(caps.head))|0);
        caps = caps.tail;
        extra = _x1;
        continue tailcall;
      }
    }
    else {
      return ((col + extra)|0);
    }
  }
}}
var rxTags = $std_regex.regex(("<ESCAPED\\s*(?:width=(\\d*)\\s*)?>[\\s\\S]*?</ESCAPED>|" + (rxHtmlTags + "|&(?:\\w+|#[xX]?[\\da-fA-F]+);")), undefined, undefined);
function htmlColumn(s, col)  /* (s : string, col : int) -> int */  {
  var caps = $std_core.list_4($std_regex.findAll(s, rxTags, undefined));
  return htmlCol(caps, col, 0);
}
function subPart(line, col, len)  /* (line : string, col : int, len : ?int) -> string */  {
  var len_1461 = (len !== undefined) ? len : (line).length;
  var col0 = htmlColumn(line, col);
  var col1 = htmlColumn(line, ((col + len_1461)|0));
  return $std_core.substr_1(line, col0, ((col1 - col0)|0));
}
function splitColumns(line, col, lineCols)  /* (line : string, col : int, lineCols : list<int>) -> list<(int, string)> */  {
  if (lineCols == null) {
    return $std_core.Cons($std_core._tuple2_(col, subPart(line, col, undefined)), $std_core.Nil);
  }
  else {
    return $std_core.Cons($std_core._tuple2_(col, subPart(line, col, ((lineCols.head - col)|0))), splitColumns(line, lineCols.head, lineCols.tail));
  }
}
function alignParts(acols, parts, rxEndSpaces)  /* (acols : list<int>, parts : list<(int, string)>, rxEndSpaces : std/regex/regex) -> list<ccell> */  {
  if (parts == null) {
    return $std_core.Nil;
  }
  else {
    var nextcol = getColumn(parts.head.fst, parts.head.snd, parts.tail);
    var _x0 = getSpan(acols, nextcol, undefined);
    var span0 = (($std_core.length_3(_x0.fst) + 1)|0);
    if (isWhite(parts.head.snd)) {
      var pre = $std_core.string_3(parts.head.fst, ' ');
      var ws = splitColumns(pre, parts.head.fst, _x0.fst);
      var ccells = $std_core.map_3(ws, function(___lp_173_comma_22_rp_  /* (int, string) */ ) {  return Ccell(1, false, " ");});
    }
    else {
      var stext = $std_regex.replace_1(parts.head.snd, rxEndSpaces, " ", undefined);
      var ccells = $std_core.Cons(Ccell(span0, false, stext), $std_core.Nil);
    }
    return $std_core._plus__3(ccells, alignParts(_x0.snd, parts.tail, rxEndSpaces));
  }
}
function rawColumn(line, col)  /* (line : string, col : int) -> int */  {
  var raw = $std_regex.replaceAll($std_core.substr_1(line, 0, col), rxTags, tagsSpaces, undefined);
  return (raw).length;
}
function findAlignColumns(line, rxSep)  /* (line : string, rxSep : std/regex/regex) -> list<int> */  {
  var n = (line).length;
  return $std_core.concatMaybe($std_core.map_3($std_core.list_4($std_regex.findAll(line, rxSep, undefined)), function(cap  /* std/regex/matched */ ) {  var _x0 = (($std_regex.index(cap) + ($std_regex.matched(cap)).length)|0) >= n; if (_x0) {  return $std_core.Nothing;} else {  return $std_core.Just(rawColumn(line, (($std_regex.index(cap) + ($std_regex.matched(cap)).length)|0)));}}));
}
function makeRow(acols, line, lineCols, sep)  /* (acols : list<int>, line : string, lineCols : list<int>, sep : int) -> list<ccell> */  {
  var parts1 = splitColumns(line, 0, lineCols);
  var rxEndSpaces = $std_regex.regex(($std_core.string_3(sep, ' ') + "$"), undefined, undefined);
  return alignParts(acols, parts1, rxEndSpaces);
}
function merge(alignss)  /* (alignss : list<list<int>>) -> list<int> */  {
  function insert(xs, y)  /* (xs : list<int>, y : int) -> list<int> */  {
    if (xs == null) {
      return $std_core.Cons(y, $std_core.Nil);
    }
    else {
      if (xs.head < y) {
        return $std_core.Cons(xs.head, insert(xs.tail, y));
      }
      else {
        return (xs.head === y) ? xs : $std_core.Cons(y, xs);
      }
    }
  }
  return $std_core.foldl($std_core.concat(alignss), $std_core.Nil, insert);
}
function show_1(ccell)  /* (ccell : ccell) -> string */  {
  var align = (center(ccell)) ? "c|" : "l|";
  return ("\\mc{" + ($std_core.show_1(span(ccell)) + ("}{" + (align + ("}{" + ((content(ccell)).replace(new RegExp((" ").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'),"~") + "}"))))));
}
function show(ct)  /* (ct : codeTable) -> string */  {
  return ("\\begin{tabular}{" + ($std_core.string_3(columns(ct), 'l') + ("}\n" + ($std_core.join_4($std_core.map_3(rows(ct), function(row  /* crow */ ) {  return $std_core.join_4($std_core.map_3(row, show_1), " & ");}), "\\\\\n") + "\n\\end{tabular}"))));
}
function codeAlign(txt, sep)  /* (txt : string, sep : ?int) -> codeTable */  {
  var sep_5209 = (sep !== undefined) ? sep : 2;
  var rxSep = $std_regex.regex((" {" + ($std_core.show_1(sep_5209) + ",}")), undefined, undefined);
  var ls = $std_core.list_4($std_core.lines((txt).replace(new RegExp(("<br>").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'),"\n")));
  var colss = $std_core.map_3(ls, function(line  /* string */ ) {  return findAlignColumns(line, rxSep);});
  var acols = merge(colss);
  var rows0 = $std_core.zipWith(ls, colss, function(line0  /* string */ , cols  /* list<int> */ ) {  return makeRow(acols, line0, cols, sep_5209);});
  return CodeTable((($std_core.length_3(acols) + 1)|0), rows0);
}
function foldCodeTable(ct, st, f)  /* forall<a> (ct : codeTable, st : a, f : (string, a) -> (string, a)) -> codeTable */  {
  function foldRow(row, st0)  /* (list<ccell>, 6148) -> (list<ccell>, 6148) */  {
    if (row == null) {
      return $std_core._tuple2_($std_core.Nil, st0);
    }
    else {
      var _x0 = f(content(row.head), st0);
      var _x1 = foldRow(row.tail, _x0.snd);
      return $std_core._tuple2_($std_core.Cons(_copy(row.head, undefined, undefined, _x0.fst), _x1.fst), _x1.snd);
    }
  }
  function foldRows(rows0, st00)  /* (list<list<ccell>>, 6148) -> (list<list<ccell>>, 6148) */  {
    if (rows0 == null) {
      return $std_core._tuple2_($std_core.Nil, st00);
    }
    else {
      var _x0 = foldRow(rows0.head, st00);
      var _x1 = foldRows(rows0.tail, _x0.snd);
      return $std_core._tuple2_($std_core.Cons(_x0.fst, _x1.fst), _x1.snd);
    }
  }
  return _copy_1(ct, undefined, $std_core.fst(foldRows(rows(ct), st)));
}
function getIndentColumn(acols, col, prev)  /* (acols : list<int>, col : int, prev : ?int) -> int */  { tailcall: while(1)
{
  var prev_6152 = (prev !== undefined) ? prev : 0;
  if (acols == null) {
    return 0;
  }
  else {
    if (acols.head === col) {
      return 0;
    }
    else {
      if (acols.head > col) {
        return prev_6152;
      }
      else {
        {
          var _x0 = acols.head;
          acols = acols.tail;
          prev = _x0;
          continue tailcall;
        }
      }
    }
  }
}}
 
// koka exports:
return { 'Ccell': Ccell, 'CodeTable': CodeTable, 'span': span, 'center': center, 'content': content, '_copy': _copy, 'columns': columns, 'rows': rows, '_copy_1': _copy_1, 'map': map, 'getColumn': getColumn, 'getSpan': getSpan, 'rxHtmlTags': rxHtmlTags, 'rxWhite': rxWhite, 'isWhite': isWhite, 'tagsSpaces': tagsSpaces, 'tagsLength': tagsLength, 'htmlCol': htmlCol, 'rxTags': rxTags, 'htmlColumn': htmlColumn, 'subPart': subPart, 'splitColumns': splitColumns, 'alignParts': alignParts, 'rawColumn': rawColumn, 'findAlignColumns': findAlignColumns, 'makeRow': makeRow, 'merge': merge, 'show_1': show_1, 'show': show, 'codeAlign': codeAlign, 'foldCodeTable': foldCodeTable, 'getIndentColumn': getIndentColumn };
});