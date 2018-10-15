// koka generated module: "optionsMath"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_log', './std_path', './common', './options', './optionsSandbox'], function($std_core, $std_log, $std_path, $common, $options, $optionsSandbox) {
"use strict";
 
// koka declarations:
function parseMathRender(options, value, def)  /* (options : options/options, value : string, def : maybe<common/mathrender>) -> maybe<common/mathrender> */  {
  if ((value === "png")) {
    return $std_core.Just($common.Png);
  }
  else {
    if ((value === "svg")) {
      return $std_core.Just($common.Svg);
    }
    else {
      $common.warning(("unrecognized math rendering mode: " + (value + ", expecting one of \'png\' or \'svg\'")), undefined);
      return def;
    }
  }
}
function setMathMode(options, value)  /* (options : options/options, value : string) -> options/options */  {
  var nvalue = $common.normalizeId(value);
  if ((nvalue === "static")) {
    return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), $options.Static, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  }
  else {
    if ((nvalue === "dynamic")) {
      return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), $options.Dynamic, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    }
    else {
      if ((nvalue === "mathjax")) {
        var arg_1056 = options;
        var arg_998 = $options.math(options);
        var arg_999 = $options.Dynamic;
        var _x1 = $std_core.bool_2($options.mathjax($options.math(options)));
        if (_x1) {
          var _x0 = $options.mathjax($options.math(options));
        }
        else {
          var _x0 = "default";
        }
        var arg_1002 = _x0;
        var arg_1000 = undefined;
        var arg_1001 = undefined;
        var arg_1003 = undefined;
        var arg_1004 = undefined;
        var arg_1005 = undefined;
        var arg_1006 = undefined;
        var arg_1007 = undefined;
        var arg_1008 = undefined;
        var arg_1009 = undefined;
        var arg_1010 = undefined;
        var arg_1011 = undefined;
        var arg_1012 = undefined;
        var arg_1013 = undefined;
        var arg_1014 = undefined;
        var arg_1015 = undefined;
        var arg_1016 = undefined;
        var arg_1017 = undefined;
        var arg_1018 = undefined;
        var arg_1019 = undefined;
        var arg_1020 = undefined;
        var arg_1021 = undefined;
        var arg_1022 = undefined;
        var arg_1023 = undefined;
        var arg_1103 = $options._copy(arg_998, arg_999, arg_1000, arg_1001, arg_1002, arg_1003, arg_1004, arg_1005, arg_1006, arg_1007, arg_1008, arg_1009, arg_1010, arg_1011, arg_1012, arg_1013, arg_1014, arg_1015, arg_1016, arg_1017, arg_1018, arg_1019, arg_1020, arg_1021, arg_1022, arg_1023);
        var arg_1057 = undefined;
        var arg_1058 = undefined;
        var arg_1059 = undefined;
        var arg_1060 = undefined;
        var arg_1061 = undefined;
        var arg_1062 = undefined;
        var arg_1063 = undefined;
        var arg_1064 = undefined;
        var arg_1065 = undefined;
        var arg_1066 = undefined;
        var arg_1067 = undefined;
        var arg_1068 = undefined;
        var arg_1069 = undefined;
        var arg_1070 = undefined;
        var arg_1071 = undefined;
        var arg_1072 = undefined;
        var arg_1073 = undefined;
        var arg_1074 = undefined;
        var arg_1075 = undefined;
        var arg_1076 = undefined;
        var arg_1077 = undefined;
        var arg_1078 = undefined;
        var arg_1079 = undefined;
        var arg_1080 = undefined;
        var arg_1081 = undefined;
        var arg_1082 = undefined;
        var arg_1083 = undefined;
        var arg_1084 = undefined;
        var arg_1085 = undefined;
        var arg_1086 = undefined;
        var arg_1087 = undefined;
        var arg_1088 = undefined;
        var arg_1089 = undefined;
        var arg_1090 = undefined;
        var arg_1091 = undefined;
        var arg_1092 = undefined;
        var arg_1093 = undefined;
        var arg_1094 = undefined;
        var arg_1095 = undefined;
        var arg_1096 = undefined;
        var arg_1097 = undefined;
        var arg_1098 = undefined;
        var arg_1099 = undefined;
        var arg_1100 = undefined;
        var arg_1101 = undefined;
        var arg_1102 = undefined;
        var arg_1104 = undefined;
        var arg_1105 = undefined;
        var arg_1106 = undefined;
        var arg_1107 = undefined;
        var arg_1108 = undefined;
        var arg_1109 = undefined;
        var arg_1110 = undefined;
        var arg_1111 = undefined;
        var arg_1112 = undefined;
        var arg_1113 = undefined;
        var arg_1114 = undefined;
        var arg_1115 = undefined;
        var arg_1116 = undefined;
        var arg_1117 = undefined;
        var arg_1118 = undefined;
        var arg_1119 = undefined;
        return $options._copy_1(arg_1056, arg_1057, arg_1058, arg_1059, arg_1060, arg_1061, arg_1062, arg_1063, arg_1064, arg_1065, arg_1066, arg_1067, arg_1068, arg_1069, arg_1070, arg_1071, arg_1072, arg_1073, arg_1074, arg_1075, arg_1076, arg_1077, arg_1078, arg_1079, arg_1080, arg_1081, arg_1082, arg_1083, arg_1084, arg_1085, arg_1086, arg_1087, arg_1088, arg_1089, arg_1090, arg_1091, arg_1092, arg_1093, arg_1094, arg_1095, arg_1096, arg_1097, arg_1098, arg_1099, arg_1100, arg_1101, arg_1102, arg_1103, arg_1104, arg_1105, arg_1106, arg_1107, arg_1108, arg_1109, arg_1110, arg_1111, arg_1112, arg_1113, arg_1114, arg_1115, arg_1116, arg_1117, arg_1118, arg_1119);
      }
      else {
        $common.warning(("unrecognized math mode: " + nvalue), undefined);
        return options;
      }
    }
  }
}
function updateMath(options, key, lvalue, value, ivalue, bvalue)  /* (options : options/options, key : string, lvalue : string, value : string, ivalue : int, bvalue : bool) -> options/options */  {
  var _x0 = ((key === "mathjax-ext") || (key === "mathjax-extension"));
  if (_x0) {
    var arg_1612 = options;
    var arg_1554 = $options.math(options);
    if ((value === "")) {
      var _x1 = "";
    }
    else {
      var _x1 = ($options.mjext($options.math(options)) + (";" + value));
    }
    var arg_1559 = _x1;
    var arg_1555 = undefined;
    var arg_1556 = undefined;
    var arg_1557 = undefined;
    var arg_1558 = undefined;
    var arg_1560 = undefined;
    var arg_1561 = undefined;
    var arg_1562 = undefined;
    var arg_1563 = undefined;
    var arg_1564 = undefined;
    var arg_1565 = undefined;
    var arg_1566 = undefined;
    var arg_1567 = undefined;
    var arg_1568 = undefined;
    var arg_1569 = undefined;
    var arg_1570 = undefined;
    var arg_1571 = undefined;
    var arg_1572 = undefined;
    var arg_1573 = undefined;
    var arg_1574 = undefined;
    var arg_1575 = undefined;
    var arg_1576 = undefined;
    var arg_1577 = undefined;
    var arg_1578 = undefined;
    var arg_1579 = undefined;
    var arg_1659 = $options._copy(arg_1554, arg_1555, arg_1556, arg_1557, arg_1558, arg_1559, arg_1560, arg_1561, arg_1562, arg_1563, arg_1564, arg_1565, arg_1566, arg_1567, arg_1568, arg_1569, arg_1570, arg_1571, arg_1572, arg_1573, arg_1574, arg_1575, arg_1576, arg_1577, arg_1578, arg_1579);
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
    var arg_1625 = undefined;
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
    var arg_1660 = undefined;
    var arg_1661 = undefined;
    var arg_1662 = undefined;
    var arg_1663 = undefined;
    var arg_1664 = undefined;
    var arg_1665 = undefined;
    var arg_1666 = undefined;
    var arg_1667 = undefined;
    var arg_1668 = undefined;
    var arg_1669 = undefined;
    var arg_1670 = undefined;
    var arg_1671 = undefined;
    var arg_1672 = undefined;
    var arg_1673 = undefined;
    var arg_1674 = undefined;
    var arg_1675 = undefined;
    return $options._copy_1(arg_1612, arg_1613, arg_1614, arg_1615, arg_1616, arg_1617, arg_1618, arg_1619, arg_1620, arg_1621, arg_1622, arg_1623, arg_1624, arg_1625, arg_1626, arg_1627, arg_1628, arg_1629, arg_1630, arg_1631, arg_1632, arg_1633, arg_1634, arg_1635, arg_1636, arg_1637, arg_1638, arg_1639, arg_1640, arg_1641, arg_1642, arg_1643, arg_1644, arg_1645, arg_1646, arg_1647, arg_1648, arg_1649, arg_1650, arg_1651, arg_1652, arg_1653, arg_1654, arg_1655, arg_1656, arg_1657, arg_1658, arg_1659, arg_1660, arg_1661, arg_1662, arg_1663, arg_1664, arg_1665, arg_1666, arg_1667, arg_1668, arg_1669, arg_1670, arg_1671, arg_1672, arg_1673, arg_1674, arg_1675);
  }
  else {
    if ((key === "math-mode")) {
      return setMathMode(options, value);
    }
    else {
      var _x1 = ((key === "math-static") || (key === "math-dir"));
      if (_x1) {
        var arg_2113 = options;
        var arg_2055 = $options.math(options);
        var _x2 = ((lvalue === "true")) ? "math" : value;
        var arg_2061 = _x2;
        var arg_2056 = undefined;
        var arg_2057 = undefined;
        var arg_2058 = undefined;
        var arg_2059 = undefined;
        var arg_2060 = undefined;
        var arg_2062 = undefined;
        var arg_2063 = undefined;
        var arg_2064 = undefined;
        var arg_2065 = undefined;
        var arg_2066 = undefined;
        var arg_2067 = undefined;
        var arg_2068 = undefined;
        var arg_2069 = undefined;
        var arg_2070 = undefined;
        var arg_2071 = undefined;
        var arg_2072 = undefined;
        var arg_2073 = undefined;
        var arg_2074 = undefined;
        var arg_2075 = undefined;
        var arg_2076 = undefined;
        var arg_2077 = undefined;
        var arg_2078 = undefined;
        var arg_2079 = undefined;
        var arg_2080 = undefined;
        var arg_2160 = $options._copy(arg_2055, arg_2056, arg_2057, arg_2058, arg_2059, arg_2060, arg_2061, arg_2062, arg_2063, arg_2064, arg_2065, arg_2066, arg_2067, arg_2068, arg_2069, arg_2070, arg_2071, arg_2072, arg_2073, arg_2074, arg_2075, arg_2076, arg_2077, arg_2078, arg_2079, arg_2080);
        var arg_2114 = undefined;
        var arg_2115 = undefined;
        var arg_2116 = undefined;
        var arg_2117 = undefined;
        var arg_2118 = undefined;
        var arg_2119 = undefined;
        var arg_2120 = undefined;
        var arg_2121 = undefined;
        var arg_2122 = undefined;
        var arg_2123 = undefined;
        var arg_2124 = undefined;
        var arg_2125 = undefined;
        var arg_2126 = undefined;
        var arg_2127 = undefined;
        var arg_2128 = undefined;
        var arg_2129 = undefined;
        var arg_2130 = undefined;
        var arg_2131 = undefined;
        var arg_2132 = undefined;
        var arg_2133 = undefined;
        var arg_2134 = undefined;
        var arg_2135 = undefined;
        var arg_2136 = undefined;
        var arg_2137 = undefined;
        var arg_2138 = undefined;
        var arg_2139 = undefined;
        var arg_2140 = undefined;
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
        var arg_2161 = undefined;
        var arg_2162 = undefined;
        var arg_2163 = undefined;
        var arg_2164 = undefined;
        var arg_2165 = undefined;
        var arg_2166 = undefined;
        var arg_2167 = undefined;
        var arg_2168 = undefined;
        var arg_2169 = undefined;
        var arg_2170 = undefined;
        var arg_2171 = undefined;
        var arg_2172 = undefined;
        var arg_2173 = undefined;
        var arg_2174 = undefined;
        var arg_2175 = undefined;
        var arg_2176 = undefined;
        return $options._copy_1(arg_2113, arg_2114, arg_2115, arg_2116, arg_2117, arg_2118, arg_2119, arg_2120, arg_2121, arg_2122, arg_2123, arg_2124, arg_2125, arg_2126, arg_2127, arg_2128, arg_2129, arg_2130, arg_2131, arg_2132, arg_2133, arg_2134, arg_2135, arg_2136, arg_2137, arg_2138, arg_2139, arg_2140, arg_2141, arg_2142, arg_2143, arg_2144, arg_2145, arg_2146, arg_2147, arg_2148, arg_2149, arg_2150, arg_2151, arg_2152, arg_2153, arg_2154, arg_2155, arg_2156, arg_2157, arg_2158, arg_2159, arg_2160, arg_2161, arg_2162, arg_2163, arg_2164, arg_2165, arg_2166, arg_2167, arg_2168, arg_2169, arg_2170, arg_2171, arg_2172, arg_2173, arg_2174, arg_2175, arg_2176);
      }
      else {
        if ((key === "math-scale")) {
          return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, undefined, undefined, undefined, undefined, ivalue, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
        }
        else {
          if ((key === "math-scale-svg")) {
            return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ivalue, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
          }
          else {
            if ((key === "math-scale-png")) {
              return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, undefined, undefined, undefined, undefined, undefined, ivalue, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
            }
            else {
              if ((key === "math-baseline")) {
                return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ivalue, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
              }
              else {
                if ((key === "math-dpi")) {
                  return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ivalue, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                }
                else {
                  var _x2 = ((key === "math-embed") || (key === "math-embed-limit"));
                  if (_x2) {
                    var arg_4067 = options;
                    var arg_4009 = $options.math(options);
                    if ((value === "")) {
                      var _x3 = 0;
                    }
                    else {
                      var _x3 = ((value === "true")) ? 1024 : $std_core.intMultiply(ivalue,1024);
                    }
                    var arg_4021 = _x3;
                    var arg_4010 = undefined;
                    var arg_4011 = undefined;
                    var arg_4012 = undefined;
                    var arg_4013 = undefined;
                    var arg_4014 = undefined;
                    var arg_4015 = undefined;
                    var arg_4016 = undefined;
                    var arg_4017 = undefined;
                    var arg_4018 = undefined;
                    var arg_4019 = undefined;
                    var arg_4020 = undefined;
                    var arg_4022 = undefined;
                    var arg_4023 = undefined;
                    var arg_4024 = undefined;
                    var arg_4025 = undefined;
                    var arg_4026 = undefined;
                    var arg_4027 = undefined;
                    var arg_4028 = undefined;
                    var arg_4029 = undefined;
                    var arg_4030 = undefined;
                    var arg_4031 = undefined;
                    var arg_4032 = undefined;
                    var arg_4033 = undefined;
                    var arg_4034 = undefined;
                    var arg_4114 = $options._copy(arg_4009, arg_4010, arg_4011, arg_4012, arg_4013, arg_4014, arg_4015, arg_4016, arg_4017, arg_4018, arg_4019, arg_4020, arg_4021, arg_4022, arg_4023, arg_4024, arg_4025, arg_4026, arg_4027, arg_4028, arg_4029, arg_4030, arg_4031, arg_4032, arg_4033, arg_4034);
                    var arg_4068 = undefined;
                    var arg_4069 = undefined;
                    var arg_4070 = undefined;
                    var arg_4071 = undefined;
                    var arg_4072 = undefined;
                    var arg_4073 = undefined;
                    var arg_4074 = undefined;
                    var arg_4075 = undefined;
                    var arg_4076 = undefined;
                    var arg_4077 = undefined;
                    var arg_4078 = undefined;
                    var arg_4079 = undefined;
                    var arg_4080 = undefined;
                    var arg_4081 = undefined;
                    var arg_4082 = undefined;
                    var arg_4083 = undefined;
                    var arg_4084 = undefined;
                    var arg_4085 = undefined;
                    var arg_4086 = undefined;
                    var arg_4087 = undefined;
                    var arg_4088 = undefined;
                    var arg_4089 = undefined;
                    var arg_4090 = undefined;
                    var arg_4091 = undefined;
                    var arg_4092 = undefined;
                    var arg_4093 = undefined;
                    var arg_4094 = undefined;
                    var arg_4095 = undefined;
                    var arg_4096 = undefined;
                    var arg_4097 = undefined;
                    var arg_4098 = undefined;
                    var arg_4099 = undefined;
                    var arg_4100 = undefined;
                    var arg_4101 = undefined;
                    var arg_4102 = undefined;
                    var arg_4103 = undefined;
                    var arg_4104 = undefined;
                    var arg_4105 = undefined;
                    var arg_4106 = undefined;
                    var arg_4107 = undefined;
                    var arg_4108 = undefined;
                    var arg_4109 = undefined;
                    var arg_4110 = undefined;
                    var arg_4111 = undefined;
                    var arg_4112 = undefined;
                    var arg_4113 = undefined;
                    var arg_4115 = undefined;
                    var arg_4116 = undefined;
                    var arg_4117 = undefined;
                    var arg_4118 = undefined;
                    var arg_4119 = undefined;
                    var arg_4120 = undefined;
                    var arg_4121 = undefined;
                    var arg_4122 = undefined;
                    var arg_4123 = undefined;
                    var arg_4124 = undefined;
                    var arg_4125 = undefined;
                    var arg_4126 = undefined;
                    var arg_4127 = undefined;
                    var arg_4128 = undefined;
                    var arg_4129 = undefined;
                    var arg_4130 = undefined;
                    return $options._copy_1(arg_4067, arg_4068, arg_4069, arg_4070, arg_4071, arg_4072, arg_4073, arg_4074, arg_4075, arg_4076, arg_4077, arg_4078, arg_4079, arg_4080, arg_4081, arg_4082, arg_4083, arg_4084, arg_4085, arg_4086, arg_4087, arg_4088, arg_4089, arg_4090, arg_4091, arg_4092, arg_4093, arg_4094, arg_4095, arg_4096, arg_4097, arg_4098, arg_4099, arg_4100, arg_4101, arg_4102, arg_4103, arg_4104, arg_4105, arg_4106, arg_4107, arg_4108, arg_4109, arg_4110, arg_4111, arg_4112, arg_4113, arg_4114, arg_4115, arg_4116, arg_4117, arg_4118, arg_4119, arg_4120, arg_4121, arg_4122, arg_4123, arg_4124, arg_4125, arg_4126, arg_4127, arg_4128, arg_4129, arg_4130);
                  }
                  else {
                    var _x3 = ((key === "math-document-class") || (key === "math-doc-class"));
                    if (_x3) {
                      return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, value, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                    }
                    else {
                      if ((key === "math-render")) {
                        return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, parseMathRender(options, lvalue, $options.render($options.math(options))), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                      }
                      else {
                        if ((key === "math-render-full")) {
                          return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, parseMathRender(options, lvalue, $options.renderFull($options.math(options))), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                        }
                        else {
                          if ((key === "math-svg-share-paths")) {
                            return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, bvalue, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                          }
                          else {
                            if ((key === "math-svg-precision")) {
                              return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $std_core.min(6, $std_core.max(ivalue, 0)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                            }
                            else {
                              if ((key === "math-svg-use-fonts")) {
                                var arg_5994 = options;
                                var arg_5936 = $options.math(options);
                                var _x4 = (bvalue) ? "woff,ah" : "none";
                                var arg_5953 = _x4;
                                var arg_5937 = undefined;
                                var arg_5938 = undefined;
                                var arg_5939 = undefined;
                                var arg_5940 = undefined;
                                var arg_5941 = undefined;
                                var arg_5942 = undefined;
                                var arg_5943 = undefined;
                                var arg_5944 = undefined;
                                var arg_5945 = undefined;
                                var arg_5946 = undefined;
                                var arg_5947 = undefined;
                                var arg_5948 = undefined;
                                var arg_5949 = undefined;
                                var arg_5950 = undefined;
                                var arg_5951 = undefined;
                                var arg_5952 = undefined;
                                var arg_5954 = undefined;
                                var arg_5955 = undefined;
                                var arg_5956 = undefined;
                                var arg_5957 = undefined;
                                var arg_5958 = undefined;
                                var arg_5959 = undefined;
                                var arg_5960 = undefined;
                                var arg_5961 = undefined;
                                var arg_6041 = $options._copy(arg_5936, arg_5937, arg_5938, arg_5939, arg_5940, arg_5941, arg_5942, arg_5943, arg_5944, arg_5945, arg_5946, arg_5947, arg_5948, arg_5949, arg_5950, arg_5951, arg_5952, arg_5953, arg_5954, arg_5955, arg_5956, arg_5957, arg_5958, arg_5959, arg_5960, arg_5961);
                                var arg_5995 = undefined;
                                var arg_5996 = undefined;
                                var arg_5997 = undefined;
                                var arg_5998 = undefined;
                                var arg_5999 = undefined;
                                var arg_6000 = undefined;
                                var arg_6001 = undefined;
                                var arg_6002 = undefined;
                                var arg_6003 = undefined;
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
                                var arg_6042 = undefined;
                                var arg_6043 = undefined;
                                var arg_6044 = undefined;
                                var arg_6045 = undefined;
                                var arg_6046 = undefined;
                                var arg_6047 = undefined;
                                var arg_6048 = undefined;
                                var arg_6049 = undefined;
                                var arg_6050 = undefined;
                                var arg_6051 = undefined;
                                var arg_6052 = undefined;
                                var arg_6053 = undefined;
                                var arg_6054 = undefined;
                                var arg_6055 = undefined;
                                var arg_6056 = undefined;
                                var arg_6057 = undefined;
                                return $options._copy_1(arg_5994, arg_5995, arg_5996, arg_5997, arg_5998, arg_5999, arg_6000, arg_6001, arg_6002, arg_6003, arg_6004, arg_6005, arg_6006, arg_6007, arg_6008, arg_6009, arg_6010, arg_6011, arg_6012, arg_6013, arg_6014, arg_6015, arg_6016, arg_6017, arg_6018, arg_6019, arg_6020, arg_6021, arg_6022, arg_6023, arg_6024, arg_6025, arg_6026, arg_6027, arg_6028, arg_6029, arg_6030, arg_6031, arg_6032, arg_6033, arg_6034, arg_6035, arg_6036, arg_6037, arg_6038, arg_6039, arg_6040, arg_6041, arg_6042, arg_6043, arg_6044, arg_6045, arg_6046, arg_6047, arg_6048, arg_6049, arg_6050, arg_6051, arg_6052, arg_6053, arg_6054, arg_6055, arg_6056, arg_6057);
                              }
                              else {
                                if ((key === "math-svg-font-format")) {
                                  return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, lvalue, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                                }
                                else {
                                  if ((key === "mathjax")) {
                                    if ((value !== "")) {
                                      var arg_6718 = options;
                                      var arg_6660 = $options.math(options);
                                      var arg_6661 = $options.Dynamic;
                                      var _x4 = ((lvalue === "true")) ? "default" : value;
                                      var arg_6664 = _x4;
                                      var arg_6662 = undefined;
                                      var arg_6663 = undefined;
                                      var arg_6665 = undefined;
                                      var arg_6666 = undefined;
                                      var arg_6667 = undefined;
                                      var arg_6668 = undefined;
                                      var arg_6669 = undefined;
                                      var arg_6670 = undefined;
                                      var arg_6671 = undefined;
                                      var arg_6672 = undefined;
                                      var arg_6673 = undefined;
                                      var arg_6674 = undefined;
                                      var arg_6675 = undefined;
                                      var arg_6676 = undefined;
                                      var arg_6677 = undefined;
                                      var arg_6678 = undefined;
                                      var arg_6679 = undefined;
                                      var arg_6680 = undefined;
                                      var arg_6681 = undefined;
                                      var arg_6682 = undefined;
                                      var arg_6683 = undefined;
                                      var arg_6684 = undefined;
                                      var arg_6685 = undefined;
                                      var arg_6765 = $options._copy(arg_6660, arg_6661, arg_6662, arg_6663, arg_6664, arg_6665, arg_6666, arg_6667, arg_6668, arg_6669, arg_6670, arg_6671, arg_6672, arg_6673, arg_6674, arg_6675, arg_6676, arg_6677, arg_6678, arg_6679, arg_6680, arg_6681, arg_6682, arg_6683, arg_6684, arg_6685);
                                      var arg_6719 = undefined;
                                      var arg_6720 = undefined;
                                      var arg_6721 = undefined;
                                      var arg_6722 = undefined;
                                      var arg_6723 = undefined;
                                      var arg_6724 = undefined;
                                      var arg_6725 = undefined;
                                      var arg_6726 = undefined;
                                      var arg_6727 = undefined;
                                      var arg_6728 = undefined;
                                      var arg_6729 = undefined;
                                      var arg_6730 = undefined;
                                      var arg_6731 = undefined;
                                      var arg_6732 = undefined;
                                      var arg_6733 = undefined;
                                      var arg_6734 = undefined;
                                      var arg_6735 = undefined;
                                      var arg_6736 = undefined;
                                      var arg_6737 = undefined;
                                      var arg_6738 = undefined;
                                      var arg_6739 = undefined;
                                      var arg_6740 = undefined;
                                      var arg_6741 = undefined;
                                      var arg_6742 = undefined;
                                      var arg_6743 = undefined;
                                      var arg_6744 = undefined;
                                      var arg_6745 = undefined;
                                      var arg_6746 = undefined;
                                      var arg_6747 = undefined;
                                      var arg_6748 = undefined;
                                      var arg_6749 = undefined;
                                      var arg_6750 = undefined;
                                      var arg_6751 = undefined;
                                      var arg_6752 = undefined;
                                      var arg_6753 = undefined;
                                      var arg_6754 = undefined;
                                      var arg_6755 = undefined;
                                      var arg_6756 = undefined;
                                      var arg_6757 = undefined;
                                      var arg_6758 = undefined;
                                      var arg_6759 = undefined;
                                      var arg_6760 = undefined;
                                      var arg_6761 = undefined;
                                      var arg_6762 = undefined;
                                      var arg_6763 = undefined;
                                      var arg_6764 = undefined;
                                      var arg_6766 = undefined;
                                      var arg_6767 = undefined;
                                      var arg_6768 = undefined;
                                      var arg_6769 = undefined;
                                      var arg_6770 = undefined;
                                      var arg_6771 = undefined;
                                      var arg_6772 = undefined;
                                      var arg_6773 = undefined;
                                      var arg_6774 = undefined;
                                      var arg_6775 = undefined;
                                      var arg_6776 = undefined;
                                      var arg_6777 = undefined;
                                      var arg_6778 = undefined;
                                      var arg_6779 = undefined;
                                      var arg_6780 = undefined;
                                      var arg_6781 = undefined;
                                      return $options._copy_1(arg_6718, arg_6719, arg_6720, arg_6721, arg_6722, arg_6723, arg_6724, arg_6725, arg_6726, arg_6727, arg_6728, arg_6729, arg_6730, arg_6731, arg_6732, arg_6733, arg_6734, arg_6735, arg_6736, arg_6737, arg_6738, arg_6739, arg_6740, arg_6741, arg_6742, arg_6743, arg_6744, arg_6745, arg_6746, arg_6747, arg_6748, arg_6749, arg_6750, arg_6751, arg_6752, arg_6753, arg_6754, arg_6755, arg_6756, arg_6757, arg_6758, arg_6759, arg_6760, arg_6761, arg_6762, arg_6763, arg_6764, arg_6765, arg_6766, arg_6767, arg_6768, arg_6769, arg_6770, arg_6771, arg_6772, arg_6773, arg_6774, arg_6775, arg_6776, arg_6777, arg_6778, arg_6779, arg_6780, arg_6781);
                                    }
                                    else {
                                      return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), $options.Static, undefined, undefined, "", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                                    }
                                  }
                                  else {
                                    return $optionsSandbox.updateSandbox(options, key, lvalue, value, ivalue);
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
 
// koka exports:
return { 'parseMathRender': parseMathRender, 'setMathMode': setMathMode, 'updateMath': updateMath };
});