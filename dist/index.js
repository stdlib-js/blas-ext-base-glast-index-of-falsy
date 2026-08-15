"use strict";var i=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var t=i(function(p,s){
var v=require('@stdlib/blas-ext-base-gindex-of-falsy/dist').ndarray;function x(r,e,a,u){var n;return r<=0?-1:(u+=(r-1)*a,a*=-1,n=v(r,e,a,u),n<0?n:r-1-n)}s.exports=x
});var d=i(function(F,y){
var l=require('@stdlib/strided-base-stride2offset/dist'),q=t();function c(r,e,a){return q(r,e,a,l(r,a))}y.exports=c
});var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=d(),O=t();o(f,"ndarray",O);module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
