module.exports = {
  'root': true,
  "parserOptions": {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },

  "env": {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'overrides': [

    {
      'files': [ '*.js' ],
      plugins: [
      ],

      'rules': {

        indent: [ 1, 2 ],
        'space-unary-ops': 1,
        semi: [ 1, 'never' ],
        'space-infix-ops': 1,
        'no-empty': 1,
        'no-empty-pattern': 1,
        'arrow-spacing': 1,
        'arrow-parens': 1,
        // 'no-unused-vars': 1,
        'no-prototype-builtins': 0,
        //
        //
        //
        //
        //
        'array-bracket-spacing': [ 1, 'always' ],
        'block-spacing': 1,
        'brace-style': 1,
        'comma-spacing': [ 2, { before: false, after: true } ],
        'space-in-parens': [ 1, 'always' ],
        'max-lines': 2,
        'max-params': 2,
        'no-tabs': 2,
        'no-whitespace-before-property': 2,
        'keyword-spacing': 1,
        'space-before-blocks': 1,
        'object-curly-spacing': [ 1, 'always' ],
        'no-multiple-empty-lines': [ 2, { max: 7 } ],
        'computed-property-spacing': [ 1, 'always' ],
        'arrow-body-style': 'error',
        'curly': 0,
        'eol-last': 'error',


        //
        //
        //
        //
        //
        'no-param-reassign': [ 2, { props: false } ],
        'complexity': 'off',
        'constructor-super': 'error',
        'eqeqeq': [
          'error',
          'smart'
        ],
        'guard-for-in': 'error',
        'id-blacklist': [
          'error',
          'any',
          'Number',
          'number',
          'String',
          'string',
          'Boolean',
          'boolean',
          'Undefined',
          'undefined'
        ],
        'id-match': 'error',
        'max-classes-per-file': 'off',
        'max-len': [
          'error',
          {
            'code': 108
          }
        ],
        'new-parens': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-cond-assign': 'error',

        'no-eval': 'error',
        'no-invalid-this': 'off',
        'no-new-wrappers': 'error',
        'no-shadow': [
          'error',
          {
            'hoist': 'all'
          }
        ],
        'no-throw-literal': 'error',
        'no-trailing-spaces': 1,
        'no-undef-init': 'error',
        'no-underscore-dangle': 0,
        'no-unsafe-finally': 'error',
        'no-unused-labels': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'one-var': [
          'error',
          'never'
        ],
        'prefer-const': 1,
        'radix': 'error',
        'space-before-function-paren': [
          'error',
          {
            'anonymous': 'always',
            'asyncArrow': 'always',
            'named': 'never'
          }
        ],
        'spaced-comment': [
          'error',
          'always',
          {
            'markers': [
              '/'
            ]
          }
        ],
        'use-isnan': 'error',
        'valid-typeof': 'off',

      }
    },

  ]
}
