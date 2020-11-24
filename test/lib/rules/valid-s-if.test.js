/**
 * @author Toru Nagashima
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const RuleTester = require('eslint').RuleTester;
const requireRule = require('../../../lib/utils/utils').requireRule;
const rule = requireRule('valid-s-if');

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {ecmaVersion: 2015}
});

tester.run('valid-s-if', rule, {
    valid: [
        {
            filename: 'test.san',
            code: ''
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-if="foo"></div></div></template>'
        },
        // parsing error
        {
            filename: 'parsing-error.vue',
            code: '<template><div s-if="."></div></template>'
        },
        // comment value (parsing error)
        {
            filename: 'comment-value.vue',
            code: '<template><div s-if="/**/"></div></template>'
        }
    ],
    invalid: [
        {
            filename: 'test.san',
            code: '<template><div><div s-if="foo" s-else></div></div></template>',
            errors: [
                "'s-if' and 's-else' directives can't exist on the same element. You may want 's-else-if' directives."
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-if="foo" s-else-if="bar"></div></div></template>',
            errors: ["'s-if' and 's-else-if' directives can't exist on the same element."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-if:aaa="foo"></div></div></template>',
            errors: ["'s-if' directives require no argument."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-if.aaa="foo"></div></div></template>',
            errors: ["'s-if' directives require no modifier."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-if></div></div></template>',
            errors: ["'s-if' directives require that attribute value."]
        },
        // empty value
        {
            filename: 'empty-value.vue',
            code: '<template><div><div s-if=""></div></div></template>',
            errors: ["'s-if' directives require that attribute value."]
        }
    ]
});
