// Monarch syntax highlighter, version: 0.1.0
// Copyright (C) Microsoft Corporation. All rights reserved.
if (typeof define !== 'function') { var define = require('amdefine')(module) }
// 2012 (c) Daan Leijen  

/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

/*---------------------------------------------------------
* Copyright (C) Microsoft Corporation. All rights reserved.
*--------------------------------------------------------*/

define("monarch/editor/modes/modes",[],function(){var e={None:0,Open:1,Close:-1},t={None:0,Indent:1,IndentOutdent:2};return{Bracket:e,IndentAction:t}}),define("monarch/editor/modes/stream",[],function(){var e=function(){function e(e){this.source=e,this._pos=0}return e.prototype.pos=function(){return this._pos},e.prototype.eos=function(){return this._pos>=this.source.length},e.prototype.checkEOS=function(){if(this.eos())throw new Error("Stream is at the end")},e.prototype.peek=function(){return this.checkEOS(),this.source[this._pos]},e.prototype.next=function(){return this.checkEOS(),this.source[this._pos++]},e.prototype.advance=function(e){var t=this._pos;return this._pos+=e,this.source.substring(t,this._pos)},e.prototype.advanceToEOS=function(){var e=this._pos;return this._pos=this.source.length,this.source.substring(e,this._pos)},e.prototype.goBack=function(e){this._pos-=e},e}();return{LineStream:e}}),define("monarch/editor/modes/monarch/monarchCommon",["require","exports"],function(e,t){function n(){return"0.96  (2013.01.22)"}function r(e){return e?!1:!0}function i(e,t){return e.ignoreCase&&t?t.toLowerCase():t}function u(e){return e.replace(o,function(e){var t=s[e];return t?t:""})}function a(e){return e.replace(/[&<>'"]/g,"_")}function f(e,t){console.log(t)}function l(e,t){throw new Error(t)}function c(e,n,r,i,s){var o=/\$((\$)|(#)|(\d\d?)|[sS](\d\d?)|@(\w+))/g,u=null;return n.replace(o,function(n,o,a,f,l,c,h,p,d){return t.empty(a)?t.empty(f)?!t.empty(l)&&l<i.length?t.fixCase(e,i[l]):!t.empty(h)&&e&&typeof e[h]=="string"?e[h]:(u===null&&(u=s.split("."),u.unshift(s)),!t.empty(c)&&c<u.length?t.fixCase(e,u[c]):""):t.fixCase(e,r):"$"})}function h(e,t){while(t&&t.length>0){var n=e.tokenizer[t];if(n)return n;var r=t.lastIndexOf(".");r<0?t=null:t=t.substr(0,r)}return null}function p(e,t){while(t&&t.length>0){var n=e.stateNames[t];if(n)return!0;var r=t.lastIndexOf(".");r<0?t=null:t=t.substr(0,r)}return!1}t.monarchPath="monarch/editor/modes/monarch/monarch",t.version=n,t.empty=r,t.fixCase=i;var s={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&apos;",'"':"&quot;"},o=new RegExp("["+Object.keys(s).join("")+"]","g");t.htmlEscape=u,t.sanitize=a,t.log=f,t.throwError=l,t.substituteMatches=c,t.findRules=h,t.stateExists=p}),define("monarch/platform/platform",[],function(){var e={registerMode:function(e,t,n){return null},getMode:function(e){return null},as:function(e){return this}};return{Registry:e}}),define("monarch/platform/services",[],function(){var e=function(){function e(e,t,n,r){}return e}();return e.create=function(t,n){return new e(t,n)},{AsyncDescriptor:e}}),define("monarch/editor/modes/modesExtensions",[],function(){var e=function(){function e(){}return e.prototype.getId=function(){return null},e.prototype.getInitialState=function(){throw new Error("Abstract Method")},e}(),t=function(){function e(e){this.mode=e}return e.prototype.getMode=function(){return this.mode},e.prototype.clone=function(){var e=this.makeClone();return e},e.prototype.makeClone=function(){throw new Error("Abstract Method")},e.prototype.getStateData=function(){return null},e.prototype.setStateData=function(e){},e.prototype.equals=function(t){if(t===null||this.mode!==t.getMode())return!1;if(!(t instanceof e))return!1},e}(),n={EditorModes:"editormodes"};return{AbstractState:t,AbstractMode:e,Extensions:n}}),define("monarch/base/objects",[],function(){function e(e,t){t==null&&(t=!1);var n={};for(var r=0;r<e.length;++r){var i=t?e[r].toLowerCase():e[r];n[e[r]]=!0}return t?function(e){return n[e.toLowerCase()]!==undefined}:function(e){return n[e]!==undefined}}return{createKeywordMatcher:e}}),define("monarch/editor/modes/monarch/monarchCompile",["require","exports","monarch/base/objects","monarch/editor/modes/modes","monarch/editor/modes/monarch/monarchCommon"],function(e,t,n,r,i){function s(e,t){if(!t)return!1;if(!Array.isArray(t))return!1;var n;for(n in t)if(t.hasOwnProperty(n)&&!e(t[n]))return!1;return!0}function o(e,t,n){return typeof e=="boolean"?e:(n&&(e||t===undefined)&&n(),t===undefined?null:t)}function u(e,t,n){return typeof e=="string"?e:(n&&(e||t===undefined)&&n(),t===undefined?null:t)}function a(e,t,n){return u(e,t,n)}function f(e,t,n){return typeof e=="number"?e:(n&&(e||t===undefined)&&n(),t===undefined?null:t)}function l(e,t,n){return s(function(e){return typeof e=="string"},e)?e.slice(0):typeof e=="string"?[e]:(n&&(e||t===undefined)&&n(),t===undefined?null:t)}function c(e,t){if(typeof t!="string")return null;var n=0;while(t.indexOf("@")>=0&&n<5)n++,t=t.replace(/@(\w+)/g,function(n,r){var s="";return typeof e[r]=="string"?s=e[r]:e[r]&&e[r]instanceof RegExp?s=e[r].source:e[r]===undefined?i.throwError(e,"language definition does not contain attribute '"+r+"', used at: "+t):i.throwError(e,"attribute reference '"+r+"' must be a string, used at: "+t),i.empty(s)?"":"(?:"+s+")"});return new RegExp(t,e.ignoreCase?"i":"")}function h(e,t,n,r){if(r<0)return e;if(r<t.length)return t[r];if(r>=100){r-=100;var i=n.split(".");i.unshift(n);if(r<i.length)return i[r]}return null}function p(e,t,r,o){var u=-1,a=r,f=r.match(/^\$(([sS]?)(\d\d?)|#)(.*)$/);f&&(f[3]&&(u=parseInt(f[3]),f[2]&&(u+=100)),a=f[4]);var l="~",p=a;!a||a.length===0?(l="!=",p=""):/^\w*$/.test(p)?l="==":(f=a.match(/^(@|!@|~|!~|==|!=)(.*)$/),f&&(l=f[1],p=f[2]));var d;if(l!=="~"&&l!=="!~"||!/^(\w|\|)*$/.test(p))if(l==="@"||l==="!@"){var m=e[p];m||i.throwError(e,"the @ match target '"+p+"' is not defined, in rule: "+t),s(function(e){return typeof e=="string"},m)||i.throwError(e,"the @ match target '"+p+"' must be an array of strings, in rule: "+t);var v=n.createKeywordMatcher(m,e.ignoreCase);d=function(e){return l==="@"?v(e):!v(e)}}else if(l==="~"||l==="!~")if(p.indexOf("$")<0){var g=c(e,"^"+p+"$");d=function(e){return l==="~"?g.test(e):!g.test(e)}}else d=function(t,n,r,s){var o=c(e,"^"+i.substituteMatches(e,p,n,r,s)+"$");return o.test(t)};else if(p.indexOf("$")<0){var y=i.fixCase(e,p);d=function(e){return l==="=="?e===y:e!==y}}else{var y=i.fixCase(e,p);d=function(t,n,r,s,o){var u=i.substituteMatches(e,y,n,r,s);return l==="=="?t===u:t!==u}}else{var v=n.createKeywordMatcher(p.split("|"),e.ignoreCase);d=function(e){return l==="~"?v(e):!v(e)}}return u===-1?{name:r,value:o,test:function(e,t,n,r){return d(e,e,t,n,r)}}:{name:r,value:o,test:function(e,t,n,r){var i=h(e,t,n,u);return d(i?i:"",e,t,n,r)}}}function d(e,t,n){if(!n)return{token:""};if(typeof n=="string")return n;if(n.token||n.token===""){if(typeof n.token!="string")return i.throwError(e,"a 'token' attribute must be of type string, in rule: "+t),{token:""};var s={token:n.token};n.token.indexOf("$")>=0&&(s.tokenSubst=!0),typeof n.bracket=="string"&&(n.bracket==="@open"?s.bracket=r.Bracket.Open:n.bracket==="@close"?s.bracket=r.Bracket.Close:i.throwError(e,"a 'bracket' attribute must be either '@open' or '@close', in rule: "+t));if(n.next)if(typeof n.next!="string")i.throwError(e,"the next state must be a string value in rule: "+t);else{var o=n.next;/^(@pop|@push|@popall)$/.test(o)||(o[0]==="@"&&(o=o.substr(1)),o.indexOf("$")<0&&(i.stateExists(e,i.substituteMatches(e,o,"",[],""))||i.throwError(e,"the next state '"+n.next+"' is not defined in rule: "+t))),s.next=o}return typeof n.goBack=="number"&&(s.goBack=n.goBack),typeof n.switchTo=="string"&&(s.switchTo=n.switchTo),typeof n.log=="string"&&(s.log=n.log),typeof n.nextEmbedded=="string"&&(s.nextEmbedded=n.nextEmbedded,e.usesEmbedded=!0),s}if(Array.isArray(n)){var u=[],a;for(a in n)n.hasOwnProperty(a)&&(u[a]=d(e,t,n[a]));return{group:u}}if(n.cases){var f=[],l;for(l in n.cases)if(n.cases.hasOwnProperty(l)){var c=d(e,t,n.cases[l]);l==="@default"||l==="@"||l===""?f.push({test:null,value:c,name:l}):l==="@eos"?f.push({test:function(e,t,n,r){return r},value:c,name:l}):f.push(p(e,t,l,c))}var h=e.defaultToken;return{test:function(e,t,n,r){var i;for(i in f)if(f.hasOwnProperty(i)){var s=!f[i].test||f[i].test(e,t,n,r);if(s)return f[i].value}return h}}}return i.throwError(e,"an action must be a string, an object with a 'token' or 'cases' attribute, or an array of actions; in rule: "+t),""}function m(e){function r(s,a,f){var l;for(l in f)if(f.hasOwnProperty(l)){var c=f[l],h=c.include;if(h)typeof h!="string"&&i.throwError(t,"an 'include' attribute must be a string at: "+s),h[0]==="@"&&(h=h.substr(1)),e.tokenizer[h]||i.throwError(t,"include target '"+h+"' is not defined at: "+s),r(s+"."+h,a,e.tokenizer[h]);else{var p=new v(s);if(Array.isArray(c)&&c.length>=1&&c.length<=3){p.setRegex(n,c[0]);if(c.length>=3)if(typeof c[1]=="string")p.setAction(n,{token:c[1],next:c[2]});else if(typeof c[1]=="object"){var d=c[1];d.next=c[2],p.setAction(n,d)}else i.throwError(t,"a next state as the last element of a rule can only be given if the action is either an object or a string, at: "+s);else p.setAction(n,c[1])}else c.regex||i.throwError(t,"a rule must either be an array, or an object with a 'regex' or 'include' field at: "+s),c.name&&(p.name=u(c.name)),c.matchOnlyAtStart&&(p.matchOnlyAtLineStart=o(c.matchOnlyAtLineStart)),p.setRegex(n,c.regex),p.setAction(n,c.action);a.push(p)}}}if(!e||typeof e!="object")throw new Error("Monarch: expecting a language definition object");if(typeof e.name!="string")throw new Error("Monarch: a language definition must include a string 'name' attribute");var t={};t.name=e.name,t.displayName=u(e.displayName,t.name),t.logConsole=u(e.logConsole),t.noThrow=!1,t.maxStack=100,t.mimeTypes=l(e.mimeTypes,undefined,function(){i.throwError(t,"the attribute 'mimeTypes' must be defined as an array of strings")}),t.start=u(e.start),t.fileExtensions=l(e.fileExtensions),t.ignoreCase=o(e.ignoreCase,!1),t.lineComment=u(e.lineComment,"//"),t.blockCommentStart=u(e.blockCommentStart,"/*"),t.blockCommentEnd=u(e.blockCommentEnd,"*/"),t.tokenPostfix=u(e.tokenPostfix,"."+t.name),t.defaultToken=u(e.defaultToken,"source",function(){i.throwError(t,"the 'defaultToken' must be a string")}),t.editorOptions=e.editorOptions?e.editorOptions:null,t.workerDescriptor=e.workerDescriptor,t.usesEmbedded=!1,t.wordDefinition=e.wordDefinition||undefined,!t.lineComment&&e.lineComments&&(typeof e.lineComments=="string"?t.lineComment=e.lineComments:typeof e.lineComments[0]=="string"&&(t.lineComment=e.lineComments[0]));var n=e;n.name=t.name,n.displayName=t.displayName,n.ignoreCase=t.ignoreCase,n.noThrow=t.noThrow,n.usesEmbedded=t.usesEmbedded,n.stateNames=e.tokenizer,n.logConsole=t.logConsole,n.defaultToken=t.defaultToken,(!e.tokenizer||typeof e.tokenizer!="object")&&i.throwError(t,"a language definition must define the 'tokenizer' attribute as an object"),t.tokenizer=[];var s;for(s in e.tokenizer)if(e.tokenizer.hasOwnProperty(s)){t.start||(t.start=s);var f=e.tokenizer[s];t.tokenizer[s]=new Array,r("tokenizer."+s,t.tokenizer[s],f)}t.usesEmbedded=n.usesEmbedded,t.nonWordTokens=l(e.nonWordTokens,["delimiter","delimiter.parenthesis","delimiter.curly","delimiter.square","delimiter.angle"],function(){i.throwError(t,"the 'nonWordTokens' attribute must be an array of strings")});var h;for(h in t.nonWordTokens)t.nonWordTokens.hasOwnProperty(h)&&(t.nonWordTokens[h]+=t.tokenPostfix);e.brackets?Array.isArray(e.brackets)||i.throwError(t,"the 'brackets' attribute must be defined as an array"):e.brackets=[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}];var p=[];for(var d in e.brackets)if(e.brackets.hasOwnProperty(d)){var m=e.brackets[d];m&&Array.isArray(m)&&m.length===3&&(m={token:m[2],open:m[0],close:m[1]}),m.open===m.close&&i.throwError(t,"open and close brackets in a 'brackets' attribute must be different: "+m.open+"\n hint: use the 'bracket' attribute if matching on equal brackets is required."),typeof m.open=="string"&&typeof m.token=="string"?p.push({token:u(m.token)+t.tokenPostfix,open:i.fixCase(t,u(m.open)),close:i.fixCase(t,u(m.close))}):i.throwError(t,"every element in the 'brackets' array must be a '{open,close,token}' object or array")}t.brackets=p;var g;e.autoClosingPairs?(Array.isArray(e.autoClosingPairs)||i.throwError(t,"the 'autoClosingPairs' attribute must be an array of string pairs (as arrays)"),g=e.autoClosingPairs.slice(0)):g=[['"','"'],["'","'"],["@brackets"]],t.autoClosingPairs=[];if(g)for(var y in g)if(g.hasOwnProperty(y)){var b=g[y],w;if(b==="@brackets"||b[0]==="@brackets"){var E;for(E in p)p.hasOwnProperty(E)&&p[E].open&&p[E].open.length===1&&p[E].close&&p[E].close.length===1&&(w={open:p[E].open,close:p[E].close},t.autoClosingPairs.push(w))}else Array.isArray(b)&&b.length===2&&typeof b[0]=="string"&&b[0].length===1&&typeof b[1]=="string"&&b[1].length===1?(w={open:i.fixCase(t,b[0]),close:i.fixCase(t,b[1])},t.autoClosingPairs.push(w)):typeof b.open=="string"&&b.open.length===1&&typeof b.close=="string"&&b.close.length===1?(w={open:i.fixCase(t,b.open[0]),close:i.fixCase(t,b.close[0])},t.autoClosingPairs.push(w)):i.throwError(t,"every element in an 'autoClosingPairs' array must be a pair of 1 character strings, or a '@brackets' directive")}if(e.autoIndent){var S=[];Array.isArray(e.autoIndent)||i.throwError(t,"an 'autoIndent' attribute must be an array of '{match,matchAfter}' objects");for(var x in e.autoIndent)e.autoIndent.hasOwnProperty(x)&&(typeof e.autoIndent[x].match!="string"&&i.throwError(t,"each object in the 'autoIndent' array must define a 'match' attribute"),S.push({match:c(t,e.autoIndent[x].match),matchAfter:c(t,u(e.autoIndent[x].matchAfter))}));t.autoIndent=S}if(e.autoComplete){var T=[];Array.isArray(e.autoComplete)||i.throwError(t,"an 'autoComplete' attribute must be an array of '{trigger,match,complete}' objects");for(var N in e.autoComplete)e.autoComplete.hasOwnProperty(N)&&(typeof e.autoComplete[N].triggers!="string"&&i.throwError(t,"each object in the 'autoComplete' array must define a 'triggers' attribute"),typeof e.autoComplete[N].match!="string"&&i.throwError(t,"each object in the 'autoComplete' array must define a 'match' attribute as a regular expression string"),typeof e.autoComplete[N].complete!="string"&&i.throwError(t,"each object in the 'autoComplete' array must define a 'complete' attribute"),T.push({triggers:i.fixCase(t,u(e.autoComplete[N].triggers)),match:c(t,e.autoComplete[N].match),complete:u(e.autoComplete[N].complete)}));t.autoComplete=T}if(e.noindentBrackets){var C=a(e.noindentBrackets,null,function(){i.throwError(t,"the 'noindentBrackets' must be a regular expression string")});t.noindentBrackets=c(t,C)}var k=[];for(var L in t.brackets)if(t.brackets.hasOwnProperty(L)){var A=t.brackets[L].close;A&&A.length>0&&(!t.noindentBrackets||!t.noindentBrackets.test(A))&&k.push(A.substr(A.length-1))}for(var O in t.autoComplete)t.autoComplete.hasOwnProperty(O)&&k.push(t.autoComplete[O].triggers);return t.electricChars=k.join("")+u(e.outdentTriggers,""),t.logConsole||(t.logConsole="monarchConsole"),t.noThrow=!0,t}var v=function(){function e(e){this.regex=new RegExp(""),this.action={token:""},this.matchOnlyAtLineStart=!1,this.name="",this.name=e}return e.prototype.setRegex=function(e,t){var n;typeof t=="string"?n=t:t instanceof RegExp?n=t.source:i.throwError(e,"rules must start with a match string or regular expression: "+this.name),this.matchOnlyAtLineStart=n.length>0&&n[0]==="^",this.name=this.name+": "+n,this.regex=c(e,"^(?:"+(this.matchOnlyAtLineStart?n.substr(1):n)+")")},e.prototype.setAction=function(e,t){this.action=d(e,this.name,t)},e}();t.compile=m});var __extends=this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r};define("monarch/editor/modes/monarch/monarch",["require","exports","monarch/platform/platform","monarch/platform/services","monarch/editor/modes/stream","monarch/editor/modes/modes","monarch/editor/modes/modesExtensions","monarch/editor/modes/monarch/monarchCommon","monarch/editor/modes/monarch/monarchCompile"],function(e,t,n,r,i,s,o,u,a){function f(e){return!e||e===""||/\bcomment\b/.test(e)||/\bwhite\b/.test(e)}function l(e,t){if(!t)return null;t=u.fixCase(e,t);var n=e.brackets;for(var r=0;r<n.length;r++){var i=n[r];if(i.open===t)return{token:i.token,bracketType:s.Bracket.Open};if(i.close===t)return{token:i.token,bracketType:s.Bracket.Close}}return null}function c(e,t,n){var r=[],i=[];for(var s=0;s<t.length;s++)if(!f(t[s].type)){var o="";s<t.length-1?o=e.substr(t[s].startIndex,t[s+1].startIndex-t[s].startIndex):o=e.substr(t[s].startIndex),t[s].startIndex<n?r.push(o):i.push(o)}return{pre:" "+r.join(" ")+" ",post:" "+i.join(" ")+" "}}function h(e,t,n){return n+1<t.length?e.substr(t[n].startIndex,t[n+1].startIndex-t[n].startIndex):e.substr(t[n].startIndex)}function p(e,t,n,r){var i;if(e.autoIndent){var o=c(t,n,r);for(i=0;i<e.autoIndent.length;i++)if(!e.autoIndent[i].match||e.autoIndent[i].match.test(o.pre))return!e.autoIndent[i].matchAfter||e.autoIndent[i].matchAfter.test(o.post)?{indentAction:s.IndentAction.IndentOutdent}:{indentAction:s.IndentAction.Indent}}var u=[];for(i=0;i<n.length&&n[i].startIndex<r;i++)n[i].bracket===s.Bracket.Open?u.push(i):n[i].bracket===s.Bracket.Close&&u.length>0&&u.pop();if(u.length===0)return null;var a=u.pop();if(e.noindentBrackets){var f=h(t,n,a);if(e.noindentBrackets.test(f))return null}return i<n.length&&n[i].bracket===s.Bracket.Close&&n[i].type===n[a].type?{indentAction:s.IndentAction.IndentOutdent}:{indentAction:s.IndentAction.Indent}}function d(e,t,n,r){var i=null,o=null;if(e.autoComplete&&e.autoComplete.length>0){var a=u.fixCase(e,t.substr(r,1)),f=c(t,n,r+1).pre;for(v=0;v<e.autoComplete.length;v++)if(e.autoComplete[v].triggers.indexOf(a)>=0){var l=f.match(e.autoComplete[v].match);if(l){i=l[0].replace(e.autoComplete[v].match,e.autoComplete[v].complete);break}}}var p=0,d=0;for(var v=0;v<n.length;v++){if(n[v].startIndex>r)break;p=n[v].startIndex,d=v}if(n[d].bracket===s.Bracket.Close)if(!e.noindentBrackets||!e.noindentBrackets.test(h(t,n,d))){var m=!0;for(v=0;v<p;v++)if(t[v]!==" "&&t[v]!=="	"){m=!1;break}m&&(o=n[d].type)}return i||o?{matchBracketType:o,appendText:i}:null}function b(e){var t=a.compile(e),n=new m({},null,t);return y[t.name]={mode:n,mimeTypes:t.mimeTypes},n}function w(e){var t=a.compile(e),i=new m({},null,t);y[t.name]={mode:i,mimeTypes:t.mimeTypes};if(n&&n.Registry){var s=n.Registry.as(o.Extensions.EditorModes);s.registerMode(t.name,t.mimeTypes,new r.AsyncDescriptor(u.monarchPath,"MonarchMode",null,t))}return i}function E(e,t){if(!e||e.getMode===undefined)return null;var n=e.getMode(t);if(n)return n;if(e.getOrCreateMode){var r=e.getOrCreateMode(t);return r&&r.value?r.value:null}}function S(e){if(n){var t=E(n.Registry.as(o.Extensions.EditorModes),e);if(t)return t}if(y[e])return y[e].mode;var r;for(r in y)if(y.hasOwnProperty(r)){var i=y[r];for(var s=0;s<i.mimeTypes.length;s++)if(i.mimeTypes[s]===e)return i.mode}return null}var v=function(e){function t(n,r,i,s){e.call(this,n),this.id=t.ID++,this.lexer=r,this.stack=i?i:[r.start],this.embeddedMode=s?s:null,this.embeddedEntered=!1,this.groupActions=null,this.groupMatches=null,this.groupMatched=null,this.groupRule=null}return __extends(t,e),t.prototype.makeClone=function(){return new t(this.getMode(),this.lexer,this.stack.slice(0),this.embeddedMode)},t.prototype.equals=function(n){if(!e.prototype.equals.call(this,n))return!1;if(n instanceof t){var r=n;if(this.stack.length!==r.stack.length||this.lexer.name!==r.lexer.name||this.embeddedMode!==r.embeddedMode)return!1;var i;for(i in this.stack)if(this.stack.hasOwnProperty(i)&&this.stack[i]!==r.stack[i])return!1;return!0}return!1},t.prototype.tokenize=function(e,t){var n=this.stack.length,r=0,i=this.stack[0];this.embeddedEntered=!1;var o=null,a=null,f=null,c=null,h=null;if(this.groupActions)r=this.groupActions.length,o=this.groupMatches,a=this.groupMatched.shift(),f=this.groupActions.shift(),h=this.groupRule,this.groupActions.length===0&&(this.groupActions=null,this.groupMatches=null,this.groupMatched=null,this.groupRule=null);else{if(e.eos())return{type:""};var p=e.advanceToEOS();e.goBack(p.length);var d=this.lexer.tokenizer[i];d||(d=u.findRules(this.lexer,i));if(!d)u.throwError(this.lexer,"tokenizer state is not defined: "+i);else{h=null;var v=e.pos(),m;for(m in d)if(d.hasOwnProperty(m)){h=d[m];if(v===0||!h.matchOnlyAtLineStart){o=p.match(h.regex);if(o){a=o[0],f=h.action;break}}}}}o||(o=[""],a=""),f||(e.eos()||(o=[e.peek()],a=o[0]),f=this.lexer.defaultToken),e.advance(a.length);while(f.test){var g=f.test(a,o,i,e.eos());f=g}var y=null;if(typeof f=="string"||Array.isArray(f))y=f;else if(f.group)y=f.group;else if(f.token!==null&&f.token!==undefined){y=f.token,f.tokenSubst&&(y=u.substituteMatches(this.lexer,y,a,o,i)),f.nextEmbedded&&(f.nextEmbedded==="@pop"?(this.embeddedMode||u.throwError(this.lexer,"cannot pop embedded mode if not inside one"),this.embeddedMode=null):this.embeddedMode?u.throwError(this.lexer,"cannot enter embedded mode from within an embedded mode"):(this.embeddedMode=u.substituteMatches(this.lexer,f.nextEmbedded,a,o,i),this.embeddedEntered=!0)),f.goBack&&e.goBack(f.goBack);if(f.switchTo&&typeof f.switchTo=="string"){var b=u.substituteMatches(this.lexer,f.switchTo,a,o,i);b[0]==="@"&&(b=b.substr(1)),u.findRules(this.lexer,b)?this.stack[0]=b:u.throwError(this.lexer,"trying to switch to a state '"+b+"' that is undefined in rule: "+h.name),c=null}else if(f.transform&&typeof f.transform=="function")this.stack=f.transform(this.stack),c=null;else if(f.next)if(f.next==="@push")this.stack.length>=this.lexer.maxStack?u.throwError(this.lexer,"maximum tokenizer stack size reached: ["+this.stack[0]+","+this.stack[1]+",...,"+this.stack[this.stack.length-2]+","+this.stack[this.stack.length-1]+"]"):this.stack.unshift(i);else if(f.next==="@pop")this.stack.length<=1?u.throwError(this.lexer,"trying to pop an empty stack in rule: "+h.name):this.stack.shift();else if(f.next==="@popall")this.stack.length>1&&(this.stack=[this.stack[this.stack.length-1]]);else{var b=u.substituteMatches(this.lexer,f.next,a,o,i);b[0]==="@"&&(b=b.substr(1)),u.findRules(this.lexer,b)?this.stack.unshift(b):u.throwError(this.lexer,"trying to set a next state '"+b+"' that is undefined in rule: "+h.name)}f.log&&typeof f.log=="string"&&u.log(this.lexer,this.lexer.displayName+": "+u.substituteMatches(this.lexer,f.log,a,o,i))}y===null&&(u.throwError(this.lexer,"lexer rule has no well-defined action in rule: "+h.name),y=this.lexer.defaultToken);if(Array.isArray(y)){this.groupActions&&this.groupActions.length>0&&u.throwError(this.lexer,"groups cannot be nested: "+h.name),o.length!==y.length+1&&u.throwError(this.lexer,"matched number of groups does not match the number of actions in rule: "+h.name);var w=0;for(var E=1;E<o.length;E++)w+=o[E].length;return w!==a.length&&u.throwError(this.lexer,"with groups, all characters should be matched in consecutive groups in rule: "+h.name),this.groupMatches=o,this.groupMatched=o.slice(1),this.groupActions=y.slice(0),this.groupRule=h,e.goBack(a.length),this.tokenize(e)}y==="@rematch"&&(e.goBack(a.length),a="",o=null,y="");if(a.length===0)if(n!==this.stack.length||i!==this.stack[0]||(this.groupActions?this.groupActions.length:0)!==r){if(!t)return this.tokenize(e)}else u.throwError(this.lexer,"no progress in tokenizer in rule: "+h.name),e.advanceToEOS();if(y.indexOf("@brackets")===0){var S=y.substr("@brackets".length),x=l(this.lexer,a);return x||(u.throwError(this.lexer,"@brackets token returned but no bracket defined as: "+a),x={token:"",bracketType:s.Bracket.None}),{type:u.sanitize(x.token+S),bracket:x.bracketType}}var T=y===""?"":y+this.lexer.tokenPostfix;return{type:u.sanitize(T),bracket:f.bracket}},t.ID=0,t}(o.AbstractState);t.MonarchLexer=v;var m=function(e){function t(i,s,u){!u.name&&u.lexer&&(u=u.lexer),s||(s={id:u.name,workerParticipants:[]}),e.call(this,i,s,u.workerDescriptor?r.AsyncDescriptor.create(u.workerDescriptor.moduleName,u.workerDescriptor.ctorName):t.WorkerDescriptor,u.usesEmbedded),this.lexer=u,this.modesRegistry=n.Registry?n.Registry.as(o.Extensions.EditorModes):null}return __extends(t,e),t.prototype.getInitialState=function(){return new v(this,this._recompile())},t.prototype._recompile=function(){return this.lexer},t.prototype.getNonWordTokenTypes=function(){return this.lexer.nonWordTokens},t.prototype.getWordDefinition=function(){return this.lexer.wordDefinition||e.prototype.getWordDefinition.call(this)},t.prototype.getElectricCharacters=function(){return this.lexer.electricChars.split("")},t.prototype.getAutoClosingPairs=function(){return this.lexer.autoClosingPairs},t.prototype.getCommentsConfiguration=function(){return{lineCommentTokens:[this.lexer.lineComment],blockCommentStartToken:this.lexer.blockCommentStart,blockCommentEndToken:this.lexer.blockCommentEnd}},t.prototype.onEnterImpl=function(e,t,n){return p(this.lexer,e,t,n)},t.prototype.onElectricCharacterImpl=function(e,t,n){return d(this.lexer,e,t,n)},t.prototype.enterNestedMode=function(e){return e instanceof v?e.embeddedEntered:!1},t.prototype.getNestedMode=function(e){if(e instanceof v){var t=e.embeddedMode,n=E(this.modesRegistry,t);if(n)return n}return E(this.modesRegistry,"text/plain")},t.prototype.getLeavingNestedModeData=function(e,t){var n=t,r=new i.LineStream(e);while(!r.eos()&&n.embeddedMode)n.tokenize(r,!0);if(n.embeddedMode)return null;var s=r.pos();return{nestedModeBuffer:e.substring(0,s),bufferAfterNestedMode:e.substring(s),stateAfterNestedMode:n}},t.WorkerDescriptor=r.AsyncDescriptor.create(u.monarchPath+"Worker","MonarchNullWorker"),t}(o.AbstractMode);t.MonarchMode=m;var g=function(e){function t(t,n,r){e.call(this,t,r,a.compile(n))}return __extends(t,e),t}(m);t.DynamicMonarchMode=g;var y={};t.createEditorMode=b,t.register=w,t.getLanguage=S}),define("out/monarch/monarchStatic",["require","exports","monarch/editor/modes/modes","monarch/editor/modes/stream","monarch/editor/modes/monarch/monarchCommon","monarch/editor/modes/monarch/monarch"],function(e,t,n,r,i,s){function o(e,t){var s=new r.LineStream(t),o="";while(!s.eos()){var u=s.pos(),a=null,f="";while(a===null){var l=s.pos(),c=e.tokenize(s);a=c.type,c.bracket&&(c.bracket===n.Bracket.Open&&(f+=" bracket-open"),c.bracket===n.Bracket.Close&&(f+=" bracket-close"));if(c.nextState)c.nextState.setStateData(e.getStateData()),e=c.nextState;else if(!a&&s.pos()-l<=0){i.throwError(null,"no progress in tokenizer");break}}var h=s.pos()-u,p="";h>0&&(s.goBack(h),p=i.htmlEscape(s.advance(h)));var d="";i.empty(a)||(d+=c.type.replace(/\./g," ")),i.empty(f)||(d+=f),i.empty(d)||(p="<span class='token "+d+"'>"+p+"</span>"),o+=p}return{html:o,next:e}}function u(e,t){var n=t.replace(/\r/g,"").split("\n"),r="";for(var i=0;i<n.length;i++){var s=o(e,n[i]);r+=s.html,e=s.next,i!==n.length-1&&(r+="<br>")}return{html:r,next:e}}function a(e,t,n){typeof n=="undefined"&&(n=null);var r=t.innerText;r||(r=t.textContent),r=r.replace(/(^([ \t]*[\n\r]+)+)|(\s+$)|(\r)/g,"");var i=u(e,r).html;n&&(i="<span class='"+n+"'>"+i+"</span>"),t.innerHTML=i}function f(e,n){e||(e="text/plain");var r=t.getLanguage(e);return!r&&n&&(r=t.getLanguage(n)),r?r.getInitialState():null}function l(e,t){return e?u(e,t):null}function c(e,n,r){r||(r=null);if(!e)return"";var i=t.getInitialMode(n);if(!i)return e;var s=t.highlightTextFragment(i,e).html;return r&&(s="<span class='"+r+"'>"+s+"</span>"),s}function h(e,n,r){n||(n="text/plain"),r||(r=null);if(!e)return;var i=e.getAttribute("type");if(!i){var s=/\blanguage-(\w+)\b/.exec(e.className);s&&(i=s[1])}var o=t.getInitialMode(i,n);if(!o)return;a(o,e,r)}function p(e,n,r,i){r||(r="text/plain"),i||(i=null);var s=n?new RegExp(n):null,o=document.getElementsByTagName(e);for(var u=0;u<o.length;u++){var a=o[u],f=a.className;(s===null||s.test(f))&&t.highlightElem(a,r,i)}}function d(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}function v(e,t){d(t).forEach(function(n){typeof e[n]=="undefined"?e[n]=t[n]:e["super."+n]=t[n]})}function m(e,n){typeof e=="string"&&(e=JSON.parse(e)),!e.name&&n&&(e.name=n),e.mimeTypes||(e.mimeTypes=["text/"+e.name]);if(typeof e.extend=="string"){var r=t.getLanguage(e.extend);r&&r.originalLexer&&(v(e,r.originalLexer),typeof e.extendTokenizer=="object"&&(v(e.extendTokenizer,r.originalLexer.tokenizer),e.tokenizer=e.extendTokenizer))}var r=s.register(e);return r.originalLexer=e,r}function g(e){return s.getLanguage(e)}t.getInitialMode=f,t.highlightTextFragment=l,t.highlightText=c,t.highlightElem=h,t.highlightElems=p,t.register=m,t.getLanguage=g});
define(["out/monarch/monarchStatic"],function(Monarch) {
  return Monarch;
});
