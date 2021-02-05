/**
 * @fileoverview Tests for comment-directive rule.
 * @author Toru Nagashima
 */

'use strict';

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

const assert = require('assert');
const path = require('path');
const Module = require('module');
const eslint = require('eslint');

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

// Initialize linter.
const linter = new eslint.CLIEngine({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {
        ecmaVersion: 2015
    },
    plugins: ['san'],
    rules: {
        'no-unused-vars': 'error',
        'san/comment-directive': 'error',
        'san/no-parsing-error': 'error',
        'san/no-duplicate-attributes': 'error'
    },
    useEslintrc: false
});

describe('comment-directive', () => {
    // Preparation.
    // Make `require("eslint-plugin-san")` loading this plugin while this test.
    // const resolveFilename = Module._resolveFilename;
    // before(() => {
    //     Module._resolveFilename = function(id, ...args) {
    //         if (id === 'eslint-plugin-san') {
    //             return path.resolve(__dirname, '../../../lib/index.js');
    //         }
    //         return resolveFilename.call(this, id, ...args);
    //     };
    // });
    // after(() => {
    //     Module._resolveFilename = resolveFilename;
    // });

    describe('eslint-disable/eslint-enable', () => {
        it('disable all rules if <!-- eslint-disable -->', () => {
            const code = `
                <template>
                    <!-- eslint-disable -->
                    <div id id="a">Hello</div>
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 0);
        });

        it('disable specific rules if <!-- eslint-disable san/no-duplicate-attributes -->', () => {
            const code = `
                <template>
                    <!-- eslint-disable san/no-duplicate-attributes -->
                    <div id id="a">Hello</div>
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 1);
            assert.deepEqual(messages[0].ruleId, 'san/no-parsing-error');
        });

        it('enable all rules if <!-- eslint-enable -->', () => {
            const code = `
                <template>
                    <!-- eslint-disable -->
                    <div id id="a">Hello</div>
                    <!-- eslint-enable -->
                    <div id id="a">Hello</div>
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 2);
            assert.deepEqual(messages[0].ruleId, 'san/no-parsing-error');
            assert.deepEqual(messages[0].line, 6);
            assert.deepEqual(messages[1].ruleId, 'san/no-duplicate-attributes');
            assert.deepEqual(messages[1].line, 6);
        });

        it('enable specific rules if <!-- eslint-enable san/no-duplicate-attributes -->', () => {
            const code = `
                <template>
                    <!-- eslint-disable san/no-parsing-error, san/no-duplicate-attributes -->
                    <div id id="a">Hello</div>
                    <!-- eslint-enable san/no-duplicate-attributes -->
                    <div id id="a">Hello</div>
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 1);
            assert.deepEqual(messages[0].ruleId, 'san/no-duplicate-attributes');
            assert.deepEqual(messages[0].line, 6);
        });

        it('should not affect to the code in <script>.', () => {
            const code = `
                <template>
                    <!-- eslint-disable -->
                    <div id id="a">Hello</div>
                </template>
                <script>
                    var a
                </script>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.strictEqual(messages.length, 1);
            assert.strictEqual(messages[0].ruleId, 'no-unused-vars');
        });

        it('disable specific rules if <!-- eslint-disable san/no-duplicate-attributes ,, , san/no-parsing-error -->', () => {
            const code = `
                <template>
                    <!-- eslint-disable san/no-duplicate-attributes ,, , san/no-parsing-error -->
                    <div id id="a">Hello</div>
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 0);
        });
    });

    describe('eslint-disable-line', () => {
        it('disable all rules if <!-- eslint-disable-line -->', () => {
            const code = `
                <template>
                    <div id id="a">Hello</div> <!-- eslint-disable-line -->
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 0);
        });

        it('disable specific rules if <!-- eslint-disable-line san/no-duplicate-attributes -->', () => {
            const code = `
                <template>
                    <div id id="a">Hello</div> <!-- eslint-disable-line san/no-duplicate-attributes -->
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 1);
            assert.deepEqual(messages[0].ruleId, 'san/no-parsing-error');
        });

        it("don't disable rules if <!-- eslint-disable-line --> is on another line", () => {
            const code = `
                <template>
                    <!-- eslint-disable-line -->
                    <div id id="a">Hello</div>
                    <!-- eslint-disable-line -->
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 2);
            assert.deepEqual(messages[0].ruleId, 'san/no-parsing-error');
            assert.deepEqual(messages[1].ruleId, 'san/no-duplicate-attributes');
        });
    });

    describe('eslint-disable-next-line', () => {
        it('disable all rules if <!-- eslint-disable-next-line -->', () => {
            const code = `
                <template>
                    <!-- eslint-disable-next-line -->
                    <div id id="a">Hello</div>
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 0);
        });

        it('disable specific rules if <!-- eslint-disable-next-line san/no-duplicate-attributes -->', () => {
            const code = `
                <template>
                    <!-- eslint-disable-next-line san/no-duplicate-attributes -->
                    <div id id="a">Hello</div>
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 1);
            assert.deepEqual(messages[0].ruleId, 'san/no-parsing-error');
        });

        it("don't disable rules if <!-- eslint-disable-next-line --> is on another line", () => {
            const code = `
                <template>
                    <!-- eslint-disable-next-line -->

                    <div id id="a">Hello</div> <!-- eslint-disable-next-line -->
                    <!-- eslint-disable-next-line -->
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 2);
            assert.deepEqual(messages[0].ruleId, 'san/no-parsing-error');
            assert.deepEqual(messages[1].ruleId, 'san/no-duplicate-attributes');
        });

        it('should affect only the next line', () => {
            const code = `
                <template>
                    <!-- eslint-disable-next-line san/no-parsing-error, san/no-duplicate-attributes -->
                    <div id id="a">Hello</div>
                    <div id id="b">Hello</div>
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 2);
            assert.deepEqual(messages[0].ruleId, 'san/no-parsing-error');
            assert.deepEqual(messages[0].line, 5);
            assert.deepEqual(messages[1].ruleId, 'san/no-duplicate-attributes');
            assert.deepEqual(messages[1].line, 5);
        });
    });

    describe('allow description', () => {
        it('disable all rules if <!-- eslint-disable -- description -->', () => {
            const code = `
                <template>
                    <!-- eslint-disable -- description -->
                    <div id id="a">Hello</div>
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 0);
        });

        it('enable all rules if <!-- eslint-enable -- description -->', () => {
            const code = `
                <template>
                    <!-- eslint-disable -- description -->
                    <div id id="a">Hello</div>
                    <!-- eslint-enable -- description -->
                    <div id id="a">Hello</div>
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 2);
            assert.deepEqual(messages[0].ruleId, 'san/no-parsing-error');
            assert.deepEqual(messages[0].line, 6);
            assert.deepEqual(messages[1].ruleId, 'san/no-duplicate-attributes');
            assert.deepEqual(messages[1].line, 6);
        });

        it('enable specific rules if <!-- eslint-enable san/no-duplicate-attributes -- description -->', () => {
            const code = `
                <template>
                    <!-- eslint-disable san/no-parsing-error, san/no-duplicate-attributes -- description -->
                    <div id id="a">Hello</div>
                    <!-- eslint-enable san/no-duplicate-attributes -- description -->
                    <div id id="a">Hello</div>
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 1);
            assert.deepEqual(messages[0].ruleId, 'san/no-duplicate-attributes');
            assert.deepEqual(messages[0].line, 6);
        });

        it('disable all rules if <!-- eslint-disable-line -- description -->', () => {
            const code = `
                <template>
                    <div id id="a">Hello</div> <!-- eslint-disable-line -- description -->
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 0);
        });

        it('disable specific rules if <!-- eslint-disable-line san/no-duplicate-attributes -- description -->', () => {
            const code = `
                <template>
                    <div id id="a">Hello</div> <!-- eslint-disable-line san/no-duplicate-attributes -- description -->
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 1);
            assert.deepEqual(messages[0].ruleId, 'san/no-parsing-error');
        });

        it('disable all rules if <!-- eslint-disable-next-line -- description -->', () => {
            const code = `
                <template>
                    <!-- eslint-disable-next-line -- description -->
                    <div id id="a">Hello</div>
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 0);
        });

        it('disable specific rules if <!-- eslint-disable-next-line san/no-duplicate-attributes -->', () => {
            const code = `
                <template>
                    <!-- eslint-disable-next-line san/no-duplicate-attributes -- description -->
                    <div id id="a">Hello</div>
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 1);
            assert.deepEqual(messages[0].ruleId, 'san/no-parsing-error');
        });
    });

    describe('block level directive', () => {
        it('disable all rules if <!-- eslint-disable -->', () => {
            const code = `
                <!-- eslint-disable -->
                <template>
                    <div id id="a">Hello</div>
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 0);
        });

        it("don't disable rules if <!-- eslint-disable --> is on after block", () => {
            const code = `
                <!-- eslint-disable -->
                <i18n>
                </i18n>
                <template>
                    <div id id="a">Hello</div>
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 2);
            assert.deepEqual(messages[0].ruleId, 'san/no-parsing-error');
            assert.deepEqual(messages[1].ruleId, 'san/no-duplicate-attributes');
        });
    });

    describe('reportUnusedDisableDirectives', () => {
        const linter = new eslint.CLIEngine({
            parser: require.resolve('san-eslint-parser'),
            parserOptions: {
                ecmaVersion: 2015
            },
            plugins: ['san'],
            rules: {
                'no-unused-vars': 'error',
                'san/comment-directive': ['error', {reportUnusedDisableDirectives: true}],
                'san/no-parsing-error': 'error',
                'san/no-duplicate-attributes': 'error'
            },
            useEslintrc: false
        });
        it('report unused <!-- eslint-disable -->', () => {
            const code = `
                <template>
                    <!-- eslint-disable -->
                    <div id="a">Hello</div>
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 1);
            assert.deepEqual(messages[0].ruleId, 'san/comment-directive');
            assert.deepEqual(messages[0].message, 'Unused eslint-disable directive (no problems were reported).');
            assert.deepEqual(messages[0].line, 3);
            assert.deepEqual(messages[0].column, 21);
        });

        it('dont report unused <!-- eslint-disable -->', () => {
            const code = `
                <template>
                    <!-- eslint-disable -->
                    <div id id="a">Hello</div>
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 0);
        });
        it('disable and report unused <!-- eslint-disable -->', () => {
            const code = `
                <template>
                    <!-- eslint-disable -->
                    <div id id="a">Hello</div>
                    <!-- eslint-enable -->
                    <!-- eslint-disable -->
                    <div id="b">Hello</div>
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 1);
            assert.deepEqual(messages[0].ruleId, 'san/comment-directive');
            assert.deepEqual(messages[0].message, 'Unused eslint-disable directive (no problems were reported).');
            assert.deepEqual(messages[0].line, 6);
            assert.deepEqual(messages[0].column, 21);
        });

        it('report unused <!-- eslint-disable san/no-duplicate-attributes, san/no-parsing-error -->', () => {
            const code = `
                <template>
                    <!-- eslint-disable san/no-duplicate-attributes, san/no-parsing-error -->
                    <div id="a">Hello</div>
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 2);

            assert.deepEqual(messages[0].ruleId, 'san/comment-directive');
            assert.deepEqual(
                messages[0].message,
                "Unused eslint-disable directive (no problems were reported from 'san/no-duplicate-attributes')."
            );
            assert.deepEqual(messages[0].line, 3);
            assert.deepEqual(messages[0].column, 41);

            assert.deepEqual(messages[1].ruleId, 'san/comment-directive');
            assert.deepEqual(
                messages[1].message,
                "Unused eslint-disable directive (no problems were reported from 'san/no-parsing-error')."
            );
            assert.deepEqual(messages[1].line, 3);
            assert.deepEqual(messages[1].column, 70);
        });

        it('report unused <!-- eslint-disable-next-line san/no-duplicate-attributes, san/no-parsing-error -->', () => {
            const code = `
                <template>
                    <!-- eslint-disable-next-line san/no-duplicate-attributes, san/no-parsing-error -->
                    <div id="a">Hello</div>
                    <div id id="b">Hello</div>
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 4);

            assert.deepEqual(messages[0].ruleId, 'san/comment-directive');
            assert.deepEqual(
                messages[0].message,
                "Unused eslint-disable-next-line directive (no problems were reported from 'san/no-duplicate-attributes')."
            );
            assert.deepEqual(messages[0].line, 3);
            assert.deepEqual(messages[0].column, 51);

            assert.deepEqual(messages[1].ruleId, 'san/comment-directive');
            assert.deepEqual(
                messages[1].message,
                "Unused eslint-disable-next-line directive (no problems were reported from 'san/no-parsing-error')."
            );
            assert.deepEqual(messages[1].line, 3);
            assert.deepEqual(messages[1].column, 80);

            assert.deepEqual(messages[2].ruleId, 'san/no-parsing-error');
            assert.deepEqual(messages[2].line, 5);
            assert.deepEqual(messages[3].ruleId, 'san/no-duplicate-attributes');
            assert.deepEqual(messages[3].line, 5);
        });

        it('dont report used <!-- eslint-disable-next-line san/no-duplicate-attributes, san/no-parsing-error -->', () => {
            const code = `
                <template>
                    <!-- eslint-disable-next-line san/no-duplicate-attributes, san/no-parsing-error -->
                    <div id id="a">Hello</div>
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 0);
        });

        it('dont report used, with duplicate eslint-disable', () => {
            const code = `
                <template>
                    <!-- eslint-disable -->
                    <!-- eslint-disable-next-line san/no-duplicate-attributes, san/no-parsing-error -->
                    <div id id="a">Hello</div><!-- eslint-disable-line san/no-duplicate-attributes, san/no-parsing-error -->
                </template>
            `;
            const messages = linter.executeOnText(code, 'test.san').results[0].messages;

            assert.deepEqual(messages.length, 0);
        });
    });
});
