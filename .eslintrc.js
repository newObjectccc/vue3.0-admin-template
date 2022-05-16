module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'no-param-reassign': ['error', { props: false }],
    'import/no-unresolved': [
      2,
      { ignore: ['\\.css$', '\\.img$', '\\.gif$', '\\.png$', '\\.svg$'] }
    ],
    'import/no-extraneous-dependencies': ['error', { peerDependencies: true }]
  }
}
