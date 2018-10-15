// koka generated module: "texParserItems"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_dict', './std_string', './std_regex', './std_crypto', './std_path', './common', './entity', './texCommon', './texParserBase'], function($std_core, $std_dict, $std_string, $std_regex, $std_crypto, $std_path, $common, $entity, $texCommon, $texParserBase) {
"use strict";
 
// koka declarations:
var rxCentering = $std_regex.regex("\\\\centering\\b\\s*", undefined, undefined);
var rxFrameTitle = $std_regex.regex(("\\\\frametitle\\b\\s*" + $texParserBase.texargg), undefined, undefined);
var rxLabel = $std_regex.regex(("\\\\label\\b" + $texCommon.texarg), undefined, undefined);
var rxNonIdChar = $std_regex.regex("[^\\w\\-]+", undefined, undefined);
function toIdentifier(s)  /* (s : string) -> string */  {
  return $std_regex.replaceAll_1($texParserBase.unbrace(s), rxNonIdChar, "-", undefined);
}
function beamerExtract(content, context)  /* forall<a> (content : string, context : a) -> (string, string, list<string>, string, string) */  {
  var label = { value: "" };
  var title = { value: "" };
  var pre = { value: "" };
  var post = { value: "" };
  var content1 = $std_regex.replace($std_regex.replace($std_regex.replace(content, rxFrameTitle, function(tcap  /* std/regex/matched */ ) {  ((title).value = $std_regex._index_($std_regex.groups(tcap), 1)); return "";}, undefined), rxLabel, function(lcap  /* std/regex/matched */ ) {  ((label).value = ("#" + toIdentifier($std_regex._index_($std_regex.groups(lcap), 1)))); return "";}, undefined), rxCentering, function(ccap  /* std/regex/matched */ ) {  ((pre).value = (((pre).value) + "~ Begin Center\n")); ((post).value = ("\n~ End Center" + ((post).value))); return "";}, undefined);
  return $std_core._lp__comma__comma__comma__comma__rp_(content1, ((title).value), $std_core.Cons(((label).value), $std_core.Nil), ((pre).value), ((post).value));
}
var rxKeyVal = $std_regex.regex("\\b(\\w+)=(\\{[^\\}]*\\}|[^;,\\s\\}]*)", undefined, undefined);
function beamerOptions(opts)  /* (opts : string) -> (string, list<string>) */  {
  var title = { value: "" };
  var attrs = $std_core.map_3($std_core.list_4($std_regex.findAll(opts, rxKeyVal, undefined)), function(cap  /* std/regex/matched */ ) {  var key = $std_regex._index_($std_regex.groups(cap), 1); var value = $std_regex._index_($std_regex.groups(cap), 2); if ((key === "label")) {  return ("#" + toIdentifier(value));} else {  if ((key === "title")) {  ((title).value = value); return "";} else {  var _x0 = ((key === "squeeze") || ((key === "shrink") || (key === "plain"))); return (_x0) ? ".smaller" : "";}}});
  return $std_core._tuple2_(((title).value), attrs);
}
function parseColor(c)  /* (c : string) -> string */  {
  var n = $std_core.parseIntDefault(c, 0, undefined);
  var _x0 = (n < 0 || n > 255);
  if (_x0) {
    return "00";
  }
  else {
    return $std_core.showHex(n, 2, undefined);
  }
}
function parseColors(r, g, b)  /* (r : string, g : string, b : string) -> string */  {
  return ("#" + (parseColor(r) + (parseColor(g) + parseColor(b))));
}
function parseFloatColor(c)  /* (c : string) -> string */  {
  var n = $std_core.parseFixedDefault(c, undefined);
  var _x0 = ((n < 0.0) || (n > 1.0));
  return (_x0) ? "00" : $std_core.$catch(function() {  return $std_core.showHex($std_core.int_3(Math.floor((n * 255.0)), undefined), 2, undefined);}, function(__exn  /* exception */ ) {  return "00";});
}
function parseFloatColors(r, g, b)  /* (r : string, g : string, b : string) -> string */  {
  return ("#" + (parseFloatColor(r) + (parseFloatColor(g) + parseFloatColor(b))));
}
function extractColorX(model, value)  /* (model : string, value : string) -> string */  {
  if ((model === "")) {
    return toIdentifier(value);
  }
  else {
    $std_core._unit_;
  }
  var _x1 = $std_core.list_4($std_core.split_1(value, ","));
  if (_x1 != null && _x1.tail == null) {
    var _x0 = $std_core._tuple3_(_x1.head, _x1.head, _x1.head);
  }
  else if (_x1 != null && _x1.tail != null && _x1.tail.tail != null && _x1.tail.tail.tail == null) {
    var _x0 = $std_core._tuple3_(_x1.head, _x1.tail.head, _x1.tail.tail.head);
  }
  else {
    var _x0 = $std_core._tuple3_("", "", "");
  }
  if ((model === "gray")) {
    return parseFloatColors(_x0.fst, _x0.fst, _x0.fst);
  }
  else {
    if ((model === "rgb")) {
      return parseFloatColors(_x0.fst, _x0.snd, _x0.thd);
    }
    else {
      if ((model === "RGB")) {
        return parseColors(_x0.fst, _x0.snd, _x0.thd);
      }
      else {
        if ((model === "HTML")) {
          return ("#" + (_x0.fst + (_x0.snd + _x0.thd)));
        }
        else {
          return "black";
        }
      }
    }
  }
}
function extractColor(model, value)  /* (model : string, value : string) -> list<string> */  {
  return $std_core.Cons($texParserBase.makeAttr("color", extractColorX(model, value)), $std_core.Nil);
}
var rxCaption = $std_regex.regex(("\\\\caption\\b" + $texCommon.texarg), undefined, undefined);
function extractLabelCaption(content, context, defCaption, defLabel)  /* (content : string, context : texParserBase/texContext, defCaption : ?string, defLabel : ?string) -> (string, list<string>, string, string) */  {
  var defCaption_4100 = (defCaption !== undefined) ? defCaption : "";
  var defLabel_4104 = (defLabel !== undefined) ? defLabel : "";
  var label = { value: defLabel_4104 };
  var caption = { value: defCaption_4100 };
  var pre = { value: "" };
  var post = { value: "" };
  var content1 = $std_regex.replace($std_regex.replace($std_regex.replace(content, rxCaption, function(ccap  /* std/regex/matched */ ) {  ((caption).value = $texParserBase.parse($std_regex._index_($std_regex.groups(ccap), 1), context)); return "";}, undefined), rxLabel, function(lcap  /* std/regex/matched */ ) {  ((label).value = ("#" + toIdentifier($std_regex._index_($std_regex.groups(lcap), 1)))); return "";}, undefined), rxCentering, function(ccap0  /* std/regex/matched */ ) {  ((pre).value = (((pre).value) + "~ Begin Center\n")); ((post).value = ("\n~ End Center" + ((post).value))); return "";}, undefined);
  return $std_core._tuple4_(content1, $std_core.Cons(((label).value), $std_core.Cons($texParserBase.makeAttr("caption", ((caption).value)), $std_core.Nil)), ((pre).value), ((post).value));
}
var rxAuthorTitle = $std_regex.regex("^\\s*(.*?(?:\\n?\\[\\]\\{\\.newblock\\}\\s*))(.*?)(?:\\n?\\[\\]\\{\\.newblock\\})", undefined, undefined);
var rxAuthorYear = $std_regex.regex("((?:[^&\\\\\\()]|\\\\.|\\\\mbox\\{\\.\\}|&#?\\w+;|[\\\\&])*)(?:[,;](?: |&nbsp;|\\\\ )*\\(?|(?: |&nbsp;|\\\\ )*\\()(\\d\\d\\d\\d[\\w\\-]*)?\\)?(?: *[,;] *)?([\\s\\S]*)$", undefined, undefined);
var rxNewblock = $std_regex.regex("\\[\\s*\\]\\{\\s*\\.newblock\\s*\\}\\s*", undefined, undefined);
var rxNonSearch = $std_regex.regex("(&#?\\w+;|\\]\\{[^\\}]*\\}|[^\\w\\+\\-])+|\\b(?:\\d\\w+|[\\w\\+\\-]{1,3}\\b)", undefined, undefined);
var rxSpaces = $std_regex.regex("\\s+", undefined, undefined);
function makeBibitem(context, keyx, labx, content)  /* (context : texParserBase/texContext, keyx : string, labx : string, content : string) -> string */  {
  var _x1 = $std_core.isEmpty($texParserBase.name(context));
  if (_x1) {
    var _x0 = "";
  }
  else {
    var _x0 = ($texParserBase.name(context) + ":");
  }
  var key = (_x0 + $texParserBase.unbrace(keyx));
  var lab = $texParserBase.parse($texParserBase.unbrace(labx), context);
  var md = $texParserBase.parse(content, context);
  var _x1 = $std_regex.find(md, rxAuthorTitle, undefined);
  if (_x1 != null) {
    var _x0 = $std_core._tuple2_($std_regex._index_($std_regex.groups(_x1.unJust), 1), $std_regex._index_($std_regex.groups(_x1.unJust), 2));
  }
  else {
    var _x0 = $std_core._tuple2_("", md);
  }
  var caption = $std_string.trim($std_regex.replaceAll_1(($std_regex.replaceAll_1((_x0.fst + ("\n" + _x0.snd)), rxNewblock, "&nl;", undefined)).replace(new RegExp(("\n").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g')," "), rxSpaces, " ", undefined));
  var search = $std_regex.replaceAll_1($std_regex.replaceAll_1((_x0.snd + ("+" + _x0.fst)), rxNonSearch, " ", undefined), rxSpaces, "+", undefined);
  var _x2 = $std_regex.find(lab, rxAuthorYear, undefined);
  if (_x2 == null) {
    if ((lab === "")) {
      var attrs0 = $std_core.Nil;
    }
    else {
      var attrs0 = $std_core.Cons($texParserBase.makeAttr("cite-label", lab), $std_core.Cons($texParserBase.makeAttr("tex-bibitem-label", ("[" + ($texParserBase.unbrace(labx) + "]"))), $std_core.Nil));
    }
  }
  else {
    var attrs0 = $std_core.Cons($texParserBase.makeAttr("cite-year", $std_regex._index_($std_regex.groups(_x2.unJust), 2)), $std_core.Cons($texParserBase.makeAttr("cite-authors", $std_regex._index_($std_regex.groups(_x2.unJust), 1)), $std_core.Cons($texParserBase.makeAttr("cite-authors-long", $std_regex._index_($std_regex.groups(_x2.unJust), 3)), $std_core.Nil)));
  }
  var attrs1 = $std_core.Cons($texParserBase.makeAttr("id", $common.definitionId(key)), $std_core.Cons($texParserBase.makeAttr("tex-cite-label", $texParserBase.unbrace(labx)), $std_core.Cons($texParserBase.makeAttr("caption", caption), $std_core.Cons($texParserBase.makeAttr("searchterm", search), $std_core.Cons($texParserBase.makeAttr("spellcheck", "false"), $std_core.Nil)))));
  var attrs = $texParserBase.joinAttrs($std_core._plus__3(attrs0, attrs1));
  return ("~ Begin Bibitem " + (attrs + ("\n" + (md + "\n~ End Bibitem\n"))));
}
var rxCiteSep = $std_regex.regex(", *", undefined, undefined);
var rxHline = $std_regex.regex(("^\\s*(?:\\\\(?:hline|firsthline|lasthline|toprule|bottomrule|midrule)\\b\\s*(\\\\hline\\b\\s*)?|\\\\(?:cline|cmidrule)\\b(?:\\(\\w\\))?" + ($texCommon.texarg + "\\s*)([\\s\\S]*)")), undefined, undefined);
var rxMathNl = $std_regex.regex("\\r?\\n", undefined, undefined);
var rxNoAlign = $std_regex.regex(("\\\\noalign\\b\\s*" + $texCommon.texarg), undefined, undefined);
var rxNonLetter = $std_regex.regex("[^\\w]+", undefined, undefined);
var rxNoSpec = $std_regex.regex(("\\s|[^pmb](?=\\{)" + $texCommon.texarg), undefined, undefined);
var rxRowEnd = $std_regex.regex("\\\\\\\\(?:\\[(?:[^\\]\\r\\n]*)\\])?[ \\t]*(?:\\r?\\n)*", undefined, undefined);
var rxRowNl = $std_regex.regex("\\r?\\n", undefined, undefined);
var rxSpec = $std_regex.regex("(\\|\\|?)|[lcrX]|[pmb]\\{([^\\}]*)\\}", undefined, undefined);
var rxUrlReserved = $std_regex.regex("[\\s>)\\\'\\\"(<\\[\\]]", undefined, undefined);
function texAccent(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  var accent = $std_regex._index_($std_regex.groups(cap), 1);
  var letter = $std_regex.replaceAll_1($std_regex._index_($std_regex.groups(cap), 2), rxNonLetter, "", undefined);
  var _x0 = $std_dict._lb__rb__2($texCommon.texAccents, $std_regex._index_($std_regex.groups(cap), 1));
  if (_x0 != null) {
    return ("&" + (letter + (_x0.unJust + ";")));
  }
  else {
    return letter;
  }
}
function texAcks(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return "\n# Acknowledgements { - }\n\n";
}
function texAlign(s)  /* (s : string) -> string */  {
  if ((s === "l")) {
    return "left";
  }
  else {
    if ((s === "r")) {
      return "right";
    }
    else {
      if ((s === "s")) {
        return "justify";
      }
      else {
        if ((s === "c")) {
          return "center";
        }
        else {
          return ((s === "")) ? "" : "left";
        }
      }
    }
  }
}
function texAlwaysIgnore(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return "";
}
function texAlwaysIgnore3(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return $texParserBase.parse($std_regex._index_($std_regex.groups(cap), 3), context);
}
function texAlwaysIgnore4(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return $texParserBase.parse($std_regex._index_($std_regex.groups(cap), 4), context);
}
function texAlwaysIgnore5(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return $texParserBase.parse($std_regex._index_($std_regex.groups(cap), 5), context);
}
function texAppendix(__cap, __context)  /* forall<a> (_cap : std/regex/matched, _context : a) -> string */  {
  return "\n# Appendix { @h1=\'A\' }\n";
}
function texAttribute(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return ("[]{" + ($std_regex._index_($std_regex.groups(cap), 1) + ("=\"" + ($std_regex._index_($std_regex.groups(cap), 2) + "\"}"))));
}
function texBblName(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return ("&name-" + ($std_regex._index_($std_regex.groups(cap), 1) + ";"));
}
function texBeginCaptionBlock(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var _x1 = $std_core.isEmpty($std_regex._index_($std_regex.groups(cap), 2));
  var _x0 = (_x1) ? "" : ".fragment";
  var attrs = $texParserBase.joinAttrs($std_core.Cons(("." + $std_regex._index_($std_regex.groups(cap), 1)), $std_core.Cons(_x0, $std_core.Cons($texParserBase.makeAttr("caption", $texParserBase.parse($std_regex._index_($std_regex.groups(cap), 3), context)), $std_core.Nil))));
  return ("\n~ Begin Captioned " + (attrs + "\n"));
}
function texLength(w)  /* (w : string) -> string */  {
  var textwidth = "(textwidth|linewidth|columnwidth|hsize)";
  return $std_regex.replace_1($std_regex.replace($texParserBase.unbrace(w), $std_regex.regex(("0\\.(\\d\\d?)\\\\" + (textwidth + "\\b\\s*")), undefined, undefined), function(wcap  /* std/regex/matched */ ) {  var n = $std_core.maybe($std_core.parseInt($std_regex._index_($std_regex.groups(wcap), 1), undefined), 100, $std_core.id); if (n < 10) {  return ($std_core.show_1(n) + "0%");} else {  return ($std_core.show_1(n) + "%");}}, undefined), $std_regex.regex(("\\\\" + (textwidth + "\\b\\s*")), undefined, undefined), "100%", undefined);
}
function texBeginMinipage(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  var width = texLength($std_regex._index_($std_regex.groups(cap), 4));
  var height = texLength($std_regex._index_($std_regex.groups(cap), 2));
  var attrs = $texParserBase.joinAttrs($std_core.Cons($texParserBase.makeAttr("width", width), $std_core.Cons($texParserBase.makeAttr("height", height), $std_core.Nil)));
  return ("\n~ Begin Minipage " + (attrs + "\n"));
}
function texBibinfo(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return ("[" + ($texParserBase.parse($std_regex._index_($std_regex.groups(cap), 2), context) + ("]{ .bibinfo; field:\"" + ($texParserBase.unbrace($std_regex._index_($std_regex.groups(cap), 1)) + "\"}"))));
}
function texBibitem(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return makeBibitem(context, $std_regex._index_($std_regex.groups(cap), 2), $std_regex._index_($std_regex.groups(cap), 1), $std_regex._index_($std_regex.groups(cap), 3));
}
function texBibitemCiteApa(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var authors = $texParserBase.unbrace($std_regex._index_($std_regex.groups(cap), 1));
  var year = $texParserBase.unbrace($std_regex._index_($std_regex.groups(cap), 2));
  var labx = (authors + ("(" + (year + ")")));
  return makeBibitem(context, $std_regex._index_($std_regex.groups(cap), 3), labx, $std_regex._index_($std_regex.groups(cap), 4));
}
function texBibitemCiteAuthorYear(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var authorsLong = $std_regex.replaceAll_1($texParserBase.unbrace($std_regex._index_($std_regex.groups(cap), 1)), rxSpaces, " ", undefined);
  var authorsShort = $std_regex.replaceAll_1($texParserBase.unbrace($std_regex._index_($std_regex.groups(cap), 2)), rxSpaces, " ", undefined);
  var year = $texParserBase.unbrace($std_regex._index_($std_regex.groups(cap), 3));
  var labx = (authorsLong + ("(" + (year + (")" + authorsShort))));
  return makeBibitem(context, $std_regex._index_($std_regex.groups(cap), 4), labx, $std_regex._index_($std_regex.groups(cap), 5));
}
function texBibitemCiteName(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var authors = $std_regex.replace_1($texParserBase.unbrace($std_regex._index_($std_regex.groups(cap), 1)), $std_regex.regex(",\\s*$", undefined, undefined), "", undefined);
  var year = $texParserBase.unbrace($std_regex._index_($std_regex.groups(cap), 2));
  var labx = (authors + ("(" + (year + ")")));
  return makeBibitem(context, $std_regex._index_($std_regex.groups(cap), 3), labx, $std_regex._index_($std_regex.groups(cap), 4));
}
function texBibliography(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  return "\n# References {-}\n[BIB]\n";
}
function texCaptionedXX(env, body, caption, extraAttrs, context)  /* (env : string, body : string, caption : string, extraAttrs : list<string>, context : texParserBase/texContext) -> string */  {
  var _x0 = extractLabelCaption(body, context, $texParserBase.parse(caption, context), "");
  var attrs = $texParserBase.joinAttrs($std_core._plus__3(extraAttrs, _x0.snd));
  return ("\n~ Begin " + ($std_core.capitalize(env) + (" " + (attrs + ("\n" + (_x0.thd + ($texParserBase.parse($texParserBase.trimNL(_x0.fst), context) + (_x0.field4 + ("\n~ End " + ($std_core.capitalize(env) + "\n"))))))))));
}
function texCaptionedX(cap, extraAttrs, context)  /* (cap : std/regex/matched, extraAttrs : list<string>, context : texParserBase/texContext) -> string */  {
  var _x0 = ($std_regex._index_($std_regex.groups(cap), 1) === "table");
  if (_x0) {
    var env = "tableFigure";
  }
  else {
    var env = $std_regex._index_($std_regex.groups(cap), 1);
  }
  return texCaptionedXX(env, $std_regex._index_($std_regex.groups(cap), 4), $std_regex._index_($std_regex.groups(cap), 3), extraAttrs, context);
}
function texCaptioned(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var _x1 = $std_core.isEmpty($std_regex._index_($std_regex.groups(cap), 2));
  var _x0 = (_x1) ? $std_core.Nil : $std_core.Cons(".wide", $std_core.Nil);
  return texCaptionedX(cap, _x0, context);
}
function texChar(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  var ent = $entity.texCmdToEntity($std_regex.matched(cap));
  if ((ent === "")) {
    return (($std_regex.matched(cap)).substr(1));
  }
  else {
    return ent;
  }
}
function texCite(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var citations = $std_regex.split($texParserBase.unbrace($std_regex._index_($std_regex.groups(cap), 9)), rxCiteSep, undefined, undefined);
  var _x0 = ($std_regex._index_($std_regex.groups(cap), 6) === "*");
  if (_x0) {
    var modifier = "+";
  }
  else {
    var _x1 = (($std_regex._index_($std_regex.groups(cap), 2) === "author") || (($std_regex._index_($std_regex.groups(cap), 5)).indexOf("A") >= 0));
    if (_x1) {
      var modifier = "!";
    }
    else {
      var _x2 = ($std_core.startsWith($std_regex._index_($std_regex.groups(cap), 3), "year") || ($std_regex._index_($std_regex.groups(cap), 1) === "short"));
      var modifier = (_x2) ? "-" : "";
    }
  }
  function bracket(s)  /* (s : string) -> string */  {
    var _x0 = (($std_regex._index_($std_regex.groups(cap), 3) === "year") || (($std_regex._index_($std_regex.groups(cap), 2) === "author") || (($std_regex._index_($std_regex.groups(cap), 5) === "t") || (($std_regex._index_($std_regex.groups(cap), 5)).indexOf("N") >= 0))));
    if (_x0) {
      return s;
    }
    else {
      return ("[" + (s + "]"));
    }
  }
  var _x0 = (($std_regex._index_($std_regex.groups(cap), 4) === "al") || ($std_regex._index_($std_regex.groups(cap), 5) === "NP"));
  var classes = (_x0) ? "{.free}" : "";
  var _x1 = ($std_regex._index_($std_regex.groups(cap), 8) !== "");
  if (_x1) {
    var _x0 = $std_core._tuple2_(($std_regex._index_($std_regex.groups(cap), 7) + " "), ("," + $std_regex._index_($std_regex.groups(cap), 8)));
  }
  else {
    var _x2 = ($std_regex._index_($std_regex.groups(cap), 7) !== "");
    if (_x2) {
      var _x0 = $std_core._tuple2_("", ("," + $std_regex._index_($std_regex.groups(cap), 7)));
    }
    else {
      var _x0 = $std_core._tuple2_("", "");
    }
  }
  return (bracket((_x0.fst + ($std_core.join_4($std_core.map_3($std_core.list_4(citations), function(c  /* string */ ) {  return (modifier + ("@" + c));}), ";") + _x0.snd))) + classes);
}
function texCiteAuthorYear(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return $std_regex.replaceAll_1($texParserBase.parse(($std_regex._index_($std_regex.groups(cap), 2) + ("," + ($std_regex._index_($std_regex.groups(cap), 3) + ("," + $std_regex._index_($std_regex.groups(cap), 1))))), context), $texParserBase.rxNl, " ", undefined);
}
function texClassCmd(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return ("[" + ($texParserBase.parse($std_regex._index_($std_regex.groups(cap), 2), context) + ("]{." + (toIdentifier($std_regex._index_($std_regex.groups(cap), 1)) + "}"))));
}
function texCode(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var txt = $std_regex._index_($std_regex.groups(cap), 2);
  if ((txt === "")) {
    return "";
  }
  else {
    return ("`" + (txt + "`"));
  }
}
function texColorBox(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var _x1 = $std_core.isEmpty($std_regex._index_($std_regex.groups(cap), 1));
  var _x0 = (_x1) ? "" : ".framed";
  var attrs = $std_core.Cons($texParserBase.makeAttr("background-color", extractColorX($std_regex._index_($std_regex.groups(cap), 2), $std_regex._index_($std_regex.groups(cap), 3))), $std_core.Cons(_x0, $std_core.Nil));
  return ("[" + ($texParserBase.parse($std_regex._index_($std_regex.groups(cap), 3), context) + ("]" + $texParserBase.joinAttrs(attrs))));
}
function texColumn(cap, context)  /* forall<a> (cap : std/regex/matched, context : a) -> string */  {
  var attrs = $texParserBase.singleAttr("width", texLength($std_regex._index_($std_regex.groups(cap), 1)));
  return ("~ Begin Column " + attrs);
}
function texCommandClass(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return ("[]{." + ($std_regex._index_($std_regex.groups(cap), 1) + "}"));
}
function texComment(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  var comment = $std_regex._index_($std_regex.groups(cap), 1);
  if ($std_core.startsWith(comment, "\n")) {
    var com = ("\n<!--" + ((comment).substr(1)));
  }
  else {
    var com = ("<!--" + comment);
  }
  if ($std_core.endsWith(com, "\n")) {
    return ($std_core.substr_1(com, 0, (((com).length - 1)|0)) + "-->\n");
  }
  else {
    return (com + "-->");
  }
}
function texDash(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  var _x0 = ($std_regex.matched(cap)).length === 2;
  return (_x0) ? "&ndash;" : "&mdash;";
}
function urlEncode(txt)  /* (txt : string) -> string */  {
  return $std_regex.replaceAll(txt, rxUrlReserved, function(cap  /* std/regex/matched */ ) {  return $std_core.join_3($std_core.map_3($std_core.list_5($std_regex.matched(cap)), function(c  /* char */ ) {  return ("%" + $std_core.showHex((c).charCodeAt(0), 2, undefined));}));}, undefined);
}
function texDoi(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var txt = $texParserBase.unbrace($std_regex._index_($std_regex.groups(cap), 1));
  if ((txt === "")) {
    return "";
  }
  else {
    return ("doi:[" + (txt + ("](http://dx.doi.org/" + (urlEncode(txt) + ")"))));
  }
}
function texQuot(quot, cap, context)  /* (quot : string, cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return (quot + ($texParserBase.parse($std_regex._index_($std_regex.groups(cap), 1), context) + quot));
}
function texDquot(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return texQuot("\"", cap, context);
}
function texEmph(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var txt = $std_regex._index_($std_regex.groups(cap), 1);
  var _x0 = ($std_regex._index_($std_regex.groups(cap), 2) !== "");
  if (_x0) {
    var end = $std_regex._index_($std_regex.groups(cap), 2);
  }
  else {
    var end = "\\/";
  }
  if ((txt === "")) {
    return "";
  }
  else {
    return ("_" + ($texParserBase.parse(txt, context) + ("_" + end)));
  }
}
function texEmptyLine(__cap, __context)  /* forall<a,b> (_cap : a, _context : b) -> string */  {
  return "\n";
}
function texEndCaptionBlock(cap, context)  /* forall<a> (cap : std/regex/matched, context : a) -> string */  {
  return "\n~ End Captioned\n";
}
 
/* use entity for these commands */
var texEntities = $std_dict.dict_1($std_core.Cons($std_core._tuple2_("LaTeX", "LogoLaTeX"), $std_core.Cons($std_core._tuple2_("LaTeXe", "LogoLaTeXe"), $std_core.Cons($std_core._tuple2_("BibTeX", "LogoBibTeX"), $std_core.Cons($std_core._tuple2_("AmSTeX", "LogoAmSTeX"), $std_core.Cons($std_core._tuple2_("TeX", "LogoTeX"), $std_core.Nil))))));
function texEntityCmd(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  var _x0 = $std_dict._lb__rb__2(texEntities, $std_regex._index_($std_regex.groups(cap), 1));
  if (_x0 == null) {
    var entity = $std_regex._index_($std_regex.groups(cap), 1);
  }
  else {
    var entity = _x0.unJust;
  }
  return ("&" + (entity + ";"));
}
var texEntityCmd0 = ("(vfill|qed|eg|etal|ie|" + ((($std_dict.keys_1(texEntities)).join("|")) + ")"));
function texEnvBegin(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  var _x1 = $std_core.isEmpty($std_regex._index_($std_regex.groups(cap), 3));
  var _x0 = (_x1) ? "" : ".fragment";
  var attrs = $texParserBase.joinAttrs($std_core.Cons(_x0, $std_core.Nil));
  return ("\n~ Begin " + ($std_core.capitalize($std_regex._index_($std_regex.groups(cap), 1)) + (" " + (attrs + "\n"))));
}
function texEnvEnd(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  return ("\n~ End " + ($std_core.capitalize($std_regex._index_($std_regex.groups(cap), 1)) + "\n"));
}
function texFilename(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return "&filename;";
}
var texFontSizeMap = $std_dict.dict_1($std_core.Cons($std_core._tuple2_("tiny", "xx-small"), $std_core.Cons($std_core._tuple2_("scriptsize", "x-small"), $std_core.Cons($std_core._tuple2_("footnotesize", "small"), $std_core.Cons($std_core._tuple2_("small", "small"), $std_core.Cons($std_core._tuple2_("normalsize", "medium"), $std_core.Cons($std_core._tuple2_("large", "large"), $std_core.Cons($std_core._tuple2_("Large", "x-large"), $std_core.Cons($std_core._tuple2_("LARGE", "xx-large"), $std_core.Cons($std_core._tuple2_("Huge", "xx-large"), $std_core.Nil))))))))));
function texFontSize(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var cssSize = $std_core.maybe($std_dict._lb__rb__2(texFontSizeMap, $std_regex._index_($std_regex.groups(cap), 1)), "medium", $std_core.id);
  return ("[" + ($texParserBase.parse($std_regex._index_($std_regex.groups(cap), 2), context) + ("]{font-size:" + (cssSize + "}"))));
}
var texFontSizes = (($std_dict.keys_1(texFontSizeMap)).join("|"));
function texFootnote(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var fn = ("^fn-" + $std_core.substr_1($std_crypto.md5($std_regex._index_($std_regex.groups(cap), 1)), 0, 3));
  return ("[" + (fn + ("]" + ($texParserBase.parse($std_regex._index_($std_regex.groups(cap), 2), context) + ("\n\n[" + (fn + ("]: \n" + ($texParserBase.indent4($texParserBase.parse($std_regex._index_($std_regex.groups(cap), 1), context)) + "\n\n"))))))));
}
function texFrameX(options, argTitle, argSubtitle, body, context)  /* (options : string, argTitle : string, argSubtitle : string, body : string, context : texParserBase/texContext) -> string */  {
  var _x0 = beamerOptions(options);
  var _x1 = beamerExtract(body, context);
  var title = $std_core._x7C__x7C__1($texParserBase.unbrace(argTitle), $std_core._x7C__x7C__1(_x1.snd, _x0.fst));
  if ($std_core.isEmpty(argSubtitle)) {
    var subtitle = "";
  }
  else {
    var subtitle = (" - " + $texParserBase.unbrace(argSubtitle));
  }
  var rtitle = $texParserBase.parse((title + subtitle), context);
  var ftitle = $std_core._x7C__x7C__1($std_string.trim(rtitle), "\\/");
  return ("\n# " + (ftitle + (" " + ($texParserBase.joinAttrs($std_core._plus__3(_x0.snd, _x1.thd)) + ("\n" + (_x1.field4 + ($texParserBase.parse(_x1.fst, context) + (_x1.field5 + "\n"))))))));
}
function texFrame(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return texFrameX($std_regex._index_($std_regex.groups(cap), 2), $std_regex._index_($std_regex.groups(cap), 3), $std_regex._index_($std_regex.groups(cap), 4), $std_regex._index_($std_regex.groups(cap), 5), context);
}
function texFrameCmd(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return texFrameX($std_regex._index_($std_regex.groups(cap), 2), "", "", $std_regex._index_($std_regex.groups(cap), 3), context);
}
function texGenericCommand(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var entity = $entity.texCmdToEntity($std_regex._index_($std_regex.groups(cap), 1));
  if ($texParserBase.ignore(context)) {
    var _x0 = ($std_regex._index_($std_regex.groups(cap), 2) !== "");
    return (_x0) ? "" : entity;
  }
  else {
    return ($std_core.isEmpty(entity)) ? $std_regex.matched(cap) : entity;
  }
}
function texGroup(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var body = $texParserBase.parse($std_regex._index_($std_regex.groups(cap), 1), context);
  var _x0 = ($texParserBase.ignore(context) || (body === ""));
  if (_x0) {
    return body;
  }
  else {
    return ("{" + (body + "}"));
  }
}
function texHarvarditem(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var key = $std_regex._index_($std_regex.groups(cap), 4);
  var year = ("(" + ($std_regex._index_($std_regex.groups(cap), 3) + ")"));
  var _x0 = ($std_regex._index_($std_regex.groups(cap), 1) !== "");
  if (_x0) {
    var lab = ($std_regex._index_($std_regex.groups(cap), 1) + (year + $std_regex._index_($std_regex.groups(cap), 2)));
  }
  else {
    var lab = ($std_regex._index_($std_regex.groups(cap), 2) + year);
  }
  var content = $std_regex._index_($std_regex.groups(cap), 5);
  return makeBibitem(context, key, lab, content);
}
function texHSkip(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  return ("[]{width:\'" + (texLength($std_regex._index_($std_regex.groups(cap), 1)) + "\'}"));
}
function texHSpace(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  return ("[]{width:\'" + (texLength($std_regex._index_($std_regex.groups(cap), 1)) + "\'}"));
}
function texIgnore(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return ($texParserBase.ignore(context)) ? "" : $std_regex.matched(cap);
}
function texImage(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var kvs0 = $std_core.map_3($std_core.list_4($std_regex.findAll($std_regex._index_($std_regex.groups(cap), 2), rxKeyVal, undefined)), function(kcap  /* std/regex/matched */ ) {  var key = $std_regex._index_($std_regex.groups(kcap), 1); var value = $texParserBase.unbrace($std_regex._index_($std_regex.groups(kcap), 2)); if ((key === "width")) {  return ("width:\"" + (texLength(value) + "\""));} else {  if ((key === "height")) {  return ("height:\"" + (texLength(value) + "\""));} else {  if ((key === "scale")) {  return ("transform:\"scale(" + (value + ")\""));} else {  if ((key === "angle")) {  return ("transform:\"rotate(" + (value + "deg)\""));} else {  return "";}}}}});
  var _x0 = $std_core.isEmpty($std_regex._index_($std_regex.groups(cap), 1));
  var kvs1 = (_x0) ? $std_core.Nil : $std_core.Cons(".fragment", $std_core.Nil);
  var fname = $texParserBase.unbrace($std_regex._index_($std_regex.groups(cap), 3));
  var _x0 = ($std_path.extname(fname) === "");
  var imgname = (_x0) ? (fname + ".eps") : fname;
  var imgkey = $std_regex.replaceAll_1($std_path.stemname(imgname), $std_regex.regex("[^\\w\\-]+", undefined, undefined), "", undefined);
  return ("![" + (imgkey + ("]" + ($texParserBase.parse($std_regex._index_($std_regex.groups(cap), 4), context) + ("\n\n[" + (imgkey + ("]: " + (imgname + (" \"image title\" { " + ($std_core.join_4($std_core._plus__3(kvs0, kvs1), " ; ") + " }\n"))))))))));
}
 
/* --------------------------------------
 Latex block functions 
---------------------------------------- */
function texInclude(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  var fname = $texParserBase.unbrace($std_regex._index_($std_regex.groups(cap), 2));
  var _x0 = (($std_regex._index_($std_regex.groups(cap), 1) === "input") && (fname === "babelbst.tex"));
  if (_x0) {
    return "";
  }
  else {
    return ("\n[INCLUDE=" + ($texParserBase.unbrace($std_regex._index_($std_regex.groups(cap), 2)) + "]\n"));
  }
}
function texIndent(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  return "\n   ";
}
function texInst(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var txt = $texParserBase.parse($texParserBase.unbrace($std_regex._index_($std_regex.groups(cap), 1)), context);
  if ((txt === "")) {
    return "";
  }
  else {
    return ("^" + ((txt).replace(new RegExp((" ").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'),"\\ ") + "^"));
  }
}
function texItemX(bullet, caption, context)  /* (bullet : string, caption : string, context : texParserBase/texContext) -> string */  {
  if ((caption === "")) {
    var _x0 = "";
  }
  else {
    var _x0 = ("**" + ($texParserBase.parse(caption, context) + "**"));
  }
  return (bullet + (" " + _x0));
}
function texItem(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var _x0 = $std_core.isEmpty($std_regex._index_($std_regex.groups(cap), 1));
  var bullet = (_x0) ? "\n\n*" : "\n\n* {.fragment}";
  return texItemX(bullet, $std_regex._index_($std_regex.groups(cap), 2), context);
}
function texItemPause(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return texItemX("\n\n* {.fragment}", $std_regex._index_($std_regex.groups(cap), 2), context);
}
function texKeep(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return ($texParserBase.ignore(context)) ? "" : $std_regex.matched(cap);
}
function texLabeled(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return texCaptionedX(cap, $std_core.Nil, context);
}
function texLineBreak(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  var _x1 = ($std_regex._index_($std_regex.groups(cap), 1) !== "");
  if (_x1) {
    var _x0 = ("[ ]{margin-bottom:\'" + (texLength($std_regex._index_($std_regex.groups(cap), 1)) + "\'}"));
  }
  else {
    var _x0 = "";
  }
  return (_x0 + "&br;");
}
function texList(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var _x0 = ($std_regex._index_($std_regex.groups(cap), 1) === "itemize");
  var bullet = (_x0) ? "*" : "1.";
  var _x0 = ($std_regex._index_($std_regex.groups(cap), 3) === "");
  if (_x0) {
    return "\n";
  }
  else {
    var _x1 = ($std_core.isEmpty($std_regex._index_($std_regex.groups(cap), 4)) && $std_core.isEmpty($std_regex._index_($std_regex.groups(cap), 5)));
    var post = (_x1) ? "" : " {.fragment}";
    return ("\n\n" + texItemX((bullet + post), $std_regex._index_($std_regex.groups(cap), 6), context));
  }
}
function texListing(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var _x0 = ($std_regex._index_($std_regex.groups(cap), 2) === "");
  if (_x0) {
    var attrs = "";
  }
  else {
    var attrs = (" { " + ((($std_core.map_5($std_regex.findAll($std_regex._index_($std_regex.groups(cap), 2), rxKeyVal, undefined), function(kcap  /* std/regex/matched */ ) {  var key = $std_regex._index_($std_regex.groups(kcap), 1); var value = $std_regex._index_($std_regex.groups(kcap), 2); if ((key === "language")) {  return ("language:\'" + (value + "\'"));} else {  if ((key === "caption")) {  return ("caption:\'" + ($texParserBase.parse($texParserBase.unbrace(value), context) + "\'"));} else {  if ((key === "label")) {  return ("#" + toIdentifier(value));} else {  return "";}}}})).join(" ")) + " }"));
  }
  return ("```" + (attrs + ("\n" + ($texParserBase.trimNL($std_regex._index_($std_regex.groups(cap), 3)) + " \n```\n"))));
}
function texListingEnd(__cap, __context)  /* forall<a,b> (_cap : a, _context : b) -> string */  {
  return "```\n";
}
function texMakeTitle(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  return "\n[TITLE]\n";
}
function texMathDisplay(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  return ("\n~ Math\n" + ($std_string.trim($texParserBase.trimx($std_regex.matched(cap), 2)) + "\n~\n"));
}
function texMathEnv(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var _x0 = extractLabelCaption($std_regex._index_($std_regex.groups(cap), 3), context, undefined, undefined);
  var attrs = $texParserBase.joinAttrs(_x0.snd);
  var _x1 = ($std_regex._index_($std_regex.groups(cap), 2) === "*");
  var envName = (_x1) ? "Math" : "Equation";
  return ("~ " + (envName + (" " + (attrs + ("\n" + (_x0.thd + ($common.trimLines(_x0.fst) + (_x0.field4 + "\n~\n"))))))));
}
function texMathInline(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  return ("$" + ($std_regex.replaceAll_1($texParserBase.trimx($std_regex.matched(cap), 1), rxMathNl, " %\n", undefined) + "$"));
}
function texMathSnippet(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var env = $std_regex._index_($std_regex.groups(cap), 1);
  if ((env === "gather")) {
    var lenv = "gathered";
  }
  else {
    var _x0 = ((env === "align") || ((env === "multline") || ((env === "flalign") || (env === "eqnarray"))));
    var lenv = (_x0) ? "aligned" : "";
  }
  if ($std_core.bool_2(lenv)) {
    var _x0 = $std_core._tuple2_(("\\begin{" + (lenv + "}\n")), ("\n\\end{" + (lenv + "}")));
  }
  else {
    var _x0 = $std_core._tuple2_("", "");
  }
  var _x1 = extractLabelCaption($std_regex._index_($std_regex.groups(cap), 4), context, undefined, undefined);
  var attrs = $texParserBase.joinAttrs(_x1.snd);
  if ($std_core.isEmpty(lenv)) {
    var envName = "Snippet";
  }
  else {
    var _x2 = ($std_regex._index_($std_regex.groups(cap), 2) === "*");
    var envName = (_x2) ? "Math" : "Equation";
  }
  return ("~ " + (envName + (" " + (attrs + ("\n" + (_x0.fst + ($common.trimLines(_x1.fst) + (_x0.snd + "\n~\n"))))))));
}
function texMBox(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var _x1 = $std_core.startsWith($std_regex._index_($std_regex.groups(cap), 1), "f");
  var _x0 = (_x1) ? ".framed" : "";
  var attrs = $texParserBase.joinAttrs($std_core.Cons($texParserBase.makeAttr("width", texLength($std_regex._index_($std_regex.groups(cap), 2))), $std_core.Cons($texParserBase.makeAttr("text-align", texAlign($std_regex._index_($std_regex.groups(cap), 2))), $std_core.Cons(_x0, $std_core.Nil))));
  var content = $texParserBase.parse($std_regex._index_($std_regex.groups(cap), 4), context);
  if ((attrs === "")) {
    return content;
  }
  else {
    return ("[" + (content + ("]" + attrs)));
  }
}
function texMonospace(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var txt = $std_regex._index_($std_regex.groups(cap), 1);
  if ((txt === "")) {
    return "";
  }
  else {
    return ("[" + ($texParserBase.parse(txt, context) + "]{font-family:monospace}"));
  }
}
function texNoIndent(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return ($texParserBase.parse($std_regex._index_($std_regex.groups(cap), 1), context) + "{.noindent}\n\n");
}
function texNormal(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  return $std_regex.matched(cap);
}
function texOther(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  var char = $std_regex.matched(cap);
  if ((char === "~")) {
    return "\\ ";
  }
  else {
    if ((char === "*")) {
      return "\\*";
    }
    else {
      if ((char === "_")) {
        return "\\_";
      }
      else {
        if ((char === "[")) {
          return "\\[";
        }
        else {
          if ((char === "]")) {
            return "\\]";
          }
          else {
            if ((char === "#")) {
              return "\\#";
            }
            else {
              if ((char === "`")) {
                return "\\`";
              }
              else {
                return ((char === "``")) ? "\"" : char;
              }
            }
          }
        }
      }
    }
  }
}
function texPageBreak(__cap, __context)  /* forall<a> (_cap : std/regex/matched, _context : a) -> string */  {
  return "\n&pagebreak;\n";
}
function texVAlign(s)  /* (s : string) -> string */  {
  if ((s === "c")) {
    return "middle";
  }
  else {
    if ((s === "t")) {
      return "top";
    }
    else {
      if ((s === "b")) {
        return "bottom";
      }
      else {
        return ((s === "")) ? "" : "baseline";
      }
    }
  }
}
function texParBox(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var attrs = $texParserBase.joinAttrs($std_core.Cons($texParserBase.makeAttr("width", texLength($std_regex._index_($std_regex.groups(cap), 5))), $std_core.Cons($texParserBase.makeAttr("text-align", texAlign($std_regex._index_($std_regex.groups(cap), 2))), $std_core.Cons($texParserBase.makeAttr("height", texLength($std_regex._index_($std_regex.groups(cap), 3))), $std_core.Cons($texParserBase.makeAttr("vertical-align", texVAlign($std_regex._index_($std_regex.groups(cap), 4))), $std_core.Nil)))));
  return ("\n~ Parbox " + (attrs + ("\n" + ($texParserBase.trimNL($texParserBase.parse($std_regex._index_($std_regex.groups(cap), 4), context)) + "\n~\n"))));
}
function texRaiseBox(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var attrs = $texParserBase.joinAttrs($std_core.Cons($texParserBase.makeAttr("height", texLength($std_regex._index_($std_regex.groups(cap), 3))), $std_core.Cons($texParserBase.makeAttr("vertical-align", texLength($std_regex._index_($std_regex.groups(cap), 2))), $std_core.Nil)));
  return ("[" + ($texParserBase.parse($std_regex._index_($std_regex.groups(cap), 4), context) + ("]" + attrs)));
}
function texRaw(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  return ("\n~ TexRaw\n" + ($std_regex.matched(cap) + "\n~\n"));
}
function texRef(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  var _x1 = ($std_regex._index_($std_regex.groups(cap), 1) === "~");
  if (_x1) {
    var _x0 = " ";
  }
  else {
    var _x0 = $std_regex._index_($std_regex.groups(cap), 1);
  }
  return (_x0 + ("[#" + (toIdentifier($std_regex._index_($std_regex.groups(cap), 2)) + "]")));
}
function texRoman(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var txt = $std_regex._index_($std_regex.groups(cap), 1);
  if ((txt === "")) {
    return "";
  }
  else {
    return ("[" + ($texParserBase.parse(txt, context) + "]{font-family:serif}"));
  }
}
function texRule(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  var widthHeight = $std_core.Cons($texParserBase.makeAttr("width", texLength($std_regex._index_($std_regex.groups(cap), 2))), $std_core.Cons($texParserBase.makeAttr("height", texLength($std_regex._index_($std_regex.groups(cap), 3))), $std_core.Nil));
  var _x0 = ($std_regex._index_($std_regex.groups(cap), 1) !== "");
  if (_x0) {
    return ("[ ]" + $texParserBase.joinAttrs($std_core._plus__3($std_core.Cons("background-color:black", $std_core.Cons($texParserBase.makeAttr("vertical-align", texLength($std_regex._index_($std_regex.groups(cap), 1))), $std_core.Nil)), widthHeight)));
  }
  else {
    return ("\n------------ " + ($texParserBase.joinAttrs(widthHeight) + "\n"));
  }
}
function texSans(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var txt = $std_regex._index_($std_regex.groups(cap), 1);
  if ((txt === "")) {
    return "";
  }
  else {
    return ("[" + ($texParserBase.parse(txt, context) + "]{font-family:sans-serif}"));
  }
}
 
/* sections, sizes, etc */
var texsects = $std_core.Cons("part", $std_core.Cons("chapter", $std_core.Cons("section", $std_core.Cons("subsection", $std_core.Cons("subsubsection", $std_core.Cons("paragraph", $std_core.Nil))))));
var texsect = ("(" + ($std_core.join_4(texsects, "|") + ")"));
function texSection(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var n = $std_core.max(1, (($std_core.indexOf_2(texsects, function(s  /* string */ ) {  return (s === $std_regex._index_($std_regex.groups(cap), 1));}) - 1)|0));
  var caption = $texParserBase.parse($texParserBase.unbrace($std_regex._index_($std_regex.groups(cap), 4)), context);
  var _x1 = ($std_regex._index_($std_regex.groups(cap), 2) === "*");
  var _x0 = (_x1) ? " -" : "";
  var _x3 = ($std_regex._index_($std_regex.groups(cap), 5) !== "");
  if (_x3) {
    var _x2 = (" #" + toIdentifier($std_regex._index_($std_regex.groups(cap), 5)));
  }
  else {
    var _x2 = "";
  }
  var attrs = $texParserBase.joinAttrs($std_core.Cons(_x0, $std_core.Cons(_x2, $std_core.Cons($texParserBase.makeAttr("toc-line", $std_regex._index_($std_regex.groups(cap), 3)), $std_core.Nil))));
  return ($std_core.string_3(n, '#') + (" " + (caption + (" " + (attrs + "\n")))));
}
function texSkip(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  var _x0 = ($std_regex._index_($std_regex.groups(cap), 1) === "big");
  if (_x0) {
    var height = "12pt";
  }
  else {
    var _x1 = ($std_regex._index_($std_regex.groups(cap), 1) === "med");
    var height = (_x1) ? "6pt" : "3pt";
  }
  return ("\n~ Empty { height:\'" + (height + "\' }\n\n~\n"));
}
function texSlanted(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var txt = $std_regex._index_($std_regex.groups(cap), 1);
  if ((txt === "")) {
    return "";
  }
  else {
    return ("[" + ($texParserBase.parse(txt, context) + "]{font-style:oblique}"));
  }
}
function texSmallcaps(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var txt = $std_regex._index_($std_regex.groups(cap), 1);
  if ((txt === "")) {
    return "";
  }
  else {
    return ("[" + ($texParserBase.parse(txt, context) + "]{font-variant:small-caps}"));
  }
}
function texSquot(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return texQuot("\'", cap, context);
}
function texStrong(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var txt = $std_regex._index_($std_regex.groups(cap), 1);
  var _x0 = ($std_regex._index_($std_regex.groups(cap), 2) !== "");
  if (_x0) {
    var end = $std_regex._index_($std_regex.groups(cap), 2);
  }
  else {
    var end = "\\/";
  }
  if ((txt === "")) {
    return "";
  }
  else {
    return ("**" + ($texParserBase.parse(txt, context) + ("**" + end)));
  }
}
function texTabularDo(pos, width, spec, content, cap, context)  /* (pos : string, width : string, spec : string, content : string, cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  function expand(cells, n)  /* (cells : list<(int, string)>, n : int) -> list<string> */  {
    var _x0 = $std_core.unzip(cells);
    return $std_core._plus__3(_x0.snd, $std_core.map_3($std_core.list(1, ((n - $std_core.sum(_x0.fst))|0)), function(i  /* int */ ) {  return "";}));
  }
  function makeLine(double, columns)  /* (double : bool, columns : int) -> string */  {
    return ("|" + ($std_core.join_4($std_core.map_3($std_core.list(1, columns), function(i0  /* int */ ) {  return (double) ? "===" : "---";}), "|") + "|"));
  }
  function toColSpecs(xs0)  /* (xs : list<std/regex/matched>) -> list<(string, string, string)> */  {
    if (xs0 == null) {
      return $std_core.Cons($std_core._tuple3_("|", "", ""), $std_core.Nil);
    }
    else {
      var _x0 = ($std_regex._index_($std_regex.groups(xs0.head), 1) === "");
      if (_x0) {
        return $std_core._plus__3($std_core.Cons($std_core._tuple3_("|", $std_core.toLower($std_core.substr_1($std_regex.matched(xs0.head), 0, 1)), $texParserBase.singleAttr("width", texLength($std_regex._index_($std_regex.groups(xs0.head), 2)))), $std_core.Nil), toColSpecs(xs0.tail));
      }
      else {
        if (xs0.tail == null) {
          return $std_core.Cons($std_core._tuple3_("+", "", ""), $std_core.Nil);
        }
        else {
          return $std_core._plus__3($std_core.Cons($std_core._tuple3_("+", $std_core.toLower($std_core.substr_1($std_regex.matched(xs0.tail.head), 0, 1)), $texParserBase.singleAttr("width", texLength($std_regex._index_($std_regex.groups(xs0.tail.head), 2)))), $std_core.Nil), toColSpecs(xs0.tail.tail));
        }
      }
    }
  }
  var rxMultiColumn = $std_regex.regex(("\\\\multicolumn\\b\\s*\\{(\\d+)\\}\\s*" + ($texCommon.texarg + $texCommon.texarg)), undefined, undefined);
  function createColumn(col)  /* (col : string) -> string */  {
    return ("\n~Begin Column\n" + ($texParserBase.parse(col, context) + "\n~ End Column"));
  }
  function createColumns(__colspecs, row)  /* forall<a> (_colspecs : a, row : string) -> string */  {
    var cols = $std_core.split_1(row, "&");
    return ("\n~Begin Columns" + ((($std_core.map_5(cols, createColumn)).join('')) + "\n~ End Columns\n"));
  }
  function renderCell(cell)  /* (cell : string) -> (int, string) */  {
    var _x0 = $std_regex.find(cell, rxMultiColumn, undefined);
    if (_x0 == null) {
      return $std_core._tuple2_(1, $texParserBase.parse(cell, context));
    }
    else {
      var n0 = $std_core.maybe($std_core.parseInt($texParserBase.unbrace($std_regex._index_($std_regex.groups(_x0.unJust), 1)), undefined), 1, $std_core.id);
      return $std_core._tuple2_(n0, ($texParserBase.parse($std_regex._index_($std_regex.groups(_x0.unJust), 3), context) + $std_core.string_3(((n0 - 1)|0), '|')));
    }
  }
  function renderRow(row0, columns0)  /* (row : string, columns : int) -> string */  {
    var _x1 = $std_regex.find(row0, rxHline, undefined);
    if (_x1 == null) {
      var _x0 = $std_core._tuple2_("", row0);
    }
    else {
      var _x0 = $std_core._tuple2_(makeLine(($std_regex._index_($std_regex.groups(_x1.unJust), 1) !== ""), columns0), $std_regex._index_($std_regex.groups(_x1.unJust), 3));
    }
    var _x2 = ($std_string.trim(_x0.snd) === "");
    if (_x2) {
      return _x0.fst;
    }
    else {
      var _x3 = ((_x0.fst === "")) ? "" : "\n";
      return (_x0.fst + (_x3 + ("| " + ($std_core.join_4(expand($std_core.map_3($std_core.list_4($std_core.split_1(_x0.snd, "&")), renderCell), columns0), "| ") + "|"))));
    }
  }
  function rowSanitize(row1)  /* (row : string) -> string */  {
    return $std_regex.replaceAll_1($std_regex.replaceAll_1(row1, rxRowNl, " ", undefined), rxNoAlign, "", undefined);
  }
  var rawRows = $std_core.remove($std_core.list_4($std_regex.split(content, rxRowEnd, undefined, undefined)), function(row2  /* string */ ) {  return $std_core.isEmpty($std_string.trim(row2));});
  var rows = $std_core.map_3(rawRows, function(row3  /* string */ ) {  return rowSanitize(row3);});
  if (rows != null && rows.tail != null) {
    var _x1 = $std_regex.find(rows.tail.head, rxHline, undefined);
    if (_x1 != null) {
      var _x3 = $std_core.isEmpty($std_regex._index_($std_regex.groups(_x1.unJust), 1));
      var _x2 = (_x3) ? "---" : "===";
      var _x0 = $std_core._tuple3_($std_core.Cons(rows.head, $std_core.Nil), _x2, $std_core.Cons($std_regex._index_($std_regex.groups(_x1.unJust), 3), rows.tail.tail));
    }
    else {
      var _x4 = $std_regex.find(rows.head, rxHline, undefined);
      if (_x4 != null) {
        var _x6 = $std_core.isEmpty($std_regex._index_($std_regex.groups(_x4.unJust), 1));
        var _x5 = (_x6) ? "---" : "===";
        var _x0 = $std_core._tuple3_($std_core.Nil, _x5, $std_core.Cons($std_regex._index_($std_regex.groups(_x4.unJust), 3), $std_core.Cons(rows.tail.head, rows.tail.tail)));
      }
      else {
        var _x0 = $std_core._tuple3_($std_core.Nil, "~~~", rows);
      }
    }
  }
  else if (rows != null) {
    var _x7 = $std_regex.find(rows.head, rxHline, undefined);
    if (_x7 != null) {
      var _x9 = $std_core.isEmpty($std_regex._index_($std_regex.groups(_x7.unJust), 1));
      var _x8 = (_x9) ? "---" : "===";
      var _x0 = $std_core._tuple3_($std_core.Nil, _x8, $std_core.Cons($std_regex._index_($std_regex.groups(_x7.unJust), 3), rows.tail));
    }
    else {
      var _x0 = $std_core._tuple3_($std_core.Nil, "~~~", rows);
    }
  }
  else {
    var _x0 = $std_core._tuple3_($std_core.Nil, "", $std_core.Nil);
  }
  var colspecs = toColSpecs($std_core.list_4($std_regex.findAll($std_regex.replaceAll_1(spec, rxNoSpec, "", undefined), rxSpec, undefined)));
  var header = $std_core.join_4($std_core.map_3(colspecs, function(cspec  /* (string, string, string) */ ) {  if ((cspec.snd === "")) {  return cspec.fst;} else {  var _x11 = ((cspec.snd === "c") || (cspec.snd === "l")); var _x10 = (_x11) ? ":" : "";var _x13 = ((cspec.snd === "c") || (cspec.snd === "r")); var _x12 = (_x13) ? ":" : ""; return (cspec.fst + (_x10 + (_x0.snd + (cspec.thd + (_x0.snd + _x12)))));}}), "");
  var _x10 = $std_core.length_3(colspecs) > 1;
  if (_x10) {
    var colcount = (($std_core.length_3(colspecs) - 1)|0);
  }
  else {
    var colcount = 1;
  }
  var _x10 = ($std_core.length_3(rawRows) === 1 && $std_core.any(rawRows, function(row4  /* string */ ) {  return $std_regex.contains(row4, rxRowNl, undefined);}));
  if (_x10) {
    return createColumns(colspecs, $std_core.join_3($std_core.take(rawRows, 1)));
  }
  else {
    $std_core._unit_;
  }
  if ((pos === "b")) {
    var _x10 = "vertical-align:bottom";
  }
  else {
    var _x10 = ((pos === "t")) ? "vertical-align:top" : "";
  }
  var attrs0 = $texParserBase.joinAttrs($std_core.Cons(".textable", $std_core.Cons($texParserBase.makeAttr("width", texLength(width)), $std_core.Cons(_x10, $std_core.Nil))));
   
  // render rows
  function renderRows(rs)  /* (rs : list<string>) -> string */  {
    return $std_core.join_4($std_core.remove($std_core.map_3(rs, function(row5  /* string */ ) {  return renderRow(row5, colcount);}), $std_core.isEmpty), "\n");
  }
  var top = renderRows(_x0.fst);
  var body = renderRows(_x0.thd);
  var _x10 = ($std_core.isEmpty(top)) ? "" : (top + "\n");
  return ("\n" + (_x10 + (header + ("\n" + (body + ("\n" + attrs0))))));
}
function texTabular(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return texTabularDo($std_regex._index_($std_regex.groups(cap), 1), "", $std_regex._index_($std_regex.groups(cap), 2), $std_regex._index_($std_regex.groups(cap), 3), cap, context);
}
function texTabularX(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return texTabularDo($std_regex._index_($std_regex.groups(cap), 2), $std_regex._index_($std_regex.groups(cap), 3), $std_regex._index_($std_regex.groups(cap), 4), $std_regex._index_($std_regex.groups(cap), 5), cap, context);
}
function texTextColor(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var attrs = extractColor($std_regex._index_($std_regex.groups(cap), 1), $std_regex._index_($std_regex.groups(cap), 2));
  return ("[" + ($texParserBase.parse($std_regex._index_($std_regex.groups(cap), 3), context) + ("]" + $texParserBase.joinAttrs(attrs))));
}
function texTheBibliography(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var numcite = (".bib-" + $common.show($common.mode($texParserBase.citestyle(context))));
  var _x1 = $std_core.bool_2($texParserBase.bststyle(context));
  if (_x1) {
    var _x0 = (" ; data-style:" + $texParserBase.quote($texParserBase.bststyle(context)));
  }
  else {
    var _x0 = "";
  }
  return ("~ Begin Bibliography { " + (numcite + (" ; caption:" + ($texParserBase.quote($texParserBase.unbrace($std_regex._index_($std_regex.groups(cap), 1))) + (_x0 + (" }\n" + ($texParserBase.parse(($std_regex._index_($std_regex.groups(cap), 2) + "\n\n"), context) + "\n~ End Bibliography\n")))))));
}
function texTikzCmd(cap, context)  /* forall<a> (cap : std/regex/matched, context : a) -> string */  {
  return ("$\\tikz[" + ($std_regex._index_($std_regex.groups(cap), 1) + ("]{" + ($std_regex._index_($std_regex.groups(cap), 2) + "}${math-needpdf:true}"))));
}
function texTikzEnv(cap, context)  /* forall<a> (cap : std/regex/matched, context : a) -> string */  {
  return ("~ Snippet\n\\begin{tikzpicture}" + ($std_regex._index_($std_regex.groups(cap), 1) + "\\end{tikzpicture}\n~\n"));
}
function texToc(__cap, __context)  /* forall<a> (_cap : std/regex/matched, _context : a) -> string */  {
  return "\n[TOC]\n";
}
function texToday(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return "&date;";
}
function texTof(__cap, __context)  /* forall<a> (_cap : std/regex/matched, _context : a) -> string */  {
  return "\n[TOC=tof]\n";
}
function texUncover(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return ("[" + ($texParserBase.parse($std_regex._index_($std_regex.groups(cap), 3), context) + "]{.fragment}"));
}
function texUpright(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var txt = $std_regex._index_($std_regex.groups(cap), 1);
  if ((txt === "")) {
    return "";
  }
  else {
    return ("[" + ($texParserBase.parse(txt, context) + "]{font-style:normal}"));
  }
}
function texUrl(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var txt = $texParserBase.unbrace($std_regex._index_($std_regex.groups(cap), 1));
  var url = urlEncode(txt);
  if ((txt === "")) {
    return "";
  }
  else {
    if ((txt === url)) {
      return ("<" + (txt + ">"));
    }
    else {
      return ("[" + (txt + ("](" + (urlEncode(txt) + ")"))));
    }
  }
}
function texUrlPrefix(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return "Available at ";
}
function texVSkip(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  return ("\n~ Empty { height:\'" + (texLength($std_regex._index_($std_regex.groups(cap), 1)) + "\' }\n\n~\n"));
}
function texVSpace(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> string */  {
  return ("\n~ Empty { height:\'" + (texLength($std_regex._index_($std_regex.groups(cap), 1)) + "\' }\n\n~\n"));
}
function texVSpacePara(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  return ($texParserBase.parse($std_regex._index_($std_regex.groups(cap), 2), context) + ("{ margin-top:" + ($texParserBase.quote(texLength($std_regex._index_($std_regex.groups(cap), 1))) + "}\n\n")));
}
function texWrapFigure(cap, context)  /* (cap : std/regex/matched, context : texParserBase/texContext) -> string */  {
  var _x1 = (($std_regex._index_($std_regex.groups(cap), 2) === "r") || (($std_regex._index_($std_regex.groups(cap), 2) === "R") || (($std_regex._index_($std_regex.groups(cap), 2) === "o") || ($std_regex._index_($std_regex.groups(cap), 2) === "O"))));
  var _x0 = (_x1) ? "float:right; margin-left:1em" : "float:left; margin-right:1em";
  var attrs = $std_core.Cons($texParserBase.makeAttr("width", texLength($std_regex._index_($std_regex.groups(cap), 3))), $std_core.Cons($texParserBase.makeAttr("lines", $std_regex._index_($std_regex.groups(cap), 1)), $std_core.Cons(_x0, $std_core.Nil)));
  return texCaptionedXX("figure", $std_regex._index_($std_regex.groups(cap), 4), "", attrs, context);
}
 
// koka exports:
return { 'rxCentering': rxCentering, 'rxFrameTitle': rxFrameTitle, 'rxLabel': rxLabel, 'rxNonIdChar': rxNonIdChar, 'toIdentifier': toIdentifier, 'beamerExtract': beamerExtract, 'rxKeyVal': rxKeyVal, 'beamerOptions': beamerOptions, 'parseColor': parseColor, 'parseColors': parseColors, 'parseFloatColor': parseFloatColor, 'parseFloatColors': parseFloatColors, 'extractColorX': extractColorX, 'extractColor': extractColor, 'rxCaption': rxCaption, 'extractLabelCaption': extractLabelCaption, 'rxAuthorTitle': rxAuthorTitle, 'rxAuthorYear': rxAuthorYear, 'rxNewblock': rxNewblock, 'rxNonSearch': rxNonSearch, 'rxSpaces': rxSpaces, 'makeBibitem': makeBibitem, 'rxCiteSep': rxCiteSep, 'rxHline': rxHline, 'rxMathNl': rxMathNl, 'rxNoAlign': rxNoAlign, 'rxNonLetter': rxNonLetter, 'rxNoSpec': rxNoSpec, 'rxRowEnd': rxRowEnd, 'rxRowNl': rxRowNl, 'rxSpec': rxSpec, 'rxUrlReserved': rxUrlReserved, 'texAccent': texAccent, 'texAcks': texAcks, 'texAlign': texAlign, 'texAlwaysIgnore': texAlwaysIgnore, 'texAlwaysIgnore3': texAlwaysIgnore3, 'texAlwaysIgnore4': texAlwaysIgnore4, 'texAlwaysIgnore5': texAlwaysIgnore5, 'texAppendix': texAppendix, 'texAttribute': texAttribute, 'texBblName': texBblName, 'texBeginCaptionBlock': texBeginCaptionBlock, 'texLength': texLength, 'texBeginMinipage': texBeginMinipage, 'texBibinfo': texBibinfo, 'texBibitem': texBibitem, 'texBibitemCiteApa': texBibitemCiteApa, 'texBibitemCiteAuthorYear': texBibitemCiteAuthorYear, 'texBibitemCiteName': texBibitemCiteName, 'texBibliography': texBibliography, 'texCaptionedXX': texCaptionedXX, 'texCaptionedX': texCaptionedX, 'texCaptioned': texCaptioned, 'texChar': texChar, 'texCite': texCite, 'texCiteAuthorYear': texCiteAuthorYear, 'texClassCmd': texClassCmd, 'texCode': texCode, 'texColorBox': texColorBox, 'texColumn': texColumn, 'texCommandClass': texCommandClass, 'texComment': texComment, 'texDash': texDash, 'urlEncode': urlEncode, 'texDoi': texDoi, 'texQuot': texQuot, 'texDquot': texDquot, 'texEmph': texEmph, 'texEmptyLine': texEmptyLine, 'texEndCaptionBlock': texEndCaptionBlock, 'texEntities': texEntities, 'texEntityCmd': texEntityCmd, 'texEntityCmd0': texEntityCmd0, 'texEnvBegin': texEnvBegin, 'texEnvEnd': texEnvEnd, 'texFilename': texFilename, 'texFontSizeMap': texFontSizeMap, 'texFontSize': texFontSize, 'texFontSizes': texFontSizes, 'texFootnote': texFootnote, 'texFrameX': texFrameX, 'texFrame': texFrame, 'texFrameCmd': texFrameCmd, 'texGenericCommand': texGenericCommand, 'texGroup': texGroup, 'texHarvarditem': texHarvarditem, 'texHSkip': texHSkip, 'texHSpace': texHSpace, 'texIgnore': texIgnore, 'texImage': texImage, 'texInclude': texInclude, 'texIndent': texIndent, 'texInst': texInst, 'texItemX': texItemX, 'texItem': texItem, 'texItemPause': texItemPause, 'texKeep': texKeep, 'texLabeled': texLabeled, 'texLineBreak': texLineBreak, 'texList': texList, 'texListing': texListing, 'texListingEnd': texListingEnd, 'texMakeTitle': texMakeTitle, 'texMathDisplay': texMathDisplay, 'texMathEnv': texMathEnv, 'texMathInline': texMathInline, 'texMathSnippet': texMathSnippet, 'texMBox': texMBox, 'texMonospace': texMonospace, 'texNoIndent': texNoIndent, 'texNormal': texNormal, 'texOther': texOther, 'texPageBreak': texPageBreak, 'texVAlign': texVAlign, 'texParBox': texParBox, 'texRaiseBox': texRaiseBox, 'texRaw': texRaw, 'texRef': texRef, 'texRoman': texRoman, 'texRule': texRule, 'texSans': texSans, 'texsects': texsects, 'texsect': texsect, 'texSection': texSection, 'texSkip': texSkip, 'texSlanted': texSlanted, 'texSmallcaps': texSmallcaps, 'texSquot': texSquot, 'texStrong': texStrong, 'texTabularDo': texTabularDo, 'texTabular': texTabular, 'texTabularX': texTabularX, 'texTextColor': texTextColor, 'texTheBibliography': texTheBibliography, 'texTikzCmd': texTikzCmd, 'texTikzEnv': texTikzEnv, 'texToc': texToc, 'texToday': texToday, 'texTof': texTof, 'texUncover': texUncover, 'texUpright': texUpright, 'texUrl': texUrl, 'texUrlPrefix': texUrlPrefix, 'texVSkip': texVSkip, 'texVSpace': texVSpace, 'texVSpacePara': texVSpacePara, 'texWrapFigure': texWrapFigure };
});