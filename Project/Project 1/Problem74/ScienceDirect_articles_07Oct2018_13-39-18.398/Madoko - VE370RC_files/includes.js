// koka generated module: "includes"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_string', './std_log', './std_regex', './std_path', './std_dict', './common', './options', './block', './storage'], function($std_core, $std_string, $std_log, $std_regex, $std_path, $std_dict, $common, $options, $block, $storage) {
"use strict";
 
// koka declarations:
function Snippet(fileName, startLine, content)  /* (fileName : string, startLine : int, content : string) -> snippet */  {
  return { fileName: fileName, startLine: startLine, content: content };
}
 
// Automatically generated. Retrieves the `fileName` constructor field of the ":snippet" type.
function fileName(snippet)  /* (snippet : snippet) -> string */  {
  return snippet.fileName;
}
 
// Automatically generated. Retrieves the `startLine` constructor field of the ":snippet" type.
function startLine(snippet)  /* (snippet : snippet) -> int */  {
  return snippet.startLine;
}
 
// Automatically generated. Retrieves the `content` constructor field of the ":snippet" type.
function content(snippet)  /* (snippet : snippet) -> string */  {
  return snippet.content;
}
function _copy(_this, fileName0, startLine0, content0)  /* (snippet, fileName : ?string, startLine : ?int, content : ?string) -> snippet */  {
  var fileName_113 = (fileName0 !== undefined) ? fileName0 : fileName(_this);
  var startLine_119 = (startLine0 !== undefined) ? startLine0 : startLine(_this);
  var content_132 = (content0 !== undefined) ? content0 : content(_this);
  return Snippet(fileName_113, startLine_119, content_132);
}
var rxBib = $std_regex.regex("^ {0,3}\\[BIB *(?:= *(?:\"([^\"\\n]+)\"|\'([^\'\\n]+)\'|([^\\s:=\\]]+)) *)?\\] *(?=\\n|$)", undefined, true);
var rxFragEnd = $std_regex.regex("^Fragment *End *: *(.+)$", true, true);
var rxFragStart = $std_regex.regex("^Fragment *Start *: *(.+)$", true, true);
var rxInclude = $std_regex.regex("^ {0,3}\\[(?:INCLUDE *(?:= *(?:\"([^\"\\n]+)\"|\'([^\'\\n]+)\'|([^\\s:=\\]]+)) *)?(?:[:] *([\\w\\-]+))?)\\] *(?=\\n|$)", undefined, true);
var rxPrelude = $std_regex.regex("^ {0,3}[Pp]relude[ \\t]*:[ \\t]*(\\S*)[ \\t\\r]*(\\n|$)", undefined, true);
function trySearchReadTextFile(fname, dirs, ext, required)  /* (fname : string, dirs : list<string>, ext : ?string, required : ?bool) -> io maybe<(string, string)> */  {
  var ext_233 = (ext !== undefined) ? ext : "";
  var required_237 = (required !== undefined) ? required : true;
  function nothing()  /* forall<a> () -> maybe<a> */  {
    if (required_237) {
      $std_log.log("files", $std_path.defaultExt(fname, ext_233));
    }
    else {
      $std_core._unit_;
    }
    return $std_core.Nothing;
  }
  var _x0 = $storage.searchFileSync(dirs, fname);
  if (_x0 == null) {
    var _x1 = ((ext_233 === "") || ($std_path.extname(fname) !== ""));
    if (_x1) {
      return nothing();
    }
    else {
      var _x2 = $storage.searchFileSync(dirs, $std_path.changeExt(fname, ext_233));
      if (_x2 == null) {
        return nothing();
      }
      else {
        return $std_core.maybe($std_core.maybe_1($storage.tryReadTextFile(_x2.unJust, required_237)), $std_core.Nothing, function(txt  /* string */ ) {  return $std_core.Just($std_core._tuple2_(_x2.unJust, txt));});
      }
    }
  }
  else {
    return $std_core.maybe($std_core.maybe_1($storage.tryReadTextFile(_x0.unJust, required_237)), $std_core.Nothing, function(txt0  /* string */ ) {  return $std_core.Just($std_core._tuple2_(_x0.unJust, txt0));});
  }
}
function include(text, fast, inName, outName, dirs, options, action)  /* forall<a,e> (text : string, fast : bool, inName : string, outName : string, dirs : list<string>, options : options/options, action : (string, common/lineMap) -> <io|e> a) -> <io|e> a */  {
  if (fast) {
    return action(text, $common.End);
  }
  else {
    $std_core._unit_;
  }
  var includes = $std_dict.mdict();
  var snippets = $std_dict.mdict();
  var snippetStart = $std_core.maybe($std_regex.find(text, rxFragStart, undefined), $options.extractStart(options), function(cap  /* std/regex/matched */ ) {  return $std_string.trim($std_regex._index_($std_regex.groups(cap), 1));});
  var snippetEnd = $std_core.maybe($std_regex.find(text, rxFragEnd, undefined), $options.extractEnd(options), function(cap0  /* std/regex/matched */ ) {  return $std_string.trim($std_regex._index_($std_regex.groups(cap0), 1));});
  var rxSnippetStart = $std_regex.regex(snippetStart, true, true);
  var rxSnippetEnd = $std_regex.regex(snippetEnd, true, true);
  function warning(msg, lineNo, fileName0)  /* (msg : string, lineNo : ?int, fileName : ?string) -> console () */  {
    var lineNo_905 = (lineNo !== undefined) ? lineNo : 0;
    var fileName_909 = (fileName0 !== undefined) ? fileName0 : "";
    var _x1 = ((fileName_909 !== "") || lineNo_905 > 0);
    if (_x1) {
      if (lineNo_905 > 0) {
        var _x2 = (":" + $std_core.show_1(lineNo_905));
      }
      else {
        var _x2 = "";
      }
      var _x0 = (fileName_909 + (_x2 + ": "));
    }
    else {
      var _x0 = "";
    }
    return $options.printErr(options, ("warning: " + (_x0 + msg)), undefined);
  }
  function saveSnippet(name, fname, lineNo0, content0)  /* (name : string, fname : string, lineNo : int, content : string) -> io () */  {
    var _x0 = $std_core.isJust($std_dict._lb__rb__1(snippets, name));
    if (_x0) {
      warning(("snippet " + (name + " is redefined")), lineNo0, fname);
    }
    else {
      $std_core._unit_;
    }
    return (snippets)[name] = Snippet(fname, lineNo0, content0);
  }
  function extractSnippet(name0, content1, fname0, lineNo1, acc)  /* (name : string, content : list<string>, fname : string, lineNo : int, acc : ?list<string>) -> io () */  { tailcall: while(1)
  {
    var acc_1987 = (acc !== undefined) ? acc : $std_core.Nil;
    if (content1 == null) {
      warning(("unclosed snippet: " + name0), lineNo1, fname0);
      return saveSnippet(name0, fname0, lineNo1, $std_core.join_4($std_core.reverse(acc_1987), "\n"));
    }
    else {
      var _x0 = $std_regex.find(content1.head, rxSnippetEnd, undefined);
      if (_x0 == null) {
        var _x1 = $std_regex.find(content1.head, rxSnippetStart, undefined);
        if (_x1 == null) {
          {
            var _x2 = ((lineNo1 + 1)|0);
            var _x3 = $std_core.Cons(content1.head, acc_1987);
            content1 = content1.tail;
            lineNo1 = _x2;
            acc = _x3;
            continue tailcall;
          }
        }
        else {
          {
            var _x4 = ((lineNo1 + 1)|0);
            var _x5 = $std_core.Cons("", acc_1987);
            content1 = content1.tail;
            lineNo1 = _x4;
            acc = _x5;
            continue tailcall;
          }
        }
      }
      else {
        var cname = $std_core.toLower($std_regex._index_($std_regex.groups(_x0.unJust), 1));
        if ((name0 === cname)) {
          return saveSnippet(name0, fname0, lineNo1, $std_core.join_4($std_core.reverse(acc_1987), "\n"));
        }
        else {
          {
            var _x6 = ((lineNo1 + 1)|0);
            var _x7 = $std_core.Cons("", acc_1987);
            content1 = content1.tail;
            lineNo1 = _x6;
            acc = _x7;
            continue tailcall;
          }
        }
      }
    }
  }}
  function findSnippets(content2, fname1, lineNo2)  /* (content : list<string>, fname : string, lineNo : ?int) -> io () */  { tailcall: while(1)
  {
    var lineNo_2480 = (lineNo2 !== undefined) ? lineNo2 : 1;
    if (content2 == null) {
      return $std_core._unit_;
    }
    else {
      var _x0 = $std_regex.find(content2.head, rxSnippetStart, undefined);
      if (_x0 == null) {
        {
          var _x1 = ((lineNo_2480 + 1)|0);
          content2 = content2.tail;
          lineNo2 = _x1;
          continue tailcall;
        }
      }
      else {
        var name1 = $std_core.toLower($std_regex._index_($std_regex.groups(_x0.unJust), 1));
        extractSnippet(name1, content2.tail, fname1, ((lineNo_2480 + 1)|0), undefined);
        {
          var _x2 = ((lineNo_2480 + 1)|0);
          content2 = content2.tail;
          lineNo2 = _x2;
          continue tailcall;
        }
      }
    }
  }}
  function readInclude(fname2, srcname, lineNo3, included)  /* (fname : string, srcname : string, lineNo : int, included : list<string>) -> io (string, string) */  {
    if ((fname2 === "")) {
      return $std_core._tuple2_("", "\n");
    }
    else {
      if ($std_core.startsWith(fname2, "BIB=")) {
        var auxStem = ((fname2).substr(4));
        var _x0 = ((auxStem === "")) ? "" : ("-" + auxStem);
        var fileName1 = ($std_path.noext(outName) + ("-bib" + (_x0 + ".bbl.mdk")));
        var _x0 = $std_dict._lb__rb__1(includes, fileName1);
        if (_x0 != null) {
          var bbl = _x0.unJust;
        }
        else {
          var s0 = $storage.readTextFileDef(fileName1, "", true);
          (includes)[fileName1] = s0;
          var bbl = s0;
        }
        var _x0 = ((bbl === "")) ? "~ Begin Bibliography { .bib-numeric; caption:\"0\"}\n~ End Bibliography\n" : bbl;
        var content3 = ("~ Begin Bibl { id: \"" + (auxStem + ("\"; bib-id: \"" + (auxStem + ("\"; bbl-file: \"" + (fileName1 + ("\" }\n" + (_x0 + "\n~ End Bibl\n"))))))));
        return $std_core._tuple2_(fileName1, content3);
      }
      else {
        var _x0 = ($std_path.extname(fname2) === "");
        var searchName = (_x0) ? (fname2 + ".mdk") : fname2;
        var _x0 = ($std_path.basename(inName) !== searchName);
        var searchDirs = (_x0) ? dirs : $std_core.filter(dirs, function(dir  /* string */ ) {  return (dir !== $std_path.dirname(inName));});
        var _x0 = trySearchReadTextFile(fname2, searchDirs, ".mdk", undefined);
        if (_x0 == null) {
          var _x1 = ($std_path.extname(fname2) === "");
          var fileName2 = (_x1) ? (fname2 + ".mdk") : fname2;
          $std_log.log("files", fileName2);
          warning(("unable to read include: " + fname2), lineNo3, srcname);
          return $std_core._tuple2_(fileName2, "");
        }
        else {
          if ($common.contains(included, _x0.unJust.fst)) {
            warning(("recursive include: " + $std_core.show_4(_x0.unJust.fst)), undefined, undefined);
            return $std_core._tuple2_(_x0.unJust.fst, "");
          }
          else {
            var _x1 = $std_dict._lb__rb__1(includes, _x0.unJust.fst);
            if (_x1 != null) {
              $std_core._unit_;
            }
            else {
              (includes)[_x0.unJust.fst] = _x0.unJust.snd;
              findSnippets($std_core.list_4($std_core.lines(_x0.unJust.snd)), _x0.unJust.fst, undefined);
            }
            return $std_core._tuple2_(_x0.unJust.fst, _x0.unJust.snd);
          }
        }
      }
    }
  }
  var rxRange = $std_regex.regex("^(\\d+)(?:--?(\\d+))?$", undefined, undefined);
  var rxSnippetName = $std_regex.regex("^(\\w+)$", undefined, undefined);
  function findRange(incfile, incline, range, content5, fname3, lineNo4)  /* (incfile : string, incline : string, range : string, content : string, fname : string, lineNo : int) -> io (string, int, string) */  {
    if ((range === "")) {
      return $std_core._tuple3_(incfile, 1, content5);
    }
    else {
      $std_core._unit_;
    }
    var _x0 = $std_regex.find(range, rxRange, undefined);
    if (_x0 == null) {
      var _x1 = $std_regex.find(range, rxSnippetName, undefined);
      if (_x1 == null) {
        warning(("invalid include range: " + incline), lineNo4, fname3);
        return $std_core._tuple3_(incfile, 1, content5);
      }
      else {
        var _x2 = $std_dict._lb__rb__1(snippets, $std_core.toLower($std_regex._index_($std_regex.groups(_x1.unJust), 1)));
        if (_x2 == null) {
          warning(("unknown snippet name: " + $std_regex._index_($std_regex.groups(_x1.unJust), 1)), lineNo4, fname3);
          return $std_core._tuple3_(incfile, 1, content5);
        }
        else {
          return $std_core._tuple3_(_x2.unJust.fileName, _x2.unJust.startLine, _x2.unJust.content);
        }
      }
    }
    else {
      var start0 = $std_core.maybe($std_core.parseInt($std_regex._index_($std_regex.groups(_x0.unJust), 1), undefined), 1, $std_core.id);
      if (start0 <= 0) {
        return $std_core._tuple3_(incfile, 0, "");
      }
      else {
        $std_core._unit_;
      }
      var end = $std_core.max(((start0 - 1)|0), $std_core.parseIntDefault($std_regex._index_($std_regex.groups(_x0.unJust), 2), ((start0 + 1000000)|0), undefined));
      var fragment0 = $std_core.join_4($std_core.take($std_core.drop($std_core.list_4($std_core.lines(content5)), ((start0 - 1)|0)), ((((end - start0)|0) + 1)|0)), "\n");
      return $std_core._tuple3_(incfile, start0, fragment0);
    }
  }
  function processIncludeLine(fname4, line1, included0, lineMap, lineNo5, extra)  /* (fname : string, line : string, included : list<string>, lineMap : common/lineMap, lineNo : int, extra : ?int) -> io (string, common/lineMap, int) */  {
    var extra_5341 = (extra !== undefined) ? extra : 0;
    var _x0 = $std_regex.find(line1, rxInclude, undefined);
    if (_x0 != null) {
      var mbincname = $std_core.Just($std_core._tuple3_($std_regex.matched(_x0.unJust), $std_regex.firstMatched($std_regex.groups(_x0.unJust), 1, 3), $std_regex._index_($std_regex.groups(_x0.unJust), 4)));
    }
    else {
      var _x1 = $std_regex.find(line1, rxBib, undefined);
      if (_x1 != null) {
        var mbincname = $std_core.Just($std_core._tuple3_($std_regex.matched(_x1.unJust), ("BIB=" + $std_regex.firstMatched($std_regex.groups(_x1.unJust), 1, 3)), ""));
      }
      else {
        var mbincname = $std_core.Nothing;
      }
    }
    if (mbincname == null) {
      return $std_core._tuple3_(line1, lineMap, 1);
    }
    else {
      var _x0 = readInclude(mbincname.unJust.snd, fname4, lineNo5, included0);
      var _x1 = findRange(_x0.fst, mbincname.unJust.fst, mbincname.unJust.thd, _x0.snd, fname4, lineNo5);
      if (_x1.snd <= 0) {
        return $std_core._tuple3_("", lineMap, 1);
      }
      else {
        var _x2 = processIncludesRec(_x1.thd, _x1.fst, $std_core.Cons(_x1.fst, included0), _x1.snd, undefined);
        var lineMapNew = $common.Include(lineNo5, _x1.snd, ((_x2.fst + extra_5341)|0), _x1.fst, _x2.snd, lineMap);
        return $std_core._tuple3_(_x2.thd, lineMapNew, _x2.fst);
      }
    }
  }
  function processIncludesRec(txt, fname5, included1, start1, prelude)  /* (txt : string, fname : string, included : list<string>, start : ?int, prelude : ?string) -> io (int, common/lineMap, string) */  {
    var start_5702 = (start1 !== undefined) ? start1 : 1;
    var prelude_5706 = (prelude !== undefined) ? prelude : "";
    if (start_5702 <= 0) {
      return $std_core._tuple3_(0, $common.End, "");
    }
    else {
      $std_core._unit_;
    }
    var lineNo6 = { value: ((start_5702 - 1)|0) };
    var lineCount = { value: 0 };
    var lineMap0 = { value: $common.End };
    if ((prelude_5706 !== "")) {
      var _x3 = processIncludeLine(fname5, ("[INCLUDE=\"" + (prelude_5706 + "\"]")), included1, ((lineMap0).value), ((lineNo6).value), 1);
      ((lineCount).value = ((((lineCount).value) + _x3.thd)|0));
      ((lineMap0).value = _x3.snd);
      if ($options.xmp(options)) {
        var _x4 = ("<xmp>" + (_x3.fst + "</xmp>"));
      }
      else {
        var _x4 = _x3.fst;
      }
      var preludeTxt = (_x4 + "\n");
    }
    else {
      var preludeTxt = "";
    }
    var ls = $std_core.map_5($std_core.lines(txt), function(line2  /* string */ ) {  ((lineNo6).value = ((((lineNo6).value) + 1)|0)); var _x3 = processIncludeLine(fname5, line2, included1, ((lineMap0).value), ((lineNo6).value), undefined); ((lineCount).value = ((((lineCount).value) + _x3.thd)|0)); ((lineMap0).value = _x3.snd); return _x3.fst;});
    return $std_core._tuple3_(((lineCount).value), $common.reverse(((lineMap0).value)), (preludeTxt + $std_core.unlines(ls)));
  }
  function processIncludes(txt0, fname6)  /* (txt : string, fname : string) -> io (int, common/lineMap, string) */  {
    var _x0 = $std_core.reverse($std_core.list_4($std_regex.findAll(txt0, rxPrelude, undefined)));
    if (_x0 != null) {
      var value = $std_regex._index_($std_regex.groups(_x0.head), 1);
      var lvalue = $std_core.toLower(value);
      var _x1 = ((lvalue === "none") || ((lvalue === "clear") || (lvalue === "false")));
      var prelude0 = (_x1) ? "" : value;
    }
    else {
      var prelude0 = $options.prelude(options);
    }
    return processIncludesRec(txt0, fname6, $std_core.Cons(fname6, $std_core.Nil), 1, prelude0);
  }
  var _x0 = processIncludes(text, inName);
  return action(_x0.thd, _x0.snd);
}
function searchReadTextFileDef(fname, def, dirs, ext, required)  /* (fname : string, def : string, dirs : list<string>, ext : ?string, required : ?bool) -> io string */  {
  var ext_7276 = (ext !== undefined) ? ext : "";
  var required_7280 = (required !== undefined) ? required : true;
  var _x0 = trySearchReadTextFile(fname, dirs, ext_7276, required_7280);
  return (_x0 == null) ? def : _x0.unJust.snd;
}
 
// koka exports:
return { 'fileName': fileName, 'startLine': startLine, 'content': content, '_copy': _copy, 'rxBib': rxBib, 'rxFragEnd': rxFragEnd, 'rxFragStart': rxFragStart, 'rxInclude': rxInclude, 'rxPrelude': rxPrelude, 'trySearchReadTextFile': trySearchReadTextFile, 'include': include, 'searchReadTextFileDef': searchReadTextFileDef };
});