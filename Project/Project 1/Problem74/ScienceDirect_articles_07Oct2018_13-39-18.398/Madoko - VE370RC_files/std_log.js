// koka generated module: "std/log"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_dict'], function($std_core, $std_dict) {
"use strict";
 
// koka declarations:
var logDict = $std_core.unsafeTotal(function() {
  return $std_dict.mdict();
});
 
// Total function that logs a message in a certain log "logName".
// Has no observable effect but see "withLog".
function log(logName, message)  /* (logName : string, message : string) -> () */  {
  return $std_core.unsafeTotal(function() {
    var _x0 = (!(((logDict)["nolog"]!==undefined)) && ((logDict)[logName]!==undefined));
    if (_x0) {
      return (logDict)[logName] = ($std_core.maybe($std_dict._lb__rb__1(logDict, logName), "", $std_core.id) + (message + "\n"));
    }
    else {
      return $std_core._unit_;
    }
  });
}
 
// Get the current log. Since this is in the "io" effect, "withLog" is preferred.
function getLog(logName)  /* (logName : string) -> io string */  {
  return $std_core.maybe($std_dict._lb__rb__1(logDict, logName), "", $std_core.id);
}
 
// Disable logging completely.
function nolog()  /* () -> (st<global>) () */  {
  return (logDict)["nolog"] = "";
}
 
// Encloses a possibly total "action" and returns its result together
// with the contents of a log named "logName". The contents of the log
// are non-deterministically determined. However, in practice, they contain
// any messages that were recorded in the "action" by calls to "log".
// However, if "nolog" was called, the log is always empty.
function withLog(logName, action)  /* forall<a,e> (logName : string, action : () -> <ndet|e> a) -> <ndet|e> (string, a) */  {
  return $std_core.unsafeTotal(function() {
    var oldLog = $std_dict._lb__rb__1(logDict, logName);
    (logDict)[logName] = "";
    var x = $std_core.unsafeTotal(action);
    var l = $std_core.maybe($std_dict._lb__rb__1(logDict, logName), "", $std_core.id);
    (oldLog == null) ? $std_core._unit_ : (logDict)[logName] = oldLog.unJust;
    return $std_core._tuple2_(l, x);
  });
}
 
// koka exports:
return { 'logDict': logDict, 'log': log, 'getLog': getLog, 'nolog': nolog, 'withLog': withLog };
});