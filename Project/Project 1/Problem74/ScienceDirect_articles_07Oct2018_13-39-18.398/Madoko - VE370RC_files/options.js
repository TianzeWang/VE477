// koka generated module: "options"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_log', './std_env', './std_dict', './std_flags', './std_regex', './std_string', './std_path', './common'], function($std_core, $std_log, $std_env, $std_dict, $std_flags, $std_regex, $std_string, $std_path, $common) {
"use strict";
 
// koka declarations:
function Bst(styleName, locale)  /* (styleName : string, locale : string) -> bibstyle */  {
  return { _tag: 1, styleName: styleName, locale: locale };
}
function Csl(styleName, locale)  /* (styleName : string, locale : string) -> bibstyle */  {
  return { _tag: 2, styleName: styleName, locale: locale };
}
var Static = 1;  /* mathmode */ 
var Dynamic = 2;  /* mathmode */ 
function Mathoptions(mode, render, renderFull, mathjax, mjext, imgDir, scale, scalePng, scaleSvg, dpi, baseline, embedLimit, docClass, svgShare, svgPrec, svgDefs, svgFontFormat, dvipng, dvisvg, latex, latexFull, dvips, ps2pdf, convert, dim)  /* (mode : mathmode, render : maybe<common/mathrender>, renderFull : maybe<common/mathrender>, mathjax : string, mjext : string, imgDir : string, scale : int, scalePng : int, scaleSvg : int, dpi : int, baseline : int, embedLimit : int, docClass : string, svgShare : bool, svgPrec : int, svgDefs : string, svgFontFormat : string, dvipng : string, dvisvg : string, latex : string, latexFull : string, dvips : string, ps2pdf : string, convert : string, dim : std/dict/dict<common/mathinfo>) -> mathoptions */  {
  return { mode: mode, render: render, renderFull: renderFull, mathjax: mathjax, mjext: mjext, imgDir: imgDir, scale: scale, scalePng: scalePng, scaleSvg: scaleSvg, dpi: dpi, baseline: baseline, embedLimit: embedLimit, docClass: docClass, svgShare: svgShare, svgPrec: svgPrec, svgDefs: svgDefs, svgFontFormat: svgFontFormat, dvipng: dvipng, dvisvg: dvisvg, latex: latex, latexFull: latexFull, dvips: dvips, ps2pdf: ps2pdf, convert: convert, dim: dim };
}
function Options(version, bench, verbose, verboseMaxLine, pedantic, sanitize, xmp, full, tex, pdf, texzip, rebuild, sandbox, prelude, title, css, scripts, scriptsx, htmlHeader, cssHeader, jsHeader, htmlFooter, jsFooter, htmlMeta, texHeader, texHeaderx, texDocHeader, texDocHeaderx, texFooter, texSectionNum, bibStyle, bib, locale, packages, packagesx, docClass, citestyle, citeAll, tocDepth, headingDepth, headingBase, sectionMax, sectionBase, starBold, prettyAlign, logo, math, highlight, hilitelang, pdflatex, bibtex, latex, processTimeout, zip, metadata, embedinfos, embedLimit, lineNo, lineNoWeb, copyStyles, lineMap, extractStart, extractEnd)  /* (version : string, bench : bool, verbose : int, verboseMaxLine : int, pedantic : bool, sanitize : bool, xmp : bool, full : maybe<bool>, tex : bool, pdf : bool, texzip : bool, rebuild : bool, sandbox : bool, prelude : string, title : string, css : string, scripts : string, scriptsx : string, htmlHeader : string, cssHeader : string, jsHeader : string, htmlFooter : string, jsFooter : string, htmlMeta : string, texHeader : string, texHeaderx : string, texDocHeader : string, texDocHeaderx : string, texFooter : string, texSectionNum : bool, bibStyle : bibstyle, bib : string, locale : string, packages : string, packagesx : string, docClass : string, citestyle : maybe<common/citestyle>, citeAll : bool, tocDepth : int, headingDepth : int, headingBase : int, sectionMax : int, sectionBase : int, starBold : bool, prettyAlign : int, logo : bool, math : mathoptions, highlight : bool, hilitelang : string, pdflatex : string, bibtex : string, latex : string, processTimeout : int, zip : string, metadata : metadata, embedinfos : std/dict/dict<common/embedinfo>, embedLimit : int, lineNo : int, lineNoWeb : bool, copyStyles : bool, lineMap : common/lineMap, extractStart : string, extractEnd : string) -> options */  {
  return { version: version, bench: bench, verbose: verbose, verboseMaxLine: verboseMaxLine, pedantic: pedantic, sanitize: sanitize, xmp: xmp, full: full, tex: tex, pdf: pdf, texzip: texzip, rebuild: rebuild, sandbox: sandbox, prelude: prelude, title: title, css: css, scripts: scripts, scriptsx: scriptsx, htmlHeader: htmlHeader, cssHeader: cssHeader, jsHeader: jsHeader, htmlFooter: htmlFooter, jsFooter: jsFooter, htmlMeta: htmlMeta, texHeader: texHeader, texHeaderx: texHeaderx, texDocHeader: texDocHeader, texDocHeaderx: texDocHeaderx, texFooter: texFooter, texSectionNum: texSectionNum, bibStyle: bibStyle, bib: bib, locale: locale, packages: packages, packagesx: packagesx, docClass: docClass, citestyle: citestyle, citeAll: citeAll, tocDepth: tocDepth, headingDepth: headingDepth, headingBase: headingBase, sectionMax: sectionMax, sectionBase: sectionBase, starBold: starBold, prettyAlign: prettyAlign, logo: logo, math: math, highlight: highlight, hilitelang: hilitelang, pdflatex: pdflatex, bibtex: bibtex, latex: latex, processTimeout: processTimeout, zip: zip, metadata: metadata, embedinfos: embedinfos, embedLimit: embedLimit, lineNo: lineNo, lineNoWeb: lineNoWeb, copyStyles: copyStyles, lineMap: lineMap, extractStart: extractStart, extractEnd: extractEnd };
}
function CommandOptions(showVersion, convertTex, outputDir, installDir, inputs, options)  /* (showVersion : bool, convertTex : bool, outputDir : string, installDir : string, inputs : list<string>, options : options) -> commandOptions */  {
  return { showVersion: showVersion, convertTex: convertTex, outputDir: outputDir, installDir: installDir, inputs: inputs, options: options };
}
 
// Automatically generated. Retrieves the `styleName` constructor field of the ":bibstyle" type.
function styleName(bibstyle0)  /* (bibstyle : bibstyle) -> string */  {
  return (bibstyle0._tag === 1) ? bibstyle0.styleName : bibstyle0.styleName;
}
 
// Automatically generated. Retrieves the `locale` constructor field of the ":bibstyle" type.
function locale(bibstyle0)  /* (bibstyle : bibstyle) -> string */  {
  return (bibstyle0._tag === 1) ? bibstyle0.locale : bibstyle0.locale;
}
 
// Automatically generated. Tests for the "Bst" constructor of the ":bibstyle" type.
function isBst(bibstyle0)  /* (bibstyle : bibstyle) -> bool */  {
  return (bibstyle0._tag === 1);
}
 
// Automatically generated. Tests for the "Csl" constructor of the ":bibstyle" type.
function isCsl(bibstyle0)  /* (bibstyle : bibstyle) -> bool */  {
  return (bibstyle0._tag === 2);
}
 
// Automatically generated. Tests for the "Static" constructor of the ":mathmode" type.
function isStatic(mathmode)  /* (mathmode : mathmode) -> bool */  {
  return (mathmode === 1);
}
 
// Automatically generated. Tests for the "Dynamic" constructor of the ":mathmode" type.
function isDynamic(mathmode)  /* (mathmode : mathmode) -> bool */  {
  return (mathmode === 2);
}
 
// Automatically generated. Retrieves the `mode` constructor field of the ":mathoptions" type.
function mode(mathoptions)  /* (mathoptions : mathoptions) -> mathmode */  {
  return mathoptions.mode;
}
 
// Automatically generated. Retrieves the `render` constructor field of the ":mathoptions" type.
function render(mathoptions)  /* (mathoptions : mathoptions) -> maybe<common/mathrender> */  {
  return mathoptions.render;
}
 
// Automatically generated. Retrieves the `renderFull` constructor field of the ":mathoptions" type.
function renderFull(mathoptions)  /* (mathoptions : mathoptions) -> maybe<common/mathrender> */  {
  return mathoptions.renderFull;
}
 
// Automatically generated. Retrieves the `mathjax` constructor field of the ":mathoptions" type.
function mathjax(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.mathjax;
}
 
// Automatically generated. Retrieves the `mjext` constructor field of the ":mathoptions" type.
function mjext(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.mjext;
}
 
// Automatically generated. Retrieves the `imgDir` constructor field of the ":mathoptions" type.
function imgDir(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.imgDir;
}
 
// Automatically generated. Retrieves the `scale` constructor field of the ":mathoptions" type.
function scale(mathoptions)  /* (mathoptions : mathoptions) -> int */  {
  return mathoptions.scale;
}
 
// Automatically generated. Retrieves the `scalePng` constructor field of the ":mathoptions" type.
function scalePng(mathoptions)  /* (mathoptions : mathoptions) -> int */  {
  return mathoptions.scalePng;
}
 
// Automatically generated. Retrieves the `scaleSvg` constructor field of the ":mathoptions" type.
function scaleSvg(mathoptions)  /* (mathoptions : mathoptions) -> int */  {
  return mathoptions.scaleSvg;
}
 
// Automatically generated. Retrieves the `dpi` constructor field of the ":mathoptions" type.
function dpi(mathoptions)  /* (mathoptions : mathoptions) -> int */  {
  return mathoptions.dpi;
}
 
// Automatically generated. Retrieves the `baseline` constructor field of the ":mathoptions" type.
function baseline(mathoptions)  /* (mathoptions : mathoptions) -> int */  {
  return mathoptions.baseline;
}
 
// Automatically generated. Retrieves the `embedLimit` constructor field of the ":mathoptions" type.
function embedLimit(mathoptions)  /* (mathoptions : mathoptions) -> int */  {
  return mathoptions.embedLimit;
}
 
// Automatically generated. Retrieves the `docClass` constructor field of the ":mathoptions" type.
function docClass(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.docClass;
}
 
// Automatically generated. Retrieves the `svgShare` constructor field of the ":mathoptions" type.
function svgShare(mathoptions)  /* (mathoptions : mathoptions) -> bool */  {
  return mathoptions.svgShare;
}
 
// Automatically generated. Retrieves the `svgPrec` constructor field of the ":mathoptions" type.
function svgPrec(mathoptions)  /* (mathoptions : mathoptions) -> int */  {
  return mathoptions.svgPrec;
}
 
// Automatically generated. Retrieves the `svgDefs` constructor field of the ":mathoptions" type.
function svgDefs(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.svgDefs;
}
 
// Automatically generated. Retrieves the `svgFontFormat` constructor field of the ":mathoptions" type.
function svgFontFormat(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.svgFontFormat;
}
 
// Automatically generated. Retrieves the `dvipng` constructor field of the ":mathoptions" type.
function dvipng(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.dvipng;
}
 
// Automatically generated. Retrieves the `dvisvg` constructor field of the ":mathoptions" type.
function dvisvg(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.dvisvg;
}
 
// Automatically generated. Retrieves the `latex` constructor field of the ":mathoptions" type.
function latex(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.latex;
}
 
// Automatically generated. Retrieves the `latexFull` constructor field of the ":mathoptions" type.
function latexFull(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.latexFull;
}
 
// Automatically generated. Retrieves the `dvips` constructor field of the ":mathoptions" type.
function dvips(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.dvips;
}
 
// Automatically generated. Retrieves the `ps2pdf` constructor field of the ":mathoptions" type.
function ps2pdf(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.ps2pdf;
}
 
// Automatically generated. Retrieves the `convert` constructor field of the ":mathoptions" type.
function convert(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.convert;
}
 
// Automatically generated. Retrieves the `dim` constructor field of the ":mathoptions" type.
function dim(mathoptions)  /* (mathoptions : mathoptions) -> std/dict/dict<common/mathinfo> */  {
  return mathoptions.dim;
}
function _copy(_this, mode0, render0, renderFull0, mathjax0, mjext0, imgDir0, scale0, scalePng0, scaleSvg0, dpi0, baseline0, embedLimit0, docClass0, svgShare0, svgPrec0, svgDefs0, svgFontFormat0, dvipng0, dvisvg0, latex0, latexFull0, dvips0, ps2pdf0, convert0, dim0)  /* (mathoptions, mode : ?mathmode, render : ?maybe<common/mathrender>, renderFull : ?maybe<common/mathrender>, mathjax : ?string, mjext : ?string, imgDir : ?string, scale : ?int, scalePng : ?int, scaleSvg : ?int, dpi : ?int, baseline : ?int, embedLimit : ?int, docClass : ?string, svgShare : ?bool, svgPrec : ?int, svgDefs : ?string, svgFontFormat : ?string, dvipng : ?string, dvisvg : ?string, latex : ?string, latexFull : ?string, dvips : ?string, ps2pdf : ?string, convert : ?string, dim : ?std/dict/dict<common/mathinfo>) -> mathoptions */  {
  var mode_439 = (mode0 !== undefined) ? mode0 : mode(_this);
  var render_445 = (render0 !== undefined) ? render0 : render(_this);
  var renderFull_451 = (renderFull0 !== undefined) ? renderFull0 : renderFull(_this);
  var mathjax_457 = (mathjax0 !== undefined) ? mathjax0 : mathjax(_this);
  var mjext_463 = (mjext0 !== undefined) ? mjext0 : mjext(_this);
  var imgDir_469 = (imgDir0 !== undefined) ? imgDir0 : imgDir(_this);
  var scale_475 = (scale0 !== undefined) ? scale0 : scale(_this);
  var scalePng_481 = (scalePng0 !== undefined) ? scalePng0 : scalePng(_this);
  var scaleSvg_487 = (scaleSvg0 !== undefined) ? scaleSvg0 : scaleSvg(_this);
  var dpi_493 = (dpi0 !== undefined) ? dpi0 : dpi(_this);
  var baseline_499 = (baseline0 !== undefined) ? baseline0 : baseline(_this);
  var embedLimit_505 = (embedLimit0 !== undefined) ? embedLimit0 : embedLimit(_this);
  var docClass_511 = (docClass0 !== undefined) ? docClass0 : docClass(_this);
  var svgShare_517 = (svgShare0 !== undefined) ? svgShare0 : svgShare(_this);
  var svgPrec_523 = (svgPrec0 !== undefined) ? svgPrec0 : svgPrec(_this);
  var svgDefs_529 = (svgDefs0 !== undefined) ? svgDefs0 : svgDefs(_this);
  var svgFontFormat_535 = (svgFontFormat0 !== undefined) ? svgFontFormat0 : svgFontFormat(_this);
  var dvipng_541 = (dvipng0 !== undefined) ? dvipng0 : dvipng(_this);
  var dvisvg_547 = (dvisvg0 !== undefined) ? dvisvg0 : dvisvg(_this);
  var latex_553 = (latex0 !== undefined) ? latex0 : latex(_this);
  var latexFull_559 = (latexFull0 !== undefined) ? latexFull0 : latexFull(_this);
  var dvips_565 = (dvips0 !== undefined) ? dvips0 : dvips(_this);
  var ps2pdf_571 = (ps2pdf0 !== undefined) ? ps2pdf0 : ps2pdf(_this);
  var convert_577 = (convert0 !== undefined) ? convert0 : convert(_this);
  var dim_583 = (dim0 !== undefined) ? dim0 : dim(_this);
  return Mathoptions(mode_439, render_445, renderFull_451, mathjax_457, mjext_463, imgDir_469, scale_475, scalePng_481, scaleSvg_487, dpi_493, baseline_499, embedLimit_505, docClass_511, svgShare_517, svgPrec_523, svgDefs_529, svgFontFormat_535, dvipng_541, dvisvg_547, latex_553, latexFull_559, dvips_565, ps2pdf_571, convert_577, dim_583);
}
 
// Automatically generated. Retrieves the `version` constructor field of the ":options" type.
function version(options0)  /* (options : options) -> string */  {
  return options0.version;
}
 
// Automatically generated. Retrieves the `bench` constructor field of the ":options" type.
function bench(options0)  /* (options : options) -> bool */  {
  return options0.bench;
}
 
// Automatically generated. Retrieves the `verbose` constructor field of the ":options" type.
function verbose(options0)  /* (options : options) -> int */  {
  return options0.verbose;
}
 
// Automatically generated. Retrieves the `verboseMaxLine` constructor field of the ":options" type.
function verboseMaxLine(options0)  /* (options : options) -> int */  {
  return options0.verboseMaxLine;
}
 
// Automatically generated. Retrieves the `pedantic` constructor field of the ":options" type.
function pedantic(options0)  /* (options : options) -> bool */  {
  return options0.pedantic;
}
 
// Automatically generated. Retrieves the `sanitize` constructor field of the ":options" type.
function sanitize(options0)  /* (options : options) -> bool */  {
  return options0.sanitize;
}
 
// Automatically generated. Retrieves the `xmp` constructor field of the ":options" type.
function xmp(options0)  /* (options : options) -> bool */  {
  return options0.xmp;
}
 
// Automatically generated. Retrieves the `full` constructor field of the ":options" type.
function full(options0)  /* (options : options) -> maybe<bool> */  {
  return options0.full;
}
 
// Automatically generated. Retrieves the `tex` constructor field of the ":options" type.
function tex(options0)  /* (options : options) -> bool */  {
  return options0.tex;
}
 
// Automatically generated. Retrieves the `pdf` constructor field of the ":options" type.
function pdf(options0)  /* (options : options) -> bool */  {
  return options0.pdf;
}
 
// Automatically generated. Retrieves the `texzip` constructor field of the ":options" type.
function texzip(options0)  /* (options : options) -> bool */  {
  return options0.texzip;
}
 
// Automatically generated. Retrieves the `rebuild` constructor field of the ":options" type.
function rebuild(options0)  /* (options : options) -> bool */  {
  return options0.rebuild;
}
 
// Automatically generated. Retrieves the `sandbox` constructor field of the ":options" type.
function sandbox(options0)  /* (options : options) -> bool */  {
  return options0.sandbox;
}
 
// Automatically generated. Retrieves the `prelude` constructor field of the ":options" type.
function prelude(options0)  /* (options : options) -> string */  {
  return options0.prelude;
}
 
// Automatically generated. Retrieves the `title` constructor field of the ":options" type.
function title(options0)  /* (options : options) -> string */  {
  return options0.title;
}
 
// Automatically generated. Retrieves the `css` constructor field of the ":options" type.
function css(options0)  /* (options : options) -> string */  {
  return options0.css;
}
 
// Automatically generated. Retrieves the `scripts` constructor field of the ":options" type.
function scripts(options0)  /* (options : options) -> string */  {
  return options0.scripts;
}
 
// Automatically generated. Retrieves the `scriptsx` constructor field of the ":options" type.
function scriptsx(options0)  /* (options : options) -> string */  {
  return options0.scriptsx;
}
 
// Automatically generated. Retrieves the `htmlHeader` constructor field of the ":options" type.
function htmlHeader(options0)  /* (options : options) -> string */  {
  return options0.htmlHeader;
}
 
// Automatically generated. Retrieves the `cssHeader` constructor field of the ":options" type.
function cssHeader(options0)  /* (options : options) -> string */  {
  return options0.cssHeader;
}
 
// Automatically generated. Retrieves the `jsHeader` constructor field of the ":options" type.
function jsHeader(options0)  /* (options : options) -> string */  {
  return options0.jsHeader;
}
 
// Automatically generated. Retrieves the `htmlFooter` constructor field of the ":options" type.
function htmlFooter(options0)  /* (options : options) -> string */  {
  return options0.htmlFooter;
}
 
// Automatically generated. Retrieves the `jsFooter` constructor field of the ":options" type.
function jsFooter(options0)  /* (options : options) -> string */  {
  return options0.jsFooter;
}
 
// Automatically generated. Retrieves the `htmlMeta` constructor field of the ":options" type.
function htmlMeta(options0)  /* (options : options) -> string */  {
  return options0.htmlMeta;
}
 
// Automatically generated. Retrieves the `texHeader` constructor field of the ":options" type.
function texHeader(options0)  /* (options : options) -> string */  {
  return options0.texHeader;
}
 
// Automatically generated. Retrieves the `texHeaderx` constructor field of the ":options" type.
function texHeaderx(options0)  /* (options : options) -> string */  {
  return options0.texHeaderx;
}
 
// Automatically generated. Retrieves the `texDocHeader` constructor field of the ":options" type.
function texDocHeader(options0)  /* (options : options) -> string */  {
  return options0.texDocHeader;
}
 
// Automatically generated. Retrieves the `texDocHeaderx` constructor field of the ":options" type.
function texDocHeaderx(options0)  /* (options : options) -> string */  {
  return options0.texDocHeaderx;
}
 
// Automatically generated. Retrieves the `texFooter` constructor field of the ":options" type.
function texFooter(options0)  /* (options : options) -> string */  {
  return options0.texFooter;
}
 
// Automatically generated. Retrieves the `texSectionNum` constructor field of the ":options" type.
function texSectionNum(options0)  /* (options : options) -> bool */  {
  return options0.texSectionNum;
}
 
// Automatically generated. Retrieves the `bibStyle` constructor field of the ":options" type.
function bibStyle(options0)  /* (options : options) -> bibstyle */  {
  return options0.bibStyle;
}
 
// Automatically generated. Retrieves the `bib` constructor field of the ":options" type.
function bib(options0)  /* (options : options) -> string */  {
  return options0.bib;
}
 
// Automatically generated. Retrieves the `locale` constructor field of the ":options" type.
function locale_1(options0)  /* (options : options) -> string */  {
  return options0.locale;
}
 
// Automatically generated. Retrieves the `packages` constructor field of the ":options" type.
function packages(options0)  /* (options : options) -> string */  {
  return options0.packages;
}
 
// Automatically generated. Retrieves the `packagesx` constructor field of the ":options" type.
function packagesx(options0)  /* (options : options) -> string */  {
  return options0.packagesx;
}
 
// Automatically generated. Retrieves the `docClass` constructor field of the ":options" type.
function docClass_1(options0)  /* (options : options) -> string */  {
  return options0.docClass;
}
 
// Automatically generated. Retrieves the `citestyle` constructor field of the ":options" type.
function citestyle(options0)  /* (options : options) -> maybe<common/citestyle> */  {
  return options0.citestyle;
}
 
// Automatically generated. Retrieves the `citeAll` constructor field of the ":options" type.
function citeAll(options0)  /* (options : options) -> bool */  {
  return options0.citeAll;
}
 
// Automatically generated. Retrieves the `tocDepth` constructor field of the ":options" type.
function tocDepth(options0)  /* (options : options) -> int */  {
  return options0.tocDepth;
}
 
// Automatically generated. Retrieves the `headingDepth` constructor field of the ":options" type.
function headingDepth(options0)  /* (options : options) -> int */  {
  return options0.headingDepth;
}
 
// Automatically generated. Retrieves the `headingBase` constructor field of the ":options" type.
function headingBase(options0)  /* (options : options) -> int */  {
  return options0.headingBase;
}
 
// Automatically generated. Retrieves the `sectionMax` constructor field of the ":options" type.
function sectionMax(options0)  /* (options : options) -> int */  {
  return options0.sectionMax;
}
 
// Automatically generated. Retrieves the `sectionBase` constructor field of the ":options" type.
function sectionBase(options0)  /* (options : options) -> int */  {
  return options0.sectionBase;
}
 
// Automatically generated. Retrieves the `starBold` constructor field of the ":options" type.
function starBold(options0)  /* (options : options) -> bool */  {
  return options0.starBold;
}
 
// Automatically generated. Retrieves the `prettyAlign` constructor field of the ":options" type.
function prettyAlign(options0)  /* (options : options) -> int */  {
  return options0.prettyAlign;
}
 
// Automatically generated. Retrieves the `logo` constructor field of the ":options" type.
function logo(options0)  /* (options : options) -> bool */  {
  return options0.logo;
}
 
// Automatically generated. Retrieves the `math` constructor field of the ":options" type.
function math(options0)  /* (options : options) -> mathoptions */  {
  return options0.math;
}
 
// Automatically generated. Retrieves the `highlight` constructor field of the ":options" type.
function highlight(options0)  /* (options : options) -> bool */  {
  return options0.highlight;
}
 
// Automatically generated. Retrieves the `hilitelang` constructor field of the ":options" type.
function hilitelang(options0)  /* (options : options) -> string */  {
  return options0.hilitelang;
}
 
// Automatically generated. Retrieves the `pdflatex` constructor field of the ":options" type.
function pdflatex(options0)  /* (options : options) -> string */  {
  return options0.pdflatex;
}
 
// Automatically generated. Retrieves the `bibtex` constructor field of the ":options" type.
function bibtex(options0)  /* (options : options) -> string */  {
  return options0.bibtex;
}
 
// Automatically generated. Retrieves the `latex` constructor field of the ":options" type.
function latex_1(options0)  /* (options : options) -> string */  {
  return options0.latex;
}
 
// Automatically generated. Retrieves the `processTimeout` constructor field of the ":options" type.
function processTimeout(options0)  /* (options : options) -> int */  {
  return options0.processTimeout;
}
 
// Automatically generated. Retrieves the `zip` constructor field of the ":options" type.
function zip(options0)  /* (options : options) -> string */  {
  return options0.zip;
}
 
// Automatically generated. Retrieves the `metadata` constructor field of the ":options" type.
function metadata(options0)  /* (options : options) -> metadata */  {
  return options0.metadata;
}
 
// Automatically generated. Retrieves the `embedinfos` constructor field of the ":options" type.
function embedinfos(options0)  /* (options : options) -> std/dict/dict<common/embedinfo> */  {
  return options0.embedinfos;
}
 
// Automatically generated. Retrieves the `embedLimit` constructor field of the ":options" type.
function embedLimit_1(options0)  /* (options : options) -> int */  {
  return options0.embedLimit;
}
 
// Automatically generated. Retrieves the `lineNo` constructor field of the ":options" type.
function lineNo(options0)  /* (options : options) -> int */  {
  return options0.lineNo;
}
 
// Automatically generated. Retrieves the `lineNoWeb` constructor field of the ":options" type.
function lineNoWeb(options0)  /* (options : options) -> bool */  {
  return options0.lineNoWeb;
}
 
// Automatically generated. Retrieves the `copyStyles` constructor field of the ":options" type.
function copyStyles(options0)  /* (options : options) -> bool */  {
  return options0.copyStyles;
}
 
// Automatically generated. Retrieves the `lineMap` constructor field of the ":options" type.
function lineMap(options0)  /* (options : options) -> common/lineMap */  {
  return options0.lineMap;
}
 
// Automatically generated. Retrieves the `extractStart` constructor field of the ":options" type.
function extractStart(options0)  /* (options : options) -> string */  {
  return options0.extractStart;
}
 
// Automatically generated. Retrieves the `extractEnd` constructor field of the ":options" type.
function extractEnd(options0)  /* (options : options) -> string */  {
  return options0.extractEnd;
}
function _copy_1(_this, version0, bench0, verbose0, verboseMaxLine0, pedantic0, sanitize0, xmp0, full0, tex0, pdf0, texzip0, rebuild0, sandbox0, prelude0, title0, css0, scripts0, scriptsx0, htmlHeader0, cssHeader0, jsHeader0, htmlFooter0, jsFooter0, htmlMeta0, texHeader0, texHeaderx0, texDocHeader0, texDocHeaderx0, texFooter0, texSectionNum0, bibStyle0, bib0, locale0, packages0, packagesx0, docClass0, citestyle0, citeAll0, tocDepth0, headingDepth0, headingBase0, sectionMax0, sectionBase0, starBold0, prettyAlign0, logo0, math0, highlight0, hilitelang0, pdflatex0, bibtex0, latex0, processTimeout0, zip0, metadata0, embedinfos0, embedLimit0, lineNo0, lineNoWeb0, copyStyles0, lineMap0, extractStart0, extractEnd0)  /* (options, version : ?string, bench : ?bool, verbose : ?int, verboseMaxLine : ?int, pedantic : ?bool, sanitize : ?bool, xmp : ?bool, full : ?maybe<bool>, tex : ?bool, pdf : ?bool, texzip : ?bool, rebuild : ?bool, sandbox : ?bool, prelude : ?string, title : ?string, css : ?string, scripts : ?string, scriptsx : ?string, htmlHeader : ?string, cssHeader : ?string, jsHeader : ?string, htmlFooter : ?string, jsFooter : ?string, htmlMeta : ?string, texHeader : ?string, texHeaderx : ?string, texDocHeader : ?string, texDocHeaderx : ?string, texFooter : ?string, texSectionNum : ?bool, bibStyle : ?bibstyle, bib : ?string, locale : ?string, packages : ?string, packagesx : ?string, docClass : ?string, citestyle : ?maybe<common/citestyle>, citeAll : ?bool, tocDepth : ?int, headingDepth : ?int, headingBase : ?int, sectionMax : ?int, sectionBase : ?int, starBold : ?bool, prettyAlign : ?int, logo : ?bool, math : ?mathoptions, highlight : ?bool, hilitelang : ?string, pdflatex : ?string, bibtex : ?string, latex : ?string, processTimeout : ?int, zip : ?string, metadata : ?metadata, embedinfos : ?std/dict/dict<common/embedinfo>, embedLimit : ?int, lineNo : ?int, lineNoWeb : ?bool, copyStyles : ?bool, lineMap : ?common/lineMap, extractStart : ?string, extractEnd : ?string) -> options */  {
  var version_1076 = (version0 !== undefined) ? version0 : version(_this);
  var bench_1082 = (bench0 !== undefined) ? bench0 : bench(_this);
  var verbose_1088 = (verbose0 !== undefined) ? verbose0 : verbose(_this);
  var verboseMaxLine_1094 = (verboseMaxLine0 !== undefined) ? verboseMaxLine0 : verboseMaxLine(_this);
  var pedantic_1100 = (pedantic0 !== undefined) ? pedantic0 : pedantic(_this);
  var sanitize_1106 = (sanitize0 !== undefined) ? sanitize0 : sanitize(_this);
  var xmp_1112 = (xmp0 !== undefined) ? xmp0 : xmp(_this);
  var full_1119 = (full0 !== undefined) ? full0 : full(_this);
  var tex_1126 = (tex0 !== undefined) ? tex0 : tex(_this);
  var pdf_1132 = (pdf0 !== undefined) ? pdf0 : pdf(_this);
  var texzip_1138 = (texzip0 !== undefined) ? texzip0 : texzip(_this);
  var rebuild_1144 = (rebuild0 !== undefined) ? rebuild0 : rebuild(_this);
  var sandbox_1150 = (sandbox0 !== undefined) ? sandbox0 : sandbox(_this);
  var prelude_1156 = (prelude0 !== undefined) ? prelude0 : prelude(_this);
  var title_1169 = (title0 !== undefined) ? title0 : title(_this);
  var css_1175 = (css0 !== undefined) ? css0 : css(_this);
  var scripts_1181 = (scripts0 !== undefined) ? scripts0 : scripts(_this);
  var scriptsx_1187 = (scriptsx0 !== undefined) ? scriptsx0 : scriptsx(_this);
  var htmlHeader_1193 = (htmlHeader0 !== undefined) ? htmlHeader0 : htmlHeader(_this);
  var cssHeader_1199 = (cssHeader0 !== undefined) ? cssHeader0 : cssHeader(_this);
  var jsHeader_1205 = (jsHeader0 !== undefined) ? jsHeader0 : jsHeader(_this);
  var htmlFooter_1211 = (htmlFooter0 !== undefined) ? htmlFooter0 : htmlFooter(_this);
  var jsFooter_1217 = (jsFooter0 !== undefined) ? jsFooter0 : jsFooter(_this);
  var htmlMeta_1223 = (htmlMeta0 !== undefined) ? htmlMeta0 : htmlMeta(_this);
  var texHeader_1229 = (texHeader0 !== undefined) ? texHeader0 : texHeader(_this);
  var texHeaderx_1235 = (texHeaderx0 !== undefined) ? texHeaderx0 : texHeaderx(_this);
  var texDocHeader_1241 = (texDocHeader0 !== undefined) ? texDocHeader0 : texDocHeader(_this);
  var texDocHeaderx_1247 = (texDocHeaderx0 !== undefined) ? texDocHeaderx0 : texDocHeaderx(_this);
  var texFooter_1253 = (texFooter0 !== undefined) ? texFooter0 : texFooter(_this);
  var texSectionNum_1259 = (texSectionNum0 !== undefined) ? texSectionNum0 : texSectionNum(_this);
  var bibStyle_1265 = (bibStyle0 !== undefined) ? bibStyle0 : bibStyle(_this);
  var bib_1271 = (bib0 !== undefined) ? bib0 : bib(_this);
  var locale_1284 = (locale0 !== undefined) ? locale0 : locale_1(_this);
  var packages_1290 = (packages0 !== undefined) ? packages0 : packages(_this);
  var packagesx_1296 = (packagesx0 !== undefined) ? packagesx0 : packagesx(_this);
  var docClass_1309 = (docClass0 !== undefined) ? docClass0 : docClass_1(_this);
  var citestyle_1317 = (citestyle0 !== undefined) ? citestyle0 : citestyle(_this);
  var citeAll_1323 = (citeAll0 !== undefined) ? citeAll0 : citeAll(_this);
  var tocDepth_1329 = (tocDepth0 !== undefined) ? tocDepth0 : tocDepth(_this);
  var headingDepth_1335 = (headingDepth0 !== undefined) ? headingDepth0 : headingDepth(_this);
  var headingBase_1341 = (headingBase0 !== undefined) ? headingBase0 : headingBase(_this);
  var sectionMax_1347 = (sectionMax0 !== undefined) ? sectionMax0 : sectionMax(_this);
  var sectionBase_1353 = (sectionBase0 !== undefined) ? sectionBase0 : sectionBase(_this);
  var starBold_1359 = (starBold0 !== undefined) ? starBold0 : starBold(_this);
  var prettyAlign_1365 = (prettyAlign0 !== undefined) ? prettyAlign0 : prettyAlign(_this);
  var logo_1371 = (logo0 !== undefined) ? logo0 : logo(_this);
  var math_1378 = (math0 !== undefined) ? math0 : math(_this);
  var highlight_1384 = (highlight0 !== undefined) ? highlight0 : highlight(_this);
  var hilitelang_1390 = (hilitelang0 !== undefined) ? hilitelang0 : hilitelang(_this);
  var pdflatex_1396 = (pdflatex0 !== undefined) ? pdflatex0 : pdflatex(_this);
  var bibtex_1402 = (bibtex0 !== undefined) ? bibtex0 : bibtex(_this);
  var latex_1415 = (latex0 !== undefined) ? latex0 : latex_1(_this);
  var processTimeout_1421 = (processTimeout0 !== undefined) ? processTimeout0 : processTimeout(_this);
  var zip_1435 = (zip0 !== undefined) ? zip0 : zip(_this);
  var metadata_1441 = (metadata0 !== undefined) ? metadata0 : metadata(_this);
  var embedinfos_1447 = (embedinfos0 !== undefined) ? embedinfos0 : embedinfos(_this);
  var embedLimit_1460 = (embedLimit0 !== undefined) ? embedLimit0 : embedLimit_1(_this);
  var lineNo_1473 = (lineNo0 !== undefined) ? lineNo0 : lineNo(_this);
  var lineNoWeb_1479 = (lineNoWeb0 !== undefined) ? lineNoWeb0 : lineNoWeb(_this);
  var copyStyles_1485 = (copyStyles0 !== undefined) ? copyStyles0 : copyStyles(_this);
  var lineMap_1498 = (lineMap0 !== undefined) ? lineMap0 : lineMap(_this);
  var extractStart_1504 = (extractStart0 !== undefined) ? extractStart0 : extractStart(_this);
  var extractEnd_1510 = (extractEnd0 !== undefined) ? extractEnd0 : extractEnd(_this);
  return Options(version_1076, bench_1082, verbose_1088, verboseMaxLine_1094, pedantic_1100, sanitize_1106, xmp_1112, full_1119, tex_1126, pdf_1132, texzip_1138, rebuild_1144, sandbox_1150, prelude_1156, title_1169, css_1175, scripts_1181, scriptsx_1187, htmlHeader_1193, cssHeader_1199, jsHeader_1205, htmlFooter_1211, jsFooter_1217, htmlMeta_1223, texHeader_1229, texHeaderx_1235, texDocHeader_1241, texDocHeaderx_1247, texFooter_1253, texSectionNum_1259, bibStyle_1265, bib_1271, locale_1284, packages_1290, packagesx_1296, docClass_1309, citestyle_1317, citeAll_1323, tocDepth_1329, headingDepth_1335, headingBase_1341, sectionMax_1347, sectionBase_1353, starBold_1359, prettyAlign_1365, logo_1371, math_1378, highlight_1384, hilitelang_1390, pdflatex_1396, bibtex_1402, latex_1415, processTimeout_1421, zip_1435, metadata_1441, embedinfos_1447, embedLimit_1460, lineNo_1473, lineNoWeb_1479, copyStyles_1485, lineMap_1498, extractStart_1504, extractEnd_1510);
}
 
// Automatically generated. Retrieves the `showVersion` constructor field of the ":commandOptions" type.
function showVersion(commandOptions)  /* (commandOptions : commandOptions) -> bool */  {
  return commandOptions.showVersion;
}
 
// Automatically generated. Retrieves the `convertTex` constructor field of the ":commandOptions" type.
function convertTex(commandOptions)  /* (commandOptions : commandOptions) -> bool */  {
  return commandOptions.convertTex;
}
 
// Automatically generated. Retrieves the `outputDir` constructor field of the ":commandOptions" type.
function outputDir(commandOptions)  /* (commandOptions : commandOptions) -> string */  {
  return commandOptions.outputDir;
}
 
// Automatically generated. Retrieves the `installDir` constructor field of the ":commandOptions" type.
function installDir(commandOptions)  /* (commandOptions : commandOptions) -> string */  {
  return commandOptions.installDir;
}
 
// Automatically generated. Retrieves the `inputs` constructor field of the ":commandOptions" type.
function inputs(commandOptions)  /* (commandOptions : commandOptions) -> list<string> */  {
  return commandOptions.inputs;
}
 
// Automatically generated. Retrieves the `options` constructor field of the ":commandOptions" type.
function options(commandOptions)  /* (commandOptions : commandOptions) -> options */  {
  return commandOptions.options;
}
function _copy_2(_this, showVersion0, convertTex0, outputDir0, installDir0, inputs0, options0)  /* (commandOptions, showVersion : ?bool, convertTex : ?bool, outputDir : ?string, installDir : ?string, inputs : ?list<string>, options : ?options) -> commandOptions */  {
  var showVersion_1630 = (showVersion0 !== undefined) ? showVersion0 : showVersion(_this);
  var convertTex_1636 = (convertTex0 !== undefined) ? convertTex0 : convertTex(_this);
  var outputDir_1642 = (outputDir0 !== undefined) ? outputDir0 : outputDir(_this);
  var installDir_1648 = (installDir0 !== undefined) ? installDir0 : installDir(_this);
  var inputs_1654 = (inputs0 !== undefined) ? inputs0 : inputs(_this);
  var options_1662 = (options0 !== undefined) ? options0 : options(_this);
  return CommandOptions(showVersion_1630, convertTex_1636, outputDir_1642, installDir_1648, inputs_1654, options_1662);
}
function _createMathoptions(mode0, render0, renderFull0, mathjax0, mjext0, imgDir0, scale0, scalePng0, scaleSvg0, dpi0, baseline0, embedLimit0, docClass0, svgShare0, svgPrec0, svgDefs0, svgFontFormat0, dvipng0, dvisvg0, latex0, latexFull0, dvips0, ps2pdf0, convert0, dim0)  /* (mode : ?mathmode, render : ?maybe<common/mathrender>, renderFull : ?maybe<common/mathrender>, mathjax : ?string, mjext : ?string, imgDir : ?string, scale : ?int, scalePng : ?int, scaleSvg : ?int, dpi : ?int, baseline : ?int, embedLimit : ?int, docClass : ?string, svgShare : ?bool, svgPrec : ?int, svgDefs : ?string, svgFontFormat : ?string, dvipng : ?string, dvisvg : ?string, latex : ?string, latexFull : ?string, dvips : ?string, ps2pdf : ?string, convert : ?string, dim : ?std/dict/dict<common/mathinfo>) -> mathoptions */  {
  var mode_1684 = (mode0 !== undefined) ? mode0 : Static;
  var render_1689 = (render0 !== undefined) ? render0 : $std_core.Nothing;
  var renderFull_1694 = (renderFull0 !== undefined) ? renderFull0 : $std_core.Nothing;
  var mathjax_1698 = (mathjax0 !== undefined) ? mathjax0 : "";
  var mjext_1702 = (mjext0 !== undefined) ? mjext0 : "";
  var imgDir_1706 = (imgDir0 !== undefined) ? imgDir0 : "math";
  var scale_1710 = (scale0 !== undefined) ? scale0 : 0;
  var scalePng_1714 = (scalePng0 !== undefined) ? scalePng0 : 108;
  var scaleSvg_1718 = (scaleSvg0 !== undefined) ? scaleSvg0 : 105;
  var dpi_1722 = (dpi0 !== undefined) ? dpi0 : 300;
  var baseline_1726 = (baseline0 !== undefined) ? baseline0 : 0;
  var embedLimit_1740 = (embedLimit0 !== undefined) ? embedLimit0 : $std_core.intMultiply(512,1024);
  var docClass_1744 = (docClass0 !== undefined) ? docClass0 : "[10pt]book";
  var svgShare_1748 = (svgShare0 !== undefined) ? svgShare0 : true;
  var svgPrec_1752 = (svgPrec0 !== undefined) ? svgPrec0 : 3;
  var svgDefs_1756 = (svgDefs0 !== undefined) ? svgDefs0 : "";
  var svgFontFormat_1760 = (svgFontFormat0 !== undefined) ? svgFontFormat0 : "";
  var dvipng_1764 = (dvipng0 !== undefined) ? dvipng0 : "dvipng";
  var dvisvg_1768 = (dvisvg0 !== undefined) ? dvisvg0 : "dvisvgm";
  var latex_1772 = (latex0 !== undefined) ? latex0 : "";
  var latexFull_1776 = (latexFull0 !== undefined) ? latexFull0 : "";
  var dvips_1780 = (dvips0 !== undefined) ? dvips0 : "dvips";
  var ps2pdf_1784 = (ps2pdf0 !== undefined) ? ps2pdf0 : "ps2pdf";
  var convert_1788 = (convert0 !== undefined) ? convert0 : "convert";
  var dim_1810 = (dim0 !== undefined) ? dim0 : $std_dict.dict();
  return Mathoptions(mode_1684, render_1689, renderFull_1694, mathjax_1698, mjext_1702, imgDir_1706, scale_1710, scalePng_1714, scaleSvg_1718, dpi_1722, baseline_1726, embedLimit_1740, docClass_1744, svgShare_1748, svgPrec_1752, svgDefs_1756, svgFontFormat_1760, dvipng_1764, dvisvg_1768, latex_1772, latexFull_1776, dvips_1780, ps2pdf_1784, convert_1788, dim_1810);
}
 
// The options
function _createOptions(version0, bench0, verbose0, verboseMaxLine0, pedantic0, sanitize0, xmp0, full0, tex0, pdf0, texzip0, rebuild0, sandbox0, prelude0, title0, css0, scripts0, scriptsx0, htmlHeader0, cssHeader0, jsHeader0, htmlFooter0, jsFooter0, htmlMeta0, texHeader0, texHeaderx0, texDocHeader0, texDocHeaderx0, texFooter0, texSectionNum0, bibStyle0, bib0, locale0, packages0, packagesx0, docClass0, citestyle0, citeAll0, tocDepth0, headingDepth0, headingBase0, sectionMax0, sectionBase0, starBold0, prettyAlign0, logo0, math0, highlight0, hilitelang0, pdflatex0, bibtex0, latex0, processTimeout0, zip0, metadata0, embedinfos0, embedLimit0, lineNo0, lineNoWeb0, copyStyles0, lineMap0, extractStart0, extractEnd0)  /* (version : ?string, bench : ?bool, verbose : ?int, verboseMaxLine : ?int, pedantic : ?bool, sanitize : ?bool, xmp : ?bool, full : ?maybe<bool>, tex : ?bool, pdf : ?bool, texzip : ?bool, rebuild : ?bool, sandbox : ?bool, prelude : ?string, title : ?string, css : ?string, scripts : ?string, scriptsx : ?string, htmlHeader : ?string, cssHeader : ?string, jsHeader : ?string, htmlFooter : ?string, jsFooter : ?string, htmlMeta : ?string, texHeader : ?string, texHeaderx : ?string, texDocHeader : ?string, texDocHeaderx : ?string, texFooter : ?string, texSectionNum : ?bool, bibStyle : ?bibstyle, bib : ?string, locale : ?string, packages : ?string, packagesx : ?string, docClass : ?string, citestyle : ?maybe<common/citestyle>, citeAll : ?bool, tocDepth : ?int, headingDepth : ?int, headingBase : ?int, sectionMax : ?int, sectionBase : ?int, starBold : ?bool, prettyAlign : ?int, logo : ?bool, math : ?mathoptions, highlight : ?bool, hilitelang : ?string, pdflatex : ?string, bibtex : ?string, latex : ?string, processTimeout : ?int, zip : ?string, metadata : ?metadata, embedinfos : ?std/dict/dict<common/embedinfo>, embedLimit : ?int, lineNo : ?int, lineNoWeb : ?bool, copyStyles : ?bool, lineMap : ?common/lineMap, extractStart : ?string, extractEnd : ?string) -> options */  {
  var version_1843 = (version0 !== undefined) ? version0 : "";
  var bench_1847 = (bench0 !== undefined) ? bench0 : false;
  var verbose_1851 = (verbose0 !== undefined) ? verbose0 : 0;
  var verboseMaxLine_1855 = (verboseMaxLine0 !== undefined) ? verboseMaxLine0 : 78;
  var pedantic_1859 = (pedantic0 !== undefined) ? pedantic0 : false;
  var sanitize_1863 = (sanitize0 !== undefined) ? sanitize0 : false;
  var xmp_1867 = (xmp0 !== undefined) ? xmp0 : false;
  var full_1872 = (full0 !== undefined) ? full0 : $std_core.Nothing;
  var tex_1876 = (tex0 !== undefined) ? tex0 : false;
  var pdf_1880 = (pdf0 !== undefined) ? pdf0 : false;
  var texzip_1884 = (texzip0 !== undefined) ? texzip0 : false;
  var rebuild_1888 = (rebuild0 !== undefined) ? rebuild0 : false;
  var sandbox_1892 = (sandbox0 !== undefined) ? sandbox0 : false;
  var prelude_1896 = (prelude0 !== undefined) ? prelude0 : "prelude";
  var title_1900 = (title0 !== undefined) ? title0 : "";
  var css_1904 = (css0 !== undefined) ? css0 : "madoko.css";
  var scripts_1908 = (scripts0 !== undefined) ? scripts0 : "";
  var scriptsx_1912 = (scriptsx0 !== undefined) ? scriptsx0 : "";
  var htmlHeader_1916 = (htmlHeader0 !== undefined) ? htmlHeader0 : "";
  var cssHeader_1920 = (cssHeader0 !== undefined) ? cssHeader0 : "";
  var jsHeader_1924 = (jsHeader0 !== undefined) ? jsHeader0 : "";
  var htmlFooter_1928 = (htmlFooter0 !== undefined) ? htmlFooter0 : "";
  var jsFooter_1932 = (jsFooter0 !== undefined) ? jsFooter0 : "";
  var htmlMeta_1936 = (htmlMeta0 !== undefined) ? htmlMeta0 : "name=\"viewport\" content=\"initial-scale=1.0\"";
  var texHeader_1940 = (texHeader0 !== undefined) ? texHeader0 : "";
  var texHeaderx_1944 = (texHeaderx0 !== undefined) ? texHeaderx0 : "";
  var texDocHeader_1948 = (texDocHeader0 !== undefined) ? texDocHeader0 : "";
  var texDocHeaderx_1952 = (texDocHeaderx0 !== undefined) ? texDocHeaderx0 : "";
  var texFooter_1956 = (texFooter0 !== undefined) ? texFooter0 : "";
  var texSectionNum_1960 = (texSectionNum0 !== undefined) ? texSectionNum0 : false;
  var bibStyle_1967 = (bibStyle0 !== undefined) ? bibStyle0 : Csl("madoko-numeric", "");
  var bib_1971 = (bib0 !== undefined) ? bib0 : "";
  var locale_1975 = (locale0 !== undefined) ? locale0 : "en-US";
  var packages_1979 = (packages0 !== undefined) ? packages0 : "";
  var packagesx_1983 = (packagesx0 !== undefined) ? packagesx0 : "";
  var docClass_1987 = (docClass0 !== undefined) ? docClass0 : "";
  var citestyle_1992 = (citestyle0 !== undefined) ? citestyle0 : $std_core.Nothing;
  var citeAll_1996 = (citeAll0 !== undefined) ? citeAll0 : false;
  var tocDepth_2000 = (tocDepth0 !== undefined) ? tocDepth0 : 3;
  var headingDepth_2004 = (headingDepth0 !== undefined) ? headingDepth0 : 3;
  var headingBase_2008 = (headingBase0 !== undefined) ? headingBase0 : 2;
  var sectionMax_2012 = (sectionMax0 !== undefined) ? sectionMax0 : 0;
  var sectionBase_2016 = (sectionBase0 !== undefined) ? sectionBase0 : 1;
  var starBold_2020 = (starBold0 !== undefined) ? starBold0 : false;
  var prettyAlign_2024 = (prettyAlign0 !== undefined) ? prettyAlign0 : 2;
  var logo_2028 = (logo0 !== undefined) ? logo0 : true;
  var math_2083 = (math0 !== undefined) ? math0 : _createMathoptions(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  var highlight_2087 = (highlight0 !== undefined) ? highlight0 : true;
  var hilitelang_2091 = (hilitelang0 !== undefined) ? hilitelang0 : "";
  var pdflatex_2095 = (pdflatex0 !== undefined) ? pdflatex0 : "";
  var bibtex_2099 = (bibtex0 !== undefined) ? bibtex0 : "bibtex";
  var latex_2103 = (latex0 !== undefined) ? latex0 : "latex";
  var processTimeout_2107 = (processTimeout0 !== undefined) ? processTimeout0 : 0;
  var zip_2111 = (zip0 !== undefined) ? zip0 : "zip";
  var metadata_2116 = (metadata0 !== undefined) ? metadata0 : $std_core.Nil;
  var embedinfos_2138 = (embedinfos0 !== undefined) ? embedinfos0 : $std_dict.dict();
  var embedLimit_2152 = (embedLimit0 !== undefined) ? embedLimit0 : $std_core.intMultiply(512,1024);
  var lineNo_2156 = (lineNo0 !== undefined) ? lineNo0 : 1;
  var lineNoWeb_2160 = (lineNoWeb0 !== undefined) ? lineNoWeb0 : false;
  var copyStyles_2164 = (copyStyles0 !== undefined) ? copyStyles0 : true;
  var lineMap_2168 = (lineMap0 !== undefined) ? lineMap0 : $common.End;
  var extractStart_2172 = (extractStart0 !== undefined) ? extractStart0 : "^(?:\\/\\/|--|[#%]|[<]!--|\\(\\*) *BEGIN *: *(\\w+) *(?:--[>]|\\*\\))?$";
  var extractEnd_2176 = (extractEnd0 !== undefined) ? extractEnd0 : "^(?:\\/\\/|--|[#%]|[<]!--|\\(\\*) *END *(?:[:] *(\\w+) *)?(?:--[>]|\\*\\))?$";
  return Options(version_1843, bench_1847, verbose_1851, verboseMaxLine_1855, pedantic_1859, sanitize_1863, xmp_1867, full_1872, tex_1876, pdf_1880, texzip_1884, rebuild_1888, sandbox_1892, prelude_1896, title_1900, css_1904, scripts_1908, scriptsx_1912, htmlHeader_1916, cssHeader_1920, jsHeader_1924, htmlFooter_1928, jsFooter_1932, htmlMeta_1936, texHeader_1940, texHeaderx_1944, texDocHeader_1948, texDocHeaderx_1952, texFooter_1956, texSectionNum_1960, bibStyle_1967, bib_1971, locale_1975, packages_1979, packagesx_1983, docClass_1987, citestyle_1992, citeAll_1996, tocDepth_2000, headingDepth_2004, headingBase_2008, sectionMax_2012, sectionBase_2016, starBold_2020, prettyAlign_2024, logo_2028, math_2083, highlight_2087, hilitelang_2091, pdflatex_2095, bibtex_2099, latex_2103, processTimeout_2107, zip_2111, metadata_2116, embedinfos_2138, embedLimit_2152, lineNo_2156, lineNoWeb_2160, copyStyles_2164, lineMap_2168, extractStart_2172, extractEnd_2176);
}
function _createCommandOptions(showVersion0, convertTex0, outputDir0, installDir0, inputs0, options0)  /* (showVersion : ?bool, convertTex : ?bool, outputDir : ?string, installDir : ?string, inputs : ?list<string>, options : ?options) -> commandOptions */  {
  var showVersion_2249 = (showVersion0 !== undefined) ? showVersion0 : false;
  var convertTex_2253 = (convertTex0 !== undefined) ? convertTex0 : false;
  var outputDir_2257 = (outputDir0 !== undefined) ? outputDir0 : "out";
  var installDir_2261 = (installDir0 !== undefined) ? installDir0 : "";
  var inputs_2266 = (inputs0 !== undefined) ? inputs0 : $std_core.Nil;
  var options_2399 = (options0 !== undefined) ? options0 : _createOptions(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  return CommandOptions(showVersion_2249, convertTex_2253, outputDir_2257, installDir_2261, inputs_2266, options_2399);
}
function cflag(f)  /* (f : (commandOptions, bool) -> commandOptions) -> std/flags/optionArg<commandOptions> */  {
  return $std_flags.Flag(f);
}
 
// sanitize options
function check(cmdOptions)  /* (cmdOptions : commandOptions) -> io commandOptions */  {
  var arg_2519 = cmdOptions;
  var _x1 = (installDir(cmdOptions) === "");
  if (_x1) {
    var _x0 = $std_path.dirname($std_path.programPath());
  }
  else {
    var _x0 = installDir(cmdOptions);
  }
  var arg_2523 = _x0;
  var arg_2520 = undefined;
  var arg_2521 = undefined;
  var arg_2522 = undefined;
  var arg_2524 = undefined;
  var arg_2525 = undefined;
  return _copy_2(arg_2519, arg_2520, arg_2521, arg_2522, arg_2523, arg_2524, arg_2525);
}
function creq(f, help)  /* (f : (commandOptions, string) -> commandOptions, help : string) -> std/flags/optionArg<commandOptions> */  {
  return $std_flags.Req(f, help);
}
function cutoff(s, n)  /* (s : string, n : int) -> string */  {
  if (n <= 1) {
    return s;
  }
  else {
    $std_core._unit_;
  }
  return $std_core.unlines($std_core.map_5($std_core.lines(s), function(line  /* string */ ) {  var _x0 = (line).length >= n; if (_x0) {  return ($std_core.substr_1(line, 0, ((n - 1)|0)) + ("\n" + ((line).substr(((n - 1)|0)))));} else {  return line;}}));
}
function oflag(f)  /* (f : (options, bool) -> options) -> std/flags/optionArg<commandOptions> */  {
  return $std_flags.Flag(function(co  /* commandOptions */ , b  /* bool */ ) {
    return _copy_2(co, undefined, undefined, undefined, undefined, undefined, f(options(co), b));
  });
}
function oreq(f, help)  /* (f : (options, string) -> options, help : string) -> std/flags/optionArg<commandOptions> */  {
  return $std_flags.Req(function(co  /* commandOptions */ , v  /* string */ ) {  return _copy_2(co, undefined, undefined, undefined, undefined, undefined, f(options(co), v));}, help);
}
function setbench(o, b)  /* (o : options, b : bool) -> options */  {
  if (b) {
    return _copy_1(o, undefined, true, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 0, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  }
  else {
    return _copy_1(o, undefined, false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 3, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  }
}
function setMeta(opts0, value)  /* (opts0 : options, value : string) -> options */  {
  var keyvals = $std_core.list_4($std_core.split_1(value, ";"));
  return $std_core.foldl(keyvals, opts0, function(opts  /* options */ , keyval  /* string */ ) {  var i = ((keyval).indexOf(":")); if (i > 0) {  var key = $std_string.trim($std_core.substr_1(keyval, 0, i)); var s = $std_string.trim(((keyval).substr(((i + 1)|0)))); return _copy_1(opts, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $std_core._plus__3(metadata(opts), $std_core.Cons($std_core._tuple2_(key, s), $std_core.Nil)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);} else {  $common.warning(("illegal --meta option: " + value), undefined); return opts;}});
}
var optionsDesc = $std_core.conslist([$std_flags._createOption("", $std_core.Cons("version", $std_core.Nil), cflag(function(co  /* commandOptions */ , v  /* bool */ ) {  return _copy_2(co, v, undefined, undefined, undefined, undefined, undefined);}), "Display version information", undefined), $std_flags._createOption("v", $std_core.Cons("verbose", $std_core.Nil), oflag(function(o  /* options */ , v0  /* bool */ ) {  var arg_7165 = o;if (v0) {  var _x0 = ((verbose(o) + 1)|0);} else {  var _x0 = 0;} var arg_7168 = _x0;var arg_7166 = undefined;var arg_7167 = undefined;var arg_7169 = undefined;var arg_7170 = undefined;var arg_7171 = undefined;var arg_7172 = undefined;var arg_7173 = undefined;var arg_7174 = undefined;var arg_7175 = undefined;var arg_7176 = undefined;var arg_7177 = undefined;var arg_7178 = undefined;var arg_7179 = undefined;var arg_7180 = undefined;var arg_7181 = undefined;var arg_7182 = undefined;var arg_7183 = undefined;var arg_7184 = undefined;var arg_7185 = undefined;var arg_7186 = undefined;var arg_7187 = undefined;var arg_7188 = undefined;var arg_7189 = undefined;var arg_7190 = undefined;var arg_7191 = undefined;var arg_7192 = undefined;var arg_7193 = undefined;var arg_7194 = undefined;var arg_7195 = undefined;var arg_7196 = undefined;var arg_7197 = undefined;var arg_7198 = undefined;var arg_7199 = undefined;var arg_7200 = undefined;var arg_7201 = undefined;var arg_7202 = undefined;var arg_7203 = undefined;var arg_7204 = undefined;var arg_7205 = undefined;var arg_7206 = undefined;var arg_7207 = undefined;var arg_7208 = undefined;var arg_7209 = undefined;var arg_7210 = undefined;var arg_7211 = undefined;var arg_7212 = undefined;var arg_7213 = undefined;var arg_7214 = undefined;var arg_7215 = undefined;var arg_7216 = undefined;var arg_7217 = undefined;var arg_7218 = undefined;var arg_7219 = undefined;var arg_7220 = undefined;var arg_7221 = undefined;var arg_7222 = undefined;var arg_7223 = undefined;var arg_7224 = undefined;var arg_7225 = undefined;var arg_7226 = undefined;var arg_7227 = undefined;var arg_7228 = undefined; return _copy_1(arg_7165, arg_7166, arg_7167, arg_7168, arg_7169, arg_7170, arg_7171, arg_7172, arg_7173, arg_7174, arg_7175, arg_7176, arg_7177, arg_7178, arg_7179, arg_7180, arg_7181, arg_7182, arg_7183, arg_7184, arg_7185, arg_7186, arg_7187, arg_7188, arg_7189, arg_7190, arg_7191, arg_7192, arg_7193, arg_7194, arg_7195, arg_7196, arg_7197, arg_7198, arg_7199, arg_7200, arg_7201, arg_7202, arg_7203, arg_7204, arg_7205, arg_7206, arg_7207, arg_7208, arg_7209, arg_7210, arg_7211, arg_7212, arg_7213, arg_7214, arg_7215, arg_7216, arg_7217, arg_7218, arg_7219, arg_7220, arg_7221, arg_7222, arg_7223, arg_7224, arg_7225, arg_7226, arg_7227, arg_7228);}), "Be more verbose", undefined), $std_flags._createOption("", $std_core.Cons("odir", $std_core.Nil), creq(function(co0  /* commandOptions */ , s  /* string */ ) {  return _copy_2(co0, undefined, undefined, s, undefined, undefined, undefined);}, "DIR"), "Write output files to the specified directory", undefined), $std_flags._createOption("", $std_core.Cons("xmp", $std_core.Nil), oflag(function(o0  /* options */ , v1  /* bool */ ) {  return _copy_1(o0, undefined, undefined, undefined, undefined, undefined, undefined, v1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);}), "Only process markdown between <xmp> tags", undefined), $std_flags._createOption("", $std_core.Cons("tex", $std_core.Nil), oflag(function(o1  /* options */ , v2  /* bool */ ) {  return _copy_1(o1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, v2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);}), "Generate a LaTeX file too", undefined), $std_flags._createOption("", $std_core.Cons("pdf", $std_core.Nil), oflag(function(o2  /* options */ , v3  /* bool */ ) {  var arg_6433 = o2;var arg_6443 = v3;var _x0 = (v3) ? true : tex(o2); var arg_6442 = _x0;var arg_6434 = undefined;var arg_6435 = undefined;var arg_6436 = undefined;var arg_6437 = undefined;var arg_6438 = undefined;var arg_6439 = undefined;var arg_6440 = undefined;var arg_6441 = undefined;var arg_6444 = undefined;var arg_6445 = undefined;var arg_6446 = undefined;var arg_6447 = undefined;var arg_6448 = undefined;var arg_6449 = undefined;var arg_6450 = undefined;var arg_6451 = undefined;var arg_6452 = undefined;var arg_6453 = undefined;var arg_6454 = undefined;var arg_6455 = undefined;var arg_6456 = undefined;var arg_6457 = undefined;var arg_6458 = undefined;var arg_6459 = undefined;var arg_6460 = undefined;var arg_6461 = undefined;var arg_6462 = undefined;var arg_6463 = undefined;var arg_6464 = undefined;var arg_6465 = undefined;var arg_6466 = undefined;var arg_6467 = undefined;var arg_6468 = undefined;var arg_6469 = undefined;var arg_6470 = undefined;var arg_6471 = undefined;var arg_6472 = undefined;var arg_6473 = undefined;var arg_6474 = undefined;var arg_6475 = undefined;var arg_6476 = undefined;var arg_6477 = undefined;var arg_6478 = undefined;var arg_6479 = undefined;var arg_6480 = undefined;var arg_6481 = undefined;var arg_6482 = undefined;var arg_6483 = undefined;var arg_6484 = undefined;var arg_6485 = undefined;var arg_6486 = undefined;var arg_6487 = undefined;var arg_6488 = undefined;var arg_6489 = undefined;var arg_6490 = undefined;var arg_6491 = undefined;var arg_6492 = undefined;var arg_6493 = undefined;var arg_6494 = undefined;var arg_6495 = undefined;var arg_6496 = undefined; return _copy_1(arg_6433, arg_6434, arg_6435, arg_6436, arg_6437, arg_6438, arg_6439, arg_6440, arg_6441, arg_6442, arg_6443, arg_6444, arg_6445, arg_6446, arg_6447, arg_6448, arg_6449, arg_6450, arg_6451, arg_6452, arg_6453, arg_6454, arg_6455, arg_6456, arg_6457, arg_6458, arg_6459, arg_6460, arg_6461, arg_6462, arg_6463, arg_6464, arg_6465, arg_6466, arg_6467, arg_6468, arg_6469, arg_6470, arg_6471, arg_6472, arg_6473, arg_6474, arg_6475, arg_6476, arg_6477, arg_6478, arg_6479, arg_6480, arg_6481, arg_6482, arg_6483, arg_6484, arg_6485, arg_6486, arg_6487, arg_6488, arg_6489, arg_6490, arg_6491, arg_6492, arg_6493, arg_6494, arg_6495, arg_6496);}), "Generate PDF using LaTeX", undefined), $std_flags._createOption("", $std_core.Cons("texzip", $std_core.Nil), oflag(function(o3  /* options */ , v4  /* bool */ ) {  var arg_6173 = o3;var arg_6184 = v4;var _x0 = (v4) ? true : tex(o3); var arg_6182 = _x0;var _x0 = (v4) ? true : pdf(o3); var arg_6183 = _x0;var arg_6231 = 0;var arg_6174 = undefined;var arg_6175 = undefined;var arg_6176 = undefined;var arg_6177 = undefined;var arg_6178 = undefined;var arg_6179 = undefined;var arg_6180 = undefined;var arg_6181 = undefined;var arg_6185 = undefined;var arg_6186 = undefined;var arg_6187 = undefined;var arg_6188 = undefined;var arg_6189 = undefined;var arg_6190 = undefined;var arg_6191 = undefined;var arg_6192 = undefined;var arg_6193 = undefined;var arg_6194 = undefined;var arg_6195 = undefined;var arg_6196 = undefined;var arg_6197 = undefined;var arg_6198 = undefined;var arg_6199 = undefined;var arg_6200 = undefined;var arg_6201 = undefined;var arg_6202 = undefined;var arg_6203 = undefined;var arg_6204 = undefined;var arg_6205 = undefined;var arg_6206 = undefined;var arg_6207 = undefined;var arg_6208 = undefined;var arg_6209 = undefined;var arg_6210 = undefined;var arg_6211 = undefined;var arg_6212 = undefined;var arg_6213 = undefined;var arg_6214 = undefined;var arg_6215 = undefined;var arg_6216 = undefined;var arg_6217 = undefined;var arg_6218 = undefined;var arg_6219 = undefined;var arg_6220 = undefined;var arg_6221 = undefined;var arg_6222 = undefined;var arg_6223 = undefined;var arg_6224 = undefined;var arg_6225 = undefined;var arg_6226 = undefined;var arg_6227 = undefined;var arg_6228 = undefined;var arg_6229 = undefined;var arg_6230 = undefined;var arg_6232 = undefined;var arg_6233 = undefined;var arg_6234 = undefined;var arg_6235 = undefined;var arg_6236 = undefined; return _copy_1(arg_6173, arg_6174, arg_6175, arg_6176, arg_6177, arg_6178, arg_6179, arg_6180, arg_6181, arg_6182, arg_6183, arg_6184, arg_6185, arg_6186, arg_6187, arg_6188, arg_6189, arg_6190, arg_6191, arg_6192, arg_6193, arg_6194, arg_6195, arg_6196, arg_6197, arg_6198, arg_6199, arg_6200, arg_6201, arg_6202, arg_6203, arg_6204, arg_6205, arg_6206, arg_6207, arg_6208, arg_6209, arg_6210, arg_6211, arg_6212, arg_6213, arg_6214, arg_6215, arg_6216, arg_6217, arg_6218, arg_6219, arg_6220, arg_6221, arg_6222, arg_6223, arg_6224, arg_6225, arg_6226, arg_6227, arg_6228, arg_6229, arg_6230, arg_6231, arg_6232, arg_6233, arg_6234, arg_6235, arg_6236);}), "Generate TeX zip for submission", undefined), $std_flags._createOption("", $std_core.Cons("png", $std_core.Nil), oflag(function(o4  /* options */ , v5  /* bool */ ) {  var arg_5902 = o4;var arg_5844 = math(o4);var _x0 = (v5) ? $common.Png : $common.Svg; var arg_5846 = $std_core.Just(_x0);var arg_5845 = undefined;var arg_5847 = undefined;var arg_5848 = undefined;var arg_5849 = undefined;var arg_5850 = undefined;var arg_5851 = undefined;var arg_5852 = undefined;var arg_5853 = undefined;var arg_5854 = undefined;var arg_5855 = undefined;var arg_5856 = undefined;var arg_5857 = undefined;var arg_5858 = undefined;var arg_5859 = undefined;var arg_5860 = undefined;var arg_5861 = undefined;var arg_5862 = undefined;var arg_5863 = undefined;var arg_5864 = undefined;var arg_5865 = undefined;var arg_5866 = undefined;var arg_5867 = undefined;var arg_5868 = undefined;var arg_5869 = undefined; var arg_5949 = _copy(arg_5844, arg_5845, arg_5846, arg_5847, arg_5848, arg_5849, arg_5850, arg_5851, arg_5852, arg_5853, arg_5854, arg_5855, arg_5856, arg_5857, arg_5858, arg_5859, arg_5860, arg_5861, arg_5862, arg_5863, arg_5864, arg_5865, arg_5866, arg_5867, arg_5868, arg_5869);var arg_5903 = undefined;var arg_5904 = undefined;var arg_5905 = undefined;var arg_5906 = undefined;var arg_5907 = undefined;var arg_5908 = undefined;var arg_5909 = undefined;var arg_5910 = undefined;var arg_5911 = undefined;var arg_5912 = undefined;var arg_5913 = undefined;var arg_5914 = undefined;var arg_5915 = undefined;var arg_5916 = undefined;var arg_5917 = undefined;var arg_5918 = undefined;var arg_5919 = undefined;var arg_5920 = undefined;var arg_5921 = undefined;var arg_5922 = undefined;var arg_5923 = undefined;var arg_5924 = undefined;var arg_5925 = undefined;var arg_5926 = undefined;var arg_5927 = undefined;var arg_5928 = undefined;var arg_5929 = undefined;var arg_5930 = undefined;var arg_5931 = undefined;var arg_5932 = undefined;var arg_5933 = undefined;var arg_5934 = undefined;var arg_5935 = undefined;var arg_5936 = undefined;var arg_5937 = undefined;var arg_5938 = undefined;var arg_5939 = undefined;var arg_5940 = undefined;var arg_5941 = undefined;var arg_5942 = undefined;var arg_5943 = undefined;var arg_5944 = undefined;var arg_5945 = undefined;var arg_5946 = undefined;var arg_5947 = undefined;var arg_5948 = undefined;var arg_5950 = undefined;var arg_5951 = undefined;var arg_5952 = undefined;var arg_5953 = undefined;var arg_5954 = undefined;var arg_5955 = undefined;var arg_5956 = undefined;var arg_5957 = undefined;var arg_5958 = undefined;var arg_5959 = undefined;var arg_5960 = undefined;var arg_5961 = undefined;var arg_5962 = undefined;var arg_5963 = undefined;var arg_5964 = undefined;var arg_5965 = undefined; return _copy_1(arg_5902, arg_5903, arg_5904, arg_5905, arg_5906, arg_5907, arg_5908, arg_5909, arg_5910, arg_5911, arg_5912, arg_5913, arg_5914, arg_5915, arg_5916, arg_5917, arg_5918, arg_5919, arg_5920, arg_5921, arg_5922, arg_5923, arg_5924, arg_5925, arg_5926, arg_5927, arg_5928, arg_5929, arg_5930, arg_5931, arg_5932, arg_5933, arg_5934, arg_5935, arg_5936, arg_5937, arg_5938, arg_5939, arg_5940, arg_5941, arg_5942, arg_5943, arg_5944, arg_5945, arg_5946, arg_5947, arg_5948, arg_5949, arg_5950, arg_5951, arg_5952, arg_5953, arg_5954, arg_5955, arg_5956, arg_5957, arg_5958, arg_5959, arg_5960, arg_5961, arg_5962, arg_5963, arg_5964, arg_5965);}), "Use PNG instead of SVG for math in HTML", undefined), $std_flags._createOption("", $std_core.Cons("convert-tex", $std_core.Nil), cflag(function(co1  /* commandOptions */ , v6  /* bool */ ) {  return _copy_2(co1, undefined, v6, undefined, undefined, undefined, undefined);}), "Convert input from TeX to Markdown", undefined), $std_flags._createOption("f", $std_core.Cons("fragment", $std_core.Nil), oflag(function(o5  /* options */ , v7  /* bool */ ) {  return _copy_1(o5, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $std_core.Just(!(v7)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);}), "Generate a fragment instead of a full document", undefined), $std_flags._createOption("", $std_core.Cons("logo", $std_core.Nil), oflag(function(o6  /* options */ , v8  /* bool */ ) {  return _copy_1(o6, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, v8, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);}), "Generate a logo at the end of the document", undefined), $std_flags._createOption("", $std_core.Cons("sanitize", $std_core.Nil), oflag(function(o7  /* options */ , v9  /* bool */ ) {  return _copy_1(o7, undefined, undefined, undefined, undefined, undefined, v9, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);}), "Always escape or suppress user defined html", undefined), $std_flags._createOption("", $std_core.Cons("sandbox", $std_core.Nil), oflag(function(o8  /* options */ , v10  /* bool */ ) {  return _copy_1(o8, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, v10, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);}), "Run in a sandbox for secure server execution", undefined), $std_flags._createOption("", $std_core.Cons("pedantic", $std_core.Nil), oflag(function(o9  /* options */ , v11  /* bool */ ) {  return _copy_1(o9, undefined, undefined, undefined, undefined, v11, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);}), "Pedantic mode", undefined), $std_flags._createOption("", $std_core.Cons("bench", $std_core.Nil), oflag(setbench), "For benchmarking: turn off numbering, etc.", undefined), $std_flags._createOption("", $std_core.Cons("installdir", $std_core.Nil), creq(function(co2  /* commandOptions */ , s0  /* string */ ) {  return _copy_2(co2, undefined, undefined, undefined, s0, undefined, undefined);}, "DIR"), "Set installation directory explicitly", undefined), $std_flags._createOption("r", $std_core.Cons("rebuild", $std_core.Nil), oflag(function(o10  /* options */ , v12  /* bool */ ) {  return _copy_1(o10, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, v12, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);}), "Force rebuild bibliography, math, etc.", undefined), $std_flags._createOption("", $std_core.Cons("prelude", $std_core.Nil), oreq(function(o11  /* options */ , s1  /* string */ ) {  return _copy_1(o11, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, s1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);}, "FILE"), "Include <FILE> at start of the document", undefined), $std_flags._createOption("", $std_core.Cons("verbose-max", $std_core.Nil), oreq(function(o12  /* options */ , s2  /* string */ ) {  return _copy_1(o12, undefined, undefined, undefined, $std_core.parseIntDefault(s2, 78, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);}, "LEN"), "Maximum line length for messages", undefined), $std_flags._createOption("m", $std_core.Cons("meta", $std_core.Nil), oreq(setMeta, "key:val"), "Semi-colon separated list of metadata values", undefined)], $std_core.Nil);
function fullUsageInfo()  /* () -> string */  {
  var header = "usage:\n madoko [options] files\n\noptions:";
  return ($std_flags.usageInfo(optionsDesc, header) + "\n\nPrefix a flag with \'no-\' to negate it. For example \'--no-logo\'.");
}
function getDocName(opts)  /* (opts : options) -> string */  {
  var _x0 = $std_core.find(metadata(opts), function(kv  /* (string, string) */ ) {  return ($std_core.fst(kv) === "docname");});
  if (_x0 != null) {
    return ($std_core.snd(_x0.unJust) + ": ");
  }
  else {
    return "";
  }
}
function getMathjax(opts)  /* (opts : mathoptions) -> string */  {
  var _x0 = (mathjax(opts) !== "default");
  return (_x0) ? mathjax(opts) : "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
}
function getMathLatex(opts)  /* (opts : options) -> string */  {
  var _x0 = (latex(math(opts)) !== "");
  if (_x0) {
    return latex(math(opts));
  }
  else {
    return latex_1(opts);
  }
}
function getMathLatexFull(opts)  /* (opts : options) -> string */  {
  var _x0 = $std_core.bool_2(latexFull(math(opts)));
  if (_x0) {
    return latexFull(math(opts));
  }
  else {
    return getMathLatex(opts);
  }
}
function getMathRender_1(opts)  /* (opts : mathoptions) -> common/mathrender */  {
  var _x0 = render(opts);
  return (_x0 == null) ? $common.Svg : _x0.unJust;
}
function getMathRenderFull(opts)  /* (opts : mathoptions) -> common/mathrender */  {
  var _x0 = renderFull(opts);
  return (_x0 == null) ? getMathRender_1(opts) : _x0.unJust;
}
function getMathRender(opts, kind)  /* (opts : mathoptions, kind : common/mathkind) -> common/mathrender */  {
  return (kind === 1) ? getMathRender_1(opts) : getMathRenderFull(opts);
}
function getMathScale(opts, mrender)  /* (opts : mathoptions, mrender : common/mathrender) -> int */  {
  var _x0 = scale(opts) === 0;
  if (_x0) {
    return (mrender === 1) ? scalePng(opts) : scaleSvg(opts);
  }
  else {
    return scale(opts);
  }
}
function getPdfLatex(opts)  /* (opts : options) -> string */  {
  var _x0 = $std_core.bool_2(pdflatex(opts));
  if (_x0) {
    return pdflatex(opts);
  }
  else {
    return $std_path.combine($std_path.dirname(latex_1(opts)), "xelatex");
  }
}
function indent(opts, s, maxLine)  /* (opts : options, s : string, maxLine : ?int) -> string */  {
  var maxLine_8022 = (maxLine !== undefined) ? maxLine : 78;
  return $std_core.unlines($std_core.map_5($std_core.lines(cutoff(s, maxLine_8022)), function(line  /* string */ ) {  return ("  " + line);}));
}
function parseOptionList(version0, cmdargs)  /* (version : string, cmdargs : list<string>) -> io maybe<commandOptions> */  {
  var _x0 = $std_flags.parse(_createCommandOptions(undefined, undefined, undefined, undefined, undefined, _createOptions(version0, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)), optionsDesc, cmdargs, undefined);
  var _x1 = !($std_core.isNil(_x0.thd));
  if (_x1) {
    $std_core.println(($std_core.join_4(_x0.thd, "\n") + ("\n" + fullUsageInfo())));
    return $std_core.Nothing;
  }
  else {
    if (showVersion(_x0.fst)) {
      $std_core.println(("Madoko, version " + (version0 + ".")));
      return $std_core.Nothing;
    }
    else {
      if ($std_core.isNil(_x0.snd)) {
        $std_core.println(fullUsageInfo());
        return $std_core.Nothing;
      }
      else {
        return $std_core.Just(check(_copy_2(_x0.fst, undefined, undefined, undefined, undefined, _x0.snd, undefined)));
      }
    }
  }
}
 
// Parse the options from the command line given some extra arguments (default `""`).
function parseOptions(version0, extra)  /* (version : string, extra : ?string) -> io maybe<commandOptions> */  {
  var extra_8899 = (extra !== undefined) ? extra : "";
  return parseOptionList(version0, $std_core._plus__3($std_env.$arguments, $std_core.filter($std_core.list_4($std_core.split_1(extra_8899, " ")), function(s  /* string */ ) {  return (s !== "");})));
}
function print(opts, msg, level)  /* (opts : options, msg : string, level : ?int) -> console () */  {
  var level_9079 = (level !== undefined) ? level : 1;
  var _x0 = verbose(opts) >= level_9079;
  if (_x0) {
    return $std_core.println(indent(opts, (getDocName(opts) + msg), verboseMaxLine(opts)));
  }
  else {
    return $std_core._unit_;
  }
}
function printErr(opts, msg, level)  /* (opts : options, msg : string, level : ?int) -> console () */  {
  var level_9237 = (level !== undefined) ? level : 0;
  var _x0 = verbose(opts) >= level_9237;
  if (_x0) {
    return $std_core.println(indent(opts, msg, verboseMaxLine(opts)));
  }
  else {
    return $std_core._unit_;
  }
}
 
// koka exports:
return { 'Bst': Bst, 'Csl': Csl, 'Static': Static, 'Dynamic': Dynamic, 'Mathoptions': Mathoptions, 'Options': Options, 'CommandOptions': CommandOptions, 'styleName': styleName, 'locale': locale, 'isBst': isBst, 'isCsl': isCsl, 'isStatic': isStatic, 'isDynamic': isDynamic, 'mode': mode, 'render': render, 'renderFull': renderFull, 'mathjax': mathjax, 'mjext': mjext, 'imgDir': imgDir, 'scale': scale, 'scalePng': scalePng, 'scaleSvg': scaleSvg, 'dpi': dpi, 'baseline': baseline, 'embedLimit': embedLimit, 'docClass': docClass, 'svgShare': svgShare, 'svgPrec': svgPrec, 'svgDefs': svgDefs, 'svgFontFormat': svgFontFormat, 'dvipng': dvipng, 'dvisvg': dvisvg, 'latex': latex, 'latexFull': latexFull, 'dvips': dvips, 'ps2pdf': ps2pdf, 'convert': convert, 'dim': dim, '_copy': _copy, 'version': version, 'bench': bench, 'verbose': verbose, 'verboseMaxLine': verboseMaxLine, 'pedantic': pedantic, 'sanitize': sanitize, 'xmp': xmp, 'full': full, 'tex': tex, 'pdf': pdf, 'texzip': texzip, 'rebuild': rebuild, 'sandbox': sandbox, 'prelude': prelude, 'title': title, 'css': css, 'scripts': scripts, 'scriptsx': scriptsx, 'htmlHeader': htmlHeader, 'cssHeader': cssHeader, 'jsHeader': jsHeader, 'htmlFooter': htmlFooter, 'jsFooter': jsFooter, 'htmlMeta': htmlMeta, 'texHeader': texHeader, 'texHeaderx': texHeaderx, 'texDocHeader': texDocHeader, 'texDocHeaderx': texDocHeaderx, 'texFooter': texFooter, 'texSectionNum': texSectionNum, 'bibStyle': bibStyle, 'bib': bib, 'locale_1': locale_1, 'packages': packages, 'packagesx': packagesx, 'docClass_1': docClass_1, 'citestyle': citestyle, 'citeAll': citeAll, 'tocDepth': tocDepth, 'headingDepth': headingDepth, 'headingBase': headingBase, 'sectionMax': sectionMax, 'sectionBase': sectionBase, 'starBold': starBold, 'prettyAlign': prettyAlign, 'logo': logo, 'math': math, 'highlight': highlight, 'hilitelang': hilitelang, 'pdflatex': pdflatex, 'bibtex': bibtex, 'latex_1': latex_1, 'processTimeout': processTimeout, 'zip': zip, 'metadata': metadata, 'embedinfos': embedinfos, 'embedLimit_1': embedLimit_1, 'lineNo': lineNo, 'lineNoWeb': lineNoWeb, 'copyStyles': copyStyles, 'lineMap': lineMap, 'extractStart': extractStart, 'extractEnd': extractEnd, '_copy_1': _copy_1, 'showVersion': showVersion, 'convertTex': convertTex, 'outputDir': outputDir, 'installDir': installDir, 'inputs': inputs, 'options': options, '_copy_2': _copy_2, '_createMathoptions': _createMathoptions, '_createOptions': _createOptions, '_createCommandOptions': _createCommandOptions, 'cflag': cflag, 'check': check, 'creq': creq, 'cutoff': cutoff, 'oflag': oflag, 'oreq': oreq, 'setbench': setbench, 'setMeta': setMeta, 'optionsDesc': optionsDesc, 'fullUsageInfo': fullUsageInfo, 'getDocName': getDocName, 'getMathjax': getMathjax, 'getMathLatex': getMathLatex, 'getMathLatexFull': getMathLatexFull, 'getMathRender_1': getMathRender_1, 'getMathRenderFull': getMathRenderFull, 'getMathRender': getMathRender, 'getMathScale': getMathScale, 'getPdfLatex': getPdfLatex, 'indent': indent, 'parseOptionList': parseOptionList, 'parseOptions': parseOptions, 'print': print, 'printErr': printErr };
});