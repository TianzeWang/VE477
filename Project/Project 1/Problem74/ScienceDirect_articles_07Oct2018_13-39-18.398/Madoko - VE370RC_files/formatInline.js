// koka generated module: "formatInline"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_log', './std_dict', './std_string', './std_regex', './std_crypto', './std_path', './common', './attributes', './inline', './htmlFormatter', './entity', './hilite', './codeAlign'], function($std_core, $std_log, $std_dict, $std_string, $std_regex, $std_crypto, $std_path, $common, $attributes, $inline, $htmlFormatter, $entity, $hilite, $codeAlign) {
"use strict";
 
// koka declarations:
function Cite(name, pre, post, modifier, number, year, authors, ordinal)  /* (name : string, pre : string, post : string, modifier : string, number : string, year : string, authors : string, ordinal : int) -> cite */  {
  return { name: name, pre: pre, post: post, modifier: modifier, number: number, year: year, authors: authors, ordinal: ordinal };
}
 
// Automatically generated. Retrieves the `name` constructor field of the ":cite" type.
function name(cite)  /* (cite : cite) -> string */  {
  return cite.name;
}
 
// Automatically generated. Retrieves the `pre` constructor field of the ":cite" type.
function pre(cite)  /* (cite : cite) -> string */  {
  return cite.pre;
}
 
// Automatically generated. Retrieves the `post` constructor field of the ":cite" type.
function post(cite)  /* (cite : cite) -> string */  {
  return cite.post;
}
 
// Automatically generated. Retrieves the `modifier` constructor field of the ":cite" type.
function modifier(cite)  /* (cite : cite) -> string */  {
  return cite.modifier;
}
 
// Automatically generated. Retrieves the `number` constructor field of the ":cite" type.
function number(cite)  /* (cite : cite) -> string */  {
  return cite.number;
}
 
// Automatically generated. Retrieves the `year` constructor field of the ":cite" type.
function year(cite)  /* (cite : cite) -> string */  {
  return cite.year;
}
 
// Automatically generated. Retrieves the `authors` constructor field of the ":cite" type.
function authors(cite)  /* (cite : cite) -> string */  {
  return cite.authors;
}
 
// Automatically generated. Retrieves the `ordinal` constructor field of the ":cite" type.
function ordinal(cite)  /* (cite : cite) -> int */  {
  return cite.ordinal;
}
function _copy(_this, name0, pre0, post0, modifier0, number0, year0, authors0, ordinal0)  /* (cite, name : ?string, pre : ?string, post : ?string, modifier : ?string, number : ?string, year : ?string, authors : ?string, ordinal : ?int) -> cite */  {
  var name_278 = (name0 !== undefined) ? name0 : name(_this);
  var pre_285 = (pre0 !== undefined) ? pre0 : pre(_this);
  var post_291 = (post0 !== undefined) ? post0 : post(_this);
  var modifier_297 = (modifier0 !== undefined) ? modifier0 : modifier(_this);
  var number_303 = (number0 !== undefined) ? number0 : number(_this);
  var year_309 = (year0 !== undefined) ? year0 : year(_this);
  var authors_322 = (authors0 !== undefined) ? authors0 : authors(_this);
  var ordinal_328 = (ordinal0 !== undefined) ? ordinal0 : ordinal(_this);
  return Cite(name_278, pre_285, post_291, modifier_297, number_303, year_309, authors_322, ordinal_328);
}
 
// Apply defaults
function applyDefaults(context, sname, attrs0)  /* (context : inline/inlineContext, sname : string, attrs : common/attrs) -> common/attrs */  {
  return $attributes.matchRules($inline.defaults(context), sname, attrs0);
}
 
//val attrs    = @"\{:?((?:[^\}\n]|\\\})*)\}"
var attrs = "\\{:?((?:[^\\\\\'\"\\}\\n]|\\\\[.\\n]|\'[^\']*\'|\"[^\"]*\")*)\\}";
 
// Format attributes
function formatAttrs(context, attrs0)  /* (context : inline/inlineContext, attrs : common/attrs) -> common/attrs */  {
  return $attributes.expand($common._copy(attrs0, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $inline.formatInline(context, $common.label(attrs0), undefined), undefined, undefined, undefined, undefined, undefined), $inline.metadata(context), undefined);
}
var rxPostHyphen = $std_regex.regex("([\\-\\._/\\?#\\[\\]@!$&\'\\(\\)\\*\\+,;=]+)", undefined, undefined);
function hypenateUrl(url)  /* (url : string) -> string */  {
  return ($std_regex.replaceAll_1(url, rxPostHyphen, "$1&#8203;", undefined)).replace(new RegExp(("%").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'),"&#8203;%");
}
function inlineAutoLink(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  var _x0 = $std_regex.matchedOn($std_regex.groups(cap), 3);
  if (_x0) {
    var attrs0 = formatAttrs(context, $attributes.parseAttrs($std_regex._index_($std_regex.groups(cap), 3), undefined, undefined));
  }
  else {
    var attrs0 = $common.attrsNone;
  }
  var attrsd = $attributes.matchRules($inline.defaults(context), "a", $common.addClass(attrs0, "texturl"));
  var _x0 = ($std_regex._index_($std_regex.groups(cap), 2) === "@");
  if (_x0) {
    var text = $std_regex.replace_1($std_regex._index_($std_regex.groups(cap), 1), $std_regex.regex("^mailto:", undefined, undefined), "", undefined);
    var url = ("mailto:" + text);
    return $inline.fmtLink(context, false, $common.newLink(url, undefined, attrsd, undefined, $inline.bench(context)), $inline.fmtEscape(context, hypenateUrl(text)));
  }
  else {
    return $inline.fmtLink(context, false, $common.newLink($std_regex._index_($std_regex.groups(cap), 1), undefined, attrsd, undefined, $inline.bench(context)), $inline.fmtEscape(context, hypenateUrl($std_regex._index_($std_regex.groups(cap), 1))));
  }
}
function inlineBreak(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  var _x0 = $inline.fmt(context);
  return (_x0 === 1) ? $inline.fmtText(context, "<br>\n") : $inline.fmtCmd(context, "br", "", undefined);
}
function inlineCite(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  $std_log.log("aux", ("\\citation{" + ($std_regex._index_($std_regex.groups(cap), 4) + "}")));
  var _x0 = $std_dict._lb__rb__2($inline.labels(context), $common.definitionId(("@" + $std_regex._index_($std_regex.groups(cap), 4))));
  if (_x0 != null) {
    var _x2 = ($std_regex._index_($std_regex.groups(cap), 3) === "-");
    var _x1 = (_x2) ? " .free" : "";
    return $inline.formatInline(context, ($std_regex._index_($std_regex.groups(cap), 1) + ("[" + ($std_regex._index_($std_regex.groups(cap), 2) + ("]{.textual" + (_x1 + "}"))))), undefined);
  }
  else {
    var _x3 = ($std_regex._index_($std_regex.groups(cap), 1) !== "");
    if (_x3) {
      $common.warning(("possibly missing citation: " + $std_regex._index_($std_regex.groups(cap), 2)), undefined);
    }
    else {
      $std_core._unit_;
    }
    return $inline.fmtText(context, $std_regex.matched(cap));
  }
}
 
// get and format default attributes
function formatDefaults(context, attrs0, elemName)  /* (context : inline/inlineContext, attrs : common/attrs, elemName : ?string) -> common/attrs */  {
  var elemName_2735 = (elemName !== undefined) ? elemName : "";
  var _x0 = !($common.defaults(attrs0));
  if (_x0) {
    return attrs0;
  }
  else {
    $std_core._unit_;
  }
  if ((elemName_2735 !== "")) {
    var sname = elemName_2735;
  }
  else {
    var _x0 = ($common.elem(attrs0) !== "");
    if (_x0) {
      var sname = $common.elem(attrs0);
    }
    else {
      var _x1 = $common.classes(attrs0);
      var sname = (_x1 != null) ? _x1.head : "span";
    }
  }
  var attrsx = $attributes.matchRules($inline.defaults(context), sname, attrs0);
  return formatAttrs(context, attrsx);
}
var rxClass = $std_regex.regex("^<span\\s+class=(?:\"([^\"]*)\"|\'([^\']*)\'|([^\\s\\&<>]+))\\s*>", true, undefined);
 
//val rxCodeEscaped = regex(@"\\\((?:(\d+):)?((?:[^\\\r\n]|\\\n|\\[^\)])*)\\\)")
var rxCodeEscaped = $std_regex.regex("\\\\\\((?:(\\d+):)?(?:((?:[^\\\\\\|]|\\\\[^\\)])*)\\|)?((?:[^\\\\\\r\\n]|\\\\\\n|\\\\[^\\)])*)\\\\\\)", undefined, undefined);
function fmtCodeEscaped(context, txt, format, formatToken, attrs0, st)  /* forall<a> (context : inline/inlineContext, txt : string, format : (string, maybe<a>) -> (string, maybe<a>), formatToken : (list<string>, string) -> string, attrs : ?common/attrs, st : ?maybe<a>) -> (string, maybe<a>) */  {
  var attrs_2918 = (attrs0 !== undefined) ? attrs0 : $common.attrsNone;
  var st_2923 = (st !== undefined) ? st : $std_core.Nothing;
  if ($common.hasClass(attrs_2918, "noescape")) {
    return format(txt, st_2923);
  }
  else {
    $std_core._unit_;
  }
  function codeEscape(src, st0)  /* (src : string, st0 : maybe<4728>) -> (string, maybe<4728>) */  {
    var _x0 = $std_regex.find(src, rxCodeEscaped, undefined);
    if (_x0 == null) {
      return format(src, st0);
    }
    else {
      var _x1 = format($std_core.substr_1(src, 0, $std_regex.index(_x0.unJust)), st0);
      var subcode = $std_regex.replaceAll_1($std_regex._index_($std_regex.groups(_x0.unJust), 2), $std_regex.regex("\\\\([^\\w])", undefined, undefined), "$1", undefined);
      var _x2 = $std_regex.matchedOn($std_regex.groups(_x0.unJust), 1);
      if (_x2) {
        var width = $std_core.maybe($std_core.parseInt($std_regex._index_($std_regex.groups(_x0.unJust), 1), undefined), 1, $std_core.id);
      }
      else {
        var _x3 = $std_regex.matchedOn($std_regex.groups(_x0.unJust), 2);
        var width = (_x3) ? (subcode).length : 1;
      }
      var _x2 = format(subcode, _x1.snd);
      var _x3 = $std_regex.find(_x2.fst, rxClass, undefined);
      if (_x3 != null) {
        var classes2 = $std_core.list_4($std_core.split_1(($std_regex._index_($std_regex.groups(_x3.unJust), 1) + ($std_regex._index_($std_regex.groups(_x3.unJust), 2) + $std_regex._index_($std_regex.groups(_x3.unJust), 3))), " "));
      }
      else {
        var classes2 = $std_core.Nil;
      }
      var innerEsc = $inline.fmtCmd(context, "span", $inline.formatInline(context, $std_regex._index_($std_regex.groups(_x0.unJust), 3), undefined), formatDefaults(context, $common.addClass($common.attrsNone, "code-escaped"), undefined));
      var escaped = (formatToken(classes2, innerEsc)).replace(new RegExp(("%mdk\n").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'),"{}");
      var fmt3 = ("<ESCAPED width=" + ($std_core.show_1(width) + (">" + (escaped + "</ESCAPED>"))));
      var _x3 = codeEscape(((src).substr($std_regex.next(_x0.unJust) >=1 ? $std_regex.next(_x0.unJust) : 1)), _x2.snd);
      return $std_core._tuple2_((_x1.fst + (fmt3 + _x3.fst)), _x3.snd);
    }
  }
  return codeEscape(txt, st_2923);
}
var rxEscaped = $std_regex.regex("<ESCAPED\\b[^>]*>([\\s\\S]*?)</ESCAPED>", undefined, undefined);
function fmtCodeUnescape(txt, fmt)  /* (txt : string, fmt : (string, bool) -> string) -> string */  {
  function unspan(caps, i)  /* (caps : list<std/regex/matched>, i : int) -> string */  {
    if (caps == null) {
      return fmt(((txt).substr(i)), i === 0);
    }
    else {
      return (fmt($std_core.substr_1(txt, i, (($std_regex.index(caps.head) - i)|0)), i === 0) + ($std_regex._index_($std_regex.groups(caps.head), 1) + unspan(caps.tail, $std_regex.next(caps.head))));
    }
  }
  var caps0 = $std_core.list_4($std_regex.findAll(txt, rxEscaped, undefined));
  return unspan(caps0, 0);
}
var rxEntity = $std_regex.regex("&(#[xX]\\d+|\\w+);", undefined, undefined);
function htmlUnescape(s)  /* (s : string) -> string */  {
  return $std_regex.replaceAll(s, rxEntity, function(cap  /* std/regex/matched */ ) {  var _x0 = $entity.entityToNum($std_regex._index_($std_regex.groups(cap), 1)); if (_x0 == null) {  return $std_regex.matched(cap);} else {  return $std_core.string_3(1, String.fromCharCode(_x0.unJust));}}, undefined);
}
var rxEndSpaces = $std_regex.regex("  +$", undefined, true);
var rxToken = "(?:<span\\s+.*?\\bclass=[\'\"]?([^\"\']+)[\'\"]?[^>]*>([\\s\\S]*?)</span>)";
var rxTokens = $std_regex.regex(("([^<>]+)|" + (rxToken + "|(<([^>]*)>)|(.)")), true, undefined);
function fmtCode(context, env0, txt, attrs0)  /* (context : inline/inlineContext, env0 : string, txt : string, attrs0 : ?common/attrs) -> string */  {
  var attrs0_5533 = (attrs0 !== undefined) ? attrs0 : $common.attrsNone;
  var env = ((env0 === "")) ? "code" : env0;
  var lang = $std_core.maybe($common.hasKey(attrs0_5533, "language"), "", $std_core.id);
  if ((lang === "")) {
    var attrs1 = attrs0_5533;
  }
  else {
    var attrs1 = $common.addClasses(attrs0_5533, $std_core.Cons(("language-" + lang), $std_core.Cons(("lang-" + lang), $std_core.Cons(lang, $std_core.Nil))));
  }
  var attrs2 = formatDefaults(context, attrs1, env);
  var _x0 = $common.hasKey(attrs2, "data-line-first");
  var cattrs = (_x0 == null) ? $common.attrsNone : $common.addKeyval($common.attrsNone, "data-line", _x0.unJust);
  if ($common.hasBoolKey(attrs2, "pretty-breakable")) {
    var cattrsTable = $common.addKeyvals(cattrs, $std_core.Cons($std_core._tuple2_("pretty-breakable", "true"), $std_core.Cons($std_core._tuple2_("tex-longtable", $common.lookupKey(attrs2, "tex-longtable", "longtable")), $std_core.Nil)));
  }
  else {
    var cattrsTable = cattrs;
  }
  var pretty = $common.hasClass(attrs2, "pretty");
  var plain0 = ((lang === "") || (!($inline.highlight(context)) || ($common.hasClass(attrs2, "plain") || $common.hasClass(attrs2, "prettyprint"))));
  if (plain0) {
    var plain = plain0;
  }
  else {
    if ($hilite.canHilite(lang)) {
      var plain = false;
    }
    else {
      $common.warning(("unknown language: " + lang), undefined);
      var plain = true;
    }
  }
  function colorize(code, mode)  /* (code : string, mode : maybe<hilite/hilitemode>) -> (string, maybe<hilite/hilitemode>) */  {
    if (plain) {
      return $std_core._tuple2_(code, mode);
    }
    else {
      var _x0 = $hilite.hilitePartial(code, lang, mode);
      if (_x0 == null) {
        return $std_core._tuple2_(code, mode);
      }
      else {
        return $std_core._tuple2_(_x0.unJust.fst, $std_core.Just(_x0.unJust.snd));
      }
    }
  }
  function colorToken(classes, content)  /* (classes : list<string>, content : string) -> string */  {
    var _x0 = (plain || $std_core.isNil(classes));
    if (_x0) {
      return content;
    }
    else {
      if (!(pretty)) {
        var pclasses = classes;
      }
      else {
        var pclasses = $std_core.Cons("ptoken", $std_core.filter(classes, function(cname  /* string */ ) {  return (cname !== "token");}));
      }
      var tokAttrs = formatDefaults(context, $common.addClasses($common._copy($common.attrsNone, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "span", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), pclasses), undefined);
      return $inline.fmtCodeToken(context, pclasses, content, lang, tokAttrs);
    }
  }
  function codeEscape(code0)  /* (code : string) -> string */  {
    return $std_core.fst(fmtCodeEscaped(context, txt, colorize, colorToken, attrs2, undefined));
  }
  function colorCode(content0, startline)  /* (content : string, startline : bool) -> string */  {
    return $std_regex.replaceAll($std_regex.replaceAll_1((content0).replace(new RegExp(("<br>").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'),"\n"), rxEndSpaces, " ", undefined), rxTokens, function(cap  /* std/regex/matched */ ) {  var nl = (pretty && (($std_regex.index(cap) === 0 && startline) || ($std_core.substr_1(content0, (($std_regex.index(cap) - 1)|0), 1) === "\n"))); var _x0 = $std_core.bool_2($std_regex._index_($std_regex.groups(cap), 2)); if (_x0) {  var classes0 = $std_core.list_4($std_core.split_1($std_regex._index_($std_regex.groups(cap), 2), " ")); return colorToken(classes0, $inline.fmtCodePlain(context, htmlUnescape($std_regex._index_($std_regex.groups(cap), 3)), nl));} else {  var _x1 = $std_core.bool_2($std_regex._index_($std_regex.groups(cap), 4)); if (_x1) {  return "";} else {  return $inline.fmtCodePlain(context, htmlUnescape($std_regex.matched(cap)), nl);}}}, undefined);
  }
  function codeUnescape(ecode, col)  /* (ecode : string, col : int) -> string */  {
    return fmtCodeUnescape(ecode, function(s  /* string */ , startLine0  /* bool */ ) {  return (plain) ? $inline.fmtCodePlain(context, s, undefined) : colorCode(s, startLine0);});
  }
  var pattrs0 = (plain) ? attrs2 : $common.addClass(attrs2, "colorized");
  var pattrs = formatDefaults(context, pattrs0, undefined);
  var _x0 = (pretty && (env !== "code"));
  if (_x0) {
    var ct = $codeAlign.map($codeAlign.codeAlign(codeEscape(txt), $inline.prettyAlign(context)), codeUnescape);
    var content1 = $inline.fmtCodeTable(context, ct, cattrsTable);
  }
  else {
    var content1 = codeUnescape(codeEscape(txt), 0);
  }
  if ((env === "code")) {
    return $inline.fmtCmd(context, "code", content1, $attributes.mergeDefault(pattrs, cattrs));
  }
  else {
    var _x1 = $common._eq__eq_($inline.fmt(context), $common.FmtTex);
    var _x0 = (_x1) ? "precode" : "code";
    return $inline.fmtEnv(context, env, $inline.fmtCmd(context, _x0, content1, cattrs), pattrs);
  }
}
function escapeMath(txt, fmt)  /* (txt : string, fmt : common/formatter) -> string */  {
  return (fmt === 1) ? $common.htmlEscape(txt, undefined) : txt;
}
var svgPrefix = "data:image/svg+xml;charset=utf8,";
function fmtMathImg(context, mi, txt, mtxt, attrs0)  /* (context : inline/inlineContext, mi : common/mathinfo, txt : string, mtxt : string, attrs : common/attrs) -> string */  {
  var _x0 = $common.hasKey(attrs0, "math-scale");
  if (_x0 != null) {
    var scale = (($std_core.maybe($std_core.parseInt(_x0.unJust, undefined), 100, $std_core.id)) / 100.0);
  }
  else {
    var scale = 1.0;
  }
  var _x0 = $common.hasKey(attrs0, "math-baseline");
  if (_x0 != null) {
    var baseline = ($std_core.maybe($std_core.parseInt(_x0.unJust, undefined), 0, $std_core.id));
  }
  else {
    var baseline = 0.0;
  }
  var fontsize = 10.0;
  var valign = (baseline - ((scale * ($common.depth(mi) + $common.bboxFuzz(mi))) / fontsize));
  var height = ((scale * $common.height(mi)) / fontsize);
  var width = ((scale * $common.width(mi)) / fontsize);
  if ((valign === 0.0)) {
    var xattrs0 = attrs0;
  }
  else {
    var xattrs0 = $common.addKeyvalIfNotExist(attrs0, "vertical-align", ($std_core.showFixed(valign, 4) + "em"));
  }
  var _x1 = ($std_core.startsWith($common.imageData(mi), svgPrefix) || ($std_core.toLower($std_path.extname($common.imageName(mi))) === ".svg"));
  var _x0 = (_x1) ? "math-render-svg" : "math-render-png";
  var xattrs1 = $common.addClass(xattrs0, _x0);
  var xattrs = $common.addClass($common.addKeyvalIfNotExist(xattrs1, "height", ($std_core.showFixed(height, 4) + "em")), "math");
  var wattrs = $common.addKeyvalIfNotExist(xattrs, "width", ($std_core.showFixed(width, 4) + "em"));
  var _x0 = ((height <= 0.0) || (width <= 0.0));
  if (_x0) {
    return $inline.fmtCmd(context, "span", "", $common.addKeyval(wattrs, "html-alt", mtxt));
  }
  else {
    var _x1 = $std_core.startsWith($common.imageData(mi), svgPrefix);
    if (_x1) {
      var svg = (($common.imageData(mi)).substr((svgPrefix).length));
      return $htmlFormatter.fmtHtmlSvg(context, svg, wattrs, mtxt);
    }
    else {
      var _x2 = ($common.imageData(mi) !== "");
      var src = (_x2) ? $common.imageData(mi) : $common.imageName(mi);
      return $inline.fmtLink(context, true, $common._createLink(src, "", xattrs, undefined), mtxt);
    }
  }
}
function fmtMath(context, isDisplay, txt0, attrs0, lineInfo)  /* (context : inline/inlineContext, isDisplay : bool, txt0 : string, attrs : ?common/attrs, lineInfo : ?string) -> string */  {
  var attrs_9130 = (attrs0 !== undefined) ? attrs0 : $common.attrsNone;
  var lineInfo_9134 = (lineInfo !== undefined) ? lineInfo : "";
  if ($common.hasClass(attrs_9130, "snippet")) {
    var _x1 = (isDisplay) ? "Display" : "Inline";
    var _x0 = $std_core._tuple4_(_x1, "", "", "");
  }
  else {
    if (isDisplay) {
      var _x3 = $std_core.isEmpty($common.name(attrs_9130));
      if (_x3) {
        var _x2 = "";
      }
      else {
        var _x2 = ("\\label{" + ($common.name(attrs_9130) + "}"));
      }
      var _x0 = $std_core._tuple4_("Display", ("\\[" + _x2), "\n\\]", "%mdk\n");
    }
    else {
      var _x0 = $std_core._tuple4_("Inline", "$", "$", "");
    }
  }
  var lkind = $std_core.toLower(_x0.fst);
  var $class = ("math-" + lkind);
  var attrsd = applyDefaults(context, "span", $common.addClass(attrs_9130, $class));
  var _x4 = ($common.hasBoolKey(attrsd, "math-full") || ($common.hasBoolKey(attrsd, "snippet-needpdf") || $common.hasBoolKey(attrsd, "math-needpdf")));
  var mode = (_x4) ? $common.Full : $common.Plain;
  var txt = $common.trimLines(txt0);
  if ((_x0.fst === "Inline")) {
    var texcmd = $inline.fmtMathCmd(context, "span", (_x0.snd + (lineInfo_9134 + (txt + (_x0.thd + _x0.field4)))), attrsd);
  }
  else {
    var texcmd = $inline.fmtMathEnv(context, "div", (_x0.snd + (lineInfo_9134 + (txt + (_x0.thd + _x0.field4)))), attrsd);
  }
  var _x4 = $inline.fmt(context);
  if (_x4 === 2) {
    return texcmd;
  }
  else {
    var mtxt = (_x0.snd + (escapeMath(txt, $inline.fmt(context)) + _x0.thd));
    var mcmd = $inline.fmtCmd(context, "span", $inline.fmtText(context, mtxt), attrsd);
    var _x5 = ($inline.mathStatic(context) || $common.isFull(mode));
    if (_x5) {
      var digest = $std_crypto.md5(txt);
      $std_log.log(("math-" + $common.show_3(mode)), ("\\begin{md" + (_x0.fst + ("Snippet}[" + (digest + ("]%mdk\n" + (texcmd + ("\\end{md" + (_x0.fst + "Snippet}%mdk")))))))));
      var _x6 = $std_dict._lb__rb__2($inline.mathinfos(context), digest);
      if (_x6 == null) {
        return $inline.fmtCmd(context, "span", mcmd, $common.addKeyval($common.addClass($common.attrsNone, "math-rendering"), "html-title", "Rendering math..."));
      }
      else {
        return fmtMathImg(context, _x6.unJust, txt, mtxt, attrsd);
      }
    }
    else {
      return mcmd;
    }
  }
}
var rxCont = $std_regex.regex("(\\\\%)|(?:%.*)?\\n[ \\t]*", undefined, undefined);
function mathUnline(txt)  /* (txt : string) -> string */  {
  return $std_regex.replaceAll_1(txt, rxCont, "$1", undefined);
}
 
// Format a span element
function fmtSpan(context, txt0, attrs0)  /* (context : inline/inlineContext, txt0 : string, attrs : common/attrs) -> string */  {
  var _x0 = ($common.elem(attrs0) !== "");
  if (_x0) {
    var sname = $common.elem(attrs0);
  }
  else {
    var _x1 = $common.classes(attrs0);
    var sname = (_x1 != null) ? _x1.head : "span";
  }
  var attrsx = $attributes.matchRules($inline.defaults(context), sname, attrs0);
  var attrsd = formatAttrs(context, attrsx);
  var txt = $attributes.transformText(attrsd, txt0, $inline.labels(context), $inline.metadata(context));
  var _x0 = $common.input(attrsd);
  if (_x0._tag === 1) {
    return fmtCode(context, "", txt, attrsd);
  }
  if (_x0._tag === 3) {
    return fmtMath(context, false, mathUnline(txt), attrsd, undefined);
  }
  if (_x0._tag === 2) {
    return fmtMath(context, false, $inline.mathPre(mathUnline(txt)), attrsd, undefined);
  }
  if (_x0._tag === 6) {
    if ($inline.sanitize(context)) {
      return "";
    }
    else {
      if (_x0.only == null) {
        return $inline.fmtCmd(context, "span", txt, attrsd);
      }
      if (_x0.only != null) {
        if ($common._eq__eq_(_x0.only.unJust, $inline.fmt(context))){
          return $inline.fmtCmd(context, "span", txt, attrsd);
        }
      }
      return "";
    }
  }
  if (_x0._tag === 7 && _x0.only != null) {
    if (!($common._eq__eq_(_x0.only.unJust, $inline.fmt(context)))){
      return "";
    }
  }
  if (_x0._tag === 7) {
    if ($common.notag(attrsd)){
      return $inline.formatInline(context, txt, undefined);
    }
  }
  return $inline.fmtCmd(context, "span", $inline.formatInline(context, txt, undefined), attrsd);
}
function inlineCode(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  var txt0 = $std_regex._index_($std_regex.groups(cap), 2);
  var txt1 = ($std_core.startsWith(txt0, " `")) ? ((txt0).substr(1)) : txt0;
  if ($std_core.endsWith(txt0, "` ")) {
    var txt = $std_core.substr_1(txt1, 0, (((txt1).length - 1)|0));
  }
  else {
    var txt = txt1;
  }
  var _x0 = $std_regex.matchedOn($std_regex.groups(cap), 3);
  if (_x0) {
    var attrs0 = $attributes.parseAttrs($std_regex._index_($std_regex.groups(cap), 3), "code", undefined);
  }
  else {
    var attrs0 = $common.attrsNone;
  }
  if ($inline.bench(context)) {
    return fmtCode(context, "", txt, attrs0);
  }
  else {
    return fmtSpan(context, txt, $common.addClasses(attrs0, $std_core.Cons("code", $std_core.Cons(("code" + $std_core.show_1(($std_regex._index_($std_regex.groups(cap), 1)).length)), $std_core.Nil))));
  }
}
function inlineDashes(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  var _x1 = ($std_regex._index_($std_regex.groups(cap), 1) !== "");
  var _x0 = (_x1) ? "&mdash;" : "&ndash;";
  return $inline.formatInline(context, _x0, undefined);
}
function inlineDel(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  return $inline.fmtCmd(context, "del", $inline.formatInline(context, $std_regex._index_($std_regex.groups(cap), 1), undefined), $attributes.matchRules($inline.defaults(context), "del", $common.attrsNone));
}
function inlineDots(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  return $inline.formatInline(context, "&hellip;", undefined);
}
function inlineEmph(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  var _x0 = ($inline.starBold(context) && $std_core.startsWith($std_regex.matched(cap), "*"));
  var tag = (_x0) ? "strong" : "em";
  var _x1 = $std_core.startsWith($std_regex.matched(cap), "*");
  var _x0 = (_x1) ? "-star" : "-low";
  var $class = (tag + (_x0 + $std_core.show_1(($std_regex._index_($std_regex.groups(cap), 1)).length)));
  var attrs0 = $attributes.matchRules($inline.defaults(context), tag, $common.addClass($common.attrsNone, $class));
  return $inline.fmtCmd(context, tag, $inline.formatInline(context, $std_regex._index_($std_regex.groups(cap), 2), undefined), attrs0);
}
function inlineEntity(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  var key = $std_regex._index_($std_regex.groups(cap), 1);
  if ($std_core.startsWith(key, "#")) {
    return $inline.fmtText(context, $std_regex.matched(cap));
  }
  else {
    var txt = $attributes.expandKeyName(key, $inline.labels(context), $inline.metadata(context));
    var _x0 = (txt === $std_regex.matched(cap));
    return (_x0) ? $inline.fmtText(context, txt) : $inline.formatInline(context, txt, undefined);
  }
}
function inlineEscape(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  var txt = $std_regex._index_($std_regex.groups(cap), 1);
  if ((txt === " ")) {
    return $inline.formatInline(context, "&nbsp;", undefined);
  }
  else {
    if ((txt === "\n")) {
      return inlineBreak(cap, context);
    }
    else {
      if ((txt === "/")) {
        return "";
      }
      else {
        return ($inline.sanitize(context)) ? $inline.fmtEscape(context, txt) : $inline.fmtText(context, txt);
      }
    }
  }
}
function inlineFootnote(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  var id = $common.definitionId($std_regex._index_($std_regex.groups(cap), 1));
  var _x0 = $std_dict._lb__rb__2($inline.footnotes(context), id);
  if (_x0 != null) {
    return $inline.fmtFootnote(context, id, $inline._copy_1(_x0.unJust, $inline.formatInline(context, $inline.footnoteNum(_x0.unJust), undefined), undefined, $inline.formatInline(context, $inline.footnoteCaption(_x0.unJust), undefined)));
  }
  else {
    $common.warning(("missing footnote definition: " + $std_regex._index_($std_regex.groups(cap), 1)), undefined);
    return $inline.fmtText(context, ("[^" + ($inline.formatInline(context, $std_regex._index_($std_regex.groups(cap), 1), undefined) + "]")));
  }
}
function insert(x, xs, gt)  /* forall<a> (x : a, xs : list<a>, gt : (a, a) -> bool) -> list<a> */  {
  if (xs != null) {
    if (gt(x, xs.head)) {
      return $std_core.Cons(xs.head, insert(x, xs.tail, gt));
    }
    else {
      return $std_core.Cons(x, xs);
    }
  }
  else {
    return $std_core.Cons(x, $std_core.Nil);
  }
}
function isort(xs, gt)  /* forall<a> (xs : list<a>, gt : (a, a) -> bool) -> list<a> */  {
  if (xs != null) {
    return insert(xs.head, isort(xs.tail, gt), gt);
  }
  else {
    return $std_core.Nil;
  }
}
 
// Format a citation link
function fmtCite(context, nbsp, citations, attrs0)  /* (context : inline/inlineContext, nbsp : string, citations : list<cite>, attrs : common/attrs) -> string */  {
  var _x0 = $common.hasKey(attrs0, "cite-style");
  var cs0 = (_x0 != null) ? $common.parseCiteStyleDef(_x0.unJust, undefined) : $inline.citestyle(context);
  var _x0 = $common.mode(cs0);
  if (_x0 === 5) {
    match: {
      if (citations != null) {
        if ((authors(citations.head) !== "")){
          var cs1 = $common.citeNatural;
          break match;
        }
      }
      var cs1 = $common.citeNumeric;
    }
  }
  else {
    var cs1 = cs0;
  }
  if ($common.hasClass(attrs0, "free")) {
    var cs = $common._copy_3(cs1, undefined, "", "", undefined, undefined, undefined, undefined, undefined);
  }
  else {
    var cs = cs1;
  }
  var isTextual = ($common.hasClass(attrs0, "textual") || $common.isTextual($common.mode(cs)));
  function makeLink(cite0, text)  /* (cite : cite, text : string) -> string */  {
    return ("[" + (text + ("][#" + (name(cite0) + "]{.bibref}"))));
  }
  function makeParens(text0)  /* (text : string) -> string */  {
    return ($common.open(cs) + (text0 + $common.close(cs)));
  }
   
  // Takes a list of citations that share common authors
  function fmtAuthorYear(cites)  /* (cites : list<cite>) -> string */  {
    if (cites != null) {
      var _x0 = $std_core._tuple4_(modifier(cites.head), authors(cites.head), pre(cites.head), post(cites.head));
    }
    else {
      var _x0 = $std_core._tuple4_("", "?", "", "");
    }
    var links = $std_core.join_4($std_core.map_3(cites, function(cite2  /* cite */ ) {  return makeLink(cite2, year(cite2));}), $common.yysep(cs));
    var _x1 = (isTextual && !(((_x0.fst).indexOf("-") >= 0)));
    var plinks = (_x1) ? makeParens(links) : links;
    var sep = (isTextual) ? "&nbsp;" : $common.aysep(cs);
    if ((_x0.snd === "")) {
      $common.warning(("author-year citation but this bib style does not support this: " + $std_core.join_4($std_core.map_3(cites, function(cite3  /* cite */ ) {  return ("@" + name(cite3));}), ", ")), undefined);
    }
    else {
      $std_core._unit_;
    }
    if ((_x0.fst === "!")) {
      var mid = _x0.snd;
    }
    else {
      var _x1 = ((_x0.fst === "-") || (_x0.snd === ""));
      if (_x1) {
        var mid = plinks;
      }
      else {
        var mid = (_x0.snd + (sep + plinks));
      }
    }
    return (_x0.thd + (mid + _x0.field4));
  }
   
  // We pass an explicit "done" list so Koka can see this is terminating
  function groupAuthors(cites0, done)  /* (cites : list<cite>, done : list<string>) -> list<list<cite>> */  { tailcall: while(1)
  {
    if (cites0 == null) {
      return $std_core.Nil;
    }
    else {
      if ($std_core.any(done, function(s  /* string */ ) {  return (s === (modifier(cites0.head) + authors(cites0.head)));})) {
        {
          cites0 = cites0.tail;
          continue tailcall;
        }
      }
      else {
        var same = $std_core.filter(cites0.tail, function(citex  /* cite */ ) {  return ((authors(citex) === authors(cites0.head)) && (modifier(citex) === modifier(cites0.head)));});
        if ($std_core.isNil(same)) {
          return $std_core.Cons($std_core.Cons(cites0.head, $std_core.Nil), groupAuthors(cites0.tail, done));
        }
        else {
          return $std_core.Cons($std_core.Cons(cites0.head, same), groupAuthors(cites0.tail, $std_core.Cons((modifier(cites0.head) + authors(cites0.head)), done)));
        }
      }
    }
  }}
  function fmtAuthorYears(cites1)  /* (cites : list<cite>) -> list<string> */  {
    return $std_core.map_3(groupAuthors(cites1, $std_core.Nil), fmtAuthorYear);
  }
  function fmtNumeric(cite5)  /* (cite : cite) -> string */  {
    var _x0 = (modifier(cite5) === "!");
    if (_x0) {
      var mid0 = authors(cite5);
    }
    else {
      var mid0 = makeLink(cite5, number(cite5));
    }
    return (pre(cite5) + (mid0 + post(cite5)));
  }
  function fmtNumericSpan(cite10, cite20)  /* (cite1 : cite, cite2 : cite) -> string */  {
    var link1 = makeLink(cite10, number(cite10));
    var link2 = makeLink(cite20, number(cite20));
    return (pre(cite10) + (link1 + ("\\/--\\/" + (link2 + post(cite10)))));
  }
   
  // compress numeric citations
  function takeSeq1(cite6, final, cites2)  /* (cite : cite, final : cite, cites : list<cite>) -> maybe<cite> */  { tailcall: while(1)
  {
    if (cites2 != null) {
      if (ordinal(cites2.head) === ((ordinal(final) + 1)|0)){
        {
          final = cites2.head;
          cites2 = cites2.tail;
          continue tailcall;
        }
      }
    }
    var _x0 = ((ordinal(final) - ordinal(cite6))|0) <= 1;
    return (_x0) ? $std_core.Nothing : $std_core.Just(final);
  }}
  function takeSeq(cite7, cites3)  /* (cite : cite, cites : list<cite>) -> maybe<cite> */  {
    var _x0 = (modifier(cite7) === "!");
    if (_x0) {
      return $std_core.Nothing;
    }
    else {
      $std_core._unit_;
    }
    var _x0 = ordinal(cite7) <= 0;
    if (_x0) {
      return $std_core.Nothing;
    }
    else {
      $std_core._unit_;
    }
    if (cites3 != null) {
      var _x0 = ordinal(cites3.head) === ((ordinal(cite7) + 1)|0);
      return (_x0) ? takeSeq1(cite7, cites3.head, cites3.tail) : $std_core.Nothing;
    }
    else {
      return $std_core.Nothing;
    }
  }
  function fmtCompressed(cites4, done0)  /* (cites : list<cite>, done : ?int) -> list<string> */  { tailcall: while(1)
  {
    var done_15494 = (done0 !== undefined) ? done0 : $std_core._tilde_(1);
    if (cites4 != null) {
      var _x0 = done_15494 >= ordinal(cites4.head);
      if (_x0) {
        {
          var _x1 = done_15494;
          cites4 = cites4.tail;
          done0 = _x1;
          continue tailcall;
        }
      }
      else {
        var _x2 = takeSeq(cites4.head, cites4.tail);
        if (_x2 != null) {
          return $std_core.Cons(fmtNumericSpan(cites4.head, _x2.unJust), fmtCompressed(cites4.tail, ordinal(_x2.unJust)));
        }
        else {
          return $std_core.Cons(fmtNumeric(cites4.head), fmtCompressed(cites4.tail, undefined));
        }
      }
    }
    else {
      return $std_core.Nil;
    }
  }}
  function fmtNumerics(cites5)  /* (cites : list<cite>) -> list<string> */  {
    return ($common.compress(cs)) ? fmtCompressed(cites5, undefined) : $std_core.map_3(cites5, fmtNumeric);
  }
  function fmtTextualNumerics(cites6)  /* (cites : list<cite>) -> list<string> */  {
    return $std_core.map_3(cites6, function(cite9  /* cite */ ) {  return fmtAuthorYear($std_core.Cons(_copy(cite9, undefined, undefined, undefined, undefined, undefined, number(cite9), undefined, undefined), $std_core.Nil));});
  }
  function fmtCitations(cites7)  /* (cites : list<cite>) -> list<string> */  {
    function gtCite(cite11, cite21)  /* (cite1 : cite, cite2 : cite) -> bool */  {
      return ordinal(cite11) > ordinal(cite21);
    }
    var scites = ($common.sort(cs)) ? isort(cites7, gtCite) : cites7;
    var _x0 = $common.mode(cs);
    if (_x0 === 2) {
      return fmtAuthorYears(scites);
    }
    if (_x0 === 3) {
      return fmtAuthorYears(scites);
    }
    if (isTextual){
      return fmtTextualNumerics(scites);
    }
    return fmtNumerics(scites);
  }
  var citeText = $std_core.join_4(fmtCitations(citations), ($common.citesep(cs) + "\\/"));
  var pciteText = (isTextual) ? citeText : makeParens(citeText);
  var _x0 = $common.mode(cs);
  if (_x0 === 4) {
    var sciteText = ("\\/^" + (pciteText + "^\\/"));
  }
  else {
    var sciteText = pciteText;
  }
  var _x1 = $common.isSuper($common.mode(cs));
  var _x0 = (_x1) ? "" : nbsp;
  return (_x0 + $inline.fmtCmd(context, "span", $inline.formatInline(context, sciteText, undefined), $common.addClass(attrs0, "citations")));
}
var rxCanBeRef = $std_regex.regex("^#?[A-Za-z_][\\w-]*$", undefined, undefined);
function inlineLinkRef(isImage, spaces, nbsp, txt, after, ref, attrs0, context)  /* (isImage : bool, spaces : string, nbsp : string, txt : string, after : string, ref : string, attrs : common/attrs, context : inline/inlineContext) -> string */  {
  var id = ((ref !== "")) ? $common.definitionId(ref) : $common.definitionId(txt);
  var elemName = (isImage) ? "img" : "a";
  var _x0 = $std_dict._lb__rb__2($inline.links(context), id);
  if (_x0 != null) {
    var attrsd = $attributes.matchRules($inline.defaults(context), elemName, attrs0);
    if ($common.empty(attrsd)) {
      var xlink = _x0.unJust;
    }
    else {
      var xlink = $common._copy_7(_x0.unJust, undefined, undefined, $attributes.mergeDefault(attrsd, $common.linkattrs(_x0.unJust)), undefined);
    }
    return (nbsp + $inline.fmtLink(context, isImage, xlink, $inline.formatInline(context, txt, undefined)));
  }
  else {
    var labelId = ($std_core.startsWith(id, "#")) ? ((id).substr(1)) : "";
    var _x1 = $std_dict._lb__rb__2($inline.labels(context), labelId);
    if (_x1 != null) {
      var attrsd0 = $attributes.matchRules($inline.defaults(context), elemName, attrs0);
      var lattrs = $common.addKeyval(attrsd0, "target-element", $common.element(_x1.unJust));
      var llink = $common.newLink(id, $inline.formatInline(context, $common.labelCaption(_x1.unJust), undefined), lattrs, undefined, $inline.bench(context));
      if ((ref === "")) {
        var _x2 = ("&" + (labelId + ";"));
      }
      else {
        var _x2 = txt;
      }
      return (nbsp + $inline.fmtLink(context, isImage, llink, $inline.formatInline(context, _x2, undefined)));
    }
    else {
      if ((ref !== "")) {
        $common.warning(("missing link definition: " + ref), undefined);
        return (spaces + ($inline.formatInline(context, txt, undefined) + "[??]"));
      }
      else {
        var _x3 = !($common.empty(attrs0));
        if (_x3) {
          return (spaces + fmtSpan(context, txt, attrs0));
        }
        else {
          if ($std_regex.contains(txt, rxCanBeRef, undefined)) {
            if ($std_core.startsWith(txt, "#")) {
              $common.warning(("reference to missing id: " + txt), undefined);
            }
            else {
              var _x4 = $std_core.isJust($std_dict._lb__rb__2($inline.labels(context), id));
              if (_x4) {
                $common.warning(("possibly forgot \'#\' to reference id: " + txt), undefined);
              }
              else {
                $common.warning(("possibly missing link definition or id: " + txt), undefined);
              }
            }
          }
          else {
            $std_core._unit_;
          }
          return (spaces + ("[" + ($inline.formatInline(context, txt, undefined) + ("]" + $inline.formatInline(context, after, undefined)))));
        }
      }
    }
  }
}
var rxCommaAt = $std_regex.regex(",\\s*[+!-]?@([\\w-:]+)", undefined, undefined);
var rxDigits = $std_regex.regex("\\d+", undefined, undefined);
function newCite(context, name0, pre0, post0, modifier0, citeLabel, attrs0)  /* (context : inline/inlineContext, name : string, pre : string, post : string, modifier : string, citeLabel : string, attrs : common/attrs) -> cite */  {
  var _x0 = $std_dict._lb__rb__2($inline.labels(context), name0);
  var numlab = (_x0 == null) ? "?" : $common.labelText(_x0.unJust);
  var _x0 = $std_regex.find(numlab, rxDigits, undefined);
  if (_x0 != null) {
    var ordinal0 = $std_core.maybe($std_core.parseInt($std_regex.matched(_x0.unJust), undefined), 0, $std_core.id);
  }
  else {
    var ordinal0 = 0;
  }
  var _x0 = ((modifier0 === "+") && $std_core.bool_1($common.hasKey(attrs0, "cite-authors-long")));
  var authors0 = (_x0) ? $common.lookupKey(attrs0, "cite-authors-long", "") : $common.lookupKey(attrs0, "cite-authors", "");
  var year0 = $common.lookupKey(attrs0, "cite-year", "");
  var number0 = ((citeLabel === "")) ? numlab : citeLabel;
  var _x0 = $std_regex.find(post0, rxCommaAt, undefined);
  if (_x0 == null) {
    $std_core._unit_;
  }
  else {
    $common.warning(("citations need to be semi-colon separated: " + $std_regex.matched(_x0.unJust)), undefined);
  }
  function wrap(s, wattrs)  /* (s : string, wattrs : string) -> string */  {
    if ($std_core.isEmpty(s)) {
      return "";
    }
    else {
      return ("[" + (s + ("]{" + (wattrs + "}"))));
    }
  }
  var _x0 = ((year0 === "")) ? number0 : year0;
  return Cite(name0, pre0, post0, modifier0, wrap(number0, ".cite-number"), wrap(_x0, ".cite-year"), wrap(authors0, ".cite-authors"), ordinal0);
}
var rxCitename = "(\\w(?:[\\w]|[:\\-\\.]\\w)*)";
var rxCitation = $std_regex.regex(("^((?:[^\\w\\\\@+!-]|[+!-](?!@)|\\\\.|\\w(?![+!-]?@))*)(?:([+!-]?)@" + (rxCitename + ")([\\s\\S]*)$")), undefined, undefined);
var rxCiteSep = $std_regex.regex("\\s*[;]\\s*", undefined, undefined);
var rxCiteSepExclude = $std_regex.regex("[^\\\\;\\s]|\\\\.", undefined, undefined);
function inlineLinkNoRef(isImage, spaces, nbsp, txt, after, attrs0, context)  /* (isImage : bool, spaces : string, nbsp : string, txt : string, after : string, attrs : common/attrs, context : inline/inlineContext) -> string */  {
  var _x0 = ($inline.bench(context) || !(((txt).indexOf("@") >= 0)));
  if (_x0) {
    var citationss = $std_core.Nil;
  }
  else {
    var citationss = $std_core.map_3($std_regex.splitExclude(txt, rxCiteSep, rxCiteSepExclude), function(elem  /* string */ ) {  var _x1 = $std_regex.find(elem, rxCitation, undefined); if (_x1 == null) {  return $std_core.Nil;} else {  $std_log.log("aux", ("\\citation{" + ($std_regex._index_($std_regex.groups(_x1.unJust), 3) + "}"))); var lab = $common.definitionId(("@" + $std_regex._index_($std_regex.groups(_x1.unJust), 3))); var _x2 = $std_dict._lb__rb__2($inline.labels(context), lab); if (_x2 != null) {  return $std_core.Cons(newCite(context, ((lab).substr(1)), $std_regex._index_($std_regex.groups(_x1.unJust), 1), $std_regex._index_($std_regex.groups(_x1.unJust), 4), $std_regex._index_($std_regex.groups(_x1.unJust), 2), $common.labelText(_x2.unJust), $common.labelAttrs(_x2.unJust)), $std_core.Nil);} else {  $common.warning(("missing citation: @" + $std_regex._index_($std_regex.groups(_x1.unJust), 3)), undefined); return $std_core.Nil;}}});
  }
  var _x0 = ($std_core.isCons(citationss) && $std_core.all(citationss, $std_core.isCons));
  if (_x0) {
    var attrsc = $common.addKeyval(attrs0, "target-element", "bibitem");
    var attrsd = $attributes.matchRules($inline.defaults(context), "citations", attrsc);
    return fmtCite(context, nbsp, $std_core.concat(citationss), attrsd);
  }
  else {
    return inlineLinkRef(isImage, spaces, nbsp, txt, after, "", attrs0, context);
  }
}
function inlineLinkEx(isImage, cap, context)  /* (isImage : bool, cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  var _x0 = $std_regex.matchedOn($std_regex.groups(cap), 7);
  if (_x0) {
    var attrs0 = formatAttrs(context, $attributes.parseAttrs($std_regex._index_($std_regex.groups(cap), 7), undefined, undefined));
  }
  else {
    var attrs0 = $common.attrsNone;
  }
  var _x0 = (($std_regex._index_($std_regex.groups(cap), 1) !== "") && $std_core.all($std_core.list_5($std_regex._index_($std_regex.groups(cap), 1)), function(c  /* char */ ) {  return (c === ' ');}));
  if (_x0) {
    var nbsp = $inline.fmtText(context, "&nbsp;");
  }
  else {
    var nbsp = $std_regex._index_($std_regex.groups(cap), 1);
  }
  var _x0 = $std_regex.matchedOn($std_regex.groups(cap), 4);
  if (_x0) {
    var _x1 = (isImage) ? "img" : "a";
    var attrsd = $attributes.matchRules($inline.defaults(context), _x1, attrs0);
    return (nbsp + $inline.fmtLink(context, isImage, $common.newLink($std_regex._index_($std_regex.groups(cap), 4), $std_regex._index_($std_regex.groups(cap), 5), attrsd, undefined, $inline.bench(context)), $inline.formatInline(context, $std_regex._index_($std_regex.groups(cap), 2), undefined)));
  }
  else {
    var _x1 = ($inline.bench(context) || $std_regex.matchedOn($std_regex.groups(cap), 6));
    if (_x1) {
      return inlineLinkRef(isImage, $std_regex._index_($std_regex.groups(cap), 1), nbsp, $std_regex._index_($std_regex.groups(cap), 2), $std_regex._index_($std_regex.groups(cap), 3), $std_regex._index_($std_regex.groups(cap), 6), attrs0, context);
    }
    else {
      return inlineLinkNoRef(isImage, $std_regex._index_($std_regex.groups(cap), 1), nbsp, $std_regex._index_($std_regex.groups(cap), 2), $std_regex._index_($std_regex.groups(cap), 3), attrs0, context);
    }
  }
}
function inlineImg(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  return inlineLinkEx(true, cap, context);
}
function inlineLink(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  return inlineLinkEx(false, cap, context);
}
function inlineMath(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  var attrs0 = $attributes.parseAttrs($std_regex._index_($std_regex.groups(cap), 2), "math-inline", undefined);
  return fmtSpan(context, $std_regex._index_($std_regex.groups(cap), 1), attrs0);
}
function inlineMathBlock(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  var attrsd = $attributes.matchRules($inline.defaults(context), "math-display", $common.attrsNone);
  return fmtMath(context, true, $std_regex._index_($std_regex.groups(cap), 1), attrsd, undefined);
}
function inlineNormal(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  return $inline.fmtText(context, $std_regex.matched(cap));
}
function inlineOther(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  return $inline.fmtEscape(context, $std_regex.matched(cap));
}
function inlineQuotes(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  var quote = $std_core.substr_1($std_regex.matched(cap), 0, 1);
  if ((quote === "\'")) {
    return $inline.formatInline(context, ("&lsquo;" + ($std_regex._index_($std_regex.groups(cap), 1) + "&rsquo;")), undefined);
  }
  else {
    if ((quote === "<")) {
      return $inline.formatInline(context, ("&laquo;" + ($std_regex._index_($std_regex.groups(cap), 1) + "&raquo;")), undefined);
    }
    else {
      return $inline.formatInline(context, ("&ldquo;" + ($std_regex._index_($std_regex.groups(cap), 2) + "&rdquo;")), undefined);
    }
  }
}
function inlineStrong(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  var _x0 = ($inline.starBold(context) && $std_core.startsWith($std_regex.matched(cap), "_"));
  var tag = (_x0) ? "em" : "strong";
  var _x1 = $std_core.startsWith($std_regex.matched(cap), "*");
  var _x0 = (_x1) ? "-star" : "-low";
  var $class = (tag + (_x0 + $std_core.show_1(($std_regex._index_($std_regex.groups(cap), 1)).length)));
  var attrs0 = $attributes.matchRules($inline.defaults(context), tag, $common.addClass($common.attrsNone, $class));
  return $inline.fmtCmd(context, tag, $inline.formatInline(context, $std_regex._index_($std_regex.groups(cap), 2), undefined), attrs0);
}
function inlineSub(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  return $inline.fmtCmd(context, "sub", $inline.formatInline(context, $std_regex._index_($std_regex.groups(cap), 1), undefined), $attributes.matchRules($inline.defaults(context), "sub", $common.attrsNone));
}
function inlineSup(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  return $inline.fmtCmd(context, "sup", $inline.formatInline(context, $std_regex._index_($std_regex.groups(cap), 1), undefined), $attributes.matchRules($inline.defaults(context), "sup", $common.attrsNone));
}
function inlineTagX(tag, context)  /* (tag : string, context : inline/inlineContext) -> string */  {
  var _x0 = ($inline.sanitize(context) || !($common.isFmtHtml($inline.fmt(context))));
  return (_x0) ? "" : tag;
}
function inlineTag(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  return inlineTagX($std_regex.matched(cap), context);
}
function inlineQuot(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  var _x1 = ($std_regex.matched(cap) === "\"");
  var _x0 = (_x1) ? "&quot;" : "&apos;";
  return $inline.formatInline(context, _x0, undefined);
}
var normalbench = "(?:[^\"\'`*_\\\\~&<>\\^#\\$\\[!]| (?! \\n))";
function stripFancyRules(g)  /* (g : common/grammar<string,inline/inlineContext>) -> common/grammar<string,inline/inlineContext> */  {
  return $common.ruleRemove($common.ruleReplace($common.ruleReplace(g, true, $common.Rule("itext", $std_regex.regex(("^" + (normalbench + "+")), undefined, undefined), inlineNormal)), true, $common.Rule("iquotes", $std_regex.regex("^[\"\']", undefined, undefined), inlineQuot)), true, $std_core.Cons("idashes", $std_core.Cons("ielipsis", $std_core.Cons("tex", $std_core.Cons("iguil", $std_core.Cons("textcite", $std_core.Nil))))));
}
function inlineTagCode(cap, context)  /* (cap : std/regex/matched, context : inline/inlineContext) -> string */  {
  var icontext = $inline.copy(context, stripFancyRules($inline.grammar(context)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  return (inlineTagX($std_regex._index_($std_regex.groups(cap), 1), context) + ($inline.formatInline(icontext, $std_regex._index_($std_regex.groups(cap), 2), undefined) + inlineTagX($std_regex._index_($std_regex.groups(cap), 3), context)));
}
var linkhref = "\\s*<?([^\\s>)]*)>?(?:\\s+[\'\"](.*?)[\'\"])?\\s*";
var linktxt = "\\[(?!\\^)((?:\\[(?:[^\\[\\]]|\\[(?:[^\\[\\]]|\\[[^\\]]*\\])*\\])*\\]|\\\\.|[^\\\\\\]]|\\](?=[^\\[{]*\\]))*)\\]";
var xlinkid = "((?:[^\\[\\]\\n]|\\[[^\\]\\n]*\\])*)";
var linkreg = (linktxt + ("((?:\\(" + (linkhref + ("\\)|\\s*\\[" + (xlinkid + ("\\])?(?:" + (attrs + ")?)")))))));
var normal = "(?:[^`*_\\\\~&<>\\^#\\$\"\'\\[!\\-\\. \\+@]| (?! \\n| *[\\[\\-\\+!@])|-(?![@\\-])|\\+(?!@)|\\.(?!\\.\\.)|!(?![@\\[]))";
function inlineCoreGrammar(fmt)  /* (fmt : common/formatter) -> common/grammar<string,inline/inlineContext> */  {
  return $std_core.conslist([$common.Rule("itext", $std_regex.regex(("^" + (normal + "+")), undefined, undefined), inlineNormal), $common.Rule("iquotes", $std_regex.regex("^(?:\'(?!\\s|s\\b|re\\b)((?:[^\\\\\'`\\$\\[<]|\\\\.|\'[a-zA-Z])*)\'(?![a-zA-Z])|\"((?:[^\\\\\"`\\$\\[<]|\\\\.)*)\")", undefined, undefined), inlineQuotes), $common.Rule("icode", $std_regex.regex(("^(`+)((?:[^`]|(?!\\1)`)*)\\1(?:" + (attrs + ")?")), undefined, undefined), inlineCode), $common.Rule("ilink", $std_regex.regex(("^([\\n ]*)" + linkreg), undefined, undefined), inlineLink), $common.Rule("iemph*", $std_regex.regex("^(\\*)((?:[^\\\\*]|\\\\.)+)\\*", undefined, undefined), inlineEmph), $common.Rule("iimg", $std_regex.regex(("^()!" + linkreg), undefined, undefined), inlineImg), $common.Rule("ifootnote", $std_regex.regex(("^\\[\\^" + (xlinkid + "\\]")), undefined, undefined), inlineFootnote), $common.Rule("iguil", $std_regex.regex("^<<((?:[^\\\\>]|>(?!>)|\\\\.)*)>>", undefined, undefined), inlineQuotes), $common.Rule("iautolink", $std_regex.regex(("^<([^/\\s>][^\\s>]*?(@|:/)[^\\s>]+?)>(?:" + (attrs + ")?")), undefined, undefined), inlineAutoLink), $common.Rule("istrong_", $std_regex.regex("^(__)((?:[^\\\\]|\\\\.)+?)__(?!_)", undefined, undefined), inlineStrong), $common.Rule("istrong*", $std_regex.regex("^(\\*\\*)((?:[^\\\\]|\\\\.)+?)\\*\\*(?!\\*)", undefined, undefined), inlineStrong), $common.Rule("iemph_", $std_regex.regex("^\\b(_)((?:[^\\\\_]|\\\\.)+)_\\b", undefined, undefined), inlineEmph), $common.Rule("idel", $std_regex.regex("^~~(?=\\S)([\\s\\S]*?\\S)~~", undefined, undefined), inlineDel), $common.Rule("isub", $std_regex.regex("^~((?:[^~\\\\\\n\\r]|\\\\.)+)~", undefined, undefined), inlineSub), $common.Rule("isup", $std_regex.regex("^\\^((?:[^\\^\\\\\\n\\r]|\\\\.)+)\\^", undefined, undefined), inlineSup), $common.Rule("itagcode", $std_regex.regex("^(<code\\b(?:\"[^\"]*\"|\'[^\']*\'|[^\'\">])*?>)([\\s\\S]*?)(</code>)", undefined, undefined), inlineTagCode), $common.Rule("itag", $std_regex.regex("^<(?:!--[\\s\\S]*?-->|/?\\w+\\b(?:\"[^\"]*\"|\'[^\']*\'|[^\'\">])*?>)", undefined, undefined), inlineTag), $common.Rule("ientity", $std_regex.regex("^&(#?[\\w\\-:]*);", undefined, undefined), inlineEntity), $common.Rule("idashes", $std_regex.regex("^--(-)?", undefined, undefined), inlineDashes), $common.Rule("ielipsis", $std_regex.regex("^\\.\\.\\.", undefined, undefined), inlineDots), $common.Rule("texinline", $std_regex.regex(("^\\$(?!\\$)((?:[^\\\\\\$]|\\\\[\\s\\S])+)\\$(?:" + (attrs + ")?")), undefined, undefined), inlineMath), $common.Rule("texblock1", $std_regex.regex("^\\$\\$( *\\n(?:[^\\\\\\$]|\\\\[\\s\\S]|\\$[^\\$])*)\\$\\$", undefined, undefined), inlineMathBlock), $common.Rule("texblock2", $std_regex.regex("^\\\\\\[( *\\n(?:[^\\\\]|\\\\[^\\]])*)\\\\\\]", undefined, undefined), inlineMathBlock), $common.Rule("textcite", $std_regex.regex(("^([\\n ]*)(([\\-+!]?)@" + (rxCitename + ")")), undefined, undefined), inlineCite), $common.Rule("ibr", $std_regex.regex("^  \\n(?!\\s*$)", undefined, undefined), inlineBreak), $common.Rule("iescape", $std_regex.regex("^\\\\([^a-zA-Z0-9])", undefined, undefined), inlineEscape), $common.Rule("other", $std_regex.regex("^[\\s\\S]", undefined, undefined), inlineOther)], $std_core.Nil);
}
var benchGrammar = stripFancyRules(inlineCoreGrammar($common.FmtHtml));
function escapeTexPre(txt)  /* (txt : string) -> string */  {
  return $std_regex.replaceAll_1($std_regex.replaceAll_1(txt, $std_regex.regex("\\$", undefined, undefined), "$\\text{\\tt\\textdollar}$", undefined), $std_regex.regex("\\|", undefined, undefined), "$\\text{\\tt\\textbar}$", undefined);
}
function inlineGrammar(fmt, bench)  /* (fmt : common/formatter, bench : ?bool) -> common/grammar<string,inline/inlineContext> */  {
  var bench_25079 = (bench !== undefined) ? bench : false;
  return (bench_25079) ? benchGrammar : inlineCoreGrammar(fmt);
}
var rxEtAl = $std_regex.regex("\\bet(?: |&nbsp;|\\\\ )al.(?!_)", undefined, undefined);
var rxLink = $std_regex.regex(linkreg, undefined, undefined);
 
// koka exports:
return { 'name': name, 'pre': pre, 'post': post, 'modifier': modifier, 'number': number, 'year': year, 'authors': authors, 'ordinal': ordinal, '_copy': _copy, 'applyDefaults': applyDefaults, 'attrs': attrs, 'formatAttrs': formatAttrs, 'rxPostHyphen': rxPostHyphen, 'hypenateUrl': hypenateUrl, 'inlineAutoLink': inlineAutoLink, 'inlineBreak': inlineBreak, 'inlineCite': inlineCite, 'formatDefaults': formatDefaults, 'rxClass': rxClass, 'rxCodeEscaped': rxCodeEscaped, 'fmtCodeEscaped': fmtCodeEscaped, 'rxEscaped': rxEscaped, 'fmtCodeUnescape': fmtCodeUnescape, 'rxEntity': rxEntity, 'htmlUnescape': htmlUnescape, 'rxEndSpaces': rxEndSpaces, 'rxToken': rxToken, 'rxTokens': rxTokens, 'fmtCode': fmtCode, 'escapeMath': escapeMath, 'svgPrefix': svgPrefix, 'fmtMathImg': fmtMathImg, 'fmtMath': fmtMath, 'rxCont': rxCont, 'mathUnline': mathUnline, 'fmtSpan': fmtSpan, 'inlineCode': inlineCode, 'inlineDashes': inlineDashes, 'inlineDel': inlineDel, 'inlineDots': inlineDots, 'inlineEmph': inlineEmph, 'inlineEntity': inlineEntity, 'inlineEscape': inlineEscape, 'inlineFootnote': inlineFootnote, 'insert': insert, 'isort': isort, 'fmtCite': fmtCite, 'rxCanBeRef': rxCanBeRef, 'inlineLinkRef': inlineLinkRef, 'rxCommaAt': rxCommaAt, 'rxDigits': rxDigits, 'newCite': newCite, 'rxCitename': rxCitename, 'rxCitation': rxCitation, 'rxCiteSep': rxCiteSep, 'rxCiteSepExclude': rxCiteSepExclude, 'inlineLinkNoRef': inlineLinkNoRef, 'inlineLinkEx': inlineLinkEx, 'inlineImg': inlineImg, 'inlineLink': inlineLink, 'inlineMath': inlineMath, 'inlineMathBlock': inlineMathBlock, 'inlineNormal': inlineNormal, 'inlineOther': inlineOther, 'inlineQuotes': inlineQuotes, 'inlineStrong': inlineStrong, 'inlineSub': inlineSub, 'inlineSup': inlineSup, 'inlineTagX': inlineTagX, 'inlineTag': inlineTag, 'inlineQuot': inlineQuot, 'normalbench': normalbench, 'stripFancyRules': stripFancyRules, 'inlineTagCode': inlineTagCode, 'linkhref': linkhref, 'linktxt': linktxt, 'xlinkid': xlinkid, 'linkreg': linkreg, 'normal': normal, 'inlineCoreGrammar': inlineCoreGrammar, 'benchGrammar': benchGrammar, 'escapeTexPre': escapeTexPre, 'inlineGrammar': inlineGrammar, 'rxEtAl': rxEtAl, 'rxLink': rxLink };
});