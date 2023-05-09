'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-var-requires
const utils = require('eslint-plugin-vue/lib/utils')

function toPascalCase(str) {
  const words = str.match(/[a-z]+/gi)
  if (!words)
    return ''

  return words
    .map(word => {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
    })
    .join('')
}

function findDemoElement(node) {
  let el = null
  node.children.forEach(child => {
    if (child.children && child.children.length) {
      const r = findDemoElement(child)
      if (r)
        el = r
    }

    else {
      const r = child.type === 'VElement' && child.name.startsWith('demo')
      if (r)
        el = child
    }
  })

  return el
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'require valid demo SFC for "AppCardCode" component',
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
        const titleValue = prop_title.value.value

        const pascalCaseTitle = toPascalCase(titleValue)

        const demoNode = findDemoElement(node)
        const demoNodeSfcName = demoNode.rawName
        const pattern = new RegExp(`Demo[a-zA-z]+${pascalCaseTitle}`)
        const demoSfcMatch = demoNodeSfcName.search(pattern)

        if (demoSfcMatch !== 0) {
          context.report({
            node,
            loc: demoNode.loc,
            message: `Expected Demo SFC to match the pascal case value of title prop value. Expected: 'Demo[a-zA-Z]+${pascalCaseTitle}', Actual: '${demoNodeSfcName}'`,
          })
        }
      },
    })
  },
}
