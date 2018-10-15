// koka generated module: "metadata"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_log', './std_dict', './std_regex', './std_string', './std_path', './common', './options', './optionsMeta', './expression'], function($std_core, $std_log, $std_dict, $std_regex, $std_string, $std_path, $common, $options, $optionsMeta, $expression) {
"use strict";
 
// koka declarations:
function Key(key, value)  /* (key : string, value : string) -> ckey */  {
  return { _tag: 1, key: key, value: value };
}
function Support(condition, body, lineInfo)  /* (condition : string, body : list<ckey>, lineInfo : string) -> ckey */  {
  return { _tag: 2, condition: condition, body: body, lineInfo: lineInfo };
}
 
// Automatically generated. Retrieves the `key` constructor field of the ":ckey" type.
function key(ckey)  /* (ckey : ckey) -> exn string */  {
  return (ckey._tag === 1) ? ckey.key : $std_core.patternMatchError("src\\metadata.kk(68, 8)", "key");
}
 
// Automatically generated. Retrieves the `value` constructor field of the ":ckey" type.
function value(ckey)  /* (ckey : ckey) -> exn string */  {
  return (ckey._tag === 1) ? ckey.value : $std_core.patternMatchError("src\\metadata.kk(68,21)", "value");
}
 
// Automatically generated. Retrieves the `condition` constructor field of the ":ckey" type.
function condition(ckey)  /* (ckey : ckey) -> exn string */  {
  return (ckey._tag === 2) ? ckey.condition : $std_core.patternMatchError("src\\metadata.kk(69,12)", "condition");
}
 
// Automatically generated. Retrieves the `body` constructor field of the ":ckey" type.
function body(ckey)  /* (ckey : ckey) -> exn list<ckey> */  {
  return (ckey._tag === 2) ? ckey.body : $std_core.patternMatchError("src\\metadata.kk(69,31)", "body");
}
 
// Automatically generated. Retrieves the `lineInfo` constructor field of the ":ckey" type.
function lineInfo(ckey)  /* (ckey : ckey) -> exn string */  {
  return (ckey._tag === 2) ? ckey.lineInfo : $std_core.patternMatchError("src\\metadata.kk(69,49)", "lineInfo");
}
 
// Automatically generated. Tests for the "Key" constructor of the ":ckey" type.
function isKey(ckey)  /* (ckey : ckey) -> bool */  {
  return (ckey._tag === 1);
}
 
// Automatically generated. Tests for the "Support" constructor of the ":ckey" type.
function isSupport(ckey)  /* (ckey : ckey) -> bool */  {
  return (ckey._tag === 2);
}
function cmetadata(options)  /* (options : options/options) -> cmetadata */  {
  return $std_core.map_3($options.metadata(options), function(kv  /* (string, string) */ ) {  return Key($std_core.fst(kv), $std_core.snd(kv));});
}
function escapeAt(s)  /* (s : string) -> string */  {
  return $std_regex.replaceAll_1(s, $std_regex.regex("\\\\(.)|(@)", undefined, undefined), "\\$1$2", undefined);
}
 
// fill out all the authorN keys
function completeAuthorKeys(mdata)  /* (mdata : options/metadata) -> options/metadata */  {
  var authorCount = { value: 0 };
  var authors = $std_core.concat_1(mdata, function(kv  /* (string, string) */ ) {  if ((kv.fst === "author")) {  ((authorCount).value = ((((authorCount).value) + 1)|0)); return $std_core.Cons($std_core._tuple2_(("author" + $std_core.show_1(((authorCount).value))), kv.snd), $std_core.Nil);} else {  var _x0 = ((kv.fst === "affiliation") || ((kv.fst === "institute") || (kv.fst === "address"))); if (_x0) {  return $std_core.Cons($std_core._tuple2_(("affiliation" + $std_core.show_1(((authorCount).value))), kv.snd), $std_core.Nil);} else {  if ((kv.fst === "email")) {  return $std_core.Cons($std_core._tuple2_(("email" + $std_core.show_1(((authorCount).value))), escapeAt(kv.snd)), $std_core.Nil);} else {  if ((kv.fst === "author-note")) {  return $std_core.Cons($std_core._tuple2_(("author-note" + $std_core.show_1(((authorCount).value))), kv.snd), $std_core.Nil);} else {  return $std_core.Nil;}}}}});
  return $std_core._plus__3(mdata, $std_core._plus__3(authors, $std_core.Cons($std_core._tuple2_("author-count", $std_core.show_1(((authorCount).value))), $std_core.Nil)));
}
function containsKey(mdata, key0)  /* (mdata : cmetadata, key : string) -> div bool */  {
  return $std_core.any(mdata, function(ckey  /* ckey */ ) {  return (ckey._tag === 1) ? (ckey.key === key0) : containsKey(ckey.body, key0);});
}
function cutoff(s, n)  /* (s : string, n : int) -> string */  {
  var _x0 = (s).length > n;
  if (_x0) {
    return ($std_core.substr_1(s, 0, n) + "...");
  }
  else {
    return s;
  }
}
function defaultMeta(options, fmt)  /* (options : options/options, fmt : common/formatter) -> string */  {
  return $std_core.join_4($std_core._plus__3($std_core.Cons("Tex: False", $std_core.Cons("Html: False", $std_core.Cons("Prelude: prelude", $std_core.Cons(($common.showFormatter(fmt) + ": True"), $std_core.Cons(("Full: " + $std_core.show_5($std_core.maybe($options.full(options), true, $std_core.id))), $std_core.Cons(("bibliography { bibstyle:\'" + ($options.styleName($options.bibStyle(options)) + ("\'; bibdata:\'" + ($std_core.join_4($common.splitPaths($options.bib(options)), ",") + "\'; tex-elem:mdBibliography }")))), $std_core.Nil)))))), $std_core.Cons("\n", $std_core.Nil)), "\n");
}
function evaluateBool(cond, modes, mdata, verbose, current)  /* forall<h> (cond : string, modes : std/dict/mdict<h,expression/constant>, mdata : cmetadata, verbose : int, current : ?list<string>) -> <st<h>,div> bool */  {
  var current_3809 = (current !== undefined) ? current : $std_core.Nil;
  var recursive = { value: false };
  function lookup(v, display)  /* (v : string, display : string) -> <st<4675>,div> expression/constant */  {
    if ($common.contains(current_3809, v)) {
      ((recursive).value = true);
      return $expression.String("False");
    }
    else {
      var _x0 = lookupMode(modes, v, mdata, $std_core.Cons(v, current_3809), verbose);
      if (_x0 == null) {
        if (verbose >= 3) {
          $common.warning(("undefined variable: " + display), undefined);
        }
        else {
          $std_core._unit_;
        }
        return $expression.String("False");
      }
      else {
        return _x0.unJust;
      }
    }
  }
  var b = $expression.evaluate(cond, function(e  /* expression/expr */ ) {  return $expression.bool($expression.evalExpr(e, lookup));}, false);
  return (((recursive).value)) ? false : b;
}
function lookupMode(modes0, mode, mdata0, current0, verbose0)  /* forall<h> (modes : std/dict/mdict<h,expression/constant>, mode : string, mdata : cmetadata, current : list<string>, verbose : int) -> <st<h>,div> maybe<expression/constant> */  {
  var _x0 = $std_dict._lb__rb__1(modes0, mode);
  if (_x0 != null) {
    return $std_core.Just(_x0.unJust);
  }
  else {
    var mbRes = $std_core.foreachUntil($std_core.reverse(mdata0), function(ckey  /* ckey */ ) {  if (ckey._tag === 1) {  if ((ckey.key !== mode)) {  return $std_core.Nothing;} else {  var res = $expression.String(ckey.value); (modes0)[mode] = res; return $std_core.Just(res);}} else {  if (containsKey(ckey.body, mode)) {  var _x1 = evaluateBool(ckey.condition, modes0, mdata0, verbose0, current0); return (_x1) ? lookupMode(modes0, mode, ckey.body, current0, verbose0) : $std_core.Nothing;} else {  return $std_core.Nothing;}}});
    if (mbRes == null) {
      (modes0)[mode] = $expression.String("False");
      return $std_core.Nothing;
    }
    else {
      return mbRes;
    }
  }
}
function flatten(mdata, modes, verbose)  /* forall<h> (mdata : cmetadata, modes : std/dict/mdict<h,expression/constant>, verbose : int) -> <st<h>,div> options/metadata */  {
  return $std_core.concat_1(mdata, function(ckey  /* ckey */ ) {  if (ckey._tag === 1) {  return $std_core.Cons($std_core._tuple2_(ckey.key, ckey.value), $std_core.Nil);} else {  $common.logLocation(ckey.lineInfo, undefined); var b = evaluateBool(ckey.condition, modes, mdata, verbose, undefined); if (verbose >= 4) {  $std_core.trace(("evaluate: " + (ckey.condition + (" -> " + ($std_core.show_5(b) + (": " + ckey.lineInfo))))));} else {  $std_core._unit_;} return (b) ? flatten(ckey.body, modes, verbose) : $std_core.Nil;}});
}
function evalConditionals(mdata, verbose)  /* (mdata : cmetadata, verbose : ?int) -> div options/metadata */  {
  var verbose_5046 = (verbose !== undefined) ? verbose : 0;
  var modes = $std_dict.mdict();
  return flatten(mdata, modes, verbose_5046);
}
function makeKey(k, pre, value0, rawvalue, lineMap, lines, isMatching)  /* (k : string, pre : string, value : string, rawvalue : string, lineMap : common/lineMap, lines : int, isMatching : bool) -> ckey */  {
  var kstart = $std_core.substr_1(k, 0, 1);
  var isrule = ((kstart === "#") || ((kstart === ".") || (kstart === "~")));
  if (isrule) {
    var key0 = $std_core.toLower($std_string.trim(k));
  }
  else {
    if (isMatching) {
      var key0 = ("~" + $std_core.toLower($std_string.trim(k)));
    }
    else {
      var key0 = $common.normalizeId($std_string.trim(k));
    }
  }
  if ($std_core.startsWith(key0, "~")) {
    var _x0 = (isrule) ? ((k).substr(1)) : k;
    $std_log.log("customs", ("{\"name\":" + ($common.json(key0) + (",\"display\":" + ($common.json(_x0) + "}")))));
  }
  else {
    $std_core._unit_;
  }
  var _x0 = ((key0 === "tex-header") || ((key0 === "tex-footer") || ((key0 === "tex-header-") || ((key0 === "tex-doc-header") || (key0 === "tex-doc-header-")))));
  if (_x0) {
    var ckey = Key(key0, ("%mdk-data-line={" + ($common.translateLine(lineMap, ((lines + 1)|0)) + ("}\n" + rawvalue))));
  }
  else {
    var ckey = Key(key0, value0);
  }
  if ($std_core.isEmpty(pre)) {
    return ckey;
  }
  else {
    return Support(pre, $std_core.Cons(ckey, $std_core.Nil), $common.translateLine(lineMap, lines));
  }
}
var rxMetaAttrContent = "(?:[^\\\\\'\"\\{\\}/]|\\\\[\\s\\S]|\'(?:[^\\\\\']|\\\\[\\s\\S])*\'|\"(?:[^\\\\\"]|\\\\[\\s\\S])*\"|/(?:[^\\\\/\\n]|\\\\.)*/)";
var rxMetaAttrs = ("(?:\\{[:]?(" + (rxMetaAttrContent + "*)(\\})\\s*)"));
var rxMetaKeyEnd = "(?:(?:\\[[^\\]\\n\\r]*\\])+|\\*)?";
var rxMetaKey = ("(?:@([\\w\\-@]+) +)?((?:\\w|([\\.#~])(?=\\S))[\\w\\-\\.#~, ]*?" + (rxMetaKeyEnd + ") *(?=[\\{:])"));
var rxMetaValue = ("(?:[:] *(.*(?:\\n .*)*)(?:\\n+(?=\\n|" + (rxMetaKey + "|@(?:if|supports)\\b|<!--)|$))"));
var rxMeta = $std_regex.regex(("^" + (rxMetaKey + ("(?:" + (rxMetaAttrs + ("|" + (rxMetaValue + ")")))))), undefined, undefined);
var rxMetaComment = $std_regex.regex("^(?:\\s*<!--(?:(meta|madoko)\\b *\\n)?([\\s\\S]*?)-->((?: *\\n)+))", undefined, undefined);
var rxMetaGroup = ("(?:\\{((?:" + (rxMetaAttrContent + ("|" + (rxMetaAttrs + ")*)\\} *(?:\\n|$)\\s*)"))));
var rxSupports = $std_regex.regex(("^@(?:if|supports)\\b([^\\n\\{]*)" + rxMetaGroup), undefined, undefined);
function parsePlainMeta(txt, fmt, lineMap, metadata, verbose, lines)  /* (txt : string, fmt : common/formatter, lineMap : common/lineMap, metadata : ?cmetadata, verbose : ?bool, lines : ?int) -> div (cmetadata, string, int) */  { tailcall: while(1)
{
  var metadata_6630 = (metadata !== undefined) ? metadata : $std_core.Nil;
  var verbose_6634 = (verbose !== undefined) ? verbose : false;
  var lines_6638 = (lines !== undefined) ? lines : 0;
  var _x0 = $std_regex.find(txt, rxMetaComment, undefined);
  if (_x0 != null) {
    var _x1 = $std_core.bool_2($std_regex._index_($std_regex.groups(_x0.unJust), 1));
    if (_x1) {
      {
        var _x2 = ($common.unindent($std_regex._index_($std_regex.groups(_x0.unJust), 2)) + ($std_regex._index_($std_regex.groups(_x0.unJust), 3) + ((txt).substr($std_regex.next(_x0.unJust) >=1 ? $std_regex.next(_x0.unJust) : 1))));
        var _x3 = metadata_6630;
        var _x4 = verbose_6634;
        var _x5 = ((lines_6638 + (((("\n") ? (($std_core.substr_1(txt, 0, $std_regex.index(_x0.unJust))).match(new RegExp(("\n").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'))||[]).length : 0) + 1)|0))|0);
        txt = _x2;
        metadata = _x3;
        verbose = _x4;
        lines = _x5;
        continue tailcall;
      }
    }
    else {
      {
        var _x6 = ((txt).substr($std_regex.next(_x0.unJust) >=1 ? $std_regex.next(_x0.unJust) : 1));
        var _x7 = metadata_6630;
        var _x8 = verbose_6634;
        var _x9 = ((lines_6638 + (("\n") ? (($std_core.substr_1(txt, 0, $std_regex.next(_x0.unJust))).match(new RegExp(("\n").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'))||[]).length : 0))|0);
        txt = _x6;
        metadata = _x7;
        verbose = _x8;
        lines = _x9;
        continue tailcall;
      }
    }
  }
  else {
    var _x10 = $std_regex.find(txt, rxSupports, undefined);
    if (_x10 != null) {
      if (verbose_6634) {
        $std_core.trace(("meta data: @if " + ($std_string.trim($std_regex._index_($std_regex.groups(_x10.unJust), 1)) + ("{" + ($std_regex._index_($std_regex.groups(_x10.unJust), 2) + "}{")))));
      }
      else {
        $std_core._unit_;
      }
      var _x11 = parsePlainMeta($std_string.trim($common.unindent($std_regex._index_($std_regex.groups(_x10.unJust), 2))), fmt, lineMap, $std_core.Nil, verbose_6634, ((lines_6638 + (("\n") ? (($std_regex._index_($std_regex.groups(_x10.unJust), 1)).match(new RegExp(("\n").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'))||[]).length : 0))|0));
      if ((_x11.snd !== "")) {
        $common.warning(("invalid metadata: " + cutoff(_x11.snd, 40)), undefined);
      }
      else {
        $std_core._unit_;
      }
      (verbose_6634) ? $std_core.trace("}") : $std_core._unit_;
      var support = Support($std_string.trim($std_regex._index_($std_regex.groups(_x10.unJust), 1)), _x11.fst, $common.translateLine(lineMap, ((lines_6638 + 1)|0)));
      var lines2 = (("\n") ? (($std_core.substr_1(txt, 0, $std_regex.next(_x10.unJust))).match(new RegExp(("\n").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'))||[]).length : 0);
      {
        var _x12 = ((txt).substr($std_regex.next(_x10.unJust) >=1 ? $std_regex.next(_x10.unJust) : 1));
        var _x13 = $std_core.Cons(support, metadata_6630);
        var _x14 = verbose_6634;
        var _x15 = ((lines_6638 + lines2)|0);
        txt = _x12;
        metadata = _x13;
        verbose = _x14;
        lines = _x15;
        continue tailcall;
      }
    }
    else {
      var _x16 = $std_regex.find(txt, rxMeta, undefined);
      if (_x16 == null) {
        return $std_core._tuple3_($std_core.reverse(metadata_6630), txt, lines_6638);
      }
      else {
        var rawvalue = $std_core._x7C__x7C__1($std_regex._index_($std_regex.groups(_x16.unJust), 4), $std_regex._index_($std_regex.groups(_x16.unJust), 6));
        var value0 = $std_string.trim($common.joinLines(rawvalue));
        if (verbose_6634) {
          $std_core.trace(("meta data: " + ($std_regex._index_($std_regex.groups(_x16.unJust), 2) + (": " + cutoff(value0, 80)))));
        }
        else {
          $std_core._unit_;
        }
        var rawkeys = $std_core.map_3($std_core.list_4($std_core.split_1($std_regex._index_($std_regex.groups(_x16.unJust), 2), ",")), $std_string.trim);
        var _x17 = ($std_regex._index_($std_regex.groups(_x16.unJust), 1) !== "");
        if (_x17) {
          var pre = ("@" + ($std_regex._index_($std_regex.groups(_x16.unJust), 1) + " "));
        }
        else {
          var pre = "";
        }
        var kvs = $std_core.map_3(rawkeys, function(k  /* string */ ) {  return makeKey(k, pre, value0, rawvalue, lineMap, lines_6638, ($std_regex._index_($std_regex.groups(_x16.unJust), 5) === "}"));});
        var lines20 = (("\n") ? (($std_core.substr_1(txt, 0, $std_regex.next(_x16.unJust))).match(new RegExp(("\n").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'))||[]).length : 0);
        {
          var _x17 = ((txt).substr($std_regex.next(_x16.unJust) >=1 ? $std_regex.next(_x16.unJust) : 1));
          var _x18 = $std_core._plus__3(kvs, metadata_6630);
          var _x19 = verbose_6634;
          var _x20 = ((lines_6638 + lines20)|0);
          txt = _x17;
          metadata = _x18;
          verbose = _x19;
          lines = _x20;
          continue tailcall;
        }
      }
    }
  }
}}
var rxMetaSection = $std_regex.regex("^<!--meta *\\n([\\s\\S]*?)^-->", undefined, true);
var rxInitialWhite = $std_regex.regex("^(\\s|<!--(?!meta\\b|madoko\\b)[\\s\\S]*?-->|~+ *begin htmlraw\\s+~+end htmlraw\\b)+", undefined, undefined);
function stripInitialWhite(txt)  /* (txt : string) -> (string, int) */  {
  var _x0 = $std_regex.find(txt, rxInitialWhite, undefined);
  if (_x0 == null) {
    return $std_core._tuple2_(txt, 0);
  }
  else {
    return $std_core._tuple2_(((txt).substr($std_regex.next(_x0.unJust))), (("\n") ? (($std_core.substr_1(txt, 0, $std_regex.next(_x0.unJust))).match(new RegExp(("\n").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'))||[]).length : 0));
  }
}
 
// Parse the meta-data at the start of a document,
// and return updated options and the rest of the document
function parseMeta(options0, fmt, txt)  /* (options0 : options/options, fmt : common/formatter, txt : string) -> div (options/options, string) */  {
  var _x0 = stripInitialWhite(txt);
  var _x1 = parsePlainMeta(_x0.fst, fmt, $options.lineMap(options0), undefined, $options.verbose(options0) >= 4, _x0.snd);
  var mdatas = $std_core.map_3($std_core.list_4($std_regex.findAll(_x1.snd, rxMetaSection, undefined)), function(cap  /* std/regex/matched */ ) {  var _x2 = stripInitialWhite(($std_regex._index_($std_regex.groups(cap), 1) + "\n")); var lineNo = ((_x1.thd + (((("\n") ? (($std_core.substr_1(_x1.snd, 0, $std_regex.index(cap))).match(new RegExp(("\n").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'))||[]).length : 0) + _x2.snd)|0))|0); var _x3 = parsePlainMeta(_x2.fst, fmt, $options.lineMap(options0), $std_core.Nil, $options.verbose(options0) >= 4, lineNo); return _x3.fst;});
  var mdata2 = $std_core._plus__3(_x1.fst, $std_core.concat(mdatas));
  var mdataDef = $std_core.fst_1(parsePlainMeta(defaultMeta(options0, fmt), fmt, $options.lineMap(options0), undefined, $options.verbose(options0) >= 4, undefined));
  var mdataFull = $std_core._plus__3(mdataDef, $std_core._plus__3(cmetadata(options0), mdata2));
  var mdataModed = evalConditionals(mdataFull, $options.verbose(options0));
  var options2 = $optionsMeta.fromMeta(options0, mdataModed);
  var options = $options._copy_1(options2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, mdataModed, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  var _x2 = $options.lineNo(options) > 0;
  if (_x2) {
    return $std_core._tuple2_($options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, (($options.lineNo(options) + _x1.thd)|0), undefined, undefined, undefined, undefined, undefined), _x1.snd);
  }
  else {
    return $std_core._tuple2_(options, _x1.snd);
  }
}
 
// koka exports:
return { 'key': key, 'value': value, 'condition': condition, 'body': body, 'lineInfo': lineInfo, 'isKey': isKey, 'isSupport': isSupport, 'cmetadata': cmetadata, 'escapeAt': escapeAt, 'completeAuthorKeys': completeAuthorKeys, 'containsKey': containsKey, 'cutoff': cutoff, 'defaultMeta': defaultMeta, 'evaluateBool': evaluateBool, 'lookupMode': lookupMode, 'flatten': flatten, 'evalConditionals': evalConditionals, 'makeKey': makeKey, 'rxMetaAttrContent': rxMetaAttrContent, 'rxMetaAttrs': rxMetaAttrs, 'rxMetaKeyEnd': rxMetaKeyEnd, 'rxMetaKey': rxMetaKey, 'rxMetaValue': rxMetaValue, 'rxMeta': rxMeta, 'rxMetaComment': rxMetaComment, 'rxMetaGroup': rxMetaGroup, 'rxSupports': rxSupports, 'parsePlainMeta': parsePlainMeta, 'rxMetaSection': rxMetaSection, 'rxInitialWhite': rxInitialWhite, 'stripInitialWhite': stripInitialWhite, 'parseMeta': parseMeta };
});