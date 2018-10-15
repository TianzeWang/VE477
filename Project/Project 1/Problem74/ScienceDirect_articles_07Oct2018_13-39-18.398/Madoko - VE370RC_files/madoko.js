// koka generated module: "madoko"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_dict', './std_regex', './common', './options', './metadata', './block', './formatBlock', './inline', './formatInline', './definitions', './entity', './htmlFormatter', './texFormatter', './latexFormatter', './attributes', './std_log'], function($std_core, $std_dict, $std_regex, $common, $options, $metadata, $block, $formatBlock, $inline, $formatInline, $definitions, $entity, $htmlFormatter, $texFormatter, $latexFormatter, $attributes, $std_log) {
"use strict";
 
// koka declarations:
function initialOptions()  /* () -> options/options */  {
  return $options._createOptions(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
 
// Export initial options for JavaScript usage
var initialOptions0 = initialOptions();
 
// Create an ":inlineContext"
function inlineContext(fmt, metadata, mathinfos, embedinfos, citestyle, sanitize, bench, verbose, mathStatic, highlight, starBold, sandbox, prettyAlign)  /* (fmt : common/formatter, metadata : std/dict/dict<string>, mathinfos : std/dict/dict<common/mathinfo>, embedinfos : std/dict/dict<common/embedinfo>, citestyle : ?common/citestyle, sanitize : ?bool, bench : ?bool, verbose : ?int, mathStatic : ?bool, highlight : ?bool, starBold : ?bool, sandbox : ?bool, prettyAlign : ?int) -> inline/inlineContext */  {
  var citestyle_172 = (citestyle !== undefined) ? citestyle : $common.citeAuto;
  var sanitize_176 = (sanitize !== undefined) ? sanitize : false;
  var bench_180 = (bench !== undefined) ? bench : false;
  var verbose_184 = (verbose !== undefined) ? verbose : 0;
  var mathStatic_188 = (mathStatic !== undefined) ? mathStatic : false;
  var highlight_192 = (highlight !== undefined) ? highlight : true;
  var starBold_196 = (starBold !== undefined) ? starBold : false;
  var sandbox_200 = (sandbox !== undefined) ? sandbox : false;
  var prettyAlign_204 = (prettyAlign !== undefined) ? prettyAlign : 2;
  var _x0 = $std_dict._lb__rb__2(metadata, "tex2");
  if (_x0 != null) {
    var isTex2 = ($std_core.toLower(_x0.unJust) === "true");
  }
  else {
    var isTex2 = false;
  }
  function pickx(f, g, h)  /* forall<a> (f : a, g : a, h : a) -> a */  {
    if (fmt === 2) {
      return (isTex2) ? h : g;
    }
    else {
      return f;
    }
  }
  var _x0 = (isTex2) ? $latexFormatter.fmtLatexMathCmd : $texFormatter.fmtTexCmd;
  var _x1 = (isTex2) ? $latexFormatter.fmtLatexMathEnv : $texFormatter.fmtTexEnv;
  return $inline.InlineContext($formatInline.inlineGrammar(fmt, bench_180), $std_dict.dict(), $std_dict.dict(), $std_dict.dict(), $attributes.emptyRules, metadata, mathinfos, embedinfos, citestyle_172, sanitize_176, bench_180, verbose_184, mathStatic_188, highlight_192, starBold_196, sandbox_200, prettyAlign_204, pickx($htmlFormatter.fmtHtmlCmd, $texFormatter.fmtTexCmd, $latexFormatter.fmtLatexCmd), pickx($htmlFormatter.fmtHtmlEscape, $texFormatter.fmtTexEscape, $latexFormatter.fmtLatexEscape), pickx($htmlFormatter.fmtHtmlLink, $texFormatter.fmtTexLink, $latexFormatter.fmtLatexLink), pickx($htmlFormatter.fmtHtmlFootnote, $texFormatter.fmtTexFootnote, $latexFormatter.fmtLatexFootnote), pickx($htmlFormatter.fmtHtmlTable, $texFormatter.fmtTexTable, $latexFormatter.fmtLatexTable), pickx($htmlFormatter.fmtHtmlEnv, $texFormatter.fmtTexEnv, $latexFormatter.fmtLatexEnv), pickx($htmlFormatter.fmtHtmlCodePlain, $texFormatter.fmtTexCodePlain, $latexFormatter.fmtLatexCodePlain), pickx($htmlFormatter.fmtHtmlCodeToken, $texFormatter.fmtTexCodeToken, $latexFormatter.fmtLatexCodeToken), pickx($htmlFormatter.fmtHtmlLineInfo, $texFormatter.fmtTexLineInfo, $latexFormatter.fmtLatexLineInfo), pickx($htmlFormatter.fmtHtmlCodeTable, $texFormatter.fmtTexCodeTable, $latexFormatter.fmtLatexCodeTable), pickx(_x0, $texFormatter.fmtTexCmd, $latexFormatter.fmtLatexMathCmd), pickx(_x1, $texFormatter.fmtTexEnv, $latexFormatter.fmtLatexMathEnv), fmt);
}
function logMetadata(mdata)  /* (mdata : options/metadata) -> () */  {
  return $std_core.foreach(mdata, function(kv  /* (string, string) */ ) {  var _x0 = (!($std_core.startsWith(kv.fst, "~")) && (!($std_core.startsWith(kv.fst, ".")) && !($std_core.startsWith(kv.fst, "#")))); if (_x0) {  return $std_log.log("entities", ("{\"name\":" + ($common.json(kv.fst) + (",\"value\":" + ($common.json(kv.snd) + "}")))));} else {  return $std_core._unit_;}});
}
function normalizeSource(src)  /* (src : string) -> string */  {
  if (((src).indexOf('\r') >= 0)) {
    var srcnl = $std_regex.replaceAll_1(src, $std_regex.regex("\\r\\n?", undefined, undefined), "\n", undefined);
  }
  else {
    var srcnl = src;
  }
  return $std_regex.replaceAll_1(srcnl, $std_regex.regex("\\t", undefined, undefined), "    ", undefined);
}
 
// Takes source markdown input and returns formatted html
function markdownNormal(src0, options0, fmt)  /* (src0 : string, options0 : ?options/options, fmt : ?common/formatter) -> pure (string, options/options) */  {
  var options0_962 = (options0 !== undefined) ? options0 : initialOptions0;
  var fmt_966 = (fmt !== undefined) ? fmt : $common.FmtHtml;
  var _x0 = $metadata.parseMeta(options0_962, fmt_966, normalizeSource(src0));
  var options = $options._copy_1(_x0.fst, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $metadata.completeAuthorKeys($options.metadata(_x0.fst)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  var xfull = $std_core.maybe($options.full(options), true, $std_core.id);
  var _x1 = (xfull && $options.logo(options));
  var logo = (_x1) ? "\n\n~Begin LogoMadoko\n&LogoMadoko;\n~End LogoMadoko\n" : "\n";
  var _x1 = $options.verbose(options) >= 4;
  if (_x1) {
    $std_core.trace(("metadata: " + $common.showFormatter(fmt_966)));
    $std_core.foreach($options.metadata(options), function(md  /* (string, string) */ ) {  return $std_core.trace(("  " + ($std_core.fst(md) + (": " + $metadata.cutoff($std_core.snd(md), 80)))));});
    $std_core.trace("parse blocks");
  }
  else {
    $std_core._unit_;
  }
  ($options.citeAll(options)) ? $std_log.log("aux", "\\citation{*}") : $std_core._unit_;
  var icontext = inlineContext(fmt_966, $std_dict.dict_1($options.metadata(options)), $options.dim($options.math(options)), $options.embedinfos(options), $std_core.maybe($options.citestyle(options), $common.citeNumeric, $std_core.id), $options.sanitize(options), $options.bench(options), $options.verbose(options), $options.isStatic($options.mode($options.math(options))), $options.highlight(options), $options.starBold(options), $options.sandbox(options), $options.prettyAlign(options));
  var _x1 = $definitions.parseBody($formatBlock.initialFormatContext(icontext, $options.lineMap(options), $options.headingBase(options), $options.pedantic(options), fmt_966), $options.lineNo(options), (_x0.snd + logo), $options.metadata(options), $options.tocDepth(options), $options.sectionBase(options), $options.sectionMax(options));
  var _x2 = $options.verbose(options) >= 3;
  (_x2) ? $std_core.trace("parse inline") : $std_core._unit_;
  var body = $formatBlock.formatBlocks(_x1.snd, _x1.fst);
  var _x2 = $options.verbose(options) >= 3;
  (_x2) ? $std_core.trace("generate output") : $std_core._unit_;
  if ($common.isFmtHtml(fmt_966)) {
    $std_core.foreach($std_dict.list_1($inline.labels($formatBlock.inlineContext(_x1.snd))), function(elem  /* (string, common/label) */ ) {  return $std_log.log("labels", ("{ \"name\": " + ($common.json(elem.fst) + (", \"text\": " + ($common.json($common.labelText(elem.snd)) + (", \"caption\": " + ($common.json($common.labelCaption(elem.snd)) + " }")))))));});
    $std_core.foreach($std_dict.list_1($inline.links($formatBlock.inlineContext(_x1.snd))), function(elem0  /* (string, common/link) */ ) {  return $std_log.log("links", ("{ \"name\": " + ($common.json(elem0.fst) + (", \"href\": " + ($common.json($common.href(elem0.snd)) + (", \"title\": " + ($common.json($common.title(elem0.snd)) + " }")))))));});
    $entity.logEntities();
    logMetadata($options.metadata(options));
  }
  else {
    $std_core._unit_;
  }
  if (xfull) {
    var res = $inline.pick(fmt_966, $htmlFormatter.fmtHtmlFull, $latexFormatter.fmtLatexFull)(body, options, $inline.metadata($formatBlock.inlineContext(_x1.snd)));
  }
  else {
    var res = body;
  }
  var _x2 = (!(xfull) || !($common.isFmtHtml(fmt_966)));
  if (_x2) {
    $htmlFormatter.fmtHtmlFull("", options, $inline.metadata($formatBlock.inlineContext(_x1.snd)));
  }
  else {
    "";
  }
  var _x2 = (!(xfull) || !($common.isFmtTex(fmt_966)));
  if (_x2) {
    $latexFormatter.fmtLatexFull("", options, $inline.metadata($formatBlock.inlineContext(_x1.snd)));
  }
  else {
    "";
  }
  var _x2 = $options.verbose(options) >= 3;
  (_x2) ? $std_core.trace("done") : $std_core._unit_;
  return $std_core._tuple2_(res, options);
}
var rxxmp = $std_regex.regex(("(<xmp\\b" + ($block.tagContent + ">)([\\s\\S]*?)</xmp>")), undefined, undefined);
 
// Process only markdown between <xmp> tags
function markdownXmp(src, options, fmt)  /* (src : string, options : ?options/options, fmt : ?common/formatter) -> pure (string, options/options) */  {
  var options_3416 = (options !== undefined) ? options : initialOptions0;
  var fmt_3420 = (fmt !== undefined) ? fmt : $common.FmtHtml;
  var commented = ("~begin htmlraw\n" + ($std_regex.replaceAll_1(src, rxxmp, "\n~end htmlraw\n$2\n~begin htmlraw\n", undefined) + "\n~end htmlraw"));
  return markdownNormal(commented, options_3416, fmt_3420);
}
 
// Takes source markdown input and returns formatted html
function markdown(src, options, fmt)  /* (src : string, options : ?options/options, fmt : ?common/formatter) -> pure (string, options/options) */  {
  var options_3544 = (options !== undefined) ? options : initialOptions0;
  var fmt_3548 = (fmt !== undefined) ? fmt : $common.FmtHtml;
  if ($options.xmp(options_3544)) {
    return markdownXmp(src, options_3544, fmt_3548);
  }
  else {
    return markdownNormal(src, options_3544, fmt_3548);
  }
}
function traceRuleHist()  /* () -> () */  {
  return $common.traceRuleHist();
}
 
// koka exports:
return { 'initialOptions': initialOptions, 'initialOptions0': initialOptions0, 'inlineContext': inlineContext, 'logMetadata': logMetadata, 'normalizeSource': normalizeSource, 'markdownNormal': markdownNormal, 'rxxmp': rxxmp, 'markdownXmp': markdownXmp, 'markdown': markdown, 'traceRuleHist': traceRuleHist };
});