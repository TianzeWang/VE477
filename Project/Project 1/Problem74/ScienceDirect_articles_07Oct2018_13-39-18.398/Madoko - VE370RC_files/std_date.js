// koka generated module: "std/date"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core'], function($std_core) {
"use strict";
 
// koka declarations:
 
// Get the day of the month, starting at 1
function day(d)  /* (d : date) -> int */  {
  return d.getDate();
}
function now()  /* () -> ndet date */  {
  return new Date();
}
function hours(_arg1)  /* (date) -> int */  {
  return _arg1.getHours();
}
 
// Return an ISO 8601 date-time string.
// See <http://en.wikipedia.org/wiki/ISO_8601>
function isoDateTime(_arg1)  /* (date) -> string */  {
  return _arg1.toISOString();
}
 
// Return the date portion of an ISO date/time string.
function isoDate(d)  /* (d : date) -> string */  {
  var s = isoDateTime(d);
  var i = ((s).indexOf("T"));
  return (i >= 0) ? $std_core.substr_1(s, 0, i) : s;
}
 
// Get the month, starting at 1
function month(d)  /* (d : date) -> int */  {
  return d.getMonth()+1;
}
function show2(i)  /* (i : int) -> string */  {
  return $std_core.align($std_core.show_1(i), 2, '0');
}
 
// Get the year
function year(d)  /* (d : date) -> int */  {
  return d.getFullYear();
}
 
// return the ISO date in local time
function isoLocalDate(d)  /* (d : date) -> string */  {
  return ($std_core.show_1(year(d)) + ("-" + (show2(month(d)) + ("-" + show2(day(d))))));
}
function minutes(_arg1)  /* (date) -> int */  {
  return _arg1.getMinutes();
}
function seconds(_arg1)  /* (date) -> int */  {
  return _arg1.getSeconds();
}
 
// return the ISO time in local time
function isoLocalTime(d)  /* (d : date) -> string */  {
  return (show2(hours(d)) + (":" + (show2(minutes(d)) + (":" + show2(seconds(d))))));
}
 
// Return the time portion of an ISO date/time string.
function isoTime(d)  /* (d : date) -> string */  {
  var s = isoDateTime(d);
  var i = ((s).indexOf("T"));
  return (i >= 0) ? ((s).substr(i)) : s;
}
 
// Number of milliseconds since 1 January 1970 00:00:00 UTC.
function time(_arg1)  /* (date) -> int */  {
  return _arg1.getTime();
}
 
// koka exports:
return { 'day': day, 'now': now, 'hours': hours, 'isoDateTime': isoDateTime, 'isoDate': isoDate, 'month': month, 'show2': show2, 'year': year, 'isoLocalDate': isoLocalDate, 'minutes': minutes, 'seconds': seconds, 'isoLocalTime': isoLocalTime, 'isoTime': isoTime, 'time': time };
});