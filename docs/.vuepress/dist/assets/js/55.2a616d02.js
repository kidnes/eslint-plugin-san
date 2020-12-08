(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{446:function(t,s,e){"use strict";e.r(s);var a=e(9),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"san-valid-s-else-if"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#san-valid-s-else-if"}},[t._v("#")]),t._v(" san/valid-s-else-if")]),t._v(" "),e("blockquote",[e("p",[t._v("enforce valid "),e("code",[t._v("s-else-if")]),t._v(" directives")])]),t._v(" "),e("ul",[e("li",[t._v("⚙️ This rule is included in all of "),e("code",[t._v('"plugin:san/essential"')]),t._v(", "),e("code",[t._v('"plugin:san/strongly-recommended"')]),t._v(" and "),e("code",[t._v('"plugin:san/recommended"')]),t._v(".")])]),t._v(" "),e("p",[t._v("This rule checks whether every "),e("code",[t._v("s-else-if")]),t._v(" directive is valid.")]),t._v(" "),e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" 📖 Rule Details")]),t._v(" "),e("p",[t._v("This rule reports "),e("code",[t._v("s-else-if")]),t._v(" directives in the following cases:")]),t._v(" "),e("ul",[e("li",[t._v("The directive has that argument. E.g. "),e("code",[t._v('<div s-if="foo"></div><div s-else-if:aaa="bar"></div>')])]),t._v(" "),e("li",[t._v("The directive has that modifier. E.g. "),e("code",[t._v('<div s-if="foo"></div><div s-else-if.bbb="bar"></div>')])]),t._v(" "),e("li",[t._v("The directive does not have that attribute value. E.g. "),e("code",[t._v('<div s-if="foo"></div><div s-else-if></div>')])]),t._v(" "),e("li",[t._v("The directive is on the elements that the previous element don't have "),e("code",[t._v("s-if")]),t._v("/"),e("code",[t._v("s-else-if")]),t._v(" directives. E.g. "),e("code",[t._v('<div s-else-if="bar"></div>')])]),t._v(" "),e("li",[t._v("The directive is on the elements which have "),e("code",[t._v("s-if")]),t._v("/"),e("code",[t._v("s-else")]),t._v(" directives. E.g. "),e("code",[t._v('<div s-if="foo" s-else-if="bar"></div>')])])]),t._v(" "),e("eslint-code-block",{attrs:{rules:{"san/valid-s-else-if":["error"]}}},[e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ✓ GOOD --\x3e")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("s-if")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("s-else-if")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ✗ BAD --\x3e")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("s-else-if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("s-else-if:")]),t._v("aaa")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("s-else-if.bbb")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("This rule does not check syntax errors in directives because it's checked by "),e("RouterLink",{attrs:{to:"/rules/no-parsing-error.html"}},[t._v("san/no-parsing-error")]),t._v(" rule.")],1)]),t._v(" "),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" 🔧 Options")]),t._v(" "),e("p",[t._v("Nothing.")]),t._v(" "),e("h2",{attrs:{id:"related-rules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#related-rules"}},[t._v("#")]),t._v(" 👫 Related Rules")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/rules/valid-s-if.html"}},[t._v("san/valid-s-if")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/rules/valid-s-else.html"}},[t._v("san/valid-s-else")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/rules/no-parsing-error.html"}},[t._v("san/no-parsing-error")])],1)]),t._v(" "),e("h2",{attrs:{id:"implementation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" 🔍 Implementation")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-san/blob/master/lib/rules/valid-s-else-if.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rule source"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-san/blob/master/tests/lib/rules/valid-s-else-if.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Test source"),e("OutboundLink")],1)])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);