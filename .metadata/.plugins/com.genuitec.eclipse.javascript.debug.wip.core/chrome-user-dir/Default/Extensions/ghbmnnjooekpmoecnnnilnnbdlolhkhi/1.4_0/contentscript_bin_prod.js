'use strict';var g=this;function k(){};function l(a){return Array.prototype.concat.apply(Array.prototype,arguments)};function m(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};var n=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function p(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null,h=null;0<=e?(f=c[d].substring(0,e),h=c[d].substring(e+1)):f=c[d];b(f,h?decodeURIComponent(h.replace(/\+/g," ")):"")}};var q="StopIteration"in g?g.StopIteration:{message:"StopIteration",stack:""};function r(){}r.prototype.a=function(){throw q;};r.prototype.i=function(){return this};function t(a,b){this.b={};this.a=[];this.g=this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){if(a instanceof t)d=a.h(),c=a.f();else{var c=[],e=0;for(d in a)c[e++]=d;d=c;c=m(a)}for(e=0;e<d.length;e++)this.set(d[e],c[e])}}t.prototype.f=function(){u(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};t.prototype.h=function(){u(this);return this.a.concat()};
function u(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}t.prototype.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.b,a)?this.b[a]:b};
t.prototype.set=function(a,b){Object.prototype.hasOwnProperty.call(this.b,a)||(this.c++,this.a.push(a),this.g++);this.b[a]=b};t.prototype.i=function(a){u(this);var b=0,c=this.g,d=this,e=new r;e.a=function(){if(c!=d.g)throw Error("The map has changed since the iterator was created");if(b>=d.a.length)throw q;var e=d.a[b++];return a?e:d.b[e]};return e};function v(a,b,c){this.c=this.a=null;this.b=a||null;this.g=!!c}function w(a){a.a||(a.a=new t,a.c=0,a.b&&p(a.b,function(b,c){var d=decodeURIComponent(b.replace(/\+/g," "));w(a);a.b=null;var d=x(a,d),e=a.a.get(d);e||a.a.set(d,e=[]);e.push(c);a.c=a.c+1}))}function y(a,b){w(a);b=x(a,b);return Object.prototype.hasOwnProperty.call(a.a.b,b)}v.prototype.h=function(){w(this);for(var a=this.a.f(),b=this.a.h(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
v.prototype.f=function(a){w(this);var b=[];if("string"==typeof a)y(this,a)&&(b=l(b,this.a.get(x(this,a))));else{a=this.a.f();for(var c=0;c<a.length;c++)b=l(b,a[c])}return b};v.prototype.set=function(a,b){w(this);this.b=null;a=x(this,a);y(this,a)&&(this.c=this.c-this.a.get(a).length);this.a.set(a,[b]);this.c=this.c+1;return this};v.prototype.get=function(a,b){var c=a?this.f(a):[];return 0<c.length?String(c[0]):b};
v.prototype.toString=function(){if(this.b)return this.b;if(!this.a)return"";for(var a=[],b=this.a.h(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.f(d),f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}return this.b=a.join("&")};function x(a,b){var c=String(b);a.g&&(c=c.toLowerCase());return c};function z(a){this.c=null;this.a=a||k}var A=/\/d\/([0-9a-zA-Z_-]+)\//;function B(){return!!document.getElementById("recoil-timer-page-complete")}
z.prototype.b=function(a){if(B())this.a();else{var b=g.indexedDB.open("GoogleDocs");b.onsuccess=function(){var c=b.result,d=function(){c.close();this.a()}.bind(this);if(B())d();else if(c.onversionchange=d,7>c.version)d();else{var e=c.transaction(["Users","Documents"],"readonly");e.onerror=d;e.onabort=d;var f=e.objectStore("Documents").get(a);f.onsuccess=function(){var a;if(a=f.result){a=f.result;var b=m(a.acl);a=1==b.length&&0!=b[0]&&!a.hpmdo}if(a&&!B()){a=g.location.origin+"/offline/fallback";b=
{};b.turl=g.location.href;var c="",e;for(e in b)0<c.length&&(c+="&"),c+=encodeURIComponent(String(e))+"="+encodeURIComponent(String(b[e]));e=encodeURIComponent(String(c));b=a.indexOf("#");g.location.href=(0>b?a:a.substr(0,b))+(e?"#"+e:"")}d()}.bind(this)}}.bind(this)}};var C=new z,D=g.location.href,E=D.match(/\/u\/[0-9]+($|\/)/);if(-1<(E?Number(E[0][3]):-1))C.a();else{var F;var G=A.exec(D);if(G&&2==G.length)F=G[1];else{var H=(new v(D.match(n)[6]||null)).get("id");F=H?H:null}F?C.c=g.setTimeout(C.b.bind(C,F),5E3):C.a()};