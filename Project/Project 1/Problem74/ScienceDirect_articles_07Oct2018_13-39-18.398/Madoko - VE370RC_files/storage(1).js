// koka generated module: "storage"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_path', './std_log', './std_regex'], function($std_core, $std_path, $std_log, $std_regex) {
"use strict";
 
// koka declarations:
/*---------------------------------------------------------------------------
  Copyright 2013 Microsoft Corporation.
 
  This is free software; you can redistribute it and/or modify it under the
  terms of the Apache License, Version 2.0. A copy of the License can be
  found in the file "license.txt" at the root of this distribution.
---------------------------------------------------------------------------*/
// Provide client/server storage
// This module provides file access operations. On the web client, these
// operations only provide accesss to a global object of files which is
// *not* persistent. This code is mainly to ensure we can share as much
// code as possible between client and server.
var onServer = ($std_core.getHost() === "nodejs");
var $readFileSync;
var $writeFileSync;
var $renameSync;
var $copySync;
var $fexistsSync;
var $relative;
var $mkdirp;
var $cwd;
var $clear;
var $unlinkSync;
var vfs = {};
if (onServer) {
  var fs = require("fs");
  var path = require("path");
  var xmkdirp = require('mkdirp');
  $readFileSync = function(fname,enc) { return fs.readFileSync(fname,(enc && enc !== "buffer") ? {encoding:enc} : null); };
  $writeFileSync = function(fname,enc,data) { return fs.writeFileSync(fname,data,(enc && enc !== "buffer") ? {encoding:enc} : null); };
  $fexistsSync = function(fname) { return (fs.existsSync(fname) != 0);};
  $relative = function(dir,p) { return path.relative(dir,p); };
  $cwd = function() { return process.cwd(); };
  $mkdirp = function(dir,mode) { return xmkdirp.sync(dir,mode); };
  $renameSync = function(oldname,newname) { return fs.renameSync(oldname,newname); };
  $copySync = function(srcname,destname) { 
    var buf = fs.readFileSync(srcname);
    fs.writeFileSync(destname,buf);
  };
  $clear = function() { };
  $unlinkSync = function(fname) { return fs.unlinkSync(fname); }; 
}
else {
  $readFileSync = function(fname,enc) {
    var data = vfs["/" + fname];
    if (data === undefined) throw ("Could not read: " + fname);
    return data;
  }
  $writeFileSync = function(fname,enc,data) {
    vfs["/" + fname] = data;
  }
  $fexistsSync = function(fname) {
    return (vfs["/" + fname] !== undefined);
  }
  $relative = function(dir,p) {
    return p; // TODO: implement this client side.
  }
  $cwd = function() {
    return "."; // ??
  }
  $mkdirp = function(dir,mode) {
    // do nothing
  }
  $renameSync = function(oldname,newname) {
    $copySync(oldname,newname);
    $unlinkSync(oldname);
  }
  $copySync = function(srcname,destname) {
    $writeFileSync( destname, "binary", $readFileSync(oldname) );
  }
  $clear = function() {
    vfs = {};
  }
  $unlinkSync = function(fname) {
    var data = vfs["/" + fname];
    if (data != null) {
      delete vfs["/" + fname];
    }
    return null;
  }
}
function Buffer(obj)  /* (obj : any) -> buffer */  {
  return { obj: obj };
}
 
// Automatically generated. Retrieves the `obj` constructor field of the ":buffer" type.
function obj(buffer)  /* (buffer : buffer) -> any */  {
  return buffer.obj;
}
function _copy(_this, obj0)  /* (buffer, obj : ?any) -> buffer */  {
  var obj_104 = (obj0 !== undefined) ? obj0 : obj(_this);
  return Buffer(obj_104);
}
function cwd()  /* () -> io string */  {
  return $cwd();
}
var sandboxed = $std_core.unsafeTotal(function() {
  return { value: $std_core.Nothing };
});
function xlength(obj0)  /* (obj : any) -> int */  {
  return obj0.length;
}
function length(b)  /* (b : buffer) -> int */  {
  return xlength(obj(b));
}
var fileChar = "[^\\\\\\/\\?\\*\\.\\|<>&:\\u0000-\\u001F]";
var rxRootRelative = $std_regex.regex(("^(?![\\\\\\/]|\\w:)(?:" + (fileChar + ("|\\.(?=[^\\.])|[\\\\\\/](?=" + (fileChar + "|\\.))+$")))), undefined, undefined);
function under(path, roots)  /* (path : string, roots : list<string>) -> bool */  {
  return $std_core.any(roots, function(root  /* string */ ) {  if ($std_core.isEmpty(root)) {  return $std_regex.contains(path, rxRootRelative, undefined);} else {  return ($std_core.startsWith(path, (root + "/")) && $std_regex.contains(((path).substr((((root).length + 1)|0))), rxRootRelative, undefined));}});
}
var rxPathSep = $std_regex.regex("[\\\\/]", undefined, undefined);
function xnormalize(path)  /* (path : string) -> string */  {
  return $std_core.join_4($std_core.reverse($std_core.foldl($std_core.list_4($std_regex.split(path, rxPathSep, undefined, undefined)), $std_core.Nil, function(rroots  /* list<string> */ , dir  /* string */ ) {  var _x0 = ((dir === "") || (dir === ".")); if (_x0) {  return rroots;} else {  if ((dir === "..")) {  if (rroots != null) {  if ((rroots.head !== ".parent")){  return rroots.tail;}} return $std_core.Cons(".parent", rroots);} else {  return $std_core.Cons(dir, rroots);}}})), "/");
}
function checkSandbox(path)  /* (path : string) -> io string */  {
  var _x0 = ((sandboxed).value);
  if (_x0 == null) {
    return $std_path.normalize(path);
  }
  else {
    var xpath = xnormalize($std_path.normalize(path));
    var _x1 = !(under(xpath, _x0.unJust));
    if (_x1) {
      $std_core.error(("cannot access files outside the sandbox: " + path));
    }
    else {
      $std_core._unit_;
    }
    return xpath;
  }
}
 
// In the browser, removes all files.
function clear()  /* () -> io () */  {
  return $clear();
}
function xcopyFile(fnameOld, fnameNew)  /* (fnameOld : string, fnameNew : string) -> io () */  {
  return $copySync(fnameOld,fnameNew);
}
function copyFile(fnameOld, fnameNew)  /* (fnameOld : string, fnameNew : string) -> io () */  {
  var xfnameOld = checkSandbox(fnameOld);
  var xfnameNew = checkSandbox(fnameNew);
  return xcopyFile(xfnameOld, xfnameNew);
}
function enforceSandbox(roots)  /* (roots : ?list<string>) -> io () */  {
  var roots_1223 = (roots !== undefined) ? roots : $std_core.Cons("", $std_core.Nil);
  return ((sandboxed).value = $std_core.Just($std_core.map_3(roots_1223, function(r  /* string */ ) {  return xnormalize($std_path.normalize(r));})));
}
function xfexistsSync(fileName)  /* (fileName : string) -> io bool */  {
  return $fexistsSync(fileName);
}
function fexistsSync(fileName)  /* (fileName : string) -> io bool */  {
  return $std_core.$catch(function() {  var xfileName = checkSandbox(fileName); return xfexistsSync(xfileName);}, function(___lp_166_comma_10_rp_  /* exception */ ) {  return false;});
}
function xmkdirp(dir, mode)  /* (dir : string, mode : ?int) -> io () */  {
  var mode_1370 = (mode !== undefined) ? mode : 511;
  return $mkdirp(dir,mode_1370);
}
function mkdirp(dir, mode)  /* (dir : string, mode : ?int) -> io () */  {
  var mode_1381 = (mode !== undefined) ? mode : 511;
  var xdir = checkSandbox(dir);
  return xmkdirp(xdir, mode_1381);
}
function xreadBase64FileSync(fileName)  /* (fileName : string) -> io string */  {
  return $readFileSync(fileName,'base64');
}
 
// Read a binary file synchronously (using base64 encoding)
function readBase64FileSync(fileName, required)  /* (fileName : string, required : ?bool) -> io string */  {
  var required_1405 = (required !== undefined) ? required : true;
  var xfileName = checkSandbox(fileName);
  (required_1405) ? $std_log.log("files", fileName) : $std_core._unit_;
  return xreadBase64FileSync(xfileName);
}
 
// Try to a binary file synchronously (using base64 encoding)
function tryReadBase64File(fileName, required)  /* (fileName : string, required : ?bool) -> io either<exception,string> */  {
  var required_1429 = (required !== undefined) ? required : true;
  return $std_core.$catch(function() {  return $std_core.Right(readBase64FileSync(fileName, required_1429));}, function(exn  /* exception */ ) {  return $std_core.Left(exn);});
}
 
// Try to read a binary file in base64; return a default value in case of an error.
function readBase64FileDef(fileName, def, required)  /* (fileName : string, def : string, required : ?bool) -> io string */  {
  var required_1465 = (required !== undefined) ? required : false;
  var _x0 = tryReadBase64File(fileName, required_1465);
  return (_x0._tag === 1) ? def : _x0.left;
}
function xreadFileSync(fileName)  /* (fileName : string) -> io any */  {
  return $readFileSync(fileName,'buffer');
}
 
// Read a binary file into a buffer
function readFileSync(fileName)  /* (fileName : string) -> io buffer */  {
  var xfileName = checkSandbox(fileName);
  return Buffer(xreadFileSync(xfileName));
}
function xreadInt1(obj0, ofs)  /* (obj : any, ofs : int) -> int */  {
  return obj0.readUInt8(ofs);
}
function readInt1(b, ofs)  /* (b : buffer, ofs : int) -> int */  {
  return xreadInt1(obj(b), ofs);
}
function xreadInt4(obj0, ofs, bigendian)  /* (obj : any, ofs : int, bigendian : ?bool) -> int */  {
  var bigendian_1527 = (bigendian !== undefined) ? bigendian : true;
  return (bigendian_1527 ? obj0.readInt32BE(ofs) : obj0.readInt32LE(ofs));
}
function readInt4(b, ofs, bigendian)  /* (b : buffer, ofs : int, bigendian : ?bool) -> int */  {
  var bigendian_1538 = (bigendian !== undefined) ? bigendian : true;
  return xreadInt4(obj(b), ofs, bigendian_1538);
}
function xreadTextFileSync(fileName)  /* (fileName : string) -> io string */  {
  return $readFileSync(fileName,'utf-8');
}
 
// Read a text file synchronously (using UTF8 encoding)
function readTextFileSync(fileName, required)  /* (fileName : string, required : ?bool) -> io string */  {
  var required_1560 = (required !== undefined) ? required : true;
  var xfileName = checkSandbox(fileName);
  (required_1560) ? $std_log.log("files", fileName) : $std_core._unit_;
  return xreadTextFileSync(xfileName);
}
 
// Try to a text file synchronously (using UTF8 encoding)
function tryReadTextFile(fileName, required)  /* (fileName : string, required : ?bool) -> io either<exception,string> */  {
  var required_1584 = (required !== undefined) ? required : true;
  return $std_core.$catch(function() {  return $std_core.Right(readTextFileSync(fileName, required_1584));}, function(exn  /* exception */ ) {  return $std_core.Left(exn);});
}
 
// Try to read a text file; return a default value in case of an error.
function readTextFileDef(fileName, def, required)  /* (fileName : string, def : string, required : ?bool) -> io string */  {
  var required_1620 = (required !== undefined) ? required : false;
  var _x0 = tryReadTextFile(fileName, required_1620);
  return (_x0._tag === 1) ? def : _x0.left;
}
 
// Read a text file synchronously (using UTF8 encoding) without sandbox restrictions
function readTextFileNoSandbox(fileName)  /* (fileName : string) -> io string */  {
  return xreadTextFileSync($std_path.normalize(fileName));
}
function relative(from, to)  /* (from : string, to : string) -> string */  {
  return $relative(from,to);
}
function xrename(fnameOld, fnameNew)  /* (fnameOld : string, fnameNew : string) -> io () */  {
  return $renameSync(fnameOld,fnameNew);
}
function rename(fnameOld, fnameNew)  /* (fnameOld : string, fnameNew : string) -> io () */  {
  var xfnameOld = checkSandbox(fnameOld);
  var xfnameNew = checkSandbox(fnameNew);
  return xrename(xfnameOld, xfnameNew);
}
 
// Search for a file along a list of directories
function searchFileSync(dirs, fname)  /* (dirs : list<string>, fname : string) -> io maybe<string> */  {
  var fnames = $std_core.map_3(dirs, function(dir  /* string */ ) {  return $std_path.combine(dir, fname);});
  return $std_core.foreachUntil(fnames, function(f  /* string */ ) {  return (fexistsSync(f)) ? $std_core.Just(f) : $std_core.Nothing;});
}
function xtoBase64(obj0)  /* (obj : any) -> string */  {
  return obj0.toString('base64');
}
function toBase64(b)  /* (b : buffer) -> string */  {
  return xtoBase64(obj(b));
}
function xwriteTextFileSync(fileName, content)  /* (fileName : string, content : string) -> io () */  {
  return $writeFileSync(fileName,'utf-8',content);
}
 
// Write a text file synchronously (using UTF8 encoding)
function writeTextFileSync(fileName, content)  /* (fileName : string, content : string) -> io () */  {
  var xfileName = checkSandbox(fileName);
  $std_log.log("filesWrite", fileName);
  return xwriteTextFileSync(xfileName, content);
}
 
// Try to write a text file synchronously (using UTF8 encoding). 
// Returns "True" if successful.
function tryWriteTextFile(fileName, content)  /* (fileName : string, content : string) -> io bool */  {
  return $std_core.$catch(function() {  writeTextFileSync(fileName, content); return true;}, function(__exn  /* exception */ ) {  return false;});
}
function tryCopyTextFile(fileName, outName, required)  /* (fileName : string, outName : string, required : ?bool) -> io bool */  {
  var required_1864 = (required !== undefined) ? required : false;
  var _x0 = tryReadTextFile(fileName, required_1864);
  return (_x0._tag === 1) ? false : tryWriteTextFile(outName, _x0.left);
}
function tryCopyTextFileFromTo(fname, srcDir, outDir, required)  /* (fname : string, srcDir : string, outDir : string, required : ?bool) -> io bool */  {
  var required_1898 = (required !== undefined) ? required : false;
  return tryCopyTextFile($std_path.combine(srcDir, fname), $std_path.combine(outDir, fname), required_1898);
}
 
// try to ead a binary file into a buffer
function tryReadFileSync(fileName)  /* (fileName : string) -> io maybe<buffer> */  {
  return $std_core.onExn($std_core.Nothing, function() {  return $std_core.Just(readFileSync(fileName));});
}
function tryRename(fnameOld, fnameNew)  /* (fnameOld : string, fnameNew : string) -> io () */  {
  return $std_core.ignore(function() {
    return rename(fnameOld, fnameNew);
  });
}
function xunlinkSync(fileName)  /* (fileName : string) -> io () */  {
  return $unlinkSync(fileName);
}
function unlinkSync(fileName)  /* (fileName : string) -> io () */  {
  var xfileName = checkSandbox(fileName);
  return xunlinkSync(xfileName);
}
 
// Delete a file
function tryUnlinkSync(fname)  /* (fname : string) -> io () */  {
  return $std_core.ignore(function() {
    return unlinkSync(fname);
  });
}
function xwriteBase64FileSync(fileName, content)  /* (fileName : string, content : string) -> io () */  {
  return $writeFileSync(fileName,'base64',content);
}
 
// Write a binary file synchronously (using base64 encoding)
function writeBase64FileSync(fileName, content)  /* (fileName : string, content : string) -> io () */  {
  var xfileName = checkSandbox(fileName);
  $std_log.log("filesWrite", fileName);
  return xwriteBase64FileSync(xfileName, content);
}
 
// Try to write a binary file synchronously (using base64 encoding). 
// Returns "True" if successful.
function tryWriteBase64File(fileName, content)  /* (fileName : string, content : string) -> io bool */  {
  return $std_core.$catch(function() {  writeBase64FileSync(fileName, content); return true;}, function(__exn  /* exception */ ) {  return false;});
}
 
// koka exports:
return { 'obj': obj, '_copy': _copy, 'cwd': cwd, 'sandboxed': sandboxed, 'xlength': xlength, 'length': length, 'fileChar': fileChar, 'rxRootRelative': rxRootRelative, 'under': under, 'rxPathSep': rxPathSep, 'xnormalize': xnormalize, 'checkSandbox': checkSandbox, 'clear': clear, 'xcopyFile': xcopyFile, 'copyFile': copyFile, 'enforceSandbox': enforceSandbox, 'xfexistsSync': xfexistsSync, 'fexistsSync': fexistsSync, 'xmkdirp': xmkdirp, 'mkdirp': mkdirp, 'xreadBase64FileSync': xreadBase64FileSync, 'readBase64FileSync': readBase64FileSync, 'tryReadBase64File': tryReadBase64File, 'readBase64FileDef': readBase64FileDef, 'xreadFileSync': xreadFileSync, 'readFileSync': readFileSync, 'xreadInt1': xreadInt1, 'readInt1': readInt1, 'xreadInt4': xreadInt4, 'readInt4': readInt4, 'xreadTextFileSync': xreadTextFileSync, 'readTextFileSync': readTextFileSync, 'tryReadTextFile': tryReadTextFile, 'readTextFileDef': readTextFileDef, 'readTextFileNoSandbox': readTextFileNoSandbox, 'relative': relative, 'xrename': xrename, 'rename': rename, 'searchFileSync': searchFileSync, 'xtoBase64': xtoBase64, 'toBase64': toBase64, 'xwriteTextFileSync': xwriteTextFileSync, 'writeTextFileSync': writeTextFileSync, 'tryWriteTextFile': tryWriteTextFile, 'tryCopyTextFile': tryCopyTextFile, 'tryCopyTextFileFromTo': tryCopyTextFileFromTo, 'tryReadFileSync': tryReadFileSync, 'tryRename': tryRename, 'xunlinkSync': xunlinkSync, 'unlinkSync': unlinkSync, 'tryUnlinkSync': tryUnlinkSync, 'xwriteBase64FileSync': xwriteBase64FileSync, 'writeBase64FileSync': writeBase64FileSync, 'tryWriteBase64File': tryWriteBase64File };
});