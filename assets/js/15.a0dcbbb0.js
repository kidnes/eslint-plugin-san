(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{406:function(e,t,r){"use strict";r.r(t);var n=r(9),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"developer-guide"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#developer-guide"}},[e._v("#")]),e._v(" Developer Guide")]),e._v(" "),r("p",[e._v("Contributing is welcome.")]),e._v(" "),r("h2",{attrs:{id:"bug-reporting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bug-reporting"}},[e._v("#")]),e._v(" 🐛 Bug reporting")]),e._v(" "),r("p",[e._v("If you think you’ve found a bug in ESLint, please "),r("a",{attrs:{href:"https://github.com/ecomfe/eslint-plugin-san/issues/new?labels=&template=bug_report.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("create a new issue"),r("OutboundLink")],1),e._v(" or a pull request on GitHub.")]),e._v(" "),r("p",[e._v("Please include as much detail as possible to help us properly address your issue. If we need to triage issues and constantly ask people for more detail, that’s time taken away from actually fixing issues. Help us be as efficient as possible by including a lot of detail in your issues.")]),e._v(" "),r("h2",{attrs:{id:"proposing-a-new-rule-or-a-rule-change"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proposing-a-new-rule-or-a-rule-change"}},[e._v("#")]),e._v(" ✨ Proposing a new rule or a rule change")]),e._v(" "),r("p",[e._v("In order to add a new rule or a rule change, you should:")]),e._v(" "),r("ul",[r("li",[e._v("Create issue on GitHub with description of proposed rule")]),e._v(" "),r("li",[e._v("Generate a new rule using the "),r("a",{attrs:{href:"https://github.com/eslint/generator-eslint",target:"_blank",rel:"noopener noreferrer"}},[e._v("official yeoman generator"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Run "),r("code",[e._v("npm start")])]),e._v(" "),r("li",[e._v("Write test scenarios & implement logic")]),e._v(" "),r("li",[e._v("Describe the rule in the generated "),r("code",[e._v("docs")]),e._v(" file")]),e._v(" "),r("li",[e._v("Make sure all tests are passing")]),e._v(" "),r("li",[e._v("Run "),r("code",[e._v("npm run lint")]),e._v(" and fix any errors")]),e._v(" "),r("li",[e._v("Run "),r("code",[e._v("npm run update")]),e._v(" in order to update readme and recommended configuration")]),e._v(" "),r("li",[e._v("Create PR and link created issue in description")])]),e._v(" "),r("p",[e._v("We're more than happy to see potential contributions, so don't hesitate. If you have any suggestions, ideas or problems feel free to add new "),r("a",{attrs:{href:"https://github.com/ecomfe/eslint-plugin-san/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue"),r("OutboundLink")],1),e._v(", but first please make sure your question does not repeat previous ones.")]),e._v(" "),r("h2",{attrs:{id:"working-with-rules"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#working-with-rules"}},[e._v("#")]),e._v(" 🔥 Working with rules")]),e._v(" "),r("p",[e._v("Before you start writing new rule, please read the "),r("a",{attrs:{href:"https://eslint.org/docs/developer-guide/working-with-rules",target:"_blank",rel:"noopener noreferrer"}},[e._v("official ESLint guide"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Next, in order to get an idea how does the AST of the code that you want to check looks like, use the "),r("a",{attrs:{href:"https://astexplorer.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("astexplorer.net"),r("OutboundLink")],1),e._v(".\nThe "),r("a",{attrs:{href:"https://astexplorer.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("astexplorer.net"),r("OutboundLink")],1),e._v(" is a great tool to inspect ASTs, also San templates are supported.")]),e._v(" "),r("p",[e._v("After opening "),r("a",{attrs:{href:"https://astexplorer.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("astexplorer.net"),r("OutboundLink")],1),e._v(", select "),r("code",[e._v("San")]),e._v(" as the syntax and "),r("code",[e._v("san-eslint-parser")]),e._v(" as the parser.")]),e._v(" "),r("p",[e._v("Since single file components in San are not plain JavaScript, we can't use the default parser, and we had to introduce additional one: "),r("code",[e._v("san-eslint-parser")]),e._v(", that generates enhanced AST with nodes that represent specific parts of the template syntax, as well as what's inside the "),r("code",[e._v("<script>")]),e._v(" tag.")]),e._v(" "),r("p",[e._v("To know more about certain nodes in produced ASTs, go here:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/estree/estree",target:"_blank",rel:"noopener noreferrer"}},[e._v("ESTree docs"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/mysticatea/san-eslint-parser/blob/master/docs/ast.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("san-eslint-parser AST docs"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("san-eslint-parser")]),e._v(" provides few useful parser services, to help traverse the produced AST and access tokens of the template:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("context.parserServices.defineTemplateBodyVisitor(visitor, scriptVisitor)")])]),e._v(" "),r("li",[r("code",[e._v("context.parserServices.getTemplateBodyTokenStore()")])])]),e._v(" "),r("p",[e._v("Check out an "),r("a",{attrs:{href:"https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/rules/mustache-interpolation-spacing.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("example rule"),r("OutboundLink")],1),e._v(" to get a better understanding of how these work.")]),e._v(" "),r("p",[e._v("Please be aware that regarding what kind of code examples you'll write in tests, you'll have to accordingly setup the parser in "),r("code",[e._v("RuleTester")]),e._v(" (you can do it on per test case basis though). "),r("a",{attrs:{href:"https://github.com/ecomfe/eslint-plugin-san/blob/master/tests/lib/rules/attribute-hyphenation.js#L19",target:"_blank",rel:"noopener noreferrer"}},[e._v("See an example here"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("If you'll stuck, remember there are plenty of rules you can learn from already, and if you can't find the right solution - don't hesitate to reach out in issues. We're happy to help!")]),e._v(" "),r("h2",{attrs:{id:"jsdoc-type-checking-with-typescript"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jsdoc-type-checking-with-typescript"}},[e._v("#")]),e._v(" ✅ JSDoc type checking with TypeScript")]),e._v(" "),r("p",[e._v("We have type checking enabled via TypeScript and JSDoc."),r("br"),e._v("\nThe command to perform type checking is: "),r("code",[e._v("npm run tsc")])]),e._v(" "),r("p",[e._v("This is just to help you write the rules, not to do strict type checking. If you find it difficult to resolve type checking warnings, feel free to suppress warnings using the "),r("code",[e._v("// @ts-nocheck")]),e._v(" and "),r("code",[e._v("// @ts-ignore")]),e._v(" comment.")])])}),[],!1,null,null,null);t.default=s.exports}}]);