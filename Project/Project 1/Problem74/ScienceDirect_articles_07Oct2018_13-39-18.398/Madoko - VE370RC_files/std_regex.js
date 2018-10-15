// koka generated module: "std/regex"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core'], function($std_core) {
"use strict";
 
// koka declarations:
/*---------------------------------------------------------------------------
  Copyright 2012 Microsoft Corporation.
 
  This is free software; you can redistribute it and/or modify it under the
  terms of the Apache License, Version 2.0. A copy of the License can be
  found in the file "license.txt" at the root of this distribution.
---------------------------------------------------------------------------*/
var $regexCache = {}
function $regexCreate( s, ignoreCase, multiLine ) 
{
  // we always use "g" flag. 
  // to re-use safely, we always need to explicitly set 'lastIndex' on each use!
  var flags = (ignoreCase!==0 ? "i" : "") + (multiLine!==0 ? "m" : "");
  var key = s+flags;
  if ($regexCache[key]) return $regexCache[key];
  var rx = { regex: new RegExp( s, "g" + flags), flags: flags };
  $regexCache[key] = rx;
  return rx
}
// cache a non-global verion too
function $regex_nong( r ) {
  if (r.regexng) return r.regexng;
  r.regexng = new RegExp( r.regex.source, r.flags )
  return r.regexng;
}
function $countGroups( regex ) {  // (string) -> int
  // (?x)(?<!(\\|(?!\\)\(\?))\((?!\?)
  var parens = regex.replace(/[^\\\[(]+|\\[\s\S]?|\(\?|\[(?:[^\\\]]|\\.)*\]/g, "");
  return parens.length
}
function $findPrefix( xs ) { // ([string]) -> string
  if (!xs) return "";
  if (xs.length == 0) return "";
  if (xs.length == 1) return xs[0];
  var prefix = "";
  var minlen = xs[0].length;
  xs.map( function(s) { if (s.length < minlen) minlen = s.length; });
  for( var i = 0; i < minlen; i++) {
    var c = xs[0][i];
    for (var j = 1; j < xs.length; j++ ) {
      if (xs[j][i] !== c) {
        return prefix;
      }
    }
    prefix = prefix + c;
  }
  return prefix; 
}
function $regexGroups( r, match ) {
  if (!r.offsets || r.offsets.length <= 1) return match;
  var groups = [match[0]]
  groups.alternative = -1;
  for( var i = 0; i < r.offsets.length-1; i++ ) {
    if (match[r.offsets[i]] != null) {
      groups.alternative = i;
      // first push prefix groups
      var j = 1;
      while( j < r.offsets[0] ) {
        groups.push(match[j]);
        j++;
      }
      // then the groups of the alternative we matched
      var j = r.offsets[i] + 1;
      while( j < r.offsets[i+1] ) {
        groups.push(match[j])
        j++;
      }
      break;
    }
  }
  return groups;
}
function $regexCreateAlt( regexs, ignoreCase, multiLine ) {
  var offsets = [];
  var alts = []
  var current = 1;
  var prefix = $findPrefix(regexs);
  var prefixCount = $countGroups(prefix);
  if (prefix !== "") {
    // TODO: fix prefix that has a halfway capture group
    regexs = regexs.map( function(r) { return r.substr(prefix.length); } );
    current += prefixCount;
  }  
  regexs.map( function(regex) {
    offsets.push(current)
    regex = regex.replace(/\\(\d)/g, function(match,digit) {
      var d = parseInt(digit);
      return (d <= prefixCount ? match : ("\\" + (d + current - prefixCount)))
    })
    current += (1 + $countGroups(regex));
    alts.push( "(" + regex + ")" );    
  })
  offsets.push(current) // final
  var alt = $regexCreate( prefix + "(?:" + alts.join("|") + ")", ignoreCase, multiLine );
  alt.offsets = offsets;
  return alt;
}
// Execute
function $regexExec( r,  s, start ) 
{
  r.regex.lastIndex = start;
  var match = r.regex.exec(s);
  if (!match) {
    return null; // Matched(-1,0,"",[""]);
  } 
  else {
    var next = r.regex.lastIndex;  
    if (next <= match.index) next = match.index+1;    
    var groups = (r.offsets ? $regexGroups(r,match) : match)
    return $std_core.Just(Matched(match.index, next, match[0] ? match[0] : "", Groups(groups) ));
  }
}  
function $regexExecAll( r,  s, start ) 
{
  r.regex.lastIndex = start;
  var result = [];
  var match;
  while (match = r.regex.exec(s)) {
    if (r.regex.lastIndex <= match.index) r.regex.lastIndex = match.index+1; // avoid loop on zero-length match    
    var groups = (r.offsets ? $regexGroups(r,match) : match);
    result.push( Matched( match.index, r.regex.lastIndex, match[0] ? match[0] : "", Groups(groups) ) );
  }
  return result;
}  
function $regexSearch( r, s, start ) {
  var res = $regexExec(r,s,start);
  return res.index;
}
function $regexSplit( r, s, n, start ) {
  r.regex.lastIndex = start;
  return (n <= 0 ? s.split( r.regex ) : s.split( r.regex, n ));
}
function $regexReplaceFun( r,  s, repl, all, start) 
{
  var regex = (all === 0 ? $regex_nong(r) : r.regex);
  //if (!s || !regex.test(s)) return s
  regex.lastIndex = start;  
  return s.replace( regex, function() {
    if (arguments.length < 3) return ""; // should never happen!
    var index = arguments[arguments.length-2];
    var match = [];
    for(var i = 0; i < arguments.length-2; i++) {
      match[i] = arguments[i];
    }
    var matched = match[0] ? match[0] : ""
    var next = index + matched.length;
    if (next<=index) next = index+1;
    var groups = (r.offsets ? $regexGroups(r,match) : match);
    return repl( Matched( index, next, matched, Groups(groups) ) );      
  });
}
function $regexReplace( r, s, repl, all, start ) 
{
  var regex = (all === 0 ? $regex_nong(r) : r.regex);
  
  //if (!s || !regex.test(s)) return s
  regex.lastIndex = start; 
  return s.replace( regex, repl ); // TODO: wrong for alt regex's
}
function Groups(grp)  /* (grp : any) -> groups */  {
  return { grp: grp };
}
function Matched(index, next, matched, groups)  /* (index : int, next : int, matched : string, groups : groups) -> matched */  {
  return { index: index, next: next, matched: matched, groups: groups };
}
function Regex(obj)  /* (obj : any) -> regex */  {
  return { obj: obj };
}
 
// Automatically generated. Retrieves the `grp` constructor field of the ":groups" type.
function grp(groups0)  /* (groups : groups) -> any */  {
  return groups0.grp;
}
function _copy(_this, grp0)  /* (groups, grp : ?any) -> groups */  {
  var grp_109 = (grp0 !== undefined) ? grp0 : grp(_this);
  return Groups(grp_109);
}
 
// Automatically generated. Retrieves the `index` constructor field of the ":matched" type.
function index(matched0)  /* (matched : matched) -> int */  {
  return matched0.index;
}
 
// Automatically generated. Retrieves the `next` constructor field of the ":matched" type.
function next(matched0)  /* (matched : matched) -> int */  {
  return matched0.next;
}
 
// Automatically generated. Retrieves the `matched` constructor field of the ":matched" type.
function matched(matched0)  /* (matched : matched) -> string */  {
  return matched0.matched;
}
 
// Automatically generated. Retrieves the `groups` constructor field of the ":matched" type.
function groups(matched0)  /* (matched : matched) -> groups */  {
  return matched0.groups;
}
function _copy_1(_this, index0, next0, matched0, groups0)  /* (matched, index : ?int, next : ?int, matched : ?string, groups : ?groups) -> matched */  {
  var index_149 = (index0 !== undefined) ? index0 : index(_this);
  var next_158 = (next0 !== undefined) ? next0 : next(_this);
  var matched_166 = (matched0 !== undefined) ? matched0 : matched(_this);
  var groups_177 = (groups0 !== undefined) ? groups0 : groups(_this);
  return Matched(index_149, next_158, matched_166, groups_177);
}
 
// Automatically generated. Retrieves the `obj` constructor field of the ":regex" type.
function obj(regex0)  /* (regex : regex) -> any */  {
  return regex0.obj;
}
function _copy_2(_this, obj0)  /* (regex, obj : ?any) -> regex */  {
  var obj_205 = (obj0 !== undefined) ? obj0 : obj(_this);
  return Regex(obj_205);
}
function groupsIndex(groups0, index0)  /* (groups : any, index : int) -> string */  {
  return ((groups0)[index0] != null ? (groups0)[index0] : '');
}
 
// Return the string captured by a particular group or the empty string.
function _index_(groups0, index0)  /* (groups : groups, index : int) -> string */  {
  return groupsIndex(grp(groups0), index0);
}
 
// For alternative regular expressions, return the alternative that was matched.
// If this was not an alternative regex, returns "-1"
function alternative(groups0)  /* (groups : groups) -> int */  {
  return (groups0.alternative!=null ? groups0.alternative : -1);
}
function regexExec(_arg1, _arg2, _arg3)  /* (any, string, int) -> maybe<matched> */  {
  return $regexExec(_arg1,_arg2,_arg3);
}
 
// Find a match for a regular expression starting at start position "start" (by default "0").
// See also "contains"
// (note: this function is called |exec| in JavaScript).
function find(s, regex0, start)  /* (s : string, regex : regex, start : ?int) -> maybe<matched> */  {
  var start_248 = (start !== undefined) ? start : 0;
  return regexExec(obj(regex0), s, $std_core.max(start_248, 0));
}
 
// Does a regular expression pattern occur in a string "s"?
// (note: called `test` in javascript)
function contains(s, r, start)  /* (s : string, r : regex, start : ?int) -> bool */  {
  var start_271 = (start !== undefined) ? start : 0;
  return $std_core.bool_1(find(s, r, start_271));
}
function regexExecAll(_arg1, _arg2, _arg3)  /* (any, string, int) -> vector<matched> */  {
  return $regexExecAll(_arg1,_arg2,_arg3);
}
 
// Find all matches for a regular expression in a string.
function findAll(s, regex0, start)  /* (s : string, regex : regex, start : ?int) -> vector<matched> */  {
  var start_332 = (start !== undefined) ? start : 0;
  var _x0 = start_332 > (s).length;
  if (_x0) {
    return [];
  }
  else {
    $std_core._unit_;
  }
  return regexExecAll(obj(regex0), s, $std_core.max(start_332, 0));
}
 
// Returns "True" if a particular capture group actually matched.
// This is used if the group can match, but may capture the empty string.
function matchedOn(groups0, index0)  /* (groups : groups, index : int) -> bool */  {
  return $std_core.bool((grp(groups0)[index0] ? 1 : 0));
}
 
// Return first group that was matched (or -1 if nothing was matched)
function firstMatchedOn(groups0, start, end)  /* (groups : groups, start : ?int, end : ?int) -> int */  {
  var start_468 = (start !== undefined) ? start : 1;
  var end_472 = (end !== undefined) ? end : 10;
  var _x0 = $std_core.find($std_core.list(start_468, end_472), function(i  /* int */ ) {  return matchedOn(groups0, i);});
  return (_x0 == null) ? $std_core._tilde_(1) : _x0.unJust;
}
 
// Return the first matched group (or "" if nothing matched) starting at "start"
// and returning at most group "end"
function firstMatched(groups0, start, end)  /* (groups : groups, start : ?int, end : ?int) -> string */  {
  var start_579 = (start !== undefined) ? start : 1;
  var end_583 = (end !== undefined) ? end : 10;
  var i = firstMatchedOn(groups0, start_579, end_583);
  return (i >= 0) ? _index_(groups0, i) : "";
}
function regexReplace(_arg1, _arg2, _arg3, _arg4, _arg5)  /* (any, string, string, int, int) -> string */  {
  return $regexReplace(_arg1,_arg2,_arg3,_arg4,_arg5);
}
function regexReplaceFun(_arg1, _arg2, _arg3, _arg4, _arg5)  /* forall<e> (any, string, (matched) -> e string, int, int) -> e string */  {
  return $regexReplaceFun(_arg1,_arg2,_arg3,_arg4,_arg5);
}
function replaceEx(s, regex0, repl, all, start)  /* forall<e> (s : string, regex : regex, repl : (matched : matched) -> e string, all : ?bool, start : ?int) -> e string */  {
  var all_692 = (all !== undefined) ? all : false;
  var start_696 = (start !== undefined) ? start : 0;
  var _x0 = start_696 > (s).length;
  if (_x0) {
    return s;
  }
  else {
    $std_core._unit_;
  }
  var _x0 = (all_692) ? 1 : 0;
  return regexReplaceFun(obj(regex0), s, repl, _x0, $std_core.max(start_696, 0));
}
function replaceEx_1(s, regex0, repl, all, start)  /* (s : string, regex : regex, repl : string, all : ?bool, start : ?int) -> string */  {
  var all_786 = (all !== undefined) ? all : false;
  var start_790 = (start !== undefined) ? start : 0;
  var _x0 = start_790 > (s).length;
  if (_x0) {
    return s;
  }
  else {
    $std_core._unit_;
  }
  var _x0 = (all_786) ? 1 : 0;
  return regexReplace(obj(regex0), s, repl, _x0, $std_core.max(start_790, 0));
}
 
// Replace the all occurrences of "regex" by the result of the replacement function "repl" in a string "s".
function replaceAll(s, regex0, repl, start)  /* forall<e> (s : string, regex : regex, repl : (matched : matched) -> e string, start : ?int) -> e string */  {
  var start_881 = (start !== undefined) ? start : 0;
  return replaceEx(s, regex0, repl, true, start_881);
}
 
// Replace all ocurrences of "regex" by the result of a replacement string "repl" in a string "s".
function replaceAll_1(s, regex0, repl, start)  /* (s : string, regex : regex, repl : string, start : ?int) -> string */  {
  var start_919 = (start !== undefined) ? start : 0;
  return replaceEx_1(s, regex0, repl, true, start_919);
}
function regexCreate(_arg1, _arg2, _arg3)  /* (string, int, int) -> any */  {
  return $regexCreate(_arg1,_arg2,_arg3);
}
 
// Create a new regular expression. Takes two optional parameters. Set "ignoreCase" to "True"
// to ignore uppercase/lowercase distinction. If  "multiline" is set to "True", then "^" and "$"
// match also the beginning and end of every line (instead of the entire input).
function regex(regex0, ignorecase, multiline)  /* (regex : string, ignorecase : ?bool, multiline : ?bool) -> regex */  {
  var ignorecase_962 = (ignorecase !== undefined) ? ignorecase : false;
  var multiline_966 = (multiline !== undefined) ? multiline : false;
  var _x0 = (ignorecase_962) ? 1 : 0;
  var _x1 = (multiline_966) ? 1 : 0;
  return Regex(regexCreate(regex0, _x0, _x1));
}
var rxNonGroup = regex("[^\\\\\\[(]+|\\\\[\\s\\S]?|\\(\\?|\\[(?:[^\\\\\\]]|\\\\.)*\\]", undefined, undefined);
function regexSource(r)  /* (r : any) -> string */  {
  return r.regex.source;
}
 
// Return the pattern as a string
function source(r)  /* (r : regex) -> string */  {
  return regexSource(obj(r));
}
 
// How many groups are captured by this regex?
function groupsCount(r)  /* (r : regex) -> int */  {
  return (replaceAll_1(source(r), rxNonGroup, "", undefined)).length;
}
function regexCreateAlt(_arg1, _arg2, _arg3)  /* (vector<string>, int, int) -> any */  {
  return $regexCreateAlt(_arg1,_arg2,_arg3);
}
 
// Create a new _alternative_ regular expression. 
// Matches any of the given patterns but the groups are local to each alternative.
// See "alternative" to find out which alternative was matched. Contains an optimization
// where a common prefix of all patterns is lifted out of the alternative to increase efficiency.
// Takes two optional parameters. Set "ignoreCase" to "True"
// to ignore uppercase/lowercase distinction. If  "multiline" is set to "True", then "^" and "$"
// match also the beginning and end of every line (instead of the entire input).  
// Note: currently only supported in the javascript backend.
function regexAlt(regexs, ignorecase, multiline)  /* (regexs : list<string>, ignorecase : ?bool, multiline : ?bool) -> regex */  {
  var ignorecase_1106 = (ignorecase !== undefined) ? ignorecase : false;
  var multiline_1110 = (multiline !== undefined) ? multiline : false;
  var _x0 = (ignorecase_1106) ? 1 : 0;
  var _x1 = (multiline_1110) ? 1 : 0;
  return Regex(regexCreateAlt($std_core.vector_4(regexs), _x0, _x1));
}
function regexSplit(_arg1, _arg2, _arg3, _arg4)  /* (any, string, int, int) -> vector<string> */  {
  return $regexSplit(_arg1,_arg2,_arg3,_arg4);
}
 
// Replace the first occurrence of "regex" by the result of the replacement function "repl" in a string "s".
function replace(s, regex0, repl, start)  /* forall<e> (s : string, regex : regex, repl : (matched : matched) -> e string, start : ?int) -> e string */  {
  var start_1240 = (start !== undefined) ? start : 0;
  return replaceEx(s, regex0, repl, false, start_1240);
}
 
// Replace the first occurrence of "regex" by the result a replacement string "repl" in a string "s".
// The replacement string can contain `$$` for a `$` sign, `$n` for a capture group,
// `$&` for the entire match (`==$0`).
function replace_1(s, regex0, repl, start)  /* (s : string, regex : regex, repl : string, start : ?int) -> string */  {
  var start_1278 = (start !== undefined) ? start : 0;
  return replaceEx_1(s, regex0, repl, false, start_1278);
}
 
// Split a string "s" in at most "n" parts using a regular expression "r" as separator.
function split(s, r, n, start)  /* (s : string, r : regex, n : ?int, start : ?int) -> vector<string> */  {
  var n_1314 = (n !== undefined) ? n : $std_core.maxInt;
  var start_1318 = (start !== undefined) ? start : 0;
  if (n_1314 <= 0) {
    return [];
  }
  else {
    $std_core._unit_;
  }
  var _x0 = start_1318 > (s).length;
  if (_x0) {
    return $std_core.vector_3(1, s);
  }
  else {
    $std_core._unit_;
  }
  var _x0 = (n_1314 === $std_core.maxInt) ? 0 : n_1314;
  return regexSplit(obj(r), s, _x0, $std_core.max(start_1318, 0));
}
function splitExcludeX(s, splitr, acc)  /* (s : string, splitr : regex, acc : string) -> list<string> */  { tailcall: while(1)
{
  if ((s === "")) {
    return $std_core.Cons(acc, $std_core.Nil);
  }
  else {
    $std_core._unit_;
  }
  var _x0 = find(s, splitr, undefined);
  if (_x0 == null) {
    {
      var _x1 = ((s).substr(1 >=1 ? 1 : 1));
      var _x2 = (acc + $std_core.substr_1(s, 0, 1));
      s = _x1;
      acc = _x2;
      continue tailcall;
    }
  }
  else {
    var _x3 = matchedOn(groups(_x0.unJust), 1);
    if (_x3) {
      {
        var _x4 = ((s).substr(next(_x0.unJust) >=1 ? next(_x0.unJust) : 1));
        var _x5 = (acc + $std_core.substr_1(s, 0, next(_x0.unJust)));
        s = _x4;
        acc = _x5;
        continue tailcall;
      }
    }
    else {
      return $std_core.Cons(acc, splitExcludeX(((s).substr(next(_x0.unJust) >=1 ? next(_x0.unJust) : 1)), splitr, ""));
    }
  }
}}
 
// Split a string "s" over separator "sep" where "sep" does not occur in 
// _tokens_ matching "exclude".
// For example: `splitExclude("comma,'sep,arated',values", regex(","),regex("'[^']*'|[^',]"))`
function splitExclude(s, sep, exclude)  /* (s : string, sep : regex, exclude : regex) -> list<string> */  {
  if ((s === "")) {
    return $std_core.Nil;
  }
  else {
    var splitr = regex(("^(?:((?:" + (source(exclude) + (")+)|(" + (source(sep) + "))")))), undefined, undefined);
    return splitExcludeX(s, splitr, "");
  }
}
 
// koka exports:
return { 'Matched': Matched, 'grp': grp, '_copy': _copy, 'index': index, 'next': next, 'matched': matched, 'groups': groups, '_copy_1': _copy_1, 'obj': obj, '_copy_2': _copy_2, 'groupsIndex': groupsIndex, '_index_': _index_, 'alternative': alternative, 'regexExec': regexExec, 'find': find, 'contains': contains, 'regexExecAll': regexExecAll, 'findAll': findAll, 'matchedOn': matchedOn, 'firstMatchedOn': firstMatchedOn, 'firstMatched': firstMatched, 'regexReplace': regexReplace, 'regexReplaceFun': regexReplaceFun, 'replaceEx': replaceEx, 'replaceEx_1': replaceEx_1, 'replaceAll': replaceAll, 'replaceAll_1': replaceAll_1, 'regexCreate': regexCreate, 'regex': regex, 'rxNonGroup': rxNonGroup, 'regexSource': regexSource, 'source': source, 'groupsCount': groupsCount, 'regexCreateAlt': regexCreateAlt, 'regexAlt': regexAlt, 'regexSplit': regexSplit, 'replace': replace, 'replace_1': replace_1, 'split': split, 'splitExcludeX': splitExcludeX, 'splitExclude': splitExclude };
});