// koka generated module: "entity"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './common', './std_log', './std_regex'], function($std_core, $common, $std_log, $std_regex) {
"use strict";
 
// koka declarations:
function Entity(ename, ecode, ecmd, emath)  /* (ename : string, ecode : int, ecmd : string, emath : bool) -> entity */  {
  return { ename: ename, ecode: ecode, ecmd: ecmd, emath: emath };
}
 
// Automatically generated. Retrieves the `ename` constructor field of the ":entity" type.
function ename(entity)  /* (entity : entity) -> string */  {
  return entity.ename;
}
 
// Automatically generated. Retrieves the `ecode` constructor field of the ":entity" type.
function ecode(entity)  /* (entity : entity) -> int */  {
  return entity.ecode;
}
 
// Automatically generated. Retrieves the `ecmd` constructor field of the ":entity" type.
function ecmd(entity)  /* (entity : entity) -> string */  {
  return entity.ecmd;
}
 
// Automatically generated. Retrieves the `emath` constructor field of the ":entity" type.
function emath(entity)  /* (entity : entity) -> bool */  {
  return entity.emath;
}
function _copy(_this, ename0, ecode0, ecmd0, emath0)  /* (entity, ename : ?string, ecode : ?int, ecmd : ?string, emath : ?bool) -> entity */  {
  var ename_46 = (ename0 !== undefined) ? ename0 : ename(_this);
  var ecode_52 = (ecode0 !== undefined) ? ecode0 : ecode(_this);
  var ecmd_58 = (ecmd0 !== undefined) ? ecmd0 : ecmd(_this);
  var emath_64 = (emath0 !== undefined) ? emath0 : emath(_this);
  return Entity(ename_46, ecode_52, ecmd_58, emath_64);
}
function _createEntity(ename0, ecode0, ecmd0, emath0)  /* (ename : string, ecode : int, ecmd : string, emath : ?bool) -> entity */  {
  var emath_77 = (emath0 !== undefined) ? emath0 : false;
  return Entity(ename0, ecode0, ecmd0, emath_77);
}
 
// The entity table
var entities = $std_core.conslist([_createEntity("quot", 34, "\"", false), _createEntity("dquot", 34, "\"", false), _createEntity("hash", 35, "\\#", false), _createEntity("dollar", 36, "\\$", false), _createEntity("perc", 37, "\\%", false), _createEntity("amp", 38, "\\&", false), _createEntity("apos", 39, "\'", false), _createEntity("lpar", 40, "(", false), _createEntity("rpar", 41, ")", false), _createEntity("ast", 42, "*", false), _createEntity("plus", 43, "+", false), _createEntity("fslash", 47, "/", false), _createEntity("lt", 60, "\\textless", false), _createEntity("gt", 62, "\\textgreater", false), _createEntity("bslash", 92, "\\textbackslash", false), _createEntity("backslash", 92, "\\textbackslash", false), _createEntity("caret", 94, "\\textasciicircum", false), _createEntity("underscore", 95, "\\_", false), _createEntity("grave", 96, "{`}", false), _createEntity("lcurly", 123, "\\{", false), _createEntity("bar", 124, "\\textbar", false), _createEntity("rcurly", 125, "\\}", false), _createEntity("tilde", 126, "\\textasciitilde", false), _createEntity("nbsp", 160, "~", false), _createEntity("iexcl", 161, "\\textexclamdown", false), _createEntity("cent", 162, "\\textcent", false), _createEntity("pound", 163, "\\pounds", false), _createEntity("curren", 164, "\\textcurrency", false), _createEntity("yen", 165, "\\textyen", false), _createEntity("brvbar", 166, "\\textbrokenbar", false), _createEntity("sect", 167, "\\S", false), _createEntity("uml", 168, "\\textasciidieresis", false), _createEntity("copy", 169, "\\copyright", false), _createEntity("ordf", 170, "\\textordfeminine", false), _createEntity("laquo", 171, "\\guillemotleft", false), _createEntity("not", 172, "\\textlnot", false), _createEntity("shy", 173, "\\-", false), _createEntity("reg", 174, "\\circledR", false), _createEntity("macr", 175, "\\textasciimacron", false), _createEntity("deg", 176, "\\textdegree", false), _createEntity("plusmn", 177, "\\textpm", false), _createEntity("sup2", 178, "\\texttwosuperior", false), _createEntity("sup3", 179, "\\textthreesuperior", false), _createEntity("acute", 180, "\\textasciiacute", false), _createEntity("micro", 181, "\\textmu", false), _createEntity("para", 182, "\\P", false), _createEntity("middot", 183, "\\textperiodcentered", false), _createEntity("cedil", 184, "\\c{}", false), _createEntity("sup1", 185, "\\textonesuperior", false), _createEntity("ordm", 186, "\\textordmasculine", false), _createEntity("raquo", 187, "\\guillemotright", false), _createEntity("frac14", 188, "\\textonequarter", false), _createEntity("frac12", 189, "\\textonehalf", false), _createEntity("frac34", 190, "\\textthreequarters", false), _createEntity("iquest", 191, "\\textquestiondown", false), _createEntity("Agrave", 192, "\\`{A}", false), _createEntity("Aacute", 193, "\\\'{A}", false), _createEntity("Acirc", 194, "\\^{A}", false), _createEntity("Atilde", 195, "\\~{A}", false), _createEntity("Auml", 196, "\\\"{A}", false), _createEntity("Aring", 197, "\\r{A}", false), _createEntity("AElig", 198, "\\AE", false), _createEntity("Ccedil", 199, "\\c{C}", false), _createEntity("Egrave", 200, "\\`{E}", false), _createEntity("Eacute", 201, "\\\'{E}", false), _createEntity("Ecirc", 202, "\\^{E}", false), _createEntity("Euml", 203, "\\\"{E}", false), _createEntity("Igrave", 204, "\\`{I}", false), _createEntity("Iacute", 205, "\\\'{I}", false), _createEntity("Icirc", 206, "\\c{I}", false), _createEntity("Iuml", 207, "\\\"{I}", false), _createEntity("ETH", 208, "\\DH", false), _createEntity("Ntilde", 209, "\\~{N}", false), _createEntity("Ograve", 210, "\\`{O}", false), _createEntity("Oacute", 211, "\\\'{O}", false), _createEntity("Ocirc", 212, "\\^{O}", false), _createEntity("Otilde", 213, "\\~{O}", false), _createEntity("Ouml", 214, "\\\"{O}", false), _createEntity("times", 215, "\\times", true), _createEntity("Oslash", 216, "\\O", false), _createEntity("Ugrave", 217, "\\`{U}", false), _createEntity("Uacute", 218, "\\\'{U}", false), _createEntity("Ucirc", 219, "\\^{U}", false), _createEntity("Uuml", 220, "\\\"{U}", false), _createEntity("Yacute", 221, "\\\'{Y}", false), _createEntity("THORN", 222, "\\TH", false), _createEntity("szlig", 223, "\\ss", false), _createEntity("agrave", 224, "\\`{a}", false), _createEntity("aacute", 225, "\\\'{a}", false), _createEntity("acirc", 226, "\\^{a}", false), _createEntity("atilde", 227, "\\~{a}", false), _createEntity("auml", 228, "\\\"{a}", false), _createEntity("aring", 229, "\\r{a}", false), _createEntity("aelig", 230, "\\ae", false), _createEntity("ccedil", 231, "\\c{c}", false), _createEntity("egrave", 232, "\\`{e}", false), _createEntity("eacute", 233, "\\\'{e}", false), _createEntity("ecirc", 234, "\\^{e}", false), _createEntity("euml", 235, "\\\"{e}", false), _createEntity("igrave", 236, "\\`{\\i}", false), _createEntity("iacute", 237, "\\\'{\\i}", false), _createEntity("icirc", 238, "\\^{\\i}", false), _createEntity("iuml", 239, "\\\"{\\i}", false), _createEntity("eth", 240, "\\dh", false), _createEntity("ntilde", 241, "\\~{n}", false), _createEntity("ograve", 242, "\\`{o}", false), _createEntity("oacute", 243, "\\\'{o}", false), _createEntity("ocirc", 244, "\\^{o}", false), _createEntity("otilde", 245, "\\~{o}", false), _createEntity("ouml", 246, "\\\"{o}", false), _createEntity("divide", 247, "\\div", true), _createEntity("oslash", 248, "\\o", false), _createEntity("ugrave", 249, "\\`{u}", false), _createEntity("uacute", 250, "\\\'{u}", false), _createEntity("ucirc", 251, "\\^{u}", false), _createEntity("uuml", 252, "\\\"{u}", false), _createEntity("yacute", 253, "\\\'{y}", false), _createEntity("thorn", 254, "\\th", false), _createEntity("yuml", 255, "\\\"{y}", false), _createEntity("Amacron", 256, "\\={A}", false), _createEntity("amacron", 257, "\\={a}", false), _createEntity("Abreve", 258, "\\u{A}", false), _createEntity("abreve", 259, "\\u{a}", false), _createEntity("Aogonek", 260, "\\k{A}", false), _createEntity("aogonek", 261, "\\k{a}", false), _createEntity("Cacute", 262, "\\\'{C}", false), _createEntity("cacute", 263, "\\\'{c}", false), _createEntity("Ccirc", 264, "\\^{C}", false), _createEntity("ccirc", 265, "\\^{c}", false), _createEntity("Cdota", 266, "\\.{C}", false), _createEntity("cdota", 267, "\\.{c}", false), _createEntity("Ccaron", 268, "\\v{C}", false), _createEntity("ccaron", 269, "\\v{c}", false), _createEntity("Dcaron", 270, "\\v{D}", false), _createEntity("dcaron", 271, "\\v{d}", false), _createEntity("Dstroke", 272, "\\DH", false), _createEntity("dstroke", 273, "\\dh", false), _createEntity("Emacron", 274, "\\={E}", false), _createEntity("emacron", 275, "\\={e}", false), _createEntity("Ebreve", 276, "\\u{E}", false), _createEntity("ebreve", 277, "\\u{e}", false), _createEntity("Edota", 278, "\\.{E}", false), _createEntity("edota", 279, "\\.{e}", false), _createEntity("Eogonek", 280, "\\k{E}", false), _createEntity("eogonek", 281, "\\k{e}", false), _createEntity("Ecaron", 282, "\\v{E}", false), _createEntity("ecaron", 283, "\\v{e}", false), _createEntity("Gcirc", 284, "\\^{G}", false), _createEntity("gcirc", 285, "\\^{g}", false), _createEntity("Gbreve", 286, "\\u{G}", false), _createEntity("gbreve", 287, "\\u{g}", false), _createEntity("Gdota", 288, "\\.{G}", false), _createEntity("gdota", 289, "\\.{g}", false), _createEntity("Gcedil", 290, "\\c{G}", false), _createEntity("gcedil", 291, "\\c{g}", false), _createEntity("Hcirc", 292, "\\^{H}", false), _createEntity("hcirc", 293, "\\^{h}", false), _createEntity("Hstroke", 294, "{H}", false), _createEntity("hstroke", 295, "{h}", false), _createEntity("Itilde", 296, "\\~{I}", false), _createEntity("itilde", 297, "\\~{\\i}", false), _createEntity("Imacron", 298, "\\={I}", false), _createEntity("imacron", 299, "\\={\\i}", false), _createEntity("Ibreve", 300, "\\u{I}", false), _createEntity("ibreve", 301, "\\u{i}", false), _createEntity("Iogonek", 302, "\\k{I}", false), _createEntity("iogonek", 303, "\\k{\\i}", false), _createEntity("Idota", 304, "\\.{I}", false), _createEntity("idotless", 305, "\\i", false), _createEntity("IJ", 306, "IJ", false), _createEntity("ij", 307, "ij", false), _createEntity("Jcirc", 308, "\\^{J}", false), _createEntity("jcirc", 309, "\\^{j}", false), _createEntity("Kcedil", 310, "\\c{K}", false), _createEntity("kcedil", 311, "\\c{k}", false), _createEntity("Lacute", 313, "\\\'{L}", false), _createEntity("lacute", 314, "\\\'{l}", false), _createEntity("Lcedil", 315, "\\c{L}", false), _createEntity("lcedil", 316, "\\c{l}", false), _createEntity("Lcaron", 317, "\\v{L}", false), _createEntity("lcaron", 318, "\\v{l}", false), _createEntity("Lstroke", 321, "\\L", false), _createEntity("lstroke", 322, "\\l", false), _createEntity("Nacute", 323, "\\\'{N}", false), _createEntity("nacute", 324, "\\\'{n}", false), _createEntity("Ncedil", 325, "\\c{N}", false), _createEntity("ncedil", 326, "\\c{n}", false), _createEntity("Ncaron", 327, "\\v{N}", false), _createEntity("ncaron", 328, "\\v{n}", false), _createEntity("napos", 329, "{\'n}", false), _createEntity("Neng", 330, "\\NG", false), _createEntity("neng", 331, "\\ng", false), _createEntity("Omacron", 332, "\\={O}", false), _createEntity("omacron", 333, "\\={o}", false), _createEntity("Obreve", 334, "\\u{O}", false), _createEntity("obreve", 335, "\\u{o}", false), _createEntity("Odacute", 336, "\\H{O}", false), _createEntity("odacute", 337, "\\H{o}", false), _createEntity("OElig", 338, "\\OE", false), _createEntity("oelig", 339, "\\oe", false), _createEntity("Racute", 340, "\\\'{R}", false), _createEntity("racute", 341, "\\\'{r}", false), _createEntity("Rcedil", 342, "\\c{R}", false), _createEntity("rcedil", 343, "\\c{r}", false), _createEntity("Rcaron", 344, "\\v{R}", false), _createEntity("rcaron", 345, "\\v{r}", false), _createEntity("Sacute", 346, "\\\'{S}", false), _createEntity("sacute", 347, "\\\'{s}", false), _createEntity("Scirc", 348, "\\^{S}", false), _createEntity("scirc", 349, "\\^{s}", false), _createEntity("Scedil", 350, "\\c{S}", false), _createEntity("scedil", 351, "\\c{s}", false), _createEntity("Scaron", 352, "\\u{S}", false), _createEntity("scaron", 353, "\\u{s}", false), _createEntity("Tcedil", 354, "\\c{T}", false), _createEntity("tcedil", 355, "\\c{t}", false), _createEntity("Tcaron", 356, "\\v{T}", false), _createEntity("tcaron", 357, "\\v{t}", false), _createEntity("Tstroke", 358, "\\mdUnicode{358}", false), _createEntity("tstroke", 359, "\\mdUnicode{359}", false), _createEntity("Utilde", 360, "\\~{U}", false), _createEntity("utilde", 361, "\\~{u}", false), _createEntity("Umacron", 362, "\\={U}", false), _createEntity("umacron", 363, "\\={u}", false), _createEntity("Ubreve", 364, "\\u{U}", false), _createEntity("ubreve", 365, "\\u{u}", false), _createEntity("Uring", 366, "\\r{U}", false), _createEntity("uring", 367, "\\r{u}", false), _createEntity("Udacute", 368, "\\H{U}", false), _createEntity("udacute", 369, "\\H{u}", false), _createEntity("Uogonek", 370, "\\k{U}", false), _createEntity("uogonek", 371, "\\k{u}", false), _createEntity("Wcirc", 372, "\\^{W}", false), _createEntity("wcirc", 373, "\\^{w}", false), _createEntity("Ycirc", 374, "\\^{Y}", false), _createEntity("ycirc", 375, "\\^{y}", false), _createEntity("Yuml", 376, "\\\"{Y}", false), _createEntity("Zacute", 377, "\\\'{Z}", false), _createEntity("zacute", 378, "\\\'{z}", false), _createEntity("Zdota", 379, "\\.{Z}", false), _createEntity("zdota", 380, "\\.{z}", false), _createEntity("Zcaron", 381, "\\v{Z}", false), _createEntity("zcaron", 382, "\\v{z}", false), _createEntity("slong", 383, "\\mdUnicode{383}", false), _createEntity("fnof", 402, "\\textit{f}", false), _createEntity("circ", 710, "\\textasciicircum", false), _createEntity("tilde", 732, "\\textasciitilde", false), _createEntity("lowline", 818, "\\mdlowline", false), _createEntity("Alpha", 913, "A", false), _createEntity("Beta", 914, "B", false), _createEntity("Gamma", 915, "\\Gamma", true), _createEntity("Delta", 916, "\\Delta", true), _createEntity("Epsilon", 917, "E", false), _createEntity("Zeta", 918, "Z", false), _createEntity("Eta", 919, "H", false), _createEntity("Theta", 920, "\\Theta", true), _createEntity("Iota", 921, "I", false), _createEntity("Kappa", 922, "K", false), _createEntity("Lambda", 923, "\\Lambda", true), _createEntity("Mu", 924, "M", false), _createEntity("Nu", 925, "N", false), _createEntity("Xi", 926, "\\Xi", true), _createEntity("Omicron", 927, "O", false), _createEntity("Pi", 928, "\\Pi", true), _createEntity("Rho", 929, "P", false), _createEntity("Sigma", 931, "\\Sigma", true), _createEntity("Tau", 932, "T", false), _createEntity("Upsilon", 933, "\\Upsilon", true), _createEntity("Phi", 934, "\\Phi", true), _createEntity("Chi", 935, "X", false), _createEntity("Psi", 936, "\\Psi", true), _createEntity("Omega", 937, "\\Omega", true), _createEntity("alpha", 945, "\\alpha", true), _createEntity("beta", 946, "\\beta", true), _createEntity("gamma", 947, "\\gamma", true), _createEntity("delta", 948, "\\delta", true), _createEntity("epsilon", 949, "\\epsilon", true), _createEntity("zeta", 950, "\\zeta", true), _createEntity("eta", 951, "\\eta", true), _createEntity("theta", 952, "\\theta", true), _createEntity("iota", 953, "\\iota", true), _createEntity("kappa", 954, "\\kappa", true), _createEntity("lambda", 955, "\\lambda", true), _createEntity("mu", 956, "\\mu", true), _createEntity("nu", 957, "\\nu", true), _createEntity("xi", 958, "\\xi", true), _createEntity("omicron", 959, "o", true), _createEntity("pi", 960, "\\pi", true), _createEntity("rho", 961, "\\rho", true), _createEntity("sigmaf", 962, "\\varsigma", true), _createEntity("sigma", 963, "\\sigma", true), _createEntity("tau", 964, "\\tau", true), _createEntity("upsilon", 965, "\\upsilon", true), _createEntity("phi", 966, "\\varphi", true), _createEntity("chi", 967, "\\chi", true), _createEntity("psi", 968, "\\psi", true), _createEntity("omega", 969, "\\omega", true), _createEntity("thetasym", 977, "\\vartheta", true), _createEntity("upsih", 978, "\\Upsilon", true), _createEntity("phisym", 981, "\\phi", true), _createEntity("piv", 982, "\\varpi", true), _createEntity("ensp", 8194, "\\hspace*{0.5em}", false), _createEntity("emsp", 8195, "\\hspace*{1em}", false), _createEntity("quad", 8195, "\\quad", false), _createEntity("thicksp", 8196, "\\;", true), _createEntity("medsp", 8197, "\\:", true), _createEntity("thinsp", 8201, "\\,", true), _createEntity("zwsp", 8203, "\\hspace{0pt}", false), _createEntity("strut", 8203, "\\strut", false), _createEntity("pagebreak", 12, "\\newpage", false), _createEntity("zwnj", 8204, "{}", false), _createEntity("zwj", 8205, "", false), _createEntity("lrm", 8206, "", false), _createEntity("rlm", 8207, "", false), _createEntity("nbdash", 8209, "\\nbdash", false), _createEntity("ndash", 8211, "\\textendash", false), _createEntity("mdash", 8212, "\\textemdash", false), _createEntity("lsquo", 8216, "\\textquoteleft", false), _createEntity("rsquo", 8217, "\\textquoteright", false), _createEntity("sbquo", 8218, "\\quotesinglbase", false), _createEntity("ldquo", 8220, "\\textquotedblleft", false), _createEntity("rdquo", 8221, "\\textquotedblright", false), _createEntity("bdquo", 8222, "\\quotedblbase", false), _createEntity("dagger", 8224, "\\dag", true), _createEntity("Dagger", 8225, "\\ddag", true), _createEntity("bull", 8226, "\\textbullet", false), _createEntity("hellip", 8230, "\\dots", false), _createEntity("permil", 8240, "\\textperthousand", false), _createEntity("prime", 8242, "\\prime", true), _createEntity("Prime", 8243, "\\prime\\prime", true), _createEntity("lsaquo", 8249, "\\guilsinglleft", false), _createEntity("rsaquo", 8250, "\\guilsinglright", false), _createEntity("oline", 8254, "-", false), _createEntity("frasl", 8260, "\\textfraction", false), _createEntity("euro", 8364, "\\texteuro", false), _createEntity("image", 8465, "\\Im", true), _createEntity("weierp", 8472, "\\wp", true), _createEntity("real", 8476, "\\Re", true), _createEntity("CC", 8450, "\\mathbb{C}", true), _createEntity("NN", 8469, "\\mathbb{N}", true), _createEntity("PP", 8473, "\\mathbb{P}", true), _createEntity("QQ", 8474, "\\mathbb{Q}", true), _createEntity("RR", 8477, "\\mathbb{R}", true), _createEntity("ZZ", 8484, "\\mathbb{Z}", true), _createEntity("trade", 8482, "\\texttrademark", false), _createEntity("alefsym", 8501, "\\aleph", true), _createEntity("larr", 8592, "\\leftarrow", true), _createEntity("uarr", 8593, "\\uparrow", true), _createEntity("rarr", 8594, "\\rightarrow", true), _createEntity("darr", 8595, "\\downarrow", true), _createEntity("harr", 8596, "\\leftrightarrow", true), _createEntity("crarr", 8629, "\\hookleftarrow", true), _createEntity("lArr", 8656, "\\Leftarrow", true), _createEntity("uArr", 8657, "\\Uparrow", true), _createEntity("rArr", 8658, "\\Rightarrow", true), _createEntity("dArr", 8659, "\\Downarrow", true), _createEntity("hArr", 8660, "\\Leftrightarrow", true), _createEntity("forall", 8704, "\\forall", true), _createEntity("part", 8706, "\\partial", true), _createEntity("exist", 8707, "\\exists", true), _createEntity("empty", 8709, "\\varnothing", true), _createEntity("nabla", 8711, "\\nabla", true), _createEntity("isin", 8712, "\\in", true), _createEntity("notin", 8713, "\\notin", true), _createEntity("ni", 8715, "\\ni", true), _createEntity("prod", 8719, "\\prod", true), _createEntity("sum", 8721, "\\sum", true), _createEntity("minus", 8722, "{-}", true), _createEntity("lowast", 8727, "\\ast", true), _createEntity("radic", 8730, "\\surd", true), _createEntity("prop", 8733, "\\propto", true), _createEntity("infin", 8734, "\\infty", true), _createEntity("ang", 8736, "\\angle", true), _createEntity("and", 8743, "\\wedge", true), _createEntity("or", 8744, "\\vee", true), _createEntity("cap", 8745, "\\cap", true), _createEntity("cup", 8746, "\\cup", true), _createEntity("int", 8747, "\\intop", true), _createEntity("there4", 8756, "\\therefore", true), _createEntity("sim", 8764, "\\sim", true), _createEntity("cong", 8773, "\\cong", true), _createEntity("asymp", 8776, "\\approx", true), _createEntity("ne", 8800, "\\neq", true), _createEntity("equiv", 8801, "\\equiv", true), _createEntity("le", 8804, "\\leq", true), _createEntity("ge", 8805, "\\geq", true), _createEntity("sub", 8834, "\\subset", true), _createEntity("sup", 8835, "\\supset", true), _createEntity("nsub", 8836, "\\subsetneq", true), _createEntity("sube", 8838, "\\subseteq", true), _createEntity("supe", 8839, "\\supseteq", true), _createEntity("oplus", 8853, "\\oplus", true), _createEntity("otimes", 8855, "\\otimes", true), _createEntity("perp", 8869, "\\bot", true), _createEntity("sdot", 8901, "\\cdot", true), _createEntity("vellip", 8942, "\\vdots", true), _createEntity("lceil", 8968, "\\lceil", true), _createEntity("rceil", 8969, "\\rceil", true), _createEntity("lfloor", 8970, "\\lfloor", true), _createEntity("rfloor", 8971, "\\rfloor", true), _createEntity("lang", 9001, "\\langle", true), _createEntity("rang", 9002, "\\rangle", true), _createEntity("loz", 9674, "\\lozenge", true), _createEntity("spades", 9824, "\\spadesuit", true), _createEntity("clubs", 9827, "\\clubsuit", true), _createEntity("hearts", 9829, "\\heartsuit", true), _createEntity("diams", 9830, "\\diamondsuit", true), _createEntity("hooklarr", 8617, "\\hookleftarrow", true), _createEntity("bbox", 8718, "\\blacksquare", true), _createEntity("box", 9633, "\\Box", true), _createEntity("ballotbox", 9744, "\\Box", true), _createEntity("ballotc", 9745, "\\mdUnicode{9745}", false), _createEntity("ballotx", 9746, "\\mdUnicode{9746}", false), _createEntity("checkmark", 10003, "\\ding{51}", false), _createEntity("bcheckmark", 10004, "\\ding{52}", false), _createEntity("xmark", 10007, "\\ding{55}", false), _createEntity("bxmark", 10008, "\\ding{56}", false), _createEntity("mglass", 128270, "\\mdUnicode{128270}", false), _createEntity("circled1", 9312, "\\ding{192}", false), _createEntity("circled2", 9313, "\\ding{193}", false), _createEntity("circled3", 9314, "\\ding{194}", false), _createEntity("circled4", 9315, "\\ding{195}", false), _createEntity("circled5", 9316, "\\ding{196}", false), _createEntity("circled6", 9317, "\\ding{197}", false), _createEntity("circled7", 9318, "\\ding{198}", false), _createEntity("circled8", 9319, "\\ding{199}", false), _createEntity("circled9", 9320, "\\ding{200}", false), _createEntity("circled10", 9321, "\\ding{201}", false)], $std_core.Nil);
var rxSafeEnd = $std_regex.regex("[^A-Za-z@]$", undefined, undefined);
function entityCmd(entity)  /* (entity : entity) -> string */  {
  var cmd = ecmd(entity);
  if (emath(entity)) {
    return ("\\ensuremath{" + (cmd + "}"));
  }
  else {
    return ($std_regex.contains(cmd, rxSafeEnd, undefined)) ? cmd : (cmd + "{}");
  }
}
function entityNameAsNum(name)  /* (name : string) -> maybe<string> */  {
  if ((name === "nl")) {
    return $std_core.Just("\n");
  }
  else {
    if ((name === "br")) {
      return $std_core.Just("\\\n");
    }
    else {
      if ((name === "null")) {
        return $std_core.Just("");
      }
      else {
        var _x0 = $std_core.find(entities, function(e  /* entity */ ) {  return (ename(e) === name);});
        if (_x0 == null) {
          return $std_core.Nothing;
        }
        else {
          return $std_core.Just(("&#" + ($std_core.show_1(ecode(_x0.unJust)) + ";")));
        }
      }
    }
  }
}
function entityNameToNum(name)  /* (name : string) -> string */  {
  var _x0 = entityNameAsNum(name);
  if (_x0 != null) {
    return _x0.unJust;
  }
  else {
    $common.warning(("unknown entity name: &" + (name + ";")), undefined);
    return ("&" + (name + ";"));
  }
}
 
// Convert an html entity to a unicode number
function entityToNum(entity)  /* (entity : string) -> maybe<int> */  {
  if ($std_core.startsWith(entity, "#")) {
    var _x0 = ($std_core.startsWith(entity, "#x") || $std_core.startsWith(entity, "#X"));
    if (_x0) {
      var num = ("0" + ((entity).substr(1)));
    }
    else {
      var num = ((entity).substr(1));
    }
    return $std_core.parseInt(num, undefined);
  }
  else {
    var _x0 = $std_core.find(entities, function(e  /* entity */ ) {  return (ename(e) === entity);});
    if (_x0 == null) {
      return $std_core.Nothing;
    }
    else {
      return $std_core.Just(ecode(_x0.unJust));
    }
  }
}
 
// Convert an html entity to a LaTeX command.
// Takes as input the string between the `&` and `;` of a HTML entity.
function entityToTex(entity)  /* (entity : string) -> string */  {
  if ($std_core.startsWith(entity, "#")) {
    var _x0 = ($std_core.startsWith(entity, "#x") || $std_core.startsWith(entity, "#X"));
    if (_x0) {
      var num = ("0" + ((entity).substr(1)));
    }
    else {
      var num = ((entity).substr(1));
    }
    var i = $std_core.maybe($std_core.parseInt(num, undefined), $std_core._tilde_(1), $std_core.id);
    var _x0 = $std_core.find(entities, function(e  /* entity */ ) {  return ecode(e) === i;});
    if (_x0 == null) {
      if (i > 127) {
        $common.warning(("unknown unicode point: &#" + (num + ";")), "texwarning");
      }
      else {
        $std_core._unit_;
      }
      return ("\\mdUnicode{" + ($std_core.show_1(i) + "}"));
    }
    else {
      return entityCmd(_x0.unJust);
    }
  }
  else {
    var _x1 = $std_core.find(entities, function(e1  /* entity */ ) {  return (ename(e1) === entity);});
    if (_x1 == null) {
      $common.warning(("unknown entity: &" + (entity + ";")), "texwarning");
      return ("\\mdEntity{" + (entity + "}"));
    }
    else {
      return entityCmd(_x1.unJust);
    }
  }
}
function logEntities()  /* () -> () */  {
  $std_log.log("entities", "{\"name\": \"nl\", \"value\":\"&nl;\", \"code\":10}");
  $std_log.log("entities", "{\"name\": \"br\", \"value\":\"&br;\"}");
  $std_log.log("entities", "{\"name\": \"null\", \"value\":\"&null;\"}");
  $std_log.log("entities", "{\"name\": \"&\", \"value\":\"&&;\", \"code\":38}");
  return $std_core.foreach(entities, function(ent  /* entity */ ) {  return $std_log.log("entities", ("{\"name\":" + ($common.json(ename(ent)) + (",\"value\":" + ($common.json(("&" + (ename(ent) + ";"))) + (",\"code\":" + ($std_core.show_1(ecode(ent)) + "}")))))));});
}
 
// Translate a TeX command to an entity (or empty if unknown)
function texCmdToEntity(cmd)  /* (cmd : string) -> string */  {
  var _x0 = $std_core.find(entities, function(e  /* entity */ ) {  return (ecmd(e) === cmd);});
  if (_x0 == null) {
    return "";
  }
  else {
    return ("&" + (ename(_x0.unJust) + ";"));
  }
}
 
// koka exports:
return { 'ename': ename, 'ecode': ecode, 'ecmd': ecmd, 'emath': emath, '_copy': _copy, '_createEntity': _createEntity, 'entities': entities, 'rxSafeEnd': rxSafeEnd, 'entityCmd': entityCmd, 'entityNameAsNum': entityNameAsNum, 'entityNameToNum': entityNameToNum, 'entityToNum': entityToNum, 'entityToTex': entityToTex, 'logEntities': logEntities, 'texCmdToEntity': texCmdToEntity };
});