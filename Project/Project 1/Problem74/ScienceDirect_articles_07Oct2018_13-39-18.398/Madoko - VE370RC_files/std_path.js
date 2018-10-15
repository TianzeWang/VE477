// koka generated module: "std/path"
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
var onserver = ($std_core.getHost() === "nodejs");
var path;
if (onserver) {
  path = require("path");
}
else {
  path = {
    sep: "/",
    delimiter: ";",
    basename: $basename,
    dirname: $dirname,
    extname: $extname,
    normalize: $normalize,    
  };
}
function $basename(s) {
  if (!s) return "";
  var i = s.lastIndexOf("/");
  return (i < 0 ? s : s.substr(i+1));
}
function $dirname(s) {
  if (!s) return "";
  var i = s.lastIndexOf("/");
  return (i <= 0 ? "" : s.substr(0,i));
}
function $extname(s) {
  s = $basename(s);
  if (!s) return "";
  var i = s.lastIndexOf(".");
  return (i < 0 ? "" : s.substr(i));      
}
function $normalize(s) { 
  var ps = s.split(/[\\\/]/); // TODO: improve on the browser?
  var path = [];
  for(var i = 0; i < ps.length; i++) {
    if (ps[i] === ".." && path.length > 0) {
      path.pop();
    }
    else if (ps[i] !== ".") {
      path.push(ps[i]);
    }
  }
  return path.join("/");
}    
function pathsep()  /* () -> string */  {
  return path.sep;
}
 
// Platform specific directory separator (`/` or `\`)
var sep = pathsep();
 
// Join arguments using the platform specific directory separator  
// Note: unlike NodeJS the resulting path is not yet normalized
function combine(path1, path2)  /* (path1 : string, path2 : string) -> string */  {
  var p2 = ($std_core.startsWith(path2, sep)) ? ((path2).substr(1)) : path2;
  if ($std_core.endsWith(path1, sep)) {
    var p1 = $std_core.substr_1(path1, 0, (((path1).length - 1)|0));
  }
  else {
    var p1 = path1;
  }
  if ((p1 === "")) {
    return p2;
  }
  else {
    return (p1 + (sep + p2));
  }
}
 
// Join a list of paths
function combine_1(paths)  /* (paths : list<string>) -> string */  {
  return (paths == null) ? "" : $std_core.foldl(paths.tail, paths.head, combine);
}
function xdirname(p)  /* (p : string) -> string */  {
  return path.dirname(p);
}
 
// Return the directory name portion of the path (excluding the directory separator).
// Return an empty string if no directory part exists in the path.  
// `dirname("foo/bar.ext") == "foo")`
function dirname(p)  /* (p : string) -> string */  {
  var d = xdirname(p);
  var _x0 = ((d === ".") && !($std_core.startsWith(p, ".")));
  return (_x0) ? "" : d;
}
 
// Return the extension (including the `.`)  
// `extname("foo.ext") == ".ext"`, `extname("bla.") == "."`, `extname("bla") == ""`
function extname(p)  /* (p : string) -> string */  {
  return path.extname(p);
}
 
// Return the base name (file name) portion of the path.
// `basename("foo/bar.ext") == "bar.ext"`
function basename(p)  /* (p : string) -> string */  {
  return path.basename(p);
}
 
// Remove the extension from a path
function noext(path)  /* (path : string) -> string */  {
  var ext = extname(path);
  if ((ext === "")) {
    return path;
  }
  else {
    return $std_core.substr_1(path, 0, (((path).length - (ext).length)|0));
  }
}
 
// Return the stem name portion of the path, i.e. without directory or extension.
// `stemname("foo/bar.ext") == "bar"`
function stemname(p)  /* (p : string) -> string */  {
  return noext(basename(p));
}
 
// Append to the stem name of a path
function appendStem(path, extra)  /* (path : string, extra : string) -> string */  {
  return combine(dirname(path), (stemname(path) + (extra + extname(path))));
}
 
// Change the extension of a path
function changeExt(path, ext)  /* (path : string, ext : string) -> string */  {
  var _x0 = ($std_core.startsWith(ext, ".")) ? "" : ".";
  return (noext(path) + (_x0 + ext));
}
 
// If a path has no extension, set it to the provided one.
function defaultExt(fname, ext)  /* (fname : string, ext : string) -> string */  {
  var _x0 = (extname(fname) === "");
  return (_x0) ? changeExt(fname, ext) : fname;
}
function pathdelim()  /* () -> string */  {
  return path.delimiter;
}
 
// Platform specific path delimiter when specifying a list o paths (`:` or `;`)
var delimiter = pathdelim();
 
// Return the full normalized path
function normalize(p)  /* (p : string) -> io string */  {
  return path.normalize(p);
}
function programPath()  /* () -> io string */  {
  return ((function(){ var m = module; if (m==null) return ''; while(m.parent) { m = m.parent; }; return (m.filename ? m.filename : ''); })());
}
 
// koka exports:
return { 'pathsep': pathsep, 'sep': sep, 'combine': combine, 'combine_1': combine_1, 'xdirname': xdirname, 'dirname': dirname, 'extname': extname, 'basename': basename, 'noext': noext, 'stemname': stemname, 'appendStem': appendStem, 'changeExt': changeExt, 'defaultExt': defaultExt, 'pathdelim': pathdelim, 'delimiter': delimiter, 'normalize': normalize, 'programPath': programPath };
});