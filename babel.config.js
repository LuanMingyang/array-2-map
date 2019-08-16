const presets = [
  [
    "@babel/env",
    {
      targets: {
        "esmodules": true,
        "node": true
      },
    },
  ],
];

module.exports = {
  presets
};
