// koka generated module: "optionsSandbox"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_log', './std_path', './common', './options'], function($std_core, $std_log, $std_path, $common, $options) {
"use strict";
 
// koka declarations:
function safeBibtex(s, def)  /* (s : string, def : string) -> string */  {
  var _x0 = ((s === "bibtex") || (s === "bibtex8"));
  return (_x0) ? s : def;
}
function safeLatex(s, def)  /* (s : string, def : string) -> string */  {
  var _x0 = ((s === "latex") || ((s === "xelatex") || (s === "pdflatex")));
  return (_x0) ? s : def;
}
function updateSandbox(options, key, lvalue, value, ivalue)  /* (options : options/options, key : string, lvalue : string, value : string, ivalue : int) -> options/options */  {
  var _x0 = !($options.sandbox(options));
  if (_x0) {
    if ((key === "latex")) {
      var arg_503 = options;
      var _x1 = ((value === "")) ? "latex" : value;
      var arg_555 = _x1;
      var arg_504 = undefined;
      var arg_505 = undefined;
      var arg_506 = undefined;
      var arg_507 = undefined;
      var arg_508 = undefined;
      var arg_509 = undefined;
      var arg_510 = undefined;
      var arg_511 = undefined;
      var arg_512 = undefined;
      var arg_513 = undefined;
      var arg_514 = undefined;
      var arg_515 = undefined;
      var arg_516 = undefined;
      var arg_517 = undefined;
      var arg_518 = undefined;
      var arg_519 = undefined;
      var arg_520 = undefined;
      var arg_521 = undefined;
      var arg_522 = undefined;
      var arg_523 = undefined;
      var arg_524 = undefined;
      var arg_525 = undefined;
      var arg_526 = undefined;
      var arg_527 = undefined;
      var arg_528 = undefined;
      var arg_529 = undefined;
      var arg_530 = undefined;
      var arg_531 = undefined;
      var arg_532 = undefined;
      var arg_533 = undefined;
      var arg_534 = undefined;
      var arg_535 = undefined;
      var arg_536 = undefined;
      var arg_537 = undefined;
      var arg_538 = undefined;
      var arg_539 = undefined;
      var arg_540 = undefined;
      var arg_541 = undefined;
      var arg_542 = undefined;
      var arg_543 = undefined;
      var arg_544 = undefined;
      var arg_545 = undefined;
      var arg_546 = undefined;
      var arg_547 = undefined;
      var arg_548 = undefined;
      var arg_549 = undefined;
      var arg_550 = undefined;
      var arg_551 = undefined;
      var arg_552 = undefined;
      var arg_553 = undefined;
      var arg_554 = undefined;
      var arg_556 = undefined;
      var arg_557 = undefined;
      var arg_558 = undefined;
      var arg_559 = undefined;
      var arg_560 = undefined;
      var arg_561 = undefined;
      var arg_562 = undefined;
      var arg_563 = undefined;
      var arg_564 = undefined;
      var arg_565 = undefined;
      var arg_566 = undefined;
      return $options._copy_1(arg_503, arg_504, arg_505, arg_506, arg_507, arg_508, arg_509, arg_510, arg_511, arg_512, arg_513, arg_514, arg_515, arg_516, arg_517, arg_518, arg_519, arg_520, arg_521, arg_522, arg_523, arg_524, arg_525, arg_526, arg_527, arg_528, arg_529, arg_530, arg_531, arg_532, arg_533, arg_534, arg_535, arg_536, arg_537, arg_538, arg_539, arg_540, arg_541, arg_542, arg_543, arg_544, arg_545, arg_546, arg_547, arg_548, arg_549, arg_550, arg_551, arg_552, arg_553, arg_554, arg_555, arg_556, arg_557, arg_558, arg_559, arg_560, arg_561, arg_562, arg_563, arg_564, arg_565, arg_566);
    }
    else {
      if ((key === "dvipng")) {
        var arg_912 = options;
        var arg_854 = $options.math(options);
        var _x1 = ((value === "")) ? "dvipng" : value;
        var arg_872 = _x1;
        var arg_855 = undefined;
        var arg_856 = undefined;
        var arg_857 = undefined;
        var arg_858 = undefined;
        var arg_859 = undefined;
        var arg_860 = undefined;
        var arg_861 = undefined;
        var arg_862 = undefined;
        var arg_863 = undefined;
        var arg_864 = undefined;
        var arg_865 = undefined;
        var arg_866 = undefined;
        var arg_867 = undefined;
        var arg_868 = undefined;
        var arg_869 = undefined;
        var arg_870 = undefined;
        var arg_871 = undefined;
        var arg_873 = undefined;
        var arg_874 = undefined;
        var arg_875 = undefined;
        var arg_876 = undefined;
        var arg_877 = undefined;
        var arg_878 = undefined;
        var arg_879 = undefined;
        var arg_959 = $options._copy(arg_854, arg_855, arg_856, arg_857, arg_858, arg_859, arg_860, arg_861, arg_862, arg_863, arg_864, arg_865, arg_866, arg_867, arg_868, arg_869, arg_870, arg_871, arg_872, arg_873, arg_874, arg_875, arg_876, arg_877, arg_878, arg_879);
        var arg_913 = undefined;
        var arg_914 = undefined;
        var arg_915 = undefined;
        var arg_916 = undefined;
        var arg_917 = undefined;
        var arg_918 = undefined;
        var arg_919 = undefined;
        var arg_920 = undefined;
        var arg_921 = undefined;
        var arg_922 = undefined;
        var arg_923 = undefined;
        var arg_924 = undefined;
        var arg_925 = undefined;
        var arg_926 = undefined;
        var arg_927 = undefined;
        var arg_928 = undefined;
        var arg_929 = undefined;
        var arg_930 = undefined;
        var arg_931 = undefined;
        var arg_932 = undefined;
        var arg_933 = undefined;
        var arg_934 = undefined;
        var arg_935 = undefined;
        var arg_936 = undefined;
        var arg_937 = undefined;
        var arg_938 = undefined;
        var arg_939 = undefined;
        var arg_940 = undefined;
        var arg_941 = undefined;
        var arg_942 = undefined;
        var arg_943 = undefined;
        var arg_944 = undefined;
        var arg_945 = undefined;
        var arg_946 = undefined;
        var arg_947 = undefined;
        var arg_948 = undefined;
        var arg_949 = undefined;
        var arg_950 = undefined;
        var arg_951 = undefined;
        var arg_952 = undefined;
        var arg_953 = undefined;
        var arg_954 = undefined;
        var arg_955 = undefined;
        var arg_956 = undefined;
        var arg_957 = undefined;
        var arg_958 = undefined;
        var arg_960 = undefined;
        var arg_961 = undefined;
        var arg_962 = undefined;
        var arg_963 = undefined;
        var arg_964 = undefined;
        var arg_965 = undefined;
        var arg_966 = undefined;
        var arg_967 = undefined;
        var arg_968 = undefined;
        var arg_969 = undefined;
        var arg_970 = undefined;
        var arg_971 = undefined;
        var arg_972 = undefined;
        var arg_973 = undefined;
        var arg_974 = undefined;
        var arg_975 = undefined;
        return $options._copy_1(arg_912, arg_913, arg_914, arg_915, arg_916, arg_917, arg_918, arg_919, arg_920, arg_921, arg_922, arg_923, arg_924, arg_925, arg_926, arg_927, arg_928, arg_929, arg_930, arg_931, arg_932, arg_933, arg_934, arg_935, arg_936, arg_937, arg_938, arg_939, arg_940, arg_941, arg_942, arg_943, arg_944, arg_945, arg_946, arg_947, arg_948, arg_949, arg_950, arg_951, arg_952, arg_953, arg_954, arg_955, arg_956, arg_957, arg_958, arg_959, arg_960, arg_961, arg_962, arg_963, arg_964, arg_965, arg_966, arg_967, arg_968, arg_969, arg_970, arg_971, arg_972, arg_973, arg_974, arg_975);
      }
      else {
        if ((key === "dvisvg")) {
          var arg_1321 = options;
          var arg_1263 = $options.math(options);
          var _x1 = ((value === "")) ? "dvisvgm" : value;
          var arg_1282 = _x1;
          var arg_1264 = undefined;
          var arg_1265 = undefined;
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
          var arg_1281 = undefined;
          var arg_1283 = undefined;
          var arg_1284 = undefined;
          var arg_1285 = undefined;
          var arg_1286 = undefined;
          var arg_1287 = undefined;
          var arg_1288 = undefined;
          var arg_1368 = $options._copy(arg_1263, arg_1264, arg_1265, arg_1266, arg_1267, arg_1268, arg_1269, arg_1270, arg_1271, arg_1272, arg_1273, arg_1274, arg_1275, arg_1276, arg_1277, arg_1278, arg_1279, arg_1280, arg_1281, arg_1282, arg_1283, arg_1284, arg_1285, arg_1286, arg_1287, arg_1288);
          var arg_1322 = undefined;
          var arg_1323 = undefined;
          var arg_1324 = undefined;
          var arg_1325 = undefined;
          var arg_1326 = undefined;
          var arg_1327 = undefined;
          var arg_1328 = undefined;
          var arg_1329 = undefined;
          var arg_1330 = undefined;
          var arg_1331 = undefined;
          var arg_1332 = undefined;
          var arg_1333 = undefined;
          var arg_1334 = undefined;
          var arg_1335 = undefined;
          var arg_1336 = undefined;
          var arg_1337 = undefined;
          var arg_1338 = undefined;
          var arg_1339 = undefined;
          var arg_1340 = undefined;
          var arg_1341 = undefined;
          var arg_1342 = undefined;
          var arg_1343 = undefined;
          var arg_1344 = undefined;
          var arg_1345 = undefined;
          var arg_1346 = undefined;
          var arg_1347 = undefined;
          var arg_1348 = undefined;
          var arg_1349 = undefined;
          var arg_1350 = undefined;
          var arg_1351 = undefined;
          var arg_1352 = undefined;
          var arg_1353 = undefined;
          var arg_1354 = undefined;
          var arg_1355 = undefined;
          var arg_1356 = undefined;
          var arg_1357 = undefined;
          var arg_1358 = undefined;
          var arg_1359 = undefined;
          var arg_1360 = undefined;
          var arg_1361 = undefined;
          var arg_1362 = undefined;
          var arg_1363 = undefined;
          var arg_1364 = undefined;
          var arg_1365 = undefined;
          var arg_1366 = undefined;
          var arg_1367 = undefined;
          var arg_1369 = undefined;
          var arg_1370 = undefined;
          var arg_1371 = undefined;
          var arg_1372 = undefined;
          var arg_1373 = undefined;
          var arg_1374 = undefined;
          var arg_1375 = undefined;
          var arg_1376 = undefined;
          var arg_1377 = undefined;
          var arg_1378 = undefined;
          var arg_1379 = undefined;
          var arg_1380 = undefined;
          var arg_1381 = undefined;
          var arg_1382 = undefined;
          var arg_1383 = undefined;
          var arg_1384 = undefined;
          return $options._copy_1(arg_1321, arg_1322, arg_1323, arg_1324, arg_1325, arg_1326, arg_1327, arg_1328, arg_1329, arg_1330, arg_1331, arg_1332, arg_1333, arg_1334, arg_1335, arg_1336, arg_1337, arg_1338, arg_1339, arg_1340, arg_1341, arg_1342, arg_1343, arg_1344, arg_1345, arg_1346, arg_1347, arg_1348, arg_1349, arg_1350, arg_1351, arg_1352, arg_1353, arg_1354, arg_1355, arg_1356, arg_1357, arg_1358, arg_1359, arg_1360, arg_1361, arg_1362, arg_1363, arg_1364, arg_1365, arg_1366, arg_1367, arg_1368, arg_1369, arg_1370, arg_1371, arg_1372, arg_1373, arg_1374, arg_1375, arg_1376, arg_1377, arg_1378, arg_1379, arg_1380, arg_1381, arg_1382, arg_1383, arg_1384);
        }
        else {
          var _x1 = ((key === "pdflatex") || (key === "pdf-latex"));
          if (_x1) {
            var arg_1669 = options;
            var _x2 = ((lvalue === "true")) ? "default" : value;
            var arg_1719 = _x2;
            var arg_1670 = undefined;
            var arg_1671 = undefined;
            var arg_1672 = undefined;
            var arg_1673 = undefined;
            var arg_1674 = undefined;
            var arg_1675 = undefined;
            var arg_1676 = undefined;
            var arg_1677 = undefined;
            var arg_1678 = undefined;
            var arg_1679 = undefined;
            var arg_1680 = undefined;
            var arg_1681 = undefined;
            var arg_1682 = undefined;
            var arg_1683 = undefined;
            var arg_1684 = undefined;
            var arg_1685 = undefined;
            var arg_1686 = undefined;
            var arg_1687 = undefined;
            var arg_1688 = undefined;
            var arg_1689 = undefined;
            var arg_1690 = undefined;
            var arg_1691 = undefined;
            var arg_1692 = undefined;
            var arg_1693 = undefined;
            var arg_1694 = undefined;
            var arg_1695 = undefined;
            var arg_1696 = undefined;
            var arg_1697 = undefined;
            var arg_1698 = undefined;
            var arg_1699 = undefined;
            var arg_1700 = undefined;
            var arg_1701 = undefined;
            var arg_1702 = undefined;
            var arg_1703 = undefined;
            var arg_1704 = undefined;
            var arg_1705 = undefined;
            var arg_1706 = undefined;
            var arg_1707 = undefined;
            var arg_1708 = undefined;
            var arg_1709 = undefined;
            var arg_1710 = undefined;
            var arg_1711 = undefined;
            var arg_1712 = undefined;
            var arg_1713 = undefined;
            var arg_1714 = undefined;
            var arg_1715 = undefined;
            var arg_1716 = undefined;
            var arg_1717 = undefined;
            var arg_1718 = undefined;
            var arg_1720 = undefined;
            var arg_1721 = undefined;
            var arg_1722 = undefined;
            var arg_1723 = undefined;
            var arg_1724 = undefined;
            var arg_1725 = undefined;
            var arg_1726 = undefined;
            var arg_1727 = undefined;
            var arg_1728 = undefined;
            var arg_1729 = undefined;
            var arg_1730 = undefined;
            var arg_1731 = undefined;
            var arg_1732 = undefined;
            return $options._copy_1(arg_1669, arg_1670, arg_1671, arg_1672, arg_1673, arg_1674, arg_1675, arg_1676, arg_1677, arg_1678, arg_1679, arg_1680, arg_1681, arg_1682, arg_1683, arg_1684, arg_1685, arg_1686, arg_1687, arg_1688, arg_1689, arg_1690, arg_1691, arg_1692, arg_1693, arg_1694, arg_1695, arg_1696, arg_1697, arg_1698, arg_1699, arg_1700, arg_1701, arg_1702, arg_1703, arg_1704, arg_1705, arg_1706, arg_1707, arg_1708, arg_1709, arg_1710, arg_1711, arg_1712, arg_1713, arg_1714, arg_1715, arg_1716, arg_1717, arg_1718, arg_1719, arg_1720, arg_1721, arg_1722, arg_1723, arg_1724, arg_1725, arg_1726, arg_1727, arg_1728, arg_1729, arg_1730, arg_1731, arg_1732);
          }
          else {
            var _x2 = ((key === "math-latex-full") || ((key === "math-pdflatex") || (key === "math-pdf-latex")));
            if (_x2) {
              var arg_2198 = options;
              var arg_2140 = $options.math(options);
              var _x3 = ((lvalue === "true")) ? "default" : value;
              var arg_2161 = _x3;
              var arg_2141 = undefined;
              var arg_2142 = undefined;
              var arg_2143 = undefined;
              var arg_2144 = undefined;
              var arg_2145 = undefined;
              var arg_2146 = undefined;
              var arg_2147 = undefined;
              var arg_2148 = undefined;
              var arg_2149 = undefined;
              var arg_2150 = undefined;
              var arg_2151 = undefined;
              var arg_2152 = undefined;
              var arg_2153 = undefined;
              var arg_2154 = undefined;
              var arg_2155 = undefined;
              var arg_2156 = undefined;
              var arg_2157 = undefined;
              var arg_2158 = undefined;
              var arg_2159 = undefined;
              var arg_2160 = undefined;
              var arg_2162 = undefined;
              var arg_2163 = undefined;
              var arg_2164 = undefined;
              var arg_2165 = undefined;
              var arg_2245 = $options._copy(arg_2140, arg_2141, arg_2142, arg_2143, arg_2144, arg_2145, arg_2146, arg_2147, arg_2148, arg_2149, arg_2150, arg_2151, arg_2152, arg_2153, arg_2154, arg_2155, arg_2156, arg_2157, arg_2158, arg_2159, arg_2160, arg_2161, arg_2162, arg_2163, arg_2164, arg_2165);
              var arg_2199 = undefined;
              var arg_2200 = undefined;
              var arg_2201 = undefined;
              var arg_2202 = undefined;
              var arg_2203 = undefined;
              var arg_2204 = undefined;
              var arg_2205 = undefined;
              var arg_2206 = undefined;
              var arg_2207 = undefined;
              var arg_2208 = undefined;
              var arg_2209 = undefined;
              var arg_2210 = undefined;
              var arg_2211 = undefined;
              var arg_2212 = undefined;
              var arg_2213 = undefined;
              var arg_2214 = undefined;
              var arg_2215 = undefined;
              var arg_2216 = undefined;
              var arg_2217 = undefined;
              var arg_2218 = undefined;
              var arg_2219 = undefined;
              var arg_2220 = undefined;
              var arg_2221 = undefined;
              var arg_2222 = undefined;
              var arg_2223 = undefined;
              var arg_2224 = undefined;
              var arg_2225 = undefined;
              var arg_2226 = undefined;
              var arg_2227 = undefined;
              var arg_2228 = undefined;
              var arg_2229 = undefined;
              var arg_2230 = undefined;
              var arg_2231 = undefined;
              var arg_2232 = undefined;
              var arg_2233 = undefined;
              var arg_2234 = undefined;
              var arg_2235 = undefined;
              var arg_2236 = undefined;
              var arg_2237 = undefined;
              var arg_2238 = undefined;
              var arg_2239 = undefined;
              var arg_2240 = undefined;
              var arg_2241 = undefined;
              var arg_2242 = undefined;
              var arg_2243 = undefined;
              var arg_2244 = undefined;
              var arg_2246 = undefined;
              var arg_2247 = undefined;
              var arg_2248 = undefined;
              var arg_2249 = undefined;
              var arg_2250 = undefined;
              var arg_2251 = undefined;
              var arg_2252 = undefined;
              var arg_2253 = undefined;
              var arg_2254 = undefined;
              var arg_2255 = undefined;
              var arg_2256 = undefined;
              var arg_2257 = undefined;
              var arg_2258 = undefined;
              var arg_2259 = undefined;
              var arg_2260 = undefined;
              var arg_2261 = undefined;
              return $options._copy_1(arg_2198, arg_2199, arg_2200, arg_2201, arg_2202, arg_2203, arg_2204, arg_2205, arg_2206, arg_2207, arg_2208, arg_2209, arg_2210, arg_2211, arg_2212, arg_2213, arg_2214, arg_2215, arg_2216, arg_2217, arg_2218, arg_2219, arg_2220, arg_2221, arg_2222, arg_2223, arg_2224, arg_2225, arg_2226, arg_2227, arg_2228, arg_2229, arg_2230, arg_2231, arg_2232, arg_2233, arg_2234, arg_2235, arg_2236, arg_2237, arg_2238, arg_2239, arg_2240, arg_2241, arg_2242, arg_2243, arg_2244, arg_2245, arg_2246, arg_2247, arg_2248, arg_2249, arg_2250, arg_2251, arg_2252, arg_2253, arg_2254, arg_2255, arg_2256, arg_2257, arg_2258, arg_2259, arg_2260, arg_2261);
            }
            else {
              if ((key === "math-latex")) {
                var arg_2607 = options;
                var arg_2549 = $options.math(options);
                var _x3 = ((lvalue === "true")) ? "default" : value;
                var arg_2569 = _x3;
                var arg_2550 = undefined;
                var arg_2551 = undefined;
                var arg_2552 = undefined;
                var arg_2553 = undefined;
                var arg_2554 = undefined;
                var arg_2555 = undefined;
                var arg_2556 = undefined;
                var arg_2557 = undefined;
                var arg_2558 = undefined;
                var arg_2559 = undefined;
                var arg_2560 = undefined;
                var arg_2561 = undefined;
                var arg_2562 = undefined;
                var arg_2563 = undefined;
                var arg_2564 = undefined;
                var arg_2565 = undefined;
                var arg_2566 = undefined;
                var arg_2567 = undefined;
                var arg_2568 = undefined;
                var arg_2570 = undefined;
                var arg_2571 = undefined;
                var arg_2572 = undefined;
                var arg_2573 = undefined;
                var arg_2574 = undefined;
                var arg_2654 = $options._copy(arg_2549, arg_2550, arg_2551, arg_2552, arg_2553, arg_2554, arg_2555, arg_2556, arg_2557, arg_2558, arg_2559, arg_2560, arg_2561, arg_2562, arg_2563, arg_2564, arg_2565, arg_2566, arg_2567, arg_2568, arg_2569, arg_2570, arg_2571, arg_2572, arg_2573, arg_2574);
                var arg_2608 = undefined;
                var arg_2609 = undefined;
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
                var arg_2643 = undefined;
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
                return $options._copy_1(arg_2607, arg_2608, arg_2609, arg_2610, arg_2611, arg_2612, arg_2613, arg_2614, arg_2615, arg_2616, arg_2617, arg_2618, arg_2619, arg_2620, arg_2621, arg_2622, arg_2623, arg_2624, arg_2625, arg_2626, arg_2627, arg_2628, arg_2629, arg_2630, arg_2631, arg_2632, arg_2633, arg_2634, arg_2635, arg_2636, arg_2637, arg_2638, arg_2639, arg_2640, arg_2641, arg_2642, arg_2643, arg_2644, arg_2645, arg_2646, arg_2647, arg_2648, arg_2649, arg_2650, arg_2651, arg_2652, arg_2653, arg_2654, arg_2655, arg_2656, arg_2657, arg_2658, arg_2659, arg_2660, arg_2661, arg_2662, arg_2663, arg_2664, arg_2665, arg_2666, arg_2667, arg_2668, arg_2669, arg_2670);
              }
              else {
                if ((key === "bibtex")) {
                  return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, value, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                }
                else {
                  if ((key === "convert")) {
                    return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, value, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                  }
                  else {
                    if ((key === "ps2pdf")) {
                      return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, value, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                    }
                    else {
                      if ((key === "dvips")) {
                        return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, value, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                      }
                      else {
                        if ((key === "zip")) {
                          return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, value, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                        }
                        else {
                          if ((key === "process-timeout")) {
                            var arg_4182 = options;
                            var _x4 = ((value !== "") && ivalue > 0);
                            var _x3 = (_x4) ? $std_core.intMultiply(ivalue,1000) : 0;
                            var arg_4235 = _x3;
                            var arg_4183 = undefined;
                            var arg_4184 = undefined;
                            var arg_4185 = undefined;
                            var arg_4186 = undefined;
                            var arg_4187 = undefined;
                            var arg_4188 = undefined;
                            var arg_4189 = undefined;
                            var arg_4190 = undefined;
                            var arg_4191 = undefined;
                            var arg_4192 = undefined;
                            var arg_4193 = undefined;
                            var arg_4194 = undefined;
                            var arg_4195 = undefined;
                            var arg_4196 = undefined;
                            var arg_4197 = undefined;
                            var arg_4198 = undefined;
                            var arg_4199 = undefined;
                            var arg_4200 = undefined;
                            var arg_4201 = undefined;
                            var arg_4202 = undefined;
                            var arg_4203 = undefined;
                            var arg_4204 = undefined;
                            var arg_4205 = undefined;
                            var arg_4206 = undefined;
                            var arg_4207 = undefined;
                            var arg_4208 = undefined;
                            var arg_4209 = undefined;
                            var arg_4210 = undefined;
                            var arg_4211 = undefined;
                            var arg_4212 = undefined;
                            var arg_4213 = undefined;
                            var arg_4214 = undefined;
                            var arg_4215 = undefined;
                            var arg_4216 = undefined;
                            var arg_4217 = undefined;
                            var arg_4218 = undefined;
                            var arg_4219 = undefined;
                            var arg_4220 = undefined;
                            var arg_4221 = undefined;
                            var arg_4222 = undefined;
                            var arg_4223 = undefined;
                            var arg_4224 = undefined;
                            var arg_4225 = undefined;
                            var arg_4226 = undefined;
                            var arg_4227 = undefined;
                            var arg_4228 = undefined;
                            var arg_4229 = undefined;
                            var arg_4230 = undefined;
                            var arg_4231 = undefined;
                            var arg_4232 = undefined;
                            var arg_4233 = undefined;
                            var arg_4234 = undefined;
                            var arg_4236 = undefined;
                            var arg_4237 = undefined;
                            var arg_4238 = undefined;
                            var arg_4239 = undefined;
                            var arg_4240 = undefined;
                            var arg_4241 = undefined;
                            var arg_4242 = undefined;
                            var arg_4243 = undefined;
                            var arg_4244 = undefined;
                            var arg_4245 = undefined;
                            return $options._copy_1(arg_4182, arg_4183, arg_4184, arg_4185, arg_4186, arg_4187, arg_4188, arg_4189, arg_4190, arg_4191, arg_4192, arg_4193, arg_4194, arg_4195, arg_4196, arg_4197, arg_4198, arg_4199, arg_4200, arg_4201, arg_4202, arg_4203, arg_4204, arg_4205, arg_4206, arg_4207, arg_4208, arg_4209, arg_4210, arg_4211, arg_4212, arg_4213, arg_4214, arg_4215, arg_4216, arg_4217, arg_4218, arg_4219, arg_4220, arg_4221, arg_4222, arg_4223, arg_4224, arg_4225, arg_4226, arg_4227, arg_4228, arg_4229, arg_4230, arg_4231, arg_4232, arg_4233, arg_4234, arg_4235, arg_4236, arg_4237, arg_4238, arg_4239, arg_4240, arg_4241, arg_4242, arg_4243, arg_4244, arg_4245);
                          }
                          else {
                            return options;
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
  else {
    if ((key === "latex")) {
      var arg_4496 = options;
      if ((value === "")) {
        var _x3 = "latex";
      }
      else {
        var _x3 = safeLatex(lvalue, $options.latex_1(options));
      }
      var arg_4548 = _x3;
      var arg_4497 = undefined;
      var arg_4498 = undefined;
      var arg_4499 = undefined;
      var arg_4500 = undefined;
      var arg_4501 = undefined;
      var arg_4502 = undefined;
      var arg_4503 = undefined;
      var arg_4504 = undefined;
      var arg_4505 = undefined;
      var arg_4506 = undefined;
      var arg_4507 = undefined;
      var arg_4508 = undefined;
      var arg_4509 = undefined;
      var arg_4510 = undefined;
      var arg_4511 = undefined;
      var arg_4512 = undefined;
      var arg_4513 = undefined;
      var arg_4514 = undefined;
      var arg_4515 = undefined;
      var arg_4516 = undefined;
      var arg_4517 = undefined;
      var arg_4518 = undefined;
      var arg_4519 = undefined;
      var arg_4520 = undefined;
      var arg_4521 = undefined;
      var arg_4522 = undefined;
      var arg_4523 = undefined;
      var arg_4524 = undefined;
      var arg_4525 = undefined;
      var arg_4526 = undefined;
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
      var arg_4549 = undefined;
      var arg_4550 = undefined;
      var arg_4551 = undefined;
      var arg_4552 = undefined;
      var arg_4553 = undefined;
      var arg_4554 = undefined;
      var arg_4555 = undefined;
      var arg_4556 = undefined;
      var arg_4557 = undefined;
      var arg_4558 = undefined;
      var arg_4559 = undefined;
      return $options._copy_1(arg_4496, arg_4497, arg_4498, arg_4499, arg_4500, arg_4501, arg_4502, arg_4503, arg_4504, arg_4505, arg_4506, arg_4507, arg_4508, arg_4509, arg_4510, arg_4511, arg_4512, arg_4513, arg_4514, arg_4515, arg_4516, arg_4517, arg_4518, arg_4519, arg_4520, arg_4521, arg_4522, arg_4523, arg_4524, arg_4525, arg_4526, arg_4527, arg_4528, arg_4529, arg_4530, arg_4531, arg_4532, arg_4533, arg_4534, arg_4535, arg_4536, arg_4537, arg_4538, arg_4539, arg_4540, arg_4541, arg_4542, arg_4543, arg_4544, arg_4545, arg_4546, arg_4547, arg_4548, arg_4549, arg_4550, arg_4551, arg_4552, arg_4553, arg_4554, arg_4555, arg_4556, arg_4557, arg_4558, arg_4559);
    }
    else {
      var _x3 = ((key === "pdflatex") || (key === "pdf-latex"));
      if (_x3) {
        var arg_4849 = options;
        if ((lvalue === "true")) {
          var _x4 = "default";
        }
        else {
          var _x4 = safeLatex(lvalue, $options.pdflatex(options));
        }
        var arg_4899 = _x4;
        var arg_4850 = undefined;
        var arg_4851 = undefined;
        var arg_4852 = undefined;
        var arg_4853 = undefined;
        var arg_4854 = undefined;
        var arg_4855 = undefined;
        var arg_4856 = undefined;
        var arg_4857 = undefined;
        var arg_4858 = undefined;
        var arg_4859 = undefined;
        var arg_4860 = undefined;
        var arg_4861 = undefined;
        var arg_4862 = undefined;
        var arg_4863 = undefined;
        var arg_4864 = undefined;
        var arg_4865 = undefined;
        var arg_4866 = undefined;
        var arg_4867 = undefined;
        var arg_4868 = undefined;
        var arg_4869 = undefined;
        var arg_4870 = undefined;
        var arg_4871 = undefined;
        var arg_4872 = undefined;
        var arg_4873 = undefined;
        var arg_4874 = undefined;
        var arg_4875 = undefined;
        var arg_4876 = undefined;
        var arg_4877 = undefined;
        var arg_4878 = undefined;
        var arg_4879 = undefined;
        var arg_4880 = undefined;
        var arg_4881 = undefined;
        var arg_4882 = undefined;
        var arg_4883 = undefined;
        var arg_4884 = undefined;
        var arg_4885 = undefined;
        var arg_4886 = undefined;
        var arg_4887 = undefined;
        var arg_4888 = undefined;
        var arg_4889 = undefined;
        var arg_4890 = undefined;
        var arg_4891 = undefined;
        var arg_4892 = undefined;
        var arg_4893 = undefined;
        var arg_4894 = undefined;
        var arg_4895 = undefined;
        var arg_4896 = undefined;
        var arg_4897 = undefined;
        var arg_4898 = undefined;
        var arg_4900 = undefined;
        var arg_4901 = undefined;
        var arg_4902 = undefined;
        var arg_4903 = undefined;
        var arg_4904 = undefined;
        var arg_4905 = undefined;
        var arg_4906 = undefined;
        var arg_4907 = undefined;
        var arg_4908 = undefined;
        var arg_4909 = undefined;
        var arg_4910 = undefined;
        var arg_4911 = undefined;
        var arg_4912 = undefined;
        return $options._copy_1(arg_4849, arg_4850, arg_4851, arg_4852, arg_4853, arg_4854, arg_4855, arg_4856, arg_4857, arg_4858, arg_4859, arg_4860, arg_4861, arg_4862, arg_4863, arg_4864, arg_4865, arg_4866, arg_4867, arg_4868, arg_4869, arg_4870, arg_4871, arg_4872, arg_4873, arg_4874, arg_4875, arg_4876, arg_4877, arg_4878, arg_4879, arg_4880, arg_4881, arg_4882, arg_4883, arg_4884, arg_4885, arg_4886, arg_4887, arg_4888, arg_4889, arg_4890, arg_4891, arg_4892, arg_4893, arg_4894, arg_4895, arg_4896, arg_4897, arg_4898, arg_4899, arg_4900, arg_4901, arg_4902, arg_4903, arg_4904, arg_4905, arg_4906, arg_4907, arg_4908, arg_4909, arg_4910, arg_4911, arg_4912);
      }
      else {
        var _x4 = ((key === "math-latex-full") || ((key === "math-pdflatex") || (key === "math-pdf-latex")));
        if (_x4) {
          var arg_5386 = options;
          var arg_5328 = $options.math(options);
          if ((lvalue === "true")) {
            var _x5 = "default";
          }
          else {
            var _x5 = safeLatex(lvalue, $options.latexFull($options.math(options)));
          }
          var arg_5349 = _x5;
          var arg_5329 = undefined;
          var arg_5330 = undefined;
          var arg_5331 = undefined;
          var arg_5332 = undefined;
          var arg_5333 = undefined;
          var arg_5334 = undefined;
          var arg_5335 = undefined;
          var arg_5336 = undefined;
          var arg_5337 = undefined;
          var arg_5338 = undefined;
          var arg_5339 = undefined;
          var arg_5340 = undefined;
          var arg_5341 = undefined;
          var arg_5342 = undefined;
          var arg_5343 = undefined;
          var arg_5344 = undefined;
          var arg_5345 = undefined;
          var arg_5346 = undefined;
          var arg_5347 = undefined;
          var arg_5348 = undefined;
          var arg_5350 = undefined;
          var arg_5351 = undefined;
          var arg_5352 = undefined;
          var arg_5353 = undefined;
          var arg_5433 = $options._copy(arg_5328, arg_5329, arg_5330, arg_5331, arg_5332, arg_5333, arg_5334, arg_5335, arg_5336, arg_5337, arg_5338, arg_5339, arg_5340, arg_5341, arg_5342, arg_5343, arg_5344, arg_5345, arg_5346, arg_5347, arg_5348, arg_5349, arg_5350, arg_5351, arg_5352, arg_5353);
          var arg_5387 = undefined;
          var arg_5388 = undefined;
          var arg_5389 = undefined;
          var arg_5390 = undefined;
          var arg_5391 = undefined;
          var arg_5392 = undefined;
          var arg_5393 = undefined;
          var arg_5394 = undefined;
          var arg_5395 = undefined;
          var arg_5396 = undefined;
          var arg_5397 = undefined;
          var arg_5398 = undefined;
          var arg_5399 = undefined;
          var arg_5400 = undefined;
          var arg_5401 = undefined;
          var arg_5402 = undefined;
          var arg_5403 = undefined;
          var arg_5404 = undefined;
          var arg_5405 = undefined;
          var arg_5406 = undefined;
          var arg_5407 = undefined;
          var arg_5408 = undefined;
          var arg_5409 = undefined;
          var arg_5410 = undefined;
          var arg_5411 = undefined;
          var arg_5412 = undefined;
          var arg_5413 = undefined;
          var arg_5414 = undefined;
          var arg_5415 = undefined;
          var arg_5416 = undefined;
          var arg_5417 = undefined;
          var arg_5418 = undefined;
          var arg_5419 = undefined;
          var arg_5420 = undefined;
          var arg_5421 = undefined;
          var arg_5422 = undefined;
          var arg_5423 = undefined;
          var arg_5424 = undefined;
          var arg_5425 = undefined;
          var arg_5426 = undefined;
          var arg_5427 = undefined;
          var arg_5428 = undefined;
          var arg_5429 = undefined;
          var arg_5430 = undefined;
          var arg_5431 = undefined;
          var arg_5432 = undefined;
          var arg_5434 = undefined;
          var arg_5435 = undefined;
          var arg_5436 = undefined;
          var arg_5437 = undefined;
          var arg_5438 = undefined;
          var arg_5439 = undefined;
          var arg_5440 = undefined;
          var arg_5441 = undefined;
          var arg_5442 = undefined;
          var arg_5443 = undefined;
          var arg_5444 = undefined;
          var arg_5445 = undefined;
          var arg_5446 = undefined;
          var arg_5447 = undefined;
          var arg_5448 = undefined;
          var arg_5449 = undefined;
          return $options._copy_1(arg_5386, arg_5387, arg_5388, arg_5389, arg_5390, arg_5391, arg_5392, arg_5393, arg_5394, arg_5395, arg_5396, arg_5397, arg_5398, arg_5399, arg_5400, arg_5401, arg_5402, arg_5403, arg_5404, arg_5405, arg_5406, arg_5407, arg_5408, arg_5409, arg_5410, arg_5411, arg_5412, arg_5413, arg_5414, arg_5415, arg_5416, arg_5417, arg_5418, arg_5419, arg_5420, arg_5421, arg_5422, arg_5423, arg_5424, arg_5425, arg_5426, arg_5427, arg_5428, arg_5429, arg_5430, arg_5431, arg_5432, arg_5433, arg_5434, arg_5435, arg_5436, arg_5437, arg_5438, arg_5439, arg_5440, arg_5441, arg_5442, arg_5443, arg_5444, arg_5445, arg_5446, arg_5447, arg_5448, arg_5449);
        }
        else {
          if ((key === "math-latex")) {
            var arg_5813 = options;
            var arg_5755 = $options.math(options);
            if ((lvalue === "true")) {
              var _x5 = "default";
            }
            else {
              var _x5 = safeLatex(lvalue, $options.latex($options.math(options)));
            }
            var arg_5775 = _x5;
            var arg_5756 = undefined;
            var arg_5757 = undefined;
            var arg_5758 = undefined;
            var arg_5759 = undefined;
            var arg_5760 = undefined;
            var arg_5761 = undefined;
            var arg_5762 = undefined;
            var arg_5763 = undefined;
            var arg_5764 = undefined;
            var arg_5765 = undefined;
            var arg_5766 = undefined;
            var arg_5767 = undefined;
            var arg_5768 = undefined;
            var arg_5769 = undefined;
            var arg_5770 = undefined;
            var arg_5771 = undefined;
            var arg_5772 = undefined;
            var arg_5773 = undefined;
            var arg_5774 = undefined;
            var arg_5776 = undefined;
            var arg_5777 = undefined;
            var arg_5778 = undefined;
            var arg_5779 = undefined;
            var arg_5780 = undefined;
            var arg_5860 = $options._copy(arg_5755, arg_5756, arg_5757, arg_5758, arg_5759, arg_5760, arg_5761, arg_5762, arg_5763, arg_5764, arg_5765, arg_5766, arg_5767, arg_5768, arg_5769, arg_5770, arg_5771, arg_5772, arg_5773, arg_5774, arg_5775, arg_5776, arg_5777, arg_5778, arg_5779, arg_5780);
            var arg_5814 = undefined;
            var arg_5815 = undefined;
            var arg_5816 = undefined;
            var arg_5817 = undefined;
            var arg_5818 = undefined;
            var arg_5819 = undefined;
            var arg_5820 = undefined;
            var arg_5821 = undefined;
            var arg_5822 = undefined;
            var arg_5823 = undefined;
            var arg_5824 = undefined;
            var arg_5825 = undefined;
            var arg_5826 = undefined;
            var arg_5827 = undefined;
            var arg_5828 = undefined;
            var arg_5829 = undefined;
            var arg_5830 = undefined;
            var arg_5831 = undefined;
            var arg_5832 = undefined;
            var arg_5833 = undefined;
            var arg_5834 = undefined;
            var arg_5835 = undefined;
            var arg_5836 = undefined;
            var arg_5837 = undefined;
            var arg_5838 = undefined;
            var arg_5839 = undefined;
            var arg_5840 = undefined;
            var arg_5841 = undefined;
            var arg_5842 = undefined;
            var arg_5843 = undefined;
            var arg_5844 = undefined;
            var arg_5845 = undefined;
            var arg_5846 = undefined;
            var arg_5847 = undefined;
            var arg_5848 = undefined;
            var arg_5849 = undefined;
            var arg_5850 = undefined;
            var arg_5851 = undefined;
            var arg_5852 = undefined;
            var arg_5853 = undefined;
            var arg_5854 = undefined;
            var arg_5855 = undefined;
            var arg_5856 = undefined;
            var arg_5857 = undefined;
            var arg_5858 = undefined;
            var arg_5859 = undefined;
            var arg_5861 = undefined;
            var arg_5862 = undefined;
            var arg_5863 = undefined;
            var arg_5864 = undefined;
            var arg_5865 = undefined;
            var arg_5866 = undefined;
            var arg_5867 = undefined;
            var arg_5868 = undefined;
            var arg_5869 = undefined;
            var arg_5870 = undefined;
            var arg_5871 = undefined;
            var arg_5872 = undefined;
            var arg_5873 = undefined;
            var arg_5874 = undefined;
            var arg_5875 = undefined;
            var arg_5876 = undefined;
            return $options._copy_1(arg_5813, arg_5814, arg_5815, arg_5816, arg_5817, arg_5818, arg_5819, arg_5820, arg_5821, arg_5822, arg_5823, arg_5824, arg_5825, arg_5826, arg_5827, arg_5828, arg_5829, arg_5830, arg_5831, arg_5832, arg_5833, arg_5834, arg_5835, arg_5836, arg_5837, arg_5838, arg_5839, arg_5840, arg_5841, arg_5842, arg_5843, arg_5844, arg_5845, arg_5846, arg_5847, arg_5848, arg_5849, arg_5850, arg_5851, arg_5852, arg_5853, arg_5854, arg_5855, arg_5856, arg_5857, arg_5858, arg_5859, arg_5860, arg_5861, arg_5862, arg_5863, arg_5864, arg_5865, arg_5866, arg_5867, arg_5868, arg_5869, arg_5870, arg_5871, arg_5872, arg_5873, arg_5874, arg_5875, arg_5876);
          }
          else {
            if ((key === "bibtex")) {
              return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, safeBibtex(lvalue, $options.bibtex(options)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
            }
            else {
              return options;
            }
          }
        }
      }
    }
  }
}
 
// koka exports:
return { 'safeBibtex': safeBibtex, 'safeLatex': safeLatex, 'updateSandbox': updateSandbox };
});