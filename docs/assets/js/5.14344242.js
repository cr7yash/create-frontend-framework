(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{184:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"bring-it-all-together"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bring-it-all-together","aria-hidden":"true"}},[t._v("#")]),t._v(" Bring it all together")]),t._v(" "),a("p",[t._v("This is the last part of the tutorial. This provides the VDOM comparison and DOM patching when a "),a("code",[t._v("mutation")]),t._v(" function is called.")]),t._v(" "),a("p",[t._v("Then the component state is handled and the component rerendered. Thanks to the VDOM, the dom is modified "),a("strong",[t._v("only if necessary")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" snabbdom "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"snabbdom"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" patch "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" snabbdom"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("init")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"snabbdom/modules/eventlisteners"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("init")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selector"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selector"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("patch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("template"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" state "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("createComponent")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  initialState "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" initialState"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" previous"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("mappedMethods")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" props "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n    Object"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("keys")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("methods"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("reduce")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("acc"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("acc"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          state "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" methods"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" nextNode "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("props"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            methods"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("mappedMethods")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{attrs:{class:"token function"}},[t._v("patch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("previous"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("template"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextNode"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("template"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          previous "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextNode"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// this prints "Thomas" as firstName :D')]),t._v("\n          "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" props "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    previous "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("props"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" methods"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("mappedMethods")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" previous"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],!1,null,null,null);o.options.__file="all-together.md";s.default=o.exports}}]);