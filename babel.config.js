module.exports = {
  presets: [
    ['@babel/env', { shippedProposals: true, modules: 'cjs' }],
    '@babel/typescript',
  ],
}
