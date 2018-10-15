// koka generated module: "std/dict"
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
// make a shallow copy
function $dictCopy(obj) {
  var newobj = {};
  for( var prop in obj) newobj[prop] = obj[prop];
  return newobj;
}
// get the fields of an object
function $dictKeys(obj) {
  var props = [];
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) props.push(prop);
  } 
  return props;
}
function dictCopy(d)  /* forall<a> (d : dict<a>) -> dict<a> */  {
  return $dictCopy(d);
}
 
// Return the keys in a dictionary
function keys(d)  /* forall<a,h> (d : mdict<h,a>) -> (read<h>) vector<string> */  {
  return $dictKeys(d);
}
 
// Return the keys in a
function keys_1(d)  /* forall<a> (d : dict<a>) -> vector<string> */  {
  return $dictKeys(d);
}
 
// Execute action for each key/value pair in a dictionary.
function foreach(d, action)  /* forall<a,e> (d : dict<a>, action : (string, a) -> e ()) -> e () */  {
  return $std_core.foreach_2(keys_1(d), function(k  /* string */ ) {  return action(k, (d)[k]);});
}
 
// Append two dictionaries.
function _plus_(d1, d2)  /* forall<a> (d1 : dict<a>, d2 : dict<a>) -> dict<a> */  {
  var dnew = dictCopy(d1);
  foreach(d2, function(key  /* string */ , value  /* 537 */ ) {  return (dnew)[key] = (value);});
  return dnew;
}
 
// Index into a string dictionary
function _lb__rb__1(md, s)  /* forall<a,h> (md : mdict<h,a>, s : string) -> (read<h>) maybe<a> */  {
  if (((md)[s]!==undefined)) {
    return $std_core.Just(((md)[s]));
  }
  else {
    return $std_core.Nothing;
  }
}
 
// Index into a string dictionary
function _lb__rb__2(d, key)  /* forall<a> (d : dict<a>, key : string) -> maybe<a> */  {
  if (((d)[key]!==undefined)) {
    return $std_core.Just((d)[key]);
  }
  else {
    return $std_core.Nothing;
  }
}
 
// Create a new empty dictionary
function dict()  /* forall<a> () -> dict<a> */  {
  return {};
}
 
// Create a new dictionary from a ":list" of key value pairs.
function dict_1(elems)  /* forall<a> (elems : list<(string, a)>) -> dict<a> */  {
  var d = dict();
  $std_core.foreach(elems, function(elem  /* (string, 791) */ ) {  return (d)[elem.fst] = (elem.snd);});
  return d;
}
 
// Create a new dictionary from a ":vector" of key/value pairs.
function dict_2(elems)  /* forall<a> (elems : vector<(string, a)>) -> dict<a> */  {
  var d = dict();
  $std_core.foreach_2(elems, function(elem  /* (string, 879) */ ) {  return (d)[elem.fst] = (elem.snd);});
  return d;
}
 
// Map a function over the values in a dictionary.
function map(d, f)  /* forall<a,b,e> (d : dict<a>, f : (string, a) -> e b) -> e dict<b> */  {
  return dict_2($std_core.map_5(keys_1(d), function(k  /* string */ ) {  return $std_core._tuple2_(k, f(k, (d)[k]));}));
}
function copy(md)  /* forall<h,a> (md : mdict<h,a>) -> <alloc<h>,read<h>> mdict<h,a> */  {
  return $dictCopy(md);
}
 
// Freeze a mutable dictionary into a ":dict"
function freeze(md)  /* forall<h,a> (md : mdict<h,a>) -> <alloc<h>,read<h>> dict<a> */  {
  return $dictCopy(md);
}
 
// Convert a dictionary to a vector of key/value pairs
function vector(d)  /* forall<a,h> (d : mdict<h,a>) -> (read<h>) vector<(string, a)> */  {
  return $std_core.map_5(keys(d), function(key  /* string */ ) {  return $std_core._tuple2_(key, ((d)[key]));});
}
 
// Convert a dictionary to a vector of key/value pairs
function vector_1(d)  /* forall<a> (d : dict<a>) -> vector<(string, a)> */  {
  return $std_core.map_5(keys_1(d), function(key  /* string */ ) {  return $std_core._tuple2_(key, (d)[key]);});
}
 
// Convert a dictionary to a list of key/value pairs
function list(d)  /* forall<a,h> (d : mdict<h,a>) -> (read<h>) list<(string, a)> */  {
  return $std_core.list_4(vector(d));
}
 
// Convert a dictionary to a list of key/value pairs
function list_1(d)  /* forall<a> (d : dict<a>) -> list<(string, a)> */  {
  return $std_core.list_4(vector_1(d));
}
 
// Create a mutable string dictionary
function mdict()  /* forall<h,a> () -> (alloc<h>) mdict<h,a> */  {
  return {};
}
 
// koka exports:
return { 'dictCopy': dictCopy, 'keys': keys, 'keys_1': keys_1, 'foreach': foreach, '_plus_': _plus_, '_lb__rb__1': _lb__rb__1, '_lb__rb__2': _lb__rb__2, 'dict': dict, 'dict_1': dict_1, 'dict_2': dict_2, 'map': map, 'copy': copy, 'freeze': freeze, 'vector': vector, 'vector_1': vector_1, 'list': list, 'list_1': list_1, 'mdict': mdict };
});