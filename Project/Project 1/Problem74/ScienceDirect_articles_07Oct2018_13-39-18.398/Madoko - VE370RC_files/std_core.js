// koka generated module: "std/core"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define([], function() {
"use strict";
 
// koka declarations:
/*---------------------------------------------------------------------------
  Copyright 2012 Microsoft Corporation.
 
  This is free software; you can redistribute it and/or modify it under the
  terms of the Apache License, Version 2.0. A copy of the License can be
  found in the file "license.txt" at the root of this distribution.
---------------------------------------------------------------------------*/
var $std_core;
var $inBrowser = (typeof window !== 'undefined' && window.document);
var $inWebWorker = (!$inBrowser && typeof importScripts !== 'undefined');
/*------------------------------------------------
  async interface
------------------------------------------------*/
function async_create() {
  return { done: false, value: null }; // & exn, on, on-exn
}
function async_create_done(x) {
  return { done: true, value: x };
}
function async_is_done(async) {
  return (async.done ? true : false);
}
function async_on(async,f) {
  var result = async_create();
  if (async.done) {
    if (!async.exn) {
      async_supply(result,f(async.value));
    }
  }
  else {    
    if (async.on) {
      var g = async.on;
      async.on = function(x) { g(x); async_supply(result,f(x)); };    
    }
    else {
      async.on = function(x) { async_supply(result,f(x)); };
    }
  }
  return result;
}
function async_on_exn(async,f) {
  var result = async_create();
  if (async.done) {
    if (async.exn) {
      async_supply(result,f(async.exn));
    }
  }
  else {    
    if (async.on_exn) {
      var g = async.on_exn;
      async.on_exn = function(x) { g(x); async_supply(result,f(x)); };    
    }
    else {
      async.on_exn = function(x) { async_supply(result,f(x)); };
    }
  }
  return result;
}
function async_supply(async,x) {
  if (async.done) return;
  async.done = true;
  async.value = x;
  if (async.on) { 
    async.on(x); 
    async.on = null; async.on_exn = null;
  }
}
function async_supply_exn(async,exn) {
  if (async.done) return;
  async.done = true;
  async.exn = exn;
  if (async.on_exn) { 
    async.on_exn(exn); 
    async.on = null; async.on_exn = null;
  }
}
/*------------------------------------------------
  Console for Node
------------------------------------------------*/
var $node = (function() {
  if (typeof window !== "undefined" || typeof process === "undefined") {
    // probably on the browser
    return {
      in: function() { return null; },
      out: function() { return null; }
    }
  }
  // on Node
  var nodeout = { print: function(s) { process.stdout.write(s); } };
  var nodein = null;
  function get_nodein() {
    if (!nodein) { 
      var readline = require("readline");
      nodein = readline.createInterface( { input: process.stdin, output: process.stdout });
      nodein.print = nodeout.print;
      nodein.on('line', function(s) {
        if (nodein.onreadline) {
          var async = nodein.onreadline;
          nodein.onreadline = null;
          async_supply(async,s);
        }
        if (nodein.onreadline==null) {
          nodein.close(); // no more readlines -> close the app
          nodein = null;
        }
      });
    }
    return nodein;
  }
  return {
    in: get_nodein,
    out: function() { return nodeout; },
  };
})();
/*------------------------------------------------
  Console for Browser
------------------------------------------------*/
var $browser = (function(){
  if (typeof window === "undefined" || !window.document) {
    return {
      in: function() { return null; },
      out: function() { return null; }
    }
  }
  var escapes = {
      '&': '&amp;', // & first!
      '<': '&lt;',
      '>': '&gt;',
      '\'': '&apos;',
      '"': '&quot;',
      '\n': '<br>',
      '\r': '',
  };
  var escapes_regex = new RegExp("[" + Object.keys(escapes).join("") + "]", "g");
  function html_escape(txt) {
    return txt.replace(escapes_regex, function (s) {
      var r = escapes[s];
      return (r ? r : "");
    });
  }
  function get_console() {
    var cons = document.getElementById("koka-console");
    if (cons==null) {
      cons = document.createElement("div");
      cons.id = "koka-console";
      cons.style.fontFamily = "Consolas,Monaco,'Ubuntu Mono','Droid Sans Mono','Source Code Pro',monospace"
      cons.style.fontSize = "12pt";
      cons.style.width = "99%";
      document.body.appendChild(cons);
    }
    if (cons.display == "none") return null;
    return cons;
  }
  function get_console_out() 
  {
    var output = document.getElementById("koka-console-out");
    if (!output) {
      var cons = get_console();
      if (!cons) return null;
      output = document.createElement("div");
      output.id = "koka-console-out";
      output.style.fontFamily = "Consolas,Monaco,'Ubuntu Mono','Droid Sans Mono','Source Code Pro',monospace"
      output.style.fontSize = "12pt";
      output.style.width = "99%";
      output.style.height = "30ex";
      output.style.border = "gray solid 1px";
      output.wrap="off";
      output.style.overflow = "auto";
      output.style.whiteSpace = "pre";
      output.style.padding = "2px";
      output.style.margin = "2px";
      output.style.paddingBottom = "4px";
      output.readOnly = true;
      cons.appendChild(output);
    }
    if (!output.print) {
      output.print_html = function(s) {
        output.innerHTML = output.innerHTML + s;
        
        // try to scroll to the end
        if (output.createTextRange) {
          output.createTextRange().scrollIntoView(false);
        }
        else if (output.scrollTop !== undefined) {
          output.scrollTop = output.scrollHeight;
        }    
      };
      output.print = function(s) {
        output.print_html(html_escape(s));
      }
    }
    return output;
  }
  function caret_to_end(elem) {
    if (!elem || !elem.value || !elem.value.length) return;
    var pos = elem.value.length;
    if (pos===0) return;
    if (elem.createTextRange) { /* ie */
      var rng = elem.createTextRange();
      rng.collapse(true);
      rng.moveEnd("character",pos);
      rng.moveStart("character",pos);
      rng.select();
    }
    else if (elem.setSelectionRange) {  /* the rest */
      elem.setSelectionRange(pos,pos);
    }
  }
  function overlap(s,t) {
    if (!s || !t) return 0;
    var len = max(s.length,t.length);
    var i = 0;
    while(i < len) {
      if (s[i] !== t[i]) return i;
      i++;
    }
    return i;
  }
  var console_input_init = false;
  function get_console_input() 
  {
    var input = document.getElementById("koka-console-in");
    if (!input) {
      var cons = get_console();
      if (!cons) return null;
      get_console_out(); // ensure there is an output pane
      input = document.createElement("input");
      input.type = "text";
      input.id = "koka-console-in";
      input.style.fontFamily = "Consolas,Monaco,'Ubuntu Mono','Droid Sans Mono','Source Code Pro',monospace"
      input.style.fontSize = "12pt";
      input.style.width = "99%";
      input.style.border = "gray solid 1px";
      input.style.padding = "2px";
      input.style.margin = "2px";
      cons.appendChild(input);
    }
    
    if (!console_input_init) {
      console_input_init = true;
      var prompt = "> ";
      input.value = prompt;
      input.onfocus = function() {
        caret_to_end(input); /* needed on IE 10 */
      }
      input.onkeypress = function(ev) {
        ev = ev || window.event;
        if(ev.keyCode == 13) { 
          var content = input.value;
          input.value = prompt;
          var i = overlap(prompt,content);            // remove prompt prefix (if present)
          if (i > 0) content = content.substring(i);
          print_html("<span style='color: gray'>" + html_escape(prompt + content) + "</span><br>")
          if (input.onreadline) {
            var async = input.onreadline;
            input.onreadline = null;
            async_supply(async,content);
          }
        }
      };
    }
    return input;
  }
    
  function print_html(msg) {
    var output = get_console_out();
    if (output && output.print_html) {
      output.print_html(msg);
    }
  }
  return {
    in: get_console_input,
    out: get_console_out,
  }
})();
/*------------------------------------------------
  Console 
------------------------------------------------*/
function $print(msg) {
  var output = $node.out() || $browser.out();
  if (output && output.print) {
    output.print(msg);
  }
}
function $println(msg) {
  $print(msg + "\n");
}
function $trace(msg) {
  if (typeof console !== "undefined") {
    console.log(msg)
  }
}
function $read_line() 
{
  var async;
  var input = $node.in() || $browser.in();
  if (input) {
    if (!input.onreadline) input.onreadline = async_create();
    async = input.onreadline;
    if (input.focus) input.focus();
  }
  else {
    async = async_create();
  }
  return async;
}
/*------------------------------------------------
  Formatting
------------------------------------------------*/
var $align = function(str,n,pad) { 
  if (n == undefined) return str; 
  n = n - str.length;
  if (n > 0) {
    if (pad == undefined) pad = " ";
    return (Array(n+1).join(pad) + str);
  }
  return str;
}
var $gformat = function(x,format) {
  var hex = /^[xX]([0-9]*)/.exec(format)
  if (hex) {
    var s = x.toString(16)
    if (format[0] == 'X') s = s.toUpperCase();
    return $align( s, hex[1], "0" )
  }
  var exp = /^[eE]([0-9]*)/.exec(format)
  if (exp) {
    return (exp[1] > 0 ? x.toExponential(exp[1]) : x.toExponential());
  }
  var fix = /^[fF]([0-9]*)/.exec(format)
  if (fix) {
    return (fix[1] > 0 ? x.toFixed(fix[1]) : x.toFixed());
  }
  var expfix = /^[gG]([0-9]*)/.exec(format)
  if (expfix) {
    return (expfix[1] > 0 ? x.toPrecision(expfix[1]) : x.toPrecision());
  }
  /* default */
  return x.toString();  
}
/*------------------------------------------------
  Exceptions
------------------------------------------------*/
function $error(s) {
  throw s;
}
function $primcatch(action,handler) {
  try {
    return action();
  }
  catch(exn) {
    return handler(exn)
  }
}
function $finally(action,handler) {
  try {
    return action();
  }
  finally {
    handler();
  }
}
function $pattern_match_error(location,definition) { 
  throw(location + (definition ? (": " + definition) : "") + ": pattern match failure"); 
};
/*------------------------------------------------
  Various
------------------------------------------------*/
var $int32_multiply = function(x,y) {
  var xhi = (x >> 16) & 0xFFFF;
  var xlo = x & 0xFFFF;
  var yhi = (y >> 16) & 0xFFFF;
  var ylo = y & 0xFFFF;
  var hi  = ((xhi * ylo) + (xlo * yhi));
  return (((hi << 16) + (xlo * ylo))|0)
}
var $int32_cmod = function(x,y) {
  if (y === 0) throw "modulus of zero";
  return ((x%y)|0);
}
var $int32_cdiv = function(x,y) {
  if (y === 0) throw "division by zero";
  return ((x/y)|0);
}
/*------------------------------------------------
  list helpers
------------------------------------------------*/
// Create a list with constant stack space
function $list(elems,tail) {
  var xs = tail;
  if (elems!=null && elems.length>0) { 
    for(var i = elems.length - 1; i >= 0; i--) {
      var elem = elems[i];
      xs = Cons(elem,xs);
    }
  }
  return xs;
}
// Create an array from a list with constant stack space
function $unlist(list) {
  var elems = [];
  while(list) {
    elems.push(list.head);
    list = list.tail;
  }
  return elems;
}
/*------------------------------------------------
  General javascript helpers
------------------------------------------------*/
// make a shallow copy
function $copy(obj) {
  if (typeof obj !== 'object') return obj;
  var value = obj.valueOf();
  if (obj != value) return new obj.constructor(value);
  var newobj = {};
  for( var prop in obj) newobj[prop] = obj[prop];
  return newobj;
}
// get the fields of an object
function $fields(obj) {
  var props = [];
  for (var prop in obj) props.push(prop);
  return props;
}
/* assign here so inlined primitives are available in system.core itself */
$std_core = { "intMultiply": $int32_multiply
            , "intCmod": $int32_cmod
            , "intCdiv": $int32_cdiv
            , "inBrowser": $inBrowser
            , "conslist": $list
            }
var _unit_ = 1;  /* () */ 
function _tuple2_(fst, snd)  /* forall<a,b> (fst : a, snd : b) -> (a, b) */  {
  return { fst: fst, snd: snd };
}
function _tuple3_(fst, snd, thd)  /* forall<a,b,c> (fst : a, snd : b, thd : c) -> (a, b, c) */  {
  return { fst: fst, snd: snd, thd: thd };
}
function _tuple4_(fst, snd, thd, field4)  /* forall<a,b,c,d> (fst : a, snd : b, thd : c, field4 : d) -> (a, b, c, d) */  {
  return { fst: fst, snd: snd, thd: thd, field4: field4 };
}
function _lp__comma__comma__comma__comma__rp_(fst, snd, thd, field4, field5)  /* forall<a,b,c,d,a1> (fst : a, snd : b, thd : c, field4 : d, field5 : a1) -> (a, b, c, d, a1) */  {
  return { fst: fst, snd: snd, thd: thd, field4: field4, field5: field5 };
}
var False = false;
var True = true;
function Left(left)  /* forall<a,b> (left : a) -> either<a,b> */  {
  return { _tag: 1, left: left };
}
function Right(left)  /* forall<a,b> (left : b) -> either<a,b> */  {
  return { _tag: 2, left: left };
}
var Nil = null;  /* forall<a> list<a> */ 
function Cons(head, tail)  /* forall<a> (head : a, tail : list<a>) -> list<a> */  {
  return { head: head, tail: tail };
}
var Nothing = null;  /* forall<a> maybe<a> */ 
function Just(unJust)  /* forall<a> (unJust : a) -> maybe<a> */  {
  return { unJust: unJust };
}
function Optional(value)  /* forall<a> (value : a) -> ?a */  {
  return value;
}
var None = undefined;  /* forall<a> ?a */ 
var Lt = 1;  /* order */ 
var Eq = 2;  /* order */ 
var Gt = 3;  /* order */ 
function Next(head, tail)  /* forall<a> (head : a, tail : stream<a>) -> stream<a> */  {
  return { head: head, tail: tail };
}
 
// Raise a pattern match exception. This is function is used internally by the
// compiler to generate error messages on pattern match failures.
function patternMatchError(range, def)  /* forall<a> (range : string, def : string) -> exn a */  {
  return $pattern_match_error(range,def);
}
function _copy(_this)  /* (()) -> () */  {
  return _unit_;
}
 
// Automatically generated. Retrieves the `fst` constructor field of the ":(,)" type.
function fst(_this)  /* forall<a,b> ((a, b)) -> a */  {
  return _this.fst;
}
 
// Automatically generated. Retrieves the `snd` constructor field of the ":(,)" type.
function snd(_this)  /* forall<a,b> ((a, b)) -> b */  {
  return _this.snd;
}
function _copy_1(_this, fst0, snd0)  /* forall<a,b> ((a, b), fst : ?a, snd : ?b) -> (a, b) */  {
  var fst_1715 = (fst0 !== undefined) ? fst0 : fst(_this);
  var snd_1723 = (snd0 !== undefined) ? snd0 : snd(_this);
  return _tuple2_(fst_1715, snd_1723);
}
 
// Automatically generated. Retrieves the `fst` constructor field of the ":(,,)" type.
function fst_1(_this)  /* forall<a,b,c> ((a, b, c)) -> a */  {
  return _this.fst;
}
 
// Automatically generated. Retrieves the `snd` constructor field of the ":(,,)" type.
function snd_1(_this)  /* forall<a,b,c> ((a, b, c)) -> b */  {
  return _this.snd;
}
 
// Automatically generated. Retrieves the `thd` constructor field of the ":(,,)" type.
function thd(_this)  /* forall<a,b,c> ((a, b, c)) -> c */  {
  return _this.thd;
}
function _copy_2(_this, fst0, snd0, thd0)  /* forall<a,b,c> ((a, b, c), fst : ?a, snd : ?b, thd : ?c) -> (a, b, c) */  {
  var fst_1910 = (fst0 !== undefined) ? fst0 : fst_1(_this);
  var snd_1950 = (snd0 !== undefined) ? snd0 : snd_1(_this);
  var thd_1959 = (thd0 !== undefined) ? thd0 : thd(_this);
  return _tuple3_(fst_1910, snd_1950, thd_1959);
}
 
// Automatically generated. Retrieves the `fst` constructor field of the ":(,,,)" type.
function fst_2(_this)  /* forall<a,b,c,d> ((a, b, c, d)) -> a */  {
  return _this.fst;
}
 
// Automatically generated. Retrieves the `snd` constructor field of the ":(,,,)" type.
function snd_2(_this)  /* forall<a,b,c,d> ((a, b, c, d)) -> b */  {
  return _this.snd;
}
 
// Automatically generated. Retrieves the `thd` constructor field of the ":(,,,)" type.
function thd_1(_this)  /* forall<a,b,c,d> ((a, b, c, d)) -> c */  {
  return _this.thd;
}
 
// Automatically generated. Retrieves the `field4` constructor field of the ":(,,,)" type.
function field4(_this)  /* forall<a,b,c,d> ((a, b, c, d)) -> d */  {
  return _this.field4;
}
function _copy_3(_this, fst0, snd0, thd0, field40)  /* forall<a,b,c,d> ((a, b, c, d), fst : ?a, snd : ?b, thd : ?c, field4 : ?d) -> (a, b, c, d) */  {
  var fst_2310 = (fst0 !== undefined) ? fst0 : fst_2(_this);
  var snd_2373 = (snd0 !== undefined) ? snd0 : snd_2(_this);
  var thd_2423 = (thd0 !== undefined) ? thd0 : thd_1(_this);
  var field4_2433 = (field40 !== undefined) ? field40 : field4(_this);
  return _tuple4_(fst_2310, snd_2373, thd_2423, field4_2433);
}
 
// Automatically generated. Retrieves the `fst` constructor field of the ":(,,,,)" type.
function fst_3(_this)  /* forall<a,b,c,d,a1> ((a, b, c, d, a1)) -> a */  {
  return _this.fst;
}
 
// Automatically generated. Retrieves the `snd` constructor field of the ":(,,,,)" type.
function snd_3(_this)  /* forall<a,b,c,d,a1> ((a, b, c, d, a1)) -> b */  {
  return _this.snd;
}
 
// Automatically generated. Retrieves the `thd` constructor field of the ":(,,,,)" type.
function thd_2(_this)  /* forall<a,b,c,d,a1> ((a, b, c, d, a1)) -> c */  {
  return _this.thd;
}
 
// Automatically generated. Retrieves the `field4` constructor field of the ":(,,,,)" type.
function field4_1(_this)  /* forall<a,b,c,d,a1> ((a, b, c, d, a1)) -> d */  {
  return _this.field4;
}
 
// Automatically generated. Retrieves the `field5` constructor field of the ":(,,,,)" type.
function field5(_this)  /* forall<a,b,c,d,a1> ((a, b, c, d, a1)) -> a1 */  {
  return _this.field5;
}
function _copy_4(_this, fst0, snd0, thd0, field40, field50)  /* forall<a,b,c,d,a1> ((a, b, c, d, a1), fst : ?a, snd : ?b, thd : ?c, field4 : ?d, field5 : ?a1) -> (a, b, c, d, a1) */  {
  var fst_3014 = (fst0 !== undefined) ? fst0 : fst_3(_this);
  var snd_3105 = (snd0 !== undefined) ? snd0 : snd_3(_this);
  var thd_3182 = (thd0 !== undefined) ? thd0 : thd_2(_this);
  var field4_3242 = (field40 !== undefined) ? field40 : field4_1(_this);
  var field5_3253 = (field50 !== undefined) ? field50 : field5(_this);
  return _lp__comma__comma__comma__comma__rp_(fst_3014, snd_3105, thd_3182, field4_3242, field5_3253);
}
 
// Automatically generated. Tests for the "False" constructor of the ":bool" type.
function isFalse(bool0)  /* (bool : bool) -> bool */  {
  return (!bool0);
}
 
// Automatically generated. Tests for the "True" constructor of the ":bool" type.
function isTrue(bool0)  /* (bool : bool) -> bool */  {
  return (bool0);
}
 
// Automatically generated. Tests for the "Left" constructor of the ":either" type.
function isLeft(either)  /* forall<a,b> (either : either<a,b>) -> bool */  {
  return (either._tag === 1);
}
 
// Automatically generated. Tests for the "Right" constructor of the ":either" type.
function isRight(either)  /* forall<a,b> (either : either<a,b>) -> bool */  {
  return (either._tag === 2);
}
 
// Automatically generated. Retrieves the `head` constructor field of the ":list" type.
function head(list0)  /* forall<a> (list : list<a>) -> exn a */  {
  return (list0 != null) ? list0.head : patternMatchError("..\\koka-0.6\\lib\\std\\core.kk(355,12)", "head");
}
 
// Automatically generated. Retrieves the `tail` constructor field of the ":list" type.
function tail(list0)  /* forall<a> (list : list<a>) -> exn list<a> */  {
  return (list0 != null) ? list0.tail : patternMatchError("..\\koka-0.6\\lib\\std\\core.kk(355,20)", "tail");
}
 
// Automatically generated. Tests for the "Nil" constructor of the ":list" type.
function isNil(list0)  /* forall<a> (list : list<a>) -> bool */  {
  return (list0 == null);
}
 
// Automatically generated. Tests for the "Cons" constructor of the ":list" type.
function isCons(list0)  /* forall<a> (list : list<a>) -> bool */  {
  return (list0 != null);
}
 
// Automatically generated. Retrieves the `unJust` constructor field of the ":maybe" type.
function unJust(maybe0)  /* forall<a> (maybe : maybe<a>) -> exn a */  {
  return (maybe0 != null) ? maybe0.unJust : patternMatchError("..\\koka-0.6\\lib\\std\\core.kk(323,13)", "unJust");
}
 
// Automatically generated. Tests for the "Nothing" constructor of the ":maybe" type.
function isNothing(maybe0)  /* forall<a> (maybe : maybe<a>) -> bool */  {
  return (maybe0 == null);
}
 
// Automatically generated. Tests for the "Just" constructor of the ":maybe" type.
function isJust(maybe0)  /* forall<a> (maybe : maybe<a>) -> bool */  {
  return (maybe0 != null);
}
 
// Automatically generated. Retrieves the `value` constructor field of the ":optional" type.
function value(optional)  /* forall<a> (optional : ?a) -> exn a */  {
  return (optional !== undefined) ? optional : patternMatchError("..\\koka-0.6\\lib\\std\\core.kk(227,16)", "value");
}
 
// Automatically generated. Tests for the "Optional" constructor of the ":optional" type.
function isOptional(optional)  /* forall<a> (optional : ?a) -> bool */  {
  return (optional !== undefined);
}
 
// Automatically generated. Tests for the "None" constructor of the ":optional" type.
function isNone(optional)  /* forall<a> (optional : ?a) -> bool */  {
  return (optional == null);
}
 
// Automatically generated. Tests for the "Lt" constructor of the ":order" type.
function isLt(order0)  /* (order : order) -> bool */  {
  return (order0 === 1);
}
 
// Automatically generated. Tests for the "Eq" constructor of the ":order" type.
function isEq(order0)  /* (order : order) -> bool */  {
  return (order0 === 2);
}
 
// Automatically generated. Tests for the "Gt" constructor of the ":order" type.
function isGt(order0)  /* (order : order) -> bool */  {
  return (order0 === 3);
}
 
// Automatically generated. Retrieves the `head` constructor field of the ":stream" type.
function head_1(stream)  /* forall<a> (stream : stream<a>) -> a */  {
  return stream.head;
}
 
// Automatically generated. Retrieves the `tail` constructor field of the ":stream" type.
function tail_1(stream)  /* forall<a> (stream : stream<a>) -> stream<a> */  {
  return stream.tail;
}
function _copy_5(_this, head0, tail0)  /* forall<a> (stream<a>, head : ?a, tail : ?stream<a>) -> stream<a> */  {
  var head_3657 = (head0 !== undefined) ? head0 : head_1(_this);
  var tail_3680 = (tail0 !== undefined) ? tail0 : tail_1(_this);
  return Next(head_3657, tail_3680);
}
function stringCompare(x, y)  /* (x : string, y : string) -> int */  {
  return (x===y ? 0 : (x > y ? 1 : -1));
}
 
// The maximal integer value before overflow happens
var maxInt = 2147483647;
 
// Substract two character codePoints
function _dash__2(c, d)  /* (c : char, d : char) -> total char */  {
  return String.fromCharCode((((c).charCodeAt(0) - (d).charCodeAt(0))|0));
}
function int_2(x)  /* (x : order) -> int */  {
  if (x === 1) {
    return ((0 - 1)|0);
  }
  else if (x === 2) {
    return 0;
  }
  else {
    return 1;
  }
}
function _lt__3(x, y)  /* (x : order, y : order) -> bool */  {
  return int_2(x) < int_2(y);
}
function _lt__4(x, y)  /* (x : bool, y : bool) -> bool */  {
  return (!(x) && y);
}
function _eq__eq__4(x, y)  /* (x : order, y : order) -> bool */  {
  return int_2(x) === int_2(y);
}
function order(i)  /* (i : int) -> order */  {
  if (i < 0) {
    return Lt;
  }
  else {
    return (i > 0) ? Gt : Eq;
  }
}
 
// Compare two strings
function compare_4(x, y)  /* (x : string, y : string) -> order */  {
  return order(stringCompare(x, y));
}
function _lt__5(x, y)  /* (x : string, y : string) -> bool */  {
  return _eq__eq__4(compare_4(x, y), Lt);
}
function _gt__3(x, y)  /* (x : order, y : order) -> bool */  {
  return int_2(x) > int_2(y);
}
function _gt__4(x, y)  /* (x : bool, y : bool) -> bool */  {
  return (x && !(y));
}
function _gt__5(x, y)  /* (x : string, y : string) -> bool */  {
  return _eq__eq__4(compare_4(x, y), Gt);
}
function _eq__eq__5(x, y)  /* (x : bool, y : bool) -> bool */  {
  return (x) ? y : !(y);
}
function compare(x, y)  /* (x : char, y : char) -> order */  {
  if ((x < y)) {
    return Lt;
  }
  else {
    return ((x > y)) ? Gt : Eq;
  }
}
function compare_1(x, y)  /* (x : bool, y : bool) -> order */  {
  if (_lt__4(x, y)) {
    return Lt;
  }
  else {
    return (_gt__4(x, y)) ? Gt : Eq;
  }
}
function compare_2(x, y)  /* (x : int, y : int) -> order */  {
  if (x < y) {
    return Lt;
  }
  else {
    return (x > y) ? Gt : Eq;
  }
}
function compare_3(x, y)  /* (x : double, y : double) -> order */  {
  if ((x < y)) {
    return Lt;
  }
  else {
    return ((x > y)) ? Gt : Eq;
  }
}
function int_1(b)  /* (b : bool) -> int */  {
  return (b) ? 1 : 0;
}
 
// The minimal integer value before underflow happens
var minInt = ((0 - ((maxInt - 1)|0))|0);
 
// convert a ":double" to an ":int" using "round" to round to its nearest integer.
// If the double is larger than "maxInt" or smaller than "minInt" this returns "default" (=0)
function int_3(d, $default)  /* (d : double, default : ?int) -> int */  {
  var default_4052 = ($default !== undefined) ? $default : 0;
  var _x0 = ((d > (maxInt)) || (d < (minInt)));
  return (_x0) ? default_4052 : (d | 0);
}
 
// Is a string empty?
function isEmpty(s)  /* (s : string) -> bool */  {
  return (s === "");
}
 
// Choose a non-empty string
function _x7C__x7C__1(x, y)  /* (x : string, y : string) -> string */  {
  return (isEmpty(x)) ? y : x;
}
var maxListStack = 200;
 
// Reverse a list.
function reverse(xs)  /* forall<a> (xs : list<a>) -> list<a> */  {
  function reverseAcc(acc, ys)  /* forall<a> (acc : list<a>, ys : list<a>) -> list<a> */  { tailcall: while(1)
  {
    if (ys != null) {
      {
        var _x0 = Cons(ys.head, acc);
        acc = _x0;
        ys = ys.tail;
        continue tailcall;
      }
    }
    else {
      return acc;
    }
  }}
  return reverseAcc(Nil, xs);
}
 
// Append two lists.
function _plus__3(xs, ys)  /* forall<a> (xs : list<a>, ys : list<a>) -> list<a> */  {
   
  // append using _constant_ stack space (by reversing the argument list)
  function revAppend(xx, yy)  /* forall<a> (list<a>, list<a>) -> list<a> */  { tailcall: while(1)
  {
    if (xx != null) {
      {
        var _x0 = Cons(xx.head, yy);
        xx = xx.tail;
        yy = _x0;
        continue tailcall;
      }
    }
    else {
      return yy;
    }
  }}
   
  // append for the first "maxListStack" elements over the stack
  function append(n, xx0, yy0)  /* forall<a> (int, list<a>, list<a>) -> list<a> */  {
    if (n > maxListStack) {
      return revAppend(reverse(xx0), yy0);
    }
    else {
      if (xx0 != null) {
        return Cons(xx0.head, append(((n + 1)|0), xx0.tail, yy0));
      }
      else {
        return yy0;
      }
    }
  }
  if (ys == null) {
    return xs;
  }
  else {
    return (xs == null) ? ys : append(0, xs, ys);
  }
}
 
// Add two character code points
function _plus__4(c, d)  /* (c : char, d : char) -> total char */  {
  return String.fromCharCode((((c).charCodeAt(0) + (d).charCodeAt(0))|0));
}
function _gt__eq__3(x, y)  /* (x : order, y : order) -> bool */  {
  return int_2(x) >= int_2(y);
}
function _gt__eq__4(x, y)  /* (x : bool, y : bool) -> bool */  {
  return !(_lt__4(x, y));
}
function _gt__eq__5(x, y)  /* (x : string, y : string) -> bool */  {
  return _gt__3(compare_4(x, y), Lt);
}
 
// Euclidean-0 modulus. See "(/):(x : int, y : int) -> int" division for more information.
function _perc__1(x, y)  /* (x : int, y : int) -> int */  {
  if (y === 0) {
    return x;
  }
  else {
    _unit_;
  }
  var r = ((x % y)|0);
  if (r >= 0) {
    return r;
  }
  else {
    return (y > 0) ? ((r + y)|0) : ((r - y)|0);
  }
}
 
// Euclidean-0 division.
// Euclidean division is defined as: For any `D`  and `d`  where `d!=0` , we have:
//
// 1. `D == d*(D/d) + (D%d)` 
// 2. `D%d`  is always positive where `0 <= D%d < abs(d)` 
//
// Moreover, Euclidean-0 is a total function, for the case where `d==0`  we have
// that `D%0 == D`  and `D/0 == 0` . So property (1) still holds, but not property (2).
// 
// Useful laws that hold for Euclidean-0 division:
//
// * `D/(-d) == -(D/d)` 
// * `D%(-d) == D%d` 
// * ``D/(2^n) == D `sar` n        ``  (with `0 <= n <= 31`  and `2^n`  means `2`  to the power of `n` )
// * `D%(2^n) == D & ((2^n) - 1)  `  (with `0 <= n <= 31`  and `2^n`  means `2`  to the power of `n` )
//
// Note that an interesting edge case is "minInt / -1" which equals "minInt" since in modulo 32-bit 
// arithmetic "minInt == -1 * minInt == -1 * (minInt / -1) + (minInt % -1)" satisfying property (1).
// Of course "(minInt + 1) / -1" is again positive (namely "maxInt").  
// 
// See also _Division and modulus for computer scientists, Daan Leijen, 2001_ for further information
// available at: <http://research.microsoft.com/pubs/151917/divmodnote.pdf> .
function _fs__1(x, y)  /* (x : int, y : int) -> int */  {
  if (y === 0) {
    return 0;
  }
  else {
    _unit_;
  }
  var q = ((x/y)|0);
  var r = ((x % y)|0);
  if (r >= 0) {
    return q;
  }
  else {
    return (y > 0) ? ((q - 1)|0) : ((q + 1)|0);
  }
}
 
// Compose two functions "f" and "g".
function o(f, g)  /* forall<a,b,c,e> (f : (a) -> e b, g : (c) -> e a) -> ((x : c) -> e b) */  {
  return function(x  /* 5844 */ ) {
    return f(g(x));
  };
}
 
// Negate an integer
function _tilde_(i)  /* (i : int) -> total int */  {
  return ((0 - i)|0);
}
function _excl__eq__4(x, y)  /* (x : order, y : order) -> bool */  {
  return int_2(x) !== int_2(y);
}
function _excl__eq__5(x, y)  /* (x : bool, y : bool) -> bool */  {
  return (x) ? !(y) : y;
}
function _lt__eq__3(x, y)  /* (x : order, y : order) -> bool */  {
  return int_2(x) <= int_2(y);
}
function _lt__eq__4(x, y)  /* (x : bool, y : bool) -> bool */  {
  return !(_gt__4(x, y));
}
function _lt__eq__5(x, y)  /* (x : string, y : string) -> bool */  {
  return _lt__3(compare_4(x, y), Gt);
}
 
// Get (zero-based) element `n`  of a list. Return a `:maybe` type.
function _lb__rb__4(xs, n)  /* forall<a> (xs : list<a>, n : int) -> maybe<a> */  { tailcall: while(1)
{
  if (xs != null) {
    if (n === 0) {
      return Just(xs.head);
    }
    else {
      {
        var _x0 = ((n - 1)|0);
        xs = xs.tail;
        n = _x0;
        continue tailcall;
      }
    }
  }
  else {
    return Nothing;
  }
}}
 
// The identify function returns its argument unchanged.
function id(x)  /* forall<a> (x : a) -> a */  {
  return x;
}
 
// When an asynchronous value is computed, call the specified "handler" (at most once).
function on(async, handler)  /* forall<a,b,e> (async : async<a>, handler : (value : a) -> e b) -> e async<b> */  {
  return async_on(async,handler);
}
 
// Raise an exception with a specified message.
function error(_arg1)  /* forall<a> (string) -> exn a */  {
  return $error(_arg1);
}
 
// Negate an integer
function negate(i)  /* (i : int) -> int */  {
  return ((0 - i)|0);
}
 
// Return the absolute value of an integer.
// Raises an exception if the ":int" is "minInt"
// (since the negation of "minInt" equals itself and is still negative)
function abs_1(i)  /* (i : int) -> exn int */  {
  if (i >= 0) {
    return i;
  }
  else {
    _unit_;
  }
  if (i > minInt) {
    return negate(i);
  }
  else {
    _unit_;
  }
  return error("system.core.abs: cannot make minInt into a positive int without overflow");
}
 
// Do all elements satisfy a predicate ?
function all(xs, predicate)  /* forall<a,e> (xs : list<a>, predicate : (a) -> e bool) -> e bool */  { tailcall: while(1)
{
  if (xs == null) {
    return true;
  }
  else {
    return (predicate(xs.head)) ? all(xs.tail, predicate) : false;
  }
}}
 
// Are there any elements in a list that satisfy a predicate ?
function any(xs, predicate)  /* forall<a,e> (xs : list<a>, predicate : (a) -> e bool) -> e bool */  { tailcall: while(1)
{
  if (xs == null) {
    return false;
  }
  else {
    return (predicate(xs.head)) ? true : any(xs.tail, predicate);
  }
}}
 
// _Unsafe_. This function calls a function and pretends it did not have any effect at all.
function unsafeTotal(action)  /* forall<a,e> (action : () -> e a) -> total a */  {
  return action();
}
 
// _Unsafe_. This function removes the non-termination effect (":div") from the effect of an action
function unsafeNoDiv(action)  /* forall<a,e> (action : () -> <div|e> a) -> e a */  {
  return unsafeTotal(action);
}
 
// Executes `action`  for each integer between `start`  upto `end`  (including both `start`  and `end` ).
// If `start > end`  the function returns without any call to `action` .
function $for(start, end, action)  /* forall<e> (start : int, end : int, action : (int) -> e ()) -> e () */  {
  function rep(i)  /* (i : int) -> <div|6731> () */  { tailcall: while(1)
  {
    if (i <= end) {
      action(i);
      {
        var _x0 = ((i + 1)|0);
        i = _x0;
        continue tailcall;
      }
    }
    else {
      return _unit_;
    }
  }}
  return unsafeNoDiv(function() {
    return rep(start);
  });
}
 
// Returns the length of a list.
function length_3(xs)  /* forall<a> (xs : list<a>) -> int */  {
  function len(acc, ys)  /* forall<a> (int, list<a>) -> int */  { tailcall: while(1)
  {
    if (ys != null) {
      {
        var _x0 = ((acc + 1)|0);
        acc = _x0;
        ys = ys.tail;
        continue tailcall;
      }
    }
    else {
      return acc;
    }
  }}
  return len(0, xs);
}
 
// Invoke "action" for each element of a list
function foreach(xs, action)  /* forall<a,e> (xs : list<a>, action : (a) -> e ()) -> e () */  { tailcall: while(1)
{
  if (xs == null) {
    return _unit_;
  }
  else {
    action(xs.head);
    {
      xs = xs.tail;
      continue tailcall;
    }
  }
}}
 
// Invoke a function "f" for each element in a an array `a`.   
// Note: this can diverge by storing self referential functions in the array
function foreach_1(a, f)  /* forall<a,e,h> (a : array<h,a>, f : (a) -> <read<h>,div|e> ()) -> <read<h>,div|e> () */  {
  return $for(0, (((a).length - 1)|0), function(i  /* int */ ) {  return f((a)[i]);});
}
 
// Invoke a function "f" for each element in a vector "v"
function foreach_2(v, f)  /* forall<a,e> (v : vector<a>, f : (a) -> e ()) -> e () */  {
  return $for(0, (((v).length - 1)|0), function(i  /* int */ ) {  return f((v)[i]);});
}
 
// Invoke a function for each character in a string
function foreach_3(s, f)  /* forall<e> (s : string, f : (char) -> e ()) -> e () */  {
  return $for(0, (((s).length - 1)|0), function(i  /* int */ ) {  return f((s)[i]);});
}
 
// Invoke "action" for each element of a list, passing also the position of the element.
function foreachIndexed(xs, action)  /* forall<a,e> (xs : list<a>, action : (int, a) -> e ()) -> e () */  {
  var i = { value: 0 };
  return foreach(xs, function(x  /* 7648 */ ) {  action(((i).value), x); return ((i).value = ((((i).value) + 1)|0));});
}
 
// Convert a list to an array.
function array_4(xs)  /* forall<a,h> (xs : list<a>) -> array<h,a> */  {
  return unsafeTotal(function() {
    var n = length_3(xs);
    var a = Array(n);
    foreachIndexed(xs, function(i  /* int */ , x  /* 7759 */ ) {  return (a)[i] = x;});
    return a;
  });
}
 
// Copy an array
function copy(self)  /* forall<a,h> (self : array<h,a>) -> (read<h>) array<h,a> */  {
  var dest = Array((self).length);
  error('arrayCopy');
  return dest;
}
 
// Apply a function `f`  to each element of the input list in sequence where takes
// both the index of the current element, the element itself, and the tail list as arguments.
function mapIndexedPeek(xs, f)  /* forall<a,b,e> (xs : list<a>, f : (idx : int, value : a, rest : list<a>) -> e b) -> e list<b> */  {
   
  // recurse using an accumulator using constant heap space
  function mapAcc(g, n, acc, ys)  /* forall<a,b,e> (g : (int, a, list<a>) -> e b, n : int, acc : list<b>, ys : list<a>) -> e list<b> */  { tailcall: while(1)
  {
    if (ys != null) {
      {
        var _x0 = ((n + 1)|0);
        var _x1 = Cons(g(n, ys.head, ys.tail), acc);
        n = _x0;
        acc = _x1;
        ys = ys.tail;
        continue tailcall;
      }
    }
    else {
      return reverse(acc);
    }
  }}
   
  // recurse for the first "maxListStack" elements over the stack (to avoid extra heap allocation)
  function mapIter(g0, n0, ys0)  /* forall<a,b,e> (g : (int, a, list<a>) -> e b, n : int, ys : list<a>) -> e list<b> */  {
    if (n0 > maxListStack) {
      return mapAcc(g0, n0, Nil, ys0);
    }
    else {
      if (ys0 != null) {
        return Cons(g0(n0, ys0.head, ys0.tail), mapIter(g0, ((n0 + 1)|0), ys0.tail));
      }
      else {
        return Nil;
      }
    }
  }
  return mapIter(f, 0, xs);
}
 
// Insert a separator `sep`  between all elements of a list `xs` .
function intersperse(xs, sep)  /* forall<a> (xs : list<a>, sep : a) -> list<a> */  {
   
  //TODO: make tail recursive
  function before(ys, s)  /* forall<a> (list<a>, a) -> list<a> */  {
    if (ys != null) {
      return Cons(s, Cons(ys.head, before(ys.tail, s)));
    }
    else {
      return Nil;
    }
  }
  if (xs != null) {
    return Cons(xs.head, before(xs.tail, sep));
  }
  else {
    return Nil;
  }
}
 
// Concatenate all strings in a list
function join_3(xs)  /* (xs : list<string>) -> string */  {
  function joinAcc(ys, acc)  /* (ys : list<string>, acc : string) -> string */  { tailcall: while(1)
  {
    if (ys != null) {
      {
        var _x0 = (acc + ys.head);
        ys = ys.tail;
        acc = _x0;
        continue tailcall;
      }
    }
    else {
      return acc;
    }
  }}
  if (xs == null) {
    return "";
  }
  else {
    return (xs.tail == null) ? xs.head : joinAcc(xs.tail, xs.head);
  }
}
 
// Concatenate all strings in a list using a specific separator
function join_4(xs, sep)  /* (xs : list<string>, sep : string) -> string */  {
  return join_3(intersperse(xs, sep));
}
 
// Concatenate an array of strings with a separator "sep"
function join_5(v, sep)  /* forall<h> (v : array<h,string>, sep : string) -> (read<h>) string */  {
  return (v).join(sep);
}
function map(t, f)  /* forall<a,b,e> (t : (a, a), f : (a) -> e b) -> e (b, b) */  {
  return _tuple2_(f(fst(t)), f(snd(t)));
}
 
// Returns an integer list of increasing elements from `lo`  to `hi` 
// (including both `lo`  and `hi` ).
// If `lo > hi`  the function returns the empty list.
function list(lo, hi)  /* (lo : int, hi : int) -> total list<int> */  {
  function enumerate(low, high, acc)  /* (low : int, high : int, acc : list<int>) -> div list<int> */  { tailcall: while(1)
  {
    if (low > high) {
      return acc;
    }
    else {
      {
        var _x0 = ((high - 1)|0);
        var _x1 = Cons(high, acc);
        high = _x0;
        acc = _x1;
        continue tailcall;
      }
    }
  }}
  return unsafeNoDiv(function() {
    return enumerate(lo, hi, Nil);
  });
}
 
// Apply a function `f`  to each element of the input list in sequence.
function map_3(xs, f)  /* forall<a,b,e> (xs : list<a>, f : (a) -> e b) -> e list<b> */  {
  return mapIndexedPeek(xs, function(i  /* int */ , x  /* 9303 */ , xx  /* list<9303> */ ) {  return f(x);});
}
 
// Create a list of characters from `lo`  to `hi`  (inclusive).
function list_1(lo, hi)  /* (lo : char, hi : char) -> total list<char> */  {
  return map_3(list((lo).charCodeAt(0), (hi).charCodeAt(0)), char);
}
 
// Convert a ":maybe" type to a list type.
function list_2(m)  /* forall<a> (m : maybe<a>) -> list<a> */  {
  return (m == null) ? Nil : Cons(m.unJust, Nil);
}
 
// Convert an array to a list
function list_3(a)  /* forall<a,h> (a : array<h,a>) -> (read<h>) list<a> */  {
  return unsafeTotal(function() {
    var len = (a).length;
    function build(i, acc)  /* (i : int, acc : list<10595>) -> <pure,read<10596>> list<10595> */  { tailcall: while(1)
    {
      if (i >= 0) {
        {
          var _x0 = ((i - 1)|0);
          var _x1 = Cons((a)[i], acc);
          i = _x0;
          acc = _x1;
          continue tailcall;
        }
      }
      else {
        return acc;
      }
    }}
    return build(((len - 1)|0), Nil);
  });
}
 
// Convert a vector to a list.
function list_4(v)  /* forall<a> (v : vector<a>) -> list<a> */  {
  return unsafeTotal(function() {
    return list_3((v));
  });
}
 
// Convert a string to a list of characters
function list_5(s)  /* (s : string) -> total list<char> */  {
  return list_4(s);
}
function map_1(t, f)  /* forall<a,b,e> (t : (a, a, a), f : (a) -> e b) -> e (b, b, b) */  {
  return _tuple3_(f(fst_1(t)), f(snd_1(t)), f(thd(t)));
}
function map_2(t, f)  /* forall<a,b,e> (t : (a, a, a, a), f : (a) -> e b) -> e (b, b, b, b) */  {
  return _tuple4_(f(fst_2(t)), f(snd_2(t)), f(thd_1(t)), f(field4(t)));
}
 
// Destructively apply function `f`  to each element in an array `a`.   
// Note: this can diverge by storing self referential functions in the array
function map_4(a, f)  /* forall<a,e,h> (a : array<h,a>, f : (a) -> <st<h>,div|e> a) -> <st<h>,div|e> array<h,a> */  {
  $for(0, (((a).length - 1)|0), function(i  /* int */ ) {  return (a)[i] = f((a)[i]);});
  return a;
}
 
// Apply function "f" to each element in a vector "v"Ju
function map_5(v, f)  /* forall<a,b,e> (v : vector<a>, f : (a) -> e b) -> e vector<b> */  {
  var n = (v).length;
  var a = Array(n);
  $for(0, (((v).length - 1)|0), function(i  /* int */ ) {  return (a)[i] = f((v)[i]);});
  return (a);
}
 
// Convert a list of characters to a string
function string_4(cs)  /* (cs : list<char>) -> total string */  {
  return join_3(map_3(cs, function(c  /* char */ ) {  return (c);}));
}
 
// Apply a function "f" to each character in a string
function map_6(s, f)  /* forall<e> (s : string, f : (char) -> e char) -> e string */  {
  return string_4(map_3(list_5(s), f));
}
 
// Construct a string of `n`  characters `c`  (or the empty string if `n <= 0` )
function string_3(n, c)  /* (n : int, c : char) -> string */  {
  return (n <= 0) ? "" : Array(n + 1).join(c);
}
 
// Convert an array to a vector (to guarantee safety, a copy is made)
function vector_2(self)  /* forall<a,h> (self : array<h,a>) -> (read<h>) vector<a> */  {
  return (copy(self));
}
 
// Convert a list to a vector.
function vector_4(xs)  /* forall<a> (xs : list<a>) -> vector<a> */  {
  return (array_4(xs));
}
 
// Create a new vector of length `n`  with initial elements `default` .
function vector_3(n, $default)  /* forall<a> (n : int, default : a) -> vector<a> */  {
  return vector_4(map_3(list(1, n), function(i  /* int */ ) {  return $default;}));
}
 
// Return the maximum of two integers
function max(i, j)  /* (i : int, j : int) -> int */  {
  return (i >= j) ? i : j;
}
 
// Returns the largest of two doubles
function max_1(x, y)  /* (x : double, y : double) -> double */  {
  return ((x >= y)) ? x : y;
}
 
// Return the minimum of two integers
function min(i, j)  /* (i : int, j : int) -> int */  {
  return (i <= j) ? i : j;
}
 
// Returns the smallest of two doubles
function min_1(x, y)  /* (x : double, y : double) -> double */  {
  return ((x <= y)) ? x : y;
}
 
// Represents a value that is _not a number_ (NaN)
var nan = NaN;
 
// Returns "true" if the integer `i`  is an odd number.
function odd(i)  /* (i : int) -> bool */  {
  return ((i)&(1)) === 1;
}
 
// The number of bits in an ":int" (always 32)
var bitsInt = 32;
 
// Arithmetic shift an ":int" to the right by "n" bits. Preserves the sign bit.
// Returns "i" when "n" is negative. When "n >= bitsInt" returns either "-1" when "i<0", or "0" when "i>=0".
function sar(i, n)  /* (i : int, n : int) -> int */  {
  if (n < 0) {
    return i;
  }
  else {
    _unit_;
  }
  if (n >= bitsInt) {
    var _x0 = (i < 0) ? ((0 - 1)|0) : 0;
    return _x0;
  }
  else {
    _unit_;
  }
  return ((i)>>(n));
}
 
// Shift an ":int" "i" to the left by "n" bits.
// Returns "i" when "n" is negative, or "0" when "n >= bitsInt".
function shl(i, n)  /* (i : int, n : int) -> int */  {
  if (n < 0) {
    return i;
  }
  else {
    _unit_;
  }
  if (n >= bitsInt) {
    return 0;
  }
  else {
    _unit_;
  }
  return ((i)<<(n));
}
 
// Logical shift an ":int" to the right by "n" bits. Shift in zeros from the left.
// Returns "i" when "n" is negative, or "0" when "n >= bitsInt".
function shr(i, n)  /* (i : int, n : int) -> int */  {
  if (n < 0) {
    return i;
  }
  else {
    _unit_;
  }
  if (n >= bitsInt) {
    return 0;
  }
  else {
    _unit_;
  }
  return ((i)>>>(n));
}
 
// Fold a list from the left, i.e. `foldl([1,2],0,(+)) == (0+1)+2` 
// Since "foldl" is tail recursive, it is preferred over "foldr" when using an associative function `f`
function foldl(xs, z, f)  /* forall<a,b,e> (list<a>, b, (b, a) -> e b) -> e b */  { tailcall: while(1)
{
  if (xs != null) {
    {
      var _x0 = f(z, xs.head);
      xs = xs.tail;
      z = _x0;
      continue tailcall;
    }
  }
  else {
    return z;
  }
}}
 
// Return the sum of a list of integers
function sum(xs)  /* (xs : list<int>) -> int */  {
  return foldl(xs, 0, function(x  /* int */ , y  /* int */ ) {  return ((x + y)|0);});
}
 
// Return the sum of a list of doubles
function sum_1(xs)  /* (xs : list<double>) -> double */  {
  return foldl(xs, 0.0, _plus__1);
}
function zipWithAcc(f, i, acc, xs, ys)  /* forall<a,b,c,e> ((int, a, b) -> e c, int, list<c>, list<a>, list<b>) -> e list<c> */  { tailcall: while(1)
{
  if (xs == null) {
    return reverse(acc);
  }
  else {
    if (ys == null) {
      return reverse(acc);
    }
    else {
      {
        var _x0 = ((i + 1)|0);
        var _x1 = Cons(f(i, xs.head, ys.head), acc);
        i = _x0;
        acc = _x1;
        xs = xs.tail;
        ys = ys.tail;
        continue tailcall;
      }
    }
  }
}}
function zipWithIter(f, i, xs, ys)  /* forall<a,b,c,e> ((int, a, b) -> e c, int, list<a>, list<b>) -> e list<c> */  {
  if (i > maxListStack) {
    return zipWithAcc(f, i, Nil, xs, ys);
  }
  else {
    if (xs == null) {
      return Nil;
    }
    else {
      if (ys == null) {
        return Nil;
      }
      else {
        return Cons(f(i, xs.head, ys.head), zipWithIter(f, ((i + 1)|0), xs.tail, ys.tail));
      }
    }
  }
}
 
// Zip two lists together by apply a function "f" to all corresponding elements
// and their index in the list.
// The returned list is only as long as the smallest input list.
function zipWithIndexed(xs, ys, f)  /* forall<a,b,c,e> (xs : list<a>, ys : list<b>, f : (int, a, b) -> e c) -> e list<c> */  {
  return zipWithIter(f, 0, xs, ys);
}
 
// Zip two lists together by pairing the corresponding elements.
// The returned list is only as long as the smallest input list.
function zip(xs, ys)  /* forall<a,b> (xs : list<a>, ys : list<b>) -> list<(a, b)> */  {
  return zipWithIndexed(xs, ys, function(i  /* int */ , x  /* 12816 */ , y  /* 12817 */ ) {  return _tuple2_(x, y);});
}
 
// Right-align a string to width `width`  using `char`  (default is a space) to fill from the left.
function align(s, width, char)  /* (s : string, width : int, char : ?char) -> string */  {
  var char_12821 = (char !== undefined) ? char : ' ';
  var n = (s).length;
  if (n >= width) {
    return s;
  }
  else {
    return (string_3(((width - n)|0), char_12821) + s);
  }
}
 
// Apply a function "f" to a specified argument "x".
function apply(f, x)  /* forall<a,b,e> (f : (a) -> e b, x : a) -> e b */  {
  return f(x);
}
 
// The number of bits in a ":double" (64)
var bitsDouble = 64;
function bool(i)  /* (i : int) -> bool */  {
  return i !== 0;
}
function bool_1(m)  /* forall<a> (m : maybe<a>) -> bool */  {
  return (m == null) ? false : true;
}
function bool_2(s)  /* (s : string) -> bool */  {
  return (s !== "");
}
 
// Return a substring from start position "start" up to either the end of the string, 
// or of at most length "len"
function substr_1(s, start, len)  /* (s : string, start : int, len : int) -> string */  {
  return (len <= 0) ? "" : s.substr(start, len);
}
function toUpper(s)  /* (s : string) -> string */  {
  return (s).toUpperCase();
}
function capitalize(s)  /* (s : string) -> string */  {
  return (toUpper(substr_1(s, 0, 1)) + ((s).substr(1)));
}
 
// Catch an exception raised by "error" and handle it.
// Use "onExn" or "onFail" when appropiate.
function $catch(action, handler)  /* forall<e,a> (action : () -> <exn|e> a, handler : (exception) -> e a) -> e a */  {
  return $primcatch(action,handler);
}
function catchOnFail(action, handler)  /* forall<e,a> (action : () -> e a, handler : (exception) -> e a) -> e a */  {
  return $catch(action,handler);
}
 
// Return a positive random integer (including 0)
function randomInt()  /* () -> ndet int */  {
  return Math.floor(Math.random()*2147483647);
}
 
// Returns one of its arguments `x`  or `y`  based on a non-deterministic choice.
function choose(x, y)  /* forall<a> (x : a, y : a) -> ndet a */  {
  var _x0 = odd(randomInt());
  return (_x0) ? x : y;
}
 
// Fold a list from the right, i.e. `foldr([1,2],0,(+)) == 1+(2+0)` 
// Note, "foldr" is less efficient than "foldl" as it reverses the list first.
function foldr(xs, z, f)  /* forall<a,b,e> (xs : list<a>, z : b, f : (a, b) -> e b) -> e b */  {
  return foldl(reverse(xs), z, function(x  /* 13200 */ , y  /* 13203 */ ) {  return f(y, x);});
}
 
// Concatenate all lists in a list (e.g. flatten the list)
function concat(xs)  /* forall<a> (xs : list<list<a>>) -> list<a> */  {
  return foldr(xs, Nil, _plus__3);
}
 
// Concatenate the result lists from applying a function to all elements
function concat_1(xs, f)  /* forall<a,b,e> (xs : list<a>, f : (a) -> e list<b>) -> e list<b> */  {
  return concat(map_3(xs, f));
}
 
// Concatenate a list of ":maybe" values
function concatMaybe(xs)  /* forall<a> (xs : list<maybe<a>>) -> list<a> */  {
  return concat(map_3(xs, list_2));
}
function conslist(elems, tail0)  /* forall<a> (elems : primarray<a>, tail : list<a>) -> total list<a> */  {
  return $list(elems,tail0);
}
 
// The "const" functions returns its first argument and ignores the second.
function $const(x, y)  /* forall<a,b> (x : a, y : b) -> a */  {
  return x;
}
 
// Count the number of occurrences of a character in a string
function count_1(s, c)  /* (s : string, c : char) -> int */  {
  var cnt = { value: 0 };
  foreach_3(s, function(d  /* char */ ) {  if ((c === d)) {  return ((cnt).value = ((((cnt).value) + 1)|0));} else {  return _unit_;}});
  return ((cnt).value);
}
 
// Count the number of times a predicate is true for each character in a string
function count_2(s, pred)  /* (s : string, pred : (char) -> bool) -> int */  {
  var cnt = { value: 0 };
  foreach_3(s, function(c  /* char */ ) {  if (pred(c)) {  return ((cnt).value = ((((cnt).value) + 1)|0));} else {  return _unit_;}});
  return ((cnt).value);
}
 
// Drop the first "n" elements of a list (or fewer if the list is shorter than "n")
function drop(xs, n)  /* forall<a> (xs : list<a>, n : int) -> list<a> */  { tailcall: while(1)
{
  if (n <= 0) {
    return xs;
  }
  else {
    _unit_;
  }
  if (xs == null) {
    return Nil;
  }
  else {
    {
      var _x0 = ((n - 1)|0);
      xs = xs.tail;
      n = _x0;
      continue tailcall;
    }
  }
}}
function span(xs, predicate)  /* forall<a,e> (xs : list<a>, predicate : (a) -> e bool) -> e (list<a>, list<a>) */  {
  function spanAcc(ys, acc)  /* (list<14110>, list<14110>) -> 14111 (list<14110>, list<14110>) */  { tailcall: while(1)
  {
    if (ys != null) {
      if (predicate(ys.head)) {
        {
          var _x0 = Cons(ys.head, acc);
          ys = ys.tail;
          acc = _x0;
          continue tailcall;
        }
      }
      else {
        return _tuple2_(reverse(acc), ys);
      }
    }
    else {
      return _tuple2_(reverse(acc), ys);
    }
  }}
  return spanAcc(xs, Nil);
}
 
// Drop all initial elements that satisfy `predicate`
function dropWhile(xs, predicate)  /* forall<a,e> (xs : list<a>, predicate : (a) -> e bool) -> e list<a> */  {
  return snd(span(xs, predicate));
}
 
// Does string `s`  end with `post`  ?
function endsWith(s, post)  /* (s : string, post : string) -> bool */  {
  return ((s).indexOf(post, (s).length - (post).length) !== -1);
}
 
// Returns "true" if the integer `i`  is an even number.
function even(i)  /* (i : int) -> bool */  {
  return ((i)&(1)) === 0;
}
 
// Left-align a string to width `width`  using `char`  (default is a space) to fill on the right.
function fill(s, width, char)  /* (s : string, width : int, char : ?char) -> string */  {
  var char_14241 = (char !== undefined) ? char : ' ';
  var n = (s).length;
  if (n >= width) {
    return s;
  }
  else {
    return (s + string_3(((width - n)|0), char_14241));
  }
}
 
// Retain only those elements of a list that satisfy the given predicate "pred".
// For example: "filter([1,2,3],odd) == [1,3]"
function filter(xs, pred)  /* forall<a,e> (xs : list<a>, pred : (a) -> e bool) -> e list<a> */  { tailcall: while(1)
{
  if (xs == null) {
    return Nil;
  }
  else {
    if (pred(xs.head)) {
      return Cons(xs.head, filter(xs.tail, pred));
    }
    else {
      {
        xs = xs.tail;
        continue tailcall;
      }
    }
  }
}}
 
// Retain only those elements of a list that satisfy the given predicate "pred".
// For example: "filterMap([1,2,3],fun(i) { if (odd(i)) then Nothing else Just(i*i) }) == [4]"
function filterMap(xs, pred)  /* forall<a,b,e> (xs : list<a>, pred : (a) -> e maybe<b>) -> e list<b> */  { tailcall: while(1)
{
  if (xs == null) {
    return Nil;
  }
  else {
    var _x0 = pred(xs.head);
    if (_x0 == null) {
      {
        xs = xs.tail;
        continue tailcall;
      }
    }
    else {
      return Cons(_x0.unJust, filterMap(xs.tail, pred));
    }
  }
}}
 
// Match a ":maybe" value and either return a default value on "Nothing" or apply a function to the value on "Just"
function maybe(m, onNothing, onJust)  /* forall<a,b,e> (m : maybe<a>, onNothing : b, onJust : (a) -> e b) -> e b */  {
  return (m == null) ? onNothing : onJust(m.unJust);
}
function maybe_1(e)  /* forall<a,b> (e : either<a,b>) -> maybe<b> */  {
  return (e._tag === 1) ? Nothing : Just(e.left);
}
 
// Convert a list to a ":maybe" type, using "Nothing" for an empty list, and otherwise "Just" on the head element.
function maybe_2(xs)  /* forall<a> (xs : list<a>) -> maybe<a> */  {
  return (xs == null) ? Nothing : Just(xs.head);
}
 
// Find the first element satisfying some predicate
function find(xs, pred)  /* forall<a> (xs : list<a>, pred : (a) -> bool) -> maybe<a> */  {
  return maybe_2(filter(xs, pred));
}
function foldl1(xs, f)  /* forall<a,e> (xs : list<a>, f : (a, a) -> <exn|e> a) -> <exn|e> a */  {
  return (xs != null) ? foldl(xs.tail, xs.head, f) : patternMatchError("..\\koka-0.6\\lib\\std\\core.kk(650, 3)", "foldl1");
}
function foldr1(xs, f)  /* forall<a,e> (xs : list<a>, f : (a, a) -> <exn|e> a) -> <exn|e> a */  {
  if (xs != null && xs.tail == null) {
    return xs.head;
  }
  else if (xs != null) {
    return f(xs.head, foldr1(xs.tail, f));
  }
  else {
    return patternMatchError("..\\koka-0.6\\lib\\std\\core.kk(657, 3)", "foldr1");
  }
}
 
// Invoke "action" for each element of a list while "action" return "Nothing"
function foreachUntil(xs, action)  /* forall<a,b,e> (xs : list<a>, action : (a) -> e maybe<b>) -> e maybe<b> */  { tailcall: while(1)
{
  if (xs == null) {
    return Nothing;
  }
  else {
    var _x0 = action(xs.head);
    return (_x0 == null) ? foreachUntil(xs.tail, action) : _x0;
  }
}}
 
// Executes `action`  for each integer between `start`  upto `end`  (including both `start`  and `end` ).
// If `start > end`  the function returns without any call to `action` .
// If `action` returns "Just", the iteration is stopped and the result returned
function forWhile(start, end, action)  /* forall<a,e> (start : int, end : int, action : (int) -> e maybe<a>) -> e maybe<a> */  {
  function rep(i)  /* (i : int) -> <div|14773> maybe<14772> */  { tailcall: while(1)
  {
    if (i <= end) {
      var _x0 = action(i);
      if (_x0 == null) {
        {
          var _x1 = ((i + 1)|0);
          i = _x1;
          continue tailcall;
        }
      }
      else {
        return Just(_x0.unJust);
      }
    }
    else {
      return Nothing;
    }
  }}
  return unsafeNoDiv(function() {
    return rep(start);
  });
}
 
// Invoke a function "f" for each element in a vector "v".
// If "f" returns "Just", the iteration is stopped early and the result is returned.
function foreachWhile(v, f)  /* forall<a,b,e> (v : vector<a>, f : (a) -> e maybe<b>) -> e maybe<b> */  {
  return forWhile(0, (((v).length - 1)|0), function(i  /* int */ ) {  return f((v)[i]);});
}
 
// Return the host environment: `dotnet`, `browser`, (web)`worker`, or `nodejs`.
function getHost()  /* () -> ndet string */  {
  return ($inBrowser ? 'browser' : ($inWebWorker ? 'worker' : 'nodejs'));
}
 
// Generic show: shows the internal representation of an object as a string  
// Note: this breaks parametricity so it should not be public
function gshow(_arg1)  /* forall<a> (a) -> string */  {
  return (_arg1).toString();
}
var redirect = unsafeTotal(function() {
  return { value: Nothing };
});
 
// Print a string to the console
function xprints(_arg1)  /* (string) -> console () */  {
  return $print(_arg1);
}
function prints(s)  /* (s : string) -> console () */  {
  return unsafeTotal(function() {
    var _x0 = ((redirect).value);
    return (_x0 == null) ? xprints(s) : _x0.unJust(s);
  });
}
 
// Return a system dependent description of an exception
function show(exn)  /* (exn : exception) -> string */  {
  return (exn ? exn.toString() : 'unknown exception');
}
 
// Convert an ":int" to a string
function show_1(i)  /* (i : int) -> string */  {
  return gshow(i);
}
 
// Show a ":double" as a string with a default `precision`  of `0` .
// Pass a precision of `0`  (or less) to display numbers precisely.
// Uses either "showFixed" or "showExp" depending on what is the most compact representation
function show_2(d, precision)  /* (d : double, precision : ?int) -> string */  {
  var precision_15081 = (precision !== undefined) ? precision : 6;
  var p = (precision_15081 < 0) ? 0 : precision_15081;
  return $gformat(d, ("g" + show_1(p)));
}
 
// Show an ":int" as a hexadecimal value.
// The `width`  parameter specifies how wide the hex value is where `0`  is used to align
// Uses capital letters for hexadecimal digits by default.
function showHex(i, width, useCapitals)  /* (i : int, width : ?int, useCapitals : ?bool) -> string */  {
  var width_16123 = (width !== undefined) ? width : 1;
  var useCapitals_16127 = (useCapitals !== undefined) ? useCapitals : true;
  var w = (width_16123 < 0) ? 0 : width_16123;
  var x = (useCapitals_16127) ? "X" : "x";
  return $gformat(i, (x + show_1(w)));
}
function showChar(c)  /* (c : char) -> string */  {
  var _x0 = ((c < ' ') || (c > '~'));
  if (_x0) {
    if ((c === '\n')) {
      return "\\n";
    }
    else {
      if ((c === '\r')) {
        return "\\r";
      }
      else {
        if ((c === '\t')) {
          return "\\t";
        }
        else {
          var _x1 = (c).charCodeAt(0) <= 255;
          if (_x1) {
            return ("\\x" + showHex((c).charCodeAt(0), 2, undefined));
          }
          else {
            var _x2 = (c).charCodeAt(0) <= 65535;
            if (_x2) {
              return ("\\u" + showHex((c).charCodeAt(0), 4, undefined));
            }
            else {
              return ("\\U" + showHex((c).charCodeAt(0), 6, undefined));
            }
          }
        }
      }
    }
  }
  else {
    if ((c === '\'')) {
      return "\\\'";
    }
    else {
      if ((c === '\"')) {
        return "\\\"";
      }
      else {
        return ((c === '\\')) ? "\\\\" : (c);
      }
    }
  }
}
 
// Show a ":char" as a char literal
function show_3(c)  /* (c : char) -> string */  {
  return ("\'" + (showChar(c) + "\'"));
}
 
// Show a string as a string literal
function show_4(s)  /* (s : string) -> string */  {
  return ("\"" + (join_3(map_3(list_5(s), showChar)) + "\""));
}
 
// Convert a ":bool" to a string
function show_5(b)  /* (b : bool) -> string */  {
  return (b) ? "True" : "False";
}
 
// Convert a unit value "()" to a string
function show_6(u)  /* (u : ()) -> string */  {
  return "()";
}
 
// Convert a list to a string
function show_7(xs, showElem)  /* forall<a> (xs : list<a>, showElem : (a) -> string) -> string */  {
  return ("[" + (join_4(map_3(xs, showElem), ",") + "]"));
}
 
// Print a string to the console.
function print(s)  /* (s : string) -> console () */  {
  return prints(s);
}
 
// Print an integer to the console.
function print_1(i)  /* (i : int) -> console () */  {
  return prints(show_1(i));
}
 
// Print a character to the console.
function print_2(c)  /* (c : char) -> console () */  {
  return prints((c));
}
 
// Print a double to the console.
function print_3(d)  /* (d : double) -> console () */  {
  return prints(show_2(d, undefined));
}
 
// Print a boolean to the console
function print_4(b)  /* (b : bool) -> console () */  {
  return prints(show_5(b));
}
 
// Print a unit value to the console
function print_5(u)  /* (u : ()) -> console () */  {
  return prints(show_6(_unit_));
}
 
// Generic print routine: prints the internal representation as a string to the console, 
// including a final newline character.  
// Note: this breaks parametricity so it should not be public
function gprint(x)  /* forall<a> (x : a) -> console () */  {
  return print(gshow(x));
}
 
// Print a string to the console, including a final newline character.
function xprintsln(_arg1)  /* (string) -> console () */  {
  return $println(_arg1);
}
function printsln(s)  /* (s : string) -> console () */  {
  return unsafeTotal(function() {
    var _x0 = ((redirect).value);
    if (_x0 == null) {
      return xprintsln(s);
    }
    else {
      return _x0.unJust((s + "\n"));
    }
  });
}
 
// Print a string to the console, including a final newline character.
function println(s)  /* (s : string) -> console () */  {
  return printsln(s);
}
 
// Print an integer to the console, including a final newline character.
function println_1(i)  /* (i : int) -> console () */  {
  return printsln(show_1(i));
}
 
// Print a character to the console, including a final newline character.
function println_2(c)  /* (c : char) -> console () */  {
  return printsln((c));
}
 
// Print a double to the console, including a final newline character.
function println_3(d)  /* (d : double) -> console () */  {
  return printsln(show_2(d, undefined));
}
 
// Print a boolean to the console, including a final newline character
function println_4(b)  /* (b : bool) -> console () */  {
  return printsln(show_5(b));
}
 
// Print a unit value to the console, including a final newline character
function println_5(u)  /* (u : ()) -> console () */  {
  return printsln(show_6(_unit_));
}
 
// Generic print routine: prints the internal representation as a string to the console, including a final newline character.  
// Note: this breaks parametricity so it should not be public
function gprintln(x)  /* forall<a> (x : a) -> console () */  {
  return println(gshow(x));
}
 
// Ignore any Exceptions
function ignore(action)  /* forall<e> (action : () -> <exn|e> ()) -> e () */  {
  return $catch(action, function(___lp_215_comma_22_rp_  /* exception */ ) {  return _unit_;});
}
function indexOfAcc(xs, pred, idx)  /* forall<a> (xs : list<a>, pred : (a) -> bool, idx : int) -> int */  { tailcall: while(1)
{
  if (xs == null) {
    return ((0 - 1)|0);
  }
  else {
    if (pred(xs.head)) {
      return idx;
    }
    else {
      {
        var _x0 = ((idx + 1)|0);
        xs = xs.tail;
        idx = _x0;
        continue tailcall;
      }
    }
  }
}}
 
// Returns the index of the first element where "pred" holds, or "-1" if no such element exists.
function indexOf_2(xs, pred)  /* forall<a> (xs : list<a>, pred : (a) -> bool) -> int */  {
  return indexOfAcc(xs, pred, 0);
}
 
// Return the list without its last element.
// Return an empty list for an empty list.
function init(xs)  /* forall<a> (xs : list<a>) -> list<a> */  {
  if (xs != null) {
    if (xs.tail == null) {
      return Nil;
    }
    else {
      return Cons(xs.head, init(xs.tail));
    }
  }
  else {
    return Nil;
  }
}
 
// Do not use. Used by the compiler for platforms that do not support 32 bit truncated division natively.
function intCdiv(_arg1, _arg2)  /* (int, int) -> exn int */  {
  return $int32_cdiv(_arg1,_arg2);
}
 
// Do not use. Used by the compiler for platforms that do not support 32 bit truncated modulus natively.
function intCmod(_arg1, _arg2)  /* (int, int) -> exn int */  {
  return $int32_cmod(_arg1,_arg2);
}
 
// Do not use. Used by the compiler for platforms that do not support 32 bit multiplication natively.
function intMultiply(_arg1, _arg2)  /* (int, int) -> int */  {
  return $int32_multiply(_arg1,_arg2);
}
 
// Is the character a lower-case ASCII character ?
function isLower(c)  /* (c : char) -> bool */  {
  return ((c >= 'a') && (c <= 'z'));
}
 
// Is the character an upper-case ASCII character ?
function isUpper(c)  /* (c : char) -> bool */  {
  return ((c >= 'A') && (c <= 'Z'));
}
 
// Is the character an ASCII letter ?
function isAlpha(c)  /* (c : char) -> bool */  {
  return (isLower(c) || isUpper(c));
}
 
// Is the character an ASCII digit ?
function isDigit(c)  /* (c : char) -> bool */  {
  return ((c >= '0') && (c <= '9'));
}
 
// Is the character ASCII letter or digit?
function isAlphaNum(c)  /* (c : char) -> bool */  {
  return (isAlpha(c) || isDigit(c));
}
 
// Is the character an ASCII character, e.g. `c <= '\x7F'`  ?
function isAscii(c)  /* (c : char) -> bool */  {
  return (c <= '\u007F');
}
 
// Is the character an ASCII control character, e.g. `c < ' '`  ?
function isControl(c)  /* (c : char) -> bool */  {
  return (c < ' ');
}
 
// Has an asynchronous value been computed?
function isDone(async)  /* forall<a> (async : async<a>) -> bool */  {
  return async_is_done(async);
}
 
// Is the character an ASCII hexa-decimal digit ?
function isHexDigit(c)  /* (c : char) -> bool */  {
  return (isDigit(c) || (((c >= 'a') && (c <= 'f')) || ((c >= 'A') && (c <= 'F'))));
}
 
// Is this value equal to negative or positive infinity ?
function isInf(_arg1)  /* (double) -> bool */  {
  return ((_arg1) === Number.POSITIVE_INFINITY || (_arg1) === Number.NEGATIVE_INFINITY);
}
 
// Tests if a character is an element of `" \t\n\r"`
function isWhite(c)  /* (c : char) -> bool */  {
  return ((c === ' ') || ((c === '\t') || ((c === '\n') || (c === '\r'))));
}
 
// Return the last element of a list. Raise an exception if the empty list is passed.
function last(xs)  /* forall<a> (xs : list<a>) -> exn a */  { tailcall: while(1)
{
  if (xs != null && xs.tail == null) {
    return xs.head;
  }
  else if (xs != null) {
    {
      xs = xs.tail;
      continue tailcall;
    }
  }
  else {
    return patternMatchError("..\\koka-0.6\\lib\\std\\core.kk(905, 3)", "last");
  }
}}
 
// Take the first "n" elements of a list (or fewer if the list is shorter than "n")
function take(xs, n)  /* forall<a> (xs : list<a>, n : int) -> list<a> */  {
  if (n <= 0) {
    return Nil;
  }
  else {
    _unit_;
  }
  if (xs == null) {
    return Nil;
  }
  else {
    return Cons(xs.head, take(xs.tail, ((n - 1)|0)));
  }
}
 
// split a list at position `n`
function split(xs, n)  /* forall<a> (xs : list<a>, n : int) -> (list<a>, list<a>) */  {
  return _tuple2_(take(xs, n), drop(xs, n));
}
function split_1(s, sep)  /* (s : string, sep : string) -> vector<string> */  {
  return (s).split(sep);
}
 
// Split a string into at most "n" parts that were delimited by a string "sep". The delimeters are not included in the results (except for possibly the final part).
// For example: "split(""1,2,3"","","",2) == [""1"",""2,3""]"
function split_2(s, sep, n)  /* (s : string, sep : string, n : int) -> vector<string> */  {
  return (s).split(sep, n);
}
function lines(s)  /* (s : string) -> vector<string> */  {
  return split_1(s, "\n");
}
 
// Used by the compiler to wrap main console applications
function mainConsole(main)  /* forall<a,e> (main : () -> e a) -> e a */  {
  return (main)();
}
 
// Apply a function `f`  to each element of the input list in sequence where takes
// both the index of the current element and the element itself as arguments.
function mapIndexed(xs, f)  /* forall<a,b,e> (xs : list<a>, f : (idx : int, value : a) -> e b) -> e list<b> */  {
  return mapIndexedPeek(xs, function(i  /* int */ , x  /* 18468 */ , xx  /* list<18468> */ ) {  return f(i, x);});
}
 
// Apply a function `f`  to each element of the input list in sequence where `f` takes
// both the current element and the tail list as arguments.
function mapPeek(xs, f)  /* forall<a,b,e> (xs : list<a>, f : (value : a, rest : list<a>) -> e b) -> e list<b> */  {
  return mapIndexedPeek(xs, function(i  /* int */ , x  /* 18490 */ , xx  /* list<18490> */ ) {  return f(x, xx);});
}
 
// Invoke "action" on each element of a list while "action" returns "Just"
function mapWhile(xs, action)  /* forall<a,b,e> (xs : list<a>, action : (a) -> e maybe<b>) -> e list<b> */  {
  if (xs == null) {
    return Nil;
  }
  else {
    var _x0 = action(xs.head);
    if (_x0 != null) {
      return Cons(_x0.unJust, mapWhile(xs.tail, action));
    }
    else {
      return Nil;
    }
  }
}
 
// The maximal double value
var maxDouble = (1.7976931348623157e+308);
 
// Returns the largest element of a list of integers (or "0" for the empty list)
function maximum(xs)  /* (xs : list<int>) -> int */  {
  return (xs == null) ? 0 : foldl(xs.tail, xs.head, max);
}
 
// Returns the largest element of a list of doubles (or "0" for the empty list)
function maximum_1(xs)  /* (xs : list<double>) -> double */  {
  return (xs == null) ? 0.0 : foldl(xs.tail, xs.head, max_1);
}
function mbint(m)  /* (m : maybe<int>) -> int */  {
  return (m == null) ? 0 : m.unJust;
}
 
// Convert a ":maybe" string to a string using the empty sting for "Nothing"
function mbstring(ms)  /* (ms : maybe<string>) -> string */  {
  return (ms == null) ? "" : ms.unJust;
}
 
// The minimal double value
var minDouble = -(1.7976931348623157e+308);
 
// Returns the smallest element of a list of integers (or "0" for the empty list)
function minimum(xs)  /* (xs : list<int>) -> int */  {
  return (xs == null) ? 0 : foldl(xs.tail, xs.head, min);
}
 
// Returns the smallest element of a list of doubles (or "0" for the empty list)
function minimum_1(xs)  /* (xs : list<double>) -> double */  {
  return (xs == null) ? 0.0 : foldl(xs.tail, xs.head, min_1);
}
 
// Negative infinity
var negInf = (- Infinity);
 
// Is a string not empty?
function notEmpty(s)  /* (s : string) -> bool */  {
  return (s !== "");
}
var traceEnabled = unsafeTotal(function() {
  return { value: true };
});
 
// Disable tracing completely.
function notrace()  /* () -> (st<global>) () */  {
  return ((traceEnabled).value = false);
}
 
// Set a "handler" that is always called when the "action" finishes (either normally or with an exception).
function onExit(handler, action)  /* forall<a,e> (handler : () -> e (), action : () -> e a) -> e a */  {
  return $finally(action,handler);
}
 
// Return a default value when an exception is raised
function onExn(value0, action)  /* forall<a,e> (value : a, action : () -> <exn|e> a) -> e a */  {
  return $catch(action, function(___lp_190_comma_22_rp_  /* exception */ ) {  return value0;});
}
 
// When an asynchronous value computation fails, call the specified "handler" (at most once).
function onExn_1(async, handler)  /* forall<a,e> (async : async<a>, handler : (exn : exception) -> e a) -> e async<a> */  {
  return async_on_exn(async,handler);
}
 
// Throw an exception
function $throw(_arg1)  /* forall<a> (exception) -> exn a */  {
  return error(_arg1)(_arg1);
}
 
// Set a "handler" that is called when an exception is raised in the "action" block.
function onFail(handler, action)  /* forall<a,e> (handler : () -> <exn|e> (), action : () -> <exn|e> a) -> <exn|e> a */  {
  return catchOnFail(action, function(exn  /* exception */ ) {  handler(); return $throw(exn);});
}
 
// Set a "handler" that is called if "action" returns without raising an exception.
function onSuccess(handler, action)  /* forall<a,e> (handler : () -> e (), action : () -> e a) -> e a */  {
  var x = action();
  handler();
  return x;
}
 
// Parse digits in a "base" between 2 and 36 (default 10) given an initial value "acc" (default 0)
// Returns "acc" on the empty string, and "Nothing" if an invalid digit is encountered.
function parseDigits(cs, base, acc)  /* (cs : list<char>, base : ?int, acc : ?int) -> maybe<int> */  { tailcall: while(1)
{
  var base_18825 = (base !== undefined) ? base : 10;
  var acc_18829 = (acc !== undefined) ? acc : 0;
  if (cs == null) {
    return Just(acc_18829);
  }
  else {
    if (base_18825 >= 10) {
      var _x1 = '9';
    }
    else {
      var _x1 = _plus__4('0', String.fromCharCode(((base_18825 - 1)|0)));
    }
    var _x0 = ((cs.head >= '0') && (cs.head <= _x1));
    if (_x0) {
      var d = (_dash__2(cs.head, '0')).charCodeAt(0);
    }
    else {
      var _x2 = (base_18825 > 10 && (base_18825 <= 36 && ((cs.head >= 'a') && (cs.head <= _plus__4('a', String.fromCharCode(((base_18825 - 11)|0)))))));
      if (_x2) {
        var d = (((_dash__2(cs.head, 'a')).charCodeAt(0) + 10)|0);
      }
      else {
        var _x3 = (base_18825 > 10 && (base_18825 <= 36 && ((cs.head >= 'A') && (cs.head <= _plus__4('A', String.fromCharCode(((base_18825 - 11)|0)))))));
        if (_x3) {
          var d = (((_dash__2(cs.head, 'A')).charCodeAt(0) + 10)|0);
        }
        else {
          return Nothing;
        }
      }
    }
    {
      var _x0 = base_18825;
      var _x1 = (($std_core.intMultiply(base_18825,acc_18829) + d)|0);
      cs = cs.tail;
      base = _x0;
      acc = _x1;
      continue tailcall;
    }
  }
}}
function parsePosInt(s, base)  /* (s : list<char>, base : ?int) -> maybe<int> */  {
  var base_19545 = (base !== undefined) ? base : 10;
  if (s != null && s.tail != null) {
    if (((s.head === '0') && ((s.tail.head === 'x') || (s.tail.head === 'X')))){
      return parseDigits(s.tail.tail, 16, undefined);
    }
  }
  return parseDigits(s, base_19545, undefined);
}
 
// Parse an integer. If an illegal digit character is encountered "Nothing" is returned.
// An empty string will result in "Just(0)".
// A string can start with a `-` sign for negative numbers, 
// and with `0x` or `0X` for hexadecimal numbers (in which case the `hex` parameter is ignored).
function parseInt(s, hex)  /* (s : string, hex : ?bool) -> maybe<int> */  {
  var hex_19678 = (hex !== undefined) ? hex : false;
  var base = (hex_19678) ? 16 : 10;
  var _x0 = dropWhile(list_5(s), isWhite);
  if (_x0 == null) {
    return Just(0);
  }
  if (_x0 != null) {
    if ((_x0.head === '-')){
      var _x1 = parsePosInt(_x0.tail, base);
      if (_x1 == null) {
        return Nothing;
      }
      else {
        return Just(((0 - _x1.unJust)|0));
      }
    }
  }
  return parsePosInt(_x0, base);
}
function parseFixed(s)  /* (s : string) -> maybe<double> */  {
  var _x0 = list_4(split_2(s, ".", 2));
  if (_x0 != null && _x0.tail != null && _x0.tail.tail == null) {
    var _x1 = parseInt(_x0.head, undefined);
    if (_x1 == null) {
      return Nothing;
    }
    else {
      var _x2 = parseInt(_x0.tail.head, undefined);
      if (_x2 == null) {
        return Nothing;
      }
      else {
        if (_x2.unJust < 0) {
          return Nothing;
        }
        else {
          if (_x2.unJust === 0) {
            return Just((_x1.unJust));
          }
          else {
            return Just(((_x1.unJust) + (((10.0) ^ (((_x0.tail.head).length))) / (_x2.unJust))));
          }
        }
      }
    }
  }
  else {
    var _x3 = parseInt(s, undefined);
    if (_x3 == null) {
      return Nothing;
    }
    else {
      return Just((_x3.unJust));
    }
  }
}
function parseFixedDefault(s, $default)  /* (s : string, default : ?double) -> double */  {
  var default_20102 = ($default !== undefined) ? $default : 0.0;
  var _x0 = parseFixed(s);
  return (_x0 == null) ? default_20102 : _x0.unJust;
}
 
// Parse an integer using `parseInt`. If an illegal digit character is encountered the 
// `default` value is returned. An empty string will also result in `default`.
function parseIntDefault(s, $default, hex)  /* (s : string, default : ?int, hex : ?bool) -> int */  {
  var default_20119 = ($default !== undefined) ? $default : 0;
  var hex_20123 = (hex !== undefined) ? hex : false;
  if (isEmpty(s)) {
    return default_20119;
  }
  else {
    var _x0 = parseInt(s, hex_20123);
    return (_x0 == null) ? default_20119 : _x0.unJust;
  }
}
function partitionAcc(xs, pred, acc1, acc2)  /* forall<a> (xs : list<a>, pred : (a) -> bool, acc1 : list<a>, acc2 : list<a>) -> (list<a>, list<a>) */  { tailcall: while(1)
{
  if (xs == null) {
    return _tuple2_(reverse(acc1), reverse(acc2));
  }
  else {
    if (pred(xs.head)) {
      {
        var _x0 = Cons(xs.head, acc1);
        xs = xs.tail;
        acc1 = _x0;
        continue tailcall;
      }
    }
    else {
      {
        var _x1 = Cons(xs.head, acc2);
        xs = xs.tail;
        acc2 = _x1;
        continue tailcall;
      }
    }
  }
}}
 
// Partition a list in two lists where the first list contains
// those elements that satisfy the given predicate "pred".
// For example: "partition([1,2,3],odd) == ([1,3],[2])"
function partition(xs, pred)  /* forall<a> (xs : list<a>, pred : (a) -> bool) -> (list<a>, list<a>) */  {
  return partitionAcc(xs, pred, Nil, Nil);
}
 
// Positive infinity
var posInf = Infinity;
 
// redirect "print" and "println" calls to a specified function.
function printRedirect(print0)  /* (print : (msg : string) -> console ()) -> io () */  {
  return ((redirect).value = Just(print0));
}
 
// Read a line from the console.
function readln()  /* forall<e> () -> <console|e> async<string> */  {
  return $read_line();
}
 
// Read a line from the console and immediately supply a handler 
// For convenience, returns a unit value. Use an explicit "on" if
// the returned ":async" is needed.
function readln_1(handler)  /* forall<a,e> (handler : (string) -> <console|e> a) -> <console|e> () */  {
  on(readln(), handler);
  return _unit_;
}
 
// Displays "query" to the user (with a space attached) and invokes "handler" with 
// the user's response.
function question(query, handler)  /* forall<a,e> (query : string, handler : (input : string) -> <console|e> a) -> <console|e> () */  {
  print((query + " "));
  return readln_1(handler);
}
 
// Return a random number equal or larger than 0.0 and smaller than 1.0
function random()  /* () -> ndet double */  {
  return Math.random();
}
 
// Remove those elements of a list that satisfy the given predicate "pred".
// For example: "remove([1,2,3],odd) == [2]"
function remove(xs, pred)  /* forall<a> (xs : list<a>, pred : (a) -> bool) -> list<a> */  {
  return filter(xs, function(x  /* 20433 */ ) {  return !(pred(x));});
}
 
// The "repeat" function executes `action`  `n`  times.
function repeat(n, action)  /* forall<e> (n : int, action : () -> e ()) -> e () */  {
  return $for(1, n, function(i  /* int */ ) {  return action();});
}
 
// Create a list of `n`  repeated elementes `x`
function replicate(x, n)  /* forall<a> (x : a, n : int) -> list<a> */  {
  function enumerate(i, acc)  /* (i : int, acc : list<20512>) -> div list<20512> */  { tailcall: while(1)
  {
    if (i <= 0) {
      return acc;
    }
    else {
      {
        var _x0 = ((i - 1)|0);
        var _x1 = Cons(x, acc);
        i = _x0;
        acc = _x1;
        continue tailcall;
      }
    }
  }}
  return unsafeNoDiv(function() {
    return enumerate(n, Nil);
  });
}
 
// Bitwise rotate an ":int" "n" bits to the left.
// Does not rotate when "n" is negative.
function rotl(i, n)  /* (i : int, n : int) -> int */  {
  if (n < 0) {
    return i;
  }
  else {
    _unit_;
  }
  var r = ((n)&(((bitsInt - 1)|0)));
  return ((((i)<<(r)))|(((i)>>>(((bitsInt - r)|0)))));
}
 
// Bitwise rotate an ":int" "n" bits to the right.
// Does not rotate when "n" is negative.
function rotr(i, n)  /* (i : int, n : int) -> int */  {
  if (n < 0) {
    return i;
  }
  else {
    _unit_;
  }
  var r = ((n)&(((bitsInt - 1)|0)));
  return ((((i)>>>(r)))|(((i)<<(((bitsInt - r)|0)))));
}
 
// Show a ":double" in exponential (scientific) notation
function showExp(d, precision)  /* (d : double, precision : ?int) -> string */  {
  var precision_20657 = (precision !== undefined) ? precision : 6;
  var p = (precision_20657 < 0) ? 0 : precision_20657;
  return $gformat(d, ("e" + show_1(p)));
}
function showFixed(d, precision)  /* (d : double, precision : ?int) -> string */  {
  var precision_20747 = (precision !== undefined) ? precision : 6;
  var p = (precision_20747 < 0) ? 0 : precision_20747;
  return $gformat(d, ("F" + show_1(p)));
}
 
// Returns a singleton list.
function single(x)  /* forall<a> (x : a) -> list<a> */  {
  return Cons(x, Nil);
}
 
// Is `pre`  a prefix of `s`  ?
function startsWith(s, pre)  /* (s : string, pre : string) -> bool */  {
  return s.substr(0,pre.length) === pre;
}
 
// Keep only those initial elements that satisfy `predicate`
function takeWhile(xs, predicate)  /* forall<a,e> (xs : list<a>, predicate : (a) -> e bool) -> e list<a> */  {
  return fst(span(xs, predicate));
}
function toLower(s)  /* (s : string) -> string */  {
  return (s).toLowerCase();
}
function xtrace(message)  /* (message : string) -> () */  {
  return $trace(message);
}
 
// Trace a message used for debug purposes. 
// The behaviour is system dependent. On a browser and node it uses
// `console.log`  by default. 
// Disabled if "notrace" is called.
function trace(message)  /* (message : string) -> () */  {
  return unsafeTotal(function() {
    return (((traceEnabled).value)) ? xtrace(message) : _unit_;
  });
}
var uniqueCount = unsafeTotal(function() {
  return { value: 0 };
});
 
// Returns a unique integer (modulo 32-bits).
function unique()  /* () -> ndet int */  {
  return unsafeTotal(function() {
    var u = ((uniqueCount).value);
    ((uniqueCount).value = ((u + 1)|0));
    return u;
  });
}
function unlines(xs)  /* (xs : vector<string>) -> string */  {
  return ((xs).join("\n"));
}
function unlist(list0)  /* forall<a> (list : list<a>) -> total primarray<a> */  {
  return $unlist(list0);
}
 
// _Unsafe_. This function removes the exception effect (":exn") from the effect of an action
function unsafeNoExn(action)  /* forall<a,e> (action : () -> <exn|e> a) -> e a */  {
  return unsafeTotal(action);
}
 
// Unzip a list of pairs into two lists
function unzip(xs)  /* forall<a,b> (xs : list<(a, b)>) -> (list<a>, list<b>) */  {
  function iter(ys, acc1, acc2)  /* forall<a,b> (list<(a, b)>, list<a>, list<b>) -> (list<a>, list<b>) */  { tailcall: while(1)
  {
    if (ys != null) {
      {
        var _x0 = Cons(ys.head.fst, acc1);
        var _x1 = Cons(ys.head.snd, acc2);
        ys = ys.tail;
        acc1 = _x0;
        acc2 = _x1;
        continue tailcall;
      }
    }
    else {
      return _tuple2_(reverse(acc1), reverse(acc2));
    }
  }}
  return iter(xs, Nil, Nil);
}
 
// The "while" function executes `action`  as long as `pred`  is "true".
function $while(predicate, action)  /* forall<e> (predicate : () -> <div|e> bool, action : () -> <div|e> ()) -> <div|e> () */  { tailcall: while(1)
{
  if (predicate()) {
    action();
    {
      continue tailcall;
    }
  }
  else {
    return _unit_;
  }
}}
 
// Zip two lists together by apply a function "f" to all corresponding elements.
// The returned list is only as long as the smallest input list.
function zipWith(xs, ys, f)  /* forall<a,b,c,e> (xs : list<a>, ys : list<b>, f : (a, b) -> e c) -> e list<c> */  {
  return zipWithIndexed(xs, ys, function(i  /* int */ , x  /* 21271 */ , y  /* 21272 */ ) {  return f(x, y);});
}
 
// koka exports:
return { '_unit_': _unit_, '_tuple2_': _tuple2_, '_tuple3_': _tuple3_, '_tuple4_': _tuple4_, '_lp__comma__comma__comma__comma__rp_': _lp__comma__comma__comma__comma__rp_, 'False': False, 'True': True, 'Left': Left, 'Right': Right, 'Nil': Nil, 'Cons': Cons, 'Nothing': Nothing, 'Just': Just, 'Optional': Optional, 'None': None, 'Lt': Lt, 'Eq': Eq, 'Gt': Gt, 'Next': Next, 'patternMatchError': patternMatchError, '_copy': _copy, 'fst': fst, 'snd': snd, '_copy_1': _copy_1, 'fst_1': fst_1, 'snd_1': snd_1, 'thd': thd, '_copy_2': _copy_2, 'fst_2': fst_2, 'snd_2': snd_2, 'thd_1': thd_1, 'field4': field4, '_copy_3': _copy_3, 'fst_3': fst_3, 'snd_3': snd_3, 'thd_2': thd_2, 'field4_1': field4_1, 'field5': field5, '_copy_4': _copy_4, 'isFalse': isFalse, 'isTrue': isTrue, 'isLeft': isLeft, 'isRight': isRight, 'head': head, 'tail': tail, 'isNil': isNil, 'isCons': isCons, 'unJust': unJust, 'isNothing': isNothing, 'isJust': isJust, 'value': value, 'isOptional': isOptional, 'isNone': isNone, 'isLt': isLt, 'isEq': isEq, 'isGt': isGt, 'head_1': head_1, 'tail_1': tail_1, '_copy_5': _copy_5, 'stringCompare': stringCompare, 'maxInt': maxInt, '_dash__2': _dash__2, 'int_2': int_2, '_lt__3': _lt__3, '_lt__4': _lt__4, '_eq__eq__4': _eq__eq__4, 'order': order, 'compare_4': compare_4, '_lt__5': _lt__5, '_gt__3': _gt__3, '_gt__4': _gt__4, '_gt__5': _gt__5, '_eq__eq__5': _eq__eq__5, 'compare': compare, 'compare_1': compare_1, 'compare_2': compare_2, 'compare_3': compare_3, 'int_1': int_1, 'minInt': minInt, 'int_3': int_3, 'isEmpty': isEmpty, '_x7C__x7C__1': _x7C__x7C__1, 'maxListStack': maxListStack, 'reverse': reverse, '_plus__3': _plus__3, '_plus__4': _plus__4, '_gt__eq__3': _gt__eq__3, '_gt__eq__4': _gt__eq__4, '_gt__eq__5': _gt__eq__5, '_perc__1': _perc__1, '_fs__1': _fs__1, 'o': o, '_tilde_': _tilde_, '_excl__eq__4': _excl__eq__4, '_excl__eq__5': _excl__eq__5, '_lt__eq__3': _lt__eq__3, '_lt__eq__4': _lt__eq__4, '_lt__eq__5': _lt__eq__5, '_lb__rb__4': _lb__rb__4, 'id': id, 'on': on, 'error': error, 'negate': negate, 'abs_1': abs_1, 'all': all, 'any': any, 'unsafeTotal': unsafeTotal, 'unsafeNoDiv': unsafeNoDiv, '$for': $for, 'length_3': length_3, 'foreach': foreach, 'foreach_1': foreach_1, 'foreach_2': foreach_2, 'foreach_3': foreach_3, 'foreachIndexed': foreachIndexed, 'array_4': array_4, 'copy': copy, 'mapIndexedPeek': mapIndexedPeek, 'intersperse': intersperse, 'join_3': join_3, 'join_4': join_4, 'join_5': join_5, 'map': map, 'list': list, 'map_3': map_3, 'list_1': list_1, 'list_2': list_2, 'list_3': list_3, 'list_4': list_4, 'list_5': list_5, 'map_1': map_1, 'map_2': map_2, 'map_4': map_4, 'map_5': map_5, 'string_4': string_4, 'map_6': map_6, 'string_3': string_3, 'vector_2': vector_2, 'vector_4': vector_4, 'vector_3': vector_3, 'max': max, 'max_1': max_1, 'min': min, 'min_1': min_1, 'nan': nan, 'odd': odd, 'bitsInt': bitsInt, 'sar': sar, 'shl': shl, 'shr': shr, 'foldl': foldl, 'sum': sum, 'sum_1': sum_1, 'zipWithAcc': zipWithAcc, 'zipWithIter': zipWithIter, 'zipWithIndexed': zipWithIndexed, 'zip': zip, 'align': align, 'apply': apply, 'bitsDouble': bitsDouble, 'bool': bool, 'bool_1': bool_1, 'bool_2': bool_2, 'substr_1': substr_1, 'toUpper': toUpper, 'capitalize': capitalize, '$catch': $catch, 'catchOnFail': catchOnFail, 'randomInt': randomInt, 'choose': choose, 'foldr': foldr, 'concat': concat, 'concat_1': concat_1, 'concatMaybe': concatMaybe, 'conslist': conslist, '$const': $const, 'count_1': count_1, 'count_2': count_2, 'drop': drop, 'span': span, 'dropWhile': dropWhile, 'endsWith': endsWith, 'even': even, 'fill': fill, 'filter': filter, 'filterMap': filterMap, 'maybe': maybe, 'maybe_1': maybe_1, 'maybe_2': maybe_2, 'find': find, 'foldl1': foldl1, 'foldr1': foldr1, 'foreachUntil': foreachUntil, 'forWhile': forWhile, 'foreachWhile': foreachWhile, 'getHost': getHost, 'gshow': gshow, 'redirect': redirect, 'xprints': xprints, 'prints': prints, 'show': show, 'show_1': show_1, 'show_2': show_2, 'showHex': showHex, 'showChar': showChar, 'show_3': show_3, 'show_4': show_4, 'show_5': show_5, 'show_6': show_6, 'show_7': show_7, 'print': print, 'print_1': print_1, 'print_2': print_2, 'print_3': print_3, 'print_4': print_4, 'print_5': print_5, 'gprint': gprint, 'xprintsln': xprintsln, 'printsln': printsln, 'println': println, 'println_1': println_1, 'println_2': println_2, 'println_3': println_3, 'println_4': println_4, 'println_5': println_5, 'gprintln': gprintln, 'ignore': ignore, 'indexOfAcc': indexOfAcc, 'indexOf_2': indexOf_2, 'init': init, 'intCdiv': intCdiv, 'intCmod': intCmod, 'intMultiply': intMultiply, 'isLower': isLower, 'isUpper': isUpper, 'isAlpha': isAlpha, 'isDigit': isDigit, 'isAlphaNum': isAlphaNum, 'isAscii': isAscii, 'isControl': isControl, 'isDone': isDone, 'isHexDigit': isHexDigit, 'isInf': isInf, 'isWhite': isWhite, 'last': last, 'take': take, 'split': split, 'split_1': split_1, 'split_2': split_2, 'lines': lines, 'mainConsole': mainConsole, 'mapIndexed': mapIndexed, 'mapPeek': mapPeek, 'mapWhile': mapWhile, 'maxDouble': maxDouble, 'maximum': maximum, 'maximum_1': maximum_1, 'mbint': mbint, 'mbstring': mbstring, 'minDouble': minDouble, 'minimum': minimum, 'minimum_1': minimum_1, 'negInf': negInf, 'notEmpty': notEmpty, 'traceEnabled': traceEnabled, 'notrace': notrace, 'onExit': onExit, 'onExn': onExn, 'onExn_1': onExn_1, '$throw': $throw, 'onFail': onFail, 'onSuccess': onSuccess, 'parseDigits': parseDigits, 'parsePosInt': parsePosInt, 'parseInt': parseInt, 'parseFixed': parseFixed, 'parseFixedDefault': parseFixedDefault, 'parseIntDefault': parseIntDefault, 'partitionAcc': partitionAcc, 'partition': partition, 'posInf': posInf, 'printRedirect': printRedirect, 'readln': readln, 'readln_1': readln_1, 'question': question, 'random': random, 'remove': remove, 'repeat': repeat, 'replicate': replicate, 'rotl': rotl, 'rotr': rotr, 'showExp': showExp, 'showFixed': showFixed, 'single': single, 'startsWith': startsWith, 'takeWhile': takeWhile, 'toLower': toLower, 'xtrace': xtrace, 'trace': trace, 'uniqueCount': uniqueCount, 'unique': unique, 'unlines': unlines, 'unlist': unlist, 'unsafeNoExn': unsafeNoExn, 'unzip': unzip, '$while': $while, 'zipWith': zipWith };
});