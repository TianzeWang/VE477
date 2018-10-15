// koka generated module: "mathParse"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_string', './std_regex', './std_dict', './common', './options'], function($std_core, $std_string, $std_regex, $std_dict, $common, $options) {
"use strict";
 
// koka declarations:
var rxDigest = $std_regex.regex("\\\\begin{md(?:Inline|Display)Snippet}[\\[\\{]([a-fA-F0-9]{32})[\\}\\]]", undefined, undefined);
function containsSnippet(txt)  /* (txt : string) -> bool */  {
  return $std_regex.contains(txt, rxDigest, undefined);
}
function dimension(whole, fraction)  /* (whole : string, fraction : string) -> double */  {
  var w = ($std_core.maybe($std_core.parseInt(whole, undefined), 0, $std_core.id));
  var f = (($std_core.maybe($std_core.parseInt($std_core.substr_1((fraction + "00000"), 0, 5), undefined), 0, $std_core.id)) / 100000.0);
  return (w + f);
}
function findIdx(xs, id, acc)  /* (xs : list<string>, id : string, acc : ?int) -> maybe<int> */  { tailcall: while(1)
{
  var acc_317 = (acc !== undefined) ? acc : 0;
  if (xs == null) {
    return $std_core.Nothing;
  }
  else {
    if ((xs.head === id)) {
      return $std_core.Just(acc_317);
    }
    else {
      {
        var _x0 = ((acc_317 + 1)|0);
        xs = xs.tail;
        acc = _x0;
        continue tailcall;
      }
    }
  }
}}
var rxSvgId = $std_regex.regex("\\b(id=[\'\"]|xlink:href=[\'\"]#|url\\()([\\w\\-]+)(?=[\'\"\\)])", undefined, undefined);
function renameIds(svg, renames)  /* (svg : string, renames : list<(string, string)>) -> string */  {
  var d = $std_dict.dict_1(renames);
  return $std_regex.replaceAll(svg, rxSvgId, function(cap  /* std/regex/matched */ ) {  var id = $std_regex._index_($std_regex.groups(cap), 2); var _x0 = $std_dict._lb__rb__2(d, id); if (_x0 == null) {  return $std_regex.matched(cap);} else {  return ($std_regex._index_($std_regex.groups(cap), 1) + _x0.unJust);}}, undefined);
}
function renamePaths(pid)  /* (pid : (string, list<string>)) -> list<string> */  {
  var pathid = $std_core.fst(pid);
  return $std_core.mapIndexed($std_core.snd(pid), function(idx  /* int */ , path  /* string */ ) {  if (idx === 0) {  return path;} else {  var newid = (pathid + ("-" + $std_core.show_1(idx))); return renameIds(path, $std_core.Cons($std_core._tuple2_(pathid, newid), $std_core.Nil));}});
}
var rxDim = ", *(\\d+)(?:\\.(\\d+))? *pt\\b *";
var rxEmbed = "(?:, *(data:.*))?";
var rxMime = ", *(image/[\\w\\+]+) *";
var rxNum = ", *(\\d+) *";
var rxDimLine = $std_regex.regex(("^((\\d+) *, *([a-zA-Z0-9]+) *" + (rxDim + (rxDim + (rxDim + (")" + ("(?:" + (rxDim + (rxDim + (rxDim + (rxNum + (rxMime + (rxEmbed + ")?$")))))))))))), undefined, true);
var rxMimePre = $std_regex.regex("^image/(\\w+)", undefined, undefined);
var rxSvgPath = $std_regex.regex("<path\\b(?:[^/>]|/(?![^>]))*?\\bid=\'([^\']+)\'(?:[^/>]|/(?![^>]))*?/>", undefined, undefined);
function showSize(size)  /* (size : int) -> string */  {
  var kb = 1024;
  var _x0 = size < $std_core.intMultiply(10,kb);
  if (_x0) {
    return ($std_core.align($std_core.showFixed(((size) / (kb)), 1), 4, undefined) + " kb");
  }
  else {
    return ($std_core.align($std_core.show_1($std_core._fs__1(((size + ((kb - 1)|0))|0), kb)), 4, undefined) + " kb");
  }
}
 
// parse a dimension file written by latex snippets
function parseMathDim(txt, opts)  /* (txt : string, opts : options/mathoptions) -> (std/dict/dict<common/mathinfo>, string, string) */  {
  var mi = $std_dict.mdict();
  var paths = $std_dict.mdict();
  var svgsize = { value: 0 };
  var svgreduced = { value: 0 };
  var baseline = (($options.baseline(opts)) / 100.0);
  $std_core.foreach_2($std_regex.findAll(txt, rxDimLine, undefined), function(cap  /* std/regex/matched */ ) {  var page = $std_core.maybe($std_core.parseInt($std_regex._index_($std_regex.groups(cap), 2), undefined), 0, $std_core.id); var ptwidth = dimension($std_regex._index_($std_regex.groups(cap), 4), $std_regex._index_($std_regex.groups(cap), 5)); var ptheight = dimension($std_regex._index_($std_regex.groups(cap), 6), $std_regex._index_($std_regex.groups(cap), 7)); var ptdepth = dimension($std_regex._index_($std_regex.groups(cap), 8), $std_regex._index_($std_regex.groups(cap), 9)); var iwidth = dimension($std_regex._index_($std_regex.groups(cap), 10), $std_regex._index_($std_regex.groups(cap), 11)); var iheight = dimension($std_regex._index_($std_regex.groups(cap), 12), $std_regex._index_($std_regex.groups(cap), 13)); var bboxadj = dimension($std_regex._index_($std_regex.groups(cap), 14), $std_regex._index_($std_regex.groups(cap), 15)); var size = $std_core.maybe($std_core.parseInt($std_regex._index_($std_regex.groups(cap), 16), undefined), 0, $std_core.id); var mime = $std_regex._index_($std_regex.groups(cap), 17); var imageData = $std_regex._index_($std_regex.groups(cap), 18); var _x0 = $std_regex.find(mime, rxMimePre, undefined); if (_x0 != null) {  var ext = ("." + $std_regex._index_($std_regex.groups(_x0.unJust), 1));} else {  var ext = ".png";} var imageName = ($options.imgDir(opts) + ("/math-" + ($std_regex._index_($std_regex.groups(cap), 3) + ext))); var height = ((iheight > 0.0)) ? iheight : ptheight; var width = ((iwidth > 0.0)) ? iwidth : ptwidth; if ((ptheight !== 0.0)) {  var depth = (ptdepth * (height / ptheight));} else {  var depth = 0.0;} var _x0 = (!($options.svgShare(opts)) || (mime !== "image/svg+xml")); if (_x0) {  var embed = imageData;} else {  ((svgsize).value = ((((svgsize).value) + size)|0)); var renames = { value: $std_core.Nil }; var svg = $std_regex.replaceAll(imageData, rxSvgPath, function(pcap  /* std/regex/matched */ ) {  var pathid = $std_regex._index_($std_regex.groups(pcap), 1); var ps = $std_core.maybe($std_dict._lb__rb__1(paths, pathid), $std_core.Nil, $std_core.id); var path = $std_regex.matched(pcap); var _x1 = findIdx(ps, path, undefined); if (_x1 == null) {  (paths)[pathid] = $std_core._plus__3(ps, $std_core.Cons(path, $std_core.Nil)); var idx = $std_core.length_3(ps);} else {  ((svgreduced).value = ((((svgreduced).value) + (path).length)|0)); var idx = _x1.unJust;} if (idx > 0) {  ((renames).value = $std_core.Cons($std_core._tuple2_(pathid, (pathid + ("-" + $std_core.show_1(idx)))), ((renames).value)));} else {  $std_core._unit_;} return "";}, undefined); var embed = (renameIds(svg, ((renames).value))).replace(new RegExp(("<defs></defs>").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'),"");} var _x0 = ((mime === "image/svg+xml")) ? $common.Svg : $common.Png; var scale = (($options.getMathScale(opts, _x0)) / 100.0); return (mi)[$std_regex._index_($std_regex.groups(cap), 3)] = $common.Mathinfo(imageName, page, (scale * height), (scale * width), ((scale * depth) + baseline), iheight, iwidth, (scale * bboxadj), size, embed, imageData);});
  var _x0 = ((svgreduced).value) <= 0;
  if (_x0) {
    var msg = "";
  }
  else {
    var msg = (" svg reduction:  " + ($std_core.align($std_core.show_1($std_core.int_3(((100.0 * (((svgreduced).value))) / (((svgsize).value))), undefined)), 2, undefined) + ("% to " + (showSize(((((svgsize).value) - ((svgreduced).value))|0)) + " (due to path sharing)"))));
  }
  var svgpaths = $std_core.join_4($std_core.concat_1($std_dict.list(paths), renamePaths), "\n");
  if ($std_core.isEmpty(svgpaths)) {
    var svgdefs = "";
  }
  else {
    var svgdefs = ("\n<svg id=\'math-svg-paths\' style=\'display:none\' version=\'1.1\' viewBox=\'0 0 0 0\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'>\n" + ("<defs>\n" + (svgpaths + "\n</defs>\n</svg>\n")));
  }
  return $std_core._tuple3_($std_dict.freeze(mi), svgdefs, msg);
}
var rxComment = $std_regex.regex("\\r?\\n[ \\t]*%[^\\r\\n]*", undefined, undefined);
var rxLines = $std_regex.regex("(?:\\r?\\n)+", undefined, undefined);
var rxSnippet = $std_regex.regex("\\\\begin{md(?:Inline|Display)Snippet}[\\s\\S]*?\\\\end{md(?:Inline|Display)Snippet}", undefined, undefined);
 
// return all tex content outside snippets and line comments
function unsnippet(txt, which)  /* (txt : string, which : string) -> string */  {
  var res = $std_regex.replaceAll_1($std_regex.replaceAll_1($std_regex.replaceAll_1(txt, rxSnippet, "", undefined), rxComment, "", undefined), rxLines, "\n", undefined);
  return res;
}
 
// koka exports:
return { 'rxDigest': rxDigest, 'containsSnippet': containsSnippet, 'dimension': dimension, 'findIdx': findIdx, 'rxSvgId': rxSvgId, 'renameIds': renameIds, 'renamePaths': renamePaths, 'rxDim': rxDim, 'rxEmbed': rxEmbed, 'rxMime': rxMime, 'rxNum': rxNum, 'rxDimLine': rxDimLine, 'rxMimePre': rxMimePre, 'rxSvgPath': rxSvgPath, 'showSize': showSize, 'parseMathDim': parseMathDim, 'rxComment': rxComment, 'rxLines': rxLines, 'rxSnippet': rxSnippet, 'unsnippet': unsnippet };
});