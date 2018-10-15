// koka generated module: "texParserBase"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_dict', './std_string', './std_regex', './std_crypto', './std_path', './common', './entity', './texCommon'], function($std_core, $std_dict, $std_string, $std_regex, $std_crypto, $std_path, $common, $entity, $texCommon) {
"use strict";
 
// koka declarations:
function TexContext(grammar, citestyle, bststyle, ignore, name, texparse)  /* (grammar : common/grammar<string,texContext>, citestyle : common/citestyle, bststyle : string, ignore : bool, name : string, texparse : (context : texContext, input : string) -> string) -> texContext */  {
  return { grammar: grammar, citestyle: citestyle, bststyle: bststyle, ignore: ignore, name: name, texparse: texparse };
}
function MRule(regex, keys, values, replacer)  /* (regex : std/regex/regex, keys : list<string>, values : (cap : std/regex/matched, context : texContext) -> list<string>, replacer : (cap : std/regex/matched) -> string) -> mRule */  {
  return { regex: regex, keys: keys, values: values, replacer: replacer };
}
 
// Automatically generated. Retrieves the `grammar` constructor field of the ":texContext" type.
function grammar(texContext)  /* (texContext : texContext) -> common/grammar<string,texContext> */  {
  return texContext.grammar;
}
 
// Automatically generated. Retrieves the `citestyle` constructor field of the ":texContext" type.
function citestyle(texContext)  /* (texContext : texContext) -> common/citestyle */  {
  return texContext.citestyle;
}
 
// Automatically generated. Retrieves the `bststyle` constructor field of the ":texContext" type.
function bststyle(texContext)  /* (texContext : texContext) -> string */  {
  return texContext.bststyle;
}
 
// Automatically generated. Retrieves the `ignore` constructor field of the ":texContext" type.
function ignore(texContext)  /* (texContext : texContext) -> bool */  {
  return texContext.ignore;
}
 
// Automatically generated. Retrieves the `name` constructor field of the ":texContext" type.
function name(texContext)  /* (texContext : texContext) -> string */  {
  return texContext.name;
}
 
// Automatically generated. Retrieves the `texparse` constructor field of the ":texContext" type.
function texparse(texContext)  /* (texContext : texContext) -> ((context : texContext, input : string) -> string) */  {
  return texContext.texparse;
}
function _copy(_this, grammar0, citestyle0, bststyle0, ignore0, name0, texparse0)  /* (texContext, grammar : ?common/grammar<string,texContext>, citestyle : ?common/citestyle, bststyle : ?string, ignore : ?bool, name : ?string, texparse : ?(context : texContext, input : string) -> string) -> texContext */  {
  var grammar_128 = (grammar0 !== undefined) ? grammar0 : grammar(_this);
  var citestyle_136 = (citestyle0 !== undefined) ? citestyle0 : citestyle(_this);
  var bststyle_142 = (bststyle0 !== undefined) ? bststyle0 : bststyle(_this);
  var ignore_155 = (ignore0 !== undefined) ? ignore0 : ignore(_this);
  var name_177 = (name0 !== undefined) ? name0 : name(_this);
  var texparse_184 = (texparse0 !== undefined) ? texparse0 : texparse(_this);
  return TexContext(grammar_128, citestyle_136, bststyle_142, ignore_155, name_177, texparse_184);
}
 
// Automatically generated. Retrieves the `regex` constructor field of the ":mRule" type.
function regex(mRule)  /* (mRule : mRule) -> std/regex/regex */  {
  return mRule.regex;
}
 
// Automatically generated. Retrieves the `keys` constructor field of the ":mRule" type.
function keys(mRule)  /* (mRule : mRule) -> list<string> */  {
  return mRule.keys;
}
 
// Automatically generated. Retrieves the `values` constructor field of the ":mRule" type.
function values(mRule)  /* (mRule : mRule) -> ((cap : std/regex/matched, context : texContext) -> list<string>) */  {
  return mRule.values;
}
 
// Automatically generated. Retrieves the `replacer` constructor field of the ":mRule" type.
function replacer(mRule)  /* (mRule : mRule) -> ((cap : std/regex/matched) -> string) */  {
  return mRule.replacer;
}
function _copy_1(_this, regex0, keys0, values0, replacer0)  /* (mRule, regex : ?std/regex/regex, keys : ?list<string>, values : ?(cap : std/regex/matched, context : texContext) -> list<string>, replacer : ?(cap : std/regex/matched) -> string) -> mRule */  {
  var regex_248 = (regex0 !== undefined) ? regex0 : regex(_this);
  var keys_273 = (keys0 !== undefined) ? keys0 : keys(_this);
  var values_280 = (values0 !== undefined) ? values0 : values(_this);
  var replacer_287 = (replacer0 !== undefined) ? replacer0 : replacer(_this);
  return MRule(regex_248, keys_273, values_280, replacer_287);
}
function _createTexContext(grammar0, citestyle0, bststyle0, ignore0, name0, texparse0)  /* (grammar : common/grammar<string,texContext>, citestyle : ?common/citestyle, bststyle : string, ignore : ?bool, name : ?string, texparse : (context : texContext, input : string) -> string) -> texContext */  {
  var citestyle_306 = (citestyle0 !== undefined) ? citestyle0 : $common.citeAuto;
  var ignore_310 = (ignore0 !== undefined) ? ignore0 : true;
  var name_314 = (name0 !== undefined) ? name0 : "";
  return TexContext(grammar0, citestyle_306, bststyle0, ignore_310, name_314, texparse0);
}
function metaAddSpace(cap)  /* (cap : std/regex/matched) -> string */  {
  return ($std_regex.matched(cap) + " ");
}
function metaEmpty(cap)  /* (cap : std/regex/matched) -> string */  {
  return " ";
}
function metaKeep(cap)  /* (cap : std/regex/matched) -> string */  {
  return $std_regex.matched(cap);
}
function metaNone(__cap, __context)  /* forall<a> (_cap : std/regex/matched, _context : a) -> list<string> */  {
  return $std_core.Nil;
}
 
/* don't include these as packages */
var stdPackages = $std_core.join_4($std_core.conslist(["iftex", "etoolbox", "xkeyval", "xcolor", "mdframed", "graphicx", "tablefootnote", "css", "array", "longtable", "enumitem", "booktabs", "hyperref", "pdfcomment", "wrapfig", "madoko", "amsmath", "amsfonts", "amssymb", "stmaryrd", "textcomp", "pifont", "inputenc", "fontenc", "ae", "aecompl", "enumerate", "color"], $std_core.Nil), ";");
function unbrace(s)  /* (s : string) -> string */  {
  var _x0 = ($std_core.startsWith(s, "{") && ((s).indexOf("}")) === (((s).length - 1)|0));
  if (_x0) {
    return $std_core.substr_1(s, 1, (((s).length - 2)|0));
  }
  else {
    return s;
  }
}
function metaOptionValue(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> list<string> */  {
  var pkg = $std_string.trim(unbrace($std_regex._index_($std_regex.groups(cap), 2)));
  if (((stdPackages).indexOf(pkg) >= 0)) {
    return $std_core.Nil;
  }
  else {
    $std_core._unit_;
  }
  var _x1 = $std_core.isEmpty($std_regex._index_($std_regex.groups(cap), 1));
  if (_x1) {
    var _x0 = "";
  }
  else {
    var _x0 = ("[" + ($std_regex._index_($std_regex.groups(cap), 1) + "]"));
  }
  return $std_core.Cons((_x0 + $std_string.trim(unbrace($std_regex._index_($std_regex.groups(cap), 2)))), $std_core.Nil);
}
function parse(txt, context)  /* (txt : string, context : texContext) -> string */  {
  return texparse(context)(context, txt);
}
function metaTexValue(cap, context)  /* (cap : std/regex/matched, context : texContext) -> list<string> */  {
  return $std_core.Cons(parse($std_regex._index_($std_regex.groups(cap), 1), context), $std_core.Nil);
}
function metaTexValue3(cap, context)  /* (cap : std/regex/matched, context : texContext) -> list<string> */  {
  return $std_core.map_3($std_core.list(1, 3), function(i  /* int */ ) {  return parse($std_regex._index_($std_regex.groups(cap), i), context);});
}
function metaValueBib(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> list<string> */  {
  var bibs = $std_core.split_1($std_string.trim(unbrace($std_regex._index_($std_regex.groups(cap), 1))), ",");
  return $std_core.Cons(((bibs).join(";")), $std_core.Nil);
}
function metaValueBibStyle(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> list<string> */  {
  var style = $std_string.trim(unbrace($std_regex._index_($std_regex.groups(cap), 1)));
  var _x0 = ((style === "plain")) ? "plainnat" : style;
  return $std_core.Cons(_x0, $std_core.Nil);
}
var texargg = ("(?:\\{" + ($texCommon.texargs + "\\})"));
var metadataGrammar = $std_core.conslist([MRule($std_regex.regex("% *\\\\", undefined, undefined), $std_core.Nil, metaNone, metaAddSpace), MRule($std_regex.regex(("\\\\usepackage\\b\\s*" + ($texCommon.optarg + ("?\\s*" + $texCommon.texarg))), undefined, undefined), $std_core.Cons("Package", $std_core.Nil), metaOptionValue, metaEmpty), MRule($std_regex.regex(("\\\\title\\b\\s*" + texargg), undefined, undefined), $std_core.Cons("Title", $std_core.Nil), metaTexValue, metaEmpty), MRule($std_regex.regex(("\\\\subtitle\\b\\s*" + texargg), undefined, undefined), $std_core.Cons("Sub Title", $std_core.Nil), metaTexValue, metaEmpty), MRule($std_regex.regex(("\\\\date\\b\\s*" + texargg), undefined, undefined), $std_core.Cons("Title Note", $std_core.Nil), metaTexValue, metaEmpty), MRule($std_regex.regex(("\\\\bibliographystyle\\b\\s*" + texargg), undefined, undefined), $std_core.Cons("Bib Style", $std_core.Nil), metaValueBibStyle, metaEmpty), MRule($std_regex.regex(("\\\\bibliography\\b\\s*" + texargg), undefined, undefined), $std_core.Cons("Bibliography", $std_core.Nil), metaValueBib, metaKeep), MRule($std_regex.regex(("\\\\authorinfo\\b\\s*" + (texargg + ("\\s*" + (texargg + ("\\s*" + texargg))))), undefined, undefined), $std_core.Cons("Author", $std_core.Cons("Address", $std_core.Cons("Email", $std_core.Nil))), metaTexValue3, metaEmpty), MRule($std_regex.regex(("\\\\(?:IEEEauthorblockN)\\b\\s*" + texargg), undefined, undefined), $std_core.Cons("Author", $std_core.Nil), metaTexValue, metaEmpty), MRule($std_regex.regex(("\\\\(?:IEEEauthorblockA)\\b\\s*" + texargg), undefined, undefined), $std_core.Cons("Address", $std_core.Nil), metaTexValue, metaEmpty), MRule($std_regex.regex(("\\\\(?:author)\\b\\s*" + texargg), undefined, undefined), $std_core.Cons("Author", $std_core.Nil), metaTexValue, metaEmpty), MRule($std_regex.regex(("\\\\(?:address)\\b\\s*" + texargg), undefined, undefined), $std_core.Cons("Address", $std_core.Nil), metaTexValue, metaEmpty), MRule($std_regex.regex(("\\\\email\\b\\s*" + texargg), undefined, undefined), $std_core.Cons("Email", $std_core.Nil), metaTexValue, metaEmpty), MRule($std_regex.regex(("\\\\(?:institute|affiliation|affaddr)\\b\\s*" + texargg), undefined, undefined), $std_core.Cons("Affiliation", $std_core.Nil), metaTexValue, metaEmpty), MRule($std_regex.regex(("\\\\authorrunning\\b\\s*" + texargg), undefined, undefined), $std_core.Cons("Author Running", $std_core.Nil), metaTexValue, metaEmpty), MRule($std_regex.regex(("\\\\titlerunning\\b\\s*" + texargg), undefined, undefined), $std_core.Cons("Title Running", $std_core.Nil), metaTexValue, metaEmpty)], $std_core.Nil);
var rxMetaNL = $std_regex.regex("\\r?\\n(?:[ ]{1,4}|\\t)?", undefined, undefined);
function texMeta(key, value)  /* (key : string, value : string) -> string */  {
  var rvalue = $std_string.trim($std_regex.replaceAll_1(unbrace(value), rxMetaNL, "\n    ", undefined));
  if ((rvalue === "")) {
    return "";
  }
  else {
    return ($std_core.fill(unbrace(key), 12, undefined) + (": " + rvalue));
  }
}
function extractMeta(text0, context, mdata0)  /* (text0 : string, context : texContext, mdata0 : list<string>) -> (list<string>, string) */  {
  var mdata = { value: mdata0 };
  var content = $std_core.foldl(metadataGrammar, text0, function(text  /* string */ , mrule  /* mRule */ ) {  return $std_regex.replaceAll(text, regex(mrule), function(cap  /* std/regex/matched */ ) {  var metas = $std_core.zipWith(keys(mrule), values(mrule)(cap, context), texMeta); ((mdata).value = $std_core._plus__3(((mdata).value), metas)); return replacer(mrule)(cap);}, undefined);});
  return $std_core._tuple2_(((mdata).value), content);
}
function indent4(txt)  /* (txt : string) -> string */  {
  return (($std_core.map_5($std_core.split_1(txt, "\n"), function(s  /* string */ ) {  return ("    " + s);})).join("\n"));
}
function joinAttrs(keyvals)  /* (keyvals : list<string>) -> string */  {
  var kvs = $std_core.join_4($std_core.remove(keyvals, $std_core.isEmpty), " ; ");
  if ((kvs === "")) {
    return "";
  }
  else {
    return ("{ " + (kvs + " }"));
  }
}
function quote(s)  /* (s : string) -> string */  {
  var hasdquot = ((s).indexOf("\"") >= 0);
  var hassquot = ((s).indexOf("\'") >= 0);
  if (((s).indexOf("\"") >= 0)) {
    if (((s).indexOf("\'") >= 0)) {
      return ("\"" + ((s).replace(new RegExp(("\"").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'),"&quot;") + "\""));
    }
    else {
      return ("\'" + (s + "\'"));
    }
  }
  else {
    return ("\"" + (s + "\""));
  }
}
var rxNl = $std_regex.regex("\\r?\\n", undefined, undefined);
function makeAttr(key, value)  /* (key : string, value : string) -> string */  {
  if ((value === "")) {
    return "";
  }
  else {
    return (key + (":" + quote($std_regex.replaceAll_1(value, rxNl, "&nl;", undefined))));
  }
}
function metaValue(cap, __context)  /* forall<a> (cap : std/regex/matched, _context : a) -> list<string> */  {
  return $std_core.Cons(unbrace($std_regex._index_($std_regex.groups(cap), 1)), $std_core.Nil);
}
var overlay = "(?:<([^>\\n]*)>)";
var rxSection = $std_regex.regex(("\\\\(sub)?section\\b\\*?\\s*" + ($texCommon.optarg + ("?" + ($texCommon.texarg + "\\s*")))), undefined, undefined);
function removeSections(txt)  /* (txt : string) -> string */  {
  return $std_regex.replaceAll_1(txt, rxSection, "", undefined);
}
var rxDocument = $std_regex.regex("^([\\s\\S]*?)\\n *\\\\begin{document}([\\s\\S]*?)\\n *\\\\end{document}", undefined, undefined);
var rxNL0 = $std_regex.regex("^[ \\t]*\\r?\\n|\\r?\\n$", undefined, undefined);
function singleAttr(key, value)  /* (key : string, value : string) -> string */  {
  return joinAttrs($std_core.Cons(makeAttr(key, value), $std_core.Nil));
}
var special = "\\\\{}~*_\\[\\]#\\$`%\\n\\-";
function texDocClass(cap, context)  /* (cap : std/regex/matched, context : texContext) -> string */  {
  var docClass = $std_string.trim(unbrace($std_regex._index_($std_regex.groups(cap), 2)));
  var comment = $std_core.join_4($std_core.Cons("<!-- LaTeX conversion", $std_core.Cons("  Drag&Drop further .tex/.bib/.cls/.sty/.bst or image files in the editor window", $std_core.Cons("  Conversion reference at: http://research.microsoft.com/en-us/um/people/daan/madoko/doc/reference.html#texconv", $std_core.Cons("-->", $std_core.Nil)))), "\n");
  if ((docClass === "beamer")) {
    var mdata0 = $std_core.Cons("[INCLUDE=presentation]", $std_core.Cons("Reveal Theme: sky", $std_core.Nil));
  }
  else {
    var mdata0 = $std_core.zipWith($std_core.Cons("Doc Class", $std_core.Nil), metaOptionValue(cap, context), texMeta);
  }
  var _x0 = extractMeta($std_regex._index_($std_regex.groups(cap), 3), context, mdata0);
  var _x1 = ((docClass === "book")) ? "" : "Heading Base: 2";
  var mdata2 = $std_core._plus__3(_x0.fst, $std_core.Cons(_x1, $std_core.Cons("Logo        : True", $std_core.Nil)));
  var content = ((docClass === "beamer")) ? removeSections(_x0.snd) : _x0.snd;
  var _x2 = $std_regex.find(content, rxDocument, undefined);
  if (_x2 == null) {
    var _x1 = $std_core._tuple2_(parse(content, context), mdata2);
  }
  else {
    var header = $std_string.trim($std_regex._index_($std_regex.groups(_x2.unJust), 1));
    if ($std_core.isEmpty(header)) {
      var hdata = $std_core.Nil;
    }
    else {
      var hdata = $std_core.Cons($std_core.join_4($std_core.Cons("TeX Header  :\n    % Latex definitions. If you get errors in math- or PDF generation:", $std_core.Cons("    % * Move commands that are not used in math under \'Tex Header*\' metadata", $std_core.Cons("    % * Move commands specific to math in a \'~ MathDefs\' block", $std_core.Cons("    ", $std_core.Cons(indent4($std_string.trim(header)), $std_core.Nil))))), "\n"), $std_core.Nil);
    }
    var _x1 = $std_core._tuple2_(parse($std_regex._index_($std_regex.groups(_x2.unJust), 2), context), $std_core._plus__3($std_core.Cons(comment, $std_core.Nil), $std_core._plus__3(mdata2, hdata)));
  }
  return ($std_core.join_4(_x1.snd, "\n") + ("\n\n" + _x1.fst));
}
function trimNL(s)  /* (s : string) -> string */  {
  return $std_regex.replaceAll_1(s, rxNL0, "", undefined);
}
function trimx(s, n)  /* (s : string, n : int) -> string */  {
  return $std_core.substr_1(s, n, (((s).length - $std_core.intMultiply(2,n))|0));
}
 
// koka exports:
return { 'TexContext': TexContext, 'grammar': grammar, 'citestyle': citestyle, 'bststyle': bststyle, 'ignore': ignore, 'name': name, 'texparse': texparse, '_copy': _copy, 'regex': regex, 'keys': keys, 'values': values, 'replacer': replacer, '_copy_1': _copy_1, '_createTexContext': _createTexContext, 'metaAddSpace': metaAddSpace, 'metaEmpty': metaEmpty, 'metaKeep': metaKeep, 'metaNone': metaNone, 'stdPackages': stdPackages, 'unbrace': unbrace, 'metaOptionValue': metaOptionValue, 'parse': parse, 'metaTexValue': metaTexValue, 'metaTexValue3': metaTexValue3, 'metaValueBib': metaValueBib, 'metaValueBibStyle': metaValueBibStyle, 'texargg': texargg, 'metadataGrammar': metadataGrammar, 'rxMetaNL': rxMetaNL, 'texMeta': texMeta, 'extractMeta': extractMeta, 'indent4': indent4, 'joinAttrs': joinAttrs, 'quote': quote, 'rxNl': rxNl, 'makeAttr': makeAttr, 'metaValue': metaValue, 'overlay': overlay, 'rxSection': rxSection, 'removeSections': removeSections, 'rxDocument': rxDocument, 'rxNL0': rxNL0, 'singleAttr': singleAttr, 'special': special, 'texDocClass': texDocClass, 'trimNL': trimNL, 'trimx': trimx };
});