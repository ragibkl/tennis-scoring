module.exports = {
  // plugins: ["@babel/plugin-transform-modules-commonjs"],
  presets: [
    // ["@babel/preset-typescript", { allExtensions: true }],
    ["@babel/env", { forceAllTransforms: true, shippedProposals: true }]
  ],
}
