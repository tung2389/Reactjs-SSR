(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+iuc":function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),e.exports=n("WEpk").Set},"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"4hZ1":function(e,t,n){"use strict";var r=n("KI45"),a=r(n("0iUn")),o=r(n("MI3g")),i=r(n("a7VT")),u=r(n("AT/M")),c=r(n("sLSF")),l=r(n("Tit0")),s=r(n("dfwq")),f=r(n("ttDY"));Object.defineProperty(t,"__esModule",{value:!0});var d=n("q1tI"),p="undefined"==typeof window;t.default=function(){var e,t=new f.default;function n(n){e=n.props.reduceComponentsToState((0,s.default)(t)),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(r){function s(e){var r;return(0,a.default)(this,s),r=(0,o.default)(this,(0,i.default)(s).call(this,e)),p&&(t.add((0,u.default)(r)),n((0,u.default)(r))),r}return(0,l.default)(s,r),(0,c.default)(s,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),(0,c.default)(s,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(d.Component)}},"8iia":function(e,t,n){var r=n("QMMT"),a=n("RRc/");e.exports=function(e){return function(){if(r(this)!=e)throw TypeError(e+"#toJSON isn't generic");return a(this)}}},"9BDd":function(e,t,n){n("GvbO"),e.exports=n("WEpk").Array.isArray},B9jh:function(e,t,n){"use strict";var r=n("Wu5q"),a=n("n3ko");e.exports=n("raTm")("Set",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{add:function(e){return r.def(a(this,"Set"),e=0===e?0:e,e)}},r)},C2SN:function(e,t,n){var r=n("93I4"),a=n("kAMH"),o=n("UWiX")("species");e.exports=function(e){var t;return a(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!a(t.prototype)||(t=void 0),r(t)&&null===(t=t[o])&&(t=void 0)),void 0===t?Array:t}},EXMj:function(e,t){e.exports=function(e,t,n,r){if(!(e instanceof t)||void 0!==r&&r in e)throw TypeError(n+": incorrect invocation!");return e}},GvbO:function(e,t,n){var r=n("Y7ZC");r(r.S,"Array",{isArray:n("kAMH")})},IClC:function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.HeadManagerContext=a.createContext(null)},IP1Z:function(e,t,n){"use strict";var r=n("2faE"),a=n("rr1i");e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},KI45:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},NwJ3:function(e,t,n){var r=n("SBuE"),a=n("UWiX")("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||o[a]===e)}},PgRs:function(e,t,n){e.exports=n("m/Pd")},QMMT:function(e,t,n){var r=n("a0xu"),a=n("UWiX")("toStringTag"),o="Arguments"==r(function(){return arguments}());e.exports=function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=Object(e),a))?n:o?r(t):"Object"==(i=r(t))&&"function"==typeof t.callee?"Arguments":i}},"RRc/":function(e,t,n){var r=n("oioR");e.exports=function(e,t){var n=[];return r(e,!1,n.push,n,t),n}},TJWN:function(e,t,n){"use strict";var r=n("5T2Y"),a=n("WEpk"),o=n("2faE"),i=n("jmDH"),u=n("UWiX")("species");e.exports=function(e){var t="function"==typeof a[e]?a[e]:r[e];i&&t&&!t[u]&&o.f(t,u,{configurable:!0,get:function(){return this}})}},TuGD:function(e,t,n){var r=n("UWiX")("iterator"),a=!1;try{var o=[7][r]();o.return=function(){a=!0},Array.from(o,function(){throw 2})}catch(i){}e.exports=function(e,t){if(!t&&!a)return!1;var n=!1;try{var o=[7],u=o[r]();u.next=function(){return{done:n=!0}},o[r]=function(){return u},e(o)}catch(i){}return n}},"V+O7":function(e,t,n){n("aPfg")("Set")},V7Et:function(e,t,n){var r=n("2GTP"),a=n("M1xp"),o=n("JB68"),i=n("tEej"),u=n("v6xn");e.exports=function(e,t){var n=1==e,c=2==e,l=3==e,s=4==e,f=6==e,d=5==e||f,p=t||u;return function(t,u,h){for(var v,m,y=o(t),g=a(y),E=r(u,h,3),b=i(g.length),w=0,x=n?p(t,b):c?p(t,0):void 0;b>w;w++)if((d||w in g)&&(m=E(v=g[w],w,y),e))if(n)x[w]=m;else if(m)switch(e){case 3:return!0;case 5:return v;case 6:return w;case 2:x.push(v)}else if(s)return!1;return f?-1:l||s?s:x}}},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),a=n("Y7ZC"),o=n("JB68"),i=n("sNwI"),u=n("NwJ3"),c=n("tEej"),l=n("IP1Z"),s=n("fNZA");a(a.S+a.F*!n("TuGD")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,f,d=o(e),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,m=void 0!==v,y=0,g=s(d);if(m&&(v=r(v,h>2?arguments[2]:void 0,2)),null==g||p==Array&&u(g))for(n=new p(t=c(d.length));t>y;y++)l(n,y,m?v(d[y],y):d[y]);else for(f=g.call(d),n=new p;!(a=f.next()).done;y++)l(n,y,m?i(f,v,[a.value,y],!0):a.value);return n.length=y,n}})},VKFn:function(e,t,n){n("bBy9"),n("FlQf"),e.exports=n("ldVq")},Wu5q:function(e,t,n){"use strict";var r=n("2faE").f,a=n("oVml"),o=n("XJU/"),i=n("2GTP"),u=n("EXMj"),c=n("oioR"),l=n("MPFp"),s=n("UO39"),f=n("TJWN"),d=n("jmDH"),p=n("6/1s").fastKey,h=n("n3ko"),v=d?"_s":"size",m=function(e,t){var n,r=p(t);if("F"!==r)return e._i[r];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,l){var s=e(function(e,r){u(e,s,t,"_i"),e._t=t,e._i=a(null),e._f=void 0,e._l=void 0,e[v]=0,null!=r&&c(r,n,e[l],e)});return o(s.prototype,{clear:function(){for(var e=h(this,t),n=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];e._f=e._l=void 0,e[v]=0},delete:function(e){var n=h(this,t),r=m(n,e);if(r){var a=r.n,o=r.p;delete n._i[r.i],r.r=!0,o&&(o.n=a),a&&(a.p=o),n._f==r&&(n._f=a),n._l==r&&(n._l=o),n[v]--}return!!r},forEach:function(e){h(this,t);for(var n,r=i(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!m(h(this,t),e)}}),d&&r(s.prototype,"size",{get:function(){return h(this,t)[v]}}),s},def:function(e,t,n){var r,a,o=m(e,t);return o?o.v=n:(e._l=o={i:a=p(t,!0),k:t,v:n,p:r=e._l,n:void 0,r:!1},e._f||(e._f=o),r&&(r.n=o),e[v]++,"F"!==a&&(e._i[a]=o)),e},getEntry:m,setStrong:function(e,t,n){l(e,t,function(e,n){this._t=h(e,t),this._k=n,this._l=void 0},function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?s(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,s(1))},n?"entries":"values",!n,!0),f(t)}}},"XJU/":function(e,t,n){var r=n("NegM");e.exports=function(e,t,n){for(var a in t)n&&e[a]?e[a]=t[a]:r(e,a,t[a]);return e}},aPfg:function(e,t,n){"use strict";var r=n("Y7ZC"),a=n("eaoh"),o=n("2GTP"),i=n("oioR");e.exports=function(e){r(r.S,e,{from:function(e){var t,n,r,u,c=arguments[1];return a(this),(t=void 0!==c)&&a(c),null==e?new this:(n=[],t?(r=0,u=o(c,arguments[2],2),i(e,!1,function(e){n.push(u(e,r++))})):i(e,!1,n.push,n),new this(n))}})}},aZaS:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/App-easyform",function(){var e=n("cvAu");return{page:e.default||e}}])},cHUd:function(e,t,n){"use strict";var r=n("Y7ZC");e.exports=function(e){r(r.S,e,{of:function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return new this(t)}})}},cvAu:function(e,t,n){"use strict";n.r(t);var r=n("hfKm"),a=n.n(r);function o(e,t,n){return t in e?a()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n("0iUn"),u=n("sLSF"),c=n("MI3g"),l=n("a7VT"),s=n("AT/M"),f=n("Tit0"),d=n("q1tI"),p=n.n(d),h=n("PgRs"),v=n.n(h),m=(n("Q8kY"),function(e){function t(e){var n;return Object(i.default)(this,t),(n=Object(c.default)(this,Object(l.default)(t).call(this,e))).state={username:"",password:"",Description:"",Gender:0,language:"en",checkStatus:!1},n.handleChange=n.handleChange.bind(Object(s.default)(n)),n.handleChangeSubmit=n.handleChangeSubmit.bind(Object(s.default)(n)),n}return Object(f.default)(t,e),Object(u.default)(t,[{key:"handleChange",value:function(e){var t=e.target.name,n="checkbox"===e.target.type?e.target.checked:e.target.value;this.setState(o({},t,n))}},{key:"handleChangeSubmit",value:function(e){e.preventDefault(),console.log(this.state)}},{key:"render",value:function(){var e;return p.a.createElement("div",null,p.a.createElement(v.a,null,p.a.createElement("link",{rel:"stylesheet",media:"screen",href:"https://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"})),p.a.createElement("div",{className:"container"},p.a.createElement("div",{className:"row"},p.a.createElement("div",{className:"col-xs-10 col-sm-10 col-md-10 col-lg-10"},p.a.createElement("div",{className:"panel panel-primary"},p.a.createElement("div",{className:"panel-heading"},p.a.createElement("h3",{className:"panel-title"},"Form")),p.a.createElement("div",{className:"panel-body"},p.a.createElement("form",{action:"/information",method:"get"},p.a.createElement("div",{className:"form-group"},p.a.createElement("label",{for:""},"Username"),p.a.createElement("input",{type:"text",className:"form-control",id:"",name:"username",onChange:this.handleChange})),p.a.createElement("div",{className:"form-group"},p.a.createElement("label",{for:""},"Password"),p.a.createElement("input",{type:"password",className:"form-control",id:"",name:"password",onChange:this.handleChange})),p.a.createElement("div",{className:"form-group"},p.a.createElement("label",{for:""},"Mô tả"),p.a.createElement("textarea",(o(e={name:"",className:"form-control",rows:"3"},"name","Description"),o(e,"onChange",this.handleChange),e))),p.a.createElement("label",null," Gender "),p.a.createElement("select",{name:"Gender",className:"form-control",value:this.state.Gender,onChange:this.handleChange},p.a.createElement("option",{value:0},"Female"),p.a.createElement("option",{value:1},"Male")),p.a.createElement("br",null),p.a.createElement("label",null," language "),p.a.createElement("div",{className:"radio"},p.a.createElement("label",null,p.a.createElement("input",{type:"radio",name:"language",value:"vi",onChange:this.handleChange,checked:"vi"===this.state.language}),"Vietnamese"),p.a.createElement("br",null),p.a.createElement("label",null,p.a.createElement("input",{type:"radio",name:"language",value:"en",onChange:this.handleChange,checked:"en"===this.state.language}),"English")),p.a.createElement("div",{className:"checkbox"},p.a.createElement("label",null,p.a.createElement("input",{type:"checkbox",value:this.state.checkStatus,name:"checkStatus",onChange:this.handleChange,checked:!0===this.state.checkStatus}),"Checkbox")),p.a.createElement("button",{type:"submit",className:"btn btn-primary"},"submit"),p.a.createElement("button",{type:"reset",className:"btn btn-default"}," reset "))))))))}}]),t}(p.a.Component));t.default=m},d04V:function(e,t,n){e.exports=n("0tVQ")},dL40:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},dfwq:function(e,t,n){"use strict";n.r(t);var r=n("p0XB"),a=n.n(r);var o=n("d04V"),i=n.n(o),u=n("yLu3"),c=n.n(u);function l(e){return function(e){if(a()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(c()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return i()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"default",function(){return l})},fNZA:function(e,t,n){var r=n("QMMT"),a=n("UWiX")("iterator"),o=n("SBuE");e.exports=n("WEpk").getIteratorMethod=function(e){if(null!=e)return e[a]||e["@@iterator"]||o[r(e)]}},ldVq:function(e,t,n){var r=n("QMMT"),a=n("UWiX")("iterator"),o=n("SBuE");e.exports=n("WEpk").isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||o.hasOwnProperty(r(t))}},"m/Pd":function(e,t,n){"use strict";var r=n("KI45")(n("ttDY")),a=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n("q1tI")),i=a(n("4hZ1")),u=n("IClC");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next-head";return[o.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})]}function l(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}t.defaultHead=c;var s=["name","httpEquiv","charSet","itemProp"];function f(e){return e.reduce(function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(l,[]).reverse().concat(c("")).filter((t=new r.default,n=new r.default,a=new r.default,i={},function(e){if(e.key&&"number"!=typeof e.key&&0===e.key.indexOf(".$"))return!t.has(e.key)&&(t.add(e.key),!0);switch(e.type){case"title":case"base":if(n.has(e.type))return!1;n.add(e.type);break;case"meta":for(var o=0,u=s.length;o<u;o++){var c=s[o];if(e.props.hasOwnProperty(c))if("charSet"===c){if(a.has(c))return!1;a.add(c)}else{var l=e.props[c],f=i[c]||new r.default;if(f.has(l))return!1;f.add(l),i[c]=f}}}return!0})).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+"next-head",r=e.key||t;return o.default.cloneElement(e,{key:r,className:n})});var t,n,a,i}var d=i.default();function p(e){var t=e.children;return o.default.createElement(u.HeadManagerContext.Consumer,null,function(e){return o.default.createElement(d,{reduceComponentsToState:f,handleStateChange:e},t)})}p.rewind=d.rewind,t.default=p},n3ko:function(e,t,n){var r=n("93I4");e.exports=function(e,t){if(!r(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},oioR:function(e,t,n){var r=n("2GTP"),a=n("sNwI"),o=n("NwJ3"),i=n("5K7Z"),u=n("tEej"),c=n("fNZA"),l={},s={};(t=e.exports=function(e,t,n,f,d){var p,h,v,m,y=d?function(){return e}:c(e),g=r(n,f,t?2:1),E=0;if("function"!=typeof y)throw TypeError(e+" is not iterable!");if(o(y)){for(p=u(e.length);p>E;E++)if((m=t?g(i(h=e[E])[0],h[1]):g(e[E]))===l||m===s)return m}else for(v=y.call(e);!(h=v.next()).done;)if((m=a(v,g,h.value,t))===l||m===s)return m}).BREAK=l,t.RETURN=s},p0XB:function(e,t,n){e.exports=n("9BDd")},raTm:function(e,t,n){"use strict";var r=n("5T2Y"),a=n("Y7ZC"),o=n("6/1s"),i=n("KUxP"),u=n("NegM"),c=n("XJU/"),l=n("oioR"),s=n("EXMj"),f=n("93I4"),d=n("RfKB"),p=n("2faE").f,h=n("V7Et")(0),v=n("jmDH");e.exports=function(e,t,n,m,y,g){var E=r[e],b=E,w=y?"set":"add",x=b&&b.prototype,_={};return v&&"function"==typeof b&&(g||x.forEach&&!i(function(){(new b).entries().next()}))?(b=t(function(t,n){s(t,b,e,"_c"),t._c=new E,null!=n&&l(n,y,t[w],t)}),h("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(e){var t="add"==e||"set"==e;e in x&&(!g||"clear"!=e)&&u(b.prototype,e,function(n,r){if(s(this,b,e),!t&&g&&!f(n))return"get"==e&&void 0;var a=this._c[e](0===n?0:n,r);return t?this:a})}),g||p(b.prototype,"size",{get:function(){return this._c.size}})):(b=m.getConstructor(t,e,y,w),c(b.prototype,n),o.NEED=!0),d(b,e),_[e]=b,a(a.G+a.W+a.F,_),g||m.setStrong(b,e,y),b}},sNwI:function(e,t,n){var r=n("5K7Z");e.exports=function(e,t,n,a){try{return a?t(r(n)[0],n[1]):t(n)}catch(i){var o=e.return;throw void 0!==o&&r(o.call(e)),i}}},ttDY:function(e,t,n){e.exports=n("+iuc")},v6xn:function(e,t,n){var r=n("C2SN");e.exports=function(e,t){return new(r(e))(t)}},xvv9:function(e,t,n){n("cHUd")("Set")},yLu3:function(e,t,n){e.exports=n("VKFn")}},[["aZaS",1,0]]]);