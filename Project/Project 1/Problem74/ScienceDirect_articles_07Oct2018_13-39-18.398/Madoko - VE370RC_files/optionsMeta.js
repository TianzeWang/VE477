// koka generated module: "optionsMeta"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./locales', './std_core', './std_log', './std_path', './std_string', './common', './options', './optionsSandbox', './optionsMath'], function(locs, $std_core, $std_log, $std_path, $std_string, $common, $options, $optionsSandbox, $optionsMath) {
"use strict";
 
// koka declarations:
function appendNL(s, t)  /* (s : string, t : string) -> string */  {
  var _x0 = ((s === "") || $std_core.endsWith(s, "\n"));
  if (_x0) {
    return (s + t);
  }
  else {
    return (s + ("\n" + t));
  }
}
function appendValue(xs, x, sep)  /* (xs : list<string>, x : string, sep : ?string) -> list<string> */  {
  var sep_156 = (sep !== undefined) ? sep : "&br;";
  var _x0 = $std_core.reverse(xs);
  if (_x0 == null) {
    return $std_core.Cons(x, $std_core.Nil);
  }
  else {
    if ((_x0.head === "")) {
      return $std_core.reverse($std_core.Cons(x, _x0.tail));
    }
    else {
      return $std_core.reverse($std_core.Cons((_x0.head + (sep_156 + x)), _x0.tail));
    }
  }
}
function normalizeLocale(lang)  /* (lang : string) -> string */  {
  return locs.getLocaleInfo(lang).langid;
}
function update(options, key, xvalue, mdata)  /* (options : options/options, key : string, xvalue : string, mdata : options/metadata) -> options/options */  {
  var lvalue = $std_core.toLower(xvalue);
  var _x0 = ((lvalue === "none") || ((lvalue === "clear") || (lvalue === "false")));
  var value = (_x0) ? "" : xvalue;
  var ivalue = $std_core.maybe($std_core.parseInt(value, undefined), $std_core._tilde_(1), $std_core.id);
  var bvalue = ((value !== "") && (value !== "0"));
  if ((key === "title")) {
    return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, value, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  }
  else {
    if ((key === "prelude")) {
      return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, value, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    }
    else {
      if ((key === "css")) {
        var arg_1265 = options;
        if ((value === "")) {
          var _x0 = "";
        }
        else {
          var _x0 = ($options.css(options) + (";" + value));
        }
        var arg_1281 = _x0;
        var arg_1266 = undefined;
        var arg_1267 = undefined;
        var arg_1268 = undefined;
        var arg_1269 = undefined;
        var arg_1270 = undefined;
        var arg_1271 = undefined;
        var arg_1272 = undefined;
        var arg_1273 = undefined;
        var arg_1274 = undefined;
        var arg_1275 = undefined;
        var arg_1276 = undefined;
        var arg_1277 = undefined;
        var arg_1278 = undefined;
        var arg_1279 = undefined;
        var arg_1280 = undefined;
        var arg_1282 = undefined;
        var arg_1283 = undefined;
        var arg_1284 = undefined;
        var arg_1285 = undefined;
        var arg_1286 = undefined;
        var arg_1287 = undefined;
        var arg_1288 = undefined;
        var arg_1289 = undefined;
        var arg_1290 = undefined;
        var arg_1291 = undefined;
        var arg_1292 = undefined;
        var arg_1293 = undefined;
        var arg_1294 = undefined;
        var arg_1295 = undefined;
        var arg_1296 = undefined;
        var arg_1297 = undefined;
        var arg_1298 = undefined;
        var arg_1299 = undefined;
        var arg_1300 = undefined;
        var arg_1301 = undefined;
        var arg_1302 = undefined;
        var arg_1303 = undefined;
        var arg_1304 = undefined;
        var arg_1305 = undefined;
        var arg_1306 = undefined;
        var arg_1307 = undefined;
        var arg_1308 = undefined;
        var arg_1309 = undefined;
        var arg_1310 = undefined;
        var arg_1311 = undefined;
        var arg_1312 = undefined;
        var arg_1313 = undefined;
        var arg_1314 = undefined;
        var arg_1315 = undefined;
        var arg_1316 = undefined;
        var arg_1317 = undefined;
        var arg_1318 = undefined;
        var arg_1319 = undefined;
        var arg_1320 = undefined;
        var arg_1321 = undefined;
        var arg_1322 = undefined;
        var arg_1323 = undefined;
        var arg_1324 = undefined;
        var arg_1325 = undefined;
        var arg_1326 = undefined;
        var arg_1327 = undefined;
        var arg_1328 = undefined;
        return $options._copy_1(arg_1265, arg_1266, arg_1267, arg_1268, arg_1269, arg_1270, arg_1271, arg_1272, arg_1273, arg_1274, arg_1275, arg_1276, arg_1277, arg_1278, arg_1279, arg_1280, arg_1281, arg_1282, arg_1283, arg_1284, arg_1285, arg_1286, arg_1287, arg_1288, arg_1289, arg_1290, arg_1291, arg_1292, arg_1293, arg_1294, arg_1295, arg_1296, arg_1297, arg_1298, arg_1299, arg_1300, arg_1301, arg_1302, arg_1303, arg_1304, arg_1305, arg_1306, arg_1307, arg_1308, arg_1309, arg_1310, arg_1311, arg_1312, arg_1313, arg_1314, arg_1315, arg_1316, arg_1317, arg_1318, arg_1319, arg_1320, arg_1321, arg_1322, arg_1323, arg_1324, arg_1325, arg_1326, arg_1327, arg_1328);
      }
      else {
        if ((key === "html-meta")) {
          var arg_1601 = options;
          if ((value === "")) {
            var _x0 = "";
          }
          else {
            var _x0 = ($options.htmlMeta(options) + (";" + value));
          }
          var arg_1625 = _x0;
          var arg_1602 = undefined;
          var arg_1603 = undefined;
          var arg_1604 = undefined;
          var arg_1605 = undefined;
          var arg_1606 = undefined;
          var arg_1607 = undefined;
          var arg_1608 = undefined;
          var arg_1609 = undefined;
          var arg_1610 = undefined;
          var arg_1611 = undefined;
          var arg_1612 = undefined;
          var arg_1613 = undefined;
          var arg_1614 = undefined;
          var arg_1615 = undefined;
          var arg_1616 = undefined;
          var arg_1617 = undefined;
          var arg_1618 = undefined;
          var arg_1619 = undefined;
          var arg_1620 = undefined;
          var arg_1621 = undefined;
          var arg_1622 = undefined;
          var arg_1623 = undefined;
          var arg_1624 = undefined;
          var arg_1626 = undefined;
          var arg_1627 = undefined;
          var arg_1628 = undefined;
          var arg_1629 = undefined;
          var arg_1630 = undefined;
          var arg_1631 = undefined;
          var arg_1632 = undefined;
          var arg_1633 = undefined;
          var arg_1634 = undefined;
          var arg_1635 = undefined;
          var arg_1636 = undefined;
          var arg_1637 = undefined;
          var arg_1638 = undefined;
          var arg_1639 = undefined;
          var arg_1640 = undefined;
          var arg_1641 = undefined;
          var arg_1642 = undefined;
          var arg_1643 = undefined;
          var arg_1644 = undefined;
          var arg_1645 = undefined;
          var arg_1646 = undefined;
          var arg_1647 = undefined;
          var arg_1648 = undefined;
          var arg_1649 = undefined;
          var arg_1650 = undefined;
          var arg_1651 = undefined;
          var arg_1652 = undefined;
          var arg_1653 = undefined;
          var arg_1654 = undefined;
          var arg_1655 = undefined;
          var arg_1656 = undefined;
          var arg_1657 = undefined;
          var arg_1658 = undefined;
          var arg_1659 = undefined;
          var arg_1660 = undefined;
          var arg_1661 = undefined;
          var arg_1662 = undefined;
          var arg_1663 = undefined;
          var arg_1664 = undefined;
          return $options._copy_1(arg_1601, arg_1602, arg_1603, arg_1604, arg_1605, arg_1606, arg_1607, arg_1608, arg_1609, arg_1610, arg_1611, arg_1612, arg_1613, arg_1614, arg_1615, arg_1616, arg_1617, arg_1618, arg_1619, arg_1620, arg_1621, arg_1622, arg_1623, arg_1624, arg_1625, arg_1626, arg_1627, arg_1628, arg_1629, arg_1630, arg_1631, arg_1632, arg_1633, arg_1634, arg_1635, arg_1636, arg_1637, arg_1638, arg_1639, arg_1640, arg_1641, arg_1642, arg_1643, arg_1644, arg_1645, arg_1646, arg_1647, arg_1648, arg_1649, arg_1650, arg_1651, arg_1652, arg_1653, arg_1654, arg_1655, arg_1656, arg_1657, arg_1658, arg_1659, arg_1660, arg_1661, arg_1662, arg_1663, arg_1664);
        }
        else {
          if ((key === "script")) {
            var arg_1937 = options;
            if ((value === "")) {
              var _x0 = "";
            }
            else {
              var _x0 = ($options.scripts(options) + (";" + value));
            }
            var arg_1954 = _x0;
            var arg_1938 = undefined;
            var arg_1939 = undefined;
            var arg_1940 = undefined;
            var arg_1941 = undefined;
            var arg_1942 = undefined;
            var arg_1943 = undefined;
            var arg_1944 = undefined;
            var arg_1945 = undefined;
            var arg_1946 = undefined;
            var arg_1947 = undefined;
            var arg_1948 = undefined;
            var arg_1949 = undefined;
            var arg_1950 = undefined;
            var arg_1951 = undefined;
            var arg_1952 = undefined;
            var arg_1953 = undefined;
            var arg_1955 = undefined;
            var arg_1956 = undefined;
            var arg_1957 = undefined;
            var arg_1958 = undefined;
            var arg_1959 = undefined;
            var arg_1960 = undefined;
            var arg_1961 = undefined;
            var arg_1962 = undefined;
            var arg_1963 = undefined;
            var arg_1964 = undefined;
            var arg_1965 = undefined;
            var arg_1966 = undefined;
            var arg_1967 = undefined;
            var arg_1968 = undefined;
            var arg_1969 = undefined;
            var arg_1970 = undefined;
            var arg_1971 = undefined;
            var arg_1972 = undefined;
            var arg_1973 = undefined;
            var arg_1974 = undefined;
            var arg_1975 = undefined;
            var arg_1976 = undefined;
            var arg_1977 = undefined;
            var arg_1978 = undefined;
            var arg_1979 = undefined;
            var arg_1980 = undefined;
            var arg_1981 = undefined;
            var arg_1982 = undefined;
            var arg_1983 = undefined;
            var arg_1984 = undefined;
            var arg_1985 = undefined;
            var arg_1986 = undefined;
            var arg_1987 = undefined;
            var arg_1988 = undefined;
            var arg_1989 = undefined;
            var arg_1990 = undefined;
            var arg_1991 = undefined;
            var arg_1992 = undefined;
            var arg_1993 = undefined;
            var arg_1994 = undefined;
            var arg_1995 = undefined;
            var arg_1996 = undefined;
            var arg_1997 = undefined;
            var arg_1998 = undefined;
            var arg_1999 = undefined;
            var arg_2000 = undefined;
            return $options._copy_1(arg_1937, arg_1938, arg_1939, arg_1940, arg_1941, arg_1942, arg_1943, arg_1944, arg_1945, arg_1946, arg_1947, arg_1948, arg_1949, arg_1950, arg_1951, arg_1952, arg_1953, arg_1954, arg_1955, arg_1956, arg_1957, arg_1958, arg_1959, arg_1960, arg_1961, arg_1962, arg_1963, arg_1964, arg_1965, arg_1966, arg_1967, arg_1968, arg_1969, arg_1970, arg_1971, arg_1972, arg_1973, arg_1974, arg_1975, arg_1976, arg_1977, arg_1978, arg_1979, arg_1980, arg_1981, arg_1982, arg_1983, arg_1984, arg_1985, arg_1986, arg_1987, arg_1988, arg_1989, arg_1990, arg_1991, arg_1992, arg_1993, arg_1994, arg_1995, arg_1996, arg_1997, arg_1998, arg_1999, arg_2000);
          }
          else {
            if ((key === "script-")) {
              var arg_2273 = options;
              if ((value === "")) {
                var _x0 = "";
              }
              else {
                var _x0 = ($options.scriptsx(options) + (";" + value));
              }
              var arg_2291 = _x0;
              var arg_2274 = undefined;
              var arg_2275 = undefined;
              var arg_2276 = undefined;
              var arg_2277 = undefined;
              var arg_2278 = undefined;
              var arg_2279 = undefined;
              var arg_2280 = undefined;
              var arg_2281 = undefined;
              var arg_2282 = undefined;
              var arg_2283 = undefined;
              var arg_2284 = undefined;
              var arg_2285 = undefined;
              var arg_2286 = undefined;
              var arg_2287 = undefined;
              var arg_2288 = undefined;
              var arg_2289 = undefined;
              var arg_2290 = undefined;
              var arg_2292 = undefined;
              var arg_2293 = undefined;
              var arg_2294 = undefined;
              var arg_2295 = undefined;
              var arg_2296 = undefined;
              var arg_2297 = undefined;
              var arg_2298 = undefined;
              var arg_2299 = undefined;
              var arg_2300 = undefined;
              var arg_2301 = undefined;
              var arg_2302 = undefined;
              var arg_2303 = undefined;
              var arg_2304 = undefined;
              var arg_2305 = undefined;
              var arg_2306 = undefined;
              var arg_2307 = undefined;
              var arg_2308 = undefined;
              var arg_2309 = undefined;
              var arg_2310 = undefined;
              var arg_2311 = undefined;
              var arg_2312 = undefined;
              var arg_2313 = undefined;
              var arg_2314 = undefined;
              var arg_2315 = undefined;
              var arg_2316 = undefined;
              var arg_2317 = undefined;
              var arg_2318 = undefined;
              var arg_2319 = undefined;
              var arg_2320 = undefined;
              var arg_2321 = undefined;
              var arg_2322 = undefined;
              var arg_2323 = undefined;
              var arg_2324 = undefined;
              var arg_2325 = undefined;
              var arg_2326 = undefined;
              var arg_2327 = undefined;
              var arg_2328 = undefined;
              var arg_2329 = undefined;
              var arg_2330 = undefined;
              var arg_2331 = undefined;
              var arg_2332 = undefined;
              var arg_2333 = undefined;
              var arg_2334 = undefined;
              var arg_2335 = undefined;
              var arg_2336 = undefined;
              return $options._copy_1(arg_2273, arg_2274, arg_2275, arg_2276, arg_2277, arg_2278, arg_2279, arg_2280, arg_2281, arg_2282, arg_2283, arg_2284, arg_2285, arg_2286, arg_2287, arg_2288, arg_2289, arg_2290, arg_2291, arg_2292, arg_2293, arg_2294, arg_2295, arg_2296, arg_2297, arg_2298, arg_2299, arg_2300, arg_2301, arg_2302, arg_2303, arg_2304, arg_2305, arg_2306, arg_2307, arg_2308, arg_2309, arg_2310, arg_2311, arg_2312, arg_2313, arg_2314, arg_2315, arg_2316, arg_2317, arg_2318, arg_2319, arg_2320, arg_2321, arg_2322, arg_2323, arg_2324, arg_2325, arg_2326, arg_2327, arg_2328, arg_2329, arg_2330, arg_2331, arg_2332, arg_2333, arg_2334, arg_2335, arg_2336);
            }
            else {
              if ((key === "package")) {
                var arg_2609 = options;
                if ((value === "")) {
                  var _x0 = "";
                }
                else {
                  var _x0 = ($options.packages(options) + (";" + value));
                }
                var arg_2643 = _x0;
                var arg_2610 = undefined;
                var arg_2611 = undefined;
                var arg_2612 = undefined;
                var arg_2613 = undefined;
                var arg_2614 = undefined;
                var arg_2615 = undefined;
                var arg_2616 = undefined;
                var arg_2617 = undefined;
                var arg_2618 = undefined;
                var arg_2619 = undefined;
                var arg_2620 = undefined;
                var arg_2621 = undefined;
                var arg_2622 = undefined;
                var arg_2623 = undefined;
                var arg_2624 = undefined;
                var arg_2625 = undefined;
                var arg_2626 = undefined;
                var arg_2627 = undefined;
                var arg_2628 = undefined;
                var arg_2629 = undefined;
                var arg_2630 = undefined;
                var arg_2631 = undefined;
                var arg_2632 = undefined;
                var arg_2633 = undefined;
                var arg_2634 = undefined;
                var arg_2635 = undefined;
                var arg_2636 = undefined;
                var arg_2637 = undefined;
                var arg_2638 = undefined;
                var arg_2639 = undefined;
                var arg_2640 = undefined;
                var arg_2641 = undefined;
                var arg_2642 = undefined;
                var arg_2644 = undefined;
                var arg_2645 = undefined;
                var arg_2646 = undefined;
                var arg_2647 = undefined;
                var arg_2648 = undefined;
                var arg_2649 = undefined;
                var arg_2650 = undefined;
                var arg_2651 = undefined;
                var arg_2652 = undefined;
                var arg_2653 = undefined;
                var arg_2654 = undefined;
                var arg_2655 = undefined;
                var arg_2656 = undefined;
                var arg_2657 = undefined;
                var arg_2658 = undefined;
                var arg_2659 = undefined;
                var arg_2660 = undefined;
                var arg_2661 = undefined;
                var arg_2662 = undefined;
                var arg_2663 = undefined;
                var arg_2664 = undefined;
                var arg_2665 = undefined;
                var arg_2666 = undefined;
                var arg_2667 = undefined;
                var arg_2668 = undefined;
                var arg_2669 = undefined;
                var arg_2670 = undefined;
                var arg_2671 = undefined;
                var arg_2672 = undefined;
                return $options._copy_1(arg_2609, arg_2610, arg_2611, arg_2612, arg_2613, arg_2614, arg_2615, arg_2616, arg_2617, arg_2618, arg_2619, arg_2620, arg_2621, arg_2622, arg_2623, arg_2624, arg_2625, arg_2626, arg_2627, arg_2628, arg_2629, arg_2630, arg_2631, arg_2632, arg_2633, arg_2634, arg_2635, arg_2636, arg_2637, arg_2638, arg_2639, arg_2640, arg_2641, arg_2642, arg_2643, arg_2644, arg_2645, arg_2646, arg_2647, arg_2648, arg_2649, arg_2650, arg_2651, arg_2652, arg_2653, arg_2654, arg_2655, arg_2656, arg_2657, arg_2658, arg_2659, arg_2660, arg_2661, arg_2662, arg_2663, arg_2664, arg_2665, arg_2666, arg_2667, arg_2668, arg_2669, arg_2670, arg_2671, arg_2672);
              }
              else {
                if ((key === "package-")) {
                  var arg_2945 = options;
                  if ((value === "")) {
                    var _x0 = "";
                  }
                  else {
                    var _x0 = ($options.packagesx(options) + (";" + value));
                  }
                  var arg_2980 = _x0;
                  var arg_2946 = undefined;
                  var arg_2947 = undefined;
                  var arg_2948 = undefined;
                  var arg_2949 = undefined;
                  var arg_2950 = undefined;
                  var arg_2951 = undefined;
                  var arg_2952 = undefined;
                  var arg_2953 = undefined;
                  var arg_2954 = undefined;
                  var arg_2955 = undefined;
                  var arg_2956 = undefined;
                  var arg_2957 = undefined;
                  var arg_2958 = undefined;
                  var arg_2959 = undefined;
                  var arg_2960 = undefined;
                  var arg_2961 = undefined;
                  var arg_2962 = undefined;
                  var arg_2963 = undefined;
                  var arg_2964 = undefined;
                  var arg_2965 = undefined;
                  var arg_2966 = undefined;
                  var arg_2967 = undefined;
                  var arg_2968 = undefined;
                  var arg_2969 = undefined;
                  var arg_2970 = undefined;
                  var arg_2971 = undefined;
                  var arg_2972 = undefined;
                  var arg_2973 = undefined;
                  var arg_2974 = undefined;
                  var arg_2975 = undefined;
                  var arg_2976 = undefined;
                  var arg_2977 = undefined;
                  var arg_2978 = undefined;
                  var arg_2979 = undefined;
                  var arg_2981 = undefined;
                  var arg_2982 = undefined;
                  var arg_2983 = undefined;
                  var arg_2984 = undefined;
                  var arg_2985 = undefined;
                  var arg_2986 = undefined;
                  var arg_2987 = undefined;
                  var arg_2988 = undefined;
                  var arg_2989 = undefined;
                  var arg_2990 = undefined;
                  var arg_2991 = undefined;
                  var arg_2992 = undefined;
                  var arg_2993 = undefined;
                  var arg_2994 = undefined;
                  var arg_2995 = undefined;
                  var arg_2996 = undefined;
                  var arg_2997 = undefined;
                  var arg_2998 = undefined;
                  var arg_2999 = undefined;
                  var arg_3000 = undefined;
                  var arg_3001 = undefined;
                  var arg_3002 = undefined;
                  var arg_3003 = undefined;
                  var arg_3004 = undefined;
                  var arg_3005 = undefined;
                  var arg_3006 = undefined;
                  var arg_3007 = undefined;
                  var arg_3008 = undefined;
                  return $options._copy_1(arg_2945, arg_2946, arg_2947, arg_2948, arg_2949, arg_2950, arg_2951, arg_2952, arg_2953, arg_2954, arg_2955, arg_2956, arg_2957, arg_2958, arg_2959, arg_2960, arg_2961, arg_2962, arg_2963, arg_2964, arg_2965, arg_2966, arg_2967, arg_2968, arg_2969, arg_2970, arg_2971, arg_2972, arg_2973, arg_2974, arg_2975, arg_2976, arg_2977, arg_2978, arg_2979, arg_2980, arg_2981, arg_2982, arg_2983, arg_2984, arg_2985, arg_2986, arg_2987, arg_2988, arg_2989, arg_2990, arg_2991, arg_2992, arg_2993, arg_2994, arg_2995, arg_2996, arg_2997, arg_2998, arg_2999, arg_3000, arg_3001, arg_3002, arg_3003, arg_3004, arg_3005, arg_3006, arg_3007, arg_3008);
                }
                else {
                  var _x0 = ((key === "toc-depth") && ivalue >= 0);
                  if (_x0) {
                    return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ivalue, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                  }
                  else {
                    var _x1 = (((key === "heading-depth") || (key === "header-depth")) && ivalue >= 0);
                    if (_x1) {
                      return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ivalue, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                    }
                    else {
                      var _x2 = (((key === "heading-base") || ((key === "header-base") || (key === "base-header-level"))) && ivalue >= 0);
                      if (_x2) {
                        return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ivalue, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                      }
                      else {
                        var _x3 = ((key === "document-class") || (key === "doc-class"));
                        if (_x3) {
                          return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, value, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                        }
                        else {
                          var _x4 = ((key === "bib") || ((key === "bibliography") || (key === "bib-data")));
                          if (_x4) {
                            if ((value !== "")) {
                              $std_log.log("files", $std_path.changeExt(value, ".bib"));
                            }
                            else {
                              $std_core._unit_;
                            }
                            var arg_4526 = options;
                            if ((value === "")) {
                              var _x5 = "";
                            }
                            else {
                              var _x5 = ($options.bib(options) + (";" + value));
                            }
                            var arg_4558 = _x5;
                            var arg_4527 = undefined;
                            var arg_4528 = undefined;
                            var arg_4529 = undefined;
                            var arg_4530 = undefined;
                            var arg_4531 = undefined;
                            var arg_4532 = undefined;
                            var arg_4533 = undefined;
                            var arg_4534 = undefined;
                            var arg_4535 = undefined;
                            var arg_4536 = undefined;
                            var arg_4537 = undefined;
                            var arg_4538 = undefined;
                            var arg_4539 = undefined;
                            var arg_4540 = undefined;
                            var arg_4541 = undefined;
                            var arg_4542 = undefined;
                            var arg_4543 = undefined;
                            var arg_4544 = undefined;
                            var arg_4545 = undefined;
                            var arg_4546 = undefined;
                            var arg_4547 = undefined;
                            var arg_4548 = undefined;
                            var arg_4549 = undefined;
                            var arg_4550 = undefined;
                            var arg_4551 = undefined;
                            var arg_4552 = undefined;
                            var arg_4553 = undefined;
                            var arg_4554 = undefined;
                            var arg_4555 = undefined;
                            var arg_4556 = undefined;
                            var arg_4557 = undefined;
                            var arg_4559 = undefined;
                            var arg_4560 = undefined;
                            var arg_4561 = undefined;
                            var arg_4562 = undefined;
                            var arg_4563 = undefined;
                            var arg_4564 = undefined;
                            var arg_4565 = undefined;
                            var arg_4566 = undefined;
                            var arg_4567 = undefined;
                            var arg_4568 = undefined;
                            var arg_4569 = undefined;
                            var arg_4570 = undefined;
                            var arg_4571 = undefined;
                            var arg_4572 = undefined;
                            var arg_4573 = undefined;
                            var arg_4574 = undefined;
                            var arg_4575 = undefined;
                            var arg_4576 = undefined;
                            var arg_4577 = undefined;
                            var arg_4578 = undefined;
                            var arg_4579 = undefined;
                            var arg_4580 = undefined;
                            var arg_4581 = undefined;
                            var arg_4582 = undefined;
                            var arg_4583 = undefined;
                            var arg_4584 = undefined;
                            var arg_4585 = undefined;
                            var arg_4586 = undefined;
                            var arg_4587 = undefined;
                            var arg_4588 = undefined;
                            var arg_4589 = undefined;
                            return $options._copy_1(arg_4526, arg_4527, arg_4528, arg_4529, arg_4530, arg_4531, arg_4532, arg_4533, arg_4534, arg_4535, arg_4536, arg_4537, arg_4538, arg_4539, arg_4540, arg_4541, arg_4542, arg_4543, arg_4544, arg_4545, arg_4546, arg_4547, arg_4548, arg_4549, arg_4550, arg_4551, arg_4552, arg_4553, arg_4554, arg_4555, arg_4556, arg_4557, arg_4558, arg_4559, arg_4560, arg_4561, arg_4562, arg_4563, arg_4564, arg_4565, arg_4566, arg_4567, arg_4568, arg_4569, arg_4570, arg_4571, arg_4572, arg_4573, arg_4574, arg_4575, arg_4576, arg_4577, arg_4578, arg_4579, arg_4580, arg_4581, arg_4582, arg_4583, arg_4584, arg_4585, arg_4586, arg_4587, arg_4588, arg_4589);
                          }
                          else {
                            var _x5 = ((key === "bib-style") || ((key === "biblio-style") || (key === "bibliography-style")));
                            if (_x5) {
                              var _x6 = (($std_path.extname(value) !== "") || ($std_path.dirname(value) !== ""));
                              if (_x6) {
                                $std_log.log("files", $std_path.defaultExt(value, ".bst"));
                              }
                              else {
                                $std_core._unit_;
                              }
                              if ($std_core.bool_2(value)) {
                                return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options.Bst(value, ""), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                              }
                              else {
                                return options;
                              }
                            }
                            else {
                              if ((key === "csl-style")) {
                                var _x6 = ($std_core.isEmpty($std_path.extname(value)) && $std_core.isEmpty($std_path.dirname(value)));
                                var cslname = (_x6) ? (lvalue).replace(new RegExp((" ").replace(/[\\\$\^*+\-{}?().]/g,'\\$&'),'g'),"-") : value;
                                if ($std_core.bool_2(cslname)) {
                                  return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options.Csl(cslname, ""), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                                }
                                else {
                                  return options;
                                }
                              }
                              else {
                                if ((key === "locale")) {
                                  return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, normalizeLocale(value), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                                }
                                else {
                                  if ((key === "html-header")) {
                                    var arg_5690 = options;
                                    if ((value === "")) {
                                      var _x6 = "";
                                    }
                                    else {
                                      var _x6 = appendNL($options.htmlHeader(options), value);
                                    }
                                    var arg_5709 = _x6;
                                    var arg_5691 = undefined;
                                    var arg_5692 = undefined;
                                    var arg_5693 = undefined;
                                    var arg_5694 = undefined;
                                    var arg_5695 = undefined;
                                    var arg_5696 = undefined;
                                    var arg_5697 = undefined;
                                    var arg_5698 = undefined;
                                    var arg_5699 = undefined;
                                    var arg_5700 = undefined;
                                    var arg_5701 = undefined;
                                    var arg_5702 = undefined;
                                    var arg_5703 = undefined;
                                    var arg_5704 = undefined;
                                    var arg_5705 = undefined;
                                    var arg_5706 = undefined;
                                    var arg_5707 = undefined;
                                    var arg_5708 = undefined;
                                    var arg_5710 = undefined;
                                    var arg_5711 = undefined;
                                    var arg_5712 = undefined;
                                    var arg_5713 = undefined;
                                    var arg_5714 = undefined;
                                    var arg_5715 = undefined;
                                    var arg_5716 = undefined;
                                    var arg_5717 = undefined;
                                    var arg_5718 = undefined;
                                    var arg_5719 = undefined;
                                    var arg_5720 = undefined;
                                    var arg_5721 = undefined;
                                    var arg_5722 = undefined;
                                    var arg_5723 = undefined;
                                    var arg_5724 = undefined;
                                    var arg_5725 = undefined;
                                    var arg_5726 = undefined;
                                    var arg_5727 = undefined;
                                    var arg_5728 = undefined;
                                    var arg_5729 = undefined;
                                    var arg_5730 = undefined;
                                    var arg_5731 = undefined;
                                    var arg_5732 = undefined;
                                    var arg_5733 = undefined;
                                    var arg_5734 = undefined;
                                    var arg_5735 = undefined;
                                    var arg_5736 = undefined;
                                    var arg_5737 = undefined;
                                    var arg_5738 = undefined;
                                    var arg_5739 = undefined;
                                    var arg_5740 = undefined;
                                    var arg_5741 = undefined;
                                    var arg_5742 = undefined;
                                    var arg_5743 = undefined;
                                    var arg_5744 = undefined;
                                    var arg_5745 = undefined;
                                    var arg_5746 = undefined;
                                    var arg_5747 = undefined;
                                    var arg_5748 = undefined;
                                    var arg_5749 = undefined;
                                    var arg_5750 = undefined;
                                    var arg_5751 = undefined;
                                    var arg_5752 = undefined;
                                    var arg_5753 = undefined;
                                    return $options._copy_1(arg_5690, arg_5691, arg_5692, arg_5693, arg_5694, arg_5695, arg_5696, arg_5697, arg_5698, arg_5699, arg_5700, arg_5701, arg_5702, arg_5703, arg_5704, arg_5705, arg_5706, arg_5707, arg_5708, arg_5709, arg_5710, arg_5711, arg_5712, arg_5713, arg_5714, arg_5715, arg_5716, arg_5717, arg_5718, arg_5719, arg_5720, arg_5721, arg_5722, arg_5723, arg_5724, arg_5725, arg_5726, arg_5727, arg_5728, arg_5729, arg_5730, arg_5731, arg_5732, arg_5733, arg_5734, arg_5735, arg_5736, arg_5737, arg_5738, arg_5739, arg_5740, arg_5741, arg_5742, arg_5743, arg_5744, arg_5745, arg_5746, arg_5747, arg_5748, arg_5749, arg_5750, arg_5751, arg_5752, arg_5753);
                                  }
                                  else {
                                    if ((key === "css-header")) {
                                      var arg_5983 = options;
                                      if ((value === "")) {
                                        var _x6 = "";
                                      }
                                      else {
                                        var _x6 = appendNL($options.cssHeader(options), value);
                                      }
                                      var arg_6003 = _x6;
                                      var arg_5984 = undefined;
                                      var arg_5985 = undefined;
                                      var arg_5986 = undefined;
                                      var arg_5987 = undefined;
                                      var arg_5988 = undefined;
                                      var arg_5989 = undefined;
                                      var arg_5990 = undefined;
                                      var arg_5991 = undefined;
                                      var arg_5992 = undefined;
                                      var arg_5993 = undefined;
                                      var arg_5994 = undefined;
                                      var arg_5995 = undefined;
                                      var arg_5996 = undefined;
                                      var arg_5997 = undefined;
                                      var arg_5998 = undefined;
                                      var arg_5999 = undefined;
                                      var arg_6000 = undefined;
                                      var arg_6001 = undefined;
                                      var arg_6002 = undefined;
                                      var arg_6004 = undefined;
                                      var arg_6005 = undefined;
                                      var arg_6006 = undefined;
                                      var arg_6007 = undefined;
                                      var arg_6008 = undefined;
                                      var arg_6009 = undefined;
                                      var arg_6010 = undefined;
                                      var arg_6011 = undefined;
                                      var arg_6012 = undefined;
                                      var arg_6013 = undefined;
                                      var arg_6014 = undefined;
                                      var arg_6015 = undefined;
                                      var arg_6016 = undefined;
                                      var arg_6017 = undefined;
                                      var arg_6018 = undefined;
                                      var arg_6019 = undefined;
                                      var arg_6020 = undefined;
                                      var arg_6021 = undefined;
                                      var arg_6022 = undefined;
                                      var arg_6023 = undefined;
                                      var arg_6024 = undefined;
                                      var arg_6025 = undefined;
                                      var arg_6026 = undefined;
                                      var arg_6027 = undefined;
                                      var arg_6028 = undefined;
                                      var arg_6029 = undefined;
                                      var arg_6030 = undefined;
                                      var arg_6031 = undefined;
                                      var arg_6032 = undefined;
                                      var arg_6033 = undefined;
                                      var arg_6034 = undefined;
                                      var arg_6035 = undefined;
                                      var arg_6036 = undefined;
                                      var arg_6037 = undefined;
                                      var arg_6038 = undefined;
                                      var arg_6039 = undefined;
                                      var arg_6040 = undefined;
                                      var arg_6041 = undefined;
                                      var arg_6042 = undefined;
                                      var arg_6043 = undefined;
                                      var arg_6044 = undefined;
                                      var arg_6045 = undefined;
                                      var arg_6046 = undefined;
                                      return $options._copy_1(arg_5983, arg_5984, arg_5985, arg_5986, arg_5987, arg_5988, arg_5989, arg_5990, arg_5991, arg_5992, arg_5993, arg_5994, arg_5995, arg_5996, arg_5997, arg_5998, arg_5999, arg_6000, arg_6001, arg_6002, arg_6003, arg_6004, arg_6005, arg_6006, arg_6007, arg_6008, arg_6009, arg_6010, arg_6011, arg_6012, arg_6013, arg_6014, arg_6015, arg_6016, arg_6017, arg_6018, arg_6019, arg_6020, arg_6021, arg_6022, arg_6023, arg_6024, arg_6025, arg_6026, arg_6027, arg_6028, arg_6029, arg_6030, arg_6031, arg_6032, arg_6033, arg_6034, arg_6035, arg_6036, arg_6037, arg_6038, arg_6039, arg_6040, arg_6041, arg_6042, arg_6043, arg_6044, arg_6045, arg_6046);
                                    }
                                    else {
                                      if ((key === "html-footer")) {
                                        var arg_6276 = options;
                                        if ((value === "")) {
                                          var _x6 = "";
                                        }
                                        else {
                                          var _x6 = appendNL($options.htmlFooter(options), value);
                                        }
                                        var arg_6298 = _x6;
                                        var arg_6277 = undefined;
                                        var arg_6278 = undefined;
                                        var arg_6279 = undefined;
                                        var arg_6280 = undefined;
                                        var arg_6281 = undefined;
                                        var arg_6282 = undefined;
                                        var arg_6283 = undefined;
                                        var arg_6284 = undefined;
                                        var arg_6285 = undefined;
                                        var arg_6286 = undefined;
                                        var arg_6287 = undefined;
                                        var arg_6288 = undefined;
                                        var arg_6289 = undefined;
                                        var arg_6290 = undefined;
                                        var arg_6291 = undefined;
                                        var arg_6292 = undefined;
                                        var arg_6293 = undefined;
                                        var arg_6294 = undefined;
                                        var arg_6295 = undefined;
                                        var arg_6296 = undefined;
                                        var arg_6297 = undefined;
                                        var arg_6299 = undefined;
                                        var arg_6300 = undefined;
                                        var arg_6301 = undefined;
                                        var arg_6302 = undefined;
                                        var arg_6303 = undefined;
                                        var arg_6304 = undefined;
                                        var arg_6305 = undefined;
                                        var arg_6306 = undefined;
                                        var arg_6307 = undefined;
                                        var arg_6308 = undefined;
                                        var arg_6309 = undefined;
                                        var arg_6310 = undefined;
                                        var arg_6311 = undefined;
                                        var arg_6312 = undefined;
                                        var arg_6313 = undefined;
                                        var arg_6314 = undefined;
                                        var arg_6315 = undefined;
                                        var arg_6316 = undefined;
                                        var arg_6317 = undefined;
                                        var arg_6318 = undefined;
                                        var arg_6319 = undefined;
                                        var arg_6320 = undefined;
                                        var arg_6321 = undefined;
                                        var arg_6322 = undefined;
                                        var arg_6323 = undefined;
                                        var arg_6324 = undefined;
                                        var arg_6325 = undefined;
                                        var arg_6326 = undefined;
                                        var arg_6327 = undefined;
                                        var arg_6328 = undefined;
                                        var arg_6329 = undefined;
                                        var arg_6330 = undefined;
                                        var arg_6331 = undefined;
                                        var arg_6332 = undefined;
                                        var arg_6333 = undefined;
                                        var arg_6334 = undefined;
                                        var arg_6335 = undefined;
                                        var arg_6336 = undefined;
                                        var arg_6337 = undefined;
                                        var arg_6338 = undefined;
                                        var arg_6339 = undefined;
                                        return $options._copy_1(arg_6276, arg_6277, arg_6278, arg_6279, arg_6280, arg_6281, arg_6282, arg_6283, arg_6284, arg_6285, arg_6286, arg_6287, arg_6288, arg_6289, arg_6290, arg_6291, arg_6292, arg_6293, arg_6294, arg_6295, arg_6296, arg_6297, arg_6298, arg_6299, arg_6300, arg_6301, arg_6302, arg_6303, arg_6304, arg_6305, arg_6306, arg_6307, arg_6308, arg_6309, arg_6310, arg_6311, arg_6312, arg_6313, arg_6314, arg_6315, arg_6316, arg_6317, arg_6318, arg_6319, arg_6320, arg_6321, arg_6322, arg_6323, arg_6324, arg_6325, arg_6326, arg_6327, arg_6328, arg_6329, arg_6330, arg_6331, arg_6332, arg_6333, arg_6334, arg_6335, arg_6336, arg_6337, arg_6338, arg_6339);
                                      }
                                      else {
                                        if ((key === "js-header")) {
                                          var arg_6569 = options;
                                          if ((value === "")) {
                                            var _x6 = "";
                                          }
                                          else {
                                            var _x6 = appendNL($options.jsHeader(options), value);
                                          }
                                          var arg_6590 = _x6;
                                          var arg_6570 = undefined;
                                          var arg_6571 = undefined;
                                          var arg_6572 = undefined;
                                          var arg_6573 = undefined;
                                          var arg_6574 = undefined;
                                          var arg_6575 = undefined;
                                          var arg_6576 = undefined;
                                          var arg_6577 = undefined;
                                          var arg_6578 = undefined;
                                          var arg_6579 = undefined;
                                          var arg_6580 = undefined;
                                          var arg_6581 = undefined;
                                          var arg_6582 = undefined;
                                          var arg_6583 = undefined;
                                          var arg_6584 = undefined;
                                          var arg_6585 = undefined;
                                          var arg_6586 = undefined;
                                          var arg_6587 = undefined;
                                          var arg_6588 = undefined;
                                          var arg_6589 = undefined;
                                          var arg_6591 = undefined;
                                          var arg_6592 = undefined;
                                          var arg_6593 = undefined;
                                          var arg_6594 = undefined;
                                          var arg_6595 = undefined;
                                          var arg_6596 = undefined;
                                          var arg_6597 = undefined;
                                          var arg_6598 = undefined;
                                          var arg_6599 = undefined;
                                          var arg_6600 = undefined;
                                          var arg_6601 = undefined;
                                          var arg_6602 = undefined;
                                          var arg_6603 = undefined;
                                          var arg_6604 = undefined;
                                          var arg_6605 = undefined;
                                          var arg_6606 = undefined;
                                          var arg_6607 = undefined;
                                          var arg_6608 = undefined;
                                          var arg_6609 = undefined;
                                          var arg_6610 = undefined;
                                          var arg_6611 = undefined;
                                          var arg_6612 = undefined;
                                          var arg_6613 = undefined;
                                          var arg_6614 = undefined;
                                          var arg_6615 = undefined;
                                          var arg_6616 = undefined;
                                          var arg_6617 = undefined;
                                          var arg_6618 = undefined;
                                          var arg_6619 = undefined;
                                          var arg_6620 = undefined;
                                          var arg_6621 = undefined;
                                          var arg_6622 = undefined;
                                          var arg_6623 = undefined;
                                          var arg_6624 = undefined;
                                          var arg_6625 = undefined;
                                          var arg_6626 = undefined;
                                          var arg_6627 = undefined;
                                          var arg_6628 = undefined;
                                          var arg_6629 = undefined;
                                          var arg_6630 = undefined;
                                          var arg_6631 = undefined;
                                          var arg_6632 = undefined;
                                          return $options._copy_1(arg_6569, arg_6570, arg_6571, arg_6572, arg_6573, arg_6574, arg_6575, arg_6576, arg_6577, arg_6578, arg_6579, arg_6580, arg_6581, arg_6582, arg_6583, arg_6584, arg_6585, arg_6586, arg_6587, arg_6588, arg_6589, arg_6590, arg_6591, arg_6592, arg_6593, arg_6594, arg_6595, arg_6596, arg_6597, arg_6598, arg_6599, arg_6600, arg_6601, arg_6602, arg_6603, arg_6604, arg_6605, arg_6606, arg_6607, arg_6608, arg_6609, arg_6610, arg_6611, arg_6612, arg_6613, arg_6614, arg_6615, arg_6616, arg_6617, arg_6618, arg_6619, arg_6620, arg_6621, arg_6622, arg_6623, arg_6624, arg_6625, arg_6626, arg_6627, arg_6628, arg_6629, arg_6630, arg_6631, arg_6632);
                                        }
                                        else {
                                          if ((key === "js-footer")) {
                                            var arg_6862 = options;
                                            if ((value === "")) {
                                              var _x6 = "";
                                            }
                                            else {
                                              var _x6 = appendNL($options.jsFooter(options), value);
                                            }
                                            var arg_6885 = _x6;
                                            var arg_6863 = undefined;
                                            var arg_6864 = undefined;
                                            var arg_6865 = undefined;
                                            var arg_6866 = undefined;
                                            var arg_6867 = undefined;
                                            var arg_6868 = undefined;
                                            var arg_6869 = undefined;
                                            var arg_6870 = undefined;
                                            var arg_6871 = undefined;
                                            var arg_6872 = undefined;
                                            var arg_6873 = undefined;
                                            var arg_6874 = undefined;
                                            var arg_6875 = undefined;
                                            var arg_6876 = undefined;
                                            var arg_6877 = undefined;
                                            var arg_6878 = undefined;
                                            var arg_6879 = undefined;
                                            var arg_6880 = undefined;
                                            var arg_6881 = undefined;
                                            var arg_6882 = undefined;
                                            var arg_6883 = undefined;
                                            var arg_6884 = undefined;
                                            var arg_6886 = undefined;
                                            var arg_6887 = undefined;
                                            var arg_6888 = undefined;
                                            var arg_6889 = undefined;
                                            var arg_6890 = undefined;
                                            var arg_6891 = undefined;
                                            var arg_6892 = undefined;
                                            var arg_6893 = undefined;
                                            var arg_6894 = undefined;
                                            var arg_6895 = undefined;
                                            var arg_6896 = undefined;
                                            var arg_6897 = undefined;
                                            var arg_6898 = undefined;
                                            var arg_6899 = undefined;
                                            var arg_6900 = undefined;
                                            var arg_6901 = undefined;
                                            var arg_6902 = undefined;
                                            var arg_6903 = undefined;
                                            var arg_6904 = undefined;
                                            var arg_6905 = undefined;
                                            var arg_6906 = undefined;
                                            var arg_6907 = undefined;
                                            var arg_6908 = undefined;
                                            var arg_6909 = undefined;
                                            var arg_6910 = undefined;
                                            var arg_6911 = undefined;
                                            var arg_6912 = undefined;
                                            var arg_6913 = undefined;
                                            var arg_6914 = undefined;
                                            var arg_6915 = undefined;
                                            var arg_6916 = undefined;
                                            var arg_6917 = undefined;
                                            var arg_6918 = undefined;
                                            var arg_6919 = undefined;
                                            var arg_6920 = undefined;
                                            var arg_6921 = undefined;
                                            var arg_6922 = undefined;
                                            var arg_6923 = undefined;
                                            var arg_6924 = undefined;
                                            var arg_6925 = undefined;
                                            return $options._copy_1(arg_6862, arg_6863, arg_6864, arg_6865, arg_6866, arg_6867, arg_6868, arg_6869, arg_6870, arg_6871, arg_6872, arg_6873, arg_6874, arg_6875, arg_6876, arg_6877, arg_6878, arg_6879, arg_6880, arg_6881, arg_6882, arg_6883, arg_6884, arg_6885, arg_6886, arg_6887, arg_6888, arg_6889, arg_6890, arg_6891, arg_6892, arg_6893, arg_6894, arg_6895, arg_6896, arg_6897, arg_6898, arg_6899, arg_6900, arg_6901, arg_6902, arg_6903, arg_6904, arg_6905, arg_6906, arg_6907, arg_6908, arg_6909, arg_6910, arg_6911, arg_6912, arg_6913, arg_6914, arg_6915, arg_6916, arg_6917, arg_6918, arg_6919, arg_6920, arg_6921, arg_6922, arg_6923, arg_6924, arg_6925);
                                          }
                                          else {
                                            if ((key === "tex-header")) {
                                              var arg_7155 = options;
                                              if ((value === "")) {
                                                var _x6 = "";
                                              }
                                              else {
                                                var _x6 = appendNL($options.texHeader(options), value);
                                              }
                                              var arg_7180 = _x6;
                                              var arg_7156 = undefined;
                                              var arg_7157 = undefined;
                                              var arg_7158 = undefined;
                                              var arg_7159 = undefined;
                                              var arg_7160 = undefined;
                                              var arg_7161 = undefined;
                                              var arg_7162 = undefined;
                                              var arg_7163 = undefined;
                                              var arg_7164 = undefined;
                                              var arg_7165 = undefined;
                                              var arg_7166 = undefined;
                                              var arg_7167 = undefined;
                                              var arg_7168 = undefined;
                                              var arg_7169 = undefined;
                                              var arg_7170 = undefined;
                                              var arg_7171 = undefined;
                                              var arg_7172 = undefined;
                                              var arg_7173 = undefined;
                                              var arg_7174 = undefined;
                                              var arg_7175 = undefined;
                                              var arg_7176 = undefined;
                                              var arg_7177 = undefined;
                                              var arg_7178 = undefined;
                                              var arg_7179 = undefined;
                                              var arg_7181 = undefined;
                                              var arg_7182 = undefined;
                                              var arg_7183 = undefined;
                                              var arg_7184 = undefined;
                                              var arg_7185 = undefined;
                                              var arg_7186 = undefined;
                                              var arg_7187 = undefined;
                                              var arg_7188 = undefined;
                                              var arg_7189 = undefined;
                                              var arg_7190 = undefined;
                                              var arg_7191 = undefined;
                                              var arg_7192 = undefined;
                                              var arg_7193 = undefined;
                                              var arg_7194 = undefined;
                                              var arg_7195 = undefined;
                                              var arg_7196 = undefined;
                                              var arg_7197 = undefined;
                                              var arg_7198 = undefined;
                                              var arg_7199 = undefined;
                                              var arg_7200 = undefined;
                                              var arg_7201 = undefined;
                                              var arg_7202 = undefined;
                                              var arg_7203 = undefined;
                                              var arg_7204 = undefined;
                                              var arg_7205 = undefined;
                                              var arg_7206 = undefined;
                                              var arg_7207 = undefined;
                                              var arg_7208 = undefined;
                                              var arg_7209 = undefined;
                                              var arg_7210 = undefined;
                                              var arg_7211 = undefined;
                                              var arg_7212 = undefined;
                                              var arg_7213 = undefined;
                                              var arg_7214 = undefined;
                                              var arg_7215 = undefined;
                                              var arg_7216 = undefined;
                                              var arg_7217 = undefined;
                                              var arg_7218 = undefined;
                                              return $options._copy_1(arg_7155, arg_7156, arg_7157, arg_7158, arg_7159, arg_7160, arg_7161, arg_7162, arg_7163, arg_7164, arg_7165, arg_7166, arg_7167, arg_7168, arg_7169, arg_7170, arg_7171, arg_7172, arg_7173, arg_7174, arg_7175, arg_7176, arg_7177, arg_7178, arg_7179, arg_7180, arg_7181, arg_7182, arg_7183, arg_7184, arg_7185, arg_7186, arg_7187, arg_7188, arg_7189, arg_7190, arg_7191, arg_7192, arg_7193, arg_7194, arg_7195, arg_7196, arg_7197, arg_7198, arg_7199, arg_7200, arg_7201, arg_7202, arg_7203, arg_7204, arg_7205, arg_7206, arg_7207, arg_7208, arg_7209, arg_7210, arg_7211, arg_7212, arg_7213, arg_7214, arg_7215, arg_7216, arg_7217, arg_7218);
                                            }
                                            else {
                                              if ((key === "tex-header-")) {
                                                var arg_7448 = options;
                                                if ((value === "")) {
                                                  var _x6 = "";
                                                }
                                                else {
                                                  var _x6 = appendNL($options.texHeaderx(options), value);
                                                }
                                                var arg_7474 = _x6;
                                                var arg_7449 = undefined;
                                                var arg_7450 = undefined;
                                                var arg_7451 = undefined;
                                                var arg_7452 = undefined;
                                                var arg_7453 = undefined;
                                                var arg_7454 = undefined;
                                                var arg_7455 = undefined;
                                                var arg_7456 = undefined;
                                                var arg_7457 = undefined;
                                                var arg_7458 = undefined;
                                                var arg_7459 = undefined;
                                                var arg_7460 = undefined;
                                                var arg_7461 = undefined;
                                                var arg_7462 = undefined;
                                                var arg_7463 = undefined;
                                                var arg_7464 = undefined;
                                                var arg_7465 = undefined;
                                                var arg_7466 = undefined;
                                                var arg_7467 = undefined;
                                                var arg_7468 = undefined;
                                                var arg_7469 = undefined;
                                                var arg_7470 = undefined;
                                                var arg_7471 = undefined;
                                                var arg_7472 = undefined;
                                                var arg_7473 = undefined;
                                                var arg_7475 = undefined;
                                                var arg_7476 = undefined;
                                                var arg_7477 = undefined;
                                                var arg_7478 = undefined;
                                                var arg_7479 = undefined;
                                                var arg_7480 = undefined;
                                                var arg_7481 = undefined;
                                                var arg_7482 = undefined;
                                                var arg_7483 = undefined;
                                                var arg_7484 = undefined;
                                                var arg_7485 = undefined;
                                                var arg_7486 = undefined;
                                                var arg_7487 = undefined;
                                                var arg_7488 = undefined;
                                                var arg_7489 = undefined;
                                                var arg_7490 = undefined;
                                                var arg_7491 = undefined;
                                                var arg_7492 = undefined;
                                                var arg_7493 = undefined;
                                                var arg_7494 = undefined;
                                                var arg_7495 = undefined;
                                                var arg_7496 = undefined;
                                                var arg_7497 = undefined;
                                                var arg_7498 = undefined;
                                                var arg_7499 = undefined;
                                                var arg_7500 = undefined;
                                                var arg_7501 = undefined;
                                                var arg_7502 = undefined;
                                                var arg_7503 = undefined;
                                                var arg_7504 = undefined;
                                                var arg_7505 = undefined;
                                                var arg_7506 = undefined;
                                                var arg_7507 = undefined;
                                                var arg_7508 = undefined;
                                                var arg_7509 = undefined;
                                                var arg_7510 = undefined;
                                                var arg_7511 = undefined;
                                                return $options._copy_1(arg_7448, arg_7449, arg_7450, arg_7451, arg_7452, arg_7453, arg_7454, arg_7455, arg_7456, arg_7457, arg_7458, arg_7459, arg_7460, arg_7461, arg_7462, arg_7463, arg_7464, arg_7465, arg_7466, arg_7467, arg_7468, arg_7469, arg_7470, arg_7471, arg_7472, arg_7473, arg_7474, arg_7475, arg_7476, arg_7477, arg_7478, arg_7479, arg_7480, arg_7481, arg_7482, arg_7483, arg_7484, arg_7485, arg_7486, arg_7487, arg_7488, arg_7489, arg_7490, arg_7491, arg_7492, arg_7493, arg_7494, arg_7495, arg_7496, arg_7497, arg_7498, arg_7499, arg_7500, arg_7501, arg_7502, arg_7503, arg_7504, arg_7505, arg_7506, arg_7507, arg_7508, arg_7509, arg_7510, arg_7511);
                                              }
                                              else {
                                                if ((key === "tex-doc-header")) {
                                                  var arg_7741 = options;
                                                  if ((value === "")) {
                                                    var _x6 = "";
                                                  }
                                                  else {
                                                    var _x6 = appendNL($options.texDocHeader(options), value);
                                                  }
                                                  var arg_7768 = _x6;
                                                  var arg_7742 = undefined;
                                                  var arg_7743 = undefined;
                                                  var arg_7744 = undefined;
                                                  var arg_7745 = undefined;
                                                  var arg_7746 = undefined;
                                                  var arg_7747 = undefined;
                                                  var arg_7748 = undefined;
                                                  var arg_7749 = undefined;
                                                  var arg_7750 = undefined;
                                                  var arg_7751 = undefined;
                                                  var arg_7752 = undefined;
                                                  var arg_7753 = undefined;
                                                  var arg_7754 = undefined;
                                                  var arg_7755 = undefined;
                                                  var arg_7756 = undefined;
                                                  var arg_7757 = undefined;
                                                  var arg_7758 = undefined;
                                                  var arg_7759 = undefined;
                                                  var arg_7760 = undefined;
                                                  var arg_7761 = undefined;
                                                  var arg_7762 = undefined;
                                                  var arg_7763 = undefined;
                                                  var arg_7764 = undefined;
                                                  var arg_7765 = undefined;
                                                  var arg_7766 = undefined;
                                                  var arg_7767 = undefined;
                                                  var arg_7769 = undefined;
                                                  var arg_7770 = undefined;
                                                  var arg_7771 = undefined;
                                                  var arg_7772 = undefined;
                                                  var arg_7773 = undefined;
                                                  var arg_7774 = undefined;
                                                  var arg_7775 = undefined;
                                                  var arg_7776 = undefined;
                                                  var arg_7777 = undefined;
                                                  var arg_7778 = undefined;
                                                  var arg_7779 = undefined;
                                                  var arg_7780 = undefined;
                                                  var arg_7781 = undefined;
                                                  var arg_7782 = undefined;
                                                  var arg_7783 = undefined;
                                                  var arg_7784 = undefined;
                                                  var arg_7785 = undefined;
                                                  var arg_7786 = undefined;
                                                  var arg_7787 = undefined;
                                                  var arg_7788 = undefined;
                                                  var arg_7789 = undefined;
                                                  var arg_7790 = undefined;
                                                  var arg_7791 = undefined;
                                                  var arg_7792 = undefined;
                                                  var arg_7793 = undefined;
                                                  var arg_7794 = undefined;
                                                  var arg_7795 = undefined;
                                                  var arg_7796 = undefined;
                                                  var arg_7797 = undefined;
                                                  var arg_7798 = undefined;
                                                  var arg_7799 = undefined;
                                                  var arg_7800 = undefined;
                                                  var arg_7801 = undefined;
                                                  var arg_7802 = undefined;
                                                  var arg_7803 = undefined;
                                                  var arg_7804 = undefined;
                                                  return $options._copy_1(arg_7741, arg_7742, arg_7743, arg_7744, arg_7745, arg_7746, arg_7747, arg_7748, arg_7749, arg_7750, arg_7751, arg_7752, arg_7753, arg_7754, arg_7755, arg_7756, arg_7757, arg_7758, arg_7759, arg_7760, arg_7761, arg_7762, arg_7763, arg_7764, arg_7765, arg_7766, arg_7767, arg_7768, arg_7769, arg_7770, arg_7771, arg_7772, arg_7773, arg_7774, arg_7775, arg_7776, arg_7777, arg_7778, arg_7779, arg_7780, arg_7781, arg_7782, arg_7783, arg_7784, arg_7785, arg_7786, arg_7787, arg_7788, arg_7789, arg_7790, arg_7791, arg_7792, arg_7793, arg_7794, arg_7795, arg_7796, arg_7797, arg_7798, arg_7799, arg_7800, arg_7801, arg_7802, arg_7803, arg_7804);
                                                }
                                                else {
                                                  if ((key === "tex-doc-header-")) {
                                                    var arg_8034 = options;
                                                    if ((value === "")) {
                                                      var _x6 = "";
                                                    }
                                                    else {
                                                      var _x6 = appendNL($options.texDocHeaderx(options), value);
                                                    }
                                                    var arg_8062 = _x6;
                                                    var arg_8035 = undefined;
                                                    var arg_8036 = undefined;
                                                    var arg_8037 = undefined;
                                                    var arg_8038 = undefined;
                                                    var arg_8039 = undefined;
                                                    var arg_8040 = undefined;
                                                    var arg_8041 = undefined;
                                                    var arg_8042 = undefined;
                                                    var arg_8043 = undefined;
                                                    var arg_8044 = undefined;
                                                    var arg_8045 = undefined;
                                                    var arg_8046 = undefined;
                                                    var arg_8047 = undefined;
                                                    var arg_8048 = undefined;
                                                    var arg_8049 = undefined;
                                                    var arg_8050 = undefined;
                                                    var arg_8051 = undefined;
                                                    var arg_8052 = undefined;
                                                    var arg_8053 = undefined;
                                                    var arg_8054 = undefined;
                                                    var arg_8055 = undefined;
                                                    var arg_8056 = undefined;
                                                    var arg_8057 = undefined;
                                                    var arg_8058 = undefined;
                                                    var arg_8059 = undefined;
                                                    var arg_8060 = undefined;
                                                    var arg_8061 = undefined;
                                                    var arg_8063 = undefined;
                                                    var arg_8064 = undefined;
                                                    var arg_8065 = undefined;
                                                    var arg_8066 = undefined;
                                                    var arg_8067 = undefined;
                                                    var arg_8068 = undefined;
                                                    var arg_8069 = undefined;
                                                    var arg_8070 = undefined;
                                                    var arg_8071 = undefined;
                                                    var arg_8072 = undefined;
                                                    var arg_8073 = undefined;
                                                    var arg_8074 = undefined;
                                                    var arg_8075 = undefined;
                                                    var arg_8076 = undefined;
                                                    var arg_8077 = undefined;
                                                    var arg_8078 = undefined;
                                                    var arg_8079 = undefined;
                                                    var arg_8080 = undefined;
                                                    var arg_8081 = undefined;
                                                    var arg_8082 = undefined;
                                                    var arg_8083 = undefined;
                                                    var arg_8084 = undefined;
                                                    var arg_8085 = undefined;
                                                    var arg_8086 = undefined;
                                                    var arg_8087 = undefined;
                                                    var arg_8088 = undefined;
                                                    var arg_8089 = undefined;
                                                    var arg_8090 = undefined;
                                                    var arg_8091 = undefined;
                                                    var arg_8092 = undefined;
                                                    var arg_8093 = undefined;
                                                    var arg_8094 = undefined;
                                                    var arg_8095 = undefined;
                                                    var arg_8096 = undefined;
                                                    var arg_8097 = undefined;
                                                    return $options._copy_1(arg_8034, arg_8035, arg_8036, arg_8037, arg_8038, arg_8039, arg_8040, arg_8041, arg_8042, arg_8043, arg_8044, arg_8045, arg_8046, arg_8047, arg_8048, arg_8049, arg_8050, arg_8051, arg_8052, arg_8053, arg_8054, arg_8055, arg_8056, arg_8057, arg_8058, arg_8059, arg_8060, arg_8061, arg_8062, arg_8063, arg_8064, arg_8065, arg_8066, arg_8067, arg_8068, arg_8069, arg_8070, arg_8071, arg_8072, arg_8073, arg_8074, arg_8075, arg_8076, arg_8077, arg_8078, arg_8079, arg_8080, arg_8081, arg_8082, arg_8083, arg_8084, arg_8085, arg_8086, arg_8087, arg_8088, arg_8089, arg_8090, arg_8091, arg_8092, arg_8093, arg_8094, arg_8095, arg_8096, arg_8097);
                                                  }
                                                  else {
                                                    if ((key === "tex-footer")) {
                                                      var arg_8327 = options;
                                                      if ((value === "")) {
                                                        var _x6 = "";
                                                      }
                                                      else {
                                                        var _x6 = appendNL($options.texFooter(options), value);
                                                      }
                                                      var arg_8356 = _x6;
                                                      var arg_8328 = undefined;
                                                      var arg_8329 = undefined;
                                                      var arg_8330 = undefined;
                                                      var arg_8331 = undefined;
                                                      var arg_8332 = undefined;
                                                      var arg_8333 = undefined;
                                                      var arg_8334 = undefined;
                                                      var arg_8335 = undefined;
                                                      var arg_8336 = undefined;
                                                      var arg_8337 = undefined;
                                                      var arg_8338 = undefined;
                                                      var arg_8339 = undefined;
                                                      var arg_8340 = undefined;
                                                      var arg_8341 = undefined;
                                                      var arg_8342 = undefined;
                                                      var arg_8343 = undefined;
                                                      var arg_8344 = undefined;
                                                      var arg_8345 = undefined;
                                                      var arg_8346 = undefined;
                                                      var arg_8347 = undefined;
                                                      var arg_8348 = undefined;
                                                      var arg_8349 = undefined;
                                                      var arg_8350 = undefined;
                                                      var arg_8351 = undefined;
                                                      var arg_8352 = undefined;
                                                      var arg_8353 = undefined;
                                                      var arg_8354 = undefined;
                                                      var arg_8355 = undefined;
                                                      var arg_8357 = undefined;
                                                      var arg_8358 = undefined;
                                                      var arg_8359 = undefined;
                                                      var arg_8360 = undefined;
                                                      var arg_8361 = undefined;
                                                      var arg_8362 = undefined;
                                                      var arg_8363 = undefined;
                                                      var arg_8364 = undefined;
                                                      var arg_8365 = undefined;
                                                      var arg_8366 = undefined;
                                                      var arg_8367 = undefined;
                                                      var arg_8368 = undefined;
                                                      var arg_8369 = undefined;
                                                      var arg_8370 = undefined;
                                                      var arg_8371 = undefined;
                                                      var arg_8372 = undefined;
                                                      var arg_8373 = undefined;
                                                      var arg_8374 = undefined;
                                                      var arg_8375 = undefined;
                                                      var arg_8376 = undefined;
                                                      var arg_8377 = undefined;
                                                      var arg_8378 = undefined;
                                                      var arg_8379 = undefined;
                                                      var arg_8380 = undefined;
                                                      var arg_8381 = undefined;
                                                      var arg_8382 = undefined;
                                                      var arg_8383 = undefined;
                                                      var arg_8384 = undefined;
                                                      var arg_8385 = undefined;
                                                      var arg_8386 = undefined;
                                                      var arg_8387 = undefined;
                                                      var arg_8388 = undefined;
                                                      var arg_8389 = undefined;
                                                      var arg_8390 = undefined;
                                                      return $options._copy_1(arg_8327, arg_8328, arg_8329, arg_8330, arg_8331, arg_8332, arg_8333, arg_8334, arg_8335, arg_8336, arg_8337, arg_8338, arg_8339, arg_8340, arg_8341, arg_8342, arg_8343, arg_8344, arg_8345, arg_8346, arg_8347, arg_8348, arg_8349, arg_8350, arg_8351, arg_8352, arg_8353, arg_8354, arg_8355, arg_8356, arg_8357, arg_8358, arg_8359, arg_8360, arg_8361, arg_8362, arg_8363, arg_8364, arg_8365, arg_8366, arg_8367, arg_8368, arg_8369, arg_8370, arg_8371, arg_8372, arg_8373, arg_8374, arg_8375, arg_8376, arg_8377, arg_8378, arg_8379, arg_8380, arg_8381, arg_8382, arg_8383, arg_8384, arg_8385, arg_8386, arg_8387, arg_8388, arg_8389, arg_8390);
                                                    }
                                                    else {
                                                      if ((key === "tex-section-num")) {
                                                        return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, (value !== ""), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                                                      }
                                                      else {
                                                        var _x6 = ((key === "fragment-start") || (key === "extract-start"));
                                                        if (_x6) {
                                                          return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, xvalue, undefined);
                                                        }
                                                        else {
                                                          var _x7 = ((key === "fragment-end") || (key === "extract-end"));
                                                          if (_x7) {
                                                            return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, xvalue);
                                                          }
                                                          else {
                                                            if ((key === "cite-style")) {
                                                              var _x8 = ((lvalue === "clear") || (lvalue === "none"));
                                                              if (_x8) {
                                                                return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $std_core.Nothing, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                                                              }
                                                              else {
                                                                if ((lvalue === "")) {
                                                                  return options;
                                                                }
                                                                else {
                                                                  var _x9 = $common.parseCiteStyle(lvalue);
                                                                  if (_x9 == null) {
                                                                    $common.warning(("unrecognized citation style: " + lvalue), undefined);
                                                                    return options;
                                                                  }
                                                                  else {
                                                                    return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $std_core.Just(_x9.unJust), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            else {
                                                              if ((key === "cite-all")) {
                                                                return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, (value !== ""), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                                                              }
                                                              else {
                                                                var _x10 = ((key === "embed") || (key === "embed-limit"));
                                                                if (_x10) {
                                                                  var arg_10175 = options;
                                                                  if ((value === "")) {
                                                                    var _x11 = 0;
                                                                  }
                                                                  else {
                                                                    var _x11 = ((value === "true")) ? 1024 : $std_core.intMultiply(ivalue,1024);
                                                                  }
                                                                  var arg_10232 = _x11;
                                                                  var arg_10176 = undefined;
                                                                  var arg_10177 = undefined;
                                                                  var arg_10178 = undefined;
                                                                  var arg_10179 = undefined;
                                                                  var arg_10180 = undefined;
                                                                  var arg_10181 = undefined;
                                                                  var arg_10182 = undefined;
                                                                  var arg_10183 = undefined;
                                                                  var arg_10184 = undefined;
                                                                  var arg_10185 = undefined;
                                                                  var arg_10186 = undefined;
                                                                  var arg_10187 = undefined;
                                                                  var arg_10188 = undefined;
                                                                  var arg_10189 = undefined;
                                                                  var arg_10190 = undefined;
                                                                  var arg_10191 = undefined;
                                                                  var arg_10192 = undefined;
                                                                  var arg_10193 = undefined;
                                                                  var arg_10194 = undefined;
                                                                  var arg_10195 = undefined;
                                                                  var arg_10196 = undefined;
                                                                  var arg_10197 = undefined;
                                                                  var arg_10198 = undefined;
                                                                  var arg_10199 = undefined;
                                                                  var arg_10200 = undefined;
                                                                  var arg_10201 = undefined;
                                                                  var arg_10202 = undefined;
                                                                  var arg_10203 = undefined;
                                                                  var arg_10204 = undefined;
                                                                  var arg_10205 = undefined;
                                                                  var arg_10206 = undefined;
                                                                  var arg_10207 = undefined;
                                                                  var arg_10208 = undefined;
                                                                  var arg_10209 = undefined;
                                                                  var arg_10210 = undefined;
                                                                  var arg_10211 = undefined;
                                                                  var arg_10212 = undefined;
                                                                  var arg_10213 = undefined;
                                                                  var arg_10214 = undefined;
                                                                  var arg_10215 = undefined;
                                                                  var arg_10216 = undefined;
                                                                  var arg_10217 = undefined;
                                                                  var arg_10218 = undefined;
                                                                  var arg_10219 = undefined;
                                                                  var arg_10220 = undefined;
                                                                  var arg_10221 = undefined;
                                                                  var arg_10222 = undefined;
                                                                  var arg_10223 = undefined;
                                                                  var arg_10224 = undefined;
                                                                  var arg_10225 = undefined;
                                                                  var arg_10226 = undefined;
                                                                  var arg_10227 = undefined;
                                                                  var arg_10228 = undefined;
                                                                  var arg_10229 = undefined;
                                                                  var arg_10230 = undefined;
                                                                  var arg_10231 = undefined;
                                                                  var arg_10233 = undefined;
                                                                  var arg_10234 = undefined;
                                                                  var arg_10235 = undefined;
                                                                  var arg_10236 = undefined;
                                                                  var arg_10237 = undefined;
                                                                  var arg_10238 = undefined;
                                                                  return $options._copy_1(arg_10175, arg_10176, arg_10177, arg_10178, arg_10179, arg_10180, arg_10181, arg_10182, arg_10183, arg_10184, arg_10185, arg_10186, arg_10187, arg_10188, arg_10189, arg_10190, arg_10191, arg_10192, arg_10193, arg_10194, arg_10195, arg_10196, arg_10197, arg_10198, arg_10199, arg_10200, arg_10201, arg_10202, arg_10203, arg_10204, arg_10205, arg_10206, arg_10207, arg_10208, arg_10209, arg_10210, arg_10211, arg_10212, arg_10213, arg_10214, arg_10215, arg_10216, arg_10217, arg_10218, arg_10219, arg_10220, arg_10221, arg_10222, arg_10223, arg_10224, arg_10225, arg_10226, arg_10227, arg_10228, arg_10229, arg_10230, arg_10231, arg_10232, arg_10233, arg_10234, arg_10235, arg_10236, arg_10237, arg_10238);
                                                                }
                                                                else {
                                                                  if ((key === "section-depth")) {
                                                                    return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ivalue, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                                                                  }
                                                                  else {
                                                                    if ((key === "section-base")) {
                                                                      return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ivalue, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                                                                    }
                                                                    else {
                                                                      var _x11 = ((key === "highlight") || (key === "colorize"));
                                                                      if (_x11) {
                                                                        var arg_10911 = options;
                                                                        var _x12 = ((value === "")) ? false : true;
                                                                        var arg_10959 = _x12;
                                                                        var arg_10912 = undefined;
                                                                        var arg_10913 = undefined;
                                                                        var arg_10914 = undefined;
                                                                        var arg_10915 = undefined;
                                                                        var arg_10916 = undefined;
                                                                        var arg_10917 = undefined;
                                                                        var arg_10918 = undefined;
                                                                        var arg_10919 = undefined;
                                                                        var arg_10920 = undefined;
                                                                        var arg_10921 = undefined;
                                                                        var arg_10922 = undefined;
                                                                        var arg_10923 = undefined;
                                                                        var arg_10924 = undefined;
                                                                        var arg_10925 = undefined;
                                                                        var arg_10926 = undefined;
                                                                        var arg_10927 = undefined;
                                                                        var arg_10928 = undefined;
                                                                        var arg_10929 = undefined;
                                                                        var arg_10930 = undefined;
                                                                        var arg_10931 = undefined;
                                                                        var arg_10932 = undefined;
                                                                        var arg_10933 = undefined;
                                                                        var arg_10934 = undefined;
                                                                        var arg_10935 = undefined;
                                                                        var arg_10936 = undefined;
                                                                        var arg_10937 = undefined;
                                                                        var arg_10938 = undefined;
                                                                        var arg_10939 = undefined;
                                                                        var arg_10940 = undefined;
                                                                        var arg_10941 = undefined;
                                                                        var arg_10942 = undefined;
                                                                        var arg_10943 = undefined;
                                                                        var arg_10944 = undefined;
                                                                        var arg_10945 = undefined;
                                                                        var arg_10946 = undefined;
                                                                        var arg_10947 = undefined;
                                                                        var arg_10948 = undefined;
                                                                        var arg_10949 = undefined;
                                                                        var arg_10950 = undefined;
                                                                        var arg_10951 = undefined;
                                                                        var arg_10952 = undefined;
                                                                        var arg_10953 = undefined;
                                                                        var arg_10954 = undefined;
                                                                        var arg_10955 = undefined;
                                                                        var arg_10956 = undefined;
                                                                        var arg_10957 = undefined;
                                                                        var arg_10958 = undefined;
                                                                        var arg_10960 = undefined;
                                                                        var arg_10961 = undefined;
                                                                        var arg_10962 = undefined;
                                                                        var arg_10963 = undefined;
                                                                        var arg_10964 = undefined;
                                                                        var arg_10965 = undefined;
                                                                        var arg_10966 = undefined;
                                                                        var arg_10967 = undefined;
                                                                        var arg_10968 = undefined;
                                                                        var arg_10969 = undefined;
                                                                        var arg_10970 = undefined;
                                                                        var arg_10971 = undefined;
                                                                        var arg_10972 = undefined;
                                                                        var arg_10973 = undefined;
                                                                        var arg_10974 = undefined;
                                                                        return $options._copy_1(arg_10911, arg_10912, arg_10913, arg_10914, arg_10915, arg_10916, arg_10917, arg_10918, arg_10919, arg_10920, arg_10921, arg_10922, arg_10923, arg_10924, arg_10925, arg_10926, arg_10927, arg_10928, arg_10929, arg_10930, arg_10931, arg_10932, arg_10933, arg_10934, arg_10935, arg_10936, arg_10937, arg_10938, arg_10939, arg_10940, arg_10941, arg_10942, arg_10943, arg_10944, arg_10945, arg_10946, arg_10947, arg_10948, arg_10949, arg_10950, arg_10951, arg_10952, arg_10953, arg_10954, arg_10955, arg_10956, arg_10957, arg_10958, arg_10959, arg_10960, arg_10961, arg_10962, arg_10963, arg_10964, arg_10965, arg_10966, arg_10967, arg_10968, arg_10969, arg_10970, arg_10971, arg_10972, arg_10973, arg_10974);
                                                                      }
                                                                      else {
                                                                        var _x12 = ((key === "highlight-language") || (key === "colorizer"));
                                                                        if (_x12) {
                                                                          var arg_11307 = options;
                                                                          if ((value === "")) {
                                                                            var _x13 = "";
                                                                          }
                                                                          else {
                                                                            var _x13 = ($options.hilitelang(options) + (";" + value));
                                                                          }
                                                                          var arg_11356 = _x13;
                                                                          var arg_11308 = undefined;
                                                                          var arg_11309 = undefined;
                                                                          var arg_11310 = undefined;
                                                                          var arg_11311 = undefined;
                                                                          var arg_11312 = undefined;
                                                                          var arg_11313 = undefined;
                                                                          var arg_11314 = undefined;
                                                                          var arg_11315 = undefined;
                                                                          var arg_11316 = undefined;
                                                                          var arg_11317 = undefined;
                                                                          var arg_11318 = undefined;
                                                                          var arg_11319 = undefined;
                                                                          var arg_11320 = undefined;
                                                                          var arg_11321 = undefined;
                                                                          var arg_11322 = undefined;
                                                                          var arg_11323 = undefined;
                                                                          var arg_11324 = undefined;
                                                                          var arg_11325 = undefined;
                                                                          var arg_11326 = undefined;
                                                                          var arg_11327 = undefined;
                                                                          var arg_11328 = undefined;
                                                                          var arg_11329 = undefined;
                                                                          var arg_11330 = undefined;
                                                                          var arg_11331 = undefined;
                                                                          var arg_11332 = undefined;
                                                                          var arg_11333 = undefined;
                                                                          var arg_11334 = undefined;
                                                                          var arg_11335 = undefined;
                                                                          var arg_11336 = undefined;
                                                                          var arg_11337 = undefined;
                                                                          var arg_11338 = undefined;
                                                                          var arg_11339 = undefined;
                                                                          var arg_11340 = undefined;
                                                                          var arg_11341 = undefined;
                                                                          var arg_11342 = undefined;
                                                                          var arg_11343 = undefined;
                                                                          var arg_11344 = undefined;
                                                                          var arg_11345 = undefined;
                                                                          var arg_11346 = undefined;
                                                                          var arg_11347 = undefined;
                                                                          var arg_11348 = undefined;
                                                                          var arg_11349 = undefined;
                                                                          var arg_11350 = undefined;
                                                                          var arg_11351 = undefined;
                                                                          var arg_11352 = undefined;
                                                                          var arg_11353 = undefined;
                                                                          var arg_11354 = undefined;
                                                                          var arg_11355 = undefined;
                                                                          var arg_11357 = undefined;
                                                                          var arg_11358 = undefined;
                                                                          var arg_11359 = undefined;
                                                                          var arg_11360 = undefined;
                                                                          var arg_11361 = undefined;
                                                                          var arg_11362 = undefined;
                                                                          var arg_11363 = undefined;
                                                                          var arg_11364 = undefined;
                                                                          var arg_11365 = undefined;
                                                                          var arg_11366 = undefined;
                                                                          var arg_11367 = undefined;
                                                                          var arg_11368 = undefined;
                                                                          var arg_11369 = undefined;
                                                                          var arg_11370 = undefined;
                                                                          return $options._copy_1(arg_11307, arg_11308, arg_11309, arg_11310, arg_11311, arg_11312, arg_11313, arg_11314, arg_11315, arg_11316, arg_11317, arg_11318, arg_11319, arg_11320, arg_11321, arg_11322, arg_11323, arg_11324, arg_11325, arg_11326, arg_11327, arg_11328, arg_11329, arg_11330, arg_11331, arg_11332, arg_11333, arg_11334, arg_11335, arg_11336, arg_11337, arg_11338, arg_11339, arg_11340, arg_11341, arg_11342, arg_11343, arg_11344, arg_11345, arg_11346, arg_11347, arg_11348, arg_11349, arg_11350, arg_11351, arg_11352, arg_11353, arg_11354, arg_11355, arg_11356, arg_11357, arg_11358, arg_11359, arg_11360, arg_11361, arg_11362, arg_11363, arg_11364, arg_11365, arg_11366, arg_11367, arg_11368, arg_11369, arg_11370);
                                                                        }
                                                                        else {
                                                                          if ((key === "rebuild")) {
                                                                            return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, (value !== ""), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                                                                          }
                                                                          else {
                                                                            if ((key === "star-bold")) {
                                                                              return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, (value !== ""), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                                                                            }
                                                                            else {
                                                                              if ((key === "line-no")) {
                                                                                return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ivalue, undefined, undefined, undefined, undefined, undefined);
                                                                              }
                                                                              else {
                                                                                if ((key === "line-no-web")) {
                                                                                  return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, (lvalue === "true"), undefined, undefined, undefined, undefined);
                                                                                }
                                                                                else {
                                                                                  if ((key === "pretty-align")) {
                                                                                    return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ivalue, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                                                                                  }
                                                                                  else {
                                                                                    if ((key === "logo")) {
                                                                                      return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, (lvalue === "true"), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                                                                                    }
                                                                                    else {
                                                                                      if ((key === "refer")) {
                                                                                        $std_log.log("filesRefer", value);
                                                                                        return options;
                                                                                      }
                                                                                      else {
                                                                                        if ((key === "copy-styles")) {
                                                                                          return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, (value !== ""), undefined, undefined, undefined);
                                                                                        }
                                                                                        else {
                                                                                          return ($std_core.startsWith(key, "math")) ? $optionsMath.updateMath(options, key, lvalue, value, ivalue, bvalue) : $optionsSandbox.updateSandbox(options, key, lvalue, value, ivalue);
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
}
function fromMeta(opts, mdata)  /* (opts : options/options, mdata : options/metadata) -> options/options */  {
  return $std_core.foldl(mdata, opts, function(options  /* options/options */ , kv  /* (string, string) */ ) {  return update(options, kv.fst, kv.snd, mdata);});
}
 
// koka exports:
return { 'appendNL': appendNL, 'appendValue': appendValue, 'normalizeLocale': normalizeLocale, 'update': update, 'fromMeta': fromMeta };
});