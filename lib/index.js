(function(a,b){'object'==typeof exports&&'object'==typeof module?module.exports=b():'function'==typeof define&&define.amd?define('jetblack-graphql-reconnect-client',[],b):'object'==typeof exports?exports['jetblack-graphql-reconnect-client']=b():a['jetblack-graphql-reconnect-client']=b()})('undefined'==typeof self?this:self,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0)}([function(a,b,c){a.exports=c(1)},function(a,b,c){'use strict';function d(a,b,c,d=1e3,e=0,f='graphql-ws'){const g=new k(a,b,c,d,e,f);return g.shutdown}function e(a,b,c=1e3,d=0,e=[503]){return new Promise((f,g)=>{function h(a){setTimeout(()=>i(++a),c)}const i=(c)=>{fetch(a,b).then((a)=>{400>a.status?f(a):e.includes(a.status)&&(0===d||c<d)?h(c):f(a)}).catch((a)=>{0<d&&c<d?h(c):g(a)})};i(0)})}function f(a,b,c={},d=null,f={},g='post'){return e(a,{method:g,headers:l({},f,{"Content-Type":'application/json'}),body:JSON.stringify({query:b,variables:c,operationName:d})})}Object.defineProperty(b,'__esModule',{value:!0});var g=c(2),h=c.n(g),i=c(3),j=c.n(i);class k{constructor(a,b,c,d=1e3,e=0,f){this.url=a,this.options=b,this.callback=c,this.delay=d,this.maxRetries=e,this.retryCount=0,this.shutdown=h()(this.url,this.options,(a,b)=>{a||b?this.callback(a,(a,c,d,e)=>this.reconnectableSubscribe(b,a,c,d,e,{})):c(null,null)},f)}reconnectableSubscribe(a,b,c,d,e,f){return f.unsubscribe=a(b,c,d,(a,g)=>{a instanceof j.a&&a.event instanceof CloseEvent&&1e3!==a.event.code?this.reschedule(b,c,d,e,f):(this.retryCount=0,e(a,g))}),()=>f.unsubscribe()}reschedule(a,b,c,d,e){setTimeout(()=>{this.resubscribe(a,b,c,d,e)},this.delay)}resubscribe(a,b,c,d,e){return 0<this.maxRetries&&++this.retryCount>this.maxRetries?void this.callback(new Error('Max retries exceeded'),null):void(this.shutdown=h()(this.url,this.options,(f,g)=>{if(!(f||g))d(null,null);else if(f instanceof j.a&&f.event instanceof CloseEvent&&1e3!==f.event.code)this.reschedule(a,b,c,d,e);else return this.reconnectableSubscribe(g,a,b,c,d,e)}))}}var l=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};c.d(b,'graphQLReconnectingSubscriber',function(){return d}),c.d(b,'graphQLRetryFetch',function(){return f})},function(a){a.exports=require('@jetblack/graphql-client/Subscriber')},function(a){a.exports=require('@jetblack/graphql-client/EventError')}])});
//# sourceMappingURL=index.js.map