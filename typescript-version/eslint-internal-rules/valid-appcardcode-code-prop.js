'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-var-requires
const utils = require('eslint-plugin-vue/lib/utils')

function toCamelCase(str) {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'require valid prop for "AppCardCode" component',
      categories: ['base'],
      url: 'https://eslint.vuejs.org/rules/require-component-is.html',
    },
    fixable: null,
    schema: [],
  },

  /** @param {RuleContext} context */
  create(context) {
    return utils.defineTemplateBodyVisitor(context, {
      /** @param {VElement} node */
      'VElement[name=\'appcardcode\']': function (node) {
        const prop_title = utils.getAttribute(node, 'title')
        const prop_code = utils.getDirective(node, 'bind', 'code')

        const titleValue = prop_title.value.value
        const demoCodeProperty = prop_code.value.expression.property.name

        const camelCasedTitle = toCamelCase(titleValue)

        if (camelCasedTitle !== demoCodeProperty) {
          context.report({
            node,
            loc: prop_code.value.expression.property.loc,
            message: `Expected 'code' prop value to match the camelcase value of title prop value. Expected: '${camelCasedTitle}', Actual: '${demoCodeProperty}'`,
          })
        }
      },
    })
  },
}
