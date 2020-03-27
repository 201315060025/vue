// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    //2 报错出现多余的空格; 1 警告出现多余的空格； 0 允许出现多余的空格
    "no-multi-spaces": 2,
    //[2, { max: * }] 报错出现空行大于*; [1, { max: * }] 警告出现空行大于*; [0, { max: * }] 允许出现空行大于*;
    "no-multiple-empty-lines": [2, { max: 1 }],
    //2 报错出现未使用的变量; 1 警告许出现未使用的变量; 0 允许出现未使用的变量
    "no-unused-vars": [2, { vars: "all", args: "after-used" }],
    //2 报错出现声明对象前后无空格; 1 警告许出现声明对象前后无空格; 0 允许出现声明对象前后无空格
    'object-curly-spacing': [2, "always"],
    //2 报错出现输出log语句; 1 警告许出现输出log语句; 0 允许出现输出log语句
    "no-console": 0,
    //2 报错出现变量名重复声明; 1 警告变量名重复声明; 0 允许出现变量名重复声明
    "no-redeclare": 0,
    // 2 报错出现未声明的变量; 1 警告未声明的变量; 0 允许出现未声明的变量  eg: name='test' or var name='test'
    'no-undef': 0,
    'eol-last': 0,
    'no-trailing-spaces': 0,
    'no-multiple-empty-lines': 0

  }
}
