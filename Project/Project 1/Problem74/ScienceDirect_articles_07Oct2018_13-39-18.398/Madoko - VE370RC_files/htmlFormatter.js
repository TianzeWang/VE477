// koka generated module: "htmlFormatter"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_dict', './std_string', './std_regex', './std_log', './std_path', './common', './inline', './options', './codeAlign', './attributes'], function($std_core, $std_dict, $std_string, $std_regex, $std_log, $std_path, $common, $inline, $options, $codeAlign, $attributes) {
"use strict";
 
// koka declarations:
 
// output a html tag with a given body and attributes
function tag(tagName, body, attrs)  /* (tagName : string, body : string, attrs : ?string) -> string */  {
  var attrs_65 = (attrs !== undefined) ? attrs : "";
  var _x0 = ((attrs_65 === "") && (tagName === "span"));
  if (_x0) {
    return body;
  }
  else {
    return ("<" + (tagName + (attrs_65 + (">" + (body + ("</" + (tagName + ">")))))));
  }
}
var rxComment = $std_regex.regex("/\\*[\\s\\S]*?\\*/", undefined, undefined);
var rxEmptyLines = $std_regex.regex("\\r?\\n([ \\t]*\\r?\\n)+", undefined, undefined);
function compressCss(css)  /* (css : string) -> string */  {
  return $std_regex.replaceAll_1($std_regex.replaceAll_1(css, rxComment, "", undefined), rxEmptyLines, "\n", undefined);
}
function cssEscape(c)  /* (c : char) -> string */  {
  var _x0 = ((c >= ' ') && ((c <= '~') && (c !== '\\')));
  if (_x0) {
    return (c);
  }
  else {
    return ("\\" + ($std_core.showHex((c).charCodeAt(0), undefined, undefined) + " "));
  }
}
function cssQuote(s)  /* (s : string) -> string */  {
  return $std_core.join_3($std_core.map_3($std_core.list_5(s), cssEscape));
}
function escape(s)  /* (s : string) -> string */  {
  return $common.htmlEscape(s, true);
}
function htmlQuote(s)  /* (s : string) -> string */  {
  return ("\"" + (escape(s) + "\""));
}
function formatKeyval(key, value, tag0)  /* (key : string, value : string, tag : string) -> string */  {
  if ($std_core.startsWith(key, "html-")) {
    return (((key).substr(5)) + ("=" + htmlQuote(value)));
  }
  else {
    if ($std_core.startsWith(key, "tex-")) {
      return "";
    }
    else {
      if ($std_core.startsWith(key, "data-")) {
        return (key + ("=" + htmlQuote(value)));
      }
      else {
        var _x0 = ($std_core.startsWith(key, "cite-") || $std_core.startsWith(key, "math-"));
        if (_x0) {
          return ("data-" + (key + ("=" + htmlQuote(value))));
        }
        else {
          if ($std_core.startsWith(key, "css-")) {
            return (escape(((key).substr(4))) + (":" + cssQuote(value)));
          }
          else {
            var _x1 = (((key === "colspan") || (key === "column-span")) && ((tag0 === "td") || (tag0 === "th")));
            if (_x1) {
              return ("colspan=" + htmlQuote(value));
            }
            else {
              var _x2 = (((key === "target") && (tag0 === "a")) || ((key === "start") && (tag0 === "ol")));
              if (_x2) {
                return (key + ("=" + htmlQuote(value)));
              }
              else {
                var _x3 = (((key === "width") || ((key === "height") || (key === "text-align"))) && (tag0 === "span"));
                if (_x3) {
                  return ("display: inline-block; " + (key + (":" + cssQuote(value))));
                }
                else {
                  var _x4 = ((value === "") || ((key === "toc") || ((key === "toc-line") || ((key === "toc-depth") || ((key === "bookmark") || ((key === "language") || ((key === "bibdata") || ((key === "caption") || (key === "cite-label")))))))));
                  if (_x4) {
                    return "";
                  }
                  else {
                    if ((key === "font-family")) {
                      return (escape(key) + (":" + cssQuote((value).replace(new RegExp(("html-").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'),""))));
                    }
                    else {
                      return (escape(key) + (":" + cssQuote(value)));
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
var rxColon = $std_regex.regex("^[\\w\\-]+\\s*:", undefined, undefined);
function formatKeyvals(attrs, tag0)  /* (attrs : common/attrs, tag : string) -> string */  {
  var kvs = $std_core.filter($std_core.map_3($common.keyvals(attrs), function(kv  /* (string, string) */ ) {  return formatKeyval($std_core.fst(kv), $std_core.snd(kv), tag0);}), $std_core.bool_2);
  var _x0 = $std_core.partition(kvs, function(kv0  /* string */ ) {  return $std_regex.contains(kv0, rxColon, undefined);});
  if ($std_core.isNil(_x0.snd)) {
    var _x1 = "";
  }
  else {
    var _x1 = (" " + $std_core.join_4(_x0.snd, " "));
  }
  if ($std_core.isNil(_x0.fst)) {
    var _x2 = "";
  }
  else {
    var _x2 = (" style=" + htmlQuote($std_core.join_4(_x0.fst, ";")));
  }
  return (_x1 + _x2);
}
 
// Format attributes. If none, return the empty string, otherwise start with a space
function htmlFormat(attrs, tag0, sanitize)  /* (attrs : common/attrs, tag : string, sanitize : ?bool) -> string */  {
  var sanitize_3265 = (sanitize !== undefined) ? sanitize : true;
  var _x0 = ($common.empty(attrs) || sanitize_3265);
  if (_x0) {
    return "";
  }
  else {
    $std_core._unit_;
  }
  var _x1 = $common.hasKey(attrs, "list-style-type");
  match: {
    if (_x1 != null) {
      if ((_x1.unJust === "dash")){
        var _x0 = $std_core.Cons("list-style-type-dash", $std_core.Nil);
        break match;
      }
    }
    var _x0 = $std_core.Nil;
  }
  var classes = $std_core._plus__3($common.classes(attrs), _x0);
  var _x1 = ($common.name(attrs) === "");
  if (_x1) {
    var _x0 = "";
  }
  else {
    var _x0 = (" id=\"" + (escape($common.name(attrs)) + "\""));
  }
  if ($std_core.isNil(classes)) {
    var _x2 = "";
  }
  else {
    var _x2 = (" class=\"" + (escape($std_core.join_4(classes, " ")) + "\""));
  }
  return (_x0 + (_x2 + formatKeyvals(attrs, tag0)));
}
var rxScript = $std_regex.regex("([^\\{\\s]+)\\s*(?:\\{((?:[^\\\\\\}]|\\\\.)*)\\})?", undefined, undefined);
 
/* --------------------------------------
  Full header 
---------------------------------------- */
function embedScripts(options, scripts, metadata)  /* (options : options/options, scripts : string, metadata : std/dict/dict<string>) -> string */  {
  if ((scripts === "")) {
    return "";
  }
  else {
    var xlinks = $common.splitPaths($attributes.expandKeys(scripts, metadata));
    return $std_core.join_3($std_core.map_3(xlinks, function(xlink  /* string */ ) {  var _x1 = $std_regex.find(xlink, rxScript, undefined); if (_x1 == null) {  var _x0 = $std_core._tuple2_(xlink, $common.attrsNone);} else {  var _x0 = $std_core._tuple2_($std_regex._index_($std_regex.groups(_x1.unJust), 1), $attributes.parseAttrs($std_regex._index_($std_regex.groups(_x1.unJust), 2), "script", undefined));} var _x2 = $std_dict._lb__rb__2($options.embedinfos(options), _x0.fst); if (_x2 != null) {  if (($common.embedData(_x2.unJust) !== "")){  return ("<script " + (htmlFormat(_x0.snd, "script", false) + (">" + ($common.embedData(_x2.unJust) + ("\n//# sourceURL=" + (escape(_x0.fst) + "\n</script>\n"))))));}} if ($common.relative(_x0.fst)) {  $std_log.log("filesRefer", _x0.fst); $std_log.log("embed", _x0.fst);} else {  $std_core._unit_;} return ("<script src=\"" + (escape(_x0.fst) + ("\" " + (htmlFormat(_x0.snd, "script", false) + "></script>\n"))));}));
  }
}
function escapePre(s)  /* (s : string) -> string */  {
  return $common.htmlEscape(s, undefined);
}
var rxTag = $std_regex.regex("<[^\\n>]*>", undefined, undefined);
function extractText(s)  /* (s : string) -> string */  {
  return $std_regex.replaceAll_1(s, rxTag, "", undefined);
}
var rxWhite = $std_regex.regex("^\\s*$", undefined, undefined);
function isAllWhite(s)  /* (s : string) -> bool */  {
  return $std_regex.contains(s, rxWhite, undefined);
}
function fmtCtRows(context, rows)  /* (context : inline/inlineContext, rows : list<codeAlign/crow>) -> string */  {
  return $std_core.join_4($std_core.map_3(rows, function(row  /* codeAlign/crow */ ) {  return tag("tr", $std_core.join_3($std_core.mapIndexed(row, function(i  /* int */ , cell  /* codeAlign/ccell */ ) {  var empty = isAllWhite($codeAlign.content(cell)); var _x0 = $std_core.length_3(row) === ((i + 1)|0); var expander = (_x0) ? " expander" : ""; var _x0 = (empty) ? " empty" : ""; var classes = ("colspan" + ($std_core.show_1($codeAlign.span(cell)) + (expander + _x0))); var _x1 = $codeAlign.span(cell) > 1; if (_x1) {  var _x0 = (" colspan=\'" + ($std_core.show_1($codeAlign.span(cell)) + "\'"));} else {  var _x0 = "";} var attrs = (" class=\'" + (classes + ("\'" + _x0))); var _x0 = (empty) ? "&nbsp;" : $codeAlign.content(cell); return tag("td", _x0, attrs);})), "");}), "\n");
}
 
/* --------------------------------------
  Title 
---------------------------------------- */
function fmtField(context, elem, $class, txt)  /* (context : inline/inlineContext, elem : string, class : string, txt : string) -> string */  {
  if ((txt === "")) {
    return "";
  }
  else {
    $std_core._unit_;
  }
  return tag(elem, $inline.formatInline(context, txt, undefined), (" class=\'" + ($class + "\'")));
}
function translate(tagName, attrs, sanitize)  /* (tagName : string, attrs : common/attrs, sanitize : bool) -> string */  {
  var _x0 = ($common.empty(attrs) || sanitize);
  if (_x0) {
    return tagName;
  }
  else {
    $std_core._unit_;
  }
  var _x0 = ($common.htmlelem(attrs) !== "");
  return (_x0) ? $common.htmlelem(attrs) : tagName;
}
function fmtHtmlCmd(context, cmd, txt, attrs)  /* (context : inline/inlineContext, cmd : string, txt : string, attrs : common/attrs) -> string */  {
  if ((cmd === "")) {
    return txt;
  }
  else {
    return tag(translate(cmd, attrs, $inline.sanitize(context)), txt, htmlFormat(attrs, cmd, $inline.sanitize(context)));
  }
}
function fmtHtmlCodeToken(context, classes0, txt, lang, attrs)  /* (context : inline/inlineContext, classes0 : list<string>, txt : string, lang : string, attrs : common/attrs) -> string */  {
  var xclasses = $std_core.filter($common.classes(attrs), function(cname  /* string */ ) {  return !($common.contains(classes0, cname));});
  return fmtHtmlCmd(context, "span", txt, $common._copy(attrs, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, xclasses, undefined, undefined));
}
var rxEndSpaces = $std_regex.regex("  +$", undefined, true);
var rxSpaces = $std_regex.regex("[ \\t]+", undefined, undefined);
var rxToken = $std_regex.regex("<span\\s+.*?\\bclass=[\'\"]?(?:token *)?([^\"\']+)[\'\"]?[^>]*>([\\s\\S]*?)</span>", true, undefined);
function fmtHtmlCodeHilite(context, txt, startLine)  /* (context : inline/inlineContext, txt : string, startLine : bool) -> string */  {
  return $std_regex.replaceAll($std_regex.replaceAll_1(txt, rxEndSpaces, " ", undefined), rxToken, function(cap  /* std/regex/matched */ ) {  var classes = $std_core.list_4($std_regex.split($std_string.trim($std_core.toLower($std_regex._index_($std_regex.groups(cap), 1))), rxSpaces, undefined, undefined)); return fmtHtmlCodeToken(context, classes, $std_regex._index_($std_regex.groups(cap), 2), "", $common.attrsNone);}, undefined);
}
function fmtHtmlCodePlain(context, txt, startline)  /* (context : inline/inlineContext, txt : string, startline : bool) -> string */  {
  return escapePre(txt);
}
 
// output a html block tag
function tagBlock(tagName, body, attrs)  /* (tagName : string, body : string, attrs : ?string) -> string */  {
  var attrs_8181 = (attrs !== undefined) ? attrs : "";
  return ("\n<" + (tagName + (attrs_8181 + (">" + (body + ("</" + (tagName + ">")))))));
}
function fmtHtmlCodeTable(context, ct, attrs)  /* (context : inline/inlineContext, ct : codeAlign/codeTable, attrs : common/attrs) -> string */  {
  return tag("table", tagBlock("tbody", fmtCtRows(context, $codeAlign.rows(ct)), undefined), htmlFormat($common.addClass(attrs, "block"), "table", $inline.sanitize(context)));
}
 
// output a html block tag
function tagEnv(tagName, body, attrs, sanitize)  /* (tagName : string, body : string, attrs : ?common/attrs, sanitize : ?bool) -> string */  {
  var attrs_8423 = (attrs !== undefined) ? attrs : $common.attrsNone;
  var sanitize_8427 = (sanitize !== undefined) ? sanitize : true;
  return tagBlock(tagName, body, htmlFormat(attrs_8423, tagName, sanitize_8427));
}
function fmtHtmlEnv(context, env, txt, attrs)  /* (context : inline/inlineContext, env : string, txt : string, attrs : common/attrs) -> string */  {
  if ((env === "")) {
    return txt;
  }
  else {
    var _x1 = (env).length > 3;
    var _x0 = (_x1) ? "\n" : "";
    return tagEnv(translate(env, attrs, $inline.sanitize(context)), (_x0 + txt), attrs, $inline.sanitize(context));
  }
}
function fmtHtmlEscape(context, txt, allowEntity)  /* (context : inline/inlineContext, txt : string, allowEntity : bool) -> string */  {
  return $common.htmlEscape(txt, allowEntity);
}
function fmtHtmlFootnote(context, id, fn)  /* (context : inline/inlineContext, id : string, fn : inline/footnote) -> string */  {
  return tag("sup", tag("a", $inline.footnoteNum(fn), (" href=\"#fn-" + (escape(id) + ("\" " + ("title=\"" + (escape(extractText($inline.footnoteCaption(fn))) + ("\" " + "class=\"footnote-ref localref\" "))))))), (" id=\"back-fn-" + (escape(id) + "\" ")));
}
function fmtHtmlFull(html, options, metadata)  /* (html : string, options : options/options, metadata : std/dict/dict<string>) -> string */  {
  function expand(s)  /* (s : string) -> string */  {
    return $attributes.expandKeys(s, metadata);
  }
  function makeMeta(name, sep)  /* (name : string, sep : ?string) -> list<string> */  {
    var sep_8988 = (sep !== undefined) ? sep : "";
    var _x0 = $std_dict._lb__rb__2(metadata, name);
    if (_x0 == null) {
      return $std_core.Nil;
    }
    else {
      var evalue = escape(expand(_x0.unJust));
      var _x1 = ((sep_8988 === "")) ? evalue : (evalue).replace(new RegExp((";").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'),sep_8988);
      return $std_core.Cons(("name=\"" + (escape(name) + ("\" content=\"" + (_x1 + "\"")))), $std_core.Nil);
    }
  }
  var extensions = $std_core.join_4($std_core.map_3($common.splitPaths(expand($options.mjext($options.math(options)))), function(path  /* string */ ) {  var _x0 = ($std_core.endsWith(path, ".js")) ? path : (path + ".js"); return htmlQuote(_x0);}), ",");
  var meta = $std_core._plus__3($common.splitPaths(expand($options.htmlMeta(options))), $std_core._plus__3(makeMeta("copyright", undefined), $std_core._plus__3(makeMeta("license", undefined), $std_core._plus__3(makeMeta("keywords", ","), $std_core._plus__3(makeMeta("author", ","), makeMeta("description", undefined))))));
  var _x1 = ($options.title(options) === "");
  if (_x1) {
    var _x0 = "";
  }
  else {
    var _x0 = ("<title>" + (escape(expand($options.title(options))) + "</title>\n"));
  }
  var _x3 = ($options.css(options) === "");
  if (_x3) {
    var _x2 = "";
  }
  else {
    var links = $common.splitPaths(expand($options.css(options)));
    var _x2 = $std_core.join_3($std_core.map_3(links, function(xlink  /* string */ ) {  var _x5 = $std_regex.find(xlink, rxScript, undefined); if (_x5 == null) {  var _x4 = $std_core._tuple2_(xlink, $common.attrsNone);} else {  var _x4 = $std_core._tuple2_($std_regex._index_($std_regex.groups(_x5.unJust), 1), $attributes.parseAttrs($std_regex._index_($std_regex.groups(_x5.unJust), 2), "link", undefined));} var _x6 = $std_dict._lb__rb__2($options.embedinfos(options), _x4.fst); if (_x6 != null) {  if (($common.embedData(_x6.unJust) !== "")){  return ("<style type=\"text/css\" " + (htmlFormat(_x4.snd, "style", false) + (">\n/*# sourceURL=" + (escape(_x4.fst) + (" */\n" + (compressCss($common.embedData(_x6.unJust)) + "\n  </style>\n"))))));}} if ($common.relative(_x4.fst)) {  $std_log.log("filesRefer", _x4.fst); $std_log.log("embed", _x4.fst);} else {  $std_core._unit_;} return ("<link rel=\"stylesheet\" type=\"text/css\" href=\"" + (escape(_x4.fst) + ("\" " + (htmlFormat(_x4.snd, "link", false) + ">\n"))));}));
  }
  var _x8 = ($options.mathjax($options.math(options)) === "");
  if (_x8) {
    var _x7 = "";
  }
  else {
    if ((extensions === "")) {
      var _x9 = "";
    }
    else {
      var _x9 = ("       extensions: [" + (extensions + "]"));
    }
    var _x7 = $std_core.join_4($std_core.conslist(["<script type=\"text/x-mathjax-config\">", "  MathJax.Hub.Config({", "    tex2jax: {inlineMath: [[\'$\',\'$\']]},", "     TeX: { ", "       Macros: { mathid: [\'\\\\mathit{#1\\\\hspace{0.1ex}}\',1],", "                 mathkw: [\'\\\\mathsf{#1}\',1],", "                 mdmathindent: [\'\\\\hspace{#1ex}\',1],", "                 mathpre: [\'#1\',1],", "               },", _x9, "     }", "  });", "  MathJax.Hub.Register.StartupHook(\'TeX AMSmath Ready\',function () { ", "    MathJax.InputJax.TeX.Definitions.environment[\'mdmathpre\'] = [\'AMSarray\',null,null,null,\'l\',\'0em\',\'0em\'];", "  });", "</script>", "<script type=\"text/javascript\" class=\"preview\"", ("  src=\"" + (escape(expand($options.getMathjax($options.math(options)))) + "\">")), "</script>\n"], $std_core.Nil), "\n");
  }
  var _x11 = ($options.cssHeader(options) === "");
  if (_x11) {
    var _x10 = "";
  }
  else {
    var _x10 = ("<style>\n" + ($std_string.indent(expand($options.cssHeader(options)), undefined, undefined) + "\n</style>\n"));
  }
  var _x13 = ($options.jsHeader(options) === "");
  if (_x13) {
    var _x12 = "";
  }
  else {
    var _x12 = ("<script type=\"text/javascript\">\n" + ($std_string.indent(expand($options.jsHeader(options)), undefined, undefined) + "\n</script>\n"));
  }
  var htmlHead = ("<meta http-equiv=\"content-type\" content=\"text/html; charset=UTF-8\" />\n" + ("<meta name=\"generator\" content=\"Madoko, version " + ($options.version(options) + ("\" />\n" + ($std_core.join_3($std_core.map_3(meta, function(m  /* string */ ) {  return ("<meta " + (m + " />\n"));})) + (_x0 + (_x2 + (embedScripts(options, $options.scripts(options), metadata) + (_x7 + (expand($options.htmlHeader(options)) + ("\n" + (_x10 + _x12))))))))))));
  var _x1 = $std_core.bool_2($options.locale_1(options));
  if (_x1) {
    var _x0 = (" lang=\"" + ($options.locale_1(options) + "\""));
  }
  else {
    var _x0 = "";
  }
  var _x3 = ($options.jsFooter(options) === "");
  if (_x3) {
    var _x2 = "";
  }
  else {
    var _x2 = ("<script type=\"text/javascript\">\n" + ($std_string.indent(expand($options.jsFooter(options)), undefined, undefined) + "\n</script>\n"));
  }
  var htmlDoc = ("<!DOCTYPE html>\n<html" + (_x0 + (">\n" + ("<head>\n" + ($std_string.indent(htmlHead, undefined, undefined) + ("</head>\n" + ("<body class=\"madoko\">\n" + (html + ($options.svgDefs($options.math(options)) + ("\n</body>\n" + (embedScripts(options, $options.scriptsx(options), metadata) + (_x2 + (expand($options.htmlFooter(options)) + ("\n" + "</html>\n"))))))))))))));
  return htmlDoc;
}
function fmtHtmlLineInfo(context, lineInfo)  /* (context : inline/inlineContext, lineInfo : string) -> string */  {
  return ("<span data-line=\"" + (lineInfo + "\"></span>"));
}
var htmlImageExtensions = $std_core.Cons(".png", $std_core.Cons(".jpg", $std_core.Cons(".jpeg", $std_core.Cons(".svg", $std_core.Cons(".gif", $std_core.Cons(".tif", $std_core.Cons(".tiff", $std_core.Cons(".bmp", $std_core.Cons(".jpx", $std_core.Cons(".jp2", $std_core.Nil))))))))));
function fmtHtmlLink(context, isImage, link, content)  /* (context : inline/inlineContext, isImage : bool, link : common/link, content : string) -> string */  {
  if (isImage) {
    var hrefs0 = $common.expandChoices($common.href(link));
    match: {
      if (hrefs0 != null && hrefs0.tail == null) {
        if ((($std_core.toLower($std_path.extname(hrefs0.head)) === ".eps") || ($std_core.toLower($std_path.extname(hrefs0.head)) === ".pdf"))){
          var hrefs = $std_core.Cons(hrefs0.head, $std_core.Cons($std_path.changeExt(hrefs0.head, ".png"), $std_core.Nil));
          break match;
        }
      }
      var hrefs = hrefs0;
    }
    $std_core.foreach(hrefs, function(href0  /* string */ ) {  return ($common.relative(href0)) ? $std_log.log("filesRefer", href0) : $std_core._unit_;});
    var imgref = $common.pickExtension(htmlImageExtensions, hrefs);
    var _x0 = $std_dict._lb__rb__2($inline.embedinfos(context), imgref);
    match: {
      if (_x0 != null) {
        if (($common.embedData(_x0.unJust) !== "")){
          var href1 = $common.embedData(_x0.unJust);
          break match;
        }
      }
      ($common.relative(imgref)) ? $std_log.log("embed", imgref) : $std_core._unit_;
      var href1 = escape(imgref);
    }
    var _x1 = ($common.title(link) !== "");
    if (_x1) {
      var _x0 = (" title=\"" + (escape(extractText($common.title(link))) + "\""));
    }
    else {
      var _x0 = "";
    }
    if ((content !== "")) {
      var _x2 = (" alt=\"" + (escape(content) + "\""));
    }
    else {
      var _x2 = "";
    }
    if ($std_core.startsWith(imgref, "data:image")) {
      var _x3 = "";
    }
    else {
      var _x3 = (" data-path=\"" + (escape(imgref) + "\""));
    }
    var _x5 = ($common.linkid(link) !== "");
    if (_x5) {
      var _x4 = (" data-linkid=\"" + (escape($common.linkid(link)) + "\""));
    }
    else {
      var _x4 = "";
    }
    return ("<img src=\"" + (href1 + ("\"" + (_x0 + (_x2 + (_x3 + (_x4 + (htmlFormat($common.linkattrs(link), "img", $inline.sanitize(context)) + ">"))))))));
  }
  else {
    var _x7 = ($common.title(link) !== "");
    if (_x7) {
      var _x6 = (" title=\"" + (escape(extractText($common.title(link))) + "\""));
    }
    else {
      var _x6 = "";
    }
    var _x9 = ($common.linkid(link) !== "");
    if (_x9) {
      var _x8 = (" data-linkid=\"" + (escape($common.linkid(link)) + "\""));
    }
    else {
      var _x8 = "";
    }
    return ("<a href=\"" + (escape($common.href(link)) + ("\"" + (_x6 + (_x8 + (htmlFormat($common.linkattrs(link), "a", $inline.sanitize(context)) + (">" + (content + "</a>"))))))));
  }
}
var rxSvg = $std_regex.regex("^(\\s*<svg\\b)((?:[^\'\">]|\"[^\"]*\"|\'[^\']*\')*)(>)", undefined, undefined);
function fmtHtmlSvg(context, svg, attrs, alt)  /* (context : inline/inlineContext, svg : string, attrs : common/attrs, alt : string) -> string */  {
  return $std_regex.replace(svg, rxSvg, function(cap  /* std/regex/matched */ ) {  if ($std_core.bool_2(alt)) {  var _x0 = ("<desc>" + (escape(alt) + "</desc>"));} else {  var _x0 = "";} return ("<svg " + (htmlFormat(attrs, "svg", $inline.sanitize(context)) + ($std_regex._index_($std_regex.groups(cap), 2) + ($std_regex._index_($std_regex.groups(cap), 3) + _x0))));}, undefined);
}
function fmtRows(context, tbody, td, rows)  /* (context : inline/inlineContext, tbody : string, td : string, rows : list<common/row>) -> string */  {
  if ($std_core.isNil(rows)) {
    return "";
  }
  else {
    $std_core._unit_;
  }
  return tagBlock(tbody, $std_core.join_4($std_core.map_3(rows, function(row  /* common/row */ ) {  return tag("tr", $std_core.join_3($std_core.map_3($common.cells(row), function(cell  /* common/cell */ ) {  var _x0 = $common.hasKey($common.cellAttrs(cell), "rule-width"); if (_x0 != null) {  var cattrs1 = $common.addKeyvalIfNotExist($common.addKeyvalIfNotExist($common.cellAttrs(cell), "border-top-width", _x0.unJust), "border-bottom-width", _x0.unJust);} else {  var cattrs1 = $common.cellAttrs(cell);} return tag(td, $common.text_1(cell), htmlFormat(cattrs1, td, $inline.sanitize(context)));})), "");}), "\n"), undefined);
}
function fmtHtmlTable(context, head, body, colattrs, attrs)  /* (context : inline/inlineContext, head : list<common/row>, body : list<common/row>, colattrs : list<common/attrs>, attrs : common/attrs) -> string */  {
  return tag("table", (fmtRows(context, "thead", "th", head) + fmtRows(context, "tbody", "td", body)), htmlFormat($common.addClass(attrs, "block"), "table", $inline.sanitize(context)));
}
 
// koka exports:
return { 'tag': tag, 'rxComment': rxComment, 'rxEmptyLines': rxEmptyLines, 'compressCss': compressCss, 'cssEscape': cssEscape, 'cssQuote': cssQuote, 'escape': escape, 'htmlQuote': htmlQuote, 'formatKeyval': formatKeyval, 'rxColon': rxColon, 'formatKeyvals': formatKeyvals, 'htmlFormat': htmlFormat, 'rxScript': rxScript, 'embedScripts': embedScripts, 'escapePre': escapePre, 'rxTag': rxTag, 'extractText': extractText, 'rxWhite': rxWhite, 'isAllWhite': isAllWhite, 'fmtCtRows': fmtCtRows, 'fmtField': fmtField, 'translate': translate, 'fmtHtmlCmd': fmtHtmlCmd, 'fmtHtmlCodeToken': fmtHtmlCodeToken, 'rxEndSpaces': rxEndSpaces, 'rxSpaces': rxSpaces, 'rxToken': rxToken, 'fmtHtmlCodeHilite': fmtHtmlCodeHilite, 'fmtHtmlCodePlain': fmtHtmlCodePlain, 'tagBlock': tagBlock, 'fmtHtmlCodeTable': fmtHtmlCodeTable, 'tagEnv': tagEnv, 'fmtHtmlEnv': fmtHtmlEnv, 'fmtHtmlEscape': fmtHtmlEscape, 'fmtHtmlFootnote': fmtHtmlFootnote, 'fmtHtmlFull': fmtHtmlFull, 'fmtHtmlLineInfo': fmtHtmlLineInfo, 'htmlImageExtensions': htmlImageExtensions, 'fmtHtmlLink': fmtHtmlLink, 'rxSvg': rxSvg, 'fmtHtmlSvg': fmtHtmlSvg, 'fmtRows': fmtRows, 'fmtHtmlTable': fmtHtmlTable };
});